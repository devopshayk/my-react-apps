import React, { useState, useEffect } from 'react';
import './User.css'


const User = () => {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((data) => data.json())
            .then((user) => setUserData(user.users));
    }, [])
    console.log(userData)
    const removeItem = (index) => {
        const updatedItems = [...userData];
        updatedItems.splice(index, 1);
        setUserData(updatedItems);
    };
    return (
        <div className="App">
            {userData.map((user, index) => {
                return (
                    <div key={index} className='userCard'>
                        <h1>{user.firstName}</h1>
                        <h1>{user.lastName}</h1>
                        <img src={user.image} />
                        <button onClick={() => removeItem(index)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default User