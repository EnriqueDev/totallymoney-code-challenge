import * as React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { browserHistory } from './router/browserHistory'
import CheckCredit from './modules/CheckCredit'
import { checkCredit } from './router/routes'
import NotFound from './modules/NotFound'
import { Reset } from './reset.css'
import ErrorBoundary from './components/ErrorBoundary'
import { forgeStore } from './store/store'
import { Provider } from 'react-redux'
import { ServiceContext } from './contexts/service'
import { creditCardsEndPoint } from './services/credit'

const store = forgeStore()

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ServiceContext.Provider
          value={{ creditCardsEndPoint: creditCardsEndPoint }}
        >
          <Router history={browserHistory}>
            <Reset />
            <Switch>
              <Route component={CheckCredit} exact path={checkCredit} />
              <Route path="*" exact component={NotFound} />
            </Switch>
          </Router>
        </ServiceContext.Provider>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
