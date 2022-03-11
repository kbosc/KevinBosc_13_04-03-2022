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
        console.log(state);
        setAccessToken(state.user.token);
        const modifyUser = await api.put('/user/profile', credential)
            .then(credential);
        // const {token} = await api.post("/user/login", credential[0])
        //     .then(normalizeBULLSHITOpenClassRoom);
        // setAccessToken(token);
        // const modifyUser = await api.put('/user/profile', credential[1])
        //     .then(credential);
        //     // console.log(credential[0]);
        //     // console.log(user);
        //     // console.log(credential[1]);
        return modifyUser;
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
            // state.data = {}
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
            state.data.firstName = action.payload.data.body.firstName;
            state.data.lastName = action.payload.data.body.lastName;
        })
      },
})

export const { getUser, getLogin, updateUser, logout } = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     // Ignore these action types
    //     ignoredActions: ['your/action/type'],
    //     // Ignore these field paths in all actions
    //     ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
    //     // Ignore these paths in the state
    //     ignoredPaths: ['items.dates'],
    //   },
    // }),
})

