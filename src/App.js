import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Federation from './components/Pages/Federation';
import Gallary from './components/Pages/Gallary';
import Competition from './components/Pages/Competition';
import Records from './components/Pages/Records';
import Facts from './components/Pages/Facts';
import News from './components/Pages/News';
import Contacts from './components/Pages/Contacts';
import RecordAzia from './components/Pages/RecordsPage/RecordAzia'
import RecordsWorld from './components/Pages/RecordsPage/RecordsWorld'
import RecordUzb from './components/Pages/RecordsPage/RecordUzb'
import RecordStandards from './components/Pages/RecordsPage/RecordStandards'
import Psychological from './components/Pages/FactsPage/Psychological'
import Physicaltraining from './components/Pages/FactsPage/Physicaltraining'
import Tactical from './components/Pages/FactsPage/Tactical'
import WildandSport from './components/Pages/FactsPage/WildandSport'
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navigation />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/federation' element={<Federation />} />
            <Route path='/gallery' element={<Gallary />} />
            <Route path='/competition' element={<Competition />} />
            <Route path='/records' element={<Records />} />
            <Route path='/azia' element={<RecordAzia />} />
            <Route path='/world' element={<RecordsWorld />} />
            <Route path='/uzb' element={<RecordUzb />} />
            <Route path='/standards' element={<RecordStandards />} />
            <Route path='/facts' element={<Facts />} />

            <Route path='/psychological' element={<Psychological />} />
            <Route path='/tactical' element={<Tactical />} />
            <Route path='/physicaltraining' element={<Physicaltraining /> } />
            <Route path='/willandsport' element={<WildandSport />} />
            <Route path='/news' element={<News />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
