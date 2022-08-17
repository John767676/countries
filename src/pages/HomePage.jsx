import React from 'react';
import axios from "axios";
import {ALL_COUNTRIES} from "../config";
import List from "../components/CountryField/List";
import Card from "../components/CountryField/Card";
import {useState, useEffect} from "react";
import Controls from "../components/Form/Control";
import {Link} from 'react-router-dom'

const HomePage = ({countries, setCountries}) => {
   // const [countries,setCountries] = useState([])
    const [filteredCountry,setFilteredCountry] = useState(countries)

    const handleSearch = (search, region) => {
        let data = [...countries]

        if (region) {
            data = data.filter(country => country.region.includes(region))
        }

        if (search) {
            data = data.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountry(data)
    }


    useEffect(() => {
        if (!countries.length)
        axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data))
        // eslint-disable-next-line
    },[])

    useEffect(() => {
        handleSearch()
        // eslint-disable-next-line
    },[countries])

    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {
                    filteredCountry.map(country => {
                        const countryInfo = {
                            img: country.flags.png,
                            name: country.name,
                            about: [
                                {
                                    title: 'Population',
                                    description: country.population.toLocaleString()
                                },
                                {
                                    title: 'Region',
                                    description: country.region
                                },
                                {
                                    title: 'Capital',
                                    description: country.capital
                                }
                            ]
                        }
                        return (
                            <Link style={{textDecoration: 'none', color: "inherit"}} to={`/country/${country.name}`} key={country.name}><Card {...countryInfo} /></Link>
                        )
                    })
                }
            </List>
        </>
    );
};

export default HomePage;