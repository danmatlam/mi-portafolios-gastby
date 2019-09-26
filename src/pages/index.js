import React from "react";
import Header from '../components/Header';
import Repos from "../components/repos/Repos";
import Progreso from "../components/Progreso/Progreso";
import Medium from "../components/Medium/Medium";
import EducationNav from "../components/EducationNav";



export default function index() {
    return (
        <div>

           
            <Header />
            <EducationNav/>
            <Medium />

            <Repos />

            <Progreso />
           

        </div>
    )
}

