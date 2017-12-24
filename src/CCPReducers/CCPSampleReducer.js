import { TOGGLE_SAMPLE_DISPLAY_STATUS } from '../CCPActions/CCPActionTypes';

export default function ccpSampleReducer(state = [], action) {
  switch (action.type) {
    case TOGGLE_SAMPLE_DISPLAY_STATUS:
      const { sampleId, sampleDisplayStatus } = action;
      return state.map((oldStatus, index) =>
        sampleId === index ? { ...oldstatus, ...sampleDisplayStatus } : oldstatus);
    default:
      return state;
  }
}
