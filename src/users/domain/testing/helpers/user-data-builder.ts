import { faker } from '@faker-js/faker';
import { UserProps } from '../../entities/user.entity';

type Props = {
  name?: string;
  email?: string;
  password?: string;
  createAd?: Date;
};

export function UserDataBuilder(props: Props): UserProps {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.internet.password(),
    createAd: props.createAd ?? new Date(),
  };
}
