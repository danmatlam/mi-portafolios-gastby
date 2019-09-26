import React from 'react'
import ilustration from '../images/mobile/undraw_download_pc33.svg'
import ContactForm from './contactForm'


const Header = () => {
  return (
    <header className="bg-gray-300">

      <div className="container mx-auto p-12 max-w-4xl "
      >
        <div className="flex justify-center items-center">
          <div className="flex-1">
            <h1 className="font-bold text-5xl text-neutral">Hola! Soy Daniel</h1>
            <p className="text-2xl">
              Ux Developer
          </p>
          </div>
          <img src={ilustration} style={{ height: '300px' }} alt="desarrollador wireframe" />
        </div>

        <div>
          <ContactForm />
        </div>


      </div>

    </header>


  )
}

export default Header

