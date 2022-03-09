import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLogged: true,
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
        getUser: (state, action) => {},
        getToken: (state, action) => {},
        updateUser: (state, action)  => {
            // return () => {
                console.log(action.payload + "" + action.payload);
                state.data.firstName = action.payload[0]
                state.data.lastName = action.payload[1]
                // state.data.firstName = inputFirstName
                // state.data.lastName = inputLastName
            // }
            // const newProfile = {
            //     firstName: action.payload[0],
            //     lastName: action.payload[1],
            //     email: "tony@stark.com",
            //     password: "password123", 
            // }
            // state.data.push(newProfile)
            // const updatingUser = {
            //     data.firstName : action.payload[0],
            //     data.lastName : action.payload[1],
            // }
            // const updatingUser = state.data.find( data => data.firstName === state.data.firstName)
            // updatingUser.firstName = action.payload
            
        },
        logout: (state, action) => {
            state.isLogged = !state.isLogged
        },
    }
})

export const { getUser, getToken, updateUser, logout } = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})

