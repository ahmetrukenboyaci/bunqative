/** Dependencies */
import React, { FC } from 'react';
import Slider from 'react-slick';

/** Types */
import { GroupSliderProps } from './GroupSlider.types';

/** Components */
import Group from '../Group/Group'

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
        {groups && groups.map(group => (
          <Group
            key={group.id}
            id={group.id}
            name={group.name}
          />
        ))}
      </Slider>
    </S.Wrapper>
  );
};

export default GroupSlider;
