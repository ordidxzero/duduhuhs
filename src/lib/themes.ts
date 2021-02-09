import { StyleSheet } from 'react-native';
import {
  CHAT_FORM_BACKGROUND_COLOR,
  CHAT_FORM_SUBMIT_BACKGROUND_COLOR,
  CHAT_SAFE_AREA_VIEW_BACKGROUND_COLOR,
  INPUT_BACKGROUND_COLOR,
  NAVIGATION_BUTTON_BACKGROUND_COLOR,
  NAVIGATION_BUTTON_TEXT_COLOR,
  SPACER_BOTTOM_BACKGROUND_COLOR,
  STATUS_BAR_BACKGROUND_COLOR,
} from './color.constant';

export type CustomTheme = {
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
  chatSafeAreaView: {
    theme: {
      container: {
        backgroundColor: string;
      };
    };
  };
  statusBar: {
    theme: {
      container: {
        backgroundColor: string;
      };
    };
  };
  spacer: {
    theme: {
      bottomSpacer: {
        backgroundColor: string;
      };
    };
  };
  chatForm: {
    theme: {
      container: {
        backgroundColor: string;
      };
      chatSubmit: {
        backgroundColor: string;
      };
    };
  };
};

// Default Theme
export const defaultTheme: CustomTheme = {
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
  chatSafeAreaView: {
    theme: StyleSheet.create({
      container: {
        backgroundColor: CHAT_SAFE_AREA_VIEW_BACKGROUND_COLOR,
      },
    }),
  },
  statusBar: {
    theme: StyleSheet.create({
      container: {
        backgroundColor: STATUS_BAR_BACKGROUND_COLOR,
      },
    }),
  },
  spacer: {
    theme: StyleSheet.create({
      bottomSpacer: {
        backgroundColor: SPACER_BOTTOM_BACKGROUND_COLOR,
      },
    }),
  },
  chatForm: {
    theme: StyleSheet.create({
      container: {
        backgroundColor: CHAT_FORM_BACKGROUND_COLOR,
      },
      chatSubmit: {
        backgroundColor: CHAT_FORM_SUBMIT_BACKGROUND_COLOR,
      },
    }),
  },
};

// DarkMode Theme
export const darkModeTheme: CustomTheme = {
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
  chatSafeAreaView: {
    theme: StyleSheet.create({
      container: {
        backgroundColor: CHAT_SAFE_AREA_VIEW_BACKGROUND_COLOR,
      },
    }),
  },
  statusBar: {
    theme: StyleSheet.create({
      container: {
        backgroundColor: STATUS_BAR_BACKGROUND_COLOR,
      },
    }),
  },
  spacer: {
    theme: StyleSheet.create({
      bottomSpacer: {
        backgroundColor: SPACER_BOTTOM_BACKGROUND_COLOR,
      },
    }),
  },
  chatForm: {
    theme: StyleSheet.create({
      container: {
        backgroundColor: CHAT_FORM_BACKGROUND_COLOR,
      },
      chatSubmit: {
        backgroundColor: CHAT_FORM_SUBMIT_BACKGROUND_COLOR,
      },
    }),
  },
};
