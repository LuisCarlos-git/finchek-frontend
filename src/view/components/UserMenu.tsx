import { Dropdown } from './Dropdown';

// className="w-12 h-12 rounded-full flex items-center justify-center bg-teal-0"

export const UserMenu = () => (
  <Dropdown.Root>
    <Dropdown.Trigger>
      <span className="text-sm text-teal-900 font-medium tracking-[-0.5px]">
        LC
      </span>
    </Dropdown.Trigger>
    <Dropdown.Content>
      <Dropdown.Item>sair</Dropdown.Item>
    </Dropdown.Content>
  </Dropdown.Root>
);
