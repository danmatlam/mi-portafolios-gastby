import React, { useState, useEffect } from 'react';
import Section from '../Section';
import MediumItem from './MediumItem';




const Medium = () => {
   
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const medium = sessionStorage.getItem('medium');
        if (medium) {
            return setPosts(JSON.parse(medium));
        }
        let myPosts;
        async function getMediumPosts() {
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40danmatlam")
            myPosts = await response.json();
            myPosts = myPosts.items;
            sessionStorage.setItem('medium', JSON.stringify(myPosts));
            setPosts(myPosts);
        }
        getMediumPosts();
    }, []
    )


    return (

        <Section
            titulo="El Blog de Ecudevs"
            data={posts}
            Card={MediumItem} />

     
    )
}

export default Medium
