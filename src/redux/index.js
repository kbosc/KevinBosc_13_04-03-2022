import { createAsyncThunk, createSlice, configureStore } from "@reduxjs/toolkit";
import api, { setAccessToken, normalizePath } from "../api"

export const userLogin = createAsyncThunk(
    'user/login/get',
    async (credential) => {
        const {token} = await api.post("/user/login", credential)
            .then(normalizePath);
        setAccessToken(token);
        const user = await api.post('/user/profile')
            .then(normalizePath);
        return {user, token};
    }
  )

export const modifyData = createAsyncThunk(
    'user/login/put',
    async (credential, {getState}) => {
        const state = getState();
        setAccessToken(state.user.token);
        const modifyUser = await api.put('/user/profile', credential)
            .then(credential);
        return modifyUser.data.body;
    }
  )

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLogged: false,
        isRemember: false,
        token: "",
        data: {},
    },
    reducers: {
        logout: (state, action) => {
            state.isLogged = !state.isLogged
            state.data = {}
            state.token = ""
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(userLogin.fulfilled, (state, action) => {
            state.data = action.payload.user;
            state.token = action.payload.token
            state.isLogged = !state.isLogged;
        })
        .addCase(modifyData.fulfilled, (state, action) => {
            state.data.firstName = action.payload.firstName;
            state.data.lastName = action.payload.lastName;

        })
      },
})

export const { logout } = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
})

