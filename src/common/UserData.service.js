angular.module('task')
.factory('UserData', function() {
    const userData = {};

    const setUserDetails = (detail) => {
        userData.details = detail;
    };

    const getUserDetails = () => {
        return userData.details ? userData.details : {email: 'TT@o2', password: 'T', confirmedPassword: 'T'};
    };

    const setUserGroup = (id, name) => {
        userData.userGroup = {id, name};
    };

    const getUserGroup = () => {
        return userData.userGroup ? userData.userGroup.id : '1';
    };

    const setUserAvatar = (avatar) => {
        userData.avatar = avatar;
    };

    const getUserAvatar = () => {
        return userData.avatar ? userData.avatar : '';
    };

    const getUserData = () => {
        return userData;
    };

    return {
        setUserDetails,
        getUserDetails,
        setUserGroup,
        getUserGroup,
        setUserAvatar,
        getUserAvatar,
        getUserData
    };
});
