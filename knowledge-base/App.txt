import SendbirdProvider from "@sendbird/uikit-react/SendbirdProvider";
import "@sendbird/uikit-react/dist/index.css";

import { ChatSection } from "./screens/chat";
import { ChatListSection } from "./screens/chat-list";
import { randomid } from "./utils/randomid.ts";
import styled from "styled-components";
import { useState } from "react";
import { GroupChannel } from "@sendbird/chat/groupChannel";

export function getUserId() {
  const key = "user-id";
  const userId = localStorage.getItem(key);
  if (userId) return userId;

  const newUserId = randomid();
  localStorage.setItem(key, newUserId);
  return newUserId;
}

export function getBotId() {
  return import.meta.env.VITE_BOT_ID;
}

export function getAppId() {
  return import.meta.env.VITE_APP_ID;
}

function App() {
  const [focusedChannel, setFocusedChannel] = useState<GroupChannel | null>(
    null,
  );

  return (
    <Container>
      <SendbirdProvider
        appId={getAppId()}
        userId={getUserId()}
        nickname={"Me"}
        uikitOptions={{
          groupChannel: {
            enableMention: false,
            enableReactions: false,
            enableTypingIndicator: true,
            replyType: "none",
            input: { enableDocument: false },
            enableSuggestedReplies: true,
            enableMarkdownForUserMessage: true,
            typingIndicatorTypes: new Set(["bubble"]),
          },
        }}
      >
        <ChatListSection
          focusedChannel={focusedChannel}
          onFocusChannel={(channel) => setFocusedChannel(channel)}
        />
        <ChatSection
          focusedChannel={focusedChannel}
          onLeaveChannel={() => setFocusedChannel(null)}
        />
      </SendbirdProvider>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export default App;
