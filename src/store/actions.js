export const ACTION_TYPE_FIRST_NAME = "ACTION_TYPE_FIRST_NAME";
export const ACTION_TYPE_LAST_NAME = "ACTION_TYPE_LAST_NAME";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const CgangeFirstName = (newFirstName) => {
  return {
    type: ACTION_TYPE_FIRST_NAME,
    payload: newFirstName,
  };
};

export const CgangeLastName = (newLastName) => {
  return {
    type: ACTION_TYPE_LAST_NAME,
    payload: newLastName,
  };
};

export const ChangeInc = (newCount) => {
  return {
    type: INCREMENT,
    payload: newCount + 1,
  };
};
export const ChangeDec = (newCount) => {
  return {
    type: DECREMENT,
    payload: newCount - 1,
  };
};
