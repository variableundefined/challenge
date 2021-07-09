'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {

        // 1st, build a list of users keyed by name (This database already assume name is unique)

        let userWithAge = {}

        for(const {username, age} of Object.values(db.usersById)){
            userWithAge[`${username}`] = age;
        }

        // Build up ageCount now. Also implicitly assume there's a match for the name.
        let ageCount = {}

        for(const [key, value] of Object.entries(db.itemsOfUserByUsername)){
            if(value.includes(item)){
                const age = userWithAge[key];
                ageCount[`${age}`] = ageCount[`${age}`] || 0; // Do nothing if the property exist, else, set it to 0.
                ageCount[`${age}`] += 1;
            }
        }
         return ageCount;

    }
    return mockDBCall(dataAccessMethod);
}

const getItems = () => {
    const dataAccessMethod = () => {
        const unfilteredItems = _.map(db.itemsOfUserByUsername, (user) => user);
        return [...new Set(unfilteredItems.flat())];
    }
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith,
    getItems
};
