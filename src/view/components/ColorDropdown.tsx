import { cn } from '@/app/utils/cn';
import { Dropdown } from './Dropdown';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ColorIcon } from '@/assets/icons/ColorIcon';
import { useState } from 'react';
import { ErrorMessage } from './ErrorMessage';

interface IColorDropdownField {
  error?: string;
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
}

interface Color {
  color: string;
  bg: string;
}

const colors: Color[] = [
  { color: '#868E96', bg: '#F8F9FA' },
  { color: '#FA5252', bg: '#FFF5F5' },
  { color: '#E64980', bg: '#FFF0F6' },
  { color: '#BE4BDB', bg: '#F8F0FC' },
  { color: '#7950F2', bg: '#F3F0FF' },
  { color: '#4C6EF5', bg: '#EDF2FF' },
  { color: '#228BE6', bg: '#E7F5FF' },
  { color: '#15AABF', bg: '#E3FAFC' },
  { color: '#12B886', bg: '#E6FCF5' },
  { color: '#40C057', bg: '#EBFBEE' },
  { color: '#82C91E', bg: '#F4FCE3' },
  { color: '#FAB005', bg: '#FFF9DB' },
  { color: '#FD7E14', bg: '#FFF4E6' },
  { color: '#212529', bg: '#F8F9FA' }
];

export function ColorDropdownField({
  className,
  error,
  onChange,
  value
}: IColorDropdownField) {
  const [selectedColor, setSelectedColor] = useState<Color | null>(() => {
    if (!value) return null;

    const defaultColor = colors.find((color) => color.color === value);

    return defaultColor ?? null;
  });

  const handleSelect = (color: Color) => {
    setSelectedColor(color);
    onChange?.(color.color);
  };

  return (
    <div>
      <Dropdown.Root>
        <Dropdown.Trigger
          className={cn(
            `focus:border-gray-800 flex items-center justify-between text-gray-700 transition-all text-left outline-none bg-white rounded-lg border border-gray-500 px-3 h-[52px] w-full`,
            !!error && '!border-red-900',
            className
          )}
        >
          <span>Cor</span>
          {!selectedColor && (
            <ChevronDownIcon className="h-6 w-6 text-gray-800" />
          )}

          {selectedColor && (
            <ColorIcon color={selectedColor.color} bg={selectedColor.bg} />
          )}
        </Dropdown.Trigger>
        <Dropdown.Content className="z-[99] grid grid-cols-4 shadow-md">
          {colors.map((color) => (
            <Dropdown.Item
              onSelect={() => {
                handleSelect(color);
              }}
              key={color.color}
            >
              <ColorIcon bg={color.bg} color={color.color} />
            </Dropdown.Item>
          ))}
        </Dropdown.Content>
      </Dropdown.Root>
      <ErrorMessage error={error} />
    </div>
  );
}
