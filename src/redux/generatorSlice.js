import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// https://baconipsum.com/api/?type=all-meat&paras=2&format=html
// https://baconipsum.com/api/?type=all-meat&paras=2&format=text

export const fetchText = createAsyncThunk(
    'text/getData',
     async ({paras=4,format = 'html'}) => {
        console.log(format);
        const res = await axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${format}`);

         return res.data;
    }
)

const generatorSlice = createSlice({
    name: 'text',
    initialState: {
        item: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: {
        [fetchText.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.item = action.payload;
        },
        [fetchText.pending]: (state, action) => {
            state.status = 'loading';

        },
        [fetchText.rejected]: (state, action) => {
            state.status = 'failed';

        }
    }
})

export const textItem = state => state.text.item;
export const textStatus = state => state.text.status;

export default generatorSlice.reducer;
