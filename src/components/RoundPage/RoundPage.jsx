import React, {Component} from 'react'
import {connect} from 'react-redux'

class RoundPage extends Component {
    render(){
        return(
            <div>
            <form>
                <input type="text" name="" id=""/>
                <input type="text" name="" id=""/>
                <input type="text"/>
               <select >
                   <option value=""></option>
                   <option value=""></option>
               </select>
               <input type="submit"/>
            </form>
            </div>
        )
    }
}

export default connect()(RoundPage)