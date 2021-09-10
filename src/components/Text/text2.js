import react from 'react'
import data from '../data.json'

class Text extends react.Component{
    // state = {
    //     letterColor:[0,0,0],
    //     backColor:[255,255,255],
    //     pause:false
    // }

    
    // componentDidMount() {           //Para q cambie cada siertos milisegundos
    //     this.timer = setInterval(
    //         () => this.tick(),
    //         1000
    //     );    
    // }

    // componentWillUnmount() {        
    //     clearInterval(this.timer);
    // }

    // colorRandom () {               //Devuelve un array con 3 numeros entre 0 y 255
    //     let arr = [];
    //     for (let i=0;i<=2;i++){
    //         arr.push(Math.floor(Math.random()*255))
    //     }
    //     return arr
    //     //return [Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)]
    // }

    // tick() {                       //actualiza el estado
    //     if (!this.state.pause){
    //         this.setState({
    //         letterColor:this.colorRandom(),
    //         backColor:this.colorRandom()
    //         });
    //     }
    // }
    // pausar = () => {
    //     this.setState({pause:!this.state.pause})
    // }

    render(){
        return (
            <div>      
                <h1>
                    {data[this.props.idx].historia}
                </h1>
            </div>
        )}
}

export default Text