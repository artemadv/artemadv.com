const { API_URL } = require('./site.config');

const createDomains = (unformattedDomains) => {
    return unformattedDomains.map((domain) => {
        return domain.replace(/(https?:\/\/)?(www.)?/i, '');
    });
};

module.exports = {
    images: {
        domains: createDomains([API_URL]),
    },
};
