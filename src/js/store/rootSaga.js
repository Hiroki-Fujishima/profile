import { all } from 'redux-saga/effects';
import sampleController from '../sample/controllers/sampleController';
import tabController from '../sample/controllers/tabController';

export default function* routeSaga() {
   yield all([sampleController(),tabController(),tabController()]);
}
