import React, { Fragment } from 'react'

export default function MediumItem({ item }) {

    debugger
    return (
        <Fragment>
            <div className="shadow bg-white mr-4 flex-shrink-0" style={{width:'300px'}}>
                <header className="h-40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.thumbnail})` }}
                />
                <div className="p-8">

                    <h4 className="font-bold h-40 overflow-y-hidden">
                        {item.title}
                    </h4>

                    <div className="text-center mt-8">
                        <a className="btn" href={item.link}>Leer</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
