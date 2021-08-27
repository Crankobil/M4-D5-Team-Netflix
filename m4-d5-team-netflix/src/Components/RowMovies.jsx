import { Component } from "react";
import { Container, Row , Col} from "react-bootstrap";
import MovieSingle from './MovieSingle';

class RowMovies extends Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=cddb8faf&s=" + this.props.rowQuery
      );
      let moviesArray = await response.json();
      this.setState({
        movies: moviesArray.Search.slice(0, 5),
      });
      console.log(this.state.movies);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
        <Container className="container-fluid mb-4">
        <h4 className="nav-text">{this.props.rowTitle}</h4>
          <Row lg="6">
          {this.state.movies.map((movie) => (<MovieSingle movieObj={movie} />))}
            <Col ></Col>
          </Row>
        </Container>
    );
  }
}

export default RowMovies;


