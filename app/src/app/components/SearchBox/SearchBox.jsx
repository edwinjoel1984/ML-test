import React, {useState} from 'react';
import iconSearch from '../../assets/ic_Search.png'
import './SearchBox.scss';

const SearchBox = ({searchItem}) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="search-box-component row">
            <a href="/" className="logo">&nbsp;</a>
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