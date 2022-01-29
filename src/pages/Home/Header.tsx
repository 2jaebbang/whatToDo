import styled, { css } from "styled-components";
import { maxWidth } from "styles/mixin";
import { useMediaQuery } from "react-responsive";
import fonts from "styles/fonts";
import leftButton from "resources/images/swipeLeft.png";
import rightButton from "resources/images/swipeRight.png";
import line from "resources/images/line.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

interface ISwipe {
  content: string;
  image: string;
}

const SwipeContents: ISwipe[] = [
  {
    content: `오늘 \n뭐 배우지`,
    image: "resources/images/homeHeaderImage.png",
  },
  {
    content: `다음엔 \n이걸 배워볼까`,
    image: "resources/images/homeHeaderImage2.jpeg",
  },
  {
    content: `배우고 싶은게 \n너무 많아`,
    image: "resources/images/homeHeaderImage3.png",
  },
];

export const Header = () => {
  SwiperCore.use([Autoplay, Navigation]);
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  return (
    <Container
      bgImg={require("resources/images/homeHeaderBackground.jpg")}
      isMobile={isMobile}
    >
      <div className="header-content">
        <Swiper
          loop={true}
          navigation={{
            nextEl: ".swiper-navigation-next",
            prevEl: ".swiper-navigation-prev",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {SwipeContents.map((contents, index) => (
            <SwiperSlide key={index}>
              <div className="header-text">{contents.content}</div>
              <div
                className="header-img"
                style={{
                  backgroundImage: `url(${require("resources/images/homeHeaderImage2.jpeg")})`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {!isMobile ? (
        <SwipeButton>
          <img src={line} className="line" />
          <button type="button" className="swiper-navigation-prev">
            <img src={leftButton} />
          </button>
          <button type="button" className="swiper-navigation-next">
            <img src={rightButton} />
          </button>
        </SwipeButton>
      ) : (
        <></>
      )}
    </Container>
  );
};

const Container = styled.header<{ bgImg: string; isMobile: boolean }>`
  background-image: url(${(props) => props.bgImg});
  padding: 104px 16px 56px;
  box-sizing: border-box;
  margin-bottom: 56px;
  .header-content {
    ${maxWidth}
    ${(props) =>
      !props.isMobile &&
      css`
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      `}
  }
  .header-text {
    flex: 1;
    white-space: pre-line;
    color: #ffffff;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    ${(props) =>
      props.isMobile &&
      css`
        ${fonts.H2}
        padding-bottom: 18px;
      `}
  }
  .header-img {
    flex: 2;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    height: ${(props) => (props.isMobile ? "180px" : "400px")};
  }

  .swiper-slide {
    display: ${(props) => (props.isMobile ? "" : "flex")};
    flex-direction: row;
    align-items: flex-end;
    background-position: center;
    background-size: cover;
  }
`;

const SwipeButton = styled.div`
  ${maxWidth}
  display: flex;
  .line {
    width: 230px;
    height: 1px;
    align-self: center;
  }
  .swiper-navigation-prev,
  .swiper-navigation-next {
    background-color: transparent;
    border: none;
    width: 32px;
    height: 32px;
    color: white;
  }
`;
