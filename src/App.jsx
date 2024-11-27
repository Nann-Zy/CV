import { Header } from './Components/Header';
import { Profile } from './Components/Profile';
import { About } from './Components/About';

function App() {
  return (
    <div className="bg-white min-h-screen"> {/* Tambahkan bg-white */}
      <Header />
      <Profile />
      <About />
    </div>
  );
}

export default App;
