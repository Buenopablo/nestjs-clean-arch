import { UserProps, UserEntity } from '../../user.entity';
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({});

    sut = new UserEntity(props);
  });
  it('Constructor method', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.createAd).toBeInstanceOf(Date);
  });

  it('Getter of name fields', () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toBe('string');
  });

  it('Setter of name fields', () => {
    sut['name'] = 'New Name';
    expect(sut.props.name).toEqual('New Name');
    expect(typeof sut.props.name).toBe('string');
  });

  it('Getter of email fields', () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toBe('string');
  });

  it('Getter of password fields', () => {
    expect(sut.props.password).toBeDefined();
    expect(sut.props.password).toEqual(props.password);
    expect(typeof sut.props.password).toBe('string');
  });

  it('setter of password fields', () => {
    sut['password'] = 'New Password';
    expect(sut.props.password).toEqual('New Password');
    expect(typeof sut.props.password).toBe('string');
  });

  it('Getter of createAd fields', () => {
    expect(sut.props.createAd).toBeDefined();
    expect(sut.props.createAd).toBeInstanceOf(Date);
  });

  it('Should update a user', () => {
    sut.updateName('New Name');
    expect(sut.props.name).toEqual('New Name');

    sut.updatePassword('New Password');
    expect(sut.props.password).toEqual('New Password');
  });

  it('Should update the password field', () => {
    sut.updatePassword('New Password');
    expect(sut.props.password).toEqual('New Password');
  });
});
