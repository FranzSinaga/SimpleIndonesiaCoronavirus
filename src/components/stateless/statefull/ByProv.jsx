import React, { Component } from 'react';
import API from '../../../services/api';

class ByProv extends Component{
    state = {
        dataByProv: []
    }

    getByProv = () => {
        API.getCasesByProv().then((res) => {
            console.log(res);
            this.setState({
                dataByProv: res.data
            })
        })
    }

    componentDidMount(){
        this.getByProv()
    }

    render(){
        return(
            <div>
                <h3>Kasus Berdasarkan Provinsi</h3>
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
                                        <td><span class="badge badge-primary">{data.kasusPosi}</span></td>
                                        <td><span class="badge badge-danger">{data.kasusMeni}</span></td>
                                        <td><span class="badge badge-success">{data.kasusSemb}</span></td>
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