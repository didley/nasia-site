import './App.css'
import screenshot1 from './assets/screenshot1.jpg'
import screenshot2 from './assets/screenshot2.jpg'
import screenshot3 from './assets/screenshot3.jpg'


function App() {
  return (
    <>
      <h1>Nasia</h1>
      <h2>Minimal workout tracker</h2>
      <p><a href="mailto:nasia@didley.dev">Email support</a></p>
      <img src={screenshot1} className='img' />
      <img src={screenshot2} className='img' />
      <img src={screenshot3} className='img' />
    </>
  )
}

export default App
