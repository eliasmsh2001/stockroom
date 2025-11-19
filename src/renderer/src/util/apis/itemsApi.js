import url from './httpUrl'

export const getItems = async (userId, searchTerm, categorySelection) => {
  const response = await fetch(
    `${url}/items/allItems?id=${userId}&searchTerm=${searchTerm}&category=${categorySelection}`
  )

  if (!response.ok) {
  }

  const data = await response.json()
  return data
}

export const editItem = async ({
  userId,
  itemParentId,
  itemParentName,
  itemParentUnit,
  itemCategory,
  subItems
}) => {
  const response = await fetch(`${url}/items/editItem`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      itemParentId,
      itemParentName,
      itemParentUnit,
      itemCategory,
      subItems
    })
  })

  // throw Error('Failed to post a new patient!!')
  if (!response.ok) {
    throw Error('This could be an internal issue, contact support or try to restart the app')
  }

  const newData = await response.json()
  return newData
}

export const deleteItem = async (id) => {
  const response = await fetch(`${url}/items/deleteItem?id=${id}`, {
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

export const addNewItemToStock = async ({ data, userId }) => {
  const response = await fetch(`${url}/items/addItem`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data, userId })
  })

  // throw Error('Failed to post a new patient!!')
  if (!response.ok) {
    throw Error('This could be an internal issue, contact support or try to restart the app')
  }

  const newData = await response.json()
  return newData
}

export const getItemsHighlights = async (userId) => {
  const response = await fetch(`${url}/items/itemsHighlights?id=${userId}`)

  if (!response.ok) {
  }

  const data = await response.json()
  return data
}
