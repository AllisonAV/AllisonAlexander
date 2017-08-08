import React from 'react'
export default () => {
  return (
    <div className="flex-container-about">
      <div className="well flex-item-about-left">
          <div className="flex-item-col font">
                Recent Graduate of Grace Hopper Academy
          </div>
          <div className="flex-item-col font">
            <a href="https://www.gracehopper.com/curriculum"
               target="_blank">
              <img src="grace-hopper-academy.jpg"
                   className="img-logo"/>
            </a>
          </div>
          <br/>
          <div className="flex-item-col font">
                Software Engineer with 13 years of experience
          </div>
          <br/>
          <div className="flex-item-col font">I am a Full Stack Software Engineer who,
                in a previous life, was a COBOL and RPG
                Systems Engineer. But I wanted more,
                so I enrolled at Grace Hopper Academy,
                a coding bootcamp, where I learned full stack JavaScript.
                I love to code & learn new technologies,
                and I am excited to return to the field
                as a full stack developer!
          </div>
      </div>
      <div className="well flex-item-about">
        <img src="allison in hoboken.jpg"/>
      </div>
      <div className="flex-item-about">
        <h3 className="well center-text font skills">Skills</h3>
        <div className="flex-container-home">
          <div className="flex-item-skills">JavaScript</div>
          <div className="flex-item-skills">Node.js</div>
          <div className="flex-item-skills">Express.js</div>
          <div className="flex-item-skills">Java</div>
          <div className="flex-item-skills">Sequelize</div>
          <div className="flex-item-skills">PostgreSQL</div>
          <div className="flex-item-skills">SQL</div>
          <div className="flex-item-skills">React.js</div>
          <div className="flex-item-skills">Redux</div>
          <div className="flex-item-skills">React-Redux</div>
          <div className="flex-item-skills">Firebase</div>
          <div className="flex-item-skills">HTML</div>
          <div className="flex-item-skills">CSS</div>
          <div className="flex-item-skills">Bootstrap</div>
          <div className="flex-item-skills">Flexbox</div>
          <div className="flex-item-skills">Agile</div>
          <div className="flex-item-skills">Estimation</div>
          <div className="flex-item-skills">Debugging</div>
          <div className="flex-item-skills">Unit Testing</div>
          <div className="flex-item-skills">Integration Testing</div>
          <div className="flex-item-skills">Production Support</div>
        </div>
      </div>
    </div>
  )
}
