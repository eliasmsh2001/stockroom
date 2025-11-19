const inputStyle = `border-2 outline-0 border-stone-400 rounded-md p-1 focus:border-mainBlue text-mainText font-bold text-sm`

const inputFeilds = [
  {
    key: 1,
    label: 'Date',
    name: 'date',
    style: `${inputStyle} w-36`,
    placeholder: '...اكتب',
    type: 'date'
  },
  {
    key: 2,
    label: "Technician's name",
    name: 'techName',
    style: `${inputStyle} w-44`,
    placeholder: '...اكتب',
    type: 'text'
  },
  {
    key: 3,
    label: 'Device NO.',
    name: 'deviceNo',
    style: `${inputStyle} w-32`,
    placeholder: '...اكتب',
    type: 'text'
  },
  {
    key: 4,
    label: 'Session Type',
    name: 'sessionType',
    style: `${inputStyle} w-44`,
    placeholder: '...اكتب',
    type: 'text'
  },
  //   {
  //     key: 5,
  //     label: 'Session Duration (hrs)',
  //     name: 'sessionDuration',
  //     style: `${inputStyle} w-36`,
  //     placeholder: '...اكتب',
  //     type: 'number'
  //   },
  {
    key: 6,
    label: 'Starting Time',
    name: 'startingTime',
    style: `${inputStyle} w-24`,
    placeholder: '...اكتب',
    type: 'time'
  },
  {
    key: 7,
    label: 'Anticoagulant Used',
    name: 'anticoagulantUsed',
    style: `${inputStyle} w-36`,
    placeholder: '...اكتب',
    type: 'text'
  },
  {
    key: 8,
    label: 'KT/V',
    name: 'ktv',
    style: `${inputStyle} w-24`,
    placeholder: '...اكتب',
    type: 'text'
  },
  {
    key: 9,
    label: 'URR',
    name: 'urr',
    style: `${inputStyle} w-24`,
    placeholder: '...اكتب',
    type: 'text'
  },
  {
    key: 10,
    label: 'Ultrafiltration Rate',
    name: 'ultrafiltrationRate',
    style: `${inputStyle} w-36`,
    placeholder: '...اكتب',
    type: 'text'
  },
  {
    key: 11,
    label: 'WT. Pre HD',
    name: 'wtPreHD',
    style: `${inputStyle} w-24`,
    placeholder: '...اكتب',
    type: 'text'
  },
  {
    key: 12,
    label: 'WT. Post HD',
    name: 'wtPostHD',
    style: `${inputStyle} w-24`,
    placeholder: '...اكتب',
    type: 'text'
  },
  {
    key: 13,
    label: 'HD. Starting',
    name: 'HDStarting',
    style: `${inputStyle} w-24`,
    placeholder: '...اكتب',
    type: 'text'
  },
  {
    key: 14,
    label: 'Heparin Rate',
    name: 'heparinRate',
    style: `${inputStyle} w-24`,
    placeholder: '...اكتب',
    type: 'text'
  },
  {
    key: 15,
    label: 'Heparin Bolus',
    name: 'heparinBolus',
    style: `${inputStyle} w-24`,
    placeholder: '...اكتب',
    type: 'text'
  },
  {
    key: 16,
    label: 'UF. Goal',
    name: 'UFGoal',
    style: `${inputStyle} w-24`,
    placeholder: '...اكتب',
    type: 'text'
  }
]

export default inputFeilds
