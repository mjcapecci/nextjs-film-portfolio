import React from 'react';

const ShowDescription = ({ date, text, contributions }) => {
  return (
    <div className='show-description'>
      <h3>{date}</h3>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
      <h3>My Contributions:</h3>
      <ul>
        {contributions?.map((contribution) => (
          <li>{contribution}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowDescription;
