import React from 'react';
import Auth from './Components/Authentication/Auth';
import './App.css'
import { Switch, Route } from 'react-router-dom';
import Masonry from './Components/Masonry/Masonry';
import { connect } from 'react-redux';
import { submitFormSuccess } from './store/Actions/index';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }


  componentWillMount() {
    let loggedIn = localStorage.getItem("data");
    if (loggedIn) {
      this.setState({ isLoggedIn: true }, () => {
        this.props.submitFormSuccess();
      });
    }
  }
  render() {
    return (
      <div>
        {this.props.loggedIn ? <Masonry/> : <div className="centeredCss">
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

const mapDispatchToProps = (dispatch) => {
  return ({
    submitFormSuccess: () => dispatch(submitFormSuccess())
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(App);