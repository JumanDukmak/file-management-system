import React, { useEffect} from 'react';
import { Col, Row ,Avatar, Card, message } from 'antd';
import { useDispatch, useSelector} from 'react-redux';
import { useLocation} from 'react-router-dom';
import { getHistoryFileStart, resetData } from '../../../redux/Groups/groupSlice';

function HistoryFile() {
    const { Meta } = Card;
    const dispatch=useDispatch();
   
    const location=useLocation();
    const{id} = location.state;//id file 
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
        
       
        group.history_file?.map((history,i)=>(
        
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






 
                
          
            
                  
            
                    
            
            
                </Row>
            
            
            
            </div>
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
      )
}

export default HistoryFile










