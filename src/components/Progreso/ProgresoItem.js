import React, { Fragment } from 'react'

const ProgresoItem = ({item}) => {
  return (
    <Fragment>
        <div className="shadow p-4 bg-white mr-4">
        <h4 className="font-bold">
          {item.title}
        </h4>
        <div className="">
          <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius">
            Progreso {item.progress}
          </span>
        </div>
      </div>
    </Fragment>
  )
}

export default ProgresoItem
