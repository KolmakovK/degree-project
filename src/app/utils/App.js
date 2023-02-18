import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from '../components/layouts/main'
import NotFound from '../components/layouts/notFound'
import NavBar from '../components/navBar'
import Login from '../components/layouts/login'
import Tutors from '../components/layouts/tutors'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/tutors" component={Tutors} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
