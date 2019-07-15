import { connect } from 'react-redux';
import HeroList from './HeroList.component';

import { fetchHeroes, changeFilter } from '../../../../stores/Heroes/heroes.actions';

const stateToProps = (state) => {

  return {
  heroes: state.list.data.map((id) => state.details[id].data),
  loading: state.list.loading,
  error: state.list.error,
  filterText: state.nameStartsWith,
}
}

const dispatchToProps = (dispatch, props) => ({
  loadHeroes: () => dispatch(fetchHeroes()),
  changeFilter: (query) => dispatch(changeFilter(query)),
});

export default connect(stateToProps, dispatchToProps)(HeroList);