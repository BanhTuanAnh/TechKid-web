import React, { Component } from 'react'
import Girlimage from '../components/Girlimage';
import NavBar from '../components/NavBar';
import axios from "../axios";
export default class DetailScreen extends Component {
    state = {

    }
    componentDidMount() {
        axios.get(`/api/images/${this.props.match.params.id}`)
            .then(dt => {
                console.log(dt.data);
                setTimeout(() => {
                    this.setState({
                        image: dt.data,
                    });
                }, 1000)
                // this.state.images=data.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <NavBar username={this.state.username} onLogin={this.onLogin} onSearchChanged={this.onSearchChanged} />
                <div className="maincontent container">
                    <div className="row">
                        <div className="col-6  mr-auto ml-auto">
                            {this.state.image ? <Girlimage img={this.state.image} /> : ""}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
