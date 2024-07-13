import styled from "styled-components";
import logo from "../../../assets/logo.png";
import { PiNotePencilBold } from "react-icons/pi";
import { GroupChannel } from "@sendbird/chat/groupChannel";
import { useSendbirdStateContext } from "@sendbird/uikit-react";
import { getAppId, getBotId, getUserId } from "../../../App.tsx";

type Props = {
  onCreateChannel(channel: GroupChannel): void;
};

export const Header = ({ onCreateChannel }: Props) => {
  const { stores } = useSendbirdStateContext();

  const handleCreateChannel = async () => {
    if (stores.sdkStore.initialized) {
      const channel = await stores.sdkStore.sdk.groupChannel.createChannel({
        name: "Chatting",
        invitedUserIds: [getUserId(), getBotId()],
      });
      onCreateChannel(channel);
    }
  };

  const openBotStudio = () => {
    const url = `https://dashboard.sendbird.com/${getAppId()}/ai-chatbots/bots/${getBotId()}`;
    window.open(url, "_blank");
  };

  return (
    <Container>
      <Logo onClick={openBotStudio} src={logo} alt="logo" />
      <NewChat onClick={handleCreateChannel} />
    </Container>
  );
};

const Container = styled.div`
  height: 3.5rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  cursor: pointer;
`;

const NewChat = styled(PiNotePencilBold)`
  width: 28px;
  height: 28px;
  fill: #7d7d7d;
  padding: 4px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: #ececec;
  }
`;
