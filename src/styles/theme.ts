const colors = {
  //Basic
  //기본 색상으로 텍스트, 배경 등에 사용.
  basic: {
    black: "#000000",
    white: "#ffffff",
  },

  //GrayScale
  //기본 색상으로 텍스트, 배경등에 사용.
  grayScale: {
    gray_01: "#212121",
    gray_02: "#616161",
    gray_03: "#888888",
    gray_04: "#cccccc",
    gray_05: "#eeeeee",
    gray_06: "#f5f5f5",
  },

  //Primary
  //브랜드 컬러로 강조, 활성, 긍정 등을 표현할 때 사용
  primary: {
    primary_01: "#7471ff",
    primary_02: "#cecbef",
    primary_03: "#8148fb",
  },

  //Secondary
  //프라이머리 컬러를 보조하며 주목도가 높아야 하는 요소애 한해 부분적으로 사용.
  secondary: {
    secondary_01: "#24dbaf",
    secondary_02: "#cdf3ea",
  },
};

const fonts = {
  family: {
    base: `'Spoqa Han Sans Neo'`,
  },
  size: {
    xs: "11px",
    sm: "13px",
    md: "15px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
    xxxl: "28px",
  },
  weight: {
    normal: 500,
    bold: 700,
  },
  lineheight: {
    xs: "14px",
    sm: "18px",
    md: "21px",
    lg: "24px",
    xl: "26px",
    xxl: "34px",
    xxxl: "38px",
  },
};

// 테마와 관련없이 공통으로 사용되는 변수들
export const defalutTheme = {
  colors,
  fonts,
};
