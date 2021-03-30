import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { addTodo } from '../helpers/apiCalls';
import { UserContext } from '../context/userContext';

export default function TodoForm() {
  const { user, todos, setTodos } = useContext(UserContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const newTodo = await addTodo({ userId: user._id, ...data });
    setTodos([...todos, newTodo.data]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name='text' ref={register} />
      <input type='submit' value='ADD' />
    </form>
  );
}