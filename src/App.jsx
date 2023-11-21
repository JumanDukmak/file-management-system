import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LogIn from './Pages/LogIn/LogIn'
import AdminLayout from './component/AdminLayout'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LogIn />} />
          <Route path='/' element={<AdminLayout />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
