import React from "react";

const cryptoData = [
  {
    id: 1,
    logo: "/images/btc.jpg",
    name: "Bitcoin",
    symbol: "BTC",
    price: 30252.22,
    change1h: 2.25,
    change24h: 2.95,
    change7d: -3.5,
    marketCap: 600000000000,
    volume24h: 35004816754,
    supply: 19000000,
    maxSupply: 21000000,
    chart: "/images/btc-chart.png",
  },
  {
    id: 2,
    logo: "/images/eth.jpg",
    name: "Ethereum",
    symbol: "ETH",
    price: 1978.99,
    change1h: -1.34,
    change24h: -0.34,
    change7d: 5.1,
    marketCap: 250000000000,
    volume24h: 20002800882,
    supply: 115000000,
    maxSupply: "∞",
    chart: "/images/eth-chart.png",
  },
  {
    id: 3,
    logo: "/images/usdt.jpg",
    name: "Tether",
    symbol: "USDT",
    price: 1.0,
    change1h: 0.01,
    change24h: 0.02,
    change7d: 0.05,
    marketCap: 83000000000,
    volume24h: 45000000000,
    supply: 83000000000,
    maxSupply: "∞",
    chart: "/images/usdt-chart.png",
  },
  {
    id: 4,
    logo: "/images/xrp.jpg",
    name: "XRP",
    symbol: "XRP",
    price: 0.55,
    change1h: 0.25,
    change24h: -0.12,
    change7d: 1.5,
    marketCap: 30000000000,
    volume24h: 4000000000,
    supply: 55000000000,
    maxSupply: 100000000000,
    chart: "/images/xrp-chart.png",
  },
  {
    id: 5,
    logo: "/images/bnb.jpg",
    name: "BNB",
    symbol: "BNB",
    price: 320.5,
    change1h: 0.15,
    change24h: 0.35,
    change7d: 2.5,
    marketCap: 50000000000,
    volume24h: 1000000000,
    supply: 157000000,
    maxSupply: 200000000,
    chart: "/images/bnb-chart.png",
  },
  {
    id: 6,
    logo: "/images/sol.jpg",
    name: "Solana",
    symbol: "SOL",
    price: 120.75,
    change1h: -0.75,
    change24h: 1.15,
    change7d: 7.2,
    marketCap: 48000000000,
    volume24h: 900000000,
    supply: 400000000,
    maxSupply: "∞",
    chart: "/images/sol-chart.png",
  },
];

const CryptoTable = () => {
  return (
    <div className="p-4 overflow-x-auto">
      <div className="flex justify-center items-center h-40">
        <h1 className="text-3xl font-bold text-green-400">
          XivTech Crypto Price Dashboard
        </h1>
      </div>
      <table className="min-w-full text-white border-collapse rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-green-300">
          <tr>
            {[
              "#",
              "Logo",
              "Name",
              "Symbol",
              "Price ($)",
              "1h %",
              "24h %",
              "7d %",
              "Market Cap",
              "24h Volume",
              "Circulating Supply",
              "Max Supply",
              "7D Chart",
            ].map((head, i) => (
              <th
                key={i}
                className="py-4 px-2 text-sm font-semibold text-center"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((coin, index) => (
            <tr
              key={coin.id}
              className={`text-center text-sm font-medium ${
                index % 2 === 0 ? "bg-gray-900" : "bg-gray-950"
              } hover:bg-gray-800 transition`}
            >
              <td className="py-4 px-2">{index + 1}</td>
              <td className="py-4 px-2">
                <img
                  src={coin.logo}
                  alt={coin.name}
                  className="w-6 h-6 mx-auto rounded-full"
                />
              </td>
              <td className="py-4 px-2">{coin.name}</td>
              <td className="py-4 px-2 text-gray-300">{coin.symbol}</td>
              <td className="py-4 px-2">${coin.price.toLocaleString()}</td>
              <td
                className={`py-4 px-2 ${
                  coin.change1h > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {coin.change1h}%
              </td>
              <td
                className={`py-4 px-2 ${
                  coin.change24h > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {coin.change24h}%
              </td>
              <td
                className={`py-4 px-2 ${
                  coin.change7d > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {coin.change7d}%
              </td>
              <td className="py-4 px-2">
                ${(coin.marketCap / 1e9).toFixed(1)}B
              </td>
              <td className="py-4 px-2">
                ${(coin.volume24h / 1e9).toFixed(1)}B
              </td>
              <td className="py-4 px-2">{(coin.supply / 1e6).toFixed(1)}M</td>
              <td className="py-4 px-2">
                {coin.maxSupply !== "∞"
                  ? (coin.maxSupply / 1e6).toFixed(1) + "M"
                  : "∞"}
              </td>
              <td className="py-4 px-2">
                <img
                  src={coin.chart}
                  alt="7d chart"
                  className="w-20 h-6 mx-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
