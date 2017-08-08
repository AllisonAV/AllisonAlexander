import React from 'react'

export default() => {
  return (
  <div>
    <h2 className="font">Personal Projects</h2>

<table>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="https://weather-routes.firebaseapp.com/"
                 target="_blank"
                 className="font-link">Weather Routes</a>
                 <p>Stackathon project at Grace Hopper that I refactored onto a Firebase backend.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Created using React, React-Redux and Firebase, along with APIs from Google Maps and Weather Underground</p>
            </td>
          </tr>
          <tr>
            <td>
              <img className="img-projects"
                   src="weather.png" />
            </td>
          </tr>
        </tbody>
        </table>
        <br/>
        <br/>
        <table>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="https://adventureUs.tech"
                 target="_blank"
                 className="font-link">adventureUs</a>
                 <p>Grace Hopper Capstone project, develped with 3 other software engineers</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Created using React and Firebase</p>
            </td>
          </tr>
          <tr>
            <td>
              <img className="img-projects"
                   src="adventureUs.png" />
            </td>
          </tr>
        </tbody>
        </table>
        <br/>
        <br/>
        <table>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="http://tomato-store2.herokuapp.com/products"
                 target="_blank"
                 className="font-link">Tomato Store</a>
              <p>Grace Hopper E-Commerce project, created with three other software engineers</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Created using React, React-Redux, Express.js & Node.js, built on a PostgreSQL database</p>
            </td>
          </tr>
          <tr>
            <td>
              <img className="img-projects"
                   src="tomato-store.png" />
            </td>
          </tr>
        </tbody>
        </table>

  </div>

  )
}

/*
    <div className="row">
      <div className="col-md-4">
      </div>

      <div className="col-md-4">

      </div>
      <div className="col-md-4">
      </div>
    </div>
    */
