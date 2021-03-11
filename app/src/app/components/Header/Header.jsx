import React from 'react'
import './Header.scss'
import SearchBox from '../../components/SearchBox'
const Header = ({searchItem, currentValue}) => {
    return (
        <div className="header-page-content">
            <div className="search-box">
                <div className="container search-page">
                    <div className="row">
                        <div className="col-12">
                            <SearchBox searchItem={searchItem} currentValue={currentValue}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;