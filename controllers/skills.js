const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
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
    skill.level= parseInt(skill.level);
    Skill.addSkill(skill);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteSkill(req.params.name);
    res.redirect('/skills');
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.name)
    });
}

function update(req, res) {
    Skill.update(req.params.name, req.body);
    res.redirect('/skills');
}