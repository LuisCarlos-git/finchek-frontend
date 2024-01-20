import { Logo } from '@/view/components/Logo';
import { UserMenu } from '@/view/components/UserMenu';
import { Accounts } from './components/Accounts';
import { Transactions } from './components/Transactions';
import { DashboardProvider } from '@/app/context/DashboardContext';
import { Dialog } from '@/view/components/Dialog';

export const Dashboard = () => (
  <DashboardProvider>
    <div className="w-full h-screen px-8 pt-6 pb-8 flex flex-col gap-4">
      <header className="h-12 flex justify-between items-center">
        <Logo className="text-teal-900 h-6" />
        <UserMenu />
      </header>
      <main className=" flex flex-1 flex-col md:flex-row gap-4 max-h-full">
        <div className="w-full md:w-1/2">
          <Accounts />
        </div>
        <div className="w-full md:w-1/2">
          <Transactions />
        </div>
      </main>
    </div>
    <Dialog title="header" open>
      test
    </Dialog>
  </DashboardProvider>
);
