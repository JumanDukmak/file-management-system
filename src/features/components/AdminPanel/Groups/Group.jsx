import { useEffect } from 'react';
import { Col, Divider, Row, Avatar, Card, message, Button } from 'antd';
import { EditOutlined, HistoryOutlined, UnlockOutlined, DeleteOutlined, LockOutlined, FileTextOutlined, ReadOutlined, DownloadOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CheckInFileRequest, CheckOutFileRequest, getGroupFilesStart, getGroupUsersStart, removeFileStart, removeMemberStart, resetData } from '../../../redux/Groups/groupSlice';
import { DownloadFileRequest, ReadFileRequest, resetDataFile } from '../../../redux/Files/fileSlice';
import { resetDataFiles } from '../../../redux/Files/filesSlice';

function Group() {
  const { Meta } = Card;
  // the useLocation hook to access 
  // the state passed from the HomePage
  const location = useLocation();
  const { id, name } = location.state;
  //---------------------------------
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const group = useSelector((state) => state.group) // reove file and remove member and check
  const files = useSelector((state) => state.files) // edit file
  const file = useSelector((state) => state.file) // to read and download 

  useEffect(() => {
    dispatch(getGroupFilesStart(id))
    dispatch(getGroupUsersStart(id))
  }, [])

  useEffect(() => {
    if (group.error) {
      message.error(group.error);
      dispatch(resetData())
    }
    if (files.error) {
      message.error(files.error);
      dispatch(resetDataFiles())
    }
    if (file.error) {
      message.error(file.error);
      dispatch(resetDataFile())
    }
  }, [file.error, files.error, group.error])

  return (
    <div className="conatiner_body">
      <h2>{name}</h2>
      {/* -----------------------------------------------------Users--------------------------------------------------- */}
      <div style={{ color: '#02e079', fontSize: '18px', fontWeight: '600' }}>Users</div>
      <div className=' my_list_users'>
        {
          group.group_users?.map((user, i) => (
            <Col className="gutter-row" key={i}  >
              <Card
                hoverable
                style={{
                  width: 300,
                  marginRight: '10px'
                }}

                actions={[
                  <DeleteOutlined
                    key="Deleting" onClick={() => {
                      console.log('the id_group is :' + id);
                      console.log('the id_user is :' + user.id)
                      const id_group = id;
                      const id_user = user.id;
                      let ids = {
                        id_group,
                        id_user
                      }
                      dispatch(removeMemberStart(ids))
                    }} />,
                ]}
              >
                <Meta
                  avatar={<Avatar style={{ backgroundColor: '#02e079b0', color: 'white' }}>{user.name.charAt(0).toUpperCase()}</Avatar>}
                  title={user.name}
                  description={user.email}
                />
              </Card>
            </Col>
          ))
        }
      </div>

      {/* -----------------------------------------------------Divider--------------------------------------------------- */}
      <Divider></Divider>
      {/* -----------------------------------------------------FILES--------------------------------------------------- */}
      <Row justify='space-between'>
        <div style={{ color: '#02e079', fontSize: '18px', fontWeight: '600' }}>Files</div>
        <Button onClick={() => {
          navigate('/MultiCheckIn', { state: { id_group: id } })
        }}>multi checkIn</Button>
      </Row>
      <div className='my_list_files'>
        <Row gutter={[16, 24]}>
          {
            group.group_files?.map((file, i) => (
              <Col className="gutter-row" key={i} >
                <Card
                  hoverable
                  style={{
                    width: 300,
                  }}

                  actions={[
                    <EditOutlined key={'Edit'}
                      onClick={() => {
                        navigate('/UpdateFile', { state: { id: file.id } })
                      }}
                    />,
                    <DeleteOutlined key={'delete'}
                      onClick={() => {
                        console.log('the id_group is :' + id);
                        console.log('the id_file is :' + file.id)
                        const id_group = id;
                        const id_file = file.id;
                        let ids = {
                          id_group,
                          id_file
                        }
                        dispatch(removeFileStart(ids))
                      }}

                    />,
                    <ReadOutlined key={'read'} onClick={() => {
                      dispatch(ReadFileRequest(file.id))
                    }} />,
                    <DownloadOutlined key={'download'}

                      onClick={() => {
                        let dataFile = {
                          id: file.id,
                          path: file.path
                        }
                        dispatch(DownloadFileRequest(dataFile))
                      }}
                    />,
                    file.status == 'free' ?
                      <LockOutlined onClick={() => {
                        dispatch(CheckInFileRequest(file.id))
                      }} /> : <UnlockOutlined onClick={() => {
                        dispatch(CheckOutFileRequest(file.id))
                      }} />,

                    <HistoryOutlined onClick={() => {
                      navigate('/HistoryFile', { state: { id: file.id, } })
                    }} />
                  ]}
                >
                  <Meta onClick={() => {
                    console.log('heloooooooooooo')
                    // dispatch(ReadFileRequest());
                    // window.location.href = file.toString();
                  }}
                    avatar={<Avatar style={{ backgroundColor: '#02e079b0', color: 'white' }} icon={<FileTextOutlined />} />}
                    title={file.name}
                    description={(file.status == 'free') ? ('The Status is: ' + file.status + file.id) : ('reserver by : ' + file.reserver.name)}
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

export default Group