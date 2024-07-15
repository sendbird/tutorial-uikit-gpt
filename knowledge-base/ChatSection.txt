import { GroupChannel } from "@sendbird/chat/groupChannel";
import GroupChannelComponent from "@sendbird/uikit-react/GroupChannel";
import { Header } from "./components/Header.tsx";

type Props = {
  focusedChannel: GroupChannel | null;
  onLeaveChannel(): void;
};
export const ChatSection = ({ focusedChannel, onLeaveChannel }: Props) => {
  return (
    <GroupChannelComponent
      channelUrl={focusedChannel?.url ?? ""}
      renderChannelHeader={() => <Header onLeaveChannel={onLeaveChannel} />}
    />
  );
};
