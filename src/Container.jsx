import React from 'react'

const Container = (props) => {
  return (
    <div>
         <Child data={props.data} />
    </div>

  )
}

const Child = (props) => {
    return(
        <ul>
            {props.data.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}

export default Container