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
      currentWeapons: { computer: null, user: null },
      score: { computer: 0, user: 0 },
      fightHistory: [],
      message: null,
    };
    this.play = this.play.bind(this);
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
      score: { ...state.score, [fighter]: state.score[fighter] + 2 },
    }));
  }

  setMessage(message) {
    this.setState({ message });
  }

  fightHistoryUpdater(point) {
    this.setState(st => ({
      fightHistory: [...st.fightHistory, point],
    }));
  }

  play(weapon) {
    const randomNumber = Math.floor(Math.random() * 3);
    const randomWeapon = ['Rock', 'Paper', 'Scissors'][randomNumber];
    this.updateCurrentWeapons(weapon, randomWeapon);

    const tie = weapon === randomWeapon;

    const win =
			(weapon === 'Rock' && randomWeapon === 'Scissors') ||
			(weapon === 'Paper' && randomWeapon === 'Rock') ||
			(weapon === 'Scissors' && randomWeapon === 'Paper');

    if (win) {
      this.updateScoreWin('user');
      this.fightHistoryUpdater(2);
      this.setMessage('You win!');
    } else if (tie) {
      this.updateScoreTie();
      this.fightHistoryUpdater(1);
      this.setMessage('Tie!');
    } else {
      this.updateScoreWin('computer');
      this.fightHistoryUpdater(0);
      this.setMessage('You lost');
    }
  }

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
