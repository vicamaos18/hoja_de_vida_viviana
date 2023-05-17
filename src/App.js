import logo from './img.jpeg';
import './App.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TitleSection() {
  return (
    <div className="TitleSection">
      <p className='Title'><spam className="Name">VIVIANA CAROLINA MARTINEZ OSORIO</spam> <br/>Ingeniera de Sistemas y Telecomunicaciones</p>
    </div>
      );  
}

function ProfileSection() {
  return (
    <div className="ProfileSection">
      <h3>Perfil Profesional</h3>
      <p className='TextProfile'>Viviana Martinez ha realizado diferentes estudios que abarcan desde el ámbito técnico en
          la reparación de equipos de cómputo, pasando por la tecnología en Análisis y
          Desarrollo de Sistemas de Información, hasta llegar a la Ingeniería de Sistemas y
          Telecomunicaciones, incluyendo un diplomado en desarrollo de software y aspira a
          seguir su capacitación constante en campos afines.</p>
      
    </div>
    );   
}

function EducationSection() {
  return (
    <div className="DivSectionLeft">
      <h3>Fromación Titulada</h3>
      <ul>
        <li><b>Ingeniería de Sistemas y Telecomunicaciones</b><br/>
          Universidad de Manizales<br/>
          Febrero del 2016 - Actualmente
        </li><br/>
        <li><b>Tecnólogo en Análisis y Desarrollo de Sistemas de Información</b><br/>
          Servicio Nacional de Aprendizaje SENA<br/>
          Septiembre del 2012 - octubre 2014

        </li><br/>
        <li><b>Técnico Reparador de PC y Equipo Periférico</b><br/>
          Asociación Educativa AE<br/>
          Julio del 2010 - julio 2011

        </li><br/>
        <li><b>Bachiller Académico con Especialidad CASD</b><br/>
          Institución Educativa Pablo VI Sede Central<br/>
          Diciembre del 2009
        </li><br/>
        <li><b>Comercial Secretariado Auxiliar Contable</b><br/>
          Instituto Técnico Marco Fidel Suarez antes CASD Mercedes Abrego de Manizales<br/>
          Durante los años lectivos 2008 y 2009
        </li><br/>
      </ul>
      
    </div>
    );   
}

function ExperienceSection() {
  return (
    <div className="DivSectionLeft">
      <h3>Experiencia Laboral</h3>
      <ul>
        <li><b>Analista de Desarrollo</b><br/>
            ALCUADRADO<br/>
            7 de Julio del 2021 hasta la actualidad
        </li><br/>
        <li><b>Ingeniera de Software</b><br/>
            Playvox<br/>
            15 de octubre del 2019 hasta el 27 de marzo de 2020
        </li><br/>
        <li><b>Auxiliar de Informática</b><br/>
            Torres Guarín y CIA LTDA<br/>
            1 de febrero del 2015 hasta el 9 de octubre de 2019
        </li><br/>
        <li><b>Contratista</b><br/>
            Torres Guarín y CIA LTDA<br/>
            15 de mayo del 2015 hasta el 31 de enero 2017<br/> 
        </li><br/>
        <li><b>Contratista</b><br/>
            Industria Licorera de Caldas<br/>
            24 de septiembre del 2014 hasta el 27 de febrero de 2015 
        </li><br/>
        <li><b>Practicante SENA</b><br/>
            Industria Licorera de Caldas<br/>
            25 de marzo de 2014 hasta el 24 de septiembre del 2014
        </li>
      </ul>
      
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
    <div className="DivSectionRigth">
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

function InterestsSection() {
  return (
    <div className="DivSectionRigth">
      <h4>INTERESES</h4>
      <hr></hr>
      <ul>
        <li type="square">Viajar</li>
        <li type="square">Cantar</li>
        <li type="square">Tocar la guitarra</li>
        <li type="square">Compartir tiempo en familia</li>
        <li type="square">Adquirir nuevos conocimientos</li>
      </ul>
    </div>
    );   
}

function SkillsSection() {
  return (
    <div className="DivSectionRigth">
      <h4>HABILIDADES</h4>
      <hr></hr>
      <ul>
        <li type="square">HTML</li> 
        <li type="square">CSS</li>
        <li type="square">Bootstrap</li>
        <li type="square">Reactjs</li>
        <li type="square">Angular</li>
        <li type="square">Visual Basic - WPF y Servicios RIA</li>
        <li type="square">C# Framework .NET</li>
        <li type="square">Repositorio GIT (GitHub - GitLab)</li>
        <li type="square">API web con ASP.NET Core</li>
        <li type="square">Lenguaje SQL</li>
      </ul>
    </div>
    );   
}

function FormSection() {
  return (
    <div className="FormSection">
      <h4>FORMULARIO DE CONTACTO</h4>
      <hr></hr>
      <form>
        <div class="sm-1">
          <label class="form-label" for="form4Example1">Nombre</label>
          <input type="text" id="form4Example1" class="form-control" />
        </div>
        <div class="sm-1">
          <label class="form-label" for="form4Example2">Correo Electrónico</label>
          <input type="email" id="form4Example2" class="form-control" />
        </div>
        <div class="sm-1">
          <label class="form-label" for="form4Example3">Mensaje</label>
          <textarea class="form-control" id="form4Example3" rows="4"></textarea>
        </div>
        <div class="form-check d-flex justify-content-center mb-4">
        <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
        <label class="form-check-label" for="form4Example4">
          Enviarme una copia de este mensaje
        </label>
      </div>
      <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
      </form>

    </div>
    );   
}


function App() {
  return (
    <div className="App">
      <div className='SectionLeft'>
        <TitleSection></TitleSection>
        <ProfileSection></ProfileSection>
        <EducationSection></EducationSection>
        <ExperienceSection></ExperienceSection>
      </div>
      <div className='SectionRigth'>
        <ImageSection></ImageSection>
        <ContactSection></ContactSection>
        <InterestsSection></InterestsSection>
        <SkillsSection></SkillsSection>
        <FormSection></FormSection>
      </div>
    </div>
  );
}

export default App;
