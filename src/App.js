//import logo from './logo.svg';
//import './App.css';
import React from "react";
//import { Routes, Route, Link } from "react-router-dom";
//import Button from 'react-bootstrap/Button';
import ClickAddButton1 from './ClickAddButton1';
import ClickAddButton2 from './ClickAddButton2';
import ClickAddButton3 from './ClickAddButton3';
//import { withAITracking } from '@microsoft/applicationinsights-react-js';
//import { reactPlugin1, appInsights1 } from './AppInsights1';
//import { reactPlugin2, appInsights2 } from './AppInsigh//ts2';
//import { reactPlugin3, appInsights3 } from './AppInsights3';

function App() {
  return (
    <div>
      <div>
        {<ClickAddButton1 />}
        {<ClickAddButton2 />}
        {<ClickAddButton3 />}
      </div>
    </div>
  );
}

export default App;
