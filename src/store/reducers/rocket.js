const rocket = (state = {}, action) => {
  switch (action.type) {
    case 'LAUNCH':
      return { ...state, rockets: action.rocket };

    default:
      return state;
  }
};

export default rocket;
