const running = async (req, res) => {
    res.status(200).send('API is running');
};

module.exports = {
    running
};