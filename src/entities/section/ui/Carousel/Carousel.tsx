'use client';

import React, { FC, Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SectionExtended } from '../../model/types';

import { Container } from '@/shared/ui';

import 'swiper/css';

export const Carousel: FC<SectionExtended> = (props) => {
    const { style, nodes, mainSlot } = props;
    const CarouselItem = mainSlot ?? Fragment;

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
                            <CarouselItem {...node} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
};
