const GET_USERS = 'GET_USERS';

export const usersReducer = (state = [], action:any) => {
    switch (action.type) {
        case GET_USERS:
            return action.users;
    }
}