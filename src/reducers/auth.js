import produce from "immer";

export const types = {
  TESTME_SAGA: "Auth/TESTME_SAGA",

  LOGIN_REQUEST_SAGA: "Auth/LOGIN_REQUEST_SAGA",
  LOGIN_REQUEST: "Auth/LOGIN_REQUEST",
  LOGIN_SUCCESS: "Auth/LOGIN_SUCCESS",
  LOGIN_FAIL: "Auth/LOGIN_FAIL",

  SIGN_UP_REQUEST: "Auth/SIGN_UP_REQUEST",
  SIGN_UP_SUCCESS: "Auth/SIGN_UP_SUCCESS",
  SIGN_UP_FAIL: "Auth/SIGN_UP_FAIL",

  FORGOT_PASSWORD_REQUEST: "Auth/FORGET_PASSWORD_REQUEST",
  FORGOT_PASSWORD_SUCCESS: "Auth/FORGET_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_FAIL: "Auth/FORGET_PASSWORD_FAIL",

  NEW_PASSWORD_SUBMIT_REQUEST: "Auth/NEW_PASSWORD_SUBMIT_REQUEST",
  NEW_PASSWORD_SUBMIT_SUCCESS: "Auth/NEW_PASSWORD_SUBMIT_SUCCESS",
  NEW_PASSWORD_SUBMIT_ERROR: "Auth/NEW_PASSWORD_SUBMIT_ERROR",

  NEXT_STEP_PASSWORD_RECOVER: "Auth/NEXT_STEP_PASSWORD_RECOVER",

  CLEAR_ERROR: "Auth/CLEAR_ERROR",

  LOGOUT_REQUEST: "Auth/LOGOUT_REQUEST",
  LOGOUT_SUCCESS: "Auth/LOGOUT_SUCCESS",
};

export const initialState = {
  isLoggedIn: false,
  user: {
    name: null,
    lastName: null,
    locale: null,
    email: null,
  },
  loading: false,
  error: null,
  recoverPassword: { stage: 0, email: null },
};

export default produce((draft, action) => {
  switch (action.type) {
    case types.CLEAR_ERROR:
      draft.error = null;
      return draft;
    case types.LOGIN_REQUEST:
    case types.SIGN_UP_REQUEST:
    case types.FORGOT_PASSWORD_REQUEST:
    case types.NEW_PASSWORD_SUBMIT_REQUEST:
      draft.loading = true;
      return draft;
    case types.LOGIN_SUCCESS:
      draft.loading = false;
      draft.isLoggedIn = true;
      draft.error = null;
      draft.name = action.payload.name;
      draft.email = action.payload.email;
      return draft;
    case types.LOGIN_FAIL:
    case types.SIGN_UP_FAIL:
    case types.NEW_PASSWORD_SUBMIT_ERROR:
      draft.loading = false;
      draft.error = action.payload;
      return draft;
    case types.LOGOUT_SUCCESS:
      draft.loading = false;
      draft.isLoggedIn = false;
      return draft;
    case types.SIGN_UP_SUCCESS:
    case types.NEW_PASSWORD_SUBMIT_SUCCESS:
      draft.recoverPassword.stage = 3;
      return draft;
    case types.NEXT_STEP_PASSWORD_RECOVER:
      draft.recoverPassword.stage++;
      return draft;
    case types.FORGOT_PASSWORD_SUCCESS:
      draft.recoverPassword = { stage: 1, email: action.payload };
      draft.loading = false;
      return draft;
    case types.FORGOT_PASSWORD_FAIL:
      draft.loading = false;
      draft.error = action.payload;
      return draft;

    default:
      return draft;
  }
}, initialState);

export const actions = {
  submitLoginWithAwsCognito: action => ({ type: types.LOGIN_REQUEST_SAGA, payload: action }),
  testme: () => ({ type: types.TESTME_SAGA }),
};


export function changeRecoverStep() {
  return dispatch => {
    dispatch({
      type: NEXT_STEP_PASSWORD_RECOVER,
    });
  };
}
