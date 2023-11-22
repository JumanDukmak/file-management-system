import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './features/components/Login'
import Register from './features/components/Register'

const ROLES = {
  Member: 'Member',
  Admin: 'Admin'
}

function App() {
  return (
    <Routes>
      
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* we want to protect these routes */}
        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Member]} />}>
          <Route path="/" element={<Home />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Dashboard />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Mem, ROLES.Admin]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route>

        <Route path="*" element={<Missing />} /> */}
      
    </Routes>
  );
}

export default App
