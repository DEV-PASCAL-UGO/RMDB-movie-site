import React from 'react';

//config

import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

//Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';


//Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

//image
import NoImage from '../images/no_image.jpg';

const Home = () => {

    const { state, loading, error,searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();
    console.log(state);
 
    if (error) return <div>Something went Wrong.....</div>
    
return(
    <div>
        {!searchTerm && state.results[1] ? (
        <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[1].backdrop_path}`}
            title={state.results[1].original_title}
            text={state.results[1].overview}
        />
         ) : null}
         <SearchBar setSearchTerm= {setSearchTerm} />
         <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
            {state.results.map(movie => (
                <Thumb 
                    key= {movie.id}
                    clickable
                    image={
                        movie.poster_path ?  IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage
                    }
                    movieId={movie.id}  
                />
                // <div key={movie.id}>{movie.title}</div>
            ))}
         </Grid>
         {loading && <Spinner />}
         { state.page < state.total_pages && !loading && (
             <Button text='Load More...' callback={() => setIsLoadingMore(true)} />
         )}
    </div>
)
}

export default Home;