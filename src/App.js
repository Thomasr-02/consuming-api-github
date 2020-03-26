import React from 'react';
import Navbar from './components/Navbar'
import Profile  from './components/profile';
//some classes extends React.Component

class App extends React.Component {
  
  render() {
   
    return (
      <div className="App">
       <Navbar />
       <Profile/>
       </div>
       );
     }
}

export default App;