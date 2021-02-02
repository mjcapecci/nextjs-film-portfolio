import Head from 'next/head';
import Layout from '../../components/layout';
import VideoGrid from '../../components/VideoGrid';
import ShowDescription from '../../components/ShowDescription';

export default function FirstPost() {
  const videoLinks = [
    {
      title: 'Clive Barker',
      link: 'https://www.youtube.com/embed/NP74pV2gHL0',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Making Of With... | Lance Vlcek</title>
      </Head>
      <div className='show-image-container'>
        <img
          src='/images/horrorHallOfFame.jpg'
          width={617}
          height={347}
          alt={'Horror Hall Of Fame'}
        ></img>
      </div>
      <h1 className='show-title'>Horror Hall Of Fame</h1>
      <ShowDescription
        date='September 2020 – Present'
        text='What does it take to become a Horror icon? Whether it be the Filmmakers orchestrating the frights, the Artists crafting the gore, or the Actors engineering the scares, this series takes an in-depth look at the men and women who paved the way for an entire generation of horror fans, and made the genre what it is today.'
        contributions={['I produced an episode monthly.', 'Editing']}
      />
      <VideoGrid videoLinks={videoLinks} />
    </Layout>
  );
}
