import React from 'react';
import './App.css';

import SampleBody from './js/sample/containers/sampleBody';
import SampleTab from './js/sample/containers/sampleTab';
import SampleImage from './js/sample/components/sampleImage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SampleTab />
      
        <SampleImage/>
       
        
        <SampleBody/>
       
        
      </header>
      
    </div>
  );
}

export default App;
