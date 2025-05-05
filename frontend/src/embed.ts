import axios from "axios"
import { embedDashboard } from "@superset-ui/embedded-sdk"
import { gruvbox, kanagawa, onedark, tokyonight } from "./themes"

const SUPERSET_DOMAIN = import.meta.env.VITE_SUPERSET_URL
const EMBEDDED_ID = import.meta.env.VITE_DASHBOARD_EMBEDDING_ID
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

async function fetchGuestToken() {
  const response = await axios.get(BACKEND_URL + "/guest_token");
  return response.data["guestToken"]
}

export async function embed() {

  embedDashboard({
    id: "55d11596-2fb0-4654-8d8e-de2a2ed2d2f3",
    mountPoint: document.getElementById("embedded-1")!,
    supersetDomain: "http://localhost:9000",
    fetchGuestToken: fetchGuestToken,
  }).then(a => {
    a.setThemeConfig(gruvbox)
  })


  embedDashboard({
    id: "55d11596-2fb0-4654-8d8e-de2a2ed2d2f3",
    mountPoint: document.getElementById("embedded-2")!,
    supersetDomain: "http://localhost:9000",
    fetchGuestToken: fetchGuestToken,
  }).then(a => {
    a.setThemeConfig(kanagawa)
  })

  embedDashboard({
    id: "55d11596-2fb0-4654-8d8e-de2a2ed2d2f3",
    mountPoint: document.getElementById("embedded-3")!,
    supersetDomain: "http://localhost:9000",
    fetchGuestToken: fetchGuestToken,
  }).then(a => {
    a.setThemeConfig(tokyonight)
  })

  embedDashboard({
    id: "55d11596-2fb0-4654-8d8e-de2a2ed2d2f3",
    mountPoint: document.getElementById("embedded-4")!,
    supersetDomain: "http://localhost:9000",
    fetchGuestToken: fetchGuestToken,
  }).then(a => {
    a.setThemeConfig(onedark)
  })

  embedDashboard({
    id: EMBEDDED_ID,  // Use the id obtained from enabling embedding dashboard option
    supersetDomain: SUPERSET_DOMAIN,
    mountPoint: document.getElementById("superset-container")!, // html element in which iframe will be mounted to show the dashboard
    fetchGuestToken: async () => {
      const response = await axios.get(BACKEND_URL + "/guest_token");
      return response.data["guestToken"]
    },
    dashboardUiConfig: {
      // hideTitle: true,
      // hideTab:true
      filters: {
        visible: true,
        expanded: true
      },
    }
  });
  const iframe = document.querySelector("iframe")
  if (iframe) {
    iframe.style.width = '100%'; // Set the width of the iframe
    iframe.style.minHeight = '100vw'; // Set the height of the iframe
  }
}

