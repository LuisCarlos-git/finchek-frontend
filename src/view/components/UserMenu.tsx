import { ExitIcon } from '@radix-ui/react-icons';
import { Dropdown } from './Dropdown';
import { useAuth } from '@/app/hooks/context/useAuth';

export const UserMenu = () => {
  const { signOut, user } = useAuth();
  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-teal-0">
          <span className="text-sm text-teal-900 font-medium tracking-[-0.5px]">
            {user?.name.slice(0, 2).toLocaleUpperCase()}
          </span>
        </div>
      </Dropdown.Trigger>
      <Dropdown.Content className="w-48">
        <Dropdown.Item
          onSelect={signOut}
          className="flex items-center justify-between text-lg"
        >
          Logout
          <ExitIcon className="w-6 h-6" />
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
};
