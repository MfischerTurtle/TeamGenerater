const Engineer = require("../lib/Engineer")

test("Does the Engineer have a github",() => {
    const testGitHub = 'MfischerTurtle'
    const newEngineer = new Engineer ('Dave', 8525, 'example@gmail.com', testGitHub)
    expect(newEngineer.github).toBe(testGitHub) 
})

test("Can the Engineer get a GitHub trough getGithub method",() => {
    const testGitHub = 'MfischerTurtle'
    const newEngineer = new Engineer ('Dave', 8525, 'example@gmail.com', testGitHub)
    expect(newEngineer.getGithub()).toBe(testGitHub) 
})

test("Can the Engineer get a role trough getRole method",() => {
    const newEngineer = new Engineer ('Dave', 8525, 'example@gmail.com', 'MfischerTurtle')
    expect(newEngineer.getRole()).toBe("Engineer") 
})