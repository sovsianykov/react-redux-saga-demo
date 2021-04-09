// import api from "modules/api/api";
// import { apiActions, API_ACTIONS } from "./actions";
// import { takeEvery } from 'redux-saga/effects'
//
// export function* onApiLoad({payload,type}) {
//     const actionType = type.replace(API_ACTIONS.FETCH_START, '');
//
//     try {
//         const request = yield api.fetch(actionType, payload);
//
//         put
//
//     }catch (e) {
//
//     }
// }
//
//
//
//
// export function* watchApiLoad() {
//     yield takeEvery(action => action.type.startsWith(API_ACTIONS.FETCH_START), onApiLoad);
// }