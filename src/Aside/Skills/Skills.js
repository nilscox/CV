import * as React from 'react';

const Skills = () => (
  <section className="skills">

    <h2>Skills</h2>

    <div className="skill">
      <div className="label">Front-end</div>
      <div className="value">
        HTML5 &bullet;
        CSS3 &bullet;
        React &bullet;
        React Native &bullet;
        Angular2 &bullet;
        MithrilJS
      </div>
    </div>

    <div className="skill">
      <div className="label">JavaScript</div>
      <div className="value">
        Node &bullet;
        Express &bullet;
        Loopback &bullet;
        Sequelize &bullet;
        Redux &bullet;
        SocketIO
      </div>
    </div>

    <div className="skill">
      <div className="label">DB</div>
      <div className="value">
        PostgreSQL &bullet;
        MySQL &bullet;
        Sqlite &bullet;
        Redis
      </div>
    </div>

    <div className="skill">
      <div className="label">DevOps</div>
      <div className="value">
        Shell &bullet;
        Git &bullet;
        CircleCI &bullet;
        Docker (-compose) &bullet;
        make
      </div>
    </div>

    <div className="skill">
      <div className="label">Python</div>
      <div className="value">
        Django &bullet;
        rest_framework &bullet;
        Flask
      </div>
    </div>

    <div className="skill">
      <div className="label">PHP</div>
      <div className="value">
        Symphony2 &bullet;
        Laravel
      </div>
    </div>

  </section>
);

export default Skills;
