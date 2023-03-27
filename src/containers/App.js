import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component{
    constructor(){
        super()
        this.state={
            people:[],
    searchfield:''
        }
    }

componentDidMount(){
    fetch('https://swapi.py4e.com/api/people/')
        .then(response=>response.json())
    .then(results=>this.setState({people:results.results}))
   

}

    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})

    }
    render(){
        const {people,searchfield}=this.state;
        const filteredPeople=people.filter(ppl=>{
            return ppl.name.toLocaleLowerCase().includes(searchfield.toLowerCase());
        })

        return!people.length?
<h1>Loading...</h1>:
        (
    <div className='tc'>
        <h1 className='f1'>Star Wars</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
            <ErrorBoundry>
    <CardList people={filteredPeople}/>
    </ErrorBoundry>
    </Scroll>
    </div>
);
        }
}


export default App;