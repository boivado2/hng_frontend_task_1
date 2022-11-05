import React from 'react'
import Input from './common/Input'
import Textarea from './common/Textarea'
import Button from './common/Button'
import Checkbox from './common/Checkbox'


function Contacts() {
  
  return (
    <div className=' px-6 py-4 max-w-[800px] mx-auto'>
      <form>
        <div className='flex flex-col gap-6'>
        <h1 className=' text-3xl'>Contact Me</h1>
        
        <p className=' text-base'>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        

        <div className='flex flex-col justify-center gap-6 mt-14'>

          <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
            <Input required={true} type="text" name="first_name" label="First name" placeholder='Enter your first name' />
            <Input required={true} type="text" name="last_name" label="Last name" placeholder='Enter your last name'/>
          </fieldset>

          <fieldset className=' flex flex-col gap-4'>
            <Input required={true} type="email" name="email" label="Email" placeholder='yourname@email.com' />
            <Textarea name="message" label="Message" placeholder="Send me a message and I'll reply you as soon as possible..." />

            <Checkbox type="checkbox" name="check" style={`cursor-pointer`} />
          </fieldset>


          <Button label="Send Message" type="submit" styles="bg-custom-blue-100 text-white hover:bg-custom-blue-200"/>
        </div>
      </form>
    </div>
  )
}

export default Contacts