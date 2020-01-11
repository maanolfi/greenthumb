import produce from 'immer';

const INITIAL_STATE = {
  results: null,
  loading: false,
  answer: {sun: '', water: '', pets: null}
};

export default function plantsData(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@plants/REQUEST_ALL_RESULTS':
      return produce(state, draft => {
        draft.loading = true;
      });

    case '@plants/SUCCESS':
      return { results: action.payload };

    case '@plants/ANSWER':
      return produce(state, draft => {
        draft.answer.sun =  action.text
      });

    default:
      return state;
  }
}
