const service = require('../services/services')

module.exports = {
    getDetails: (req,res)=>{

        const offset = req.query.offset || 0
        const limit = req.query.limit || 5
        let data=req.query
        service.getDetails(data,(err,result)=>{
            if(err){
                console.log(err);
                res.status(400).send(err)
            } else {
                const noOfDetails = result.rows.length
                res.send({details: result.rows, count: noOfDetails})
            }
        })
    },
    countDetails: (req,res)=>{
        service.countDetails((err,result)=>{
            if(err) {
                console.log(err);
                res.status(400).send(err)
            } else {
                res.send(result.rows[0].count)
            }
        })
    },
    addDetails: (req,res)=>{
        const data = req.body

        service.addDetails(data,(err,result)=>{
            if(err){
                console.log(err);
                res.status(400).send(err)
            } else {
                res.send(result.rows)
            }
        })
    },
    findDetail: (req,res)=>{
        const id = req.params.id
        service.findDetail(id,(err, result)=>{
            if(err) {
                // console.log(err);
                res.status(400).send(err)
            } else {
                res.send(result.rows)
            }
        })
    },
    updateDetail: (req,res)=>{
        const data = req.body

        service.updateDetail(data,(err,result)=>{
            if(err) {
                // console.log(err)
                res.status(400).send(err)
            } else (
                res.send(data.rows)
            )
        })
    },
    deleteDetail: (req,res)=>{
        service.deleteDetail((err,result)=>{
            if(err){
                console.log(err);
                res.status(400).send(err)
            } else {
                res.send(result)
            }
        })
    }
}