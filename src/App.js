import React from 'react';
import Auth from './Components/Authentication/Auth';
import './App.css'
import { Switch, Route } from 'react-router-dom';
import Masonry from './Components/Masonry/Masonry';
import { connect } from 'react-redux';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isLoggedIn:false
    }
  }

  componentDidMount() {
    let loggedIn=localStorage.getItem("data");
    if(loggedIn){
      this.setState({isLoggedIn:true});
    }
  }
  render() {
    return (
      <div>
        {this.state.isLoggedIn ? <Masonry></Masonry> : <div className="centeredCss">
          <div className="col-md-4">
            <Auth />
          </div>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    loggedIn: state.loggedIn
  });
}

export default connect(mapStateToProps)(App);