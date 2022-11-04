import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [
  {
    id: "1",
    art: "Äthiopien",
    vkp: "12.0",
    marge: "20.0",
    ekp: "10.0",
    rabatt: "0.0",
    vkpRabatt: "12.0",
  },
  {
    id: "2",
    art: "Burundi",
    vkp: "13.0",
    marge: "20.0",
    ekp: "11.0",
    rabatt: "0.0",
    vkpRabatt: "13.0",
  },
];

export const bohnenSlice = createSlice({
  name: "bohnen",
  initialState: INITIAL_STATE,
  reducers: {
    updateData: (state, action) => {
      const bohne = action.payload;
      console.log(bohne)
      return state.map((s) => {
        if (s.id === bohne.id) {
          const rabatt = parseFloat(bohne.rabatt || 0.0);
          const vkp = parseFloat(bohne.vkp).toFixed(2);
          const vkpRabatt = (vkp - vkp * (rabatt / 100)).toFixed(2);
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
          };
        } else {
          return s;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateData } = bohnenSlice.actions;

export default bohnenSlice.reducer;
