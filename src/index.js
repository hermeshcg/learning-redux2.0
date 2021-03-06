import store from './store';
import { bugAdded } from './actions';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed', store.getState());
});

store.dispatch(bugAdded('bug 1'));

unsubscribe();

console.log(store.getState());
