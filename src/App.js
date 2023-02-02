import './App.css';
import Menu from './Components/Menu';
import Main from './Components/Main';
import Right from './Components/Right';
import { Provider } from 'react-redux';
import {reducer, initState} from './servise/storage'
import { createStore } from 'redux';

const store = createStore(reducer, initState);

function App() {
  return (
    <Provider store={store}>
      <div className='flexcont'>
        <Menu />
        <Main />
        <Right />
      </div>
    </Provider>
    
  );
}

export default App;
