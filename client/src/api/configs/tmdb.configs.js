const mediaType = {
    movie: 'movie',
    tv: 'tv'
}

const mediaCaterogy = {
    popular: 'popular',
    top_rated: 'top_rated'
}

const backdropPath = (imgEndpoint) => `https://iamge.tmdb.org/t/p/original${imgEndpoint}`

const posterPath = (imgEndpoint) => `https://iamge.tmdb.org/t/p/w500${imgEndpoint}`

const youtubePath = (videoId) => `http://ww.youtube.com/embed/${videoId}?controls=0`;

const tmdbConfigs = {
    mediaType,
    mediaCaterogy,
    backdropPath,
    posterPath,
    youtubePath
}

export default tmdbConfigs;