import React from 'react';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';

const Home = () => {
    return (
        <>
          <div className="wrapper">
              <Header/>  
              <Dashboard/>
        </div>
        </>
    );
};

export default Home;