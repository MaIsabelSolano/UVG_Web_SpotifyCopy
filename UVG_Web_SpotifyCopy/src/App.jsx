import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [showPlaylist, setShowplaylist] = useState(true)

  const puntitos = () => {
    return(
      <div>
        <div className="tres-puntos2">
          <svg role="img" height="32" width="32" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 jgfuCe">
            <path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
        </div>
      </div>
    )
  }

  const corazon = () => {
    return (
      <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe">
        <path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path>
      </svg>
    )
  }

  const btnplay = () => {
    return (
      <span aria-hidden="true" class="IconWrapper__Wrapper-sc-1hf1hjl-0 dZGDpi">
        <svg role="img" height="28" width="28" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 jgfuCe"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
      </span>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="arriba">
          <nav className="navbar-iz">
            <div className="navbar-iz-arriba">
              <div  className='logo'>
                <a aria-current="page">
                  <svg viewBox="0 0 1134 340" class="spotify-logo--text">
                    <title>Spotify</title>
                    <path fill="currentColor" d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"></path>
                  </svg>
                </a>
              </div>
              <div className="navbar-iz-arriba-mid">
                <a className="navbar-iz-arriba-a">
                  <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 jgfuCe home-icon" viewBox="0 0 24 24">
                    <path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path>
                  </svg>
                  <p>Home</p>
                </a>
                <a className="navbar-iz-arriba-a">
                  <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 jgfuCe search-icon" viewBox="0 0 24 24">
                    <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                  </svg>
                  <p>Search</p>
                </a>
                <a className="navbar-iz-arriba-a">
                  <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 jgfuCe collection-icon" viewBox="0 0 24 24">
                    <path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path>
                  </svg>
                  <p>Your Library</p>
                </a>
              </div>
              <div>
                <a className="navbar-iz-arriba-a">
                  <div className="cuadrito-pl">
                    <svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe">
                      <path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path>
                    </svg>
                  </div>
                  <p>Create Playlist</p>
                </a>
                <a className="navbar-iz-arriba-a">
                  <div className="cuadrito-likes">
                    <svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe">
                      <path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path>
                      </svg>
                  </div>
                  <p>Liked Songs</p>
                </a>
              </div>
            </div>
            <hr></hr>
            <div className="navbar-iz-abajo">
              <p>love</p>
              <p>IGM Dawn & Dusk CHILL Cow...</p>
              <p>IGM Dawn & Dusk HYPE Cow...</p>
              <p>Kooji</p>
              <p>Ex favs</p>
              <p>Carne</p>
              <p>⭐ Vocaloid ⭐</p>
              <p>✨Solo Anime🎴</p>
              <p>💫Real Alt🌵</p>
              <p>💫☀Only English☀💫</p>
              <p>✨✌🏽Buenas✌🏽✨</p>
              <p>Bare A Pop Opera</p>
              <p>✨🇯🇵Asian stuff🇰🇷✨</p>
              <p>👽Canciones N/M👽</p>
              <p>La hora sad :c</p>
              <p>🌸Instrumental</p>
              <p>✨💕Favs💕✨</p>
            </div>
          </nav>
          <div className="app-derecha">
            <div className="app-derecha-top-bar">
              <div>
                <button className="btn-regreso">
                  <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 jgfuCe IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24">
                    <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
                  </svg>
                </button>
                <button className="btn-regreso">
                <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 jgfuCe IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24">
                  <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
                </svg>
                </button>
              </div>
              <div>{() => {showPlaylist? <p>Favs</p>:<p></p>}}</div>
              <div className="btn-top-derecha">
                <button className="btn-upgrade">Upgrade</button>
                <button className="btn-user">
                  <img src="/src/cheems.jpg"></img>
                  Michy_solano27
                  <svg role="img" height="16" width="16" class="Svg-sc-1bi12j5-0 jgfuCe eAXFT6yvz37fvS1lmt6k" viewBox="0 0 16 16">
                    <path d="M14 6l-6 6-6-6h12z"></path>
                  </svg>
                  </button>
              </div>
            </div>
            <div className="app-derecha-todo">
              <div className="app-derecha-sec-titulo">
                <div className="cover">
                  <img src="/src/portada.png" className="cover-playlist"></img>
                </div>
                <div className="app-derecha-sec-titulo-infoplaylist">
                  <p className="playlist">PLAYLIST</p>
                  <h1 className="titulo-favs">✨💕Favs💕✨</h1>
                  <p className="me-encantan opaque"> Me encantan♥</p>
                  <div className="infoplaylist-abajo">
                    <p className="bold">Michy_solano27</p>
                    <p> • 42 songs, </p>
                    <p className="opaque">2 hr 38 min</p>
                  </div>
                </div>
              </div>
              <div className="app-derecha-parte-abajo">
                <div className="app-derecha-rep">
                  <div className="play">
                    {btnplay()}
                  </div>
                  <div className="tres-puntos">
                    <svg role="img" height="32" width="32" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 jgfuCe">
                      <path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                  </div>
                </div>
                <div className="app-derecha-canciones">
                  <span className="cancion">
                    <div>#</div>
                    <div className="opaque">TITLE</div>
                    <div className="opaque">ALBUM</div>
                    <div className="opaque">DATE ADDED</div>
                    <div></div>
                    <div className="relojito">
                      <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe">
                        <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path>
                        <path d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"></path>
                      </svg>
                    </div>
                  </span>
                  <hr></hr>
                  <span className="cancion">
                    <div>1</div>
                    <span className="foto-info">
                      <img src="/src/Albumes/1Scripted.jpg" className="fotita-album"></img>
                      <div>
                        <h3>Pieces</h3>
                        <p className="opaque">Icon For Hire</p>
                      </div>
                    </span>
                    <div className="opaque">Scripted</div>
                    <div className="opaque">Oct 1, 2017</div>
                    <div className="verde">{corazon()}</div>
                    <div className="opaque">3:54</div>
                    <div>{puntitos()}</div>
                  </span>
                  <span className="cancion">
                    <div>2</div>
                    <span className="foto-info">
                      <img src="/src/Albumes/2cactus.jpg" className="fotita-album"></img>
                      <div>
                        <h3>CACTUS</h3>
                        <p className="opaque">A.C.E</p>
                      </div>
                    </span>
                    <div className="opaque">CACTUS</div>
                    <div className="opaque">Nov 24, 2017</div>
                    <div className="verde">{corazon()}</div>
                    <div className="opaque">3:21</div>
                    <div>{puntitos()}</div>
                  </span>
                  <span className="cancion">
                    <div>3</div>
                    <span className="foto-info">
                      <img src="/src/Albumes/3Loveyourself.jpg" className="fotita-album"></img>
                      <div>
                        <h3>Pied Piper</h3>
                        <p className="opaque">BTS</p>
                      </div>
                    </span>
                    <div className="opaque">Love Yourself 承 'Her'</div>
                    <div className="opaque">Jan 13, 2018</div>
                    <div className="verde">{corazon()}</div>
                    <div className="opaque">4:05</div>
                    <div>{puntitos()}</div>
                  </span>
                  <span className="cancion">
                    <div>4</div>
                    <span className="foto-info">
                      <img src="/src/Albumes/4deadrose.jpg" className="fotita-album"></img>
                      <div>
                        <h3>deadroses</h3>
                        <p className="opaque">blackbear</p>
                      </div>
                    </span>
                    <div className="opaque">deadroses</div>
                    <div className="opaque">Jul 28, 2018</div>
                    <div className="verde">{corazon()}</div>
                    <div className="opaque">3:04</div>
                    <div>{puntitos()}</div>
                  </span>
                  <span className="cancion">
                    <div>5</div>
                    <span className="foto-info">
                      <img src="/src/Albumes/5bunka.jpg" className="fotita-album"></img>
                      <div>
                        <h3>Nonsense Bungaku</h3>
                        <p className="opaque">Eve</p>
                      </div>
                    </span>
                    <div className="opaque">Bunka</div>
                    <div className="opaque">Sep 26, 2018</div>
                    <div className="verde">{corazon()}</div>
                    <div className="opaque">3:23</div>
                    <div>{puntitos()}</div>
                  </span>
                  <span className="cancion">
                    <div>6</div>
                    <span className="foto-info">
                      <img src="/src/Albumes/6glory.jpg" className="fotita-album"></img>
                      <div>
                        <h3>Cautionary Tales</h3>
                        <p className="opaque">Jon Bellion</p>
                      </div>
                    </span>
                    <div className="opaque">Glory Sound Prep</div>
                    <div className="opaque">Jan 31, 2019</div>
                    <div className="verde">{corazon()}</div>
                    <div className="opaque">3:47</div>
                    <div>{puntitos()}</div>
                  </span>
                  <span className="cancion">
                    <div>7</div>
                    <span className="foto-info">
                      <img src="/src/Albumes/s.jpg" className="fotita-album"></img>
                      <div>
                        <h3>Youth (feat.Khalid)</h3>
                        <p className="opaque">Shawn Mendes, Khalid</p>
                      </div>
                    </span>
                    <div className="opaque">Shawn Mendes</div>
                    <div className="opaque">Feb 3, 2019</div>
                    <div className="verde">{corazon()}</div>
                    <div className="opaque">3:10</div>
                    <div>{puntitos()}</div>
                  </span>
                  <span className="cancion">
                    <div>8</div>
                    <span className="foto-info">
                      <img src="/src/Albumes/8adventure.jpg" className="fotita-album"></img>
                      <div>
                        <h3>La Lune (feat. Dan Smith)</h3>
                        <p className="opaque">Madeon, Dan Smith</p>
                      </div>
                    </span>
                    <div className="opaque">Adventure(Deluxe)</div>
                    <div className="opaque">Mar 2, 2019</div>
                    <div className="verde">{corazon()}</div>
                    <div className="opaque">3:39</div>
                    <div>{puntitos()}</div>
                  </span>
                  <span className="cancion">
                    <div>9</div>
                    <span className="foto-info">
                      <img src="/src/Albumes/9Otogi.jpg" className="fotita-album"></img>
                      <div>
                        <h3>Last Dance</h3>
                        <p className="opaque">eve</p>
                      </div>
                    </span>
                    <div className="opaque">Otogi</div>
                    <div className="opaque">Mar 7, 2019</div>
                    <div className="verde">{corazon()}</div>
                    <div className="opaque">4:00</div>
                    <div>{puntitos()}</div>
                  </span>
                  <span className="cancion">
                    <div>10</div>
                    <span className="foto-info">
                      <img src="/src/Albumes/10moss.jpg" className="fotita-album"></img>
                      <div>
                        <h3>The Moss</h3>
                        <p className="opaque">Cosmo Seldrake</p>
                      </div>
                    </span>
                    <div className="opaque">The Moss</div>
                    <div className="opaque">May 29, 2019</div>
                    <div className="verde">{corazon()}</div>
                    <div className="opaque">4:02</div>
                    <div>{puntitos()}</div>
                  </span>
                  <span className="cancion">
                    <div>11</div>
                    <span className="foto-info">
                      <img src="/src/Albumes/11undercover.jpg" className="fotita-album"></img>
                      <div>
                        <h3>Under Cover</h3>
                        <p className="opaque">A.C.E</p>
                      </div>
                    </span>
                    <div className="opaque">Under Cover</div>
                    <div className="opaque">May 29, 2019</div>
                    <div className="verde">{corazon()}</div>
                    <div className="opaque">3:46</div>
                    <div>{puntitos()}</div>
                  </span>
                  <span className="cancion">
                    <div>12</div>
                    <span className="foto-info">
                      <img src="/src/Albumes/12lost.jpg" className="fotita-album"></img>
                      <div>
                        <h3>ロストワンの号哭</h3>
                        <p className="opaque">Neru</p>
                      </div>
                    </span>
                    <div className="opaque">Kagaminext feat. 鏡音リ...</div>
                    <div className="opaque">May 29, 2019</div>
                    <div className="verde">{corazon()}</div>
                    <div className="opaque">3:34</div>
                    <div>{puntitos()}</div>
                  </span>
                  <span className="cancion">
                    <div>13</div>
                    <span className="foto-info">
                      <img src="/src/Albumes/13stop.jpg" className="fotita-album"></img>
                      <div>
                        <h3>Stop The Rain</h3>
                        <p className="opaque">Day 6</p>
                      </div>
                    </span>
                    <div className="opaque">Stop The Rain</div>
                    <div className="opaque">Jul 14, 2019</div>
                    <div className="verde">{corazon()}</div>
                    <div className="opaque">4:40</div>
                    <div>{puntitos()}</div>
                  </span>
                  <span className="cancion">
                    <div>14</div>
                    <span className="foto-info">
                      <img src="/src/Albumes/14sex.jpg" className="fotita-album"></img>
                      <div>
                        <h3>sex</h3>
                        <p className="opaque">EDEN</p>
                      </div>
                    </span>
                    <div className="opaque">I think you think too much of me</div>
                    <div className="opaque">Aug 30, 2019</div>
                    <div className="verde">{corazon()}</div>
                    <div className="opaque">3:38</div>
                    <div>{puntitos()}</div>
                  </span>
                  <span className="cancion">
                    <div>15</div>
                    <span className="foto-info">
                      <img src="/src/Albumes/15beon.jpg" className="fotita-album"></img>
                      <div>
                        <h3>Every Day</h3>
                        <p className="opaque">bo en</p>
                      </div>
                    </span>
                    <div className="opaque">Pale Machine</div>
                    <div className="opaque">Sep 4, 2019</div>
                    <div className="verde">{corazon()}</div>
                    <div className="opaque">2:32</div>
                    <div>{puntitos()}</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reproductor">
          <div className="rep-iz">
            <img src="/src/eve.jpg"></img>
            <div className="rep-info">
              <p>Nonsense Bungaku</p>
              <p>Eve</p>
            </div>
            <button className="verde">
              {corazon()}
            </button>
            <button>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" fill-rule="nonzero"></path><path d="M10 8h4v3h-4z"></path>
              </svg>
            </button>
          </div>
          <div className="rep-mid">
            <div className="player-control">
              <button className="btn-player-control">
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe">
                  <path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path><path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path>
                </svg>
              </button>
              <button className="btn-player-control">
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe">
                  <path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"></path>
                </svg>
              </button>
              <button className="btn-play-control">{btnplay()}</button>
              <button className="btn-player-control">
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe">
                  <path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path>
                </svg>
              </button>
              <button className="btn-player-control">
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe">
                  <path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path>
                </svg>
              </button>
            </div>
            <div className="player-control">
              <div>0:00</div>
              <hr className="barraplay"></hr>
              <div>3:23</div>
            </div>
          </div>
          <div className="rep-der">
            <button className="btn-player-control">
              <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe">
                <path d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 114.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 01-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
              </svg>
            </button>
            <button className="btn-player-control">
              <span aria-hidden="true" class="IconWrapper__Wrapper-sc-16usrgb-0 bxwPwV">
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe">
                  <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path>
                  </svg>
              </span>
            </button>
            <button className="btn-player-control">
              <svg role="img" height="16" width="16" class="Svg-sc-1bi12j5-0 jgfuCe" aria-label="Connect to a device" viewBox="0 0 16 16">
                <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path><path d="M13 10a2 2 0 11-4 0 2 2 0 014 0zm-1-5a1 1 0 11-2 0 1 1 0 012 0z"></path>
              </svg>
            </button>
            <button className="btn-player-control">
              <svg role="presentation" height="16" width="16" aria-label="Volume high" id="volume-icon" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe">
                <path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path>
              </svg>
            </button>
            <div></div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
