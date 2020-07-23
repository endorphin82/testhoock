import { useState } from 'react'

export function useMyHook() {
  const [values, setValues] = useState({})
  function handleChange(e) {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  return [values, handleChange]
}
