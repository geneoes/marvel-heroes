import { connect } from 'react-redux';
import HeroDetail from './HeroDetail.component';

import { fetchHeroDetail } from './HeroDetail.actions';

const stateToProps = ({ detail }, { match }) => {
  return detail[match.params.id] || {
    data: {},
    loading: false,
    error: null
  };
}

const dispatchToProps = (dispatch, { match }) => ({
  loadDetail: () => dispatch(fetchHeroDetail(match.params.id)),
});

export default connect(stateToProps, dispatchToProps)(HeroDetail);