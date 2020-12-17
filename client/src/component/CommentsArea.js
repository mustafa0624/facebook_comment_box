import { useEffect, useState } from "react";
import FetchData from "../helpers/FetchData"

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
                    <div>
                        <p className="avatar">{item.user[0]}</p>
                        <p className="message">{item.message}</p>
                    </div>
                )
            })
            }
        </div>
    )
}