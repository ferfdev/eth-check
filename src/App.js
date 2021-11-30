import React from 'react';
import './App.css';
import FormEth from './FormEth';
import Form from './Form';
import Navbar from './Navbar';
import {useState, useEffect} from 'react'
import {checkTokenProps, sendTokenProps} from './scripts/elements-data'
import {BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const App = () => {

    const [page, setPage] = useState('balance')

    
    useEffect(()=>{
        switch (window.location.pathname){
            case '/':
                document.getElementById('balance').style.background = 'white';
                break
            case '/transfer':
                document.getElementById('transaction').style.background = 'white';
                break
            case '/about':
                document.getElementById('about').style.background = 'white';
                break
        }
    }, [])
    



    return (
        <BrowserRouter>
            <Route exact path="/">
                <main className="container">
                    <Title/>
                    <FormEth/>
                    <Form props= {checkTokenProps}/>
                </main>
            </Route>
            <Route path="/transfer">
                <main className="container">
                    <Form props= {sendTokenProps}/>
                </main>
            </Route>
            <Navbar/>

        </BrowserRouter>

    )
}

const Title = ()=>{
    return(
        <div className="title">
            <h1>Ethereum Check</h1>
            <div className="underline"></div>
        </div>
    );
}

export default App
