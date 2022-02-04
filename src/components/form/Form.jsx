import React from 'react';
import "./form.scss";




export default function Contacts() {

    const state = {
            firstName : '',
            lastName : '',
            number : '',
            date: '',
            datePicker : '',
        }

    const printState = (e) =>{
        validateNumber(state.number);
        e.preventDefault()
        console.log(state)
    }

    const changeValue = (e,element) =>{
        state[element] = e.target.value
    }

const validateNumber= (num) => {

    let isValid = false;

    if(num.length == 10){
        var numberSeries = num.split('-');
        if(numberSeries[0].length == 4 && numberSeries[0].length == 8 && numberSeries[0].length == 2){
            let num1 = parseInt(numberSeries[0]+numberSeries[1]);
            let num3 = parseInt(numberSeries[2]);

            if(num1 % 98  == num3){
                isValid= true
            }
        }
    }

    return isValid
}

    return (
      <div className="container-image">
          <div className="container-grayscale">
              <div className="container-form">
                  <div className="container-background">
                        <h1>Reserveer je bezoek <br></br> aan de Zoo</h1>
                        <form>
                        <div className="input-label">
                        <label for="start">Datum*</label>
                        <input onChange={(e) => changeValue(e,'datePicker')} type="date" id="start" name="trip-start" required/>
                            </div>
                            <div className="input-label">
                            <label>Tijdslot*</label>
                            <select onChange={(e) => changeValue(e,'date')} required>
                                <option value="8:00 - 10:00">8:00 - 10:00</option>
                                <option value="10:00 - 12:00">10:00 - 12:00</option>
                                <option value="12:00 - 14:00">12:00 - 14:00</option>
                                <option value="14:00 - 16:00">14:00 - 16:00</option>
                                <option value="16:00 - 18:00">16:00 - 18:00</option>
                            </select>
                            </div>
                            <h2>Bezoeker</h2>
                            <div className="content-form">
                                <i className="fas fa-times custom-icon"></i>
                                <div className="input-label">
                                    <label>Voornaam*</label>
                                    <input
                                        type="text"
                                        label="Voornaam"
                                        name="voornaam"
                                        required
                                        onChange={(e) => changeValue(e,'firstName')}
                                    />
                                </div>
                                <div className="input-label">
                                    <label>Familienaam*</label>
                                    <input
                                        type="text"
                                        label="Familienaam"
                                        name="familienaam"
                                        onChange={(e) => changeValue(e,'lastName')}
                                        required
                                    />
                                </div>
                                <div className="input-label">
                                    <label>Abonnementsnummer*</label>
                                    <input
                                        type="text"
                                        label="Abonnementsnummer"
                                        name="abonnementsnummer"
                                        onChange={(e) => changeValue(e,'number')}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="box-btn">
                                <a className="btn-hover color-7">
                                    Voeg nog een bezoeker toe
                                </a>
                                <button className="btn-hover color-7 custom-btn-submit" onClick={(e) => printState(e) && validateNumber(e, 'number')}>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
      </div>

    );
  }
