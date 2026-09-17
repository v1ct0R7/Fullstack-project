import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios';

function Post() {

    const { id } = useParams();

    const [postObject, setPostObject] = useState({});

    useEffect(() => {
        axios.get("http://localhost:3001/post/byId/${id}").then((response) => {
          setPostObject(response.data);
        });
    }, [id]);

  return (
    <div>{id}</div>
  )
}

export default Post;