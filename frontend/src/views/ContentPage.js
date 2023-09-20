import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { SearchBar } from "components/Searchbar/SearchBar";
import { SearchResult } from "components/Searchbar/SearchResult";

//import 'bootstrap/dist/css/bootstrap.min.css';
//import useFetch from "hooks/useFetch";





//http://localhost:1337/api/Attractions?populate=*


function ContentPage(){

  const[attractions, setAttractions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/Attractions?populate=*")
      .then(res => res.json())
      .then(
        (result) => {
          setAttractions(result.data);
        },
      )
  }, [])

    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
          document.body.classList.remove("index-page");
          document.body.classList.remove("sidebar-collapse");
        };
      }); 

      /*const{data, loading, error} = useFetch(
        "http://localhost:1337/api/Attractions?populate=*");

      if(loading) return <h1>Loading</h1>

      if (error) console.log(error)*/

      return(
        <>
            <IndexNavbar />
            
            
            <Container>
              <Row>
                {attractions.map(attraction => (
                <Col sm={4} key={attraction.id}>
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" src={"http://localhost:1337" +attraction.attributes.cover_image.data.attributes.url} />
                  <Card.Body>
                    <Card.Title>{attraction.attributes.title}</Card.Title>
                    <Card.Text>
                    {attraction.attributes.details}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </Col>
                ))}
              </Row>
            </Container>
            <SearchBar/>
            <SearchResult/>
            <SearchResult/>
        </>
        
      );
}

export default ContentPage;

/*
<>
            <IndexNavbar />
            <Container>
              <Row>
                {attractions.map(attraction => (
                <Col sm={4} key={attraction.id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{attraction.attributes.title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </Col>
                ))}
              </Row>
            </Container>
        </>
        */