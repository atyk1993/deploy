import React, {Component} from 'react'

class App extends Component {
  state = {
    users: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://reqres.in/api/users/'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          users: result,
        })

      })
  }

  render(){

    let itemsToRender;
        const {users} = this.state
        if (users.data) {
        itemsToRender = users.data.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.id}</td>
            </tr>
          )
        });
      } else {
        itemsToRender = "Loading...";
      }

  return <div>{itemsToRender}</div>;
    //return <div><pre>{JSON.stringify(this.state.users, null, 2) }</pre></div>;
  }
}

export default App
