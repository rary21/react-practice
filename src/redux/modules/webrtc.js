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
        videoSrc: action.srcObject
      };
    default: return state;
  }
}

// Action Creators
export function storeVideo() {
  return { type: STORE_VIDEO };
}
