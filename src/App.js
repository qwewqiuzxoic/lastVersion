import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//디럭스 관련
import configureStore from './redux/store';

//페이지 관련
import Result from './pages/Result';
import Test from './pages/Test';
import Start from './pages/Start';
import Loading from './pages/Loading';
import InstaSns from './pages/InstaSns';

//style
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme'

const { store, persistor } = configureStore();

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <Switch>
                <Route exact path="/" component={Start} />
                <Route exact path="/Test" component={Test} />
                <Route exact path="/Result/:result" component={Result} />
                <Route exact path="/Loading" component={Loading} />
                <Route exact path="/InstaSns/:data" component={InstaSns} />
                <Route path='*' component={Start} />
              </Switch>
            </Router>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
