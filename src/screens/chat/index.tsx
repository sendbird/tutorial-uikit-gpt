import { GroupChannel } from "@sendbird/chat/groupChannel";
import GroupChannelComponent from "@sendbird/uikit-react/GroupChannel";

type Props = {
  focusedChannel: GroupChannel | null;
};
export const ChatSection = ({ focusedChannel }: Props) => {
  return <GroupChannelComponent channelUrl={focusedChannel?.url ?? ""} />;
};
