import { Component } from "react";
import { Alert, Col, Container, Row, Card } from "react-bootstrap";

class Gallery extends Component {
  state = {
    movies: [],
    hasError: false,
    errorMessage: "",
    searchQuery: "",
  };

  fetchMovies = async () => {
    try {
      // const response = await fetch(`http://www.omdbapi.com/?apikey=85b2561c&s=Harry%20Potter`);
      //come faccio a rendere gallery riutilizzabile se devo passare tutto il titolo per trovare l'array???
      const response = await fetch(`https://www.omdbapi.com/?apikey=85b2561c&s=${this.props.query}`);

      if (response.ok) {
        const data = await response.json();
        this.setState({ movies: data.Search });
      } else {
        throw new Error("Error loading movies");
      }
    } catch (error) {
      this.setState({ hasError: true, errorMessage: error.message });
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <Container fluid className="mb-3">
        <h4>{this.props.title}</h4>
        {this.state.hasError && <Alert variant="danger">Error: {this.state.errorMessage}</Alert>}

        <Row xs={1} sm={2} lg={4} xl={6} className="g-4">
          {this.state.movies
            .filter((movie) => movie.Title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
            .map((movie) => (
              <Col key={movie.imdbID} className=" text-center">
                <Card>
                  <Card.Img variant="top" src={movie.Poster} className="card-img img-fluid" />
                </Card>
              </Col>
            ))}{" "}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
