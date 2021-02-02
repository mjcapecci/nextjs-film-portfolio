import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';
import VideoGrid from '../../components/VideoGrid';
import ShowDescription from '../../components/ShowDescription';

export default function FirstPost() {
  const videoLinks = [];

  return (
    <Layout>
      <Head>
        <title>Sephora | Lance Vlcek</title>
      </Head>
      <div className='show-image-container'>
        <Image
          src='/images/sephora.jpg'
          width={500}
          height={300}
          alt={'The Black Sheep'}
        ></Image>
      </div>
      <h1 className='show-title'>Sephora</h1>
      <ShowDescription
        date='June 2016'
        text={`I partnered with the cosmetics company Sephora to create a video to engage the cast on skincare importance. This video was chosen by the Chicago region and was shown at the end of year Las Vegas conference.`}
        contributions={[
          'Shooting the raw footage',
          'Color correction and color grading',
          'Creating the logo and intro using After Effects',
          'Editing',
        ]}
      />
      <VideoGrid videoLinks={videoLinks} />
    </Layout>
  );
}
