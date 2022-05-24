import { GrClose } from "react-icons/gr";
import "./screen49.css";
import React, { Component } from "react";

export class screen49 extends Component {
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
            <h4>
              To update Email Address ONLY, type the correct email address in
              below box then click on Update button before validation.
            </h4>
            {/*Email Modify Section */}
            <div className="inputSection">
              <p className="lables"> Admin Modify User Email:</p>
              <div className="inputContainer">
                <input type="email" name="userEmail" />
                <div>
                  <a className="detailsText" href="#">
                    Update
                  </a>
                </div>
              </div>
            </div>
            {/* Registeration Details */}
            <div
              className="detailsSection"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              <div className="lablesContainer" style={{ flex: 5 }}>
                <p className="lables">Registeration Requested:</p>
                <p className="lables">Requested Company DBA:</p>
                <p className="lables">PeopleSoft Vendor ID:</p>
                <p className="lables">Requested Bidder ID:</p>
              </div>
              <div className="detailsContainer">
                <p className="detailsText">09/28/2021</p>
                <p className="detailsText">BBGeomatics</p>
                <p className="detailsText"></p>
                <p className="detailsText"></p>
              </div>
            </div>
            {/* Company Name Section */}
            <div className="inputSection">
              <p className="lables"> Admin Modify User Email:</p>
              <div className="inputContainer">
                <select
                  style={{ height: 22 }}
                  placeholder="Select"
                  type=""
                  name="city"
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                </select>
              </div>
            </div>
            {/* Checkbox Section */}
            <div className="inputSection" style={{ marginTop: 15 }}>
              <p className="lables">New BidderID:</p>
              <div className="horizontalContainer">
                <input type="checkbox" />
                <p className="detailsText">
                  (A BidderId needs to be created for this Company)
                </p>
              </div>
            </div>
            <div className="inputSection">
              <p className="lables">Existing BidderID:</p>
              <div className="horizontalContainer">
                <input type="checkbox" />
                <p className="detailsText">
                  (A BidderId needs to be created for this Company)
                </p>
              </div>
            </div>
            {/* Details Section */}
            <div
              className="detailsSection"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              <div className="lablesContainer" style={{ flex: 5 }}>
                <p className="lables">Address:</p>
                <p className="lables">City:</p>
                <p className="lables">State:</p>
                <p className="lables">Zip Code:</p>
                <p className="lables">VZW Contact Name:</p>
                <p className="lables">VZW Contact Email:</p>
                <p className="lables">VZW Contact Phone:</p>
              </div>
              <div className="detailsContainer">
                <p className="detailsText">123Somewhere</p>
                <p className="detailsText">Basking Ridge</p>
                <p className="detailsText">NJ</p>
                <p className="detailsText">20999</p>
                <p className="detailsText">John Doe</p>
                <p className="detailsText">jdoe@verizon.com</p>
                <p className="detailsText">123-555-5555</p>
              </div>
            </div>
            {/* Button Section */}
            <div className="buttonSection" style={{ marginTop: 40 }}>
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

export default screen49;
