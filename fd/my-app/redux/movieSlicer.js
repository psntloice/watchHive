import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchMovie = createAsyncThunk("fetchMovie", async () =>
{
    const data = await fetch('')
    return data.json()
})
const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        isLoading: false,
        data: null,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchMovie.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchMovie.rejected, (state, action) => {
            state.error = true
        });
    }
})

export default movieSlice.reducer;