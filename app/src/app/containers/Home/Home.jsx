import React from 'react'
import './home.scss'
import SearchBox from '../../components/SearchBox'

const Home = ({history}) => {
    const searchItem = (q) =>{
        history.push(`/items?search=${q}`)
    }
    return (
        <div className="search-page-content">
            <div className="search-box">
                <div className="container search-page">
                    <div className="row">
                        <div className="col-12">
                            <SearchBox searchItem={searchItem}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className=""></div> */}
        </div>
    );
}

export default Home;