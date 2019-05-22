import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Image from './photo.jpg';
import Image1 from './ins.png';
import Image2 from './email.png';
import { Timeline } from 'antd';





function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div className="App">
      <header className="Portfolio">
        
        <p>
       


  <div>
  <Layout>
      <Header id="Header">Joyce's Portfolio 1.0.0</Header>
      <Layout>
        <Content id="Content">
          <h1> Hi! </h1>
          <p className="p1"> 
          My name is Yayuan Zheng, and I am currently studying in NYU Shanghai. I love drawing, design, and musicals. I can also do a little coding. 
           <br></br> <br></br>     
           <img src={Image} ></img>
          </p>
        
        <br></br>
        <br></br>
        <p className="intro1">Here are my works</p>
        <div>
  <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>,

);
</div>
        <img className="img1" src={Image1} ></img>ins: joyceyyyyyyyz<br></br>
        <img className="img2" src={Image2} ></img>Email: yz4867@nyu.edu
        </Content>
        <Sider id="sider">Sider</Sider>
      </Layout>
      <Footer id="Footer">
      
      </Footer>
    </Layout>
      
     
  </div>,
  
        </p>
        
      </header>
    </div>
  );
}

export default App;
