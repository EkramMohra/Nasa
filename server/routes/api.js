const { query, request } = require('express')
const express = require('express')
const router = express.Router()
const Media = require('../models/mediaModel')

router.post('/images', function (request, response) {
    let data = request.body
    let result = {}
    let newmedia = new Media({
        title: data.title,
        imgUrl: data.imgUrl,
        description: data.description
    })
    const savePromise = newmedia.save()
    savePromise.then(saved => {
        console.log(saved);
    }).catch(err => {
        console.log(err)
    })
    result.code = 200
    result.message = "The data inserted successfuly"
    response.send(result)
})
router.get('/image', function (req, res) {
    let id = req.query.id
    if (id == undefined) {
        Media.find({}).exec(function (err, result) {
            res.send(result)
        })
    }
    else {
        Media.find({ _id: id }).exec(function (err, result) { 
            console.log(id);
            console.log(result);
            res.send(result)

        })
    }
})
router.delete('/image/:id', function (req, res) {
    let { id } = req.params
    Media.deleteOne({ _id: id })
        .exec((err, success) => {
            if (success === null) {
                res.send(`Not find`)
            } else {
                res.send(`Deleted successfuly`)
            }
        })
})
router.get('/transactions/categories', function (req, res) {
    const aggregate = [
        {
            "$group": {
                "_id": "$category",
                "total": {
                    "$sum": "$amount"
                }
            }
        }
    ]
    Transactions.aggregate(aggregate)
        .exec(function (err, result) {
            if (err) {
                console.log(err)
                return;
            }
            res.send(result)
        });
})

module.exports = router
