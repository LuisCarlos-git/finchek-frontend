import { Link } from 'react-router-dom';

import { RoutePaths } from '@/app/enums/Routes';

import { Button } from '@/view/components/Button';
import { TextField } from '@/view/components/TextField';

import { useRegisterController } from './useRegisterController';

export const Register = () => {
  const { register, errors, handleSubmit, isLoading } = useRegisterController();
  return (
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

      <form onSubmit={handleSubmit} className="flex flex-col mt-[60px] gap-4">
        <TextField
          id="name"
          type="text"
          placeholder="Nome"
          {...register('name')}
          error={errors.name?.message}
        />
        <TextField
          id="email"
          type="email"
          placeholder="E-mail"
          {...register('email')}
          error={errors.email?.message}
        />
        <TextField
          id="password"
          type="password"
          placeholder="Senha"
          {...register('password')}
          error={errors.password?.message}
        />

        <Button className="mt-2" isLoading={isLoading}>
          Criar conta
        </Button>
      </form>
    </div>
  );
};
