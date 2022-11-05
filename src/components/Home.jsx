import React from 'react'
import Header from './Header'
import LinkContainer from './LinkContainer'
import slackSvg from './assests/slack.svg'
import githubSvg from './assests/Social icon.svg'

function Home() {
  return (
    <>
      <div className="">
        
        {/* header */}

        <Header />
        
          
        {/* links */}

        <LinkContainer />
        
      </div>
      
        
      <div className='flex justify-center items-center gap-4 pb-9 pt-4'>
        
        <img className='' src={slackSvg} alt="slack-icon" />
        
          
        <img className='' src={githubSvg} alt="github-icon" />
        
      </div>
      
    </>
  )
}

export default Home