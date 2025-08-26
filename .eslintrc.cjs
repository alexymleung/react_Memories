module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "react-app",
  ],
  plugins: ["react-refresh"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ["vite.config.js"],
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": "off",
    // "no-unused-vars": [
    //   "error",
    //   { varsIgnorePattern: "^(themes|isActive|[A-Z_])" },
    // ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["dist"],
};
