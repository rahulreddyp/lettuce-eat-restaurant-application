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

export const saveCardDetails = async (object) => {
  const response = await fetch(`${API}/addCard`, {
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

export const retrieveUserCards = async (userId) => {
  try {
    const res = await fetch(`${API}/cards/${userId}`, {
      method: "GET",
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
}; 