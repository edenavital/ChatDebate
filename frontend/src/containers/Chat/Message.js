import React from "react";
import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
 import { MESSAGES_TYPES } from '../../constants';
const Message = ({ classes, msgData }) => {

  if (typeof msgData.msg_type != "number") return null;

  let output = null;
  switch (msgData.msg_type) {
    // SYSTEM MSG
    case MESSAGES_TYPES.SYSTEM:
      const letter = msgData.sender && msgData.sender.charAt(0);
      output = (
      <div className={classes.systemMessage}>
        <Avatar classes={{ root: classes.headerAvatar }}>{letter}</Avatar>
        <Typography>{msgData.body}</Typography>
      </div>)
      break;
    // REGULAR MSG
    case MESSAGES_TYPES.USER:
      output = (
      <div className={`${classes.messageWrapper} ${msgData.rightSide && classes.messageRightSide} `} >
        <Typography>{msgData.body}</Typography>
      </div>)
      break;
  }

  return (output);
};

export default Message;
