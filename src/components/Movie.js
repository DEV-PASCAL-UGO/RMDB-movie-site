import React from 'react';
import { useParams } from 'react-router-dom'
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
//Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
//image
import NoImage from '../images/no_image.jpg';


const Movie = () => {
    const { movieId } = useParams();
    const {state: movie, loading, error } = useMovieFetch(movieId)
    console.log(movie);
    
    if (loading) return <Spinner/>
    if (error) return <div> Hollaa Something went Wrong....</div>
    return (
        <div>
            <BreadCrumb movieTitle= {movie.original_title} />
            <MovieInfo movie={movie}/>
            <MovieInfoBar time={movie.runtime} budget={movie.budjet} revenue={movie.revenue} />
        
            <Grid header='Actors'>
             {movie.actors.map(actor => (
                 <Actor
                    key={actor.credit_id}
                    name={actor.name}
                    character={actor.character}
                    imageUrl={
                        actor.profile_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                        : NoImage
                    }
                    />
             ))}
             
            </Grid>
        </div>
    )
    }    

export default Movie;