import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartende',
      },
    ],
  }

  removeCharacter = (index) => {
  const {characters} = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}

  render() {
    const { characters } = this.state

    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <div className="container">
    <Table characterData={characters} removeCharacter={this.removeCharacter} />
  </div>
      </div>
    )
  }
}

export default App
