# Gameify

Gameify is a polished game collection website built with Node.js and Express. It presents a curated catalog of game ideas with a strong landing page, genre filters, search, and a responsive UI that can grow into a larger multi-game platform.

## Features

- Bold landing page with a modern game-focused visual style
- Searchable game catalog
- Genre filter buttons
- Responsive layout for desktop and mobile
- Express server with static asset hosting

## Tech Stack

- Node.js
- Express
- HTML
- CSS
- Vanilla JavaScript

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the project

```bash
npm start
```

The app starts on `http://localhost:3000`.

## Project Structure

```text
Gameify/
|-- public/
|   |-- app.js
|   |-- index.html
|   `-- styles.css
|-- src/
|   `-- server.js
|-- package.json
`-- README.md
```

## Current Direction

This repository is set up as the base for a larger game hub. It can be extended with:

- Playable mini-games
- Multiple pages for different genres
- User accounts and favorites
- Backend storage for dynamic game data

## Health Check

The server exposes a simple health endpoint:

```text
/health
```

Expected response:

```json
{"status":"ok"}
```
