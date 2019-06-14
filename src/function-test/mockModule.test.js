import axios from 'axios';
import User from './User';

jest.mock('axios');
// I use this to implement async test too
test('get User', () => {
    const users = [{ name: 'Nhan' }];
    const res = { data: users };
    axios.get.mockResolvedValue(res);

    return User.getUser().then(data => expect(data).toEqual(users));
})

test('get User fail', () => {
    const users = [{ name: 'Nhan' }];
    const res = { data: users };
    axios.get.mockResolvedValue(res);
    expect.assertions(0);

    return User.getUser().catch(e => expect(e).toMatch('error'));

});