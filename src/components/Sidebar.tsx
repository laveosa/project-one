import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

import AddTodoForm from './AddTodoForm.tsx';
import Button from './Button.tsx';

function Sidebar() {
  const { login, logout, register, isAuthenticated, user } = useKindeAuth();

  function onLogin() {
    login().then((res) => {
      console.log('LOGIN: ', res);
    });
  }

  function onLogout() {
    logout().then((res) => {
      console.log('LOGOUT: ', res);
    });
  }

  function onRegister() {
    register().then((res) => {
      console.log('REGISTER: ', res);
    });
  }

  return (
    <section className="col-[2/3] row-[2/3] flex flex-col border-l border-black/[0.04] bg-[#fffcf9] px-[25px] pb-[28px] pt-[18px]">
      <AddTodoForm />
      <div className="mt-auto space-y-2">
        {isAuthenticated && (
          <div>
            <p className="text-gray-500 text-sm mb-2">
              Welcome:{' '}
              <span className="font-bold">
                {user.given_name} {user.family_name}
              </span>
            </p>
            <Button onClick={onLogout}>Log out</Button>
          </div>
        )}
        {!isAuthenticated && (
          <>
            <Button onClick={onLogin}>Log in</Button>
            <Button onClick={onRegister}>Register</Button>
          </>
        )}
      </div>
    </section>
  );
}

export default Sidebar;
