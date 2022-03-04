import { Routes, Route } from "react-router-dom"
import GlobalStyle from './utils/style/GlobalStyle'
import Main from "./pages/Main"
import Signin from "./pages/Signin"
import User from "./pages/User"
import Error from "./pages/Error404"


function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<Signin />}/>
        <Route path='/user/:id' element={<User />}/>
        <Route path='/*' element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
