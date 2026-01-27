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
}
