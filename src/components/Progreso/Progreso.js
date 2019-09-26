import React from 'react'
import Section from '../Section'

import { useStaticQuery } from 'gatsby'
import ProgresoItem from './ProgresoItem';




const Progreso = () => {
  const data = useStaticQuery(graphql`
  {
    codigoFacilitoxJson {
      data {
        courses {
          title
          progress
          url
        }
        email
        username
      }
    }
  }
`);
  console.log(data)
  let courses = data.codigoFacilitoxJson.data.courses
  courses = [...courses, ...courses, ...courses];

  return (
    <div>
      <Section
        titulo="Mis cursos y progreso en Código Facilito"
        data={courses}
        Card={ProgresoItem} />
    </div>
  )

}

export default Progreso




