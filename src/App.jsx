import React from 'react';
import Nav from './components/Nav/Nav';
import Contact from './components/Contact/Contact';
import Players from './components/Players/Players';
import Showcase from './components/Showcase/Showcase';
import Ladder from './components/Ladder/Ladder';
import Fixture from './components/Fixture/Fixture';
import News from './components/News/News';

const App = () => {
  return (
    <div>
      
    <h1>Our Response</h1>
      <p>Subject: Re: Accusations of Sexting Scandal - Strong Denial and Counterattack

I must address the outrageous allegations circulating about our squash organization's manager. Let me be crystal clear: these accusations are utterly false and nothing more than a malicious smear campaign orchestrated by DMG, our rival squash management company.

Our manager, who has consistently displayed professionalism and integrity throughout their tenure, is the target of baseless slander. It is disheartening to witness DMG resorting to such deceitful tactics in a desperate attempt to tarnish our reputation.

DMG's reckless spread of fake news is a blatant attempt to undermine our credibility and manipulate public perception. We challenge DMG to present any credible evidence to substantiate their claims, knowing full well that they won't be able to provide any.

We have no choice but to view DMG's actions as a deliberate and malicious attempt to damage our organization's standing. We will not stand idly by while our reputation is dragged through the mud. We are prepared to take all necessary legal actions to defend our manager's honor and hold DMG accountable for their defamatory statements.

In the interest of fairness and justice, we demand an immediate retraction of these false allegations from DMG, along with a public apology for the harm caused to our organization. We are more than willing to engage in any legal proceedings to ensure that the truth prevails.

Sincerely,

Thomas Shanley
FIAB Management</p>
        <Nav />
        <Showcase/>
        <Players/>
        <News/>
        <Fixture/>
        <Ladder/>
        <Contact/>
    </div> 
    
    
    
  )
}

export default App
