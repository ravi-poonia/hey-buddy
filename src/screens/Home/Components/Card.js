import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../styles';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import Feather from 'react-native-vector-icons/dist/Feather';


export default class Card extends Component {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <View style={styles.leftHeader}>
            <View style={styles.avatarContainer}>
              <Image
                source={require('./../../../assets/images/loginButton.png')}
                style={styles.avatar} />
            </View>
            <View style={styles.labelContainer}>
              <Text>
                Nichole Tappan
              </Text>
              <Text>
                3 Nov at 6:30 PM
              </Text>
            </View>
          </View>
          <View style={styles.rightHeader}>
            <Menu
              ref={this.setMenuRef}
              button={
                <TouchableOpacity style={styles.menuIcon} onPress={this.showMenu}>
                  <Entypo name="dots-three-vertical" size={20} />
                </TouchableOpacity>
              }>
              <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
              <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
              <MenuItem onPress={this.hideMenu} disabled>
                Menu item 3
              </MenuItem>
              <MenuDivider />
              <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
            </Menu>
          </View>
        </View>
        <View style={styles.cardBody}>
          <Image
            source={require('./../../../assets/images/login-background.png')}
            style={styles.bodyImage} />
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.captionContainer}>
            <Text>Tech</Text>
          </View>
          <View style={styles.footerBottomContainer}>
            <View style={styles.iconContainer}>
              <TouchableOpacity style={styles.icon}>
                {/* <Ionicons name={'ios-heart-empty'} size={20} color="red" /> */}
                <Ionicons name={'ios-heart'} size={30} color="red" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.comment}>
                {/* <Ionicons name={'ios-heart-empty'} size={20} color="red" /> */}
                <Fontisto name={'comment'} size={25} />
                <Text style={styles.commentText}>20</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                {/* <Ionicons name={'ios-heart-empty'} size={20} color="red" /> */}
                <EvilIcons name={'share-google'} size={40} />
              </TouchableOpacity>
            </View>
            <View style={styles.footerRight}>
              <Ionicons name={'ios-heart'} size={20} color="red" />
              <Text style={styles.commentText}>237</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    borderWidth: 1,
  },
  cardHeader: {
    height: 55,
    paddingHorizontal: 10,
    paddingVertical: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftHeader: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  avatarContainer: {
    borderRadius: 100,
  },
  avatar: {
    height: 45,
    width: 45,
  },
  labelContainer: {
    paddingLeft: 10,
  },
  menuIcon: {
    padding: 10,
    borderRadius: 50,
  },
  cardBody: {
    height: 220,
  },
  bodyImage: {
    width: '100%',
    height: '100%',
  },
  cardFooter: {
  },
  captionContainer: {
    minHeight: 35,
    paddingHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
  },
  footerBottomContainer: {
    display: 'flex',
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 20,
  },
  comment: {
    marginRight: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commentText: {
    marginLeft: 5,
  },
  footerRight: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
