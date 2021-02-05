import React from 'react'
import { Button, ButtonProps } from '.'
import { Story, Meta } from '@storybook/react/types-6-0'
import BackIcon from '@material-ui/icons/ArrowBack'
import SaveIcon from '@material-ui/icons/Save'

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta

const handleClicked = () => {
  console.log('clicked')
}

const Template: Story<ButtonProps> = args => <Button {...args} />
export const BackButton = Template.bind({})
BackButton.args = {
  label: 'Back',
  startIcon: <BackIcon />,
  onClick: handleClicked,
}
export const SaveButton = Template.bind({})
SaveButton.args = {
  label: 'Save',
  variant: 'outlined',
  color: 'secondary',
  endIcon: <SaveIcon />,
  onClick: handleClicked,
}
