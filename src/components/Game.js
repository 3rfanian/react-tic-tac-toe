import React, { Component } from 'react'
import Board from './Board';

export default class Game extends Component {
    //const accepts props and super function is called inside each component within
    constructor(props){
        super(props);
        //this initializes state
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            //History of the state and action ehcih at begining all of them are null
            history: [
                {squares: Array(9).fill(null)}
            ]
        }
    }
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step%2===0)
        })
    }

    //we are designing the core function of click on each saure 
    //first create a copy of history and define the current history which is the last item in history
    //second determine that who is the player; player O or X
    //then go to next player
    handleClick(i){
        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        //check if we find the the winner there is no reason to continiue the games
        //also we have to check the double click on a square
        const winner = calculateWinner(squares);
        if(winner || squares[i] ){
            return;
        }
        squares[i] = this.state.xIsNext?'X':'O';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        })
    }


    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step,move)=>{
            const desc = move?'Go to #' + move:'Start Game';
            return(
                
                <li key={move}>
                    <button onClick={()=>{this.jumpTo(move)}}>
                        {desc}
                    </button>
                </li>
               
            )
           
        });
        let status;
        if(winner){
            status = 'Winner is ' + winner;
        } else{
            if (this.state.stepNumber > 8){
                status = 'NO WINNER! try it again....'    
            }else {
                status = 'Next player is ' + (this.state.xIsNext?'x':'o');
            }
        } 
        


        return (
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i)=>this.handleClick(i)}
                    squares={current.squares} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ul>{moves}</ul>
                </div>
            </div>
        )
    }
}

//is a function to return the winner and define who is the winner
//define the state that you can be a winner
function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
            return squares[a];
    }

    return null;
}
