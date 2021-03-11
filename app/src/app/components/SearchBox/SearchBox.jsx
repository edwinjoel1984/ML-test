import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import iconSearch from '../../assets/ic_Search.png'
import './SearchBox.scss';

const SearchBox = ({searchItem, currentValue}) => {
    const [inputValue, setInputValue] = useState(currentValue);
    useEffect(() => {
        setInputValue(currentValue);
    }, [currentValue])
    return (
        <div className="search-box-component row">
            <Link to="/" className="logo">&nbsp;</Link>
            <div className="div-input">
                <input 
                className="input-search" 
                placeholder="Nunca dejes de buscar" 
                onChange={(e)=>setInputValue(e.target.value)} 
                value={inputValue}
                onKeyPress={event => {
                if (event.key === 'Enter') {
                    searchItem(inputValue)
                }
              }}  />
                <button className="button-search" onClick={()=>searchItem(inputValue)}>
                    <img src={iconSearch} alt="search"/>
                </button>
            </div>
        </div>
    );
}

export default SearchBox;