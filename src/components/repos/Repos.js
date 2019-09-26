import React, { useEffect, useState } from 'react'
import Repo from './Repo'



const Repos = () => {

    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);

    useEffect(() => {
        let myRepos = sessionStorage.getItem("repos");
        if (myRepos) {
            myRepos = JSON.parse(myRepos);
            setReposCount(myRepos.length);
            myRepos = myRepos.slice(0, 12);
            return setRepos(myRepos);
        }
        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/danmatlam/repos");
            let myRepos = await response.json();
            sessionStorage.setItem("repos", JSON.stringify(myRepos))
            setRepos(myRepos)
        }
        fetchRepos();
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-12">
            <header className="text-center">
                <h2 className="text-3xl font-bold">
                    Mi trabajo en Open Source
                </h2>
                <p>Colaboración y contribución</p>
            </header>
            <ul className="repos-list">
                {
                    repos.map((repo) => {
                        return <Repo key={repo.id} repo={repo}></Repo>
                    })
                }
            </ul>

            <div className="mt-8 text-center">
                <a href="https://github.com/codigofacilito" className="btn"
                target="_blank" rel="noopener norefferer">
                    Ver más en GitHub  ({reposCount})
                </a>
            </div>



        </div>
    );
};

export default Repos
