import './App.css';
import Header from './components/Header'
import LinkContainer from './components/LinkContainer';

function App() {
  return (
    <div className="bg-white container mx-auto ">
      {/* header */}
      <Header/>
      {/* links */}
      <LinkContainer/>
    </div>
  );
}

export default App;
