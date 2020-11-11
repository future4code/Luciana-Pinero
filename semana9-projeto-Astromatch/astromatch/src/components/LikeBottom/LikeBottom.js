import React from 'react';
import {Heartlike} from './styled';
import heartfull from '../../assets/heartfull.jpg';


const LikeBottom = (props) => {
    return (
        <div>
            <Heartlike src = {heartfull} />
        </div>
    )
}

export default LikeBottom;
