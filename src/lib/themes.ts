import { StyleSheet } from 'react-native';
import {
  CHAT_FORM_BACKGROUND_COLOR,
  CHAT_FORM_DARK_BACKGROUND_COLOR,
  CHAT_FORM_SUBMIT_BACKGROUND_COLOR,
  CHAT_FORM_SUBMIT_DARK_BACKGROUND_COLOR,
  CHAT_SAFE_AREA_VIEW_BACKGROUND_COLOR,
  CHAT_SAFE_AREA_VIEW_DARK_BACKGROUND_COLOR,
  CUSTOM_SAFE_AREA_VIEW_BACKGROUND_COLOR,
  CUSTOM_SAFE_AREA_VIEW_DARK_BACKGROUND_COLOR,
  HEADER_TEXT_COLOR,
  HEADER_TEXT_DARK_COLOR,
  INPUT_BACKGROUND_COLOR,
  INPUT_DARK_BACKGROUND_COLOR,
  MESSAGE_ME_BACKGROUND_COLOR,
  MESSAGE_PARTNER_BACKGROUND_COLOR,
  MESSAGE_PARTNER_DARK_BACKGROUND_COLOR,
  MESSAGE_PARTNER_TEXT_DARK_COLOR,
  MESSAGE_TEXT_COLOR,
  NAVIGATION_BUTTON_BACKGROUND_COLOR,
  NAVIGATION_BUTTON_TEXT_COLOR,
  SPACER_BOTTOM_BACKGROUND_COLOR,
  SPACER_BOTTOM_DARK_BACKGROUND_COLOR,
  STATUS_BAR_BACKGROUND_COLOR,
  STATUS_BAR_DARK_BACKGROUND_COLOR,
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
  customSafeAreaView: {
    theme: {
      container: {
        backgroundColor: string;
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
      headerText: {
        color: string;
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
  message: {
    theme: {
      partnerBox: {
        backgroundColor: string;
      };
      myBox: {
        backgroundColor: string;
      };
      partnerText: {
        color: string;
      };
      myText: {
        color: string;
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
  customSafeAreaView: {
    theme: StyleSheet.create({
      container: {
        backgroundColor: CUSTOM_SAFE_AREA_VIEW_BACKGROUND_COLOR,
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
      headerText: {
        color: HEADER_TEXT_COLOR,
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
  message: {
    theme: StyleSheet.create({
      myBox: {
        backgroundColor: MESSAGE_ME_BACKGROUND_COLOR,
      },
      partnerBox: {
        backgroundColor: MESSAGE_PARTNER_BACKGROUND_COLOR,
      },
      myText: {
        color: MESSAGE_TEXT_COLOR,
      },
      partnerText: {
        color: MESSAGE_TEXT_COLOR,
      },
    }),
  },
};

// DarkMode Theme
export const darkModeTheme: CustomTheme = {
  input: {
    theme: StyleSheet.create({
      container: {
        backgroundColor: INPUT_DARK_BACKGROUND_COLOR,
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
  customSafeAreaView: {
    theme: StyleSheet.create({
      container: {
        backgroundColor: CUSTOM_SAFE_AREA_VIEW_DARK_BACKGROUND_COLOR,
      },
    }),
  },
  chatSafeAreaView: {
    theme: StyleSheet.create({
      container: {
        backgroundColor: CHAT_SAFE_AREA_VIEW_DARK_BACKGROUND_COLOR,
      },
    }),
  },
  statusBar: {
    theme: StyleSheet.create({
      container: {
        backgroundColor: STATUS_BAR_DARK_BACKGROUND_COLOR,
      },
      headerText: {
        color: HEADER_TEXT_DARK_COLOR,
      },
    }),
  },
  spacer: {
    theme: StyleSheet.create({
      bottomSpacer: {
        backgroundColor: SPACER_BOTTOM_DARK_BACKGROUND_COLOR,
      },
    }),
  },
  chatForm: {
    theme: StyleSheet.create({
      container: {
        backgroundColor: CHAT_FORM_DARK_BACKGROUND_COLOR,
      },
      chatSubmit: {
        backgroundColor: CHAT_FORM_SUBMIT_DARK_BACKGROUND_COLOR,
      },
    }),
  },
  message: {
    theme: StyleSheet.create({
      myBox: {
        backgroundColor: MESSAGE_ME_BACKGROUND_COLOR,
      },
      partnerBox: {
        backgroundColor: MESSAGE_PARTNER_DARK_BACKGROUND_COLOR,
      },
      myText: {
        color: MESSAGE_TEXT_COLOR,
      },
      partnerText: {
        color: MESSAGE_PARTNER_TEXT_DARK_COLOR,
      },
    }),
  },
};
