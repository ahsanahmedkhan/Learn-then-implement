import React from 'react';

const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} {props.nickName}</h1>
            {props.children}
        </div>
    )
}

export default Header