import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { ResponsivePie } from '@nivo/pie'
import Button from '@material-ui/core/Button'
import './ResultsPage.css'

class ResultsPage extends Component{
    handleAddRound = () =>{
        this.props.history.push('/roundpage')
    }
    render(){
        let players = [
            {
                id: this.props.reduxStore.results[0].player_id,
                wins:0,
                name: this.props.reduxStore.results[0].username
            },
          {
                id: this.props.reduxStore.results[1].player_id,
                wins: 0,
                name: this.props.reduxStore.results[1].username
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
                 "id": `${players[0].name}`,
                 "label": "Player 1",
                 "value": players[0].wins
             },
             {
                 "id": `${players[1].name}`,
                 "label": "Player 2",
                 "value": players[1].wins
             }
         ]}
         margin={{
             "top": 30,
             "right": 50,
             "bottom": 80,
             "left": 50
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
         width={400}
         height={500}
         legends={[
            {
                "anchor": "bottom",
                "direction": "row",
                "translateY": 56,
                "itemWidth": 100,
                "itemHeight": 18,
                "itemTextColor": "#999",
                "symbolSize": 18,
                "symbolShape": "circle",
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemTextColor": "#000"
                        }
                    }
                ]
            }
        ]}
                />

         <Button onClick={this.handleAddRound}>Add Another Round</Button>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) =>{
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(withRouter(ResultsPage))