import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Button, message, Divider,
  Form,
  Select, Input,Typography, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getFilesReguest } from '../../../redux/Files/filesSlice';
import { getUsersStart } from '../../../redux/Users/usersSlice';
import { resetData, updateGroupStart } from '../../../redux/Groups/groupsSlice';
function UpdateGroup() {
  const [messageApi, contextHolder] = message.useMessage();

    const location=useLocation();
    const{id,name} = location.state;

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

  const { Option } = Select;

const dispatch=useDispatch();
const optionFiles=useSelector((state)=>state.files.files);
const optionUsers=useSelector((state)=>state.users.users);

const [group,setGroup]=useState({
name:"",
id:id,
file_list:[],//idFiles
user_list:[]//idUsers

})
  
useEffect(()=>{
    setGroup({...group, name: name})
dispatch(getFilesReguest())
dispatch(getUsersStart())
  },[])

  const groups=useSelector((state)=> state.groups)
  
  useEffect(() => {
    if (groups.message) {
      message.success(groups.message);
     dispatch(resetData()) // Dispatch an action to reset the 'done' state to false
    }
    if ( groups.error) {
      message.error(groups.error);
      dispatch(resetData())
    }
  }, [groups.message , groups.error]);


  const onFinish = (e) => {
   
    console.log(group.name);
    console.log(group.file_list);
    console.log(group.user_list)
    dispatch(updateGroupStart(group))



      };

  //-------------------------------
  return (
 
<div className='div_child_add'>

{contextHolder}

    <Form 

  
    
    {...formItemLayout}
   
    className='addGroupForm' 
    
       onFinish={onFinish}
    
      //  onFinishFailed={onFinishFailed}
       autoComplete="off" 
       
      >
    
        <Typography.Title style={{textAlign:'center',color:'teal'}}>Update Group!</Typography.Title>
        <Form.Item
          label={<span >Group name</span>}
         
          
          
        >
          <Input placeholder='Enter enter Group name' value={group.name}   onChange={(e)=>setGroup({...group,name:e.target.value})}
          />
        </Form.Item>
    
       
        <Form.Item
        name="files"
        label={<span >Files</span>}
       
      >
        <Select
   mode="multiple"
   style={{ width: '100%' }}
   placeholder="Select files"
   optionLabelProp="label"
   onChange={(value) => {
     // Convert the selected value to an array if it's not already an array
     const selectedValues = Array.isArray(value) ? value : [value];

     // Map the selected values to their ids
     const ids_files = selectedValues.map((value) => {
       const option = optionFiles.find((option) => option.name === value);
       return option ? option.id : null;
     });

    
    //  setIdsFiles(ids_files)
    setGroup({...group,file_list:ids_files})
   
   }}
 >
   {optionFiles.map((option) => (
     <Option key={option.id} value={option.name} label={option.name}>
       {option.name}
     </Option>
   ))}
 </Select>
      </Form.Item>
        

      <Form.Item
        name="users"
        label={<span >Users</span>}
       
      >
        <Select
   mode="multiple"
   style={{ width: '100%' }}
   placeholder="Select users"
   optionLabelProp="label"
   onChange={(value) => {
     // Convert the selected value to an array if it's not already an array
     const selectedValues = Array.isArray(value) ? value : [value];

     // Map the selected values to their ids
     const ids_users = selectedValues.map((value) => {
       const option = optionUsers.find((option) => option.name === value);
       return option ? option.id : null;
     });

    
    
    //  setIdsUsers(ids_users);
    setGroup({...group,user_list:ids_users})
   
   }}
 >
   {optionUsers.map((option) => (
     <Option key={option.id} value={option.name} label={option.name}>
       {option.name}
     </Option>
   ))}
 </Select>
      </Form.Item>


        <Form.Item
          
        >
          <Button  type="primary" htmlType="submit" block className='card_button' >
           create
          </Button>
          
        </Form.Item>
      </Form>
    
    
    
    
     </div>
    



  )
}

export default UpdateGroup