import { fromJS } from 'immutable';

const initialState = {
  newAppleId: 3,
  apples: [
    {
      id: 0,
      weight: 233,
      eaten: false,
    },
    {
      id: 1,
      weight: 235,
      eaten: false,
    },
    {
      id: 2,
      weight: 256,
      eaten: false,
    },
  ],
  picking: false,
};

export default (state = initialState, action) => {
  //let newState;
  switch (action.type) {
    
    case 'apple/START_PICK_APPLE':

      return fromJS(state).set('picking',true).toJS();

    case 'apple/FINISH_PICK_APPLE':
      let newApple = {
        id: state.newAppleId,
        weight: action.payload,
        eaten: false,
      };
      return fromJS(state).update('apples', list => list.push(newApple))
        .set('newAppleId', state.newAppleId + 1)
        .set('picking', false)
        .toJS();

    case 'apple/ERROR_PICK_APPLE':
      return fromJS(state).set('picking', false).toJS();

    case 'apple/EAT_APPLE':
      return fromJS(state).setIn(['apples', action.payload, 'eaten'], true).toJS();

    default:
      return state;
  }
}