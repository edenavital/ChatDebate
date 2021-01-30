import { requirePropFactory } from "@material-ui/core";

const useStyles = (theme) => ({
  // myCustomClass: {
  //   color: theme.status.danger,
  //   fontSize: 40,
  // },
  appWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    height: "100%",
    width: "100%",
    overflowX: "hidden",
  },

  // About.js
  aboutWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 30%",

    "& p": {
      marginTop: 10,
    },
  },
  //ChatAs.js
  chatAsWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      `url(` + require(`../assets/backgrounds/AmericanFlag.jpg`) + `)`,
    backgroundRepeat: "no-repeat",
    // backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    height: "100%",
    width: "100%",
  },
  chatAsContent: {
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 15px 30px 15px",
    borderRadius: 25,
    border: "2px solid #00000075",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",

    "& p": {
      // color: "#fff"
    },
    "&:placeholder": {
      textOverflow: "ellipsis !important",
      color: "blue",
    },
  },
  textInput: {
    width: 250,
  },
  chatAsTitle: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 20,
  },
  chatAsCardsWrapper: {
    display: "flex",
    marginTop: 25,
  },
  chatAsLeft: {
    "&:hover": {
      background: "#0278ae",
      color: "#fff",
    },
  },
  chatAsRight: {
    "&:hover": {
      background: "#bb2205",
      color: "#fff",
    },
  },
  chatAsSelected: {
    color: "red",
  },
  chatAsCard: {
    width: 150,
    height: 100,
    WebkitTransition: "all .3s",
    transition: "all .3s",
    cursor: "pointer",
    position: "relative",
    zIndex: 5,
    boxShadow: "0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24)",
    borderRadius: 10,
    margin: "10px 30px",
    fontSize: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      transform: "translate3d(0,-5px,0)",
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    },
  },
  chatAsCardLeft: {
    "&:hover": {
      color: "red",
    },
  },
  chatAsCardRight: {
    "&:hover": {
      color: "blue",
    },
  },
  // Chat.js
  chatWrapper: {
    height: "inherit",
    width: "inherit",
    display: "flex",
  },
  // Header.js
  headerWrapper: {
    display: "flex",
    padding: "0px 20px",
    alignItems: "center",
    minHeight: 56,
    maxHeight: 56,
    width: "100%",
    borderBottom: `1px solid ${theme.border.primary}`,
  },
  headerAvatar: {
    width: 35,
    height: 35,
  },
  headerContent: {
    paddingLeft: 10,
  },
  // MessageBox.js
  messageBoxWrapper: {
    borderBottom: "1px solid lightgrey",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    height: "calc(100% - 51px)",
    position: "relative",
    zIndex: 10,
    backgroundImage:
      `url(` + require(`../assets/backgrounds/RepsVsDemsBg.jpg`) + `)`,
    backgroundRepeat: "no-repeat",
    // backgroundAttachment: "fixed",
    backgroundSize: "cover",
    // backgroundPosition: "50%",
  },
  messageWrapper: {
    margin: "5px 5px 5px 10px",
    display: "flex",
    width: "max-content",
    zIndex: 10,
    alignItems: "center",
    padding: "10px 20px 10px 20px",
    borderRadius: "20px 20px 20px 0px",
    background: "#51b9ff",
    color: "#fff",
    border: "1px solid #2fabff",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    whiteSpace: "break-spaces"
  },
  messageRightSide: {
    marginLeft: "auto",
    borderRadius: "20px 20px 0px 20px",
    background: "#EEEEEE",
    color: "black",
    border: "1px solid #c2c2c2"
  },
  systemMessage: {
    margin: "auto",
    flexDirection: "column",
    display: 'flex',
    padding: "10px 30px 10px 34px",
    background: "#ffffff",
    border: "1px solid lightgrey",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    width: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    "& p": {
      marginTop: 10
    }
  },
  // ChatComposer
  ChatComposerWrapper: {
    width: "100%",
    minHeight: 0,
    maxHeight: 100,
    borderTop: `1px solid ${theme.border.primary}`,
    background: "lightgrey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 10,
  },
  chatComposerContent: {
    display: "flex",
    background: "white",
    width: "100%",
    minHeight: 35,
    maxHeight: 100,
    borderRadius: 25,
    margin: 10,
  },
  chatComposerIcons: {
    display: "flex",
    margin: "0px 5px",
    "& button": {
      width: 40,
      height: 40,
    },
  },
  chatComposerSend: {
    transition: "0.3s all",
    color: "blue",
  },
  // NavBar
  navBarWrapper: {
    paddingLeft: 20,
    // position: "fixed",
    // top: 0,
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 50,
    background: "grey",
  },
  navBarToolbar: {
    top: 0,
  },
  navItem: {
    cursor: "pointer",
    paddingLeft: 20,
  },

  // ChatDrawer
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 5px",
    height: 56
  },
  // Notes
  notesDrawer: {
    width: 300,
  },
});

export default useStyles;
