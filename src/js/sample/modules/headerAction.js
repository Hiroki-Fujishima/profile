import {
    
    PUSH_SAMPLE_HEADER_REQUEST,
   
  } from "../../const/actionType";
  
  /** from
   * Actionは、ユーザーが起こすイベントを定義します
   */
  
  export function header(num) {
    return { type: PUSH_SAMPLE_HEADER_REQUEST };
  }
  
  