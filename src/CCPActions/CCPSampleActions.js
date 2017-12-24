import { TOGGLE_SAMPLE_DISPLAY_STATUS } from './CCPActionTypes';

export const toggleSampleDisplayStatus = (componentId, sampleId, sampleDisplayStatus) => {
  return {
    type: TOGGLE_SAMPLE_DISPLAY_STATUS,
    sampleId,
    sampleDisplayStatus
  }
}
