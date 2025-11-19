import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const ReceiptInfo = ({
  handleUpdateCart,
  providors,
  selectedProvidorValue,
  setSelectedProvidorValue
}) => {
  const handleProvidorChange = (event, newValue) => {
    setSelectedProvidorValue(newValue)
    handleUpdateCart({ case: 'providor', data: newValue })
  }
  return (
    <div className="flex gap-4">
      <div className="flex flex-col text-mainText font-bold text-sm relative">
        <label>Provider Name</label>
        {/* <input
          // name="providor"
          type="text"
          className="border-2 w-96 p-2 text-mainText font-semibold text-lg outline-0 border-stone-400 rounded-md focus:border-mainBlue"
          placeholder="type..."
          onChange={(e) => handleUpdateCart({ case: 'providor', data: e.target.value })}
        /> */}

        <Autocomplete
          disablePortal
          autoSelect={false}
          value={selectedProvidorValue}
          options={providors}
          onChange={handleProvidorChange}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={(e) => {
                setSelectedProvidorValue(e.target.value)
                handleUpdateCart({ case: 'providor', data: e.target.value })
              }}
            />
          )}
        />

        <div className="absolute"></div>
      </div>
      <div>
        <div className="flex flex-col text-mainText font-bold text-sm">
          <label>Receipt Date</label>
          <input
            // name="date"
            type="date"
            onChange={(e) => handleUpdateCart({ case: 'cartDate', data: e.target.value })}
            className="border-2 w-44 p-2 text-mainText font-semibold text-lg outline-0 border-stone-400 rounded-md focus:border-mainBlue"
          />
        </div>
      </div>
    </div>
  )
}

export default ReceiptInfo
