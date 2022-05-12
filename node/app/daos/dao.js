const daoCommon = require('./common/daoCommon')

const cardDao = {
    ...daoCommon,
    ...require('./api/cardDao')

    // const filmDao = Object.assign(daoCommon, require('./api/dilmDao'))

    // const filmDao = {...daoCommon, ...require('./api/filmDao')}
}


module.exports = {

    cardDao
}