
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Avatar, Button, Card, Checkbox, Col, Row } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersStart } from '../../../redux/Users/usersSlice'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



function Users() {

const dispatch=useDispatch();
const users=useSelector((state)=>state.users)
  useEffect(()=>{

   dispatch(getUsersStart()) 
  },[dispatch])
  

   
    return (
        <div className="conatiner_body">

        <h2>Users</h2>
       

     
        <div className='container_child'>
      
                <Row gutter={[16, 24]}>
                
               
          
                {

users.users.map((user,i)=>(

  <Col className="gutter-row" key={i}  >


<Card  
      hoverable
        style={{
          width: 300,
          marginRight:'10px'
        }}
      
        
      >
        <Meta
          avatar={  <Avatar style={{ backgroundColor: '#c9efef', color: 'teal' }}>{user.name.charAt(0).toUpperCase()}</Avatar>}
          title={user.name}
          description={user.email}
        />
      </Card>

  </Col>

  
))

    }


{
 //لو هو عم يحمل  رح يعرضل لودينغ 
 users.loading &&  <Backdrop
 sx={{ color: 'teal', zIndex: (theme) => theme.zIndex.drawer + 1 }}
 open
 
>
 <CircularProgress color="inherit" />
</Backdrop>}
 

 {

  //   لو مافي غروبات 
  !users.users && !users.loading &&(<div>No Users </div>)
 }

 {
  //found error
  
users.error  && <div> {`Error :${users.error} `}</div>

 }
                  
            
                    
            
            
                </Row>
            
            
            
            </div>
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
      )
}

export default Users