import React, { Component } from 'react'
import Peli from './Peli'

export default class Todas extends Component {


    constructor(props) {
        super(props)
        this.state = {                // Variable estado de la clase, lista de películas.
          pelis: []
         }
      }

    // Llamada al API.
    componentWillMount() {

       fetch("/api/peliculas")
        .then(res => { return res.json()})
        .then(data => {
          console.log(data)
          this.setState({pelis:data})
        }).catch(error => {
          console.log(error)
        })

      }

      render() {

        // Re-renderiza al cambiar el state.
        return (
          <div>
            <h2>Todas las pelis:</h2> <br></br>
            {this.state.pelis.map(peli => {  // arrow function
              return (
                <Peli peli={peli} />
              )
            })
          }
          </div>
        )
      }
}
