import { StyleSheet } from 'react-native';

export interface ThemeColors {
  primary: string;
  text: string;
  textSecondary: string;
  background: string;
  cardBackground: string;
  buttonTextColor: string;
}

// export const colors: ThemeColors = {
//   primary: '#5856D6',
//   text: 'black',
//   textSecondary: 'black',

//   background: '#F3F2F7',
//   cardBackground: 'white',
//   buttonTextColor: 'white',
// };

export const lightColors: ThemeColors = {
  primary: '#5856D6',
  text: '#000000',
  textSecondary: '#aaaaaa',

  background: '#F3F2F7',
  cardBackground: 'white',
  buttonTextColor: 'white',
};

export const darkColors: ThemeColors = {
  primary: '#5856D6',
  text: '#ffffff',
  textSecondary: '#999999',

  background: '#090909',
  cardBackground: '#2d2d2d',
  buttonTextColor: 'white',
};

export const globalStyles = StyleSheet.create({
  title: {
    // color: colors.text,
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    // color: colors.text,
    fontSize: 20,
    fontWeight: 'bold',
  },

  input: {
    // borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    borderWidth: 1,
    // color: colors.text,
    height: 40,
    margin: 12,
    padding: 10,
  },

  mainContainer: {
    // backgroundColor: colors.background,
    flex: 1,
  },
  globalMargin: {
    flex: 1,
    paddingHorizontal: 20,
  },

  btnPrimary: {
    alignItems: 'center',
    // backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
  },
  btnPrimaryText: {
    // color: colors.text,
    fontSize: 16,
  },
});
