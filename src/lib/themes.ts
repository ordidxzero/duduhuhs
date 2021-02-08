// Default Theme
// step 1
//  Components, Screens

import { StyleSheet } from 'react-native';
import { INPUT_BACKGROUND_COLOR, NAVIGATION_BUTTON_BACKGROUND_COLOR, NAVIGATION_BUTTON_TEXT_COLOR } from './color.constant';

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
          backgroundColor: INPUT_BACKGROUND_COLOR,
        },
      }),
    },
    navigationButton: {
      theme: StyleSheet.create({
        container: {
          backgroundColor: NAVIGATION_BUTTON_BACKGROUND_COLOR,
        },
        text: {
          color: NAVIGATION_BUTTON_TEXT_COLOR,
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
