import url from './httpUrl'

export const getWithdrawalCart = async ({ userId, searchTerm, state }) => {
  const response = await fetch(
    `${url}/expensesCart/getCart?id=${userId}&searchTerm=${searchTerm}&state=${state}`
  )
  if (!response.ok) {
  }

  const data = await response.json()
  return data
}

export const updateWithdrawalCart = async (data) => {
  const response = await fetch(`${url}/expensesCart/updateCart`, {
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

export const deleteWithdrawalCartItem = async (id) => {
  const response = await fetch(`${url}/expensesCart/deleteCartItem?id=${id}`, {
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

export const newWithdrawal = async (data) => {
  const response = await fetch(`${url}/expensesCart/newWithdrawal`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data })
  })

  // if (!response.ok) {
  //   // throw Error('Failed to post a new patient!!')
  //   if (response.status === 400) {
  //     throw Error("Please set the department's name for this receipt")
  //   } else if (response.status === 401) {
  //     throw Error('Please set a date for this receipt')
  //   } else if (response.status === 402) {
  //     throw Error('The receipt should contain atleast one item to be submitted!')
  //   } else if (response.status === 403) {
  //     throw Error(
  //       'Please Enter valid quantities (one of the items you want to withdraw has passed max quantity)'
  //     )
  //   } else {
  //     throw Error('This could be an internal issue, contact support or try to restart the app')
  //   }
  // }

  const newData = await response.json()
  if (!response.ok) {
    // Throw error with the server's error message
    throw new Error(newData.error || 'Failed to create withdrawal')
  }
  return newData
}

export const clearWithdrawalCart = async ({ id }) => {
  const response = await fetch(`${url}/expensesCart/clearWithdrawalCart?id=${id}`, {
    method: 'PUT',
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

export const settingCartToEdit = async (data) => {
  const response = await fetch(`${url}/expensesCart/settingCart`, {
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

export const editWithdrawal = async (data) => {
  const response = await fetch(`${url}/expensesCart/editWithdrawal`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data })
  })

  if (!response.ok) {
    // throw Error('Failed to post a new patient!!')
    if (response.status === 400) {
      throw Error("Please set the department's name for this receipt")
    } else if (response.status === 401) {
      throw Error('Please set a date for this receipt')
    } else if (response.status === 402) {
      throw Error('The receipt should contain atleast one item to be submitted!')
    } else if (response.status === 403) {
      throw Error(
        'Please Enter valid quantities (one of the items you want to withdraw has passed max quantity)'
      )
    } else {
      throw Error('This could be an internal issue, contact support or try to restart the app')
    }
  }

  const newData = await response.json()
  return newData
}
