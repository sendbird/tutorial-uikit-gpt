import GroupChannelList from "@sendbird/uikit-react/GroupChannelList";
import { Header } from "./components/Header.tsx";
import styled from "styled-components";
import { GroupChannel } from "@sendbird/chat/groupChannel";
import { noop } from "../../utils/noop.ts";
import { ChannelPreview } from "./components/ChannelPreview.tsx";

type Props = {
  focusedChannel: GroupChannel | null;
  onFocusChannel(channel: GroupChannel | null): void;
};
export const ChatListSection = ({ focusedChannel, onFocusChannel }: Props) => {
  return (
    <GroupChannelListSection
      onCreateChannelClick={noop}
      onChannelSelect={onFocusChannel}
      onChannelCreated={onFocusChannel}
      renderHeader={() => <Header onCreateChannel={onFocusChannel} />}
      renderChannelPreview={({ channel }) => (
        <ChannelPreview
          focused={channel.url === focusedChannel?.url}
          channel={channel}
        />
      )}
    />
  );
};

const GroupChannelListSection = styled(GroupChannelList)`
  && {
    min-width: 260px;
    background-color: #f9f9f9;
  }
`;
