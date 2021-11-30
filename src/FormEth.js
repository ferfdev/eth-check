import React from 'react'
import { useState } from 'react';
import './App.css';
import {fetchData} from './scripts/web-functions';

const FormEth = () => {
    const [address, setAddress] = useState('')
    const [balance, setBalance] = useState('');



    const checkAddress = (e) => {
        e.preventDefault();
        //setBalance(web3.utils.fromWei(String(fetchData()), 'ether'))
        fetchData(address, setAddress).then((response) => {
            setBalance(response);
        })
        

    }

    return (
        <section className='form-container' onSubmit={checkAddress}>
            <h1 className='card-title'>Ether Balance</h1>
                <form action="" className='form'>
                    <label htmlFor="address">Address : </label>
                    <input 
                    type="text" 
                    name="address" 
                    id="address" 
                    value = {address} 
                    onChange ={(e)=>setAddress(e.target.value)}
                    placeholder = 'Address to check ether...' />
                    <button type="submit" className='btn'>Check</button>
                </form>

                <h4>{balance? `${balance}` : 'no balance'}</h4>
        </section>
        
    )
}

export default FormEth
