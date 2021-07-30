const getBigApi = async (url) => {
    const res = await fetch(url);
    const body = await res.json();
    return (body.results);
}

const getApi = async (url) => {
    const res = await fetch(url);
    const body = await res.json();
    return (body);
}

const getAllpeple = () => {
    return (getBigApi("https://swapi.dev/api/people/"));
}


const getMan = (id) => {
    const result = getApi(`https://swapi.dev/api/people/${id}`)
        .then(item => ({
            name: item.name,
            Gender: item.gender,
            Birth: item.birth_year,
            Eye: item.eye_color,
        }))
    return (result);
}

const getAllplanets = () => {
    return (getBigApi("https://swapi.dev/api/planets/"));
}


const getPlanet = (id) => {
    const result = getApi(`https://swapi.dev/api/planets/${id}`)
                .then((item) => ({
                    name: item.name,
                    Population: item.population,
                    Rotation: item.rotation_period,
                    Diameter: item.diameter,
                }))
    return (result);
}


const getAllStarships = () => {
    return (getBigApi("https://swapi.dev/api/starships/"));
}


const getStarship = (id) => {
    const result = getApi(`https://swapi.dev/api/starships/${id}`)
                .then((item) => ({
                    name: item.name,
                    Passengers: item.passengers,
                    Consumables: item.consumables,
                }))
    return (result);
}

export {
    getAllpeple, getMan, getAllplanets,
    getPlanet, getAllStarships, getStarship
}