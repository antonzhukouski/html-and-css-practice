import React from 'react';
import Speakers from './Speakers'
import Photos from './Photos'
import Videos from './Videos'
import { render } from "react-dom";
import Tabs from './Tabs';

require('./styles.css');

function App() {
  return (
    <Tabs>
      <div label="Speakers">
        <Speakers />
      </div>
      <div label="Photos">
        <Photos />
      </div>
      <div label="Videos">
        <Videos />
      </div>
    </Tabs>
  );
}

const container = document.getElementById('root');
render(<App />, container);
