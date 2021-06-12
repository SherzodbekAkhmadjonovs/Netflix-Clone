import './App.css';
import React, { Component } from 'react';
import Main from './components/movies/Main'
import NoSigned from './components/nonuser/nosingned'
import { useStateValue } from './StateProvider';
function App() {
  const [{ user }, dispatch] = useStateValue()
  return(
    <React.StrictMode>
        {!user ? (
          <NoSigned/>
        ):
        (<Main/>)
        }
      </React.StrictMode>
  )
}
export default App;
