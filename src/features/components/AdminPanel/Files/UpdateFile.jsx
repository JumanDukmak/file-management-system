
import { useEffect, useState } from 'react'
import { Upload, message, Button, Form, Input, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { resetDataToFile, updateFileStart } from '../../../redux/Files/filesSlice';
function UpdateFile() {
  const location = useLocation();
  const { id } = location.state;

  const dispatch = useDispatch();
  const [filee, setFilee] = useState({
    name: "",
    id: id,
    updated_file: null
  })
  const onFinish = (e) => {
    dispatch(updateFileStart(filee))
  };
  const files = useSelector((state) => state.files)

  useEffect(() => {
    if (files.message) {
      message.success(files.message);
      dispatch(resetDataToFile()) // Dispatch an action to reset the 'done' state to false
    }
    if (files.error) {
      message.error(files.error);
      dispatch(resetDataToFile())
    }
  }, [files.message, files.error]);

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
        <Typography.Title style={{color: '#02e079' }}>Update File!</Typography.Title>
        <Form.Item
          name="file_name"
        >
          <Input 
          style={{width:"200px"}}
          placeholder='Enter File name' 
          onChange={(e) => setFilee({ ...filee, name: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          name="file_path"
          rules={[
            {
              required: true,
              message: "Please input your file!",
            },
          ]}
        >
          <Upload
            //accept=".pdf, .doc, .docx"
            beforeUpload={() => false}
            onChange={(e) => {
              setFilee({ ...filee, updated_file: e.file })
            }}
          >
            <Button icon={<UploadOutlined />}>Select File</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button className='card_button' type="primary" htmlType="submit" block >
            Upload
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UpdateFile 
