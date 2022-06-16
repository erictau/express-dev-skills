const skills = [
    {name: 'HTML', level: 5, description: 'Familiar with HTML for building static web pages.'},
    {name: 'CSS', level: 3, description: 'Familiar with basics of CSS, including grid and flexbox. Also familiar with Bootstrap.'},
    {name: 'JavaScript', level: 7, description: 'Able to use JavaScript in the front end to manipulate the DOM and in the back end running in Node.js.'},
    {name: 'Express', level: 2, description: 'Recently introduced to Express.js. Able to pick it up quickly due to parallels with Flask.'},
]

module.exports = {
    getAll,
    getOne,
    addSkill,
    deleteSkill
}

function getAll() {
    return skills;
}

function getOne(skillName) {
    return skills.find(skill => skillName === skill.name);
}

function addSkill(skill) {
    skills.push(skill);
    return
}

function deleteSkill(skillName) {
    const idx = skills.findIndex(skill => skill.name === skillName);
    skills.splice(idx, 1);
}