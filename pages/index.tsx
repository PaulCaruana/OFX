import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import useFetchMovies from '~/hooks/movies/useFetchMovies'
import { Tiles } from '~/components/templates/Tiles'
import { MovieCard } from '~/components/molecules/Card'

const useStyles = makeStyles({
  root: {
    width: '100%',
    align: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  spacing: {
    marginTop: '10px',
  },
})

const Index: React.FC = () => {
  const data = useFetchMovies()
  const movies = data
    ? data.Movies.map(movie => {
        return {
          id: movie.ID,
          title: movie.Title,
          image: movie.Poster,
          link: `/movie/${movie.ID}`,
        }
      })
    : null
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <div>
          <Typography variant="h2" component="h2" gutterBottom>
            Prince&apos;s Theatre
          </Typography>
        </div>
        <div>
          <Typography variant="h5" gutterBottom>
            <b>Enjoy movies in the comfort of your home for the best price</b>
          </Typography>
        </div>
        <Typography variant="body1" gutterBottom className={classes.spacing}>
          <i>
            Dust off the &apos;Covid&apos; blues, cosy up and enjoy our classic range of movies on
            offer.
          </i>
        </Typography>
        {movies && <Tiles tilesData={movies} Tile={MovieCard} />}
      </Grid>
    </div>
  )
}
export default Index
