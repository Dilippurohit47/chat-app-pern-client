"use client";
import { getSocket } from "@/lib/socket.config";
import React, { useEffect, useMemo } from "react";

const ChatBase = () => {
  let socket = useMemo(() => {
    const socket = getSocket();
    return socket.connect();
  }, []);

  useEffect(() => {
    socket.on("message", (data: any) => {
      console.log("the socket message is data");
    });
    return () => {
      socket.close();
    };
  }, []);
  const handleClick = () => {
    socket.emit("message", { name: "kaju", id: "loveu" });
    socket.emit("age", { name: "dilip", id: "21" });
  };
  return (
    <div>
      <button onClick={handleClick}>send message</button>
    </div>
  );
};

export default ChatBase;
