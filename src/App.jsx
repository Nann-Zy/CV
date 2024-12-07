import { Header } from './Components/Header';
import { Profile } from './Components/Profile';
import { About } from './Components/About';
import { Skills } from "./Components/Skills";
import Contact from './Components/Contact';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Profile />
      <About />
      <Skills />
      <Contact />

    </div>
  );
}

export default App;