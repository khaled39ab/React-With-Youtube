import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import HttpReq from '../page/HttpReq';
import CountryInfo from './CountryInfo';

const Country = () => {
    const [countries, setCountries] = useState([]);

    const countriesStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '15px',
        padding: '15px'
    }
    axios.get('https://restcountries.com/v3.1/all')
        .then(res => {
            setCountries(res.data);
        })
        .catch(err => {
            console.log(err);
        });
        
    return (
        <div>
            <HttpReq></HttpReq>
            <h1 style={{color:'blue'}}>Introduce Country</h1>
            <div style={countriesStyle}>
                {
                    countries.map(country => 
                        <CountryInfo
                            country={country}
                            key={country.cca3}
                        ></CountryInfo>
                    )
                }
            </div>
        </div>
    );
};

export default Country;