const Payment = require("../Models/payments.models");
const UserCard = require("../models/userCard.model")

const savePaymentData = async (req, res) => {
    const payment1 = new Payment({
        userId: req.body.userId,
        userEmail: req.body.userEmail,
        orderId: req.body.orderId,
        cardType: req.body.cardType,
        cardNumber: req.body.cardNumber,
        cardName: req.body.cardName,
        cardValidity: req.body.cardValidity,
        paymentAmount: req.body.totalAmount,
        couponCode: req.body.couponCode
    })
    try{
        const response = await payment1.save()
        console.log(response)
        const responseToSend = {id: response._id, version: response.__v, success: true}
        console.log(responseToSend)
        return res.json(responseToSend)
    } catch(err) {
        console.log(err)
        return res.status(500).send({id: '', version: '', success: false});
    }
    

}


const saveNewCard = async(req, res) => {
    try{
        const userCard = new UserCard({
            userId: req.body.userId,
            userEmail: req.body.userEmail,
            cardType: req.body.cardType,
            cardNumber: req.body.cardNumber,
            cardName: req.body.cardName,
            cardValidity: req.body.cardValidity,
            cvv: req.body.cvv
        })
        const response = await userCard.save()
        console.log(response)
        const responseToSend = {id: response._id, version: response.__v, success: true}
        console.log(responseToSend)
        return res.json(responseToSend)
    } catch(err) {
        console.log(err)
        return res.status(500).send({id: '', version: '', success: false});
    }
}

const retrieveUserCards = async(req, res) => {
    try{
        const response = await UserCard.find({'userId':req.params.userId})
        return res.json(response)
    } catch(err) {
        console.log(err)
        return res.status(500).send({id: '', version: '', success: false});
    }    
}


module.exports = {
    savePaymentData,
    saveNewCard,
    retrieveUserCards
  };