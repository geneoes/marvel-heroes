import { connect } from 'react-redux';
import HeroList from './HeroList.component';

import { fetchHeroes } from './HeroList.actions';

const stateToProps = (state) => ({
  heroes: state.heroes.items,
  loading: state.heroes.loading,
  error: state.heroes.error,
})

const dispatchToProps = (dispatch, props) => ({
  loadHeroes: () => dispatch(fetchHeroes()),
});

export default connect(stateToProps, dispatchToProps)(HeroList);