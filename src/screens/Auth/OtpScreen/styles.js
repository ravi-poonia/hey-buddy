import { StyleSheet, Platform } from 'react-native';
import colors from '../../../styles/colors';

export const CELL_SIZE = 40;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = colors.primary;
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

export default StyleSheet.create({
  inputWrapper: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },

  inputLabel: {
    paddingTop: 50,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },

  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  inputSubLabel: {
    paddingTop: 30,
    color: '#000',
    textAlign: 'center',
  },
  error: {
    paddingTop: 15,
    color: 'red',
    textAlign: 'center',
  },
  inputWrapStyle: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },

  input: {
    margin: 0,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: 35,
    ...Platform.select({
      web: {
        lineHeight: 65,
      },
    }),
    fontSize: 25,
    borderRadius: CELL_BORDER_RADIUS,
    color: colors.primary,
    backgroundColor: '#fff',

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },
  footer: {
    flexDirection: 'row',
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  linkText: {
    fontWeight: 'bold',
  },
  nextButton: {
    marginTop: 40,
    borderRadius: 80,
    minHeight: 60,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    flex: 1,
    marginBottom: 100,
  },
  disabled: {
    marginTop: 40,
    borderRadius: 80,
    minHeight: 60,
    backgroundColor: 'rgba(16, 52, 166,0.4)',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 100,
  },

  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
});
