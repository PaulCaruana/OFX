import { SpotRate } from '~/types'
import useFetch from '~/hooks/useFetch'
import { CurrencyData } from '~/types'

const fetchOptions = {
  shouldRetryOnError: true,
  errorRetryCount: 3,
  errorRetryInterval: 1000,
}
export default function useFetchOFX(currencyData: CurrencyData): any {
  const { fromCurrencyCode, toCurrencyCode, amount } = currencyData || {}
  const payload = currencyData
    ? {
        url: `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${fromCurrencyCode}/${toCurrencyCode}/${amount}`,
      }
    : null
  const { data: spotRate, error } = useFetch<SpotRate>(payload, fetchOptions)
  return { spotRate, error }
}
