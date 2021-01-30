import React, { Component } from "react";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import { socket } from "../../socketUtils";
import TextareaAutosize from 'react-textarea-autosize';
class ChatComposer extends Component {
  state = {
    messageBody: "",
  };

  handleInputChange = (e) => {
    socket.emit("typing");

    let updatedMessageBody = e.target.value;
    if (!this.state.messageBody) {
      updatedMessageBody = e.target.value.replace(/\s/g, '')
    }
    
    this.setState({ messageBody: updatedMessageBody });
  };

  sendMessage = (e) => {
    e.preventDefault();
    const { messageBody } = this.state;
    socket.emit("sender:message", messageBody);
    this.setState({ messageBody: "" });
  };

  handleKeypress = (e) => {
    const { messageBody } = this.state;
    
    if (e.which === 13 && !e.shiftKey && messageBody) {
      this.sendMessage(e);
    }
  };

  render() {
    const { classes } = this.props;
    const { messageBody } = this.state;

    return (
      <div className={classes.ChatComposerWrapper}>
        <div className={classes.chatComposerContent}>
          <TextareaAutosize
            autoFocus
            minRows={1}
            maxRows={3}
            placeholder={"Type a message..."}
            value={messageBody}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeypress}
            style={{
              padding: 0,
              fontFamily: 'Poppins',
              background: "none",
              border: "unset",
              width: "100%",
              borderRadius: 30,
              outline: "none",
              paddingLeft: 20,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              resize: "none",
              overflow: "auto",
              alignSelf: "center"
            }}
          />
        </div>
        <div className={classes.chatComposerIcons}>
          <IconButton
            disabled={!messageBody}
            onClick={this.sendMessage}
            className={classes.chatComposerSend}
          >
            <SendIcon />
          </IconButton>
          <IconButton>
            <SentimentVerySatisfiedIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

{
  /* <textarea
            style={{
              width: "100%",
              borderRadius: 30,
              outline: "none",
              paddingLeft: 20,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              resize: "none",
              overflow: "auto",
            }}
            autoFocus={true}
            type="text"
            placeholder={"Type a message..."}
            value={messageBody}
            onChange={this.handleInputChange}
          /> */
}

export default ChatComposer;
