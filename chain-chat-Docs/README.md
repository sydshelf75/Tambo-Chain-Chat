# ChainChat: Conversational Crypto Portfolio Oracle

[![Hackathon: The UI Strikes Back](https://img.shields.io/badge/Hackathon-The%20UI%20Strikes%20Back-blueviolet)](https://www.wemakedevs.org/hackathons/tambo)
[![Built with Tambo AI](https://img.shields.io/badge/Powered%20by-Tambo%20AI-00ff9f)](https://tambo.co)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black)](https://vercel.com)

![ChainChat Hero](https://via.placeholder.com/1200x600/0f172a/00ff9f?text=ChainChat+-+Talk+to+Your+Crypto+Portfolio)  
<!-- Replace with real hero GIF: user chatting → AI generates chart/table/simulator -->

**ChainChat** is a generative UI crypto companion built for **The UI Strikes Back** hackathon (WeMakeDevs × Tambo AI, Feb 2–8, 2026).  

Users describe their portfolio or market questions in natural language ("What's my ETH vs BTC performance this month?" or "Simulate adding 500 SOL at current prices"), and the AI dynamically **generates, streams, and updates** interactive React components — charts, tables, risk gauges, simulators — without rigid menus or dashboards.

### Why ChainChat? (Problem → Solution → Impact)

**Problem**  
Crypto tools overwhelm users: fragmented apps, manual data hunting, complex DeFi interfaces, high volatility needing constant monitoring. Beginners especially struggle with analysis and "what-if" scenarios.

**Solution**  
ChainChat uses **Tambo AI** to make portfolio management conversational:  
- AI parses intent → calls real APIs (CoinGecko) via MCP tools  
- Dynamically renders/updates **generative** (one-shot visuals) and **interactable** (persistent, editable) components  
- Streams live updates for prices/risk  
- Persists watchlists/portfolios across chat sessions  

**Impact**  
- **Saves time** — instant insights instead of tab-switching  
- **Democratizes crypto** — accessible for Indian/newbie traders (Gurugram vibes!)  
- **Showcases Tambo** — heavy use of component registration, MCP orchestration, streaming props, interactables, and custom chat UX  
- **Hackathon Fit** — generative UI at its core ("The UI Strikes Back" theme: AI rebels against static flows). High demo wow-factor, social value, technical depth.

### Key Features

- **Natural Language Queries** → AI translates to UI actions  
- **Dynamic Component Generation**  
  - Real-time price/trend charts (Recharts)  
  - Portfolio holdings table (sortable, editable)  
  - Risk/volatility meter (color-coded gauge)  
  - What-if simulator (projected gains/losses)  
  - Persistent watchlist (survives chat resets)  
- **Streaming & Live Updates** — prices tick in real-time  
- **Interactable UX** — edit holdings → AI re-analyzes/rerenders  
- **Custom Themed Tambo UI** — branded crypto-oracle look (neon dark mode, chain icons, animated renders) for immersion & Tambo recognition  
- **MCP Tool Integration** — secure, real-time CoinGecko fetches  
- **Persistence & Auth** — thread history + optional user tokens  

### Tech Stack

- **Core**: Next.js 14 (App Router), React, TypeScript  
- **Generative UI**: @tambo-ai/react (components, MCP, hooks)  
- **Data**: CoinGecko API (free tier — prices, history, markets)  
- **Visuals**: Recharts, Tailwind CSS + Shadcn/UI  
- **Validation**: Zod (prop schemas)  
- **Deployment**: Vercel (auto-deploys from GitHub)  

### Live Demo & Video
- **Deployed App**: https://chainchat.vercel.app (update once live)  
- **Demo Video** (2–3 min): [YouTube/Loom link] — shows chat → instant chart generation → edit → re-analysis  

### Setup & Run Locally

1. Clone: `git clone https://github.com/yourusername/chainchat.git`  
2. Install: `npm install`  
3. Env: Create `.env.local`  