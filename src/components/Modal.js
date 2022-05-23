import React from 'react'
import {GrClose} from 'react-icons/gr'
import './Modal.css'

function Modal({setModalState}) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='headerSection'>
          <h3>eMOP Registeration</h3>
          <GrClose className='crossButton' size={30}/>
        </div>
        <div className='formSection'>
          <form>
            <div style={{display:"flex", flexDirection:"row"}}>
              <p style={{fontSize:12, color:'#f00'}}>*</p><p style={{fontSize:12, color:'#000'}}>Fields are required</p>
            </div>
          <div className='formGroup'>
          <label className='lable'>Title<p style={{fontSize:12, color:'#f00', margin:5}}>*</p></label>
          <input className='inputField' type="text" name="title"/>
          </div>
          <div className='formGroup'>
          <label className='lable'>Type<p style={{fontSize:12, color:'#f00', margin:5}}>*</p></label>
          <select className='inputField' type="" name="type"/>
          </div>
          <div className='formGroup'>
          <label className='lable'>Company Name<p style={{fontSize:12, color:'#f00', margin:5}}>*</p></label>
          <input className='inputField' type="text" name="companyName"/>
          </div>
          <div className='formGroup'>
          <label className='lable'>City<p style={{fontSize:12, color:'#f00', margin:5}}>*</p></label>
          <select className='inputField' type="" name="city"/>
          </div>
          <div className='formGroup'>
          <label className='lable'>State<p style={{fontSize:12, color:'#f00', margin:5}}>*</p><p style={{fontWeight:'normal'}}>(Press 'Ctrl' key to select more than one state)</p></label>
          <select className='inputField' type="" name="state"/>
          </div>
          <div className='formGroup'>
          <label className='lable'>Area<p style={{fontSize:12, color:'#f00', marginTop:20}}>*</p></label>
          <div className='radioBtn'><input type='radio' name="area"/><lable className="lable">Yes</lable></div>
          <div className='radioBtn'><input type='radio' name="area"/><lable className="lable">No</lable></div>
          </div>
          </form>
        </div>
        <div className='buttonSection'>
          <button className='clearButton'>Clear</button>
          <button className='submitButton'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Modal