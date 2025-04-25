import { createSlice } from "@reduxjs/toolkit";

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {},
  reducers: {
    updatePrices: (state) => {
      state.assets = state.assets.map((asset) => {
        const randomChange = (Math.random() - 0.5) * 2; // between -1 and 1
        const priceChange = asset.price * (randomChange / 100);

        return {
          ...asset,
          price: +(asset.price + priceChange).toFixed(2),
          change1h: +(asset.change1h + randomChange).toFixed(2),
          change24h: +(asset.change24h + randomChange).toFixed(2),
          volume24h: asset.volume24h + Math.floor(Math.random() * 1000000),
        };
      });
    },
  },
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;
