
// module.exports={
//     login:loginApi
// }

// const db = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     password: '',
//     database: '',
//     insecureAuth: true
// });



// db.connect();

// function loginApi(req, res) {

//     const email = req.body.email;

//     const pass = req.body.pass;


//     db.query("SELECT * FROM  shop.user WHERE  id=? AND email=? AND pass=?", [id, email, pass], 
//     (err, results) => {
//         if (err) {
//             res.send({ err: err });
//         }

//         if (results.length>0) {
//             res.send(results);

//         } else {
//             res.send({ message: "wrong username/password combination" });
//         }
    
       
//     });
// };