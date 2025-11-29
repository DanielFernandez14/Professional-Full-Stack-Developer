import React from "react";
import { Link } from "react-router-dom";
const PostCard = ({title, body, id, userId}) => {
    return (
    <div>
        <h2> {title} </h2>
        <p> {body} </p>
        <Link to= {`/posts/${id}`}>Ver más</Link>
        <hr />
    </div>
    )
};

export default PostCard;
