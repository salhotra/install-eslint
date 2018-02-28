!/usr/bin/env node

yarn add -D babel-eslint eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

cat <<EOT >> .eslintrc
{
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "arrow-body-style": 0
  },
  "env": {
    "browser": true
  }
}
EOT

printf "eslint installed and set up"
