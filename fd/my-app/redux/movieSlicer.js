import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { get_call_module } from '../utils/module_call'

export const fetchMovie = createAsyncThunk("fetchMovie", async () =>
{
    const data = await get_call_module("authors");
    console.log(data);
    return data
})
// export const fetchAuthor = createAsyncThunk("fetchActor", async () =>
//     {
//         const data = await fetch('http://127.0.0.1:8000/api/actors')
//         return data.json()
//     })
const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        isLoading: false,
        data: [],
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.pending, (state, action) => {
            state.isLoading = true;
            state.error = false; 
                });
        builder.addCase(fetchMovie.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = false; 
        });
        builder.addCase(fetchMovie.rejected, (state, action) => {

            state.isLoading = false;
            state.error = true;
            state.data = null; 
                });
    }
})

export default movieSlice.reducer;