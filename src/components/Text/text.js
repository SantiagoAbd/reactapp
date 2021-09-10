import react from 'react'
import data from '../data.json'

class Text extends react.Component{
    state = {
        color:true
    }

    componentDidMount() {           //Para q cambie cada siertos milisegundos
        this.timer = setInterval(
        () => this.tick(),
        500
        );
    }

    componentWillUnmount() {        
        clearInterval(this.timer);
    }

    colorRandom () {               //Devuelve un array con 3 numeros entre 0 y 255
        let arr = [];
        for (let i=0;i<=2;i++){
            arr.push(Math.floor(Math.random()*255))
        }
        return arr
        //return [Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)]
    }

    tick() {                       //actualiza el estado
        this.setState({
        color: !this.state.color
        });
    }

    render(){
        return (
            <>          
                {<h1 
                    style={(this.state.color)?
                            {color:`rgb(${this.colorRandom()})`,
                            backgroundColor: `rgb(${this.colorRandom()})`}
                        :{color:`rgb(${this.colorRandom()})`,
                        backgroundColor: `rgb(${this.colorRandom()})`}}>
                    {data[this.props.idx].historia}
                </h1>}
            </>
        )}
}

export default Text