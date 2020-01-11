import { all } from 'redux-saga/effects';

import plants from './plants/saga';

export default function* rootSaga() {
  return yield all([plants]);
}
