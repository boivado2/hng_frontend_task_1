import React from 'react'
import Input from './common/Input'
import Textarea from './common/Textarea'
import Button from './common/Button'


function Contacts() {
  return (
    <div>
      <form>

    
        <div className='flex flex-col gap-6'>
        <h1 className=' text-3xl'>Contact Me</h1>
        
        <p className=' text-base'>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        

        <div className='flex flex-col justify-center gap-6 mt-14'>

          <fieldset className='grid grid-cols-2 gap-4'>
            <Input required={true} type="text" name="first_name" label="First Name" placeholder='Enter your first name' />
            <Input required={true} type="text" name="last_name" label="Last Name" placeholder='Enter your last name'/>
          </fieldset>

          <fieldset className=' flex flex-col gap-4'>
            <Input required={true} type="email" name="email" label="Email" placeholder='yourname@email.com' />
            <Textarea name="message" label="Message" placeholder="Send me a message and I'll reply you as soon as possible..."/>
          </fieldset>


          <Button label="Send Message" type="submit" styles=" bg-slate-500"/>
        </div>
      </form>
    </div>
  )
}

export default Contacts