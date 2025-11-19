import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

const NewReciptItemInfo = ({
  unitSelection,
  setUnitSelection,
  categorySelection,
  setCategorySelection,
  selectedGenericNameValue,
  setSelectedGenericNameValue,
  itemParents
}) => {
  const unitsNames = [
    'piece',
    'carton',
    'bag',
    'roll',
    'pack',
    'box',
    'ampoule',
    'bottle',
    'gallon',
    'litter',
    'tab'
  ]

  const handleGenericnameChange = (event, newValue) => {
    setSelectedGenericNameValue(newValue)
  }

  const categoryNames = ['قرطاسية', 'مستلزمات', 'مشغلات', 'أدوية']

  return (
    <>
      <div className="flex flex-col text-mainText font-bold text-sm">
        <label>Generic Name</label>
        {/* <input
          name="genericName"
          type="text"
          required
          className="border-2 w-96 p-2 text-mainText font-semibold text-lg outline-0 border-stone-400 rounded-md focus:border-mainBlue"
          placeholder="type..."
        /> */}
        <Autocomplete
          disablePortal
          autoSelect={false}
          value={selectedGenericNameValue}
          options={itemParents}
          onChange={handleGenericnameChange}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              required
              name="genericName"
              onChange={(e) => {
                setSelectedGenericNameValue(e.target.value)
              }}
              {...params}
            />
          )}
        />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col text-mainText font-bold text-sm">
          <label>Unit</label>
          <select
            className="w-44 border-2 border-stone-400 p-2 rounded-md"
            value={unitSelection}
            required
            name="unit"
            onChange={(e) => setUnitSelection(e.target.value)}
          >
            <option value="">Select a unit</option>

            {unitsNames.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col text-mainText font-bold text-sm">
          <label>Category</label>
          <select
            className="w-44 border-2 border-stone-400 p-2 rounded-md"
            required
            value={categorySelection}
            name="category"
            onChange={(e) => setCategorySelection(e.target.value)}
          >
            <option value="">Select a category</option>
            {categoryNames.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col text-mainText font-bold text-sm">
        <label>Unit Info</label>
        <input
          name="unitInfo"
          required
          type="text"
          className="border-2 w-96 p-2 text-mainText font-semibold text-lg outline-0 border-stone-400 rounded-md focus:border-mainBlue"
          placeholder="type..."
        />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col text-mainText font-bold text-sm">
          <label>Quantity</label>
          <input
            name="quantity"
            required
            type="number"
            className="border-2 w-24 p-2 text-mainText font-semibold text-lg outline-0 border-stone-400 rounded-md focus:border-mainBlue"
            placeholder="type..."
          />
        </div>
        <div className="flex flex-col text-mainText font-bold text-sm">
          <label>Expire Date</label>
          <input
            name="expireDate"
            type="date"
            className="border-2 w-44 p-2 text-mainText font-semibold text-lg outline-0 border-stone-400 rounded-md focus:border-mainBlue"
            placeholder="type..."
          />
        </div>
      </div>
    </>
  )
}

export default NewReciptItemInfo
