const Price_type = require("../models/Price_type")

const errorHandler = (res,error) =>{
    res.status(500).send({message:`Xatolik : ${error}`})
}

const addPrice_type = async (req,res) =>{
    try {
        const {price_per_day,price_per_hour,late_fee_per_hour} = req.body
        const data = await Price_type({price_per_day,price_per_hour,late_fee_per_hour})
        await data.save()
        res.status(200).send("OK. Price is added")
    } catch (error) {
        errorHandler(res,error)
    }
}
const getPrice = async (req,res) =>{
    try {
        const data = await Price_type.find({})
        res.status(200).send(data)
    } catch (error) {
        errorHandler(res,error)
    }
}

module.exports = {
    addPrice_type,
    getPrice
}