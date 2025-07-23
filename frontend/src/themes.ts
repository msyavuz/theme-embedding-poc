export const gruvbox = {
  theme_default: {
    token: {
      colorPrimary: '#458588',
      colorSuccess: '#98971a',
      colorWarning: '#d79921',
      colorError: '#cc241d',
      colorInfo: '#458588',
    },
  },
  theme_dark: {
    token: {
      colorPrimary: '#458588',
      colorSuccess: '#98971a',
      colorWarning: '#d79921',
      colorError: '#cc241d',
      colorInfo: '#458588',
      colorTextBase: '#ebdbb2',
      colorBgBase: '#282828',
      colorBgContainer: '#282828',
      colorBgLayout: '#282828',
      colorBorder: '#928374',
      colorTextSecondary: '#a89984',
      colorTextTertiary: '#928374',
      colorSplit: '#928374',
    },
    algorithm: 'dark',
  },
  theme_settings: {
    enforced: false,
    allowSwitching: true,
    allowOSPreference: true,
  },
}

export const kanagawa = {
  theme_default: {
    token: {
      colorPrimary: '#8ba4b0',
      colorSuccess: '#8a9a7b',
      colorWarning: '#c4b28a',
      colorError: '#c4746e',
      colorInfo: '#8ba4b0',
    },
  },
  theme_dark: {
    token: {
      colorPrimary: '#8ba4b0',
      colorSuccess: '#8a9a7b',
      colorWarning: '#c4b28a',
      colorError: '#c4746e',
      colorInfo: '#8ba4b0',
      colorTextBase: '#c5c9c5',
      colorBgBase: '#181616',
      colorBgContainer: '#181616',
      colorBgLayout: '#181616',
      colorBorder: '#a6a69c',
      colorTextSecondary: '#c8c093',
      colorTextTertiary: '#a6a69c',
      colorSplit: '#a6a69c',
    },
    algorithm: 'dark',
  },
  theme_settings: {
    enforced: false,
    allowSwitching: true,
    allowOSPreference: true,
  },
}

export const onedark = {
  theme_default: {
    token: {
      colorPrimary: '#61afef',
      colorSuccess: '#98c379',
      colorWarning: '#e5c07b',
      colorError: '#e06c75',
      colorInfo: '#61afef',
    },
  },
  theme_dark: {
    token: {
      colorPrimary: '#61afef',
      colorSuccess: '#98c379',
      colorWarning: '#e5c07b',
      colorError: '#e06c75',
      colorInfo: '#61afef',
      colorTextBase: '#abb2bf',
      colorBgBase: '#282c34',
      colorBgContainer: '#2c323c',
      colorBgLayout: '#282c34',
      colorBorder: '#3e4452',
      colorTextSecondary: '#5c6370',
      colorTextTertiary: '#3e4452',
      colorSplit: '#3e4452',
    },
    algorithm: 'dark',
  },
  theme_settings: {
    enforced: false,
    allowSwitching: true,
    allowOSPreference: true,
  },
}

export const tokyonight = {
  theme_default: {
    token: {
      colorPrimary: '#82aaff',
      colorSuccess: '#c3e88d',
      colorWarning: '#ffc777',
      colorError: '#ff757f',
      colorInfo: '#82aaff',
    },
  },
  theme_dark: {
    token: {
      colorPrimary: '#82aaff',
      colorSuccess: '#c3e88d',
      colorWarning: '#ffc777',
      colorError: '#ff757f',
      colorInfo: '#82aaff',
      colorTextBase: '#c8d3f5',
      colorBgBase: '#222436',
      colorBgContainer: '#1b1d2b',
      colorBgLayout: '#222436',
      colorBorder: '#444a73',
      colorTextSecondary: '#828bb8',
      colorTextTertiary: '#444a73',
      colorSplit: '#444a73',
    },
    algorithm: 'dark',
  },
  theme_settings: {
    enforced: false,
    allowSwitching: true,
    allowOSPreference: true,
  },
}

// Example theme with enforced settings
export const corporateTheme = {
  theme_default: {
    token: {
      colorPrimary: '#0066cc',
      colorSuccess: '#00a86b',
      colorWarning: '#ff9900',
      colorError: '#d32f2f',
      colorInfo: '#1976d2',
      colorTextSecondary: '#232323ff',
      fontFamily: "'Roboto', sans-serif",
    },
  },
  theme_dark: {
    token: {
      colorPrimary: '#4d9aff',
      colorSuccess: '#4caf50',
      colorWarning: '#ffb74d',
      colorError: '#f44336',
      colorInfo: '#2196f3',
      colorTextBase: '#ffffff',
      colorBgBase: '#121212',
      colorBgContainer: '#1e1e1e',
      colorBgLayout: '#121212',
      colorBorder: '#333333',
      colorTextSecondary: '#b3b3b3',
      colorTextTertiary: '#666666',
      colorSplit: '#333333',
      fontFamily: "'Roboto', sans-serif",
    },
    algorithm: 'dark',
  },
  theme_settings: {
    enforced: true,           // Enforces the Default theme
    allowSwitching: false,    // Themes cannot be switch
    allowOSPreference: false, // Ignore OS preference
  },
}
