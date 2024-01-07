import React, { useEffect, useState } from 'react';
import { Col, Row ,Avatar, Card ,Space, Button, message} from 'antd';
import { EditOutlined, EllipsisOutlined, DeleteOutlined ,UngroupOutlined} from '@ant-design/icons';
import { useDispatch, useSelector} from 'react-redux';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { deleteGroupStart, getGroupsStart, resetData } from '../../../redux/Groups/groupsSlice';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';




function Groups() {
    const { Meta } = Card;
    

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const groups= useSelector((state) => state.groups)
    useEffect(()=>{
        dispatch(getGroupsStart())  
    },[dispatch])
    


    if(groups.error){
      message.error( groups.error);
        dispatch(resetData())
    }
  






      return (
        <div className="conatiner_body">

        <h2>Groups</h2>
      

   
        
        <div className='container_child'>
            
                <Row gutter={[16, 24]}>
                
        
                {
       
       // لو في غروبات رح يرجعهن
       (groups.groups)
       &&
       groups.groups.map((group,i)=>(
        
        <Col className="gutter-row" key={i} >
                  
            
            
                  <Card 
              hoverable
                style={{
                  width: 300,
                }}
              
                actions={[
                  <DeleteOutlined key="Deleting" onClick={()=>{
                    console.log('delete ');
                    
                    dispatch(deleteGroupStart(group.id))
                  }}/>,
                  
                  <EditOutlined key="edit" onClick={()=>{

                    navigate('/UpdateGroup',{state:{id:group.id,name:group.name}})
                    
                  }}/>,
                
                ]}
              >
        
        
        
        
                <Meta onClick={()=>{console.log('group.id :')
                  console.log(group.id);
                  //an object containing the 
                  //state to pass to the OtherPage
                navigate('/Group',{state:{id:group.id,name:group.name}})
                
                }}
                  avatar={<Avatar   style={{ backgroundColor: '#c9efef', color: 'teal' }} size="large"  icon={<UngroupOutlined />} />}
                  title={group.name}
                description={'created at: '+ format(new Date(group.created_at), 'yyyy/MM/dd')}
                />
              </Card>
            
            
            
            
            
                  </Col>
        
        
        
                    ))
 }
 {
 //لو هو عم يحمل  رح يعرضل لودينغ 
 groups.loading && <Backdrop
 sx={{ color: 'teal', zIndex: (theme) => theme.zIndex.drawer + 1 }}
 open
 
>
 <CircularProgress color="inherit" />
</Backdrop>}
 

 {

  //   لو مافي غروبات 
  !groups.groups && !groups.loading && (<div>No Groups </div>)
 }

 {/* {
  //found error
groups.error  && <div> {'Error : Not Found '}</div>

 }
                 */}
            
                  
            
                    
            
            
                </Row>
            
            
            
            </div>
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
      )
}

export default Groups










