/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_SUPERSET_DOMAIN: string
  VITE_DASHBOARD_EMBEDDING_ID: string
  VITE_BACKEND_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
