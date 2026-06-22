export type UserProps = {
  name: string;
  email: string;
  password: string;
  createAd?: Date;
};

export class UserEntity {
  constructor(public readonly props: UserProps) {
    this.props.createAd = this.props.createAd ?? new Date();
  }

  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  get createAd(): Date {
    return this.props.createAd as Date;
  }
}
