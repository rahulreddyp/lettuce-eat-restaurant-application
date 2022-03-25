import { API } from '../../API'

export const savePaymentData = async (object) => {
    console.log(object)
    const response = await fetch(`${API}/payments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: object
      })
      const data = await response.json()
      console.log(data)
      return data
  };  