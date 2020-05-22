import { takeEvery, fork } from "redux-saga/effects";
import { PUSH_SAMPLE_TAB_REQUEST } from "../../const/actionType";
import tabService from "../services/sampleService";



function* tab(index) {
  yield fork(tabService.run, index, );
  console.log("----------------------- controller");
}

export default function* () {
  yield takeEvery(PUSH_SAMPLE_TAB_REQUEST, tab);
}
