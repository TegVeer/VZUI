import React, { Component } from "react";
import "./screen49.css";
import { GrClose } from "react-icons/gr";

export class screen34 extends Component {
  render() {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="headerSection">
            <h3 className="headerTitle">
              Authorize User Registeration Details
            </h3>
            <GrClose
              className="crossButton"
              size={25}
              onClick={() => {
                this.props.setModalState(false);
              }}
            />
          </div>
          <div className="formSection">
            <h4>
              Please authorize Registeration by clicking "Valid User" or reject
              by clicking "Invalid".
            </h4>
            <div className="detailsSection">
              <div className="lablesContainer">
                <p className="lables">User Name:</p>
                <p className="lables">First Name:</p>
                <p className="lables">Last Name:</p>
                <p className="lables">Phone:</p>
                <p className="lables">Email Address:</p>
              </div>
              <div className="detailsContainer">
                <p className="detailsText">lorem ipsum</p>
                <p className="detailsText">lorem ipsum</p>
                <p className="detailsText">lorem ipsum</p>
                <p className="detailsText">lorem ipsum</p>
                <p className="detailsText">lorem.ipsum@email.com</p>
              </div>
            </div>
            {/* Registeration details */}
            <div
              className="detailsSection"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              <div className="lablesContainer" style={{ flex: 5 }}>
                <p className="lables">Registeration Requested:</p>
              </div>
              <div className="detailsContainer">
                <p className="detailsText">09/28/2021</p>
              </div>
            </div>

            {/* Registeration Details */}
            <div
              className="detailsSection"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              <div className="lablesContainer" style={{ flex: 5 }}>
                <p className="lables">MSolv Vendor Portal Name:</p>
                <p className="lables">MSolv Vendor Portal Code:</p>
                <p className="lables">MSolv Virtual Warehouse Name:</p>
                <p className="lables">MSolv Virtual Warehouse Code:</p>
              </div>
              <div className="detailsContainer">
                <p className="detailsText">Orius</p>
                <p className="detailsText">Orius</p>
                <p className="detailsText">CTDI-Westchester PA</p>
                <p className="detailsText">4427</p>
              </div>
            </div>
            {/* Button Section */}
            <div
              className="buttonSection"
              style={{ marginTop: 40, marginBottom: 20 }}
            >
              <button className="clearButton" onClick={() => {}}>
                Invalid User
              </button>
              <button
                className="submitButton"
                onClick={() => {
                  this.props.setModalState(false);
                }}
              >
                Valid User
              </button>
            </div>
            {/* Administrator */}
            <div className="detailsSection" style={{ marginBottom: 10 }}>
              <div className="lablesContainer" style={{ flex: 4 }}>
                <p className="lables">Current Administrator:</p>
              </div>
              <div className="detailsContainer">
                <p className="detailsText">Upasana Dayananda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default screen34;
