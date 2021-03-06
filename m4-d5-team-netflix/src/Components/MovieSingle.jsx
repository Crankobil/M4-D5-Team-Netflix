import { Component } from "react";
import { Card } from "react-bootstrap";
// import poster from "../data/pic3.png";


class MovieSingle extends Component {

  state = {
    slected: false
  }
  render() {
    return (
      <>
        <div className='d-flex flex-column align-items-center m-3 justify-content-center'>

          <div>
            <Card key={this.props.movieObj.imdbID} onClick={() => this.setState({ selected: !this.state.selected })}
              style={{ border: this.state.selected ? '3px solid red' : 'none' }}>
              <a href="#Home">
                <img
                  src={this.props.movieObj.Poster}
                  alt=""
                  className="img-fluid w-100"
                />
              </a>
            </Card>
          </div>

        </div>


      </>);
  }
}

export default MovieSingle;