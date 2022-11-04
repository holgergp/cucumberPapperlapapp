import { createSlice } from "@reduxjs/toolkit";

export const bohnenSlice = createSlice({
  name: "bohnen",
  initialState: [],
  reducers: {
    updateData: (state, action) => {
      const bohne = action.payload;
      return state.map((s) => {
        if (s.id === bohne.id) {
          const rabatt = parseFloat(bohne.rabatt || 0.0);
          const absRabatt = parseFloat(bohne.absRabatt || 0.0);
          const vkp = parseFloat(bohne.vkp).toFixed(2);
          const vkpRabatt = (vkp - vkp * (rabatt / 100) - absRabatt).toFixed(2);
          const ekp = parseFloat(bohne.ekp).toFixed(2);
          const marge = ((vkpRabatt / ekp - 1) * 100).toFixed(2);
          return {
            id: bohne.id,
            art: bohne.art,
            vkp,
            vkpRabatt,
            marge,
            ekp,
            rabatt,
            absRabatt,
          };
        } else {
          return s;
        }
      });
    },
    addData: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateData, addData } = bohnenSlice.actions;

export default bohnenSlice.reducer;
