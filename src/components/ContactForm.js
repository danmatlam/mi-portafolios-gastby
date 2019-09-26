import React from 'react'

const ContactForm = () => {
    return (


        <form className="mt-16 text-center">
            <label htmlFor="contact-content" className="mt">Cuéntame de esa idea que quieres hacer realidad</label>


            <div className="flex shadow rounded border p-2 bg-white">
                <textarea
                    id="contact-content"
                    name="contact-content"
                    className="flex-1 py-2 px-3 text-gray-700 focus:outline-none  focus:shadow-outline">

                </textarea>

                <button className="btn ml-4">Enviar</button>

            </div>

        </form>

    )
}

export default ContactForm
