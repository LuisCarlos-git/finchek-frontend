import { Outlet } from 'react-router-dom';

import { Logo } from '@/view/components/Logo';

import ilustration from '@/assets/images/ilustration.png';

export const AuthLayout = () => (
  <div className="w-full flex h-full ">
    <div className="w-full lg:w-1/2 h-screen flex justify-center items-center flex-col gap-16 ">
      <Logo className="h-6 text-gray-500" />
      <div className="w-full max-w-[504px] px-8">
        <Outlet />
      </div>
    </div>
    <div className="p-8 w-1/2 h-screen hidden justify-center items-center relative lg:flex">
      <img
        className="object-cover w-full max-w-[650px] max-h-[960px] h-full select-none rounded-[32px]"
        src={ilustration}
      />
      <div className="max-w-[656px] p-8 rounded-b-[32px] bg-white absolute bottom-8 mx-8">
        <Logo className="text-teal-900 h-8" />
        <p className="text-gray-700 font-medium text-xl mt-6">
          Gerencie suas finanças pessoais de uma forma simples com o fincheck, e
          o melhor, totalmente de graça!
        </p>
      </div>
    </div>
  </div>
);
