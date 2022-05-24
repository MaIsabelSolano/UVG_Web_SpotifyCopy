import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <div className="arriba">
          <nav className="navbar-iz">
            <div className="navbar-iz-arriba">
              <div>
                <div><p>Home</p></div>
                <div><p>Search</p></div>
                <div><p>Your Library</p></div>
              </div>
              <div>
                <div><p>Create Playlist</p></div>
                <div><p>Liked Songs</p></div>
              </div>
            </div>
            <div className="navbar-iz-abajo">
              <p>love</p>
              <p>Kooji</p>
              <p>Ex favs</p>
              <p>Carne</p>
              <p>Vocaloid</p>
              <p>Solo Anime</p>
              <p>Real Alt</p>
              <p>Only English</p>
              <p>Buenas</p>
              <p>Bare A Pop Opera</p>
              <p>Asian stuff</p>
              <p>Canciones N/M</p>
              <p>La hora sad :c</p>
              <p>Instrumental</p>
              <p>Favs</p>
            </div>
          </nav>
          <div className="app-derecha">
            <div className="app-derecha-top-bar">
              <div>
                <button>
                  <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 jgfuCe IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24">
                    <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
                  </svg>
                </button>
                <button>
                <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 jgfuCe IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24">
                  <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
                </svg>
                </button>
              </div>
              <div>
                <button>Upgrade</button>
                <button>User</button>
              </div>
            </div>
          </div>
        </div>
        <div className="reproductor">
        </div>
      </header>
    </div>
  )
}

export default App
