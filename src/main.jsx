import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import SimpleForm from './02-useEfect/SimpleForm';
import FormWithCustomHook from './02-useEfect/FormWithCustomHook';
import MultipleCustomHook from './03-examples/MultipleCustomHook';
import FocusScreen from './04-useRef/FocusScreen';
import Memorize from './06-memos/Memorize';
import MemoHook from './06-memos/MemorHook';
import CallbackHook from './06-memos/CallbackHook';
import TodoApp from './08-useReducer/TodoApp';
import MainApp from './09-useContext/MainApp';
//import './08-useReducer/intro-reducer'
// import CounterApp from './01-useState/CounterApp';
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook';
// import HooksApp from './HooksApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <MainApp/>
   </BrowserRouter>
   //   // <React.StrictMode>
   //   // </React.StrictMode>,
)
