const { API_URL } = require('./src/shared/config/site.config');

const createDomains = (unformattedDomains) => {
    return unformattedDomains.map((domain) => {
        return {
            hostname: domain.replace(/(https?:\/\/)?(www.)?/i, ''),
        };
    });
};

module.exports = {
    images: {
        remotePatterns: createDomains([API_URL]),
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    async rewrites() {
        return [
            {
                source: '/graphql',
                destination: `${API_URL}/graphql`,
            },
        ];
    },
};
