import React from 'react'
import CustomHome from '../Home/CustomHome'
import CustomStory from '../Story/CustomStory'
import CustomeQuote1 from '../Quote1/CustomeQuote1'
import CustomWork from '../Work/CustomWork'
import CustomSkill from '../Skill/CustomSkill'
import CustomReview from '../Review/CustomReview'
import CustomQuote from '../Quote/CustomQuote'
import CustomExploration from '../Explorations/CustomExploration'

const CustomPortfolio = () => {
  return (
    <>
      <div className="CustomPortfolio">
        <div id='home' className="CustomHome">
            <CustomHome />
        </div>
        <div id="story" className="CustomStory">
            <CustomStory />
        </div>
        <div className="CustomQuote1">
            <CustomeQuote1 />
        </div>
        <div id='works' className="CustomWork">
            <CustomWork />
        </div>
        <div id='skills' className="CustomSkill">
            <CustomSkill />
        </div>
        <div id='review' className="CustomReview">
            <CustomReview />
        </div>
        <div className="CustomQuote">
            <CustomQuote />
        </div>
        <div id='exploration' className="CustomExploration">
            <CustomExploration />
        </div>
      </div>
    </>
  )
}

export default CustomPortfolio
