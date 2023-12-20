import React, {useEffect, useState} from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [number, setNumber] = useState("")
  const [url,setUrl] = useState("")
  const [title,setTitle] = useState("")

  const imageChange = (e)=>{
      setNumber(e.target.value)
  }

  useEffect(() => {
      setIsLoading(true)
      fetch(`https://jsonplaceholder.typicode.com/photos/${number}`)
          .then((response)=>response.json())
          .then((data)=>{
              setUrl(data.url)
              setTitle(data.title)
              setIsLoading(false)
          })
  },[number]);



  return <>
    <label>Id number </label><input type="number" value={number} onChange={imageChange} />
    {isLoading ? <Loader /> : <PhotoFrame url={url} title={title} />}
  </>
}


export default App;
