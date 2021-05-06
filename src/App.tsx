import React, { useEffect } from 'react'
import {Helmet} from "react-helmet";
import './App.css'
import 'virtual:windi.css'
import { Route, Router, useLocation } from "wouter";
import DefaultLayout from './layouts/default'
import { links } from './links'
import { getSession } from './logic/auth';

const selectLayout = () => {
  const session = getSession()
  return session ? DefaultLayout : React.Fragment
}

function App() {
  const Layout = selectLayout()
  const [location] = useLocation();
  const activeLink = links.find(({ path }) => path === location)

  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{activeLink && activeLink.text ? `Gamify - ${activeLink.text}` : "Gamify"}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Layout>
        {links.map(Route)}
      </Layout>
    </Router>
  )
}

export default App
