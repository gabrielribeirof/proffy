export const themes = {
  light: {
    primary: {
      light: '#9871F5',
      lighter: '#8257E5',
      dark: '#774DD6',
      darker: '#6842C2',
    },
    secondary: {
      light: '#04d369',
      lighter: '#04bf58',
    },
    background: '#F0F0F7',
    red: '#E33D3D',
    text: {
      title: '#32264D',
      base: '#6A6180',
      complement: '#9C98A6',
      title_purple: '#FFFFFF',
      base_purple: '#D4C2FF',
      complement_purple: '#A380F6',
    },
    line: {
      white: '#E6E6F0',
    },
    box: {
      base: '#FFFFFF',
      footer: '#FAFAFC',
    },
    button: {
      text: '#FFFFFF',
      disable: '#DCDCE5',
    },
    input: {
      background: '#F8F8FC',
    },
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light;
