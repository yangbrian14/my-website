import React from "react";
import ChatBubble from "../components/ChatBubble";

export default function Root({ children }) {
  return (
    <>
      {children}
      <ChatBubble />
    </>
  );
}