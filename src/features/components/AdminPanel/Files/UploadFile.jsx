
import React, { useEffect, useState } from 'react'
import {   Upload, message,Button,
  Form,
  Input,Typography } from 'antd';
  import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { resetDataToFile, uploadFileStart } from '../../../redux/Files/filesSlice';
function UploadFile() {

  const [name, setName] = useState("");
  const [file_to_upload, setFile] = useState(null);
    const dispatch = useDispatch();


const files=useSelector((state)=>state.files)

    useEffect(() => {
      if (files.message) {
        message.success(files.message);
        
       dispatch(resetDataToFile()) // Dispatch an action to reset the 'done' state to false
      }
      if ( files.error) {
        message.error( files.error);
        dispatch(resetDataToFile())
      }
    }, [files.message , files.error]);



  const onFinish = (e) => {
  // console.log({e})
let dataFile={
name:name,
file_to_upload:file_to_upload

}

  dispatch(uploadFileStart(dataFile))

      };

  
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 8,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
          },
        },
      };
     
   
    
  //-------------------------------
  return (
 
<div className='div_child_add'>

    <Form   
    
    {...formItemLayout}
   
    
    
       onFinish={onFinish}
    
       onFinishFailed={onFinishFailed}
       autoComplete="off" 
       
      >
    
        <Typography.Title style={{textAlign:'center',color:'teal'}}>Upload File!</Typography.Title>
       
     

       
        <Form.Item
          label={<span >File name</span>}
          name="file_name"
          
          rules={[
            {
              required: true,
              message: 'Please enter File name!',
            },
          ]}
        >
          <Input placeholder='Enter enter File path'  onChange={(event) => setName(event.target.value)}
          />
        </Form.Item>
     <Form.Item
      label={<span >File Path</span>}
      name="path_file"
      
      rules={[
        {
          required: true,
          message: 'Please enter File path!',
        },
      ]}
     
     >



     <Upload
        //accept=".pdf, .doc, .docx"
        beforeUpload={() => false}
        onChange={(e)=>{
          console.log('llllllllllll')
          console.log(e)
          console.log("from upload com "+e.file)
          setFile(e.file);
        }}
      >
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>


     </Form.Item>
    







        <Form.Item
          
        >
          <Button className='card_button' type="primary" htmlType="submit"  block >
           Upload
          </Button>
          
        </Form.Item>

      
      </Form>
    
    
    
    
     </div>
    



  )
}

export default UploadFile 
