import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import './App.css';
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import casinoDatabase from './casinoDatabase.png';


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
                        <Tab label="Question 1 - SQL"/>
                        <Tab label="Question 2 - SQL"/>
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
                {this.state.value === 4 && <div>
                    <div>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {'Use these sentences to draw a schema of a database you would create to store these information.'}
                        </Typography>
                        <List component="nav" aria-label="Secondary mailbox folders">
                            <ListItemText primary="You are working in a casino."/>
                            <ListItemText primary="A casino has games."/>
                            <ListItemText primary="Each game has a unique type."/>
                            <ListItemText
                                primary="Each game has one or more countries where players are allowed to bet from."/>
                            <ListItemText primary="A player may or may not have a favorite game."/>
                        </List>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {'Send the image of the schema and also the sql to create the database and tables.'}
                        </Typography>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {'Below is the picture representing my proposed solution to the database required.'}
                        </Typography>
                        <img src={casinoDatabase} className="" alt="logo"/>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {'Below is the SQL Code used to create the database model.'}
                        </Typography>
                        <Typography variant="h6"
                                    href={"https://yobetit-test.s3-sa-east-1.amazonaws.com/casinoScript.sql"}>
                            {'You can download the sql file to download directly from '}
                            <a
                                className="App-link"
                                href="https://yobetit-test.s3-sa-east-1.amazonaws.com/casinoScript.sql"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                this link
                            </a>
                        </Typography>
                        <text>
                            {'-- MySQL Script generated by MySQL Workbench'}
                            <br></br>
                            {'-- Sun 30 Jun 2019 02:04:19 PM -03'}
                            <br></br>
                            {'-- Model: New Model    Version: 1.0'}
                            <br></br>
                            {'-- MySQL Workbench Forward Engineering'}
                            <br></br>
                            {'SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;'}
                            <br></br>
                            {'SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;'}
                            <br></br>
                            {'SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE=\'TRADITIONAL,ALLOW_INVALID_DATES\';'}
                            <br></br><br></br>
                            {'-- -----------------------------------------------------'}
                            <br></br>
                            {'-- Schema mydb'}
                            <br></br>
                            {'-- -----------------------------------------------------'}
                            <br></br>
                            {'-- -----------------------------------------------------'}
                            <br></br>
                            {'-- Schema mydb'}
                            <br></br>
                            {'-- -----------------------------------------------------'}
                            <br></br>
                            {'CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;'}
                            <br></br>
                            {'USE `mydb` ;'}
                            <br></br>
                            {'----------------------------------------------------'}
                            <br></br>
                            {'-- Table `mydb`.`Casino`'}
                            <br></br>
                            {' -----------------------------------------------------'}
                            <br></br>
                            {'CREATE TABLE IF NOT EXISTS `mydb`.`Casino` ('}
                            <br></br>
                            {'  `idCasino` INT NOT NULL,'}
                            <br></br>
                            {'  `Name` VARCHAR(45) NOT NULL,'}
                            <br></br>
                            {'  PRIMARY KEY (`idCasino`))'}
                            <br></br>
                            {'ENGINE = CSV'}
                            <br></br>
                            {'DEFAULT CHARACTER SET = utf8'}
                            <br></br>
                            {'COMMENT = \'Tabela do Casino\';'}
                            <br></br><br></br>
                            {' -----------------------------------------------------'}
                            <br></br>
                            {' Table `mydb`.`Game`'}
                            <br></br>
                            {' -----------------------------------------------------'}
                            <br></br>
                            {'CREATE TABLE IF NOT EXISTS `mydb`.`Game` ('}
                            <br></br>
                            {'  `idGame` INT NOT NULL,'}
                            <br></br>
                            {'  `Name` VARCHAR(45) NOT NULL,'}
                            <br></br>
                            {'  `Casino_idCasino` INT NOT NULL,'}
                            <br></br>
                            {'  `Type` ENUM(\'CARD\', \'LUCKY\', \'PINBALL\', \'SLOT\') NOT NULL,'}
                            <br></br>
                            {'  PRIMARY KEY (`idGame`),'}
                            <br></br>
                            {'  INDEX `fk_Game_Casino_idx` (`Casino_idCasino` ASC),'}
                            <br></br>
                            {'  CONSTRAINT `fk_Game_Casino`'}
                            <br></br>
                            {'    FOREIGN KEY (`Casino_idCasino`)'}
                            <br></br>
                            {'    REFERENCES `mydb`.`Casino` (`idCasino`)'}
                            <br></br>
                            {'    ON DELETE NO ACTION'}
                            <br></br>
                            {'    ON UPDATE NO ACTION)'}
                            <br></br>
                            {'ENGINE = InnoDB'}
                            <br></br>
                            {'DEFAULT CHARACTER SET = utf8;'}
                            <br></br> <br></br>
                            {' -----------------------------------------------------'}
                            <br></br>
                            {' Table `mydb`.`Country`'}
                            <br></br>
                            {' -----------------------------------------------------'}
                            <br></br>
                            {'CREATE TABLE IF NOT EXISTS `mydb`.`Country` ('}
                            <br></br>
                            {'  `idCountry` INT NOT NULL,'}
                            <br></br>
                            {'  `Name` VARCHAR(45) NULL,'}
                            <br></br>
                            {'  PRIMARY KEY (`idCountry`))'}
                            <br></br>
                            {'ENGINE = InnoDB;'}
                            <br></br> <br></br>
                            {' -----------------------------------------------------'}
                            <br></br>
                            {' Table `mydb`.`AllowedListGameCountry`'}
                            <br></br>
                            {' -----------------------------------------------------'}
                            <br></br>
                            {'CREATE TABLE IF NOT EXISTS `mydb`.`AllowedListGameCountry` ('}
                            <br></br>
                            {'  `Game_idGame` INT NOT NULL,'}
                            <br></br>
                            {'  `Country_idCountry` INT NOT NULL,'}
                            <br></br>
                            {'  PRIMARY KEY (`Game_idGame`, `Country_idCountry`),'}
                            <br></br>
                            {'  INDEX `fk_Game_has_Country_Country1_idx` (`Country_idCountry` ASC),'}
                            <br></br>
                            {'  INDEX `fk_Game_has_Country_Game1_idx` (`Game_idGame` ASC),'}
                            <br></br>
                            {'  CONSTRAINT `fk_Game_has_Country_Game1`'}
                            <br></br>
                            {'    FOREIGN KEY (`Game_idGame`)'}
                            <br></br>
                            {'    REFERENCES `mydb`.`Game` (`idGame`)'}
                            <br></br>
                            {'    ON DELETE NO ACTION'}
                            <br></br>
                            {'    ON UPDATE NO ACTION,'}
                            <br></br>
                            {'  CONSTRAINT `fk_Game_has_Country_Country1`'}
                            <br></br>
                            {'    FOREIGN KEY (`Country_idCountry`)'}
                            <br></br>
                            {'    REFERENCES `mydb`.`Country` (`idCountry`)'}
                            <br></br>
                            {'    ON DELETE NO ACTION'}
                            <br></br>
                            {'    ON UPDATE NO ACTION)'}
                            <br></br>
                            {'ENGINE = InnoDB'}
                            <br></br>
                            {'DEFAULT CHARACTER SET = utf8;'}
                            <br></br>
                            <br></br>
                            {' -----------------------------------------------------'}
                            <br></br>
                            {' Table `mydb`.`Player`'}
                            <br></br>
                            {' -----------------------------------------------------'}
                            <br></br>
                            {'CREATE TABLE IF NOT EXISTS `mydb`.`Player` ('}
                            <br></br>
                            {'  `idPlayer` INT NOT NULL,'}
                            <br></br>
                            {'  `Name` VARCHAR(45) NULL,'}
                            <br></br>
                            {'  `FavoriteGame` INT NOT NULL,'}
                            <br></br>
                            {'  PRIMARY KEY (`idPlayer`, `FavoriteGame`),'}
                            <br></br>
                            {'  INDEX `fk_Player_Game1_idx` (`FavoriteGame` ASC),'}
                            <br></br>
                            {'  CONSTRAINT `fk_Player_Game1`'}
                            <br></br>
                            {'    FOREIGN KEY (`FavoriteGame`)'}
                            <br></br>
                            {'    REFERENCES `mydb`.`Game` (`idGame`)'}
                            <br></br>
                            {'    ON DELETE NO ACTION'}
                            <br></br>
                            {'    ON UPDATE NO ACTION)'}
                            <br></br>
                            {'ENGINE = InnoDB;'}
                            <br></br> <br></br>
                            {'SET SQL_MODE=@OLD_SQL_MODE;'}
                            <br></br>
                            {'SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;'}
                            <br></br>
                            {'SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;'}
                            <br></br>
                        </text>
                    </div>
                </div>}
                {this.state.value === 5 && <div>
                    <div>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {'Write based on above, a SQL query to get all players that have games of type “SLOT” as their favorite games.'}
                        </Typography>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {'Based on the described database on the previous tab, the query would be:'}
                            <br></br>
                            {'SELECT P.id FROM Game AS G INNER JOIN Player AS P ON G.FavoriteGame = P.idGame WHERE G.Type = \'SLOT\''}
                        </Typography>
                    </div>
                </div>}
            </div>

        );
    }
}

export default App;
