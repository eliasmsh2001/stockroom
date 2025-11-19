export const otherInfoFields = [
  {
    key: 10,
    name: 'sicknessCause',
    placeholder: 'اكتب...',
    label: 'اسباب الفشل',
    type: 'text',
    required: false,
    inputClassname: `p-2 w-96 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
  },
  {
    key: 11,
    name: 'firstEverTreatment',
    placeholder: 'اكتب...',
    label: 'تاريخ أول غسيل',
    type: 'date',
    required: true,
    inputClassname: `p-2 w-44 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
  },
  {
    key: 12,
    name: 'firstTreatmentHere',
    placeholder: 'اكتب...',
    label: 'تاريخ أول غسيل داخل المجمع',
    type: 'date',
    required: true,
    inputClassname: `p-2 w-44 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
  },
  {
    key: 13,
    name: 'filterNum',
    placeholder: 'اكتب...',
    label: 'رقم الفلتر',
    type: 'text',
    required: false,
    inputClassname: `p-2 w-44 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
  },
  {
    key: 14,
    name: 'note',
    placeholder: 'اكتب...',
    label: 'ملاحظة',
    type: 'text',
    required: false,
    inputClassname: `p-2 w-96 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
  }
]
