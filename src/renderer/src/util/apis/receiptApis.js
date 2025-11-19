import url from './httpUrl'

export const getAllReceipts = async ({ searchTerm, year, month, day }) => {
  const response = await fetch(
    `${url}/receipts/allReceipts?searchTerm=${searchTerm}&year=${year}&month=${month}&day=${day}`
  )

  if (!response.ok) {
  }

  const data = await response.json()
  return data
}

export const deleteReceipt = async (id) => {
  const response = await fetch(`${url}/receipts/deleteReceipt?id=${id}`, {
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

export const editReceipt = async ({
  receiptId,
  receiptItems,
  selectedProvidorValue,
  receiptDate
}) => {
  const response = await fetch(`${url}/receipts/editReceipt`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ receiptId, receiptItems, selectedProvidorValue, receiptDate })
  })

  if (!response.ok) {
    // throw Error('Failed to post a new patient!!')
    if (!response.ok) {
      // throw Error('Failed to post a new patient!!')
      if (response.status === 400) {
        throw Error("Please set the providor's name for this receipt")
      } else if (response.status === 401) {
        throw Error('Please set a date for this receipt')
      } else if (response.status === 402) {
        throw Error('The receipt should contain atleast one item to be submitted!')
      } else if (response.status === 403) {
        throw Error('make sure you entered all items values!')
      } else {
        throw Error('This could be an internal issue, contact support or try to restart the app')
      }
    }
  }

  const newData = await response.json()
  return newData
}
