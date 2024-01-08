import { useEffect, useState } from 'react'
import { Upload, message, Button, Form, Input, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { resetDataToFile, uploadFileStart } from '../../../redux/Files/filesSlice';

function UploadFile() {
  const [name, setName] = useState("");
  const [file_to_upload, setFile] = useState(null);
  const dispatch = useDispatch();
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

  const onFinish = (e) => {
    let dataFile = {
      name: name,
      file_to_upload: file_to_upload
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
        <Typography.Title style={{ color: '#02e079' }}>Upload File!</Typography.Title>
        <Form.Item
          name="file_name"
          rules={[
            {
              required: true,
              message: 'Please enter File name!',
            },
          ]}
        >
          <Input 
          style={{width:"200px"}}
          placeholder='Enter File name' 
          onChange={(event) => setName(event.target.value)}/>
        </Form.Item>

        <Form.Item
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
            onChange={(e) => {
              setFile(e.file);
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

export default UploadFile 
