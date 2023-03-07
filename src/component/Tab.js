import { Tabs } from 'antd';
import Tabin from './Tabintab.js'

const onChange1 = (key) => {
    console.log(key);
};
const items1 = [
  {
    key: '1',
    label: `센터`,
    children: <Tabin/>,
  },
  {
    key: '2',
    label: `서버`,
    children: <Tabin/>,
  },
  {
    key: '3',
    label: `스위치`,
    children: <Tabin/>,
  },
  {
    key: '4',
    label: `라우터`,
    children: <Tabin/>,
  },
  {
    key: '5',
    label: `센서`,
    children: <Tabin/>,
  },
];
const Tab = () => <Tabs defaultActiveKey="1" items={items1} onChange={onChange1} />;
export default Tab;