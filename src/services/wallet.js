const delayedPromise = (result, delay, shouldResolve) => {
    return new Promise((resolve, reject) => setTimeout(() => {
        if (shouldResolve) return resolve(result);
        return reject(result);
    }, delay));
};

const delayedSuccess = (result, delay) => {
    return delayedPromise(result, delay, true);
};

const delayedFailure = (result, delay) => {
    return delayedPromise(result, delay, false);
};

export const healthWallet = () => {
    const cards = [
        {
            location: {
                code: "FI",
                name: "Finland"
            },
            coverageLevel: {
                label: "Full coverage",
                level: "excellent"
            },
            activity: "Studying",
            from: new Date("2018-09-01"),
            to: new Date("2019-05-31"),
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Helsinki_July_2013-27a.jpg/1024px-Helsinki_July_2013-27a.jpg"
        },
        {
            location: {
                code: "HU",
                name: "Hungary"
            },
            coverageLevel: {
                label: "Full coverage",
                level: "high"
            },
            activity: "Home",
            image: "https://images.pexels.com/photos/764450/pexels-photo-764450.jpeg?auto=compress&cs=tinysrgb&h=402&w=640"
        },
        {
            location: {
                code: "ES",
                name: "Spain"
            },
            coverageLevel: {
                label: "Basic coverage",
                level: "medium"
            },
            activity: "Travel",
            from: new Date("2018-10-12"),
            to: new Date("2018-10-18"),
            image: "https://images.pexels.com/photos/358289/pexels-photo-358289.jpeg?auto=compress&cs=tinysrgb&h=468&w=640"
        }
    ];

    const policyGroups = [
        {
            groupName: "Travel",
            data: [
                {
                    insurer: "EUB Hungary",
                    destination: {
                        code: "ESP",
                        name: "Spain"
                    },
                    packageName: "Travel Air Plus",
                    from: new Date("2018-10-12"),
                    to: new Date("2018-10-18"),
                    policyId: "8174920-NL",
                    insured: "You and Eszter"
                }
            ]
        },
        {
            groupName: "Healthcare",
            data: [
                {
                    insurer: "Swedish Insurance",
                    destination: {
                        code: "FI",
                        name: "Finland"
                    },
                    packageName: "EIT Digital MSc Student",
                    from: new Date("2018-09-01"),
                    to: new Date("2019-05-31"),
                    policyId: "8174920-NL",
                },
                {
                    insurer: "FHSH",
                    destination: {
                        code: "FI",
                        name: "Finland"
                    },
                    packageName: "AYY Student insurance",
                    from: new Date("2018-09-01"),
                    to: new Date("2019-05-31"),
                    policyId: "8174920-NL",
                }
            ]
        },
        {
            groupName: "Connected Insurance",
            data: [
                {
                    insurer: "Groupama Hungary",
                    destination: {
                        code: "EUR",
                        name: "Europe"
                    },
                    packageName: "Gránit Platinum insurance",
                    from: new Date("2018-09-01"),
                    to: new Date("2018-12-01"),
                    policyId: "8174920-NL",
                }
            ]
        }
    ];

    return delayedSuccess({
        cards: cards,
        policyGroups: policyGroups
    }, 100);
};
export const healthPolicy = (policyId) => {
        const policy = {
            insurer: "Groupama Hungary",
            destination: {
                code: "EUR",
                name: "Europe"
            },
            package: "Gránit Platinum insurance",
            from: new Date("2018-09-01"),
            to: new Date("2018-12-01"),
            policyId: "8174920-NL",
        };


        return delayedSuccess({
            policy
        }, 1000);
    };

export const homeWallet = () => {
    const cards = [
        {
            location: {
                code: "FI",
                name: "Finland"
            },
            coverageLevel: {
                label: "Full coverage",
                level: "excellent"
            },
            activity: "AYY apartment",
            from: new Date("2018-09-01"),
            to: new Date("2019-05-31"),
            image: "https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&h=200&w=1260"
        },
        {
            location: {
                code: "HU",
                name: "Hungary"
            },
            coverageLevel: {
                label: "Full coverage",
                level: "high"
            },
            activity: "Flat",
            image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=250&w=1260"
        },
    ];

    const policyGroups = [
        {
            groupName: "HOME",
            data: [
                {
                    insurer: "EUB Hungary",
                    destination: {
                        code: "HU",
                        name: "Hungary"
                    },
                    packageName: "SafeHome+",
                    from: new Date("2018-10-12"),
                    policyId: "8174920-NL",
                }
            ]
        },
        {
            groupName: "Liability",
            data: [
                {
                    insurer: "OP Insurance",
                    destination: {
                        code: "FI",
                        name: "Finland"
                    },
                    packageName: "AYY Apartment insurance",
                    from: new Date("2018-09-01"),
                    to: new Date("2019-05-31"),
                    policyId: "8174920-NL",
                }
            ]
        },
    ];

    return delayedSuccess({
        cards: cards,
        policyGroups: policyGroups
    }, 100);
};

export const homePolicy = (policyId) => {
    const policy = {
        insurer: "OP Finland",
        destination: {
            code: "EUR",
            name: "Europe"
        },
        package: "Gránit Platinum insurance",
        from: new Date("2018-09-01"),
        to: new Date("2018-12-01"),
        policyId: "8174920-NL",
    };


    return delayedSuccess({
        policy
    }, 1000);
};