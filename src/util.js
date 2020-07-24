import { useState } from 'react'

export const useMyHook = () => {
  const [values, setValues] = useState({})
  function handleChange(e) {
    // e.persist();
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  return {values, handleChange};
}
