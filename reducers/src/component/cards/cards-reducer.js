const defaultState = {};

export default (state = defaultState, {type, payload}) => {
  let updatedState = null;
  let sportByID = null;
  let allTeamsInSport = null;
  let targetTeamByID = null;

  switch( type ){
    case 'ADD_SPORT':
      const newSport = payload.sportID;
      return {...state, [newSport]: []};
    case 'DELETE_SPORT':
      sportByID = payload.id;
      updatedState = {...state};
      delete updatedState[sportByID];
      return updatedState;
    case 'ADD_TEAM':
      sportByID = payload.sportID;
      allTeamsInSport = state[sportByID];
      const newTeam = {team: payload.team, id: payload.id};
      return {...state, [sportByID]: [...allTeamsInSport, newTeam]};
    case 'UPDATE_TEAM':
      sportByID = payload.sportID;
      targetTeamByID = payload.id;
      allTeamsInSport = state[sportByID];

      updatedState = allTeamsInSport.filter(team => team.id === targetTeamByID);
      updatedState[0].sportID = sportByID;
      updatedState[0].id = targetTeamByID;
      updatedState[0].team = payload.team;
      return state;
    case 'DELETE_TEAM':
      targetTeamByID = payload.id;
      sportByID = payload.sportID;
      allTeamsInSport = state[sportByID];
      return {...state, [sportByID]: allTeamsInSport.filter(team => team.id !== targetTeamByID)};
    default:
      return state;
  }
};