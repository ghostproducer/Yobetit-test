import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import './App.css';


function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

class App extends Component {
    state = {
        response: '',
        post: '',
        responseToPost: '',
        value: 0
    };

    handleUniqueCountry = async e => {
        e.preventDefault();
        const response = await fetch('/api/uniqueCountry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({post: this.state.post}),
        });
        const body = await response.text();
        this.setState({responseToPost: body});
    };

    handleListCountry = async e => {
        e.preventDefault();
        const response = await fetch('/api/listCountry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({post: this.state.post}),
        });
        const body = await response.text();
        this.setState({responseToPost: body});
    };

    handleAllCountry = async e => {
        e.preventDefault();
        const response = await fetch('/api/allCountry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({post: this.state.post}),
        });
        const body = await response.text();
        this.setState({responseToPost: body});
    };

    runMachine = async e => {
        e.preventDefault();
        const response = await fetch('/api/runMachine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({post: this.state.post}),
        });
        const body = await response.text();
        this.setState({responseToPost: body});
    };


    handleChange = (event, newValue) => {
        this.setState({value: newValue})
    };

    render() {
        return (
            <div className="App">
                <AppBar position="static">
                    <Tabs value={this.state.value} onChange={this.handleChange}>
                        <Tab label="Question 1"/>
                        <Tab label="Question 2"/>
                        <Tab label="Question 3"/>
                        <Tab label="Question 4"/>
                    </Tabs>
                </AppBar>
                {this.state.value === 0 && <div>
                    <div>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {'Write a function that connects to​ ​ https://restcountries.eu/​ and gets a unique country from a specific name given using the Node back end and send it to the front end.'}
                        </Typography>
                        <p>{this.state.response}</p>
                        <form onSubmit={this.handleUniqueCountry}>
                            <p>
                                <strong>Search a Unique Country:</strong>
                            </p>
                            <input
                                type="text"
                                value={this.state.post}
                                onChange={e => this.setState({post: e.target.value})}
                            />
                            <button type="submit">Search</button>
                        </form>
                        <p>{this.state.responseToPost}</p>
                    </div>
                </div>}
                {this.state.value === 1 && <div>
                    <div>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {'Using the same API (​ ​ https://restcountries.eu/​ ), and from an array of string, write a function that returns a list of countries where their name matches at least a part of one of these string use the Node back end and send it to the front end.'}
                        </Typography>
                        <p>{this.state.response}</p>
                        <form onSubmit={this.handleListCountry}>
                            <p>
                                <strong>Search a Unique Country:</strong>
                            </p>
                            <input
                                type="text"
                                value={this.state.post}
                                onChange={e => this.setState({post: e.target.value})}
                            />
                            <button type="submit">Search</button>
                        </form>
                        <p>{this.state.responseToPost}</p>
                    </div>
                </div>}
                {this.state.value === 2 && <div>
                    <div>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {'Using the same API (​ ​ https://restcountries.eu/​ ), and from an array of string, write a function that returns a list of countries where their name matches at least a part of one of these string use the Node back end and send it to the front end.'}
                        </Typography>
                        <p>{this.state.response}</p>
                        <form onSubmit={this.handleAllCountry}>
                            <p>
                                <strong>Search a country from the list:</strong>
                            </p>
                            <input
                                type="text"
                                value={this.state.post}
                                onChange={e => this.setState({post: e.target.value})}
                            />
                            <button type="submit">Search</button>
                        </form>
                        <p>{this.state.responseToPost}</p>
                    </div>
                </div>}
                {this.state.value === 3 && <div>
                    <div>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {'SLOT MACHINE GAME'}
                        </Typography>
                        <p>{this.state.response}</p>
                        <form onSubmit={this.runMachine}>
                            <p>
                                <strong>Search a country from the list:</strong>
                            </p>
                            <input
                                type="text"
                                value={this.state.post}
                                onChange={e => this.setState({post: e.target.value})}
                            />
                            <button type="submit">Search</button>
                        </form>
                        <p>{this.state.responseToPost}</p>
                    </div>

                </div>}
            </div>

        );
    }
}
export default App;
