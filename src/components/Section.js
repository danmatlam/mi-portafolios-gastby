import React, { Fragment } from 'react'

const Section = ({ data, titulo, Card }) => {

    return (
        <Fragment>
            <div className="mt-24">

                <h2 className="text-3xl font-bold text-center mb-8">{titulo}</h2>

                <div className="max-w-4xl mx-auto  ps-scroll">
                    <div className="flex">
                        {
                            data.map((item, i) => (
                                <Card
                                    key={i}
                                    item={item}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Section
