const Manager = require("../lib/Manager")

test("Does the Manager have a office #",() => {
    const testOfficeNumber = '8475555555'
    const newManager = new Manager ('Dave', 8525, 'example@gmail.com', testOfficeNumber)
    expect(newManager.officeNumber).toBe(testOfficeNumber) 
})

test("Can the Manager get a office # trough getOfficeNumber method",() => {
    const testOfficeNumber = '8475555555'
    const newManager = new Manager ('Dave', 8525, 'example@gmail.com', testOfficeNumber)
    expect(newManager.getOfficeNumber()).toBe(testOfficeNumber) 
})

test("Can the employee get a role trough getRole method",() => {
    const newManager = new Manager ('Dave', 8525, 'example@gmail.com', '8475555555')
    expect(newManager.getRole()).toBe("Manager") 
})