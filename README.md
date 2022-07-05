## Description

**Take a look 👀 :** [Rule of Thumb application](https://thumb-ui.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) using `yarn` as package manager.

This web app tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment and so on. You can share your opinion about celebrities using votes (thumbs up and down) and view the result of the users.

## Getting Started For Developers

#### 📥 First off, install node dependencies.

```bash
yarn install
```

#### ⛔️ Review env variables.

Copy env variables from `.env.example` into `.env.local`.

I'm sharing with you my firebase configuration in order to test this applications. This credential will be removed on 30 days

### 🔌 And then, start the dev local server.

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project dev features

#### 📚 Storybook

If you want to see each component used through the application you can run storybook.

```bash
yarn storybook
```

#### 🔄 API Routes

NextJs provide API Routes which you can use them to simulate a backend connection. Check `/pages/api/people`

#### 💊 Stack

- Next js
- Typescript
- Sass
- Storybook
- Jest & react-testing-library
- SWR
- Firebase
- Eslint & Prettier
- Absolute Paths
