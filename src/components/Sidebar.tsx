import AddTodoForm from './AddTodoForm.tsx';
import Button from './Button.tsx';
import { useContext } from 'react';
import { AuthContext, IAuthContext } from '../context/AuthContextProvider.tsx';

function Sidebar() {
  const {
    isLoading,
    isAuthenticated,
    user,
    loginHandler,
    logoutHandler,
    registerHandler,
  } = useContext<IAuthContext>(AuthContext);

  return (
    <section className="col-[2/3] row-[2/3] flex flex-col border-l border-black/[0.04] bg-[#fffcf9] px-[25px] pb-[28px] pt-[18px]">
      <AddTodoForm />
      {isLoading && (
        <div className="my-auto space-y-2">
          <p className="text-center text-gray-300 text-4xl mb-2 font-bold">
            loading...
          </p>
        </div>
      )}
      {!isLoading && (
        <div className="mt-auto space-y-2">
          {isAuthenticated && (
            <div>
              <p className="text-gray-500 text-sm mb-2">
                Welcome:{' '}
                <span className="font-bold">
                  {user?.email ? user?.email : user?.given_name}
                </span>
              </p>
              <Button onClick={logoutHandler}>Log out</Button>
            </div>
          )}
          {!isAuthenticated && (
            <>
              <Button onClick={loginHandler}>Log in</Button>
              <Button onClick={registerHandler}>Register</Button>
            </>
          )}
        </div>
      )}
    </section>
  );
}

export default Sidebar;
