import React, { Component } from 'react';
import './App.css';
import trumps from './trumps.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import TrumpCard from './components/TrumpCard'

class App extends Component {
    state = {
        message: "Click a Trump to begin!",
        topScore: 0,
        curScore: 0,
        trumps: trumps,
        unselectedTrumps: trumps
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectTrump = emotion => {
        const findTrump = this.state.unselectedTrumps.find(item => item.emotion === emotion);

        if(findTrump === undefined) {

            this.setState({ 
                message: "Incorrect! You already clicked that Trump!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                trumps: trumps,
                unselectedTrumps: trumps
            });
        }
        else {
         
            const newTrumps = this.state.unselectedTrumps.filter(item => item.emotion !== emotion);
            
            this.setState({ 
                message: "You guessed correctly! Click another Trump!",
                curScore: this.state.curScore + 1,
                trumps: trumps,
                unselectedTrumps: newTrumps
            });
        }

        this.shuffleArray(trumps);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.trumps.map(trump => (
                        <TrumpCard
                            emotion={trump.emotion}
                            image={trump.image}
                            selectTrump={this.selectTrump} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;