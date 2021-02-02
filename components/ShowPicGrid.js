import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import useWindowSize from '../utils/useWindowSize';

const ShowPicGrid = ({ images }) => {
  const width = useWindowSize().width;
  const [embedSize, setEmbedSize] = useState(null);

  useEffect(() => {
    if (width > 1330) {
      setEmbedSize({ width: '617', height: '347' });
    } else if (width > 1200) {
      setEmbedSize({ width: '517', height: '290' });
    } else if (width > 970) {
      setEmbedSize({ width: '417', height: '234.5' });
    } else if (width > 730) {
      setEmbedSize({ width: '617', height: '347' });
    } else if (width > 605) {
      setEmbedSize({ width: '517', height: '290' });
    } else if (width > 490) {
      setEmbedSize({ width: '417', height: '234.5' });
    } else if (width > 250) {
      setEmbedSize({ width: '317', height: '178.2' });
    }
  }, [width]);

  return (
    <>
      {embedSize && (
        <div className='show-product-grid'>
          {images.map((image) => (
            <Link href={image.link}>
              <img
                src={image.src}
                width={embedSize.width}
                height={embedSize.height}
                alt={image.alt}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default ShowPicGrid;
