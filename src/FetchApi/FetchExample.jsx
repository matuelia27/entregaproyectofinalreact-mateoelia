import React, {useState} from 'react'

const FetchExample = () => {
   
  const [data, setData] = useState(null)
  
  const handleFetch = () => {
   
    fetch('https://jsonplaceholder.typicode.com/todos/1')
   
    .then(response => response.json())
   
    .then(dataJson => {
    
      console.log(dataJson)
    
      setData(dataJson)
    })
    
    .catch(error => console.log(error))
  }
  return (
    <div>
      <button onClick={handleFetch}>TRAEME LA DATA!</button>
      {
        data && 
        <div>
          <h2>{data.title}</h2>
          <p>{data.id}</p>
          <p>{data.completed ? '¡COMPLETADO!' : 'x NO COMPLETADO x'}</p>
        </div>
      }
    </div>
  
  )
}

export default FetchExample