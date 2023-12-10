import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Mayank16d')
        .then(response=>response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    }, [])
  return (
    <div className='text-center m-4 bg-yellow-400 text-gray-700 p-4 text-3xl'>
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="git p" />

    </div>
  )
}

export default Github