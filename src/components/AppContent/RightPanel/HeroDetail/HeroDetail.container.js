import { connect } from 'react-redux';
import HeroDetail from './HeroDetail.component';

import { fetchOne } from '../../../../stores/Heroes/heroes.actions';

const stateToProps = ({ details }, { match }) => {
  debugger
  return details[match.params.id] || {
    data: null,
    loading: false,
    error: null
  };
}

const dispatchToProps = (dispatch, { match }) => ({
  loadDetail: () => dispatch(fetchOne(match.params.id)),
});

export default connect(stateToProps, dispatchToProps)(HeroDetail);