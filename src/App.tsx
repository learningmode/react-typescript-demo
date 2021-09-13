import React from 'react';
import './App.css';

import { Greet } from './components/Greet';
import {Status} from './components/Status';
import {Heading} from './components/Heading';
import {Oscar} from './components/Oscar';

function App() {
  return (
    <div className="App">
     <Status status='loading'/>
     <Heading>Placeholder Text</Heading>
    <Oscar>
      <Heading>
        Oscar goes to dicaprio
      </Heading>
    </Oscar>
    <Greet name='Learningmode' isLoggedIn={true}/>
    </div>
  );
}

export default App;
