
import './App.css';
import MyNavbar from './Components/MyNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import RowMovies from './Components/RowMovies'




function App() {
  return (
    <div className='App'>
    <div >
      <MyNavbar />
      <RowMovies rowTitle="Matrix" rowQuery="matrix" />
      <RowMovies rowTitle="HarryPotter" rowQuery="harry%20potter" />
      <RowMovies rowTitle="Mission Impossible" rowQuery="mission+impossible" />
     
      
    </div>

    </div>
  )
}

export default App;
