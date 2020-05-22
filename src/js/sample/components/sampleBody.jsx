import React from "react";
import SampleCard from '../components/sampleCard';
import SampleCard2 from '../components/sampleCard2';
import SampleCard3 from '../components/sampleCard3';
import SampleCard4 from '../components/sampleCard4';
import SampleCard5 from '../components/sampleCard5';


class SampleBody extends React.Component {
  render() {
     const { index } = this.props;
    if (index === 0) {
       
      return (
        <div>
          <SampleCard/> 
        </div>
  
      ); 
          
    } if (index === 1) {

    return (
      <div>
      <SampleCard2/>
      </div>
    );
    }if (index === 2) {

      return (
        <div>
        <SampleCard3/>
        </div>
      );
      }
    return (
      <div>
        <pre>
        <SampleCard4/>
        </pre>
        <SampleCard5/>
      </div>
    );
  }
  
}

export default SampleBody;