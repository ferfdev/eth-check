import React from 'react'
import './Navbar.css';
import balance from './img/balance.png'
import transfer from './img/transfer.png'
import about from './img/about.png'





const Navbar = ({page}) => {


    const descriptions = {
        balance: 'Check the balance of ether or other ERC20 tokens',
        transfer: 'Transfer Ether or other ERC20 tokens',
        about: 'Read about us'
    }

    return (
        <nav className="navbar">
            <ul className='menu'>
                <Square id = 'balance' logo = {balance} alt = 'balance' description = {descriptions.balance} path = '/'/>
                <Square id = 'transaction' logo = {transfer} alt = 'transaction' description = {descriptions.transfer} path = '/transfer' />
                <Square id = 'about' logo = {about} alt = 'about us' description = {descriptions.about} path = '/about' />
            </ul>
        </nav>
    )
}

const Square = ({logo, alt, description, id, path}) => {

    // useEffect(()=>{
    //     document.getElementById(id).addEventListener('mouseover', addDescription,
    // }, [])

    // function addDescription() {
    //     const description = document.createElement('p')
    //     description.innerText = 'Description';
    //     document.getElementById(id).appendChild(description)
    // } 

    return (
        <div className="menu-container">
            <a href= {path} >
                <li className='menu-selection' id = {id}>
                    <img src={logo} alt={alt} />
                </li>
            </a>
            <div className="description">{description}</div>   
        </div>  

    )
}

export default Navbar
