import './App.css'
import {  Routes, Route } from 'react-router-dom'
import Login from './features/components/Login'
import Register from './features/components/Register'
import FileCreate from './features/components/AdminPanel/Files/FileCreate'

import ShowFiles from './features/components/AdminPanel/Files/ShowFiles'
import BaseLayout from './components/BaseLayout'
import RequireAuth from './components/RequireAuth'
import UploadFile from './features/components/AdminPanel/Files/UploadFile'
import Files from './features/components/AdminPanel/Files/Files'
import UpdateFile from './features/components/AdminPanel/Files/UpdateFile'
import Groups from './features/components/AdminPanel/Groups/Groups'
import Group from './features/components/AdminPanel/Groups/Group'
import UpdateGroup from './features/components/AdminPanel/Groups/UpdateGroup'
import Users from './features/components/AdminPanel/Users/Users'
import AddGroup from './features/components/AdminPanel/Groups/AddGroup'
import Dashboard from './features/components/AdminPanel/Dashboard'
import MultiCheckIn from './features/components/AdminPanel/Groups/MultiCheckIn'
import HistoryFile from './features/components/AdminPanel/Groups/HistoryFile'

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
           
          <Route path="/HistoryFile" element={<HistoryFile />} />

            
            </Route>


<Route element={<RequireAuth allowedRoles={[ROLES.Admin,ROLES.Member]} />}>
              <Route exact path="/" element={<Dashboard />} />

              <Route exact path='/UploadFile' element={<UploadFile />} />
              <Route exact path='/Files' element={<Files />} />
              <Route exact path='/UpdateFile' element={<UpdateFile />} />
              <Route exact path='/MultiCheckIn' element={<MultiCheckIn />} />
              <Route exact path='/Groups' element={<Groups />} />
              <Route exact path='/AddGroup' element={<AddGroup />} />

              <Route exact path='/Group' element={<Group />} />

              <Route exact path='/UpdateGroup' element={<UpdateGroup />} />

            
              <Route exact path='/Users' element={<Users />} />

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
