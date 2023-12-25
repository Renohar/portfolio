import React from 'react'
import {useState, useEffect} from 'react'

const Footer = () => {
    
    const [currentDate,setCurrentDate] = useState(new Date()) 
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
    const date = currentDate.getDate();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes() ;
    const seconds = currentDate.getSeconds();

    useEffect(
        ()=>{
            const intervalId = setInterval(()=>{
                setCurrentDate(new Date())
            },1000)
        return () => clearInterval(intervalId)
        },[]
    )


    return (
        <footer>
            <p>{`${date}-${month}-${year} ${hours}-${minutes}-${seconds}`}</p>
            
        </footer>
    )
}

export default Footer
