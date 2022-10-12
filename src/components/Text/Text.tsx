import { PropsWithChildren } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

interface Props extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export type TextProps = Props;

export const Text = (props: Props) => {
  const { size = 'md', asChild, children } = props;

  const Comp = asChild ? Slot : 'span';

  const classNames = clsx('text-gray-100 font-sans', {
    'text-xs': size === 'sm',
    'text-sm': size === 'md',
    'text-md': size === 'lg',
  });

  return <Comp className={classNames}>{children}</Comp>;
};
