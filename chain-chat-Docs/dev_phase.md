4. Dev: `npm run dev` → http://localhost:3000  
5. Test: Chat "Analyze BTC portfolio risk" → watch components appear!

### Custom Tambo UI Enhancements (For Recognition & Polish)

To stand out to Tambo judges, we built a **bespoke chat interface** instead of default primitives:  

- Wrapped `useTamboThread` + `useTamboThreadInput` in `ChainChatInterface.tsx`  
- Themed: Dark crypto aesthetic (slate-950 bg, neon green/red accents, chain-link icons)  
- Custom message renderer: AI responses with subtle animations, embedded tickers, markdown + component support  
- Header: Live BTC/ETH mini-ticker (via MCP)  
- Animations: Fade-in + scale on component render (framer-motion optional)  

This shows Tambo extensibility — not just registering components, but fully branding the orchestration layer. Share progress on X tagging @tambo_ai for visibility!

### Phase-Wise Development Roadmap (Hackathon Timeline: Feb 3–8, 2026)

**Phase 1: Foundation & Setup** (Day 1 – Feb 3, ~4 hrs)  
- Next.js bootstrap + TamboProvider setup  
- Basic chat UI with hooks  
- Test dummy query + CoinGecko fetch  
- **Milestone**: "Hello" → AI text response. First X post.  

**Phase 2: Component Registry & Basic Generation** (Day 2 – Feb 4, ~4 hrs)  
- Register 4–5 core components with Zod schemas  
- Start custom ChainChat UI wrapper + theme  
- Test generative renders with mock data  
- **Milestone**: "Show BTC chart" → component appears. Progress screenshot on X.  

**Phase 3: MCP Tools & Real Data** (Day 3 – Feb 5, ~4–5 hrs)  
- Setup MCP server + register tools (price/history)  
- Wire AI → tool call → stream props  
- Add persistence (watchlist via thread)  
- **Milestone**: Real prices in live components.  

**Phase 4: Interactions, Streaming & Polish** (Day 4 – Feb 6, ~4 hrs)  
- Enable interactables (edit table → re-analyze)  
- Streaming updates + animations  
- Full custom UI theme + responsiveness  
- Deploy to Vercel  
- **Milestone**: Multi-turn conversation builds/updates dashboard.  

**Phase 5: Testing & Docs** (Day 5 – Feb 7, ~3–4 hrs)  
- Edge cases, rate limits, errors  
- Optimize fetches/cache  
- Finalize README + GIFs  
- Community feedback (Discord/X)  
- **Milestone**: Stable MVP.  

**Phase 6: Submission & Extras** (Day 6 – Feb 8 morning, ~3 hrs)  
- Star Wars theme nods ("May the chains be with you")  
- Record demo video  
- Submit via WeMakeDevs site (repo + link + video)  
- Post submission thread on X for swag/interviews  
- **Milestone**: Submitted! 🚀  

### Potential Post-Hackathon Extensions
- Wallet connect (Web3.js) for real holdings  
- DeFi yield optimizer integration  
- Multi-chain (Solana/Base via APIs)  

### Contributors
- **Ashok** — Solo builder from Gurugram, IN. React + AI enthusiast.

### License
MIT — Feel free to fork & build!

Star ⭐ if ChainChat inspires you!  
Share progress with #TheUIStrikesBack #TamboAI #ChainChat  

May the UI strike back! ⚔️