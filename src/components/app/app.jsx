import React, { useState } from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Footer from '../footer';
import * as swapiService from '../../services/swapi';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    const [choosenPerson, setChoosenPerson] = useState(1);
    const [choosenPlanet, setChoosenPlanet] = useState(3);
    const [choosenStarship, setChoosenStarship] = useState(5);

    const changePerson = (id) => {
        setChoosenPerson(id);
    }

    const changePlanet = (id) => {
        setChoosenPlanet(id);
    }

    const changeStarship = (id) => {
        setChoosenStarship(id);
    }

    const urls = {
        planet: "https://starwars-visualguide.com/assets/img/planets/",
        person: "https://starwars-visualguide.com/assets/img/characters/",
        starship: "https://starwars-visualguide.com/assets/img/starships/",
    }

    const peopleList = (<ItemList
        changeItem={changePerson}
        getElements={swapiService.getAllpeple} />);

    const peopleDetails = (<ItemDetails
        getItem={swapiService.getMan}
        url={urls.person}
        choosenItem={choosenPerson}
    />);

    const planetList = (<ItemList
        changeItem={changePlanet}
        getElements={swapiService.getAllplanets} />);

    const planetDetails = (
        <ItemDetails
            getItem={swapiService.getPlanet}
            url={urls.planet}
            choosenItem={choosenPlanet}
        />);

    const starshipList = (
        <ItemList
            changeItem={changeStarship}
            getElements={swapiService.getAllStarships} />);

    const starshipDetails = (
        <ItemDetails
            getItem={swapiService.getStarship}
            url={urls.starship}
            choosenItem={choosenStarship}
        />);


    return (
        <div className="mainWrapper">
            <Header />
            <div className="bodyContent">
                <RandomPlanet />
                <div className="listAndDetailsWrapper">
                    <Switch>
                        <Route exact path="/">
                            {peopleList}
                            {peopleDetails}
                        </Route>
                        <Route path="/planets">
                            {planetList}
                            {planetDetails}
                        </Route>
                        <Route path="/starships">
                            {starshipList}
                            {starshipDetails}
                        </Route>
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;