import { IBeginAjaxCall, IAjaxCallError } from 'Interfaces/ActionInterfaces/ICommonAction';
import * as CommonActionTypes from 'Types/ActionTypes/CommonActionTypes';

export function beginAjaxCall(): IBeginAjaxCall {
    return { type: CommonActionTypes.BEGIN_AJAX_CALL };
}

export function ajaxCallError(error: Error): IAjaxCallError {
    return { type: CommonActionTypes.AJAX_CALL_ERROR, error: error };
}
