import url from './httpUrl'

export const getReceiptCart = async () => {
  const response = await fetch(`${url}/receiptCart/getCart`)

  if (!response.ok) {
  }

  const data = await response.json()
  return data
}

export const newReceipt = async (data) => {
  const response = await fetch(`${url}/receiptCart/newReceipt`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data })
  })

  if (!response.ok) {
    // throw Error('Failed to post a new patient!!')
    if (response.status === 400) {
      throw Error("Please set the providor's name for this receipt")
    } else if (response.status === 401) {
      throw Error('Please set a date for this receipt')
    } else if (response.status === 402) {
      throw Error('The receipt should contain atleast one item to be submitted!')
    } else {
      throw Error('This could be an internal issue, contact support or try to restart the app')
    }
  }

  const newData = await response.json()
  return newData
}

export const updateCart = async (data) => {
  const response = await fetch(`${url}/receiptCart/updateCart`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    // throw Error('Failed to post a new patient!!')
    if (response.status === 403) {
      throw Error('!!تأكد من إدخال البيانات الأساسية')
    }
  }

  const newData = await response.json()
  return newData
}

export const deleteCartItem = async (id) => {
  const response = await fetch(`${url}/receiptCart/deleteCartItem?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    // throw Error('Failed to post a new patient!!')
    if (response.status === 403) {
      throw Error('Something went wrong!!')
    }
  }

  const newData = await response.json()
  return newData
}

export const clearCartData = async (id) => {
  const response = await fetch(`${url}/receiptCart/clearReceiptCart?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    // throw Error('Failed to post a new patient!!')
    if (response.status === 403) {
      throw Error('Something went wrong!!')
    }
  }

  const newData = await response.json()
  return newData
}
