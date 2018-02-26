import React from 'react';
import {render} from 'react-dom';
import Reboot from 'material-ui/Reboot';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import Container from './Pages/Container'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3a50b5',
      dark: '#002884',
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