import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './features/components/Login'
import Register from './features/components/Register'
import FileCreate from './features/components/AdminPanel/Files/FileCreate'

import ShowFiles from './features/components/AdminPanel/Files/ShowFiles'
import BaseLayout from './components/BaseLayout'
import RequireAuth from './components/RequireAuth'

const ROLES = {
  Member: 'Member',
  Admin: 'Admin'
}

function App() {
  return (  
    <BaseLayout>
        <Routes>
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />
          
            <Route element={<RequireAuth allowedRoles={[ROLES.Member]} />}>
              {/* <Route path="/" element={<Home />} /> */}
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route exact path="add/file" element={<FileCreate />} />
              <Route exact path="show/file" element={<ShowFiles />} />
            </Route>

            {/*<Route element={<RequireAuth allowedRoles={[Member, Admin]} />}>
              {/* <Route path="lounge" element={<Lounge />} /> */}
            {/*</Route>

            {/* <Route path="*" element={<Missing />} /> */}
          
        </Routes>
    </BaseLayout>
  );
}


export default App
