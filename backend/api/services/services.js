const client = require('../../db/connection')

module.exports = {
    getDetails: (data,callback) =>{
        client.query(`SELECT * FROM shipping_details WHERE status = 1 ORDER BY uuid DESC,dispatch_time DESC LIMIT ${data.limit} OFFSET ${data.offset}`,(err,result)=>{
            if(!err){
                callback(null,result)
            } else {
                callback(err)
            }
        })
    },
    countDetails: (callback)=>{
        client.query(`SELECT COUNT(uuid) FROM shipping_details WHERE status = 1`,(err,result)=>{
            if(!err) {
                callback(null,result)
            } else {
                callback(err)
            }
        })
    },
    addDetails: (data,callback)=>{
        client.query(`INSERT INTO shipping_details (product_name, dispatch_time, dispatch_date, quantity) VALUES ('${data.productName}','${data.dispatchTime}','${data.dispatchDate}',${data.quantity});`,(err,result)=>{
            if(!err){
                callback(null,result)
            } else {
                callback(err)
            }
        })
    },
    findDetail: (id, callback)=>{
        client.query(`SELECT * FROM shipping_details WHERE uuid = ${id}`,(err,result)=>{
            if(!err) {
                callback(null, result)
            } else {
                callback(err)
            }
        })
    },
    updateDetail: (data,callback)=>{
        client.query(`UPDATE shipping_details SET dispatch_time = '${data.dispatchTime}', dispatch_date = '${data.dispatchDate}', quantity = ${data.quantity} WHERE uuid = ${req.params.id}`,(err,result)=>{
            if(!err) {
                callback(null,result)
            } else {
                callback(err)
            }
        })
    },
    deleteDetail: (callback=>{
        client.query(`UPDATE shipping_details SET status = 0 WHERE uuid = ${req.params.id}`,(err,result)=>{
            if(!err) {
                callback(null, result)
            } else {
                callback(err)
            }
        })
    })
}