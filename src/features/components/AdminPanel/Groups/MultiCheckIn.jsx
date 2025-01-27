import { useEffect, useState } from 'react';
import { Col, Checkbox, Row, Avatar, Card, message, Button } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { MultiCheckInRequest, getGroupFilesStart, resetData } from '../../../redux/Groups/groupSlice';
import { useLocation } from 'react-router-dom';

function MultiCheckIn() {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const location=useLocation();
  const{id_group} = location.state;//id file
  const group = useSelector((state) => state.group)
  const [list, setList] = useState([]);

  useEffect(() => {
    dispatch(getGroupFilesStart(id_group))
  }, [list]);

  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
    setList(checkedValues);
  };

  useEffect(() => {
    if (group.error) {
      message.error(group.error);
      dispatch(resetData())
    }
  }, [group.error])

  return (
    <div className="conatiner_body">
      <Row justify='space-between'>
        <h2>Multi Check_In</h2>
        <Button onClick={() => {
          dispatch(MultiCheckInRequest(list))
        }}>checkIn </Button>
      </Row>
      <div className='container_child'>
        <Checkbox.Group
          style={{
            width: '100%',
          }}
          onChange={onChange}
        >
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
                      <Checkbox value={file.id}></Checkbox>
                    ]}
                  >
                    <Meta
                      avatar={<Avatar style={{ backgroundColor: '#02e079b0', color: 'white' }} icon={<FileTextOutlined />} />}
                      title={file.name}
                      description={(file.status == 'free') ? ('The Status is: ' + file.status + file.id) : ('reserver by : ' + file.reserver.name)}
                    />
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Checkbox.Group>
      </div>
    </div>
  )
}

export default MultiCheckIn