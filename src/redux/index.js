import { createAsyncThunk, createSlice, configureStore } from "@reduxjs/toolkit";
import api, { setAccessToken, normalizeBULLSHITOpenClassRoom } from "../api"

export const userLogin = createAsyncThunk(
    'user/login',
    async (credential) => {
        const {token} = await api.post("/user/login", credential)
            .then(normalizeBULLSHITOpenClassRoom);
        setAccessToken(token);
        const user = await api.post('/user/profile')
            .then(normalizeBULLSHITOpenClassRoom);
        return user;
    }
  )

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLogged: false,
        isRemember: false,
        token: "",
        data: {
            firstName: "Tony",
            lastName: "Stark",
            email: "tony@stark.com",
            password: "password123",         
        },
    },
    reducers: {
        logout: (state, action) => {
            state.isLogged = !state.isLogged
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLogged = true;
        })
      },
})

export const { getUser, getLogin, updateUser, logout } = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})

