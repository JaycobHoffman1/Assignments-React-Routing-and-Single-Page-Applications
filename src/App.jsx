import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Comics from './comics';
import BrowseCharacters from './browse-characters';
import NavigationBar from './navigation-bar';
import CharacterDetailsWrapper from './character-details-wrapper';
import NotFound from './NotFound';
import './AppStyles.css';
function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/home/' element={<Home />}/>
        <Route path='/comics/' element={<Comics />}/>
        <Route path='/browse-characters/' element={<BrowseCharacters />}/>
        <Route path='/character-details/:id' element={<CharacterDetailsWrapper />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
};
export default App;