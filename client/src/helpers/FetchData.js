import React from "react"
import axios from "axios"

export default async function FetchData(path){
    const {data} = await axios.get(path)
    return data
}