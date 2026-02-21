import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (
          credentials?.email === "admin@test.com" &&
          credentials.password === "tentwentyfrontendexam@2025"
        ) {
          return {
            id: "1",
            name: "John Doe",
            email: credentials.email,
          };
        }

        // ❌ IMPORTANT
        throw new Error("Invalid credentials");
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  session: { strategy: "jwt" },
};