import React from 'react'
import ClassClick from './ClassClick';
import '../App.css';

const Posts = ({posts, loading, config}) => {
    if (loading) {
        return <h2>Loading..</h2>;
    }

    console.log("config: " + config);

    return (
        <ul>
            {posts.map(post => (
                <li className='post' key={post.id}>
                    <ClassClick msg={[post['viewpoint'], post['name'], post['url'], post['snippet'], config[0][0], config[0][1], config[0][2]]}/>
                </li>
            ))}
        </ul>
    )
}

export default Posts