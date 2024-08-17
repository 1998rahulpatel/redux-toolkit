import React from 'react';
import Products from '../components/Products';

const Home = () => {
  return (
    <div className='container mx-auto'>
        <h2 className='text-2xl font-semibold my-4'>Welcome to the Redux toolkit store</h2>
        <section>
            <h3>Products</h3>
            <Products></Products>
        </section>
    </div>
  )
}

export default Home;