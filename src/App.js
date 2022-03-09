import { Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import React from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./pages/Error404"
import Login from "./pages/Login"
import Main from "./pages/Main"
import User from "./pages/User"

import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeDefault } from "./utils/style/theme"
import { ThemeProvider } from "styled-components"
import { store } from "./redux"

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={ThemeDefault}>
        <React.Fragment>
          <GlobalStyle />
            <Header />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/login' element={<Login />}/>
              <Route path='/user/:id' element={<User />}/>
              <Route path='/*' element={<Error />}/>
            </Routes>
            <Footer />
        </React.Fragment>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
