/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import axios from 'axios';
import KasusIndonesia from '../components/stateless/KasusIndonesia';
import indonesia from '../assets/Indo.jpg';
class Home extends Component {
    state = {
        sembuh: 0,
        meninggal: 0,
        jumlahKasus: 0,
        perawatan: 0
    }

    getSembuh(){
        axios.get('https://indonesia-covid-19.mathdro.id/api')
            .then((res) => {
                console.log(res)
                this.setState({
                    sembuh: res.data.sembuh,
                    meninggal: res.data.meninggal,
                    jumlahKasus: res.data.jumlahKasus,
                    perawatan: res.data.perawatan
                })
            }).catch((err) => {
                console.log(err);
                
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

                    {/* <ByProv/> */}
                </div>
            </div>
        )
    }
}

export default Home;