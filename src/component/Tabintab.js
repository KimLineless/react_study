import { Tabs } from 'antd';
import Table from './table.js'
const onChange1 = (key1) => {
  console.log(key1);
};
const items1 = [
  {
    key: '1',
    label: `전체`,
    children: <Table/>,
  },
  {
    key: '2',
    label: `곤지암 엣지센터`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `엣지센터2`,
    children: `Content of Tab Pane 3`,
  },
  {
    key: '4',
    label: `엣지센터3`,
    children: `Content of Tab Pane 3`,
  },
];
const Tabintab = () => <Tabs defaultActiveKey="1" items={items1} onChange={onChange1} />;
export default Tabintab;