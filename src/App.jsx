import React from 'react';
import Nav from './components/Nav/Nav';
import Contact from './components/Contact/Contact';
import Players from './components/Players/Players';
import Showcase from './components/Showcase/Showcase';
import Ladder from './components/Ladder/Ladder';
import Fixture from './components/Fixture/Fixture';

const App = () => {
  return (
    <div>
        <Nav />
        <Showcase/>
        <Players/>
        <Fixture/>
        <Ladder/>
        <Contact/>
    </div>
  )
}

export default App