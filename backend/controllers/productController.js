exports.getProducts = (req, res, next) => {
    console.log(`${req.body}`)
    res.status(200).json({
        success: true,
        message: 'This route will show all products in database'
    })
}