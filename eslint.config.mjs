import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript","plugin:tailwindcss/recommended","prettier"),
  {
    files: ["*.ts", "*.tsx"],
    rules: {
      "no-undef": "off",
    },
  },
  {
    files: ["components/ui/**"],
    excludedFiles: ["**/*"], // Exclude all files under this directory
    rules: {}, // No rules applied
  },
{
  rules : {
    "import/order": [
      "error",
      {
        "groups": [
          "builtin", // Built-in types are first
          "external", // External libraries
          "internal", // Internal modules
          [
            "parent",
            "sibling"
          ], // Parent and sibling types can be mingled together
          "index", // Then the index file
          "object" // Object imports
        ],
        "newlines-between": "always",
        "pathGroups": [
          {
            "pattern": "@app/**",
            "group": "external",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": [
          "builtin"
        ],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
  },
  
}
];

export default eslintConfig;
