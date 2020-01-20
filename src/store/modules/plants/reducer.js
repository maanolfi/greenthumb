import produce from 'immer';

const INITIAL_STATE = {
  results: [{ id: 1, name: 'Euphorbia eritrea' }],
  loading: false,
  mgssuccess: false,
  plant: {},
};

export default function plantsData(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@plants/ANSWER_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });

    case '@plants/SUCCESS':
      return produce(state, draft => {
        draft.results = action.data;
        draft.loading = false;
        draft.mgssuccess = false;
      });

    case '@plants/REQUEST_ONLY_PLANT':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@plants/SUCCESS_ONLY_PLANT':
      return produce(state, draft => {
        draft.plant = action.data;
        draft.loading = false;
      });

    case '@plants/POST_MSG_SUCCESS':
      return produce(state, draft => {
        draft.mgssuccess = true;
      });

    default:
      return state;
  }
}
