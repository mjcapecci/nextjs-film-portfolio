import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';
import VideoGrid from '../../components/VideoGrid';
import ShowDescription from '../../components/ShowDescription';

export default function FirstPost() {
  const videoLinks = [
    {
      title: 'Rambo III',
      link:
        'https://www.youtube.com/embed/RW_qwfoSB6Q?list=PLrMX9ct-uNyOidbB0sG6jTUTfIkaIDybV',
    },
    {
      title: 'The Mothman Prophecies',
      link:
        'https://www.youtube.com/embed/hGKORbz3TXA?list=PLrMX9ct-uNyOidbB0sG6jTUTfIkaIDybV',
    },
    {
      title: 'Lake Placid',
      link:
        'https://www.youtube.com/embed/-JqhNpS8PwA?list=PLrMX9ct-uNyOidbB0sG6jTUTfIkaIDybV',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>The Black Sheep | Lance Vlcek</title>
      </Head>
      <div className='show-image-container'>
        <Image
          src='/images/theBlackSheep.jpg'
          width={500}
          height={300}
          alt={'The Black Sheep'}
        ></Image>
      </div>
      <h1 className='show-title'>The Black Sheep</h1>
      <ShowDescription
        date='November 2016 – Present'
        text={`THE BLACK SHEEP features different takes on horror films that the masses or/and critics didn't care for but that we found merit in. We defend horror movies that deserve more love with a bit of sarcasm and bite!`}
        contributions={[
          'Creating the logo and intro using After Effects',
          'Editing',
          'Researching',
          'Writing',
          'Narrating',
        ]}
      />
      <VideoGrid videoLinks={videoLinks} />
    </Layout>
  );
}
