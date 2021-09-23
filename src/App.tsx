import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/state/User';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User/>
      </UserContextProvider>
    </div>
  );
}

export default App;
