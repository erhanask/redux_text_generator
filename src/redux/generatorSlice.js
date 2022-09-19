import {createSlice} from "@reduxjs/toolkit";

// https://baconipsum.com/api/?type=all-meat&paras=2&format=html
// https://baconipsum.com/api/?type=all-meat&paras=2&format=text


const generatorSlice = createSlice({
    name: 'textGenerator',
    initialState:[],
    reducers:{}
})

export default generatorSlice.reducer;
