import { Table } from 'antd';
import './table.css'

const columns = [
  {
    title: '순번',
    dataIndex: '순번',
    width: 150,
  },
  {
    title: '장치ID',
    dataIndex: '장치ID',
    width: 150,
  },
  {
    title: '장비명칭',
    dataIndex: '장비명칭',
  },
];
const data = [];

  data.push({
    key: '',
    순번: '',
    장치ID: '',
    장비명칭: ``,
  });

const Tables = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={{
      pageSize: 50,
    }}
    scroll={{
      y: 240,
    }}
  />
);
export default Tables;