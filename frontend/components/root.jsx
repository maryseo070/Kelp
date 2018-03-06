import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'
import App from './App';


const Root = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App></App>
      </HashRouter>
    </Provider>
  )
}
 export default Root;
