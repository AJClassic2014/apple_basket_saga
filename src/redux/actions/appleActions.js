const prefix = 'apple/';

export const START_PICK_APPLE = 'apple/START_PICK_APPLE';
export const FINISH_PICK_APPLE = 'apple/FINISH_PICK_APPLE';
export const ERROR_PICK_APPLE = 'apple/ERROR_PICK_APPLE';
export const EAT_APPLE = 'apple/EAT_APPLE';

let actions = {

  // pickApple: () => (dispatch, getState) => {
  //   if (getState().picking) {
  //     return;
  //   }
  //   dispatch(actions.stratPickApple());
  //   fetch('./src/assets/json/model_60.json')
  //     .then(res => {
  //       if (res.status != 200) dispatch(errorPickApple(res.statusText));
  //       let appleWeight = Math.floor(200 + Math.random() * 50);
  //       dispatch(actions.finishPickApple(appleWeight));
  //     }).catch(e => {
  //       console.log(e)
  //       dispatch(actions.errorPickApple(e.statusText));
  //     })
  // },

  stratPickApple: () => ({
    type: 'apple/START_PICK_APPLE',
  }),

  finishPickApple: (appleWeight) => ({
    type: 'apple/FINISH_PICK_APPLE',
    payload: appleWeight,
  }),

  errorPickApple: (msg) => ({
    type: 'apple/ERROR_PICK_APPLE',
    payload: new Error(msg),
    error: true
  }),

  eatApple: (appleId) => ({
    type: 'apple/EAT_APPLE',
    payload: appleId
  })
}

export default actions;