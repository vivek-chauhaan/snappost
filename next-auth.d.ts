// import  { DefaultSession } from "next-auth";

// declare module "next-auth" {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     user: {
//       /** The user's postal address. */
//       address: string;
//     } & DefaultSession["user"];
//   }

// }

import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // <-- add this
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string; // <-- add this
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string; // <-- add this so token.id works
  }
}
