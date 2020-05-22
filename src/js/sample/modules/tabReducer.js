import { PUSH_SAMPLE_TAB_REQUEST } from "../../const/actionType";

const initialState = {
  index: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_SAMPLE_TAB_REQUEST:
      const prevNum = action.payload;
      return {
        ...state,
        index: prevNum
      };

    default:
      return state;
  }
}