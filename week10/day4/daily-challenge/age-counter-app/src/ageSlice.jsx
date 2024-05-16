import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAge = createAsyncThunk('age/fetchAge', async () => {
    const response = await fetch('/data/age.json');
    const data = await response.json();
    return data.age;
});

const ageSlice = createSlice({
    name: 'age',
    initialState: {
        value: 0,
        status: 'idle',
        error: null
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAge.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAge.fulfilled, (state, action) => {
                state.value = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchAge.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { increment, decrement, incrementByAmount } = ageSlice.actions;

export default ageSlice.reducer;

