import './App.css';
import Menu from './Components/Menu';
import { Provider } from 'react-redux';
import {reducer, initState} from './servise/storage';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import Main from './Components/Main';


const store = createStore(reducer, initState);

function App( {currentMenu}) {
  return (
    <Provider store={store}>
      <div className='flexcont'>
        <Menu />
        <Main />
      </div>
    </Provider>
    
  );
}


export default App;
