import { connect } from 'react-redux';
import { tab } from '../modules/tabAction';
import sampleTab from '../components/sampleTab';
import sampleBody from './sampleBody';



function mapStateToProps(state) {
  return {
      value: state.sample.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    tab: (index) => dispatch(tab(index))

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(sampleTab);