import React, {useEffect} from 'react';

import './global.css'; 
import './App.css'; 
import './Sidebar.css'; 
import './Main.css'; 

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {

      }, (err) => {
        console.log(err)
      },
      {
        timeout
      });
  }, []);

  return (
     <div id='app'>  
        <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className='input-block'>   
              <label htmlFor="github_username">Github Username</label>
              <input name="github_username" id="github_username" required />
            </div>
            
            <div className='input-block'>   
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required />
            </div>

            <div className="input-group">
              <div className='input-block'>   
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required />
              </div>

              <div className='input-block'>   
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required />
              </div>
              
            </div>
            <button type="submit">
              Salvar
            </button>
            
          </form>
        </aside>
        <main>
          <ul>
            <li className="dev-item">
              <header>
                <img alt="" src="https://avatars3.githubusercontent.com/u/9977351?s=460&u=047a49f140b19181e4c01eca36e1e359b0da36fc&v=4"/>
                <div className="user-info">
                  <strong>Melisse Cabral</strong>
                  <span>ReactJS, ReactNative, NodeJS</span>
                </div>
              </header>
              <p>
                Desenvolvedora Web Fullstack
              </p>
              <a href="https://github.com/melissecabral">Acessar Perfil do Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img alt="" src="https://avatars3.githubusercontent.com/u/9977351?s=460&u=047a49f140b19181e4c01eca36e1e359b0da36fc&v=4"/>
                <div className="user-info">
                  <strong>Melisse Cabral</strong>
                  <span>ReactJS, ReactNative, NodeJS</span>
                </div>
              </header>
              <p>
                Desenvolvedora Web Fullstack
              </p>
              <a href="https://github.com/melissecabral">Acessar Perfil do Github</a>
            </li>

          </ul>
        </main>
     </div>
  );
}

export default App;
