import Footer from './components/Footer';
import Header from './components/Header'
import LinkContainer from './components/LinkContainer';
import slackSvg from './components/assests/slack.svg'
import githubSvg from './components/assests/Social icon.svg'
import './App.css';
import Contacts from './components/Contacts';



function App() {
  return (
    <>
      <div className="bg-white container mx-auto font-custom-open-sans">
        
      {/* header */}
        <Header />
        
      {/* links */}
      <LinkContainer/>
      </div>
      
      <div className='flex justify-center items-center gap-4 pb-9 pt-4'>
          <img className='' src={slackSvg} alt="slack-icon" />
        
          <img className='' src={githubSvg} alt="github-icon" />
      </div>

      

    {/* footer */}
    <Footer/>
    </>
  );
}

export default App;
