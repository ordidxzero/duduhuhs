// Default Theme
// step 1
//  Components, Screens

import { StyleSheet } from 'react-native';

export type CustomTheme = {
  components: {
    input: {
      theme: {
        container: {
          backgroundColor: string;
        };
      };
    };
    navigationButton: {
      theme: {
        container: {
          backgroundColor: string;
        };
        text: {
          color: string;
        };
      };
    };
  };
  screens: {};
};

export const defaultTheme: CustomTheme = {
  components: {
    input: {
      theme: StyleSheet.create({
        container: {
          backgroundColor: '#dfe6e9',
        },
      }),
    },
    navigationButton: {
      theme: StyleSheet.create({
        container: {
          backgroundColor: '#2ecc71',
        },
        text: {
          color: 'white',
        },
      }),
    },
  },
  screens: {},
};

// DarkMode Theme

export const darkModeTheme = {
  components: {},
  screens: {},
};
