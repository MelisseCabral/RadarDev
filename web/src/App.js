import React, {useEffect, useState} from 'react';

import DevItem from './Components/DevItem/index'

import api from './services/api';

import './global.css'; 
import './App.css'; 
import './Sidebar.css'; 
import './Main.css'; 

function App() {

  const [devs, setDevs] = useState([]);

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);

      }, (err) => {
        console.log(err)
      },
      {
        timeout: 30000
      });
  }, []);

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('devs');

      setDevs(response.data);
    }

    loadDevs();
  }, [devs ])

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });
    setGithubUsername('');
    setTechs('');
    setDevs([...devs, response.data]);
  }

  return (
     <div id='app'>  
        <aside>
          <strong>Cadastrar</strong>
          <form onSubmit={handleAddDev}>
            <div className='input-block'>   
              <label htmlFor="github_username">Github Username</label>
              <input 
                name="github_username" 
                id="github_username" 
                value={github_username}
                onChange={e => setGithubUsername(e.target.value) }
                required 
              />
            </div>
            
            <div className='input-block'>   
              <label htmlFor="techs">Tecnologias</label>
              <input 
                name="techs" 
                id="techs" 
                value={techs}
                onChange={e => setTechs(e.target.value)}
                required 
              />
            </div>

            <div className="input-group">
              <div className='input-block'>   
                <label htmlFor="latitude">Latitude</label>
                <input 
                  type='number' 
                  name="latitude" 
                  id="latitude" 
                  required 
                  value={latitude}
                  onChange={e => setLatitude(e.target.value)}
                />
              </div>

              <div className='input-block'>   
                <label htmlFor="longitude">Longitude</label>
                <input 
                  type='number' 
                  name="longitude" 
                  id="longitude" 
                  required 
                  value={longitude}
                  onChange={e => setLongitude(e.target.value)}
                />
              </div>
              
            </div>
            <button type="submit">
              Salvar
            </button>
            
          </form>
        </aside>
        <main>
          <ul>
            {
              devs.map(dev => (
                <DevItem key={dev._id} dev={dev} />
                )
              ) 
            }
             
          </ul>
        </main>
     </div>
  );
}

export default App;
