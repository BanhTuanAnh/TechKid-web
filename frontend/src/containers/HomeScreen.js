import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';
import axios from "../axios";
export default class HomeScreen extends Component {
    state = {
        images: [],
        searchString: "",
        username: ""
    }
    componentDidMount() {
        axios.get('/api/images')
            .then(dt => {
                console.log(dt.data);
                setTimeout(() => {
                    this.setState({
                        images: dt.data,
                    });
                }, 1000)

                // this.state.images=data.data;
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    onSearchChanged = text => this.setState({
        searchString: text
    })



    render() {
        const displayedImages = this.state.images.filter(img => img.title.includes(this.state.searchString) || img.description.includes(this.state.searchString))
        return (
            <div>
                <NavBar logined={this.props.logined} username={this.props.username} onSearchChanged={this.onSearchChanged} />
                <MainContent images={displayedImages} />
            </div>
        )
    }
}
