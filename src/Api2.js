import React, {Component} from 'react'

class App extends Component {
  state = {
    message:''
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {


}

onCreateUser = () =>{
let userInfo={
      name:this.refs.name.value,
      job:this.refs.job.value,

    };

    const url =
      'https://reqres.in/api/users/'

      fetch(url,{
      method: 'POST',
      headers:{'Content-type':'application/json'},
      mode: 'no-cors',
        body: userInfo
    }).then(r=>r.json()).then(res=>{
      if(res){
        this.setState({message:'New Employee is Created Successfully'});
      }
    });
}
  render() {

    return(
      <div>
        <h2>Please Enter Employee Details...</h2>
        <p>
          <label>Employee name1 : <input type="text"  ref="name"></input></label>
        </p>
        <p>
          <label>Employee job : <input type="text" ref="job"></input></label>
        </p>
        <button onClick={this.onCreateUser}>Create</button>
              </div>

    )

    //return <div><pre>{JSON.stringify(this.state.users, null, 2) }</pre></div>;
  }
}

export default App
