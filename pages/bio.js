import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';

const Bio = () => {
  return (
    <Layout>
      <Head>
        <title>Bio | {siteTitle}</title>
      </Head>
      <section className='bio-section'>
        <div className='bio-section-text'>
          <div className='text-container'>
            <h2>About</h2>
            <p>
              Born and raised in and around Chicago, I have loved the art of
              story-telling from an early age. Being a film fanatic most of my
              life, I thought the best way to grow my knowledge of the art was
              to dive headfirst into structure and flow. In 2014 I started
              online classes and Youtube tutorials in my free time to develop my
              skills as an editor. Utilizing Adobe's functionality, I eventually
              became fluent in Premiere, After Effects, Photoshop, and Audition.
            </p>
            <p>
              I have worked for JoBlo Media Inc. since 2016 and currently
              produce three shows on their successful YouTube channel, Joblo
              Horror Videos: <i>WTF Happened To That Horror Movie</i>,{' '}
              <i>The Black Sheep</i>, and{' '}
              <i>The Best Horror Movie You Never Saw</i>. As a full-time editor,
              writer, and showrunner, my job is to help others and set time
              tables with realistic and strategic goals. Editing is
              story-telling, and you must think about every angle to best
              communicate the idea and overcome any hurdle you may encounter. I
              believe you must put drive and passion first and deliver quality
              and consistency at any cost. Life is too short not to give your
              all.
            </p>
          </div>
        </div>
        <div className='bio-section-picture'>
          <Image
            src='/images/Lance.jpg'
            width={503.1}
            height={650}
            alt={'Lance Vlcek'}
          ></Image>
        </div>
      </section>
    </Layout>
  );
};

export default Bio;
