const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        isActive: true

    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.name)
    })
}

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    const skill = req.body;
    console.log(skill);
    skill.level= parseInt(skill.level);
    Skill.addSkill(skill);
    res.redirect('/skills');
}