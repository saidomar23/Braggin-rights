import React, {Component} from 'react'
import {connect} from 'react-redux'
import { ResponsivePie } from '@nivo/pie'
import './ResultsPage.css'

class ResultsPage extends Component{
    componentDidMount(){
        
    }
    render(){
        let players = [
            {
                id: this.props.reduxStore.results[0].player_id,
                wins:0
            },
          {
                id: this.props.reduxStore.results[1].player_id,
                wins: 0
            }
        ]


         this.props.reduxStore.results.map(result =>{
                console.log(result);
                    for(let player of players){
                        console.log(player.id);
                        if(result.winrate && player.id === result.player_id){
                            console.log(`${player.id} Won`);
                            player.wins++;
                        }
                    
                }
                
         })
         console.log(players[0]);
         

        return(<div className="pieContainer">
                  <ResponsivePie 
         data={[
             {
                 "id": "Player 1",
                 "label": "Player 1",
                 "value": players[0].wins
             },
             {
                 "id": "Player 2",
                 "label": "Player 2",
                 "value": players[1].wins
             }
         ]}
         margin={{
             "top": 40,
             "right": 80,
             "bottom": 80,
             "left": 80
         }}
         colors={['blue','red']}
         colorBy="id"
         borderWidth={1}
         borderColor="inherit:darker(0.2)"
         enableRadialLabels={false}
         radialLabelsSkipAngle={10}
         radialLabelsTextXOffset={6}
         radialLabelsTextColor="#333333"
         radialLabelsLinkOffset={0}
         radialLabelsLinkDiagonalLength={16}
         radialLabelsLinkHorizontalLength={24}
         radialLabelsLinkStrokeWidth={1}
         radialLabelsLinkColor="inherit"
         sliceLabel="id"
         slicesLabelsSkipAngle={10}
         slicesLabelsTextColor="#333333"
         animate={true}
         motionStiffness={90}
         motionDamping={15}
       

                />
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) =>{
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(ResultsPage)