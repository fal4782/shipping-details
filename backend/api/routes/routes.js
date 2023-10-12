const express = require('express')
const client = require('../../db/connection')
const router = express.Router()

router.post('/details',(req,res)=>{
    const data = req.body
    // console.log(data);
    client.query(`INSERT INTO shipping_details (product_name, dispatch_time, dispatch_date, quantity) VALUES ('${data.product_name}','${data.dispatch_time}','${data.dispatch_date}',${data.quantity});`,(err,result)=>{
        if(err){
            console.log(err);
            res.status(400).send(err)
        } else {
            res.send(result.rows)
        }
    })
})

router.get('/details',(req,res)=>{
    client.query(`SELECT * FROM shipping_details WHERE status = 1`,(err,result)=>{
        if(err){
            // console.log(err);
            res.status(400).send(err)
        } else {
            res.send(result.rows)
        }
    })
})

router.patch('/details/:id',(req,res)=>{
    const data = req.body
    // console.log(data)
    // console.log(req.params.id)
    client.query(`UPDATE shipping_details SET dispatch_time = '${data.dispatch_time}', dispatch_date = '${data.dispatch_date}', quantity = ${data.quantity} WHERE uuid = ${req.params.id}`,(err,result)=>{
        if(err) {
            // console.log(err)
            res.status(400).send(err)
        } else (
            res.send(data.rows)
        )
    })
})

router.patch('/deleteDetails/:id',(req,res)=>{
    client.query(`UPDATE shipping_details SET status = 0 WHERE uuid = ${req.params.id}`,(err,result)=>{
        if(err){
            console.log(err);
            res.status(400).send(err)
        } else {
            res.send(result)
        }
    })
})

module.exports=router