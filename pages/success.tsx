import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const success = () => {
    return (
        <div>
        <Head>
          <title>Successful</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/flowbite@1.3.4/dist/flowbite.min.css"
          />
        </Head>
        <div className="bg-[#FCFCFD]">
          <Header />
          <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md h-[600px" role="alert">
        <div className="flex">
          <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
          <div>
            <p className="font-bold">Tên miền đã </p>
            <p className="text-sm">Make sure you know how these changes affect you.</p>
          </div>
        </div>
      </div>
          <Footer />
        </div>
  
      </div>
    );
};

export default success;