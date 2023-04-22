import React from 'react'
import ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import store from './app/store.js'
import { Provider } from 'react-redux'

import { worker } from './api/server.js'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
  // Start our mock API server
  await worker.start({ onUnhandledRequest: 'bypass' })

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

start()
