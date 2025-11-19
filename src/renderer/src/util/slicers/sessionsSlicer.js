import { createSlice } from '@reduxjs/toolkit'

const sessionsSlicer = createSlice({
  name: 'sessions',
  initialState: {
    data: {},
    sessionHours: [
      {
        key: 0,
        time: 'Pre. HD',
        bloodPressure: '',
        rbs: '',
        ivf: '',
        drugs: '',
        cramps: '',
        vomitting: '',
        hematoma: '',
        chestPain: '',
        pulseRate: '',
        temperature: ''
      },
      {
        key: 1,
        time: `1st HR`,
        bloodPressure: '',
        rbs: '',
        ivf: '',
        drugs: '',
        cramps: '',
        vomitting: '',
        hematoma: '',
        chestPain: '',
        pulseRate: '',
        temperature: ''
      }
    ]
  },
  reducers: {
    handleData(state, action) {
      state.data = action.payload
    },
    handleChangeHoursData(state, action) {
      const newData = action.payload

      function editMatchingProperties(obj1, obj2) {
        Object.keys(obj1).forEach((key) => {
          if (key in obj2) {
            // If the property exists in obj2
            obj2[key] = obj1[key] // Update obj2's property with obj1's value
          }
        })
        return obj2
      }
      state.sessionHours[newData.key] = editMatchingProperties(
        newData,
        state.sessionHours[newData.key]
      )
    },
    handleAddAnHour(state) {
      let orderCat
      if (state.sessionHours.length === 2) {
        orderCat = 'nd'
      } else if (state.sessionHours.length === 3) {
        orderCat = 'rd'
      } else {
        orderCat = 'th'
      }

      if (state.sessionHours.length < 1) {
        state.sessionHours.push({
          key: 0,
          time: 'Pre. HD',
          bloodPressure: '',
          rbs: '',
          ivf: '',
          drugs: '',
          cramps: '',
          vomitting: '',
          hematoma: '',
          chestPain: '',
          pulseRate: '',
          temperature: ''
        })
      }

      state.sessionHours.push({
        key: state.sessionHours.length,
        time: `${state.sessionHours.length}${orderCat} HR`,
        bloodPressure: '',
        rbs: '',
        ivf: '',
        drugs: '',
        cramps: '',
        vomitting: '',
        hematoma: '',
        chestPain: '',
        pulseRate: '',
        temperature: ''
      })
    },
    handleClearData(state) {
      state.data = {}
      state.sessionHours = [
        {
          key: 0,
          time: 'Pre. HD',
          bloodPressure: '',
          rbs: '',
          ivf: '',
          drugs: '',
          cramps: '',
          vomitting: '',
          hematoma: '',
          chestPain: '',
          pulseRate: '',
          temperature: ''
        },
        {
          key: 1,
          time: `1st HR`,
          bloodPressure: '',
          rbs: '',
          ivf: '',
          drugs: '',
          cramps: '',
          vomitting: '',
          hematoma: '',
          chestPain: '',
          pulseRate: '',
          temperature: ''
        }
      ]
    },
    handleDeleteHour(state) {
      if (state.sessionHours.length > 2) {
        state.sessionHours.pop()
      } else {
        return
      }
    },
    prepareDataToEdit(state, action) {
      const { data, sessionHours } = action.payload
      state.data = data
      state.sessionHours = sessionHours
      console.log(sessionHours)
    }
  }
})

export default sessionsSlicer
export const sessionsActions = sessionsSlicer.actions
