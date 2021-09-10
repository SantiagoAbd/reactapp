import Text from './components/Text'
import Opciones from './components/Opciones'
import Historial from './components/Historial'
import react from 'react';
import data from './components/data.json'

const buttons = [     //Para mapear los buttons con sus opciones
  {opcion: 'a'},  
  {opcion: 'b'}
]
const ids = data.map(e => e.id) //Array con los IDs de los objetos de data

class App extends react.Component {
  state = {
    historial: [],  //Historial de elecciones
    idx: 0,         //Index en el objeto data que renderizamos
    isFinal:false,   //Ultima eleccion
  };

  componentDidMount() {           //Para q cambie cada siertos milisegundos
    this.timer = setInterval(
        () => this.tick(),
        500
    );    
  }
  componentWillUnmount() {        
      clearInterval(this.timer);
  }

  handleSelect = (letter) =>{
    this.setState((prev)=>{
      let newState = {
        historial: [...prev.historial, letter],                          //Suma la tetra a historia
        idx: ids.indexOf((prev.historial.length+2)+letter),              //Calcula el el idx de la sig opcion
        isFinal: (prev.historial.length+2)===parseInt([...ids].pop()[0]) //Comprueba si esta en la ultima opcion
      } 
      return newState
    })
  }

  colorRandom () {               //Devuelve un array con 3 numeros entre 0 y 255
    return [Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)]
  }

  tick() {                       //actualiza el estado
    if (!this.state.pauseAll){
      if (!this.state.pauseLetters){
        this.setState({
          backColor:this.colorRandom()
        })
      }
      if (!this.state.pauseBack){
        this.setState({
          letterColor:this.colorRandom()
        })
      }
    }
  }

  pausarAll = () => {
    this.pausarLetter()
    this.pausarBack()
  }
  pausarLetter = () => {
    this.setState({pauseLetters:!this.state.pauseLetters})
  }
  pausarBack = () => {
    this.setState({pauseBack:!this.state.pauseBack})
  }

  render(){
    return (
      <div className="App" style={
                          {color:`rgb(${this.state.letterColor})`,
                          backgroundColor: `rgb(${this.state.backColor})`}}>
        <Text 
          idx={this.state.idx}                            //Index en data del objeto que corresponde
        />

        {buttons.map((button) =>
                <Opciones 
                  opcion={button.opcion}                  //Letra de opcion
                  idx={this.state.idx}                    //Index en data del objeto que corresponde
                  isFinal={this.state.isFinal}            //Para q cuando sea el final camibe 
                  onSelect={this.handleSelect}            //Para poder renderizar cuando precione los botones
                  key={button.opcion}                     //Keys necesarias en un map
                />
        )}

        <Historial 
        historial={this.state.historial}                  //Historial de las elecciones
        />
        <button onClick={this.pausarAll}>Pausar todo</button>
        <button onClick={this.pausarLetter}>Pausar color back</button>
        <button onClick={this.pausarBack}>Pausar color letra</button>
      </div>
    );
  }
}

export default App;