import React from 'react'

export default() => {
  return (
  <div>
    <h1 className="heading">Allison Alexander</h1>
    <h2 className="heading">Personal Projects</h2>

<table>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="https://weather-routes.firebaseapp.com/"
                 target="_blank">Weather Routes</a>
                 <p>Stackathon project at Grace Hopper that I refactored onto a Firebase backend.</p>
            </td>
          </tr>
          <tr>
            <td>
              <img className="img-projects"
                   src="weather.png" />
            </td>
          </tr>
          <tr>
            <td>
              <p>Powered by React, Redux and Firebase</p>
            </td>
          </tr>
        </tbody>
        </table>

        <table>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="https://adventureUs.tech"
                 target="_blank">adventureUs</a>
                 <p>Grace Hopper Capstone project, develped with 3 other software engineers</p>
            </td>
          </tr>
          <tr>
            <td>
              <img className="img-projects"
                   src="adventureUs.png" />
            </td>
          </tr>
          <tr>
            <td>
              <p>Powered by React and Firebase</p>
            </td>
          </tr>
        </tbody>
        </table>

        <table>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="http://tomato-store2.herokuapp.com/products"
                 target="_blank">Tomato Store</a>
            </td>
          </tr>
          <tr>
            <td>
              <img className="img-projects"
                   src="tomato-store.png" />
            </td>
          </tr>
          <tr>
            <td>
              <p>Powered by React, Node, built on a Postgres database</p>
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
