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
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <ExampleCarouselImage
                    text="Second slide"
                    image="/img/ban2.png"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <ExampleCarouselImage
                    text="Third slide"
                    image="/img/ban3.png"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel;
