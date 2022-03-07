import { Routes, Route } from "react-router-dom"
import React from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./pages/Error404"
import Signin from "./pages/Signin"
import Main from "./pages/Main"
import User from "./pages/User"

import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider } from "styled-components"
import { ThemeDefault } from "./utils/style/theme"

function App() {
  return (
    <ThemeProvider theme={ThemeDefault}>
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={<Signin />}/>
          <Route path='/user/:id' element={<User />}/>
          <Route path='/*' element={<Error />}/>
        </Routes>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
