import { BaseMessage } from "@sendbird/chat/message";

export function getLastMessageText(message: BaseMessage | null) {
  if (message?.isUserMessage() || message?.isAdminMessage()) {
    return message.message;
  }
  return "";
}
