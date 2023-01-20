import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: 'loadingSlice',
    initialState: {
        value: {
            loading: true
        }
    }, 
    reducers: {
        toggleLoading: (state) => {
            state.value = !state.value
        },
        setLoadingTrue: (state) => {
            state.value = true
        },
        setLoadingFalse: (state) => {
            state.value = false
        }
    }
})

export const {toggleLoading, setLoadingTrue, setLoadingFalse} = loadingSlice.actions

export const selectLoading = state => state.loading.value

export default loadingSlice.reducer