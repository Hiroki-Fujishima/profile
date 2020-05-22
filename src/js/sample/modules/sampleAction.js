import {
    
    PUSH_SAMPLE_BUTTON_REQUEST,
   
  } from "../../const/actionType";
  
  /** from
   * Actionは、ユーザーが起こすイベントを定義します
   */
  
  export function sample(num) {
    return { type: PUSH_SAMPLE_BUTTON_REQUEST };
  }
  
  