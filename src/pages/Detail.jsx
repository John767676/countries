import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import {IoArrowBack} from 'react-icons/io5'
import {searchByCountry} from "../config";
import {Button} from "../components/Button/Button";
import Info from "../components/Info/Info";


const Detail = () => {
    const {name} = useParams()
    const navigate = useNavigate()
    const [country,setCountry] = useState(null)

    const goBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        axios.get(searchByCountry(name)).then(({data}) => setCountry(data[0]))
    },[name])
    return (
        <div>
            <Button onClick={goBack}><IoArrowBack></IoArrowBack>Back</Button>
            {country && (
            <Info {...country} />
            )}
        </div>
    );
};

export default Detail;