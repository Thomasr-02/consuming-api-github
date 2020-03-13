import React from 'react';
import Navbar from './components/Navbar'
import axios from 'axios';
import profile from './components/profile';
//some classes extends React.Component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      github: {
        url:'https://api.github.com/users',
        count: 7,
        sort:"created: asc"
      },
      user:[],
      repos: []   
    }
  }
  getUser= (e) => {
    const user = e.target.value;
    const { url, count,sort} = this.state.github;
    axios.get('https://api.github.com/users')
      .then(({data})=>this.setState({user: data}))
  }
 
  
  render() {
    const { user } = this.state;
    return (
      <div className="App">
       <Navbar />
       <div className="container" id="app">
           <div className="card card-body">
             <h1>Pesquisar users do github</h1>
             <p className="lead">Digite o nome do user</p>
             <input  onChange={this.getUser} id="search" type="text" className="form-control" required />
           </div>
           {user.length!==0 ? <profile user={user}/> :null}

       </div> 
       </div>
       );
     }
}

export default App;