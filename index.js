const employee = {
    name: "Bill",
    streetaddress: "Bentley",
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...employee };
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(obj, key, value) {
    const employee2 = {...employee };
    employee2[key] = value;
    delete employee2.streetaddress;
    return employee2;
}
function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    delete employee.streetaddress;
    employee[key] = value;
    return employee;
}