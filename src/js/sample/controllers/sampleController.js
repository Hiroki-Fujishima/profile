import { takeEvery, fork } from "redux-saga/effects";
import { PUSH_SAMPLE_BUTTON_REQUEST } from "../../const/actionType";
import sampleService from "../services/sampleService";

function* sample(action) {
  yield fork(sampleService.run, action);
}

export default function* () {
  yield takeEvery(PUSH_SAMPLE_BUTTON_REQUEST);
}
