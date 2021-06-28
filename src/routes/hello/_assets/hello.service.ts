interface IProfile {
  name: string;
  age: number;
}

const profile: IProfile = {
  name: 'test',
  age: 30
};

export const getProfile = (name: string): IProfile => ({ ...profile, name });
