import React from 'react'
import { useRouter } from 'next/router'
import Typography from '@material-ui/core/Typography'
import { Button } from '~/components/atoms/Button'
import BackIcon from '@material-ui/icons/ArrowBack'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import useFetchMovie from '~/hooks/movies/useFetchMovie'
import { MovieCard } from '~/components/molecules/Card'

const useStyles = makeStyles({
  root: {
    width: '100%',
    align: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  },
  spacing: {
    marginTop: '30px',
  },
  back: {
    position: 'absolute',
    top: '10px',
    left: '10px',
  },
})

const Movie: React.FC = () => {
  const router = useRouter()
  const id = router.query.id as string
  const movie = useFetchMovie(id)
  const classes = useStyles()
  if (!movie) {
    return null
  }

  const handleGoBack = () => {
    router.back()
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Button
        label={'Back'}
        variant="contained"
        onClick={handleGoBack}
        startIcon={<BackIcon />}
        color="primary"
        className={classes.back}
      />
      <div>
        <Typography variant="h2" component="h2" gutterBottom>
          Prince&apos;s Theatre
        </Typography>
      </div>
      <MovieCard
        variant={'detail'}
        title={movie.Title}
        image={movie.Poster}
        providers={movie.providers}
        releasedBy={movie.Production}
        director={movie.Director}
        rated={movie.Rated}
      />
    </Grid>
  )
}
export default Movie
