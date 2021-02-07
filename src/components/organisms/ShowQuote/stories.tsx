import React from 'react'
import { ShowQuote, ShowQuoteProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Organisms/ShowQuote',
  component: ShowQuote,
} as Meta

const Template: Story<ShowQuoteProps> = args => <ShowQuote {...args} />
export const ShowQuoteSample = Template.bind({})
ShowQuoteSample.args = {
  customerRate: 0.7552,
  fromCurrencyCode: 'AUD',
  fromAmount: 10000,
  toCurrencyCode: 'GBP',
  toAmount: 7620.35,
  fee: 15,
  feeFreeThreshold: 10000,
  message: 'Sorry, min. transfer amount is AUD 250',
}
