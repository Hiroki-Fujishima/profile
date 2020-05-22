import React from 'react';
import css from '../styles/sampleButton.module.css';
import data from '../styles/haikei.png';

class SampleImage extends React.Component {
    render() {
      console.log("image-------");
      const image = new Image();
      image.src = data;
      console.log(image);
        return(
          
            <div className={css.back}>
              <img alt='' src={image.src}></img>
             </div>
       );

     }
    }
export default SampleImage;