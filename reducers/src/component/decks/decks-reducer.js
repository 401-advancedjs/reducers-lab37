const defaultState = [];

export default (state = defaultState, { type, payload }) => {
  switch ( type ){
    case 'ADD_SPORT':
      return [...state, payload];
    case 'UPDATE_SPORT':
      const sportByID = payload.sportID;
      let updatedSport = state[sportByID];
      updatedSport.sport = payload.sport;
      updatedSport.sportID = sportByID;
      return state;
    case 'DELETE_SPORT':
      return state.filter(sport => sport.id !== payload.id);
    default:
      return state;
  }
};

