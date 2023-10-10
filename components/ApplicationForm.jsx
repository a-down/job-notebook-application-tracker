"use client"
import { useState, useEffect } from 'react'


export default function ApplicationForm() {
  const defaultFormData = {
    jobTitle: '',
    applicationLink: '',
    jobDescription: '',
    
  }
  const [ formData, setFormData ] = useState()

  const formFieldsArr = [
    {type: 'input', label: 'Job Title', placeholder: 'Graphic Designer'},
    {type: 'link', label: 'Link to Application', guideline: '(include https://)', placeholder: 'https://example.com'},
    {type: 'textarea', label: 'Job Description', placeholder: 'Paste job description here'},
    {type: 'input', label: 'Company Name', placeholder: 'Art Studio LLC'},
    {type: 'link', label: 'Company Website', guideline: '(include https://)', placeholder: 'https://example.com'},
    {type: 'link', label: 'Company LinkedIn', guideline: '(include https://)', placeholder: 'https://linkedin.com/example'},
    {type: 'input', label: 'Due Date', placeholder: 'January 1, 2024'},
    {type: 'contact', label: ''}
  ]

  return (
    <> 
      <form className="flex flex-col gap-4 w-[80vw] max-w-[600px] bg-white p-4 rounded-lg border drop-shadow-brand">
        <h3 className="text-lg text-display font-bold">Enter Job Info Below</h3>

        {formFieldsArr.map((field, index) => (
          <fieldset className="flex flex-col gap-2">
            <label className="text-body text-sm text-black">
              {`${field.label} `}

              {field.guideline && (
                <span className="text-gray-500">
                  {field.guideline}
                </span>
              )}
            
            </label>

            {field.type === 'input' && (
              <input type="text" placeholder={field.placeholder} className=" text-sm bg-white border border-gray-6 text-black p-2 rounded-md"/>
            )}

            {field.type === 'textarea' && (
              <textarea type="text" placeholder={field.placeholder} className=" text-sm bg-white border border-gray-6 text-black p-2 rounded-md">
                
              </textarea>
            )}

            {field.type === 'link' && (
              <input type="url" pattern="https://.*" required placeholder={field.placeholder} className=" bg-white border border-gray-6 text-sm text-black p-2 rounded-md"/>
            )}
            
          </fieldset>
        ))}

        <button type="submit" className=' text-white text-sm leading-tight bg-brand-primary w-full px-4 py-[12px] rounded-md border border-brand-primary hover:bg-gray-7 hover:border-gray-7 hover:text-white duration-300 active:border-black mb-1 font-bold max-w-[300px] mx-auto'>
          Create Application
        </button>
        
      </form>
    </>
  )
}