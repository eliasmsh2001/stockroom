import React, { useState } from 'react'
import { personalInfoFields } from './patientFormPersonalFields'
import { otherInfoFields } from './patientFormInfo'

const PatientFrom = ({ handleSubmit, error, schedule, setSchedule }) => {
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
              placeholder={field.placeholder}
              dir="rtl"
              required={field.required}
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
              placeholder={field.placeholder}
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
        {error && <h1 className="text-alert font-bold text-xl text-center">{error}</h1>}
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

export default PatientFrom
