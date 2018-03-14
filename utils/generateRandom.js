
export const getEnvironment =
    typeof process.env.rootDomain === 'undefined'
        ? 'http://localhost:8000'
        : `http://${process.env.rootDomain}.dnb.com.au`;