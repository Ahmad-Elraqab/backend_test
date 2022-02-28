'user strict';
var dbConn = require('../../config/db.config');

//company object create
var Company = function (company) {
    this.name = company.name;
    this.email = company.email;
    this.phone = company.phone;
    this.address = company.address;
    this.description = company.description;
    this.created_at = new Date();
    this.updated_at = new Date();
};
Company.create = function (newEmp, result) {
    dbConn.query("INSERT INTO company set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Company.findById = function (id, result) {
    dbConn.query("Select * from company where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Company.findByName = function (name, result) {
    dbConn.query("Select * from company where name = ? ", name, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Company.findAll = function (result) {
    dbConn.query("Select * from company", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('companys : ', res);
            result(null, res);
        }
    });
};
Company.update = function (id, company, result) {
    dbConn.query("UPDATE company SET name=?,email=?,phone=?,address=?,description=? WHERE id = ?", [company.name, company.email, company.phone, company.address, company.description, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Company.delete = function (id, result) {
    dbConn.query("DELETE FROM company WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Company;