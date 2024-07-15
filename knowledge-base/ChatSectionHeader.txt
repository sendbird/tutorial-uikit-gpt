import styled from "styled-components";
import { PiTrashBold } from "react-icons/pi";
import { useGroupChannelContext } from "@sendbird/uikit-react/GroupChannel/context";

type Props = {
  onLeaveChannel(): void;
};

export const Header = ({ onLeaveChannel }: Props) => {
  const { currentChannel } = useGroupChannelContext();

  const handleLeaveChannel = async () => {
    if (currentChannel) {
      await currentChannel.leave();
      onLeaveChannel();
    }
  };

  return (
    <Container>
      {currentChannel && <Title>{currentChannel.name}</Title>}
      <NewChat onClick={handleLeaveChannel} />
    </Container>
  );
};

const Container = styled.div`
  height: 64px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
  box-sizing: border-box;
`;

const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;

const NewChat = styled(PiTrashBold)`
  width: 28px;
  height: 28px;
  fill: #d72626;
  padding: 4px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: #ececec;
  }
`;
