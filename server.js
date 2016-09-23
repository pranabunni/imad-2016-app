var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var content1={
    title:'article 1',
    date: '45',
    content:`<p>This is a list of my work experiences</p>
    </div><ol><li>hello</li><li>hai</li></ol> `
};
function createtemplate(data)
{
    var title=data.title;
    var date=data.date;
    var content=data.content;
var htmltemplate=`
<html><head><title>${title}</title><style>.container {
max-width:800px;
margin:0 auto;
color:red;
font-family:sans-serif;
  padding-top:40px;
  padding-left:20px;
  padding-right:20px;
}</style></head>
    <div><a href="/">home</a></div><hr/><div class="container">
    
    <h3>SAMPLE</h3><div>${date}</div><div>${content}</div>
</html>`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/pranab',function(req,res){
     res.send(createtemplate(content1));
     
app.get('ui/main.js',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'main.js'));
     app.get('/pranab',function(req,res){
     res.send(createtemplate(content1
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
