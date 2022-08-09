/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import KasusIndonesia from "../components/stateless/KasusIndonesia";
import API from "../services/api";
import ByProv from "../components/stateless/statefull/ByProv";
import Footer from "../components/stateless/Footer";

import Formatter from "../utils/Formatter";
import { ThemeContext, themes } from "../ThemeContextWrapper";
class Home extends Component {
  state = {
    sembuh: 0,
    meninggal: 0,
    jumlahKasus: 0,
    perawatan: 0,
    lastUpdated: "",
    darkMode: "",
  };

  getSembuh() {
    API.getCases().then((res) => {
      const totalKasus = res.sembuh + res.meninggal + res.dirawat;
      this.setState({
        sembuh: Formatter.numberWithCommas(res.sembuh),
        meninggal: Formatter.numberWithCommas(res.meninggal),
        jumlahKasus: Formatter.numberWithCommas(totalKasus),
        perawatan: Formatter.numberWithCommas(res.dirawat),
        lastUpdated: Formatter.date(res.lastUpdate),
      });
    });
  }

  componentDidMount() {
    this.getSembuh();
  }
  setDarkMode(value) {
    console.log(value);
    this.darkMode = value;
  }
  render() {
    return (
      <div className="">
        <div className="container">
          <div style={{ paddingTop: "50px" }} className="col row">
            <div>
              <h2>Coronavirus Indonesia Live Data</h2>
              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
              <h4>😷 Stay safe</h4>
            </div>
            <div className="col">
              <ThemeContext.Consumer>
                {({ changeTheme }) => (
                  <button
                    color="link"
                    id="theme-change"
                    onClick={() => {
                      this.setDarkMode(!this.darkMode);
                      changeTheme(this.darkMode ? themes.light : themes.dark);
                    }}
                    className="float-right btn btn-outline-light btn-lg"
                  >
                    {this.darkMode ? '🌞' : '🌙'}
                  </button>
                )}
              </ThemeContext.Consumer>
            </div>
          </div>
          <div className="row">
            <br />
            <div className="col-md-3">
              <KasusIndonesia
                pref="card text-white bg-primary mb-3"
                title="Jumlah Kasus"
                jumlah={this.state.jumlahKasus}
              />
            </div>
            <div className="col-md-3">
              <KasusIndonesia
                pref="card text-white bg-success mb-3"
                title="Sembuh"
                jumlah={this.state.sembuh}
              />
            </div>
            <div className="col-md-3">
              <KasusIndonesia
                pref="card text-white bg-danger mb-3"
                title="Meninggal"
                jumlah={this.state.meninggal}
              />
            </div>
            <div className="col-md-3">
              <KasusIndonesia
                pref="card text-white bg-warning mb-3"
                title="Dirawat"
                jumlah={this.state.perawatan}
              />
            </div>
          </div>
          <h6>Last Updated: {this.state.lastUpdated}</h6>

          <ByProv />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
