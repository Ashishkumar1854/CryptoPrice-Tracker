// src/utils/mockData.js
export const sampleCryptoData = [
  {
    id: 1,
    logo: "/images/btc.png",
    name: "Bitcoin",
    symbol: "BTC",
    price: 30000,
    change1h: 0.5,
    change24h: 1.2,
    change7d: -3.5,
    marketCap: 600000000000,
    volume24h: 35000000000,
    circulatingSupply: 19000000,
    maxSupply: 21000000,
  },
  {
    id: 2,
    logo: "/images/eth.png",
    name: "Ethereum",
    symbol: "ETH",
    price: 2000,
    change1h: -0.3,
    change24h: 0.7,
    change7d: 5.1,
    marketCap: 250000000000,
    volume24h: 20000000000,
    circulatingSupply: 115000000,
    maxSupply: null,
  },
  // Add 3 more like USDT, BNB, XRP with similar structure
];
