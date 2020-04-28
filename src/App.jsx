import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Game from './Components/game'
import './App.css'

const App = () => {
    return(
        <div className="container">
            <div className="container-body">
            <h1>Tic Tac Toe</h1>
            <Game></Game>
            </div>
        </div>
    )
}

export default App;