import { PropsWithChildren } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

interface Props extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export type HeadingProps = Props;

export const Heading = (props: Props) => {
  const { size = 'md', asChild, children } = props;

  const Comp = asChild ? Slot : 'h2';

  const classNames = clsx('text-gray-100 font-bold font-sans', {
    'text-lg': size === 'sm',
    'text-xl': size === 'md',
    'text-2xl': size === 'lg',
  });

  return <Comp className={classNames}>{children}</Comp>;
};
