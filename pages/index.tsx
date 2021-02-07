import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CurrencyData } from '~/types'
import { errorMsg } from '~/constants'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { GetQuote } from '~/components/organisms/GetQuote'
import { ShowQuote } from '~/components/organisms/ShowQuote'
import useFetchOFX from '~/hooks/ofx/useFetchOFX'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

export default function App() {
  const classes = useStyles()
  const [currencyData, setCurrencyData] = useState<CurrencyData>(null)

  const onSubmit = ({ fromCurrencyCode, toCurrencyCode, amount }: CurrencyData) => {
    const payload = {
      fromCurrencyCode,
      toCurrencyCode,
      amount,
    }
    setCurrencyData(payload)
    return null
  }

  let showResults = false
  let message = null

  const { spotRate, error } = useFetchOFX(currencyData)
  if (error) {
    message = errorMsg.request
  } else if (spotRate) {
    showResults = true
  }

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h3">
              <Box paddingTop={30} textAlign="center">
                <div style={{ paddingTop: '24px' }}>OFX Currency Converter</div>
              </Box>
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography gutterBottom variant="caption">
              <Box color="red">
                <div style={{ color: 'red' }}>{message}</div>
              </Box>
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <GetQuote onSubmit={onSubmit} />
          </Grid>
          <Grid item xs={6}>
            <Box padding={3}>
              <div style={{ paddingTop: '20px', paddingLeft: '20px' }}>
                {showResults && (
                  <ShowQuote
                    customerRate={spotRate?.CustomerRate}
                    fromCurrencyCode={currencyData.fromCurrencyCode}
                    fromAmount={currencyData.amount}
                    toCurrencyCode={currencyData.toCurrencyCode}
                    toAmount={spotRate?.CustomerAmount}
                    fee={spotRate?.Fee}
                    feeFreeThreshold={spotRate?.FeeFreeThreshold}
                    message={spotRate?.Message}
                  />
                )}
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
//export default CurrencyQuote
