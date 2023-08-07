/** Dependencies */
import React, { FC } from 'react';
import Slider from 'react-slick';

/** Types */
import { GroupSliderProps } from './GroupSlider.types';

/** Styles */
import * as S from './GroupSlider.styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GroupSlider: FC<GroupSliderProps> = ({ groups }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <S.Wrapper>
      <Slider {...settings}>
        {groups}
      </Slider>
    </S.Wrapper>
  );
};

export default GroupSlider;
