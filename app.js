let express = require('express');
let app = express();

app.get('/',function(req,res){
    let sql = require('mssql');

    let config = require('./Core/Config/database.config.json');

    sql.connect(config.mssql,function(err){
        if(err) console.log(err);

        let request = new sql.Request();

        request.query('select * from [SomeDatabase].dbo.Table_1', function(error, record){
            if (error) console.log(error);

            res.send(record);
        })
    })
})

var server = app.listen(3000, function(){
    console.log('Server is running on port 3000');
})