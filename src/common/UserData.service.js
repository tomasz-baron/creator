angular.module('creator')
.factory('UserData', function() {
    const userData = {};

    const setUserDetails = (detail) => {
        userData.details = detail;
    };

    const getUserDetails = () => {
        return userData.details ? userData.details : {email: '', password: '', confirmedPassword: ''};
    };

    const setUserGroup = (group) => {
        userData.userGroup = group;
    };

    const getUserGroup = () => {
        return userData.userGroup ? userData.userGroup.id : '';
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
