import React, { useState, useEffect } from "react";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import db from "../firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase";

function Chat({ user }) {
  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        // console.log("Chat", snapshot.data());
        setChannel(snapshot.data());
      });
  };

  const getMessages = () => {
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        // console.log("M", messages);
        setMessages(messages);
      });
  };

  const sendMessage = (text) => {
    if (channelId) {
      let payload = {
        userImage: user.photo,
        user: user.name,
        timestamp: firebase.firestore.Timestamp.now(),
        text: text,
      };
      db.collection("rooms").doc(channelId).collection("messages").add(payload);
      console.log(payload);
    }
  };

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);

  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName># {channel && channel.name}</ChannelName>
          {channel && !channel.info ? (
            <ChannelInfo>
              Welcome to <strong>{channel.name}</strong> channel
            </ChannelInfo>
          ) : (
            <ChannelInfo>{channel && channel.info}</ChannelInfo>
          )}
        </Channel>
        <ChannelDetails>
          <div>Details</div>
          <Info />
        </ChannelDetails>
      </Header>
      <MessageContainer>
        {messages.length > 0 &&
          messages.map((data, index) => (
            <ChatMessage
              text={data.text}
              name={data.user}
              image={data.userImage}
              timestamp={data.timestamp}
            />
          ))}
      </MessageContainer>
      <ChatInput sendMessage={sendMessage} />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`;

const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
  justify-content: space-between;
`;

const Channel = styled.div``;

const ChannelName = styled.div`
  font-weight: 700;
`;

const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`;

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
`;

const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`;

const MessageContainer = styled.div``;
