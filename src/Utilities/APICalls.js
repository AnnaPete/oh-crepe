export const getMovies = () => {
    return (
        fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error('something went wrong')
            }
        })
        .then(data => {
            return data.movies
        })
    )
}

export const getSingleMovie = (movieID) => {
    return (
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error('something went wrong')
            }
        })
        .then(data => {
            return data.movie
        })
    )
}