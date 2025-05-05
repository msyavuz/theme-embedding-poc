import axios from "axios"
import type { AxiosRequestConfig } from "axios"

export async function auth(url: string, username: string, password: string) {
  const { data } = await axios.post(url, { username, password, provider: "db" },
    {
      "headers": {
        "Content-Type": "application/json",
      }
    }
  )

  const accessToken = data["access_token"]
  return {
    accessToken, authHeaders: {
      "headers": {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + accessToken
      }
    }
  }
}




export async function fetchGuestToken(url: string, tokenOptions: any, auth_headers: AxiosRequestConfig<any>) {
  const resp = await axios.post(url, tokenOptions, auth_headers)
  return resp.data["token"]
}
