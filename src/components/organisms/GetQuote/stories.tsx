import React from 'react'
import { GetQuote, GetQuoteProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Organisms/GetQuote',
  component: GetQuote,
} as Meta

const Template: Story<GetQuoteProps> = args => <GetQuote {...args} />
export const GetQuoteSample = Template.bind({})
GetQuoteSample.args = {
  onSubmit: data => {
    console.log(data)
  },
}
