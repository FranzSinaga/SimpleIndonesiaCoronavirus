import React, { Component } from 'react';
import API from '../../../services/api';

class ByProv extends Component{
    state = {
        dataByProv: [],
        filterProv: [],
        isExist: true
    }

    getByProv = () => {
        API.getCasesByProv().then((res) => {
            this.setState({
                dataByProv: res.data,
                filterProv: res.data
            })
            // console.log(this.state.dataByProv);
        })
    }

    resetText(){
        document.getElementById('provinsi-input').value = "";
        this.setState({
            dataByProv: this.state.filterProv
        })
    }
    
    filterByProv(provinsi){
        if (provinsi.target.value == "") {
            this.setState({
                dataByProv: this.state.filterProv
            })
        } else {
            let dataByProv = [...this.state.filterProv]
            dataByProv = []
            this.state.dataByProv.filter(cond => cond.provinsi.includes(provinsi.target.value)).map((data) => {
                dataByProv.push(data)
                this.setState({
                    dataByProv,
                })
            })
        }
    }

    componentDidMount(){
        this.getByProv()
    }

    render(){
        return(
            <div style={{marginTop: "30px"}}>
                <h3>Kasus Berdasarkan Provinsi</h3>
                <div className="col-md-4" style={{paddingLeft: "0px"}}>
                    <div className="input-group mb-3">
                        <input type="text" id="provinsi-input" className="form-control" onChange={(text) => this.filterByProv(text)} placeholder="Provinsi"/>
                        <div className="input-group-append">
                            <button className="btn btn-warning" type="button" onClick={() => this.resetText()}>❌</button>
                        </div>
                    </div>
                </div>
                
                <div className="table-wrapper-scroll-y my-custom-scrollbar table-responsive">
                    <table className="table table-striped table-dark table-borderless">
                        <thead>
                            <tr>
                                <th>Provinsi</th>
                                <th>Positif</th>
                                <th>Meninggal</th>
                                <th>Sembuh</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.dataByProv.map(data => {
                                return (
                                    <tr key={data.fid}>
                                        <td>{data.provinsi}</td>
                                        <td><span className="badge badge-primary">{data.kasusPosi}</span></td>
                                        <td><span className="badge badge-danger">{data.kasusMeni}</span></td>                                            <td><span className="badge badge-success">{data.kasusSemb}</span></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <br/>
                <br/>
            </div>
        ) 
    }
}

export default ByProv;