const fontSizes = {
  small: '2vw',
  normal: '3vw',
  large: '4.2vw',
  title: '4.6vw',
};

const colors = {
    black: "#222222",
    white: "#FFFFFF",
    yellow: "#ffec40",
    red: "#FF5A3D",
    green:"#42DF87",
};
  
const deviceSizes = {
    XL: "600",
    L: "480",
    M: "376",
    S: "320"
};

const device = {
  XL: `only screen and (max-width: ${deviceSizes.XL}px)`,
  L: `only screen and (max-width: ${deviceSizes.L}px)`,
  M: `only screen and (max-width: ${deviceSizes.M}px)`,
  S: `only screen and (max-width: ${deviceSizes.S}px)`,
};

const theme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
};

export default theme;