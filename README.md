# Iniciando Next

- yarn create next-app [nome_do_app]

# Removendo aquivos desnecessarios

- Styles
- Favicon.ico e vercel.svg
- page/api

# Instalando as dependencias do TypeScript

- yarn add typescript @types/react @types/node -D

# Alterando formato e removendo dependencias

- \_app.js -> \_app.tsx
- index.js -> index.tsx
  - Remova as importações do css

# Instalando e configurando o Eslint

- yarn add eslint -D (Instalação)
- yarn eslint --init (Iniciando configuração)
  - How would you like to use ESLint? -> Terceira opção
  - What type of modules does your project use? -> Primeira opção
  - Which framework does your project use? -> Primeira opção
  - Where does your code run? -> Selecione os dois com barra de espaço
  - Does your project use TypeScript? -> yes
  - How would you like to define a style for your project? · Primeira opção
  - Which style guide do you want to follow? -> airbnb
  - What format do you want your config file to be in? -> JSON
  - A ultima pergunta é se deseja isntalar via npm, diga que sim. Apos a intalação delete o arquivo package.lock.json e no terminal execute apenas o comando yarn para instalar e fazer os links via yarn caso esteja utilizando.


  {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier/airbnb",
    "prettier/react"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "space-before-function-paren": "off",
    "react/prop-types": "off"
  }
}


  # Instalando Prettier
  -  yarn add prettier eslint-plugin-prettier eslint-config-prettier -D 
