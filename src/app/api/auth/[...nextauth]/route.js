import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        //Check if the user exists.
        await connect();

        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            console.log("encontro usuario", user);
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              console.log("encontro pasword", isPasswordCorrect);
              return user;
            } else {
              console.log("no encontro pasword");

              throw new Error("Wrong Credentials!");
            }
          } else {
            console.log("user no encontro");
            throw new Error("User not found!");
          }
        } catch (err) {
          console.log("Todo mal");
          throw new Error(err);
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    GoogleProvider({
      clientId:
        "169313336883-d6pltjeqirolb47r84rrmigvei36avcs.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
