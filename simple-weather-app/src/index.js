import React from 'react'
import  ReactDOM  from 'react-dom/client'

const App = () => {


    return (
        <div>
            <h1>Latitude: </h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
