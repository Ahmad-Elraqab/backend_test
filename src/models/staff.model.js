'user strict';
var dbConn = require('../../config/db.config');

//staff object create
var Staff = function (staff) {
    this.name = staff.name;
    this.email = staff.email;
    this.phone = staff.phone;
    this.company_id = staff.company_id;
    this.address = staff.address;
    this.age = staff.age;
    this.salary = staff.salary;
    this.created_at = new Date();
    this.updated_at = new Date();
};
Staff.create = function (newEmp, result) {
    dbConn.query("INSERT INTO staff set ?", newEmp, function (err, res) {
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
Staff.findById = function (id, result) {
    dbConn.query("Select * from staff where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Staff.findAll = function (result) {
    dbConn.query("Select * from staff", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('staffs : ', res);
            result(null, res);
        }
    });
};
Staff.update = function (id, staff, result) {
    dbConn.query("UPDATE staff SET name=?,email=?,phone=?,company_id=?,address=?,salary=?,age=? WHERE id = ?", [staff.name, staff.email, staff.phone, staff.company_id, staff.address, staff.salary, staff.age, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Staff.delete = function (id, result) {
    dbConn.query("DELETE FROM staff WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Staff;