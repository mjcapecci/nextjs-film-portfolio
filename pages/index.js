import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ShowPicGrid from '../components/ShowPicGrid';

export default function Home() {
  const showImages = [
    {
      src: '/images/bestMovieYouNeverSaw.jpg',
      alt: 'The Best Movie You Never Saw',
      link: '/shows/the-best-movie-you-never-saw',
    },
    {
      src: '/images/horrorHallOfFame.jpg',
      alt: 'Horror Hall Of Fame',
      link: '/shows/horror-hall-of-fame',
    },
    {
      src: '/images/makingOfWith.jpg',
      alt: 'Making Of With...',
      link: '/shows/making-of-with',
    },
    {
      src: '/images/sephora2.jpg',
      alt: 'Sephora',
      link: '/shows/sephora',
    },
    {
      src: '/images/theBlackSheep.jpg',
      alt: 'The Black Sheep',
      link: '/shows/the-black-sheep',
    },
    {
      src: '/images/wtf.jpg',
      alt: 'WTF Happened To This HORROR Movie',
      link: '/shows/wtf-happened-to-this-horror-movie',
    },
  ];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='home-page-show-images'>
        <ShowPicGrid images={showImages} />
      </section>
    </Layout>
  );
}
