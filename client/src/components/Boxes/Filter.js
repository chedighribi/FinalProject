import React from 'react'
import BoxList from './BoxList'

export default function Filter ({movie,newRate,newTitle}) {

    return(
        (newRate === "" && newTitle === "") ? <MovieList movie={movie} /> :
        (newRate !== "" && newTitle === "") ? (<MovieList movie={movie.filter(el => el.rate == newRate)} />) :
            (newRate === "" && newTitle !== "") ? (<MovieList movie={movie.filter(el => ((el.title).toUpperCase()).includes((newTitle).toUpperCase()))} />) :
                <MovieList movie={movie.filter(el => ((el.title).toUpperCase()).includes((newTitle).toUpperCase()) && el.rate == newRate)
                } />
    )
}