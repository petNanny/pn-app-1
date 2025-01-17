const buttonStyles = {
  variants: {
    navbarIconBtn: {
      bg: "transparent",
      color: "white",
      fontSize: "xl",
      _hover: { bg: "brand.primaryLight" },
      size: "sm",
    },
    shareBtn: {
      bg: "brand.secondary",
      color: "white",
      size: "lg",
      fontSize: "lg",
      fontWeights: "bold",
      lineHeights: "22",
      borderRadius: "6px",
      _hover: {
        bg: "brand.secondary",
        opacity: "0.60",
        _disabled: {
          bg: "brand.secondary",
          opacity: "0.60",
        },
      },
      _active: { bg: "brand.secondary", opacity: "0.60" },
      _disabled: {
        bg: "brand.secondary",
        opacity: "0.60",
      },
    },
    failedBtn: {
      bg: "red.500",
      color: "white",
      size: "lg",
      fontSize: "lg",
      fontWeights: "bold",
      lineHeights: "22",
      _hover: { bg: "red.500", opacity: "0.60" },
      _active: { bg: "red.500", opacity: "0.60" },
    },
    witheBackgroundIconBtn: {
      bg: "transparent",
      color: "white",
      fontSize: "xl",
      _hover: { bg: "fontcolor.quaternary", opacity: "0.60" },
      size: "sm",
    },
    loginBtn: {
      bg: "white",
      border: "1px",
      borderColor: "brand.secondary",
      color: "fontcolor.secondary",
      size: "lg",
      fontSize: "16px",
      fontWeights: "bold",
      lineHeights: "40",
      _hover: { bg: "button.hover" },
      _active: { bg: "button.active" },
    },
    displayBtn: {
      bg: "white",
      border: "1px",
      borderColor: "background.primary",
      color: "#2C4E8A",
      _hover: { bg: "#2C4E8A", opacity: "0.60", color: "white" },
      _active: { bg: "#2C4E8A", opacity: "0.60" },
    },
    deleteBtn: {
      bg: "#C13D46",
      color: "white",
      _hover: { bg: "#C13D46", opacity: "0.60" },
      _active: { bg: "#C13D46", opacity: "0.60" },
    },
    deleteIconBtn: {
      bg: "background.darkRed",
      color: "white",
      _hover: { bg: "red.500", opacity: "0.60" },
      _active: { bg: "red.500", opacity: "0.60" },
    },
  },
};

export default buttonStyles;
