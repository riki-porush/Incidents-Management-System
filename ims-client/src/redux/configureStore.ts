import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga'

import saga from './saga'
import reducer from './slice'

const ConfigureStoreFunction = () => {
  const sagaMiddleWare = createSagaMiddleware({})
  const middleware = [sagaMiddleWare]

  const store = configureStore({
    reducer,
    middleware
  })

  sagaMiddleWare.run(saga)

  return store
}

export default ConfigureStoreFunction