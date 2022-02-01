import { DefaultTheme } from "styled-components";

export const whiteTheme: DefaultTheme = {
  backgroundColor: "#ffffff",
  textColor: "#111111",
  accentColor: "#FF6600",
  header: {
    logo: "image/DarkLogo.png",
    themeBtn: "image/toDarkTheme.png",
    textTitle: "#505050",
  },
  nav: {
    text: "#767676",
    line: "#F0F0F6",
  },
  totalRank: {
    backrgoundColor: "#F2F3F7",
    swiperNoActive: "#E5E5EC",
    background:
      "background: linear-gradient(158.71deg, #E8EBF2 2.84%, #F2F3F7 97.53%);",
  },
  listTop: {
    text: "#999999",
  },
  listItem: {
    backgroundColor: "#FFFFFF",
    line: "#F0F0F6",
    textAuthor: "#767676",
    textComment: "#505050",
    btnComment: "image/darkPoint.png",
    btnPoint: "image/darkComment.png",
    shadow: "0px 2px 12px rgba(0, 0, 0, 0.08)",
  },
  textMenuColor: "#999999",
  textAuthorColor: "#767676",
  textCommentColor: "#505050",
  listColor: "#F0F0F6",
};

export const darkTheme: DefaultTheme = {
  backgroundColor: "#222325",
  textColor: "#ffffff",
  accentColor: "#f15e2f",
  header: {
    logo: "image/WhiteLogo.png",
    themeBtn: "image/toWhiteTheme.png",
    textTitle: "#CFCFCF",
  },
  nav: {
    text: "#999999",
    line: "#404040",
  },
  totalRank: {
    backrgoundColor: "#35393F",
    swiperNoActive: "#2D2D2E",
    background: "linear-gradient(158.53deg, #31353C 5.38%, #35393F 95.04%)",
  },
  listTop: {
    text: "#767676",
  },
  listItem: {
    backgroundColor: "#2F3235",
    line: "#404040",
    textAuthor: "#999999",
    textComment: "#CFCFCF",
    btnComment: "image/whitePoint.png",
    btnPoint: "image/whiteComment.png",
    shadow: "0px 2px 16px rgba(0, 0, 0, 0.2)",
  },
  textMenuColor: "#999999",
  textAuthorColor: "#919191",
  textCommentColor: "#CFCFCF",
  listColor: "#F0F0F6",
};
