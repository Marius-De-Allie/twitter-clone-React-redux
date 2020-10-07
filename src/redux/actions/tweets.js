import { createPortal } from "react-dom";

// ACTION TYPE
const TOGGLE_LIKE = 'TOGGLE_LIKE';

// Action creator.

const toggleLike = (id, authedUser) => ({
  type: TOGGLE_LIKE,
  id,
  authedUser
});


export {
  toggleLike as default,
  TOGGLE_LIKE
};