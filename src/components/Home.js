import React from "react";

const Home = () => {
  return <section>
      <h2 className='app-title'>View your students' progress</h2>
      {/* <img src='https://www.victoriabuzz.com/wp-content/uploads/2018/09/coding-1068x712.jpeg' alt='People coding'/> */}
      <ul className='home-list'>
        Using this app you can;<br/><br/>
        <li><b>{'>'}</b> View past and present students</li>
        <li><b>{'>'}</b> Add new students</li>
        <li><b>{'>'}</b> Change a student's status and monitor their progress</li>
      </ul>
  </section>;
};

export default Home;
