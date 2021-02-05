import React from 'react'
import NumberFormat from 'react-number-format'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

type Provider = {
  id: string
  name: string
  price: number
  lowest: boolean
}

export interface MovieCardProps {
  variant?: string
  title?: string
  image?: string
  link?: string
  providers?: Provider[]
  synopsis?: string
  genre?: string
  actors?: string
  releasedBy?: string
  director?: string
  rated?: string
}
export const MovieCard: React.FC<MovieCardProps> = ({
  variant = 'summary',
  title = '',
  image = null,
  providers,
  link,
  releasedBy,
  director,
  rated,
}) => {
  const isSummary = variant === 'summary'
  const isDetail = variant === 'detail'
  const cardWidth = isSummary ? 220 : 330
  const imageHeight = isSummary ? 330 : 440
  const useStyles = makeStyles({
    root: {
      maxWidth: cardWidth,
    },
    cardContent: {
      minHeight: 52,
    },
    details: {
      marginTop: 10,
    },
  })
  const classes = useStyles()
  const handleCardClick = () => {
    if (link) {
      location.href = link
    }
  }
  return (
    <Card onClick={handleCardClick} className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" alt={title} height={imageHeight} image={image} title={title} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom>{title}</Typography>
          {isDetail && (
            <>
              {providers
                .filter(provider => provider.price != null)
                .map(provider => (
                  <Grid key={provider.name} item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          <Box fontWeight="fontWeightBold">{provider.name}</Box>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">
                        <Box fontWeight={provider.lowest ? 'fontWeightBold' : 'fontWeightRegular'}>
                          <NumberFormat
                            value={provider.price}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                          />
                        </Box>
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              <Divider />
              <Grid item xs={12} sm container className={classes.details}>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item>
                    <Typography gutterBottom variant="subtitle1">
                      Rated
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">{rated}</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm container className={classes.details}>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item>
                    <Typography gutterBottom variant="subtitle1">
                      Director
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">{director}</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm container className={classes.details}>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item>
                    <Typography gutterBottom variant="subtitle1">
                      Released by
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">{releasedBy}</Typography>
                </Grid>
              </Grid>
            </>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
