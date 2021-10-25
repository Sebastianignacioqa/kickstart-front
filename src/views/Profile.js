import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
    const params = useParams()
    return (
        <h1>Hola {params.name}</h1>
    )
}

export default Profile;