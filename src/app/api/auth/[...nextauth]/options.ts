import { UserModel } from "@/models/users";

import { AuthOptions, ISODateString, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export type CustomSession = {
  user?: Customuser;
  expires: ISODateString;
};
export type Customuser = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  role?: string | null;
};
require("../../../../database/config");
export const Authoptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      require("../../../../database/config");
      try {
        const findUser = await UserModel.findOne({ email: user?.email });
        if (findUser) {
          console.log("user found");
          return true;
        }
        await UserModel.create({
          name: user?.name,
          email: user?.email,
          role: "user",
        });
        console.log("user created");
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
    async jwt({ user, token }: { token: JWT; user: Customuser }) {
      console.log("userjwt", user);
      console.log("token", token);
      if (user) {
        token.user = {
          user,
          role: user.role || "user",
        };
        console.log("JWT Token User:", token.user);
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: CustomSession;
      token: JWT;
      user: User;
    }) {
      session.user = token.user as Customuser;
      console.log("sesionssssss", session);
      console.log("tokenssssss", token);

      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "next-auth",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email address",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },

      async authorize(credentials, req) {
        const User = await UserModel.findOne({ email: credentials?.email });
        if (User) {
          console.log("user object", User);
          return User;
        } else {
          return null;
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITCLIENT_ID as string,
      clientSecret: process.env.GITSECRET as string,
    }),
  ],
};
