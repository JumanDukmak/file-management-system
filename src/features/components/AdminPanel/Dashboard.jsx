import React, { useEffect, useState } from 'react';
import { Col, Row ,Avatar, Card ,Space, Button, Divider} from 'antd';
import { EditOutlined, EllipsisOutlined, DeleteOutlined ,UngroupOutlined} from '@ant-design/icons';
import { DownloadOutlined,ReadOutlined,FileTextOutlined,LockOutlined,UnlockOutlined} from '@ant-design/icons';

import { useDispatch, useSelector} from 'react-redux';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { deleteGroupStart, getGroupsStart } from '../../redux/Groups/groupsSlice';
import { getFilesReguest } from '../../redux/Files/filesSlice';
import { removeFileStart } from '../../redux/Groups/groupSlice';
import { DownloadFileRequest, ReadFileRequest } from '../../redux/Files/fileSlice';




function Dashboard() {
    const { Meta } = Card;
    

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const groups= useSelector((state) => state.groups)
    const files= useSelector((state) => state.files)

    useEffect(()=>{
        dispatch(getGroupsStart())
        dispatch(getFilesReguest())

       
    },[dispatch])
    
  






      return (
        <div className="conatiner_body">

        <h2>Dashboard</h2>
      
      

   
        <div style={{color:'teal',fontSize:'18px',fontWeight:'600'}}>Groups</div>

        <div className=' my_list_users'>



        {
       
       // لو في غروبات رح يرجعهن
       (groups.groups)
       &&
       groups.groups.map((group,i)=>(
        
        <Col className="gutter-row" key={i} style={{marginRight:'10px'}}>
                  
            
            
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
  !groups.groups && !groups.loading &&(<div>No Groups </div>)
 }

 {
  //found error
groups.error  && <div> {'Error : Not Found '}</div>

 }


        </div>

        <Divider></Divider>
        
        {/* fjk */}
        <div style={{color:'teal',fontSize:'18px',fontWeight:'600'}}>Files</div>

        <div className='my_list_files'>

        <Row gutter={[16, 24]}>
                
        
                {
        
        files.files?.map((file,i)=>(
        
        <Col className="gutter-row" key={i} >
                  
            
            
                  <Card 
              hoverable
                style={{
                  width: 300,
                }}
              
                actions={[



               
                  <EditOutlined key={'Edit'}
                  onClick={()=>{
                    navigate('/UpdateFile',{state:{id:file.id}})
                  }}
                  
                  />,
<DeleteOutlined key={'delete'}  
onClick={()=>{
  console.log('the id_group is :'+ id);
  console.log('the id_file is :' + file.id)
  
  const id_group=id;
  const id_file=file.id;
  let ids={
    id_group,
    id_file
  }
  dispatch(removeFileStart(ids))
  
  
            }}

/>,
<ReadOutlined key={'read'} onClick={()=>{

dispatch(ReadFileRequest(file.id))

}}/>,
<DownloadOutlined key={'download'}

onClick={()=>{
let dataFile={
id:file.id,
path:file.path

}
dispatch(DownloadFileRequest(dataFile))

}}

/>
                
                ]}
              >
        
        
        
        
                <Meta  onClick={()=>{
                 
      

                  }}
                  avatar={<Avatar   style={{ backgroundColor: '#c9efef', color: 'teal' }}   icon={<FileTextOutlined />} />}
                  title={file.name}
                  description={(file.status == 'free') ? ('The Status is: '+ file.status + file.id) : ('reserver by : '+file.reserver.name)}

     
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

export default Dashboard










