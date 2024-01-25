import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [GoogleProvider({ clientid: "", clientSecret: "" })],
};
