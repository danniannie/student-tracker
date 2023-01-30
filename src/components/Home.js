import React from "react";

const Home = () => {
  return <section>
      <h2 className='app-title'>View your students' progress</h2>
      <ul className='home-list'>
        Using this app you can;<br/><br/>
        <li><b>{'>'}</b> View past and present students</li>
        <li><b>{'>'}</b> Add new students</li>
        <li><b>{'>'}</b> Change a student's status and monitor their progress</li>
      </ul>
  </section>;
};

export default Home;
