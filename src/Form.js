import React, {useState} from 'react';
import { fetchTokenData } from './scripts/web-functions';
import data from './scripts/token-data';


const Form = (props) => {

    const {firstType, secondType, firstLabel, secondLabel, title} = props.props;
    const [address, setAddress] = useState('');

    const check = (e) => {
        e.preventDefault();
        let tokenId = document.getElementById('token').value;
        fetchTokenData(tokenId, address)
        .then((response) => {
            document.getElementById('token-balance').innerText = response;
        })
    }

    return (
        <section className="form-container" onSubmit={check}>
            <h1 className="card-title">{title}</h1>

            <form action="" className='form'>

                <div className="field-container">
                    <label htmlFor="input">{firstLabel}:</label>
                    <div className="selection">
                        <select name="token" id="token">
                            {data.map(token => {
                                return (
                                    <option key = {token.id} value={token.id}>{token.id.toUpperCase()}</option>
                                )
                            })}                              
                        </select>
                    <div className="arrow"></div>
                    </div>

                </div>

                <div className="field-container">      
                    <label htmlFor="input">{secondLabel}:</label>
                    <input 
                    type={secondType}
                    name= "input" 
                    id="input" 
                    value={address}
                    onChange = {(e) => setAddress(e.target.value)}
                    placeholder = 'Address to check token...' />
                </div>
                
                <button type="submit" className='btn'>Check</button>
            </form>

            <h4 id='token-balance'>no balance</h4>
        </section>
    )
}

export default Form
