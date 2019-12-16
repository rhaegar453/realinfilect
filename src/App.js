import React from 'react';
import Auth from './Components/Authentication/Auth';
import './App.css'


const App = () => {
  return (
    <div>
      <div className="centeredCss">
      <div className="col-md-4">
        <Auth />
      </div>
      </div>
    </div>
  );
}

export default App;