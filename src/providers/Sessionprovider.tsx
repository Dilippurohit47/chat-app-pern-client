"use client";
import React, { ReactNode } from "react";
import { SessionProvider as NextAuthSessionprovider } from "next-auth/react";
const Sessionprovider = ({ children }: { children: ReactNode }) => {
  return <NextAuthSessionprovider>{children}</NextAuthSessionprovider>;
};

export default Sessionprovider;
