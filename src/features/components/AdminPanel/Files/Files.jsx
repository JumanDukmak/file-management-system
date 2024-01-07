import React, { useEffect} from 'react';
import { Col, Row ,Avatar, Card, message } from 'antd';
import { EditOutlined,  DeleteOutlined ,DownloadOutlined,ReadOutlined,FileTextOutlined,LockOutlined,UnlockOutlined} from '@ant-design/icons';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  deleteFileStart, getFilesReguest, resetDataFiles } from '../../../redux/Files/filesSlice';
import {    DownloadFileRequest, ReadFileRequest, resetDataFile } from '../../../redux/Files/fileSlice';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Files() {
    const { Meta } = Card;
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const files= useSelector((state) => state.files)
    const file= useSelector((state) => state.file)
    useEffect(()=>{
        dispatch(getFilesReguest())
    },[dispatch])
    
   
  useEffect(()=>{


    if(files.error){
      message.error( files.error);
        dispatch(resetDataFiles())
    }

    if(file.error)
  {
    message.error( file.error);
        dispatch(resetDataFile())
  }
  },[files.error,file.error])




      return (
        <div className="conatiner_body">

        <h2>Files</h2>
       
     
    
        <div className='container_child'>
      
                <Row gutter={[16, 24]}>
                
                {
        
        (files.files)
        &&
        files.files.map((file,i)=>(
        
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
  console.log('delete file');
  
  dispatch(deleteFileStart(file.id))
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

/>,






          ]}
        >
  
  
  
  
          <Meta
avatar={<Avatar   style={{ backgroundColor: '#c9efef', color: 'teal' }}   icon={<FileTextOutlined />} />}     
        title={file.name}
        description={(file.status == 'free') ? ('The Status is: '+ file.status + file.id) : ('reserver by : '+file.reserver.name)}
        />
        </Card>
      
      
      
      
      
            </Col> 
        
        
        
                    ))
                }




{
 //لو هو عم يحمل  رح يعرضل لودينغ 
 files.loading &&  <Backdrop
 sx={{ color: 'teal', zIndex: (theme) => theme.zIndex.drawer + 1 }}
 open
 
>
 <CircularProgress color="inherit" />
</Backdrop>}
 

 {

  //   لو مافي غروبات 
  !files.files && !files.loading &&(<div>No Files </div>)
 }

 {/* {
  //found error
files.error  && <div> {`Error :${files.error} `}</div>

 } */}
   
                
          
            
                  
            
                    
            
            
                </Row>
            
            
            
            </div>
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
      )
}

export default Files










