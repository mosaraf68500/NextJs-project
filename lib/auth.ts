import type { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs"
import { join } from "path"

const USERS_FILE = join(process.cwd(), "data", "users.json")

// Ensure data directory exists
if (!existsSync(join(process.cwd(), "data"))) {
  mkdirSync(join(process.cwd(), "data"), { recursive: true })
}

// Initialize users file with demo users if it doesn't exist
if (!existsSync(USERS_FILE)) {
  const demoUsers = [
    {
      id: "1",
      name: "Admin User",
      email: "admin@example.com",
      password: bcrypt.hashSync("password", 12),
      role: "admin",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      name: "Test User",
      email: "user@example.com",
      password: bcrypt.hashSync("password", 12),
      role: "user",
      createdAt: new Date().toISOString(),
    },
  ]
  writeFileSync(USERS_FILE, JSON.stringify(demoUsers, null, 2))
}

function getUsers() {
  try {
    const data = readFileSync(USERS_FILE, "utf8")
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

function saveUser(user: any) {
  const users = getUsers()
  users.push(user)
  writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))
  return user
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const users = getUsers()
        const user = users.find((u: any) => u.email === credentials.email)

        if (!user) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub
        session.user.role = token.role
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
}

const nextAuth = NextAuth(authOptions)
export const auth = nextAuth.auth
export const handlers = nextAuth.handlers

export { saveUser }
