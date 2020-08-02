import React, { createContext } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../components/loginStatus/UserPool';

const AccountContext = createContext();

const AccountContextWrapper = props => {

    const getSession = async () =>
        await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession(async (err, session) => {
                    if (err) {
                        reject();
                    } else {
                        const attributes = await new Promise((resolve, reject) => {
                            user.getUserAttributes((err, attributes) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    const results = {};

                                    for (let attribute of attributes) {
                                        const { Name, Value } = attribute;
                                        results[Name] = Value;
                                    }
                                    resolve(results);
                                }
                            });
                        });
                        resolve({
                            user,
                            ...session,
                            ...attributes
                        });
                    }
                });
            } else {
                reject();
            }
        });

    return (
        <AccountContext.Provider value={{ authenticate, getSession, logout}}>
            {props.children}
        </AccountContext.Provider>
    );
};

const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
        user.signOut();
        alert('Refresh the page to complete logging out.');
    }
};

const authenticate = async (Username, Password) =>
    await new Promise((resolve, reject) => {
        const user = new CognitoUser({ Username, Pool });
        const authDetails = new AuthenticationDetails({ Username, Password });

        user.authenticateUser(authDetails, {
            onSuccess: data => {resolve(data);},
            onFailure: err => {reject(err);},
            newPasswordRequired: data => {resolve(data);}
    });
});

export { AccountContextWrapper, AccountContext };