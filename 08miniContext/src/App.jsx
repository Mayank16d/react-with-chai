import './App.css'
import Profile from './cmponents/Profile'
import Login from './cmponents/login'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    
    <UserContextProvider>
      <h1>Mayank</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
