import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';
import VideoGrid from '../../components/VideoGrid';
import ShowDescription from '../../components/ShowDescription';

export default function FirstPost() {
  const videoLinks = [
    {
      title: 'Eric Red (Writer/Director)',
      link:
        'https://www.youtube.com/embed/_C2pbCrdQ1s?list=PLyvkHUyUk0s1meTEVJLuyAs_dghKPbS5t',
    },
    {
      title: 'Patrick Lussier (Editor)',
      link:
        'https://www.youtube.com/embed/wScDUl_LBe0?list=PLyvkHUyUk0s1meTEVJLuyAs_dghKPbS5t',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Making Of With... | Lance Vlcek</title>
      </Head>
      <div className='show-image-container'>
        <Image
          src='/images/makingOfWith.jpg'
          width={500}
          height={300}
          alt={'Making Of With...'}
        ></Image>
      </div>
      <h1 className='show-title'>Making Of With...</h1>
      <ShowDescription
        date='May 2020 – Present'
        text='We talk with actors, writers, editors, and directors and ask them to pick out four of their favorite scenes to discuss and dissect. So pour a cold one, light a cigar and sit back and enjoy as we go in-depth into the world of film making'
        contributions={[
          'Reach out to talent for notation and clips',
          'Creating the logo and intro using After Effects',
          'Editing',
        ]}
      />
      <VideoGrid videoLinks={videoLinks} />
    </Layout>
  );
}
