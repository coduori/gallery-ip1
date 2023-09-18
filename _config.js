var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://WheelsOnBeasts:2B2MzODF6zyZmpfM@ip-1.qdlm85j.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://WheelsOnBeasts:2B2MzODF6zyZmpfM@ip-1.qdlm85j.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://WheelsOnBeasts:2B2MzODF6zyZmpfM@ip-1.qdlm85j.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
