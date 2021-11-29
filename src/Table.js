import React, { Component } from 'react';
import './Table.css';
import Button from './Button'

class Table extends Component {

    
render (){
    return(

     <div className="Table">
         <p className="Header">
        Overview  
        {this.props.modulnum}
         </p>
         <table className="Table">
          <tbody>
            <tr>
              <th className="tdStyle">Id</th>
              <th className="tdStyle">Ausgang</th>
              <th className="tdStyle">Map to SignalKKey</th>
              <th className="tdStyle">State</th>
              <th className="tdStyle">Do</th>
            </tr>
            {this.props.outputs.modul.map(({ id, name, delta, state}) => (
              <tr key={id} className='tablestyle'>
                <td  className="tdStyle">{id} </td>
                <td className="tdStyle">{name}</td>
                <td className="tdStyle"><input type="text" value={delta}/></td>
                <td className="tdStyle">{state==true? "On" : "off"}</td>
                <td className="tdStyle">
                    <Button 
                      label="changestate"
                      onClick={() => this.props.changestate(this.props.outputs.adress,id,state)}> //modulid
                    </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="Table">
          <tbody>
            <tr>
              <th className="tdStyle">Id</th>
              <th className="tdStyle">Eingang</th>
              <th className="tdStyle">Map To SignalKKey</th>
              <th className="tdStyle">State</th>
            </tr>
            {this.props.inputs.modul.map(({ id, name, delta, state}) => (
              <tr key={id} className='tablestyle'>
                <td  className="tdStyle">{id} </td>
                <td className="tdStyle">{name}</td>
                <td className="tdStyle"><input type="text" value={delta}/></td>
                <td className="tdStyle">{state==true ? "On": "Off"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        )
    
    }
    
}
    
    export default Table;