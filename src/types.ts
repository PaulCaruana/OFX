export type SpotRate = {
  CustomerRate: number
  CustomerRateInverse: number
  CustomerAmount: number
  InterbankAmount: number
  DefaultFee: number
  Fee: number
  FeeFreeThreshold: number
  InterbankRate: number
  InverseInterbankRate: number
  DeliveryCountry: string
  DeliveryTime: number
  ComparisonRate: number
  ComparisonAmount: number
  Message: string
}

export type CurrencyData = {
  fromCurrencyCode: string
  toCurrencyCode: string
  amount: number
}
