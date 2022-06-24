import React from 'react'
import ReactDOM from 'react-dom'
import { FirebaseAppProvider } from 'reactfire'
import App from './App'
import { firebaseConfig } from './firebase-config'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
