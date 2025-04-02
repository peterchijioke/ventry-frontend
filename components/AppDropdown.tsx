import { SeparatorVertical } from 'lucide-react';
import React from 'react';
import Select, { SingleValue, OnChangeValue } from 'react-select';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type OneP = { value: any; label: string };

interface Props {
  options: OneP[];
  value?: OneP;
  onChange?: (value: OnChangeValue<OneP, false>) => void;
  placeholder?: string;
}

export default function AppDropdown({ options, ...props }: Props) {
  const customClassNames = {
    IndicatorSeparator: {
      display: 'none',
    },
    control: () =>
      'bg-white text-black text-sm dark:bg-background dark:text-white border-none rounded-none',
    placeholder: () => 'text-gray-600 dark:text-gray-400',
    menu: () =>
      'bg-white text-black dark:bg-background text-sm dark:text-white rounded-none shadow-lg mt-2',
    option: (state: { isFocused: boolean }) =>
      `cursor-pointer px-4 py-2 ${
        state.isFocused
          ? 'bg-gray-200 dark:bg-gray-700'
          : 'bg-white dark:bg-background'
      } text-black dark:text-white`,
    singleValue: () => 'text-black dark:text-white',
  };

  return <Select classNames={customClassNames} options={options} {...props} />;
}
