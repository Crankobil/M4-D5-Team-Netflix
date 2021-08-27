import { Component } from "react";
import { Container, Row , Col} from "react-bootstrap";
import MovieSingle from './MovieSingle';

class MoviesRow extends Component {
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
          <Row xs lg="6">
          {this.state.movies.map((movie) => (<MovieSingle movieObj={movie} />))}
            <Col ></Col>
          </Row>
        </Container>
    );
  }
}

export default MoviesRow;

/*
<Container className="container-fluid mb-4">
<h2 className="nav-text">{this.props.rowTitle}</h2>
<Row className="row no-gutter row-cols-1 row-cols-sm-2row-cols-md-3 row-cols-lg-6">
  {this.state.movies.map((movie) => (<MovieSingle movieObj={movie} />))}
</Row>
</Container>
*/
