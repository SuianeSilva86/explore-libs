import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TimelineComponent from './App';
import Timeline from 'react-native-beautiful-timeline';
import VerticalTimeline from './components/timelineV2';
import TimelineV3 from './components/timelineV2';
import CommentComponent from './components/comment';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TimelineComponent/> */}
    {/* <VerticalTimeline/> */}
    <CommentComponent/>
    {/* <TimelineV3/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
