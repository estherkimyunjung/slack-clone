import React from "react";
import styled from "styled-components";

function ChatMessage() {
  return (
    <Container>
      <UserAvatar>
        <img src="https://randomuser.me/api/portraits/women/33.jpg" />
      </UserAvatar>
      <MessageContent>
        <Name>
          Hailey Perry
          <span>2/25/2021 11:13:55 AM</span>
        </Name>
        <Text>This is my Slack-clone test</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    background: #d9d9d9;
  }
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 8px;

  img {
    width: 100%;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;

  span {
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97, 96, 97);
    font-size: 11px;
  }
`;

const Text = styled.div``;
