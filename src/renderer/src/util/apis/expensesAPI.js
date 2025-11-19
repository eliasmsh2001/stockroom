import url from './httpUrl'

export const getAllWithdrawals = async ({ userId, searchTerm, year, month, day }) => {
  const response = await fetch(
    `${url}/expenses/allWithdrawals?userId=${userId}&searchTerm=${searchTerm}&year=${year}&month=${month}&day=${day}`
  )

  // if (!response.ok) {
  // }

  const data = await response.json()
  return data
}

export const deleteWithdrawal = async (id) => {
  const response = await fetch(`${url}/expenses/deleteWithdrawal?id=${id}`, {
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
