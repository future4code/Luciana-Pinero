import React , {Profiler, useState} from 'react';
import PersonInfo from "../PersonInfo/PersonInfo";

const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <PersonInfo />
        </div>
    )
}

export default Profile;