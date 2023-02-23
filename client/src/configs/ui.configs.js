const uiConfigs = {
  style: {
    gradientBgImage: {
      dark: {
        backgroundImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)",
      },
      light: {
        backgroundImage:
          "linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0)",
      },
    },
    horizontalGradienBgImage: {
      dark: {
        backgroundImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)",
      },
      light: {
        backgroundImage:
          "linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0)",
      },
      typeLines: (lines, textAlign) => ({
        textAlign: textAlign || "justify",
        display: "-webkit-box",
        overflow: "hidden",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: lines,
      }),
      mainContent: {
        maxWidth: "1336px",
        margin: "auto",
        padding: 2,
      },
      backgroundImage: (imgPath) => ({
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "darkgrey",
        backgroundImage: `url(${imgPath})`,
      }),
    },
    size: {
      sizebarWith: "300px",
      contentMaxWidth: "1366px",
    },
  },
};

export default uiConfigs;
