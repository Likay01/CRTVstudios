const DB = require('../Config/config');

const {hash, compare, hashSync } = require('bcrypt')

const {createToken} = require('../middleware/AuthenticatedUsers');

// User

class Users {
    login(req, res){
        const {email, psswrd} = req.body;
        const sqlQry =
        `select firstname, Surname, Username, email, profilePic, psswrd, gender, JoinDate, UserRole 
        from Users
        where email = '${email}';
        `;
        DB.query(sqlQry, async (err, data)=>{
            if(err) throw err;
            if((!data.length) || (data == null)) {
                res.status(404).json({err:
                "Incorrect email address"});
            }else {
                await compare(psswrd, data[0].psswrd,
                    (cErr, cResult)=> {
                        if(cErr) throw cErr;
                        // Create a token
                        const jwToken = 
                        createToken(
                            {
                                email, psswrd  
                            }
                        );
                        // Saving
                        res.cookie('LegitUser',
                        jwToken, {
                            maxAge: 3600000,
                            httpOnly: true,
                            path:'/',

                        })
                        if(cResult) {
                            res.status(200).json({
                                msg: 'Successfully Logged in',
                                jwToken,
                                result: data[0]
                            })
                        }else {
                            res.status(401).json({
                                err: 'invalid password or did not register. '
                            })
                        }
                    })
            }
        })
    }
    getUsers(req, res) {
        const sqlQry = 
        `select UserId, firstname, Surname, Username, email, profilePic, psswrd, gender, JoinDate, UserRole 
        from Users;
        `;
        DB.query(sqlQry,( err, data)=>{
            if(err) throw err;
            else res.status(200).json({result: data});
        })
    }
    getUser(req, res) {
        const sqlQry = 
        `select UserId, firstname, Surname, Username, email, profilePic, psswrd, gender, JoinDate, UserRole 
        from Users
        where userId = ?;
        `;
        DB.query(sqlQry,[req.params.id],
            (err, data)=>{
                if(err) throw err;
                else res.status(200).json(
                 {result: data} );
            })
    }
    async createUser(req, res) {
        let detail = req.body;

        detail.psswrd = await
        hash(detail.psswrd,15);

        let user = {
            email: detail.email,
            psswrd: detail.psswrd
        }

        const sqlQry =
        `insert into Users set ?;`;
        DB.query(sqlQry, [detail], (err)=> {
            if(err) {
                console.log(err)
                res.status(404).json({err});
            }else {
                const jwToken = createToken(user);

                res.cookie("legitUser", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({msg: "A User was saved."})
            }
        })
    }
    updateUser(req, res) {
        let data = req.body;
        if((data.psswrd !== null)|| (data.psswrd !== undefined)){
            data.psswrd = hashSync(data.psswrd, 15);
        }
            const sqlQry =
            `update Users set ? where UserId = ?;`;

            DB.query(sqlQry,[data, req.params.id], (err)=>{
                if(err) throw err;
                res.status(200).json( {msg: "Information updated."});
            })
    }
    deleteUser(req, res) {
        const sqlQry =
        `delete from Users where UserId = ?;`;
        DB.query(sqlQry,[req.params.id],
            (err)=>{
                if(err) throw err;
                res.status(200).json({msg: "Account successfully deleted."});
            }) 
    }
}
// Products
class Products {
    getProducts(req, res) {
        const sqlQry =
        `select ProdId, ProdImg, ProdName, Artist, ProdDiscription, ProdDate, ProdPrice
         from Products;
         `;
        DB.query(sqlQry, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    getProduct(req, res) {
        const sqlQry = 
        `select ProdId, ProdImg, ProdName, Artist, ProdDiscription, ProdDate, ProdPrice from Products where ProdId = ?;`;
        DB.query(sqlQry,[req.params.id], (err, results)=> {
            if(err)throw err;
            res.status(200).json({results})
        });
    }
    addProduct(req, res) {
        const sqlQry = 
        'insert into Products set ?;';
        DB.query(sqlQry,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to add new products."});
                }else {
                    res.status(200).json({msg: "Product added."});
                }
            });
    }
    updateProduct(req, res) {
        const sqlQry = 
        'update Products set ? where ProdId = ?';
        DB.query(sqlQry,[req.body, req.params.id],(err)=> {
            if(err){
                res.status(400).json({err: "Unable to update product."});
            }else {
                res.status(200).json({msg: "Product updated."});
            }
        });
    }
    deleteProduct(req, res) {
        const sqlQry = 
        `delete from Products where ProdId = ?;`;
        DB.query(sqlQry,[req.params.id], (err)=>{
            if(err)res.status(400).json({err: "Product not found."});
            res.status(200).json({msg: "Product deleted successfully."});
        })
    }
}

class Cart {
    getCart(req, res) {
        const sqlQry =
        `select ProdImg, ProdName, Artist, ProdPrice from Cart inner join Products on Cart.ProdId = Products.ProdId where Cart.UserId = ${req.params.id};`;
     DB.query(sqlQry, [req.body],
        (err)=> {
            if (err) {
                res.status(400).json({err: "Unable to access cart."})
            }else {
                res.status(200).json({msg: "Successfully added to cart."});
            }
        })
    }
}

module.exports = {
    Users,
    Products,
    Cart
}