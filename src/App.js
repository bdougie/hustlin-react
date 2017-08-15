import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    games: null,
    count: 0,
    message: ''
  }

  componentDidMount() {
    axios.get('https://jzulvmdhac.execute-api.us-west-1.amazonaws.com/dev/today')
    .then((res) => this.setState({
      games: res.data.games,
      count: res.data.count,
      message: res.data.message
    }))
  }

  render() {
    const {games, message, count} = this.state;

    return (
      <div>
        <div>
          <p>{games ? message : "..."}</p>
        </div>
        <ul>
          {count > 0 &&
            games.map((game) => (
              <li style={{listStyleType: 'none'}} key={game.id}>
                {game.name} {game.standard_start_time}
              </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
