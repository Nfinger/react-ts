import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { userTable } from './logic/supabase'
import 'virtual:windi.css'
import { useAsync } from 'react-use'
import { Link, Route } from "wouter";
import AuthPage from './pages/auth/auth'
import Dashboard from './pages/dashoard'

function App() {
  return (
    <div className="App">
      <Route path="/auth" component={AuthPage} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  )
}

export default App
