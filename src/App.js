import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    window.addEventListener('load', () => {
      const canvas = document.querySelector('#canvas');
      const ctx = canvas.getContext('2d')

      //Resizing
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      //variables
      let painting = false;

      let startPosition = () => {
        painting = true
      };

      let finishedPosition = () => {
        painting = false
      };

      let draw = (e) => {
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round'
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
      }

      // Event Listeners
      canvas.addEventListener('mousedown', startPosition)
      canvas.addEventListener('mouseup', finishedPosition)
      canvas.addEventListener('mousemove', draw)

    })
  }
render(){
  return (
    <div>
      <canvas id='canvas'>
      </canvas>
    </div>
  );
 }
}

export default App;
