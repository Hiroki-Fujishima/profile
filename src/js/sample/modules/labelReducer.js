import { PUSH_SAMPLE_LABEL_REQUEST } from "../../const/actionType";

const initialState = {
  num: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_SAMPLE_LABEL_REQUEST:
      const prevNum = state.num;
      return {
        ...state,
        num: prevNum + 1
      };

    default:
      return state;
  }
}