import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const ageUpAsync = createAsyncThunk('age/ageUpAsync', async (amount, thunkAPI) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(amount);
        }, 1000);
    });
});

export const ageDownAsync = createAsyncThunk('age/ageDownAsync', async (amount, thunkAPI) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(amount);
        }, 1000);
    });
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
            .addCase(ageUpAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(ageUpAsync.fulfilled, (state, action) => {
                state.value += action.payload;
                state.status = 'succeeded';
            })
            .addCase(ageUpAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(ageDownAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(ageDownAsync.fulfilled, (state, action) => {
                state.value -= action.payload;
                state.status = 'succeeded';
            })
            .addCase(ageDownAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { increment, decrement, incrementByAmount } = ageSlice.actions;

export default ageSlice.reducer;


