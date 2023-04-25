import './App.css';
import CakeView from './features/cake/CakeView';
import IceCreamView from './features/icecream/IceCreamView';
import Userview from './features/users/Userview';

function App() {
  return (
    <div className="App">
    <CakeView/>
    <IceCreamView/>
    <Userview/>
    </div>
  );
}

export default App;
