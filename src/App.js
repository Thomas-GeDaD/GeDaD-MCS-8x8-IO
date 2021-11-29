import React, { Component , useState }from 'react';
import './App.css';
import Button from './Button';
import Table from './Table';
//import getdevices from "../IO_search.js";


//var availabledevices = getdevices()
//console.log (availabledevices)

/*export default (props) => {
    const [inputs, setinputs] = useState( inputs || ""); ??
    const [outputs, setoutputsd] = useState();
    const [config, setconfig] = useState();
    const [error, setError] = useState();
}*/
// for testing In0-In7, O0-O7


//example state for one modul:
const inputs = 
{adress: 25 , modul:
[
    { id: 1, name: 'Input_0', delta: "" , state: true},
    { id: 2, name: 'Input_1', delta: "" , state: true},
    { id: 3, name: 'Input_2', delta: "" , state: false},
    { id: 4, name: 'Input_3', delta: "" , state: false},
    { id: 5, name: 'Input_4', delta: "" , state: false},
    { id: 6, name: 'Input_5', delta: "" , state: false},
    { id: 7, name: 'Input_6', delta: "" , state: false},
    { id: 8, name: 'Input_7', delta: "" , state: false}
 ]
}
 const outputs = 
 {adress:25, modul :
 [
    { id: 1, name: 'Output_0', delta: "", state: false},
    { id: 2, name: 'Output_1', delta: "", state: false},
    { id: 3, name: 'Output_2', delta: "", state: false},
    { id: 4, name: 'Output_3', delta: "", state: false},
    { id: 5, name: 'Output_4', delta: "", state: false},
    { id: 6, name: 'Output_5', delta: "", state: false},
    { id: 7, name: 'Output_6', delta: "", state: false},
    { id: 8, name: 'Output_7', delta: "", state: false}
 ]
}



//change the state of the output. newstate = !oldstate
var save =   <Button label='Save Changes'
                        onClick={() => 
                            alert('saved')}>
                </Button>;




class App extends Component {
    constructor(props) {
        super(props);
    this.changestate = this.changestate.bind(this);
    }

// new output state 
changestate = (modul , outputid, oldstate) => {
        alert(modul)
        alert(outputid)
        alert(oldstate)
}


render (){
return(
    <div>
        <row>
            <Table 
            inputs={inputs} 
            outputs={outputs} 
            changestate={this.changestate}
            />         
        </row>
        {save}
    </div>

        )
    }
}







export default App;