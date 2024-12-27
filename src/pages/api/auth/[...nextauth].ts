import NextAuth, { Account, Profile, Session, User,  } from "next-auth"
import { JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github"

type SessionProps = {
  session: Session
  token: JWT
  user?: User
}

type SignInProps = {
  profile: Profile 
  account: Account
  user: User
}

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID ?? '',
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET ?? '',
    }),
  ],
  callbacks: {
    async singIn({ profile, account, user }: SignInProps) {
      const { email } = user;
      try {

        return true
      } catch(err) {
        console.log('Error',err)
        return false
      }
    },
    async session({ session, token }: SessionProps) {
      try {
        return {
          ...session,
          id: token.sub
        }
      } catch(err) {
        return {
          ...session,
          id: null
        }
      }
    },
  },
}

export default NextAuth(authOptions)