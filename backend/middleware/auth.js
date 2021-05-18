export const ensureAuth = (req, res, next) => {
    if (req.isAuthenticated()){
        console.log("is authenticated");
        return next()
    } else {
        console.log("is not authenticated");
        res.redirect('http://localhost:3000/')
    }
}
export const ensureGuest = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect('http://localhost:3000/weight')
    } else{
        return next()
    }
}