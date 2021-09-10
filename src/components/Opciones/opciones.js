import react from 'react'
import data from '../data.json'

class Opciones extends react.Component{   
    handleSelect = () => {
        this.props.onSelect(this.props.opcion)
    }

    render(){
        return (
            <div className="opciones">
                {!this.props.isFinal?
                <>
                    <button onClick={this.handleSelect}>{this.props.opcion.toUpperCase()}</button>
                    <h3>{data[this.props.idx].opciones[this.props.opcion]}</h3>
                </>
                :this.props.opcion==='a'?<button onClick={()=>window.location.reload()}>Quiere volver a jugar</button>:null}
            </div>
        )
    }
}

export default Opciones