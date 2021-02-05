import { useState, useEffect } from 'react'

// 1) Generics... type parameters
// 2) "extends" to restrict
// 3) Default generic types
// 4) typeof to infer type from variable

export default function useLocalState<S>(key: string, initial: S) {
  const [value, setValue] = useState<S>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem(key)
      if (saved) {
        return JSON.parse(saved)
      }
    }
    return initial
  })

  useEffect(() => {
    if (window.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }, [value])

  return [value, setValue] as [typeof value, typeof setValue]
}
