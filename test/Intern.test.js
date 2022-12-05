const Intern = require("../lib/Intern")

test("Does the Intern have a School",() => {
    const testSchool = 'ASU'
    const newIntern = new Intern ('Dave', 8525, 'example@gmail.com', testSchool)
    expect(newIntern.school).toBe(testSchool) 
})

test("Can the employee get a GitHub trough getGithub method",() => {
    const testSchool = 'ASU'
    const newIntern = new Intern ('Dave', 8525, 'example@gmail.com', testSchool)
    expect(newIntern.getSchool()).toBe(testSchool) 
})

test("Can the employee get a role trough getRole method",() => {
    const newIntern = new Intern ('Dave', 8525, 'example@gmail.com', 'ASU')
    expect(newIntern.getRole()).toBe("Intern") 
})