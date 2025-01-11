# [Project] - Frontend

## Pre-requisites

- Node.js >= v22
- pnpm >= v9

## Installation

```bash
pnpm install
```

## Development

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```bash
pnpm run build
```

## Production

Using Docker:

```bash
docker build -t frontend .
docker run -p 3000:3000 frontend
```

or in a Node.js server:

```bash
pnpm run start
```
