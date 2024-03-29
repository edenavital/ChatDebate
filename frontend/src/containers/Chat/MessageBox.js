import React, { Component } from "react";
import Message from "./Message";
import scrollIntoView from "scroll-into-view-if-needed";
import { socket } from "../../socketUtils";
class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldScrollBottom: true,
    };

    this.messageBoxBottom = React.createRef();
  }

  componentDidMount() {
    socket.on("receiver:message", ({ sender: { id, name }, body, uniqueMessageId, msg_type }) => {
      const { setMessages, activeId } = this.props;
      const payload = {
        sender: name,
        body,
        uniqueMessageId,
        rightSide: id !== activeId,
        msg_type
      }
      setMessages(payload);
    });
  }


  componentDidUpdate(prevProps, prevState) {
    const { shouldScrollBottom } = this.state;
    const { messages } = this.props;
    if (messages.length !== prevProps.messages.length && shouldScrollBottom) {
      this.scrollToBottom();
    }
  }

  handleScroll = (e) => {
    const { shouldScrollBottom } = this.state;
    const { target } = e;

    if (!target) return;
    const offset = 60;

    if (
      target.scrollHeight - target.scrollTop >= target.clientHeight + offset &&
      shouldScrollBottom
    ) {
      console.log("NOT");
      this.setState({ shouldScrollBottom: false });
    }

    if (
      target.scrollHeight - target.scrollTop < target.clientHeight + offset &&
      !shouldScrollBottom
    ) {
      console.log("scroll to the bottom of the div");
      this.setState({ shouldScrollBottom: true });
    }
  };

  scrollToBottom = () => {
    scrollIntoView(this.messageBoxBottom.current, { behavior: "smooth" });
  };

  render() {
    const { classes, messages } = this.props;

    return (
      <div className={classes.messageBoxWrapper} onScroll={this.handleScroll}>
        <div style={{ position: "relative", padding: 15 }}>
          {messages.map((msg) => (
            <Message
              key={msg.uniqueMessageId}
              classes={classes}
              msgData={msg}
            />
          ))}
          <div ref={this.messageBoxBottom} />
        </div>
      </div>
    );
  }
}

export default MessageBox;
