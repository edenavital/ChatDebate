import React, { Component } from "react";
import ChatHeader from "./ChatHeader";
import MessageBox from "./MessageBox";
import ChatComposer from "./ChatComposer";
import Loader from "../../components/Loader";
import { socket } from "../../socketUtils";
import ChatDrawer from "./ChatDrawer";
import { ROUTERPATHS } from "../../constants";
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typingString: "",
      loading: true,
      messages: [],
      sender_name: "",
      isDrawerOpen: true,
    };

    //Data is array of objects [{id,name}]
    socket.on("match", (data) => {
      console.log("match - data", data);
        let updatedMessages = [];
        updatedMessages.push({
          sender: data.name,
          body: data.body,
          uniqueMessageId: "initial_message",
          msg_type: data.msg_type
        });

        this.setState({
          loading: false,
          messages: updatedMessages,
          sender_name: data.sender_name,
        });
      
    });

    socket.on("typing", ({ sender: { id, name }, body }) => {
      const { activeId } = this.props;
      if (id !== activeId) {
        this.setState((prevState) => ({
          ...prevState,
          typingString: body,
        }));
      }
    });

    socket.on("stop-typing", ({ sender: { id, name }, body }) => {
      const { activeId } = this.props;
      if (id !== activeId) {
        this.setState((prevState) => ({ ...prevState, typingString: "" }));
      }
    });
  }

  setMessages = (newMessage) => {
    const updatedMessages = [...this.state.messages]
    updatedMessages.push(newMessage)
    this.setState({ messages: updatedMessages });
  };

  toggleDrawer = () => {
    this.setState((prevState) => ({
      ...prevState,
      isDrawerOpen: !this.state.isDrawerOpen,
    }));
  };

  componentDidMount() {
    this.props.setNavBar(false);
  }

  moveToRoot = () => {
    const { history, setSide, setNavBar } = this.props;
    socket.disconnect(); 
    history.push(ROUTERPATHS.ROOT);
    setNavBar(true);
    setSide("");    
  };

  render() {
    const { classes, nickname, side, history, setSide, activeId } = this.props;
    const {
      typingString,
      loading,
      messages,
      sender_name,
      isDrawerOpen,
    } = this.state;

    const contentStyle = {
      transition: "margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)",
    };

    if (this.state.isDrawerOpen) {
      contentStyle.marginLeft = 300;
    }

    return (
      <div className={classes.chatWrapper}>
        {loading && <Loader label={"Searching for an opponent ..."} />}
        <div
          style={{
            contentStyle,
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginRight: isDrawerOpen ? "300px" : "0px",
          }}
        >
          <ChatHeader
            classes={classes}
            nickname={nickname}
            side={side}
            typingString={typingString}
            history={history}
            setSide={setSide}
            sender_name={sender_name}
            toggleDrawer={this.toggleDrawer}
          />
          <MessageBox
            classes={classes}
            nickname={nickname}
            side={side}
            messages={messages}
            setMessages={this.setMessages}
            activeId={activeId}
          />
          <ChatComposer
            classes={classes}
            nickname={nickname}
            side={side}
            typingString={typingString}
          />
        </div>
        <ChatDrawer
          classes={classes}
          isDrawerOpen={isDrawerOpen}
          toggleDrawer={this.toggleDrawer}
          moveToRoot={this.moveToRoot}
          setNavBar={this.props.setNavBar}
        />
      </div>
    );
  }
}

export default Chat;
