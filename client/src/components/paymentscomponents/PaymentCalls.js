import { API } from '../../API'

export const savePaymentData = async (object) => {
    console.log('Within front-end payment call', object)
    console.log(object instanceof String)
    const response = await fetch(`${API}/payments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(object)
      })
      const data = await response.json()
      console.log(data)
      return data
  };  