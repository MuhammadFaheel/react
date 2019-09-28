import React from 'react';
import Tweet from './tweet';

function App() {
  return (
    <div className = "App">
      <Tweet name='Ali' message='Good Morning' />
      <Tweet name='Hassan' message='Attending university class' />
      <Tweet name='Zahid' message='I am going to work' />
      <Tweet name='Irfan' message='Perparing for exam' />
    </div>
  );
}

export default App;
