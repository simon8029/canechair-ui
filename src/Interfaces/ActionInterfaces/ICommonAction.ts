import * as CommonActionTypes from 'Types/ActionTypes/CommonActionTypes';

export type IBeginAjaxCall = {
  type: CommonActionTypes.BEGIN_AJAX_CALL;
};

export type IAjaxCallError = {
  type: CommonActionTypes.AJAX_CALL_ERROR;
  error: Error;
};
