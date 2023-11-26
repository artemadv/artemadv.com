'use client';

import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Section } from '../../model/types';

import { PortfolioItem } from './PortfolioItem';

import { Container } from '@/shared/ui';

import 'swiper/css';

export const Portfolio: FC<Section> = (props) => {
    const { style, nodes } = props;

    return (
        <div style={style}>
            <Container>
                <Swiper
                    spaceBetween={50}
                    slidesPerView="auto"
                    // breakpoints={{
                    //     576: {
                    //         slidesPerView: 1,
                    //     },
                    //     768: {
                    //         slidesPerView: 2,
                    //     },
                    //     992: {
                    //         slidesPerView: 3,
                    //     },
                    // }}
                >
                    {nodes?.map((node) => (
                        <SwiperSlide key={node.id}>
                            <PortfolioItem {...node} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
};
