import './App.css';
import { ChooseProgram } from './components/ChooseProgram';
import { Footer } from './components/Footer';
import Head from './components/Head';
import { Header } from './components/Header';
import { Latestupdates } from './components/Latestupdates';
import { Logincard } from './components/Logincard';
import Navbar from './components/Navbar';
import { Programcard } from './components/Programcard';
import { Programs } from './components/Programs';
import { Slider } from './components/Slider';

function App() {
  return (
    <div className="App">
      <h1>website NCETIR
      </h1>
      <Header/>
      <Head/>
      <Navbar/>
      <Slider/>
      <Programs/>
      <Latestupdates/>
      <ChooseProgram/>
      <Logincard/>
      <Footer/>
    </div>
  );
}

export default App;
