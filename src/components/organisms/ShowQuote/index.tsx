import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import NumberFormat from 'react-number-format'
import { currency } from '~/constants'

export type ShowQuoteProps = {
  customerRate: number
  fromCurrencyCode: string
  fromAmount: number
  toCurrencyCode: string
  toAmount: number
  fee: number
  feeFreeThreshold: number
  message: string
}

export const ShowQuote: React.FC<ShowQuoteProps> = ({
  customerRate,
  fromCurrencyCode,
  fromAmount,
  toCurrencyCode,
  toAmount,
  fee,
  feeFreeThreshold,
  message,
}) => {
  const showFee = fee > 0
  return (
    <>
      <Box display="inline-block">
        <Typography gutterBottom variant="caption">
          OFX Customer Rate
        </Typography>
        <Box color="success.main" textAlign={'left'}>
          <Typography variant="h5" gutterBottom>
            {customerRate}
          </Typography>
        </Box>
        <Typography gutterBottom variant="caption">
          From
        </Typography>
        <Typography gutterBottom variant="body1">
          {fromCurrencyCode}:&nbsp;
          <Box display="inline" color="info.main">
            <NumberFormat
              value={fromAmount}
              decimalScale={2}
              fixedDecimalScale={true}
              displayType={'text'}
              thousandSeparator={true}
              prefix={currency[fromCurrencyCode].symbol}
            />
          </Box>
        </Typography>
        <Typography gutterBottom variant="caption">
          To
        </Typography>
        <Typography gutterBottom variant="body1">
          {toCurrencyCode}:&nbsp;
          <Box display="inline" color="info.main">
            <NumberFormat
              value={toAmount}
              decimalScale={2}
              fixedDecimalScale={true}
              displayType={'text'}
              thousandSeparator={true}
              prefix={currency[toCurrencyCode].symbol}
            />

            {showFee && (
              <span>
                <Box color="text.secondary">
                  <Typography gutterBottom variant="caption">
                    Note: there is a fee of&nbsp;
                    <NumberFormat
                      value={fee}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={currency[fromCurrencyCode].symbol}
                    />
                    &nbsp;for amounts of less than&nbsp;
                    <NumberFormat
                      value={feeFreeThreshold}
                      decimalScale={0}
                      fixedDecimalScale={true}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={currency[fromCurrencyCode].symbol}
                    />
                  </Typography>
                </Box>
              </span>
            )}
            <div style={{ paddingTop: '20px' }}>
              <Box color="black">
                <Typography gutterBottom variant="caption">
                  FYI: {message}
                </Typography>
              </Box>
            </div>
          </Box>
        </Typography>
      </Box>
    </>
  )
}
