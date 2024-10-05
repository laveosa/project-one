import { useContext } from 'react';
import { motion } from 'framer-motion';

import { AuthContext, IAuthContext } from '../context/AuthContextProvider.tsx';
import AddTodoForm from './AddTodoForm.tsx';
import Button from './Button.tsx';

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
    <motion.section
      className="col-[2/3] row-[2/3] flex flex-col border-l border-black/[0.04] bg-[#fffcf9] px-[25px] pb-[28px] pt-[18px]"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        type: 'spring',
      }}
    >
      <div>
        <AddTodoForm />
      </div>
      {isLoading && (
        <div className="my-auto space-y-2">
          <motion.p
            className="text-center text-gray-300 text-4xl mb-2 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
          >
            loading...
          </motion.p>
        </div>
      )}
      {!isLoading && (
        <div className="mt-auto space-y-2">
          {isAuthenticated && (
            <div>
              <p className="text-gray-500 text-sm mb-2">
                Name: <span className="font-bold">{user?.given_name}</span>
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
    </motion.section>
  );
}

export default Sidebar;
