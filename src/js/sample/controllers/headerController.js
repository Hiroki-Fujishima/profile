import { takeEvery, fork } from "redux-saga/effects";
import { PUSH_SAMPLE_HEADER_REQUEST } from "../../const/actionType";
import headerService from "../services/headerService";

function* header(action) {
  yield fork(headerService.run, action);
}

export default function* () {
  yield takeEvery(PUSH_SAMPLE_HEADER_REQUEST);
}
