import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItemData } from "../data/SidebarData";

function Sidebar() {
  return (
    <Container>
      <WorkspaceContainer>
        <Name>Esther WaerHouse</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {sidebarItemData.map((item) => (
          <MainChannelItem>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
`;

const WorkspaceContainer = styled.div`
  color: #fff;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;
const Name = styled.div``;
const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: #fff;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;
const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
`;
