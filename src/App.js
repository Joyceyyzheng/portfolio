import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Image from './photo.jpg';
import Image1 from './ins.png';
import Image2 from './email.png';
import { Timeline } from 'antd';
import pharmacu from './pharmacu1.png';
import ss1 from './ss1.png';
import ss2 from './ss2.png';
import ss3 from './ss3.png';
import ss4 from './ss4.png';






function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div className="App">
      <header className="Portfolio">
        
        <p>
       


  <div>
  <Layout>
      <Header id="Header">Joyce's Portfolio 1.0.0           <img src={Image} ></img></Header>
      <Layout>
        <Content id="Content">
          <h1> Hi! </h1>
          <p className="p1"> 
          My name is Yayuan Zheng, and I am currently studying in NYU Shanghai. I love drawing and design. <br>
          </br>I have been trying to use code to show my thoughts and to design. 
           <br></br>  <br></br>     
           
          </p>
        
        <br></br>
        <br></br>
        <p className="intro1">Here is my group project: PharmaCU.</p>
        <p className="intro2">Since the pharmacy process is slow and outdated becasue of long wait times, poor communication between all parties, 
        <br></br>and physical nature of the interaction.
        And our project is to connect patients, doctors, pharmacies, also digitize the medication process.<br></br> 
             Our project aims to provide customers the most convenient choice to pick up medicines(OTC). </p>
        <div>
  <Timeline id="Timeline">
    <Timeline.Item id="title1">Interface<br></br><p></p>
    <img className="pharmacu" src={pharmacu} ></img> <br></br>
    
    </Timeline.Item>
<p></p>
    <Timeline.Item id="title1">Research:<p></p>
    <br></br> <p className="link">
    We did some research about companies that are working as a medium among patients, hospitals and pharmacies.</p>
    <br></br> <img className="ss4" src={ss4} ></img>
    <p></p> <img className="ss3" src={ss3} ></img><p></p>
    <p className="link">Here are the pictures of the prototype.</p>
    <br></br><img className="ss1" src={ss1} ></img> <p></p>
     <img className="ss2" src={ss2} ></img><p></p>
     <p className="link">After doing the research, we found the key problem is mainly that people are wasting time on medicines that they need immediately or <br></br>
     the medicine they should not have wasted so much time on.</p>
    </Timeline.Item>

    <Timeline.Item id="title1">Prototype: <br></br><p></p>
    <p className="link">The link for patient profile interface: <br></br>
    https://aqueous-forest-83687.herokuapp.com/index.html </p>
    <p className="link">The video of the pick-up reminder: <br></br>
     https://drive.google.com/file/d/1ePRBPOOWC5CuudLPqmpXM6NRyNasBoj0/view?usp=sharing</p>
     <p className="link">The video of the realtime tracking interface: <br></br>
     https://drive.google.com/file/d/15cQfUvcECauYfHEjv0hIkGiBeNHjdDs0/view?usp=sharing</p>
    
    </Timeline.Item>
    <Timeline.Item id="title1">Future Work<p></p>
    <p className="link">According to the suggestions from the final pitch, I think we still have a long way to go.
    Privacy, goverment regulations, these are all huge problems. We are considering just to build the most significant interface which is the wait time tracking one. Maybe the real app will not 
    be like what we have imagined, it is enough just to have the most basic function to use and it can be put on other social medias, like wechat mini app.</p>
    </Timeline.Item>
  </Timeline>

</div>
        
        </Content>
        <Sider id="sider">
        <p>Welcome!</p>
        Contact me <br></br>
        <img className="img1" src={Image1} ></img>ins: joyceyyyyyyyz<br></br>
        <img className="img2" src={Image2} ></img>Email: yz4867@nyu.edu</Sider>
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
