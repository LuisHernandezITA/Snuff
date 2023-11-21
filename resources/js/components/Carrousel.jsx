import { Carousel } from "react-bootstrap";
import ExampleCarouselImage from "./ExampleCarouselImage";

function Carrousel() {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <ExampleCarouselImage
                    text="First slide"
                    image="/img/ban1.png"
                />
                <Carousel.Caption className="text-dark">
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <ExampleCarouselImage
                    text="Second slide"
                    image="/img/ban2.png"
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <ExampleCarouselImage
                    text="Third slide"
                    image="/img/ban3.png"
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel;
