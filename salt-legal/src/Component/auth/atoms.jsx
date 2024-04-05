




import {atom} from 'recoil';

export const jwtTokenState = atom ({
    key: 'jwtTokenState',
    default : null
});

export const userIdState = atom ({
    key : 'userIdState',
    default : null,
})

export const paidUserState = atom ({
    key : 'paidUserState',
    default : null,
})