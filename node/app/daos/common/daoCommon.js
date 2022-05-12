const con = require('../../config/dbconfig')
const router = require('../../routes/router')

const daoCommon = {
    findAll: (res, table)=> {
        con.execute(
            `SELECT * FROM ${table}`,
            (error, rows)=> {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else{
                    console.log('DAO ERROR daoCommon error', error)
                }
            }
        )
    },
    findById: (res, table, id)=> {
        con.execute(
            `SELECT * FROM ${table} WHERE id = ?`,
            [id],
            (error, rows)=> {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log (' DAO ERROR daoCommon Id error', error)
                }
            }
        )
    },

    countAll: (res, table)=> {
        con.execute(
            `SELECT COUNT(*) count FROM ${table}`,
            (error, rows)=> {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(' DAO ERROR daoCommon count', error)
                }
            }
        )
    }
}

module.exports = daoCommon