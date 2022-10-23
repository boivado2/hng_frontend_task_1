import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import LinkContainer from './components/LinkContainer';
import slackSvg from './components/assests/slack.svg'
import githubSvg from './components/assests/Social icon.svg'

function App() {
  return (
    <>
      <div className="bg-white container mx-auto ">
        
      {/* header */}
        <Header />
        
      {/* links */}
      <LinkContainer/>
      </div>
      
      <div className='flex justify-center items-center gap-4 pb-9 pt-4'>
        <a href='https://slack.com/boivado2' target="_blank" rel="noopener noreferrer"><img className='' src={slackSvg} alt="slack-icon" /></a>
        
        <a href='https://github.com/boivado2' target="_blank" rel="noopener noreferrer"><img className='' src={githubSvg}  alt="github-icon"/></a>
      </div>
      

    {/* footer */}
    <Footer/>
    </>
  );
}

export default App;
