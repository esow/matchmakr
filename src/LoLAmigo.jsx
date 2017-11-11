import React, { Component } from 'react';
import {
    Router,
    Route
  } from 'react-router-dom'
import Welcome from './scenes/Welcome';
import Matching from './scenes/Matching';
import MatchFound from './scenes/MatchFound';
import history from './config/History';

export default class LoLAmigo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerInfo: null
        }
      }

    getChannel = (channel) => {
        this.setState({
            channel: channel
        })
    }

    getCriteria = (criteria) => {
        this.setState({
            criteria: criteria
        })
    }

    getMatchedName = (name) => {
        this.setState({
            name: name
        })
    }

    componentDidMount = () => {
        fetch("https://lolbuddy.herokuapp.com/api/auth/request").then(function(response) { 
            return response.json();
        }).then(function(data) { 
            const session_id = data.session_id
            const session_token = data.session_token
            
            console.log(session_id)

            localStorage.setItem('sessionToken', session_token)
            localStorage.setItem('sessionId', session_id)
        })
    }

    render () {
        return (
            <Router history={history}>
                <div>
                    <Route exact path={process.env.PUBLIC_URL + '/'} render={ () => <Welcome sendChannel={this.getChannel} sendCriteria={this.getCriteria} />} />
                    <Route path={process.env.PUBLIC_URL + '/matching'} render={ () => <Matching channel={this.state.channel} criteria={this.state.criteria} matchFoundName={this.getMatchedName} />} />                    
                    <Route path={process.env.PUBLIC_URL + '/matchfound'} render={ () => <MatchFound name={this.state.name} />} />                    
                </div>
            </Router>
            
        );
    }
}