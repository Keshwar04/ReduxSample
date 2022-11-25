import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "print",
  initialState: { value: "demoValue" }
});

export default slice.reducer;
