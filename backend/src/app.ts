import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { auth, fetchGuestToken, } from "./queries"

dotenv.config()

const USERNAME = process.env.USERNAME!
const PASSWORD = process.env.PASSWORD!
const EMBEDDED_ID = process.env.EMBEDDED_ID!
const GUEST_TOKEN_URL = "http://localhost:9000/api/v1/security/guest_token"
const LOGIN_URL = "http://localhost:9000/api/v1/security/login"

const app = express()

app.use(cors())

app.get("/guest_token", async (_, res) => {
  // Create a guest token to with permissions to be used while embedding
  const { authHeaders } = await auth(LOGIN_URL, USERNAME, PASSWORD)

  const guestToken = await fetchGuestToken(
    GUEST_TOKEN_URL,
    {
      "resources": [
        {
          "type": "dashboard",
          "id": EMBEDDED_ID,
        },
      ],
      "rls": [],
      "user": {
        "username": "guest",
        "first_name": "Guest",
        "last_name": "User",
      }
    },
    authHeaders
  )

  res.json({ guestToken })
})

app.listen(3000, () => {
  console.log("Server started on port: 3000")
})
