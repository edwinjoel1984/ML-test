import React from 'react'
import './Header.scss'
import SearchBox from '../../components/SearchBox'
const Header = ({searchItem}) => {
    return (
        <div className="header-page-content">
            <div className="search-box">
                <div className="container search-page">
                    <div className="row">
                        <div className="col-12">
                            <SearchBox searchItem={searchItem} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;