// widgets.js

// Actions
const STORE_VIDEO = 'react-practice/webrtc/STORE_VIDEO';

var initialState = {
  videoSrc: null,
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case STORE_VIDEO:
      return {
        ...state,
        srcObject: action.srcObject
      };
    default: return state;
  }
}

// Action Creators
export function storeVideo(srcObject) {
  return {
    type: STORE_VIDEO,
    srcObject: srcObject,
  };
}
