import { GitHubUserModel } from '../../consts/models/GitHubUserModel.ts';
import { IUserInfo } from '../../consts/interfaces/IUserInfo.ts';

export function convertGitHubUserToUserInfoModel(
  model: GitHubUserModel
): IUserInfo {
  if (!model) {
    return null;
  }

  return {
    id: model.id,
    picture: model.picture,
    fullName: `${model.given_name || ''} ${model.family_name || ''}`,
    email: model.email,
  };
}
