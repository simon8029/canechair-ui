import { GET_COMPONENTS_FROM_METADATA } from '../CCPActions/CCPActionTypes';

export default function ccpComponentsReducer(state = {}, action) {
  switch (action.type) {
    case GET_COMPONENTS_FROM_METADATA:
      return { components: ["sdfsd", "sdfsdf"] };
    default:
      return state;
  }
}

