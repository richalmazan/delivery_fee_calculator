import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  options: [
    {
      title: 'Within Apalit',
      insideSourceTown: true,
      distanceFromSourceTown: 0,
      baseRate: 40.00,
      perKm: 10.00,
    },
    {
      title: 'Barney\'s Mang Cha-a - CDCP',
      insideSourceTown: false,
      distanceFromSourceTown: 4.5,
      baseRate: 50.00,
      perKm: 15.00,
    },
    {
      title: 'Cake\'s and Cream Cafe',
      insideSourceTown: false,
      distanceFromSourceTown: 4.5,
      baseRate: 50.00,
      perKm: 15.00,
    },
    {
      title: 'Our Daily Bread Cafe - San Simon',
      insideSourceTown: false,
      distanceFromSourceTown: 5.1,
      baseRate: 50.00,
      perKm: 15.00,
    },
    {
      title: 'Milkfridge - Minalin',
      insideSourceTown: false,
      distanceFromSourceTown: 5.2,
      baseRate: 50.00,
      perKm: 15.00,
    },
    {
      title: 'WingShots - Paligui',
      insideSourceTown: false,
      distanceFromSourceTown: 3.4,
      baseRate: 50.00,
      perKm: 15.00,
    }
  ],
  selectedOption: null,
  actualKm: 0.0,
  additionalStore: 0,
  finalDf: 0.0
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setSelectedOptions: (state, action) => {
      state.selectedOption = action.payload
    },
    setActualKm: (state, action) => {
      state.actualKm = parseFloat(action.payload)
    },
    setFinalDf: (state, action) => {
      state.finalDf = action.payload
    },
    setAdditionalStore: (state, action) => {
      state.additionalStore = action.payload
    },
    reset: state => initialState
  }
});

export const { setSelectedOptions, setActualKm, setFinalDf, setAdditionalStore, reset } = calculatorSlice.actions;
export const selectCalculator = (state) => state.calculator;
export default calculatorSlice.reducer;
