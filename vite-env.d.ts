/// <reference types="vite/client" />
// Source - https://stackoverflow.com/a/75544104
// Posted by Dario Mincioni
// Retrieved 2026-01-13, License - CC BY-SA 4.0

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
