import logo from './img.jpeg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IconName } from "react-icons/ci";

function TitleSection() {
  return (
    <div className="TitleSection">
      <p><spam className="Name">Viviana Carolina Martinez Osorio</spam> <br/>Ingeniera de Sistemas y Telecomunicaciones</p>
    </div>
      );  
}

function ProfilerSection() {
  return (
    <div className="ProfilerSection">
      <div className='SectionLeft'>
        <TitleSection></TitleSection>
      </div>
      <div className='SectionRigth'>
        <ImageSection></ImageSection>
      </div>
    </div>
      );   
}

function ImageSection() {
  return (
    <div className="ImageSection">
      <Card className='SectionCard'>
        <Card.Img className='ImgProfile' variant="top" src={logo} />
      </Card>
    </div>
    );   
}

function ContactSection() {
  return (
    <div className="ContactSection">
      <h2>CONTACTO</h2>
      <hr></hr>
      <p></p>
    </div>
    );   
}


function App() {
  return (
    <div className="App">
        <ProfilerSection></ProfilerSection>
    </div>
  );
}

export default App;
