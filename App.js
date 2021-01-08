import React, { Component } from 'react';
import css from './App.module.css';
import Repos from './Repos';
import axios from './axios';
class App extends Component {
    state = {
        items: [],
        items2: [],
        items3: []
    }

    componentDidMount() {
        axios.get('/').then(res => {
            let arr = []
            res.data.items.map(ele => {
                arr.push({name:ele.name,stars:ele.stargazers_count,issues:ele.open_issues,desc:ele.description,url:ele.owner.avatar_url,time:ele.created_at})
            })
            this.setState({items:arr})
        }).then(() => {
            axios.get('&page=2').then(res => {
                let arr2 = []
                res.data.items.map(ele => {
                    arr2.push({name:ele.name,stars:ele.stargazers_count,issues:ele.open_issues,desc:ele.description,url:ele.owner.avatar_url,time:ele.created_at})
                })
                this.setState({items2:arr2})
            })
        }).then(() => {
            axios.get('&page=3').then(res => {
                let arr3 = []
                res.data.items.map(ele => {
                    arr3.push({name:ele.name,stars:ele.stargazers_count,issues:ele.open_issues,desc:ele.description,url:ele.owner.avatar_url,time:ele.created_at})
                })
                this.setState({items3:arr3})
            })
        }) 
    }
    render() {
        let repos = <p>Loading...</p>
        if (this.state.items != null) {
            repos = this.state.items.map((ele,ind) => (
                <Repos key={ind} name={ele.name} desc={ele.desc} stars={ele.stars} issues={ele.issues} url={ele.url} time={38 - ele.time.split('-')[2].split('T')[0]} />
            ))
        }
        let repos2 = <p>Loading...</p>
        if (this.state.items2 != null) {
            repos2 = this.state.items2.map((ele,ind) => (
                <Repos key={ind+1} name={ele.name} desc={ele.desc} stars={ele.stars} issues={ele.issues} url={ele.url} time={38 - ele.time.split('-')[2].split('T')[0]} />
            ))
        }
        let repos3 = <p>Loading...</p>
        if (this.state.items3 != null) {
            repos3 = this.state.items3.map((ele,ind) => (
                <Repos key={ind+2} name={ele.name} desc={ele.desc} stars={ele.stars} issues={ele.issues} url={ele.url} time={38 - ele.time.split('-')[2].split('T')[0]} />
            ))
        }
        return (
            <div className={css.App}>
                <h1 className={css.Header}>Last 30 Days Repository Orders</h1>
                {repos}
                {repos2}
                {repos3}
            </div>
        );
    }
}
export default App;