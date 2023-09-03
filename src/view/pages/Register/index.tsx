import { Link } from 'react-router-dom';

import { Button } from '@/view/components/Button';
import { TextField } from '@/view/components/TextField';

import { RoutePaths } from '@/app/types/Routes';

export const Register = () => (
  <div>
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl text-gray-900 font-bold tracking-[1px]">
        Crie sua conta
      </h1>
      <div className="mt-4 space-x-1">
        <span className="text-base text-gray-700 tracking-[-0.5px]">
          Já possui uma conta?
        </span>
        <Link
          className="text-base text-teal-900 font-medium tracking-[-0.5px]"
          to={RoutePaths.LOGIN}
        >
          Fazer Login
        </Link>
      </div>
    </div>

    <form className="flex flex-col mt-[60px] gap-4">
      <TextField placeholder="Nome" type="text" name="name" id="name" />
      <TextField placeholder="E-mail" type="email" name="email" id="email" />
      <TextField
        placeholder="Senha"
        type="password"
        name="password"
        id="password"
      />

      <Button className="mt-2">Criar conta</Button>
    </form>
  </div>
);
