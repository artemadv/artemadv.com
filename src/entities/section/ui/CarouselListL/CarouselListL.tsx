'use client';

import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SectionExtended } from '../../model/types';

import { Container } from '@/shared/ui';
import { createStyleFromNodeFields } from '@/shared/lib';

import 'swiper/css';
import styles from './CarouselListL.module.css';

export const CarouselListL: FC<SectionExtended> = (props) => {
    const { nodes, mainSlot: CarouselItem } = props;
    const style = createStyleFromNodeFields(props);

    return (
        <div style={style} className={styles.carousel}>
            <Container>
                <Swiper
                    className={styles.carousel__swiper}
                    spaceBetween={20}
                    grabCursor
                    breakpoints={{
                        576: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 'auto',
                        },
                    }}
                >
                    {nodes?.map((node) => (
                        <SwiperSlide key={node.id} className={styles.carousel__slide}>
                            {CarouselItem && (
                                <CarouselItem {...node} className={styles.carousel__item} />
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
};
