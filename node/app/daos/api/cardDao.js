const con = require('../../config/dbconfig')

const cardDao = {
    table: 'card',

    create: (req,res)=> {
        console.log(req.body)
        if(Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute (
                `INSERT INTO card SET ${fields.join(' = ?, ')} = ?`,
                values,
                (error, dbres)=> {
                    if(!error) {
                        res.send(`Last id: ${dbres.insertID}`)
                    } else {
                        console.log( ' DAO ERROR card dao', error)
                        res.send('ERROR creating record')
                    }
                }
            )
        }
    },
    update: (req,res)=> {
        if(isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "id must be a number"
            })
        } else if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to update"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.excute(
                `UPDATE card SET ${fields.join(' = ?, ')} = ?
                WHERE card_id = ?`,
                [...values, req.params.id],
                (error, dbres)=> {
                    if(!error) {
                        res.send(`Changed ${dbres.changedRows}
                        rows(s)`)
                    } else {
                        console.log(' DAO excute ERROR', error)
                        res.send('Error updating record')
                    }
                }
            )
        }
    },
    sort: (req, res)=> {
        con.execute(
            'SELECT * FROM card ORDER BY last_name, first_name',
            [req.body],
            (error, rows)=> {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                        console.log(req.body)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(' Dao sort errror', error)
                }
            }
        )
    }
}

module.exports = cardDao