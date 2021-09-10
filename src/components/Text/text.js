import react from 'react'
import data from '../data.json'

class Text extends react.Component{
   
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
