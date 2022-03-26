import { API } from '../../API';

export const savePaymentData = async (object) => {
  const response = await fetch(`${API}/payments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(object)
  })
  const data = await response.json()
  return data
};  