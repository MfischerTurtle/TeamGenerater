const Employee = require("../lib/Employee")

test("Does the employee have a name",() => {
    const testName = 'Dave'
    const newEmployee = new Employee (testName, 8525, 'example@gmail.com')
    expect(newEmployee.name).toBe(testName) 
})

test("Does the employee have a Id",() => {
    const testId = '8525'
    const newEmployee = new Employee ('Dave', testId, 'example@gmail.com')
    expect(newEmployee.id).toBe(testId) 
})

test("Does the employee have a Email",() => {
    const testEmail = 'example@gmail.com'
    const newEmployee = new Employee ('Dave', 8525, testEmail)
    expect(newEmployee.email).toBe(testEmail) 
})

test("Can the employee give a name trough getName method ",() => {
    const testName = 'Dave'
    const newEmployee = new Employee (testName, 8525, 'example@gmail.com')
    expect(newEmployee.getName()).toBe(testName) 
})

test("Can the employee give a Id trough getId method",() => {
    const testId = '8525'
    const newEmployee = new Employee ('Dave', testId, 'example@gmail.com')
    expect(newEmployee.getId()).toBe(testId) 
})

test("Can the employee give a Email trough getEmail method",() => {
    const testEmail = 'example@gmail.com'
    const newEmployee = new Employee ('Dave', 8525, testEmail)
    expect(newEmployee.getEmail()).toBe(testEmail) 
})

test("Can the employee get a role trough getRole method",() => {
    const newEmployee = new Employee ('Dave', 8525, 'example@gmail.com')
    expect(newEmployee.getRole()).toBe("Employee") 
})