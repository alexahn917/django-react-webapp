import React from "react"
import {render} from "react-dom"
import {applyMiddleware, combineReducers, compose, createStore,} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {white, blue, black} from 'material-ui/styles/colors';

import * as reducers from "./reducers"
import MainContainer from "./containers/MainContainer"
import MainNavigation from "./containers/MainNavigation";

let finalCreateStore = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)
let reducer = combineReducers(reducers)
let store = finalCreateStore(reducer)

const muiTheme = getMuiTheme({
  // palette: {
  //   textColor: white,
  // },
  // appBar: {
  //   height: 70,
  // },
});

class MainApp extends React.Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            {<MainNavigation/>}
            <Provider store={store}>
              <MainContainer/>
            </Provider>
          </div>
        </MuiThemeProvider>
    );
  }
}

render(<MainApp/>, document.getElementById('MainApp'));
