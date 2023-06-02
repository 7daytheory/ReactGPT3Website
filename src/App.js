import React from 'react'

import './App.css';

import { Footer, Blog, Possibility, Features, GPT3, Header} from './containers';
import { Navbar, Brand, CTA } from './components';

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <GPT3 />
        <CTA />
        <Features />
        <Possibility />
        <Blog />
        <Footer />
    </div>
  )
}

export default App;