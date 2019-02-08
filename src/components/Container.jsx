import React from 'react';
import Header from './Header';
import History from './History';
import MainBoard from './MainBoard';
import WeaponSelector from './WeaponSelector';

export default class Container extends React.Component {
  // container holds state of application
  constructor(props) {
    super(props);

    this.state = {
      currentWeapons: { computer: 'Rock', user: 'Scissors' },
      score: { computer: 34, user: 25 },
      fightHistory: [0, 1, 2, 0],
      message: 'You won!',
    };
  }

  updateCurrentWeapons(userWeapon, computerWeapon) {
    this.setState({ currentWeapons: { user: userWeapon, computer: computerWeapon } });
  }

  updateScoreTie() {
    this.setState(state => ({
      score: { user: state.score.user + 1, computer: state.score.computer + 1 },
    }));
  }

  updateScoreWin(fighter) {
    this.setState(state => ({
      ...state.score,
      [fighter]: state.score[fighter] + 2,
    }));
  }

  message(newMessage) {
    this.setState({
      message: newMessage,
    });
  }

  play(weapon) {}

  render() {
    return (
      <div className="container">
        <Header />
        <History history={this.state.fightHistory} />
        <MainBoard
          score={this.state.score}
          currentWeapons={this.state.currentWeapons}
          message={this.state.message}
        />
        <WeaponSelector play={this.play.bind(this)} />
      </div>
    );
  }
}
