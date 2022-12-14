import Footer from './components/Footer';
import Home from './components/Home';
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom'
import './App.css';
import Contacts from './components/Contacts';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route index element={<Home />} />
    <Route path='/contact' element={<Contacts/>}/>
  </Route>
))


function App() {
  return (
    <div className='bg-white container mx-auto font-custom-open-sans'>
      <RouterProvider router={router} />  
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
