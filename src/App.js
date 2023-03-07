import './App.css';
import Tab from './component/Tab.js'

function App() {
  return (
    <div className="App">
      <div className='wrap_box'>
        <h3>시설정보</h3>
        <Tab/>
        <h3>시설 상세정보</h3>
      </div>
    </div>
  );
}

export default App;
