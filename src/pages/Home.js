import React from 'react';
import ItemCard from '../ItemCard';
import data from '../data';
import horti from '../img/logo.jpeg';

const Home = () => {
    
    return (
        <>
            <nav class="navbar fixed-top navbar-light bg-light">
              <a class="navbar-brand" href="#">
                <img src={horti} width="50" height="30" class="d-inline-block align-top" alt=""/>
                HORTIFRUTI DO MATOS
              </a>
            </nav>
            <h1 className='text-center mt-4'>-</h1>   
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {data.productData.map((item, index) => {
                        return (
                            <ItemCard 
                                img={item.img}
                                title={item.title} 
                                desc={item.desc} 
                                price={item.price} 
                                item={item} 
                                key={index}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    );
};

export default Home;