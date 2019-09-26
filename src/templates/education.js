import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import EducationNav from '../components/EducationNav';

export default (props) => {

    console.log(props.data)

    const pageData = props.data.educationJson;


    return (
        <Fragment>
            <header className="py-12 border-purple-500 border-solid  border-t-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/" className="uppercase underline text-pink-500"> regresar al inicio</Link>
                    <h2 className="capitalize text-6xl font-bold">
                        {pageData.title}
                    </h2>
                    <p className="text-xl">
                        {pageData.description}
                    </p>
                </div>
              
            </header>
            <ul className="max-w-4xl mx-auto pb-8">
                {
                    pageData.items.map((item, index) =>
                        (
                            <li className="bg-white shadow mt-4 flex" key={index}>
                                <div className="flex items-center  p-8">

                                    <p>
                                        {pageData.slug}
                                    </p>

                                </div>
                                <div className="flex items-center flex-1 p-8">
                                    <div className="flex-1">
                                        <h3>{item.name}</h3>
                                        {
                                            item.degree && <span className="inline-block p-2 radius bg-purple-100 text-purple-700">{item.degree}</span>
                                        }
                                    </div>
                                    <div className="inline-block">
                                        <span className="inline-block p-2 text-2xl bg-green-100 text-green-700">{item.score}</span>
                                    </div>
                                </div>
                            </li>
                        ))
                }
            </ul>
            <EducationNav/>
        </Fragment>
    )
}

export const query = graphql`
    query( $slug : String ){
            educationJson(slug:{ eq: $slug }){
                slug
                title
                description
                items{
                    name
                    degree
                    score
                }
            }
        }
`

