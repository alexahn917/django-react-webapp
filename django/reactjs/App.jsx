import React from 'react';
import {render} from 'react-dom';
import Reboot from 'material-ui/Reboot';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import Container from './Pages/Container'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5e7ce8',
      main: '#365fb5',
      dark: '#1a5284',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
      <div>
        <Reboot/>
        <MuiThemeProvider theme={theme}>
          <Container/>
        </MuiThemeProvider>
      </div>
  );
}

render(<App/>, document.querySelector('#app'));