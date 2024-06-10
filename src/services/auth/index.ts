import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import EmailProvider from 'next-auth/providers/email'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '../database'

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: '/auth',
    signOut: '/auth',
    error: '/auth',
    verifyRequest: '/auth',
    newUser: '/app'
  },
  adapter: PrismaAdapter(prisma),
  providers: [GitHub, EmailProvider({
    server: process.env.EMAIL_SERVER,
    from: process.env.EMAIL_FROM
  })]
})