import { Carousel } from "react-bootstrap";
import ExampleCarouselImage from "./ExampleCarouselImage";

function Carrousel() {
    return (
        <Carousel fade>
            {" "}
            {/* El efecto fade suele verse más elegante en móvil */}
            <Carousel.Item interval={2000}>
                <img
                    className="d-block custom-carousel-img"
                    src="/img/ban1.png"
                    alt="First slide"
                />
                <Carousel.Caption>{/* Tus textos */}</Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block custom-carousel-img"
                    src="/img/ban2.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block custom-carousel-img"
                    src="/img/ban3.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel;
