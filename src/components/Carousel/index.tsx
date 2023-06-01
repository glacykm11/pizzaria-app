import * as React from "react";
import styled, { css } from "styled-components";

interface ICarouselSlide {
  active?: boolean;
}

interface ICarouselProps {
  currentSlide: number;
}

interface IProps {
  children: JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const activeSlide = children.map((slide, index) => (
    <SCarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));

  return (
    <SCarousel>
      <SCarouselWrapper>
        <SCarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </SCarouselSlides>

      </SCarouselWrapper>
      <LeftArrow src="/assets/icons/arrow-left.svg" onClick={() => {
        setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
      }} />
      <RightArrow src="/assets/icons/arrow-right.svg" onClick={() => {
        setCurrentSlide((currentSlide + 1) % activeSlide.length);
      }} />
    </SCarousel>
  );
};

const SCarousel = styled.div`
    position: relative;
`

const SCarouselSlides = styled.div<ICarouselProps>`
  display: flex;
  ${props =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 8}%);
    `};
  transition: all 0.5s ease;
`;

const SCarouselSlide = styled.div<ICarouselSlide>`
  margin-left: 12px;
  flex: 0 0 auto;
  opacity: ${props => (props.active ? 1 : 0.5)};
  border: ${props => (props.active ? '2px solid red' : 'none')};
  border-radius: 8px;
  transition: all 0.5s ease;
`;

const SCarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const LeftArrow = styled.img`
  position: absolute;
  top: 45%;
  left: 0;
  opacity: 0.3;
  cursor: pointer;

  :hover {
    opacity: 1;
    transition: all 0.5s ease-out;
  }
`

const RightArrow = styled.img`
  position: absolute;
  top: 45%;
  right: 0;
  opacity: 0.3;
  cursor: pointer;

  :hover {
    opacity: 1;
    transition: all 0.5s ease-out;
  }
`

export default Carousel;