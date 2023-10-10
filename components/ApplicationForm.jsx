"use client"
import { useState, useEffect } from 'react'


export default function ApplicationForm({ userId, getApplications }) {
  const defaultFormData = {
    jobTitle: '',
    applicationLink: '',
    jobDescription: '',
    companyName: '',
    companyWebsite: '',
    companyLinkedIn: '',
    dueDate: ''
  }
  const [ formData, setFormData ] = useState(defaultFormData)

  function handleApplicationForm(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function createApplication(e) {
    e.preventDefault()
    await fetch('api/applications', {
      method: 'POST',
      body: JSON.stringify({
          user_id: userId,
          role: {
            role_name: formData.jobTitle,
            company: {
              company_name: formData.companyName,
              company_website: formData.companyWebsite,
              company_linkedin: formData.companyLinkedIn
            },
            application_link: formData.applicationLink,
            job_description: formData.jobDescription,
            due_date: formData.dueDate
          }
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    getApplications()
  }



  const formFieldsArr = [
    {type: 'input', label: 'Job Title', name: 'jobTitle', placeholder: 'Graphic Designer', value: formData.jobTitle},
    {type: 'link', label: 'Link to Application', name: 'applicationLink', guideline: '(include https://)', placeholder: 'https://example.com', value: formData.applicationLink},
    {type: 'textarea', label: 'Job Description', name: 'jobDescription', placeholder: 'Paste job description here', value: formData.jobDescription},
    {type: 'input', label: 'Company Name', name: 'companyName', placeholder: 'Art Studio LLC', value: formData.companyName},
    {type: 'link', label: 'Company Website', name: 'companyWebsite', guideline: '(include https://)', placeholder: 'https://example.com', value: formData.companyWebsite},
    {type: 'link', label: 'Company LinkedIn', name: 'companyLinkedIn', guideline: '(include https://)', placeholder: 'https://linkedin.com/example', value: formData.companyLinkedIn},
    {type: 'input', label: 'Due Date', name: 'dueDate', placeholder: 'January 1, 2024', value: formData.dueDate}
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
              <input className=" text-sm bg-white border border-gray-6 text-black p-2 rounded-md" 
                type="text" 
                name={field.name} 
                value={field.value} 
                placeholder={field.placeholder}
                onChange={handleApplicationForm} />
            )}

            {field.type === 'textarea' && (
              <textarea 
                className=" text-sm bg-white border border-gray-6 text-black p-2 rounded-md"
                type="text" 
                name={field.name} 
                value={field.value} 
                placeholder={field.placeholder} 
                onChange={handleApplicationForm} >
              </textarea>
            )}

            {field.type === 'link' && (
              <input 
                className=" bg-white border border-gray-6 text-sm text-black p-2 rounded-md"
                type="url" 
                pattern="https://.*" 
                required 
                name={field.name} 
                value={field.value} 
                placeholder={field.placeholder}
                onChange={handleApplicationForm} />
            )}
            
          </fieldset>
        ))}

        <button 
          className=' text-white text-sm leading-tight bg-brand-primary w-full px-4 py-[12px] rounded-md border border-brand-primary hover:bg-gray-7 hover:border-gray-7 hover:text-white duration-300 active:border-black mb-1 font-bold max-w-[300px] mx-auto'
          type='submit'
          onClick={createApplication}>
          Create Application
        </button>
        
      </form>
    </>
  )
}