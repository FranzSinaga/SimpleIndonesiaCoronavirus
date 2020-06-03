/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import KasusIndonesia from '../components/stateless/KasusIndonesia';
import API from '../services/api';
import ByProv from '../components/stateless/statefull/ByProv';
class Home extends Component {
    state = {
        sembuh: 0,
        meninggal: 0,
        jumlahKasus: 0,
        perawatan: 0
    }

    getSembuh(){
        API.getCases().then(res=>{
            this.setState({
                sembuh: res.sembuh,
                meninggal: res.meninggal,
                jumlahKasus: res.jumlahKasus,
                perawatan: res.perawatan
            })
        })
    }

    componentDidMount(){
        this.getSembuh()
    }

    render() {
        return (
            <div className="App-header">
                <div className="container">
                    <center style={{padding: "50px"}}>
                        <h1>Coronavirus Indonesia Live Data</h1>
                        <h4>😷 Stay safe</h4>
                    </center>
                    <div className="row">
                        <br/>
                        <div className="col-md-3">
                            <KasusIndonesia 
                                pref="card text-white bg-primary mb-3"
                                title="Jumlah Kasus" 
                                jumlah={this.state.jumlahKasus}/>
                        </div>
                        <div className="col-md-3">
                            <KasusIndonesia 
                                pref="card text-white bg-success mb-3"
                                title="Sembuh" 
                                jumlah={this.state.sembuh}/>
                        </div>
                        <div className="col-md-3">
                            <KasusIndonesia 
                                pref="card text-white bg-danger mb-3"
                                title="Meninggal" 
                                jumlah={this.state.meninggal}/>
                        </div>
                        <div className="col-md-3">
                            <KasusIndonesia 
                                pref="card text-white bg-warning mb-3"
                                title="Dalam Perawatan" 
                                jumlah={this.state.perawatan}/>
                        </div>
                    </div>

                    <ByProv/>
                </div>
            </div>
        )
    }
}

export default Home;