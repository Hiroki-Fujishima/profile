import { connect } from 'react-redux';
import { tab } from '../modules/tabAction';
import sampleBody from '../components/sampleBody';



function mapStateToProps(state) {
  return {
      index: state.tab.index,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    tab: (index) => dispatch(tab(index))

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(sampleBody);