import logo from './img.jpeg';
import './App.css';
import Card from 'react-bootstrap/Card';
import { IconName } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

function TitleSection() {
  return (
    <div className="TitleSection">
      <p><spam className="Name">Viviana Carolina Martinez Osorio</spam> <br/>Ingeniera de Sistemas y Telecomunicaciones</p>
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
      <h4>CONTACTO</h4>
      <hr></hr>
      <p><i className="bi bi-envelope-at"></i> vicamaos18@gmail.com</p>
      <p><i className="bi bi-telephone"></i> 3022704276</p>
      <p><i className="bi bi-geo-alt"></i> Calle 13 N 31-17 Manizales, Caldas</p>
      <p><i className="bi bi-instagram"></i> @vivi_nez</p>
      <p><i className="bi bi-facebook"></i> Vivi Martinez</p>
    </div>
    );   
}

function App() {
  return (
    <div className="App">
      <div className='SectionLeft'>
        <TitleSection></TitleSection>
      </div>
      <div className='SectionRigth'>
        <ImageSection></ImageSection>
        <ContactSection></ContactSection>
      </div>
    </div>
  );
}

export default App;
