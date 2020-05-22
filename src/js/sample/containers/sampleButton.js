import { connect } from 'react-redux';
import { sample } from '../modules/sampleAction';
import sampleButton from '../components/sampleButton';



function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    sample: () => dispatch(sample()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(sampleButton);