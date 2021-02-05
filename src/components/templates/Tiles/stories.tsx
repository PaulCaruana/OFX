import React from 'react'
import { Tiles, TilesProps } from '.'
import { MovieCard } from '~/components/molecules/Card'
import { Story, Meta } from '@storybook/react/types-6-0'
import movies from './__mocks__/tilesData.json'

export default {
  title: 'Template/Tiles',
  component: Tiles,
} as Meta

const Template: Story<TilesProps> = args => <Tiles {...args}></Tiles>
export const MovieTiles = Template.bind({})
MovieTiles.args = {
  tilesData: movies,
  Tile: MovieCard,
}
