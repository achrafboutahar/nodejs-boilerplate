module.exports = errorHandler;

const log = console.log;

function errorHandler(err, req, res, next) {
    log(err);
    if (typeof err === "string") {
        // custom application error
        return res.status(400).json({ message: err });
    }
    // default to 500 server error
    return res.status(500).json({ message: err.message });
}
