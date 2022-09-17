import './App.css';
import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    formState: { 
      errors, 
      isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur', 
  });

  const onSubmit = data => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <>
    <h4>Exam task-1</h4>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className='a'>
       <b>Имя:</b>
        <input
          {...register('firstName', {
            required: 'Ошибка! Поле обязательно для заполнения, повторите еще раз',
            minLength: {
              value: 5,
              message: 'В поле должно быть минимум 5 символов',
            },
          })}
        />
      </label>
      <div>
        {errors?.firstName && <p>{errors?.firstName?.message || 'Error'}</p>}
      </div>
      <label  className='a'>
       <b>Фамилия:</b>
        <input
          {...register('lastName', {
            required: 'Ошибка! Поле обязательно для заполнения, повторите еще раз',
            minLength: {
              value: 5,
              message: 'В поле должно быть минимум 5 символов',
            },
          })}
        />
      </label>
      <div>
        {errors?.lastName && <p>{errors?.lastName?.message || 'Error'}</p>}
      </div>
      <label  className='a'>
        <b>Возраст:</b>
        <input
          {...register('ageName', {
            required: 'Ошибка! Поле обязательно для заполнения, повторите еще раз',
            minLength: {
              value: 2,
              message: 'В поле должно быть минимум 2 символа',
            },
          })}
        />
      </label>
      <div>
        {errors?.lastName && <p>{errors?.lastName?.message || 'Error'}</p>}
      </div>
      <input type="submit" disabled={!isValid} />
    </form>
    </>
  );
}

export default App;