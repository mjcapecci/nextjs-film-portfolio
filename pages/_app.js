import { useState, useEffect } from 'react';
import '../styles/global.css';
import '../styles/loadingSpinner.css';
import '../styles/videoGrid.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const isClient = typeof window === 'object';
    if (!isClient) {
      setPageLoaded(true);
    } else {
      setTimeout(() => {
        setPageLoaded(true);
      }, 300);
    }
  });

  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto&family=Londrina+Outline&family=Monofett&display=swap'
          rel='stylesheet'
        />
      </Head>
      {pageLoaded ? (
        <Component {...pageProps} />
      ) : (
        <div className='loading-spinner-container'>
          <div class='lds-ring'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
}
