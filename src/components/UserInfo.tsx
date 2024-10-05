import { useContext } from 'react';

import { AuthContext, IAuthContext } from '../context/AuthContextProvider.tsx';
import { IUserInfo } from '../consts/interfaces/IUserInfo.ts';
import { convertGitHubUserToUserInfoModel } from '../util/helpers/modelConvertorHelper.ts';

function UserInfo() {
  const { user, getOrganization } = useContext<IAuthContext>(AuthContext);
  const currentUser: IUserInfo = convertGitHubUserToUserInfoModel(user);

  console.log('USER: ', user);
  console.log('CURRENT USER: ', currentUser);
  console.log('ORGANIZATION: ', getOrganization());

  function convertToUserInfoModel(orgCode: string): IUserInfo {
    switch (orgCode) {
      case '':
        return;
      default:
        return user;
    }
  }

  return (
    <div className="flex flex-col gap-1 mb-4">
      {currentUser?.picture && (
        <div className="flex flex-row">
          <div className="w-[100px] border overflow-hidden rounded-md">
            <img
              src={currentUser.picture}
              alt="user image"
              className="w-full"
            />
          </div>
        </div>
      )}
      {currentUser.fullName && (
        <div className="flex flex-row items-center text-gray-600">
          <span className="text-sm font-bold w-full max-w-[60px]">Name: </span>
          <span className="text-sm w-full">{currentUser.fullName}</span>
        </div>
      )}
      {currentUser.email && (
        <div className="flex flex-row items-center text-gray-600">
          <span className="text-sm font-bold w-full max-w-[60px]">Email: </span>
          <span className="text-sm w-full">{currentUser.email}</span>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
