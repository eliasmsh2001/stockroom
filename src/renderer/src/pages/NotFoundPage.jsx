import React from 'react'
import { Link } from 'react-router'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <h1 className="text-2xl text-alert font-extrabold text-center">
        لم يتم العثور على صفحة لهذا الرابط
      </h1>
      <Link to="/" className=" text-mainBlue underline font-extrabold text-center">
        أنقر هنا للعودة الى الشاشة الرئيسية
      </Link>
    </div>
  )
}

export default NotFoundPage
