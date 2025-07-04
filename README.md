# JackMint Frontend

A modern, interactive frontend for the JackMint decentralized app (DApp) — a platform blending web3, luck, and instant rewards. Designed for seamless interaction with the JackMint smart contracts, it features a bold, friendly UI, real-time results powered by Chainlink VRF, and a social, gamified experience.

---

## 📖 About The Project

JackMint is a web3-powered lucky draw/jackpot DApp. Users connect their wallets, mint entries, and get a chance to win on-chain rewards. This frontend is built for speed, accessibility, and delight, and is fully integrated with the JackMint smart contracts and Chainlink VRF for provable randomness.

### 🚀 Features

- Connect any Ethereum wallet (via MetaMask, WalletConnect, etc.)
- Mint entries for the latest JackMint draw
- View real-time draw results and winner history
- “Powered by Chainlink VRF” — provably fair, on-chain randomness
- Modern, mobile-friendly UI with custom branding
- Social links, dark/light mode, and fun animations

---

## 🧰 Built With

- React (Vite or Create React App)
- Ethers.js or Viem (for blockchain interaction)
- Tailwind CSS (for styling)
- Chainlink VRF (for randomness; backend integration)
- Vercel (for deployment)
- GitHub Actions (for CI/CD)

---

## 🛠️ Getting Started

### Prerequisites

- Node.js & npm  
- MetaMask or any Ethereum wallet extension  
- (Optional) Access to the JackMint backend contracts

### 📥 Installation

```bash
git clone https://github.com/YOUR_USERNAME/Jackmint-frontend.git
cd Jackmint-frontend
npm install
```

---

## ⚙️ Usage

### 🚩 Local Development

```bash
npm run dev
```

- Open [http://localhost:5173](http://localhost:5173) in your browser (Vite default).

### ⚡ Connect Wallet and Interact

1. Click “Connect Wallet” on the home page.
2. Mint entries, view draws, or check winner boards.
3. All transactions are on-chain and require testnet ETH.

---

## 🌐 Deployment

JackMint frontend is optimized for Vercel.

### 1. Push your code to GitHub.

### 2. Deploy with Vercel:

- Go to [vercel.com](https://vercel.com) and import this repo.
- Vercel auto-detects React/Vite—just click "Deploy".
- Get your production URL (e.g., jackmint.vercel.app).

#### Custom Domain

- In Vercel dashboard → Project → Settings → Domains
- Add your own domain or use the .vercel.app domain provided

---

## 🔗 Environment Variables

Create a `.env` file in the project root for your setup:

```env
VITE_CONTRACT_ADDRESS=your_jackmint_contract_address
VITE_CHAIN_ID=11155111 # e.g., Sepolia
VITE_CHAINLINK_VRF_EXPLAIN_URL=https://chain.link/vrf
```

---

## 🛣️ Roadmap

- [ ] Multi-chain support (Polygon, Arbitrum, etc.)
- [ ] Leaderboards and social features
- [ ] NFT/POAP rewards for participants
- [ ] Accessibility improvements
- [ ] Mobile app PWA support

See [issues](https://github.com/YOUR_USERNAME/Jackmint-frontend/issues) for more ideas or to contribute.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository  
2. Create a new branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. Push to GitHub:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a pull request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📬 Contact

**JackMint Team**  
🔗 [Frontend Repository](https://github.com/YOUR_USERNAME/Jackmint-frontend)  
🔗 [Backend/Smart Contracts](#)  
🌐 Powered by [Chainlink VRF](https://chain.link/vrf)

---
