import React from 'react'
import {
  createStyles,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Theme,
} from '@material-ui/core'
import { Controller, useForm } from 'react-hook-form'
import validator from 'validator'
import { CurrencyData } from '~/types'
import { currency, currencyList } from '~/constants'
import { Button } from '~/components/atoms/Button'

export interface GetQuoteProps {
  onSubmit: (data: CurrencyData) => { any }
}

type Inputs = {
  firstName: string
  lastName: string
  email: string
  phone: string
  fromCurrency: string
  toCurrency: string
  amount: number
}

export const GetQuote: React.FC<GetQuoteProps> = ({ onSubmit }) => {
  const { register, handleSubmit, watch, errors, control, getValues } = useForm<Inputs>()
  const watchFrom = watch('fromCurrencyCode', currency.AUD.code)
  const watchTo = watch('toCurrencyCode', currency.USD.code)

  const getCurrencyList = (type: string) => {
    const excludeCode = type === 'from' ? watchTo : watchFrom
    return currencyList.filter(curr => curr.code !== excludeCode)
  }

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formControl: {
        width: '100%',
      },
    }),
  )
  const classes = useStyles()

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="name"
            label="First name"
            required
            fullWidth
            autoFocus={true}
            name="firstName"
            margin="normal"
            error={!!errors.firstName}
            helperText={errors?.firstName?.message}
            inputRef={register({
              required: { value: true, message: 'First name is required' },
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="name"
            label="Last name"
            fullWidth
            autoFocus={true}
            name="lastName"
            margin="normal"
            error={!!errors.lastName}
            helperText={errors?.lastName?.message}
            inputRef={register({ required: { value: true, message: 'Last name is required' } })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            type="email"
            label="Email"
            fullWidth
            autoFocus={true}
            name="email"
            margin="normal"
            error={!!errors.email}
            helperText={errors?.email?.message}
            inputRef={register({
              validate: {
                isEmail: value =>
                  value === '' || validator.isEmail(value) || 'Not a valid email 📧',
              },
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            autoFocus={true}
            label="Telephone / Mobile"
            name="phone"
            inputRef={register()}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel>From Currency</InputLabel>
            <Controller
              as={
                <Select>
                  {getCurrencyList('from').map(currency => (
                    <MenuItem key={currency.code} value={currency.code}>
                      {currency.name}
                    </MenuItem>
                  ))}
                </Select>
              }
              control={control}
              name="fromCurrencyCode"
              defaultValue={'AUD'}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel>To Currency</InputLabel>
            <Controller
              as={
                <Select>
                  {getCurrencyList('to').map(currency => (
                    <MenuItem key={currency.code} value={currency.code}>
                      {currency.name}
                    </MenuItem>
                  ))}
                </Select>
              }
              control={control}
              name="toCurrencyCode"
              defaultValue={'USD'}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="amount"
            type="number"
            label="Amount"
            fullWidth
            autoFocus={true}
            name="amount"
            margin="normal"
            error={!!errors.amount}
            helperText={errors?.amount?.message}
            inputRef={register({
              required: { value: true, message: 'Amount is required' },
              validate: {
                minValue: value => value > 0 || 'Amount must be greater than zero',
              },
            })}
          />
        </Grid>
      </Grid>
      <div style={{ paddingTop: '20px' }}>
        <Button label="Get quote" color="secondary" type="submit" />
      </div>
    </form>
  )
}
