import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import styled from "styled-components";

function Chat() {
  return (
    <ChatContainer>
      <ChatHeaderContainer>
        <ChannerInfo>
          <CannelTitle>
            # General
            <StarOutlineIcon />
          </CannelTitle>
          <CannelDescription>
            Company-wide announcements and work-based matters
          </CannelDescription>
        </ChannerInfo>
        <ChannelInfoRight>
          <Name>Details</Name>
          <ErrorOutlineIcon />
        </ChannelInfoRight>
      </ChatHeaderContainer>
      <Main></Main>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div``;
const ChatHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #949396;
  height: 64px;
  padding-right: 19px;
`;
const ChannerInfo = styled.div`
  align-items: center;
  padding-left: 19px;
`;
const CannelTitle = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
`;
const CannelDescription = styled.div`
  color: #949396;
  font-size: 12px;
`;
const ChannelInfoRight = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.div`
  padding-right: 9px;
`;
const Main = styled.div``;
