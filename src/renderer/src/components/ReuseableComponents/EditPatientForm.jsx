import React from 'react'

const EditPatientFrom = ({ handleSubmit, data, schedule, setSchedule }) => {
  const otherInfoFields = [
    {
      key: 10,
      name: 'sicknessCause',
      placeholder: 'اكتب...',
      label: 'اسباب الفشل',
      type: 'text',
      required: false,
      value: data?.sicknessCause,
      inputClassname: `p-2 w-96 text-lg text-mainText rounded-xl 
        border-2 border-stone-300 outline-0 focus:border-mainBlue`
    },
    {
      key: 11,
      name: 'firstEverTreatment',
      placeholder: 'اكتب...',
      label: 'تاريخ أول غسيل',
      type: 'date',
      required: false,
      value: data?.firstEverTreatment,
      inputClassname: `p-2 w-44 text-lg text-mainText rounded-xl 
        border-2 border-stone-300 outline-0 focus:border-mainBlue`
    },
    {
      key: 12,
      name: 'firstTreatmentHere',
      placeholder: 'اكتب...',
      label: 'تاريخ أول غسيل داخل المجمع',
      type: 'date',
      value: data?.firstTreatmentHere,
      required: false,
      inputClassname: `p-2 w-44 text-lg text-mainText rounded-xl 
        border-2 border-stone-300 outline-0 focus:border-mainBlue`
    },
    {
      key: 12,
      name: 'filterNum',
      placeholder: 'اكتب...',
      label: 'رقم الفلتر',
      type: 'text',
      value: data?.filterNo,
      required: false,
      inputClassname: `p-2 w-44 text-lg text-mainText rounded-xl 
        border-2 border-stone-300 outline-0 focus:border-mainBlue`
    },
    {
      key: 13,
      name: 'note',
      placeholder: 'اكتب...',
      label: 'ملاحظة',
      type: 'text',
      value: data?.note,
      required: false,
      inputClassname: `p-2 w-96 text-lg text-mainText rounded-xl 
        border-2 border-stone-300 outline-0 focus:border-mainBlue`
    }
  ]

  const personalInfoFields = [
    {
      key: 0,
      name: 'name',
      placeholder: 'اكتب...',
      label: 'اسم الحالة الثلاثي',
      type: 'text',
      required: true,
      value: data?.patientName,
      inputClassname: `p-2 w-72 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
    },
    {
      key: 9,
      name: 'residentialId',
      placeholder: 'اكتب...',
      label: 'الرقم الوطني',
      type: 'text',
      value: data?.residentialId,
      required: false,
      inputClassname: `p-2 w-72 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
    },
    {
      key: 1,
      name: 'age',
      placeholder: 'اكتب...',
      label: 'العمر',
      type: 'number',
      value: data?.age,
      required: false,
      inputClassname: `p-2 w-24 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
    },
    {
      key: 2,
      name: 'birthDate',
      placeholder: 'اكتب...',
      label: 'تاريخ الميلاد',
      type: 'date',
      value: data?.birthDate,
      required: false,
      inputClassname: `p-2 w-44 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
    },
    {
      key: 3,
      name: 'phoneNumber',
      placeholder: 'اكتب...',
      label: 'رقم الهاتف',
      type: 'text',
      required: false,
      value: data?.phoneNumber,
      inputClassname: `p-2 w-72 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
    },
    {
      key: 4,
      name: 'address',
      placeholder: 'اكتب...',
      label: 'السكن',
      type: 'text',
      required: false,
      value: data?.address,
      inputClassname: `p-2 w-72 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
    },
    {
      key: 5,
      name: 'bloodType',
      placeholder: 'اكتب...',
      label: 'فصيلة الدم',
      type: 'text',
      required: false,
      value: data?.bloodType,
      inputClassname: `p-2 w-20 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
    },
    {
      key: 6,
      name: 'hight',
      placeholder: 'اكتب...',
      label: 'الطول',
      type: 'number',
      required: false,
      value: data?.hight,
      inputClassname: `p-2 w-20 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
    },
    {
      key: 7,
      name: 'weight',
      placeholder: 'اكتب...',
      label: 'الوزن',
      type: 'number',
      required: false,
      value: data?.weight,
      inputClassname: `p-2 w-20 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
    },
    {
      key: 8,
      name: 'social',
      placeholder: 'اكتب...',
      label: 'الحالة الإجتماعية',
      type: 'text',
      required: false,
      value: data?.social,
      inputClassname: `p-2 w-36 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
    },
    {
      key: 28,
      name: 'gender',
      placeholder: 'اكتب...',
      label: 'الجنس',
      type: 'text',
      required: false,
      value: data?.gender,
      inputClassname: `p-2 w-28 text-lg text-mainText rounded-xl 
      border-2 border-stone-300 outline-0 focus:border-mainBlue`
    }
  ]

  return (
    <form className="w-full h-full flex flex-row-reverse px-10 gap-16" onSubmit={handleSubmit}>
      <div className="flex max-w-72 flex-wrap justify-end gap-4">
        {personalInfoFields.map((field) => (
          <div key={field.key} className="flex flex-col gap-1 items-end">
            <label htmlFor={field.name} className="text-sm font-bold text-mainText">
              {field.label}
            </label>
            <input
              className={field.inputClassname}
              type={field.type}
              name={field.name}
              id={field.name}
              placeholder={field.value}
              dir="rtl"
            />
          </div>
        ))}
      </div>
      <div className="w-1 bg-black/25" />
      <div className="flex flex-col  gap-4">
        {otherInfoFields.map((field) => (
          <div key={field.key} className="flex flex-col gap-1 items-end">
            <label htmlFor={field.name} className="text-sm font-bold text-mainText">
              {field.label}
            </label>
            <input
              className={field.inputClassname}
              type={field.type}
              name={field.name}
              id={field.name}
              placeholder={field.value}
              dir="rtl"
            />
          </div>
        ))}
        <div className="flex flex-col items-end">
          <h1 className="text-sm font-bold text-mainText">الجدول</h1>
          <select
            name=""
            onChange={(e) => setSchedule(e.target.value)}
            value={schedule}
            id=""
            className=" border-2 border-stone-300 outline-0 focus:border-mainBlue p-3 rounded-xl text-mainText font-bold"
          >
            <option value="sunTueThu">الأحد/الثلاثاء/الخميس</option>
            <option value="satMonWed">السبت/الإثنين/الإربعاء</option>
          </select>
        </div>
        <button
          className={`bg-mainBlue text-white text-xl font-bold py-2 
            rounded-full my-4 hover:opacity-45 duration-200`}
        >
          submit
        </button>
      </div>
    </form>
  )
}

export default EditPatientFrom
