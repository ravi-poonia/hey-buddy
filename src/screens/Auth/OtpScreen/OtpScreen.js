import React, { Component } from 'react';
import { Alert, TouchableOpacity, Animated, Image, Text, View } from 'react-native';
import { authRef } from '../../../services/firebase';
import CodeFiled from 'react-native-confirmation-code-field';
import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from './styles';
import { AppLoading } from '../../../components/AppLoading';

const codeLength = 6;

const source = {
  uri:
    'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
};

export default class OtpScreen extends Component {

  constructor(props) {
    super(props);
    this.sendOtp();
    this.state = {
      loading: false,
    };
  }

  sendOtp = () => {
    const { navigation, signup } = this.props;
    const phoneNumber = navigation.getParam('phoneNumber');
    const data = navigation.getParam('data');
    this.verifyPhone(phoneNumber);
    authRef.onAuthStateChanged(user => {
      if (user) {
        signup(data, navigation);
      }
    });
  }

  verifyPhone = (phoneNumber) => {
    authRef.signInWithPhoneNumber(`+91${phoneNumber}`)
      .then((confirmResult) => {
        this.setState({ confirmResult });
      })
      .catch((error) => {
        const { code, message } = error;
        console.log('-----> code, message', code, message);
      });
  }

  onFinishCheckingCode = async code => {
    const { confirmResult } = this.state;
    const { navigation } = this.props;
    const data = navigation.getParam('data');

    this.setState({ code });

    confirmResult.confirm(code)
      .then(() => {
        this.props.signup(data, navigation);
      })
      .catch((e) => {
        console.log('---->error', e); // Invalid code
        Alert.alert(
          'Confirmation Code',
          'Code not match! Try Again',
          [{
            text: 'OK',
            onPress: () => {
              const { current } = this.inputRef;
              if (current) {
                current.clear();
              }
            },
          }],
          { cancelable: false },
        );
      });
  }

  _animationsColor = [...new Array(codeLength)].map(
    () => new Animated.Value(0),
  );
  _animationsScale = [...new Array(codeLength)].map(
    () => new Animated.Value(1),
  );

  animateCell({ hasValue, index, isFocused }) {
    Animated.parallel([
      Animated.timing(this._animationsColor[index], {
        toValue: isFocused ? 1 : 0,
        duration: 250,
      }),
      Animated.spring(this._animationsScale[index], {
        toValue: hasValue ? 0 : 1,
        duration: hasValue ? 300 : 250,
      }),
    ]).start();
  }

  cellProps = ({ hasValue, index, isFocused }) => {
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? this._animationsScale[index].interpolate({
          inputRange: [0, 1],
          outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
        })
        : this._animationsColor[index].interpolate({
          inputRange: [0, 1],
          outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
        }),
      borderRadius: this._animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: this._animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      this.animateCell({ hasValue, index, isFocused });
    }, 0);

    return {
      style: [styles.input, animatedCellStyle],
    };
  };

  containerProps = { style: styles.inputWrapStyle };

  render() {
    const { code } = this.state;
    const { loading, navigation, errorMessage } = this.props;
    const phoneNumber = navigation.getParam('phoneNumber');

    return (
      <View style={styles.inputWrapper}>
        <AppLoading isVisible={loading} />
        <Text style={styles.inputLabel}>OTP Verification</Text>
        <Image style={styles.icon} source={source} />
        <Text style={styles.inputSubLabel}>
          {`Please enter the verification code\nsend to +91 ${phoneNumber}`}
        </Text>
        <Text style={styles.error}>
          {errorMessage}
        </Text>
        <CodeFiled
          ref={this.inputRef}
          maskSymbol=" "
          variant="clear"
          codeLength={codeLength}
          keyboardType="numeric"
          cellProps={this.cellProps}
          containerProps={this.containerProps}
          onFulfill={this.onFinishCheckingCode}
          CellComponent={Animated.Text}
        />
        <View style={styles.footer}>
          <Text >
            {"didn't get Otp? "}
          </Text>
          <TouchableOpacity onPress={this.sendOtp}>
            <Text style={styles.linkText}>
              resend Otp
          </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity disabled={!code} style={code ? styles.nextButton : styles.disabled}>
          <Text style={styles.nextButtonText}>Verify</Text>
        </TouchableOpacity>
      </View >
    );
  }
}
