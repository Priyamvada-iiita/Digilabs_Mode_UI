"use client"
import React from 'react'
import AdminForm from '../components/AdminPanel/AdminForm'
import { LogoProvider } from '../context/LogoContext'
import { TextProvider } from '../context/TextContext'
const SubmissionForm = () => {
  return (
    <div><LogoProvider><TextProvider><AdminForm/></TextProvider></LogoProvider></div>
  )
}

export default SubmissionForm