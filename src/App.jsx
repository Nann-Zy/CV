import { Header } from './Components/Header';
import { Profile } from './Components/Profile';
import { About } from './Components/About';
import { Skills } from "./Components/Skills";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Profile />
      <About />
      <Skills />

    </div>
  );
}

export default App;