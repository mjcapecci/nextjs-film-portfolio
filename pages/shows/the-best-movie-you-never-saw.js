import Head from 'next/head';
import Layout from '../../components/layout';
import VideoGrid from '../../components/VideoGrid';
import ShowDescription from '../../components/ShowDescription';

export default function FirstPost() {
  const videoLinks = [
    { title: 'F/X', link: 'https://www.youtube.com/embed/HkN7ivmjpTA' },
    {
      title: 'Judgement Night',
      link:
        'https://www.youtube.com/embed/Kv_lQujl4-M?list=PLrMX9ct-uNyPTn8oXU9ewCTAJs65WvuZX',
    },
    {
      title: 'Top Secret',
      link:
        'https://www.youtube.com/embed/4VhSEU4GGso?list=PLrMX9ct-uNyPTn8oXU9ewCTAJs65WvuZX',
    },
    {
      title: 'Falling Down',
      link:
        'https://www.youtube.com/embed/QgmS9lZRkuU?list=PLrMX9ct-uNyPTn8oXU9ewCTAJs65WvuZX',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>The Best Movie You Never Saw | Lance Vlcek</title>
      </Head>
      <div className='show-image-container'>
        <img
          src='/images/bestMovieYouNeverSaw.jpg'
          width={500}
          height={300}
          alt={'The Best Movie You Never Saw'}
        ></img>
      </div>
      <h1 className='show-title'>The Best Movie You Never Saw</h1>
      <ShowDescription
        date='March 2018 – Present'
        text='Welcome to The Best Movie You NEVER Saw, a column dedicated to examining films that have flown under the radar or gained traction throughout the years, earning them a place as a cult classic or underrated gem that was either before it’s time and/or has aged like a fine wine. Based on the column created by Paul Shirey and currently written by Chris Bumbray for JoBlo.com, this video version of the column features narration by Bumbray and editing by Lance Vlcek.'
        contributions={[
          'Creating the logo and intro using After Effects',
          'Editing',
        ]}
      />
      <VideoGrid videoLinks={videoLinks} />
    </Layout>
  );
}
