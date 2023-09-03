import React from 'react'
import './Players.css'
import profile1 from '../../assets/adin3.jpg'
import profile2 from '../../assets/tom.jpg'
import profile3 from '../../assets/logo.png'
import { FaUserAlt } from 'react-icons/fa'


const Players = () => {
  return (
    <div id="players">
    


    <h1>Response to Accusations</h1>



    <h1>Subject: Re: Accusations of Sexting Scandal - Strong Denial and Counterattack</h1>

    <p>To whom it may concern,</p>

    <p>I must address the outrageous allegations circulating about our squash organization's manager. Let me be crystal clear: these accusations are utterly false and nothing more than a malicious smear campaign orchestrated by DMG, our rival squash management company.</p>

    <p>Our manager, who has consistently displayed professionalism and integrity throughout their tenure, is the target of baseless slander. It is disheartening to witness DMG resorting to such deceitful tactics in a desperate attempt to tarnish our reputation.</p>

    <p>DMG's reckless spread of fake news is a blatant attempt to undermine our credibility and manipulate public perception. We challenge DMG to present any credible evidence to substantiate their claims, knowing full well that they won't be able to provide any.</p>

    <p>We have no choice but to view DMG's actions as a deliberate and malicious attempt to damage our organization's standing. We will not stand idly by while our reputation is dragged through the mud. We are prepared to take all necessary legal actions to defend our manager's honor and hold DMG accountable for their defamatory statements.</p>

    <p>In the interest of fairness and justice, we demand an immediate retraction of these false allegations from DMG, along with a public apology for the harm caused to our organization. We are more than willing to engage in any legal proceedings to ensure that the truth prevails.</p>

    <p>Sincerely,</p>

    <p>Thomas Shanley<br>
        FIAB Management</p>
      <h1 id='players-title'>PLAYERS</h1>
      <div className='player-profiles'>
      <div id="profile1">
        <div className="image-cropper">
        <img id='profile-pic1'src={profile1} alt={<FaUserAlt size={200} className='profile-image'/>} />
        </div>
        <h3 className='profile-name'>Adin Baxter</h3>
        <p className='profile-text'>
          <strong>IPR Rank: </strong>1.22<br/> 
          <strong>Dominant Hand:</strong> Right <br />
          <strong>Strengths:</strong> Facebook friends with Ben Ratcliffe (WR271)<br/>
          Champion Player of Wednesday 2022 Spring Internal Comp Division 7. <br />
          <strong>Weaknesses: </strong>Female Receptionists
        </p>
      </div>
      <div id="profile2">
        <div className="image-cropper">
          <img id='profile-pic2'src={profile2} alt={<FaUserAlt size={200} className='profile-image'/>} />
        </div>
        <h3 className='profile-name'>Thomas Shanley</h3>
        <p className='profile-text'>
        <div className="profile-dotpoints">
        <strong>IPR Rank: </strong><span className='profile-value'>0.57</span><br/> 
        <strong>Dominant Hand:</strong> Left<br />
        <strong>Strengths: </strong>High mobilty, and he got a new racquet for christmas<br />
        <strong>Weaknesses: </strong>Law enforcement and trivia questions
        </div>
        <div className="profile-bio">
          <p></p>
        </div>
        </p>
      </div>
      <div id="profile3">
        <div className="image-cropper">
         <img id='profile-pic3'src={profile3} alt={<FaUserAlt size={200} className='profile-image'/>} />
        </div>
        <h3 className='profile-name'>Ronan Johnson</h3>
        <p className='profile-text'>
        <strong>IPR Rank: </strong>0.7<br/> 
        <strong>Dominant Hand:</strong> Right <br />
        <strong>Strengths: </strong>Sponsored by Marwan El Shorbagy <br />
        <strong>Weaknesses: </strong>Thought he was Sponsored by Mohamed El Shorbagy
        </p>
      </div>
      </div>
    </div>
  )
}

export default Players
