import React from 'react'
import Header from '../../components/Header';
import './home.scss'

const Home = ({history}) => {
    const searchItem = (q) =>{
        history.push(`/items?search=${q}`)
    }
    return (
        <div className="search-content-page">
            <Header searchItem={searchItem}/>
        </div>
    );
}

export default Home;