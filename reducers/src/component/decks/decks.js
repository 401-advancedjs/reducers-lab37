import React from 'react';
import { connect } from 'react-redux';

class Decks extends React.Component{
  render(){
    return(
      <>
      <p> Inside Decks</p>
      {/* { this.props.sport.sport } */}
      </>
    );
  }
};

const mapStateToProps = state => ({
  sport: state.sport,
  team: state.team
});

export default connect(mapStateToProps)(Decks);