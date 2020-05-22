import { connect } from 'react-redux';
import { tab } from '../modules/sampleAction';
import sampleCard from '../components/sampleCard';



function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    tab: () => dispatch(tab()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(sampleCard);