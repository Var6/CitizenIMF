# CitizenIMF

CitizenIMF is a Next.js application focused on civic/financial transparency workflows (IMF-style reporting) and citizen-facing dashboards.

## Features

- Citizen-facing dashboard UI
- Structured pages using the Next.js App Router
- Fast local development with hot reload
- Production-ready build and start scripts

## Tech Stack

- Next.js (App Router)
- React
- TypeScript (recommended)
- Node.js

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- One of: npm, yarn, pnpm, or bun

### Install

```bash
npm install
```

### Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open http://localhost:3000 in your browser.

### Build for production

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

## Environment Variables

Create a local environment file (not committed):

- `.env.local`

Example:

```bash
# .env.local
NEXT_PUBLIC_APP_NAME=CitizenIMF
```

> Note: Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Project Structure

Common locations in a Next.js App Router project:

- `app/` – routes, layouts, and pages
- `public/` – static assets

## Deployment

The recommended deployment target is Vercel:

- Connect the GitHub repository to Vercel
- Set required environment variables
- Deploy

You can also deploy anywhere Node.js is supported (Docker, VPS, etc.) as long as you run `npm run build` and `npm run start`.

## Contributing

1. Create a branch
2. Make your changes
3. Open a pull request

## License

Add a license file (e.g., MIT) and reference it here.