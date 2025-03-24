import axios from 'axios';
import React, { useEffect } from 'react'

const DataFetcher = ({setData, setLoading}) => {

    useEffect(()=>{
        const fetchData = async() => {
            try {
                setLoading(true);
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setData(response.data)
            } catch (error) {
                console.log("Error while fetching data :", error)
            } finally {
                setLoading(false);
            }
        }

        fetchData()
    },[setData,setLoading])

  return (
    <div>

    </div>
  )
}

export default DataFetcher