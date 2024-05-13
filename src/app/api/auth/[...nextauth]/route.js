import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from '@/lib/db'
import bcrypt from 'bcrypt'
import { data } from "autoprefixer";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                Email: { label: "Email", type: "text", placeholder: "jsmith" },
                Password: { label: "Password", type: "Password", placeholder: "*****" },
            },
            async authorize(credentials, req) {
                console.log(credentials)

                const userFound = await db.usuarios.findUnique({
                    where: {
                        Email: credentials.Email,
                    }
                })

                if (!userFound) throw new Error('No user found')

                console.log(userFound)

                //const matchPassword = await bcrypt.compare(credentials.Password, userFound.Password);
                const matchPassword = credentials.Password === userFound.Password;


                if (!matchPassword) throw new Error('Wrong password')

                return {
                    id: userFound.Id,
                    email: userFound.Email
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };