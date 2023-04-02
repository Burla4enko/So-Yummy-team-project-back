const getUserDaysInApp = date => {
    const registerDate = new Date(date);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - registerDate.getTime();
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
}

module.exports = getUserDaysInApp;