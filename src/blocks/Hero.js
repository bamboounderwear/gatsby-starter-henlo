import classNames from 'classnames';
import React from 'react';
import Buttons from '../components/UI/Buttons';
import Container from '../components/UI/Container';
import Text from '../components/UI/Text';

export default function Hero({ data }) {
  const isCentered = data?.variant === 'centered';
  const isFull = data?.variant === 'full';
  return (
    <section
      className={classNames(
        'py-12 dark:bg-black dark:text-white lg:py-24',
        {
          'flex min-h-screen items-center': isFull,
        },
        {
          'flex justify-center py-20 text-center lg:py-44': isCentered,
        },
      )}>
      <Container>
        {data?.title && (
          <h1
            className={classNames('mb-4 text-4xl font-bold md:text-6xl', {
              'mx-auto': isCentered,
            })}>
            {data?.title}
          </h1>
        )}
        <Text className={classNames('text-lg', { 'mx-auto': isCentered })}>
          {data?.content}
        </Text>
        {data?.buttons && (
          <Buttons
            buttons={data?.buttons}
            className={classNames('mt-6', { 'justify-center': isCentered })}
          />
        )}
      </Container>
    </section>
  );
}