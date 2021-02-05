import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { TileProps } from './types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      margin: '10px',
      marginBottom: '15px',
    },
  }),
)

export interface TilesProps {
  tilesData: TileProps[]
  Tile: React.FC<TileProps>
}

export const Tiles: React.FC<TilesProps> = ({ tilesData, Tile }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {tilesData.map(tile => (
        <div key={JSON.stringify(tile)} className={classes.gridList}>
          <Tile
            title={tile.title}
            id={tile?.id}
            image={tile?.image}
            link={tile?.link}
            description={tile?.description}
          />
        </div>
      ))}
    </div>
  )
}
