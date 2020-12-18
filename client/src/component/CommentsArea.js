import { useEffect, useState } from "react";
import FetchData from "../helpers/FetchData"
import "./commentArea.css"

export const CommentsArea = () =>{
    const [data, setData] = useState()

    const fetch = async () =>{
        await FetchData("http://localhost:8000/api").then((data)=>{
            setData(data)
    })
    }

    useEffect(()=>{
        fetch()
    }, [])
    return(
        <div className="comments-container">    
            {data?.map((item)=>{
                return(
                    <div className="message-container">
                        <div className="avatar-container" style={{backgroundColor:`#00${Math.ceil(Math.random()*10000)}`}}>
                            <p className="avatar">{item.user[0].toUpperCase()}</p>
                        </div>
                        <p className="message">{item.message}</p>
                    </div>
                )
            })
            }
        </div>
    )
}