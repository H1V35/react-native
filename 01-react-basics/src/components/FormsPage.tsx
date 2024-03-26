import { useForm } from 'react-hook-form';

type FormInputs = {
  email: string;
  password: string;
};

export function FormsPage() {
  const { register, handleSubmit, formState } = useForm<FormInputs>({
    defaultValues: {
      email: 'fernando@alonso.es',
      password: '1233',
    },
  });

  const onSubmit = (myForm: FormInputs) => {
    console.log({ myForm });
  };

  return (
    <div className="flex flex-col gap-8 text-center">
      <h3 className="text-2xl">Forms Page</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          type="text"
          placeholder="Email"
          className="px-4 py-2 rounded-md"
          {...register('email', { required: true })}
        />
        <input
          type="text"
          placeholder="Password"
          className="px-4 py-2 rounded-md"
          {...register('password')}
        />

        <button>Login</button>
      </form>

      <pre className="text-start">{JSON.stringify(formState, null, 2)}</pre>
    </div>
  );
}
