import { Link } from 'react-router-dom';

import { RoutePaths } from '@/app/enums/Routes';

import { TextField } from '@/view/components/TextField';
import { Button } from '@/view/components/Button';

import { useLoginController } from './useLoginController';

export const Login = () => {
  const { handleSubmit, isLoading, errors, register } = useLoginController();

  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl text-gray-900 font-bold tracking-[1px]">
          Entre em sua conta
        </h1>
        <div className="mt-4 space-x-1">
          <span className="text-base text-gray-700 tracking-[-0.5px]">
            Novo por aqui?
          </span>
          <Link
            className="text-base text-teal-900 font-medium tracking-[-0.5px]"
            to={RoutePaths.REGISTER}
          >
            Crie sua conta
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col mt-[60px] gap-4">
        <TextField
          id="email"
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register('email')}
        />
        <TextField
          id="password"
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register('password')}
        />

        <Button className="mt-2" isLoading={isLoading}>
          Entrar
        </Button>
      </form>
    </div>
  );
};
