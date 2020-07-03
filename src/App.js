import React from 'react';

import './App.css';

function App() {
  const [link, setLink] = React.useState('');
  const formRef = React.useRef();
  const submit = (event) => {
    event.preventDefault();
    let data = {};
    for (let i = 0; i < 6; i++) {
      data[
        formRef.current.getElementsByTagName('input')[i].name
      ] = formRef.current.getElementsByTagName('input')[i].value;
    }
    let str = '';
    for (let key in data) {
      if (str !== '') {
        str += '&';
      }

      str += key + '=' + data[key];
    }
    setLink(`https://quirky-agnesi-45c0f1.netlify.app/?${str}`);
  };
  return (
    <div>
      <form ref={formRef} className='App' onSubmit={submit}>
        <h2>Matterport Iframe Link Creator</h2>
        <input
          required
          name='m'
          type='text'
          placeholder='Matterport id'
          className='input'
        ></input>
        <label>Example m=JGPnGQ6hosj</label>
        <br />
        <input
          name='version'
          type='text'
          placeholder='Version'
          className='input'
          defaultValue='default'
        ></input>
        <label>default for my.matterport or else leave blank for mpembed</label>
        <br />
        <input required type='text' placeholder='Matterport URL Params'></input>
        <label>Example detail=1&help=1&minimap=1</label>
        <br></br>
        <input
          required
          name='logoOverlay'
          type='text'
          placeholder='Top Right Logo Overlay'
        ></input>
        <label>Example https://mpembed.com/img/mp_sdk.png</label>
        <br />
        <input
          required
          name='logoSize'
          type='number'
          placeholder='Logo Size'
        ></input>
        <label>Example 150</label>
        <br />
        <input
          required
          name='introImage'
          type='text'
          placeholder='Intro Image'
        ></input>
        <label>Example https://mpembed.com/img/mp_sdk.png</label>
        <br />
        <input
          required
          name='introTime'
          type='number'
          placeholder='Intro Time Duration(seconds)'
        ></input>
        <label>Example 4</label>
        <br />
        <button type='submit'>Generate Link</button>
      </form>
      <br />
      <center>
        <textarea readOnly value={link}></textarea>
      </center>
    </div>
  );
}

export default App;
