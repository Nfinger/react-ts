import React from 'react'
import './App.css'
import 'virtual:windi.css'
import { Route } from "wouter";
import DefaultLayout from './layouts/default'
import { links } from './links'
import { getSession } from './logic/auth';

const selectLayout = () => {
  const session = getSession()
  return session ? DefaultLayout : React.Fragment
}

function App() {
  const Layout = selectLayout()
  return (
    <Layout>
      {links.map(Route)}
    </Layout>
  )
}

export default App
