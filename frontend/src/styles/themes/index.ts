export const Light = {
  title: 'light',
  colors: {
    background: '#F0F0F5',
    fontColor: 'black',
    headerColor: '#0D1117',
    headerFontColor: 'white',
    trBackGroundColor: '#d8d4d4',
  },
};

export const Dark = {
  title: 'dark',
  colors: {
    background: '#111a27',
    fontColor: 'white',
    headerColor: '#F0F0F5',
    headerFontColor: 'black',
    trBackGroundColor: '#424c5a',
  },
};

export type Theme = typeof Light;
