import React from 'react';
import "./form.scss";




export default function Contacts() {
    
  
    return (
      <div className="container-image">
          <div className="container-grayscale">
              <div className="container-form">
                  <div className="container-background">
                        <h1>Reserveer je bezoek <br></br> aan de Zoo</h1>
                        <form>
                        
                            
                            <label>Tijdslot*</label>
                            <select>
                                <option value="1">8:00 - 10:00</option>
                                <option value="2">10:00 - 12:00</option>
                                <option value="3">12:00 - 14:00</option>
                                <option value="4">14:00 - 16:00</option>
                                <option value="4">16:00 - 18:00</option>
                            </select>
                            <h2>Bezoeker</h2>
                            <div className="content-form">
                                <i class="fas fa-times custom-icon"></i>
                                <div className="input-label">
                                    <label>Voornaam*</label>
                                    <input
                                        type="text"
                                        label="Voornaam"
                                        name="voornaam"
                                        required
                                    />
                                </div>
                                <div className="input-label">
                                    <label>Familienaam*</label>
                                    <input
                                        type="text"
                                        label="Familienaam"
                                        name="familienaam"
                                        required
                                    />
                                </div>
                                <div className="input-label">
                                    <label>Abonnementsnummer*</label>
                                    <input
                                        type="number"
                                        label="Abonnementsnummer"
                                        name="abonnementsnummer"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="box-btn">
                                <button type="submit" className="btn-hover color-7">
                                    Voeg nog een bezoeker toe
                                </button>
                                <button type="submit" className="btn-hover color-7 custom-btn-submit">
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
