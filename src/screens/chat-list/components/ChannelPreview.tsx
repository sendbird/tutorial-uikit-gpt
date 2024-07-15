import { GroupChannel } from "@sendbird/chat/groupChannel";
import styled from "styled-components";
import { getLastMessageText } from "../../../utils/getLastMessageText.ts";

type Props = {
  focused: boolean;
  channel: GroupChannel;
};

export const ChannelPreview = ({ focused, channel }: Props) => {
  return (
    <Container data-focused={String(focused)}>
      {getLastMessageText(channel.lastMessage)}
    </Container>
  );
};

const Container = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 2px 8px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #ececec;
  }

  &[data-focused="true"] {
    background-color: #ececec;
  }
`;
