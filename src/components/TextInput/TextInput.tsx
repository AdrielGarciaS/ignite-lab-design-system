import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, PropsWithChildren } from 'react';

export type TextInputRootProps = PropsWithChildren;

const TextInputRoot = (props: TextInputRootProps) => {
  const { children } = props;

  return (
    <div className="flex items-center h-12 gap-3 py-4 px-3 w-full rounded bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
};

TextInputRoot.displayName = 'TextInput.Root';

export type TextIconProps = PropsWithChildren;

const TextInputIcon = (props: TextIconProps) => {
  const { children } = props;

  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

TextInputIcon.displayName = 'TextInput.Icon';

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;

const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
};

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
