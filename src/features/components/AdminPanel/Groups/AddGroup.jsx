import { useEffect, useState } from 'react'
import { Button, Form, Select, Input, Typography, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getFilesReguest } from '../../../redux/Files/filesSlice';
import { getUsersStart } from '../../../redux/Users/usersSlice';
import { addGroupStart, resetData } from '../../../redux/Groups/groupsSlice';

function AddGroup() {
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

  const { Option } = Select;

  const dispatch = useDispatch();
  // const [idsFiles,setIdsFiles]=useState([]);
  const optionFiles = useSelector((state) => state.files.files);

  // const [idsUsers,setIdsUsers]=useState([]);
  const optionUsers = useSelector((state) => state.users.users);

  const [group, setGroup] = useState({
    name: "",
    file_list: [],//idFiles
    user_list: []//idUsers

  })

  useEffect(() => {
    dispatch(getFilesReguest())
    dispatch(getUsersStart())
  }, [])

  const groups = useSelector((state) => state.groups)

  useEffect(() => {
    if (groups.message) {
      message.success(groups.message);
      dispatch(resetData()) // Dispatch an action to reset the 'done' state to false
    }
    if (groups.error) {
      message.error(groups.error);
      dispatch(resetData())
    }
  }, [groups.message, groups.error]);


  const onFinish = (e) => {
    dispatch(addGroupStart(group))
  };
  //-------------------------------
  return (
    <div className='div_child_add'>
      <Form
        {...formItemLayout}
        className='addGroupForm'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >

        <Typography.Title style={{ color:'#02e079' }}>Add Group!</Typography.Title>
        <Form.Item
          name="group_name"
          rules={[
            {
              required: true,
              message: 'Please enter Group name!',
            },
          ]}
        >
          <Input 
          placeholder='Enter Group name' 
          onChange={(e) => setGroup({ ...group, name: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          name="files"
          rules={[
            {
              required: true,
              message: 'Please select files!',
            },
          ]}
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
              setGroup({ ...group, file_list: ids_files })
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
          rules={[
            {
              required: true,
              message: 'Please select users!',
            },
          ]}
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
              setGroup({ ...group, user_list: ids_users })
            }}
          >
            {optionUsers.map((option) => (
              <Option key={option.id} value={option.name} label={option.name}>
                {option.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button 
          className='card_button' 
          type="primary" 
          htmlType="submit" 
          block >
            create
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddGroup