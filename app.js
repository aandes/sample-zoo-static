var express = require('express'),
    port = 3000,
    app = express();

app.use('/', express.static(__dirname));

app.listen(port, function() { 

    console.log('Server running at', 'http://localhost:' + port);
    console.log('Press Ctrl + C to stop');
    
});
