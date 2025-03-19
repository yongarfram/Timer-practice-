import { useState } from 'react';
import './App.css';
function App() {
  const [nowTime, setNowTime] = useState(new Date().toLocaleTimeString('en-GB'));

  return (
    <div>
      <div>타이머!</div>
      <div>{nowTime}</div>
    </div>
  );
}

export default App;
