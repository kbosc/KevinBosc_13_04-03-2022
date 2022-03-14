import { createAsyncThunk, createSlice, configureStore } from "@reduxjs/toolkit";
import api, { setAccessToken, normalizeBULLSHITOpenClassRoom } from "../api"

export const userLogin = createAsyncThunk(
    'user/login/get',
    async (credential) => {
        const {token} = await api.post("/user/login", credential)
            .then(normalizeBULLSHITOpenClassRoom);
        setAccessToken(token);
        const user = await api.post('/user/profile')
            .then(normalizeBULLSHITOpenClassRoom);
            // console.log(credential);
            // console.log(user);
        return {user, token};
    }
  )

export const modifyData = createAsyncThunk(
    'user/login/put',
    async (credential, {getState}) => {
        const state = getState();
        // console.log(state);
        setAccessToken(state.user.token);
        const modifyUser = await api.put('/user/profile', credential)
            .then(credential);
        // console.log(credential)
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
        modifyData: (state, action) => {
            state.data.firstName = action.payload[0]
            state.data.lastName = action.payload[1]
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(userLogin.fulfilled, (state, action) => {
            state.data = action.payload.user;
            state.token = action.payload.token
            state.isLogged = !state.isLogged;
            // console.log(action);
            // console.log(state.token);
        })
        .addCase(modifyData.fulfilled, (state, action) => {
            state.data.firstName = action.payload.firstName;
            state.data.lastName = action.payload.lastName;

        })
      },
})

export const { getUser, getLogin, updateUser, logout } = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
})

