import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';
import VideoGrid from '../../components/VideoGrid';
import ShowDescription from '../../components/ShowDescription';

export default function FirstPost() {
  const videoLinks = [
    {
      title: 'Poltergeist 3',
      link: 'https://www.youtube.com/embed/tdA9hetr34s',
    },
    {
      title: 'The Exorcist 4',
      link:
        'https://www.youtube.com/embed/0uU8Alr59aQ?list=PLyvkHUyUk0s1hy5a8_6zgfCOouIL8GE7K',
    },
    {
      title: 'Highlander 2',
      link:
        'https://www.youtube.com/embed/WB7Y26hURng?list=PLyvkHUyUk0s1hy5a8_6zgfCOouIL8GE7K',
    },
    {
      title: 'Leatherface: The Texas Chainsaw Massacre III',
      link:
        'https://www.youtube.com/embed/1trBKHdcxSw?list=PLyvkHUyUk0s1hy5a8_6zgfCOouIL8GE7K',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>The Black Sheep | Lance Vlcek</title>
      </Head>
      <div className='show-image-container'>
        <Image
          src='/images/wtf.jpg'
          width={500}
          height={300}
          alt={'The Black Sheep'}
        ></Image>
      </div>
      <h1 className='show-title'>The Best Movie You Never Saw</h1>
      <ShowDescription
        date='March 2018 – Present'
        text={`Hollywood has had its fair share of historically troubled productions. Whether it was casting changes, actor deaths, fired directors, in-production rewrites, constant delays, budget cuts or studio edits, these films had every intention to be a blockbuster, but were beset with unforeseen disasters. Sometimes huge hits, sometimes box office bombs. Either way, we have to ask: WTF Happened To This Horror Movie?`}
        contributions={[
          'I became lead editor on WTF and produced an episode monthly.',
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
