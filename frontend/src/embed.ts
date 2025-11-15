import axios from 'axios';
import { embedDashboard } from '@superset-ui/embedded-sdk';
import type { EmbeddedDashboard } from '@superset-ui/embedded-sdk';
import {
  corporateTheme,
  gruvbox,
  kanagawa,
  onedark,
  tokyonight,
} from './themes';

const SUPERSET_DOMAIN = import.meta.env.VITE_SUPERSET_URL;
const EMBEDDED_ID = import.meta.env.VITE_DASHBOARD_EMBEDDING_ID;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const dashboardInstances: EmbeddedDashboard[] = [];

async function fetchGuestToken() {
  const response = await axios.get(BACKEND_URL + '/guest_token');
  return response.data['guestToken'];
}

export async function embed() {
  const dashboard1 = await embedDashboard({
    id: EMBEDDED_ID,
    mountPoint: document.getElementById('embedded-1')!,
    supersetDomain: SUPERSET_DOMAIN,
    fetchGuestToken: fetchGuestToken,
  });
  dashboard1.setThemeConfig(gruvbox);
  dashboard1.setThemeMode('default');
  dashboardInstances.push(dashboard1);

  const dashboard2 = await embedDashboard({
    id: EMBEDDED_ID,
    mountPoint: document.getElementById('embedded-2')!,
    supersetDomain: SUPERSET_DOMAIN,
    fetchGuestToken: fetchGuestToken,
  });
  dashboard2.setThemeConfig(kanagawa);
  dashboard2.setThemeMode('default');
  dashboardInstances.push(dashboard2);

  const dashboard3 = await embedDashboard({
    id: EMBEDDED_ID,
    mountPoint: document.getElementById('embedded-3')!,
    supersetDomain: SUPERSET_DOMAIN,
    fetchGuestToken: fetchGuestToken,
  });
  dashboard3.setThemeConfig(tokyonight);
  dashboard3.setThemeMode('default');
  dashboardInstances.push(dashboard3);

  const dashboard4 = await embedDashboard({
    id: EMBEDDED_ID,
    mountPoint: document.getElementById('embedded-4')!,
    supersetDomain: SUPERSET_DOMAIN,
    fetchGuestToken: fetchGuestToken,
  });
  dashboard4.setThemeConfig(onedark);
  dashboard4.setThemeMode('default');
  dashboardInstances.push(dashboard4);

  // Corporate theme (locked to default mode, won't switch)
  const dashboard5 = await embedDashboard({
    id: EMBEDDED_ID,
    mountPoint: document.getElementById('embedded-5')!,
    supersetDomain: SUPERSET_DOMAIN,
    fetchGuestToken: fetchGuestToken,
  });
  dashboard5.setThemeConfig(corporateTheme);
  dashboardInstances.push(dashboard5);
}

/**
 * Control the theme mode for all embedded dashboards
 * @param mode - 'default', 'dark', or 'system'
 */
export function setAllDashboardsMode(mode: 'default' | 'dark' | 'system') {
  dashboardInstances.forEach((dashboard) => {
    dashboard.setThemeMode(mode);
  });
}
