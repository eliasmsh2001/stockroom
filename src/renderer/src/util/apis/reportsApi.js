import url from './httpUrl'

export const getExpensesReport = async ({
  userId,
  startingDate,
  endingDate,
  category,
  itemName,
  selectedDepartment
}) => {
  const response = await fetch(
    `${url}/reports/expenses?userId=${userId}&startingDate=${startingDate}&endingDate=${endingDate}&category=${category}&itemName=${itemName}&selectedDepartment=${selectedDepartment}`
  )

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error('Please set an start point and an end point!')
    }
  }

  const data = await response.json()
  return data
}
