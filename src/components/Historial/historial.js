import react from 'react'

class Opcion extends react.Component{   
    render(){
        return (
            <div className="historial">
                <p>Seleccion anterior: {[...this.props.historial].pop()?.toUpperCase()}</p>
                <p>Historial de opciones elegidas:</p>
                <ul>
                    {this.props.historial.slice(0,-1).map((e,idx)=>{
                        return <li key={idx}>{e.toUpperCase()}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Opcion