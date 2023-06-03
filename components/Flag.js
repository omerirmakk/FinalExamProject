import React from 'react';
import TitleText from './TitleText';

const Flag = ({ ImageSrc, Title }) => {
  return (
    <div className="Flag_container">
      <img className="Flag_image" src={ImageSrc}></img>
      <TitleText Title={Title}></TitleText>
    </div>
  );
};

export default Flag;
