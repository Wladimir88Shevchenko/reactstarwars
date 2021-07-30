import React, { useState, useEffect } from 'react';
import './random-planet.css';
import Loader from '../loader';
import * as swapiService from '../../services/swapi'

const RandomPlanet = () => {

    const [rndPlanet, setRndPlanet] = useState(null);
    const [loading, setLoading] = useState(true);
    let content;

    const updatePlanet = () => {
        let id;
        do {
            id = Math.floor(Math.random() * 17 + 4);
        } while (id === 20)

        swapiService.getPlanet(id)
            .then(planet => {
                setRndPlanet({
                    ...planet,
                    id,
                    /* name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter, */
                })
            })
            .then(
                () => {
                    setLoading(false);
                }
            )
    }

    useEffect(() => {
        setInterval(updatePlanet, 6500);
    }, []);

    loading ? (
        content = <Loader />
    ) : (
        content = <div>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${rndPlanet.id}.jpg`} alt={rndPlanet.name} />
            <div className="listProps">
                <ul className="list-group">
                    <h2>{rndPlanet.name}</h2>
                    <li className="list-group-item"><strong>Population </strong> {rndPlanet.Population}</li>
                    <li className="list-group-item"><strong>Rotation Period </strong> {rndPlanet.Rotation}</li>
                    <li className="list-group-item"><strong>Diameter </strong> {rndPlanet.Diameter}</li>
                </ul>
            </div>
        </div>
    )


    return (
        <div className="rndPlanetWrapper">
            {content}
        </div>
    );
}

export default RandomPlanet;