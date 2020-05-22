import { connect } from 'react-redux';
import { header } from '../modules/sampleAction';
import sampleHeader from '../components/sampleHeader';



function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    header: () => dispatch(header()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(sampleHeader);