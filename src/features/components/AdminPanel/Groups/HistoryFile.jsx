import React, { useEffect} from 'react';
import { Col, Row ,Avatar, Card, message } from 'antd';
import { useDispatch, useSelector} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { FileTextOutlined} from '@ant-design/icons';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { getHistoryFileStart, resetData } from '../../../redux/Groups/groupSlice';

function HistoryFile() {
    const { Meta } = Card;
    const dispatch=useDispatch();
   
    const location=useLocation();
    const{id} = location.state;
const group=useSelector((state)=>state.group)

    useEffect(()=>{
        dispatch(getHistoryFileStart(id))
    },[dispatch])
    
   
  useEffect(()=>{
    if(group.error)
  {
    message.error( group.error);
        dispatch(resetData())
  }
  },[group.error])




      return (
        <div className="conatiner_body">

        <h2>History File</h2>
       
     
    
        <div className='container_child'>
      
                <Row gutter={[16, 24]}>
                
                {
        
        (group.history_file)
        &&
        group.history_file.map((history,i)=>(
        
            <Col className="gutter-row" key={i} >
                  
            
            
            <Card 
        hoverable
          style={{
            width: 300,
          
          }}
        
          actions={[
           


          ]}
        >
  
  
  
  
          <Meta
          avatar={  <Avatar style={{ backgroundColor: '#c9efef', color: 'teal' }}>{i+1}</Avatar>}
          title={history.operation_name}
        description={`${history.operation_date}\n  By \n${history.user.name}`}
        />
        </Card>
      
      
      
      
      
            </Col> 
        
        
        
                    ))
                }




{
 //لو هو عم يحمل  رح يعرضل لودينغ 
 group.loading &&  <Backdrop
 sx={{ color: 'teal', zIndex: (theme) => theme.zIndex.drawer + 1 }}
 open
 
>
 <CircularProgress color="inherit" />
</Backdrop>}
 

 {

  //   لو مافي history 
  !group.history_file && !group.loading &&(<div>No History </div>)
 }

 
                
          
            
                  
            
                    
            
            
                </Row>
            
            
            
            </div>
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
      )
}

export default HistoryFile










