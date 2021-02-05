import React from 'react'
import { MovieCard, MovieCardProps } from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Molecules/MovieCards',
  component: MovieCard,
} as Meta

const Template: Story<MovieCardProps> = args => <MovieCard {...args} />
export const MovieSummaryCard = Template.bind({})
MovieSummaryCard.args = {
  id: '1234',
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  image:
    'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg',
}
export const MovieDetailCard = Template.bind({})
MovieDetailCard.args = {
  variant: 'detail',
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  image:
    'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg',
  synopsis:
    'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.',
  actors: 'Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley',
  releasedBy: 'Walt Disney Pictures',
  director: 'Rian Johnson',
  rated: 'PG-13',
  providers: [
    {
      id: 'cinemaWorld',
      name: 'Cinema World',
      lowest: true,
      price: 24,
    },
    {
      id: 'filmWorld',
      name: 'Film World',
      lowest: false,
      price: 24.5,
    },
  ],
}
