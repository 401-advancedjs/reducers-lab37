import React from 'react';
import { connect } from 'react-redux';

class Cards extends React.Component{
  render(){
    return(
      <>
      <p>Inside cards</p>
      </>
    );
  }
}

const mapStateToProps = state => ({
  team: state.team
});

export default connect(mapStateToProps)(Cards);