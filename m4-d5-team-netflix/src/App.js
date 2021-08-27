
import './App.css';
import MyNavbar from './Components/MyNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import RowMovies from './Components/RowMovies'
import MyFooter from './Components/MyFooter';





function App() {
  return (
    <div className='App'>
    <div className="body-div">
      <MyNavbar />
      <RowMovies rowTitle="Matrix" rowQuery="matrix" />
      <RowMovies rowTitle="HarryPotter" rowQuery="harry%20potter" />
      <RowMovies rowTitle="Mission Impossible" rowQuery="mission+impossible" />
      <MyFooter/>
      
    </div>

    </div>
  )
}

export default App;
