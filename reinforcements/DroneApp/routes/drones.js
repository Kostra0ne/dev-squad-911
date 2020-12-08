var express = require('express');
var router = express.Router();
const DroneModel = require('./../models/Drone')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const allDrones = await DroneModel.find()
    res.render("drones", { allDrones, title: 'Drones' })
  }
  catch (err) {
    next(err)
  }
});

router.get('/create', function (req, res, next) {
  res.render("createDrone")
});

router.post('/create', async function (req, res, next) {
  try {
    const newDrone = await DroneModel.create(req.body)
    res.redirect("/drones")
  } catch (err) {
    next(err)
  }
});

//DELETE

router.get('/:id/delete', async function (req, res, next) {
  try {
    await DroneModel.findByIdAndRemove(req.params.id)
    res.redirect('/drones')
  } catch (err) {
    next(err)
  }
})

//UPDATE

router.get('/:id/update', async function (req, res, next) {
  try {
    const oneDrone = await DroneModel.findById(req.params.id)
    res.render("updateDrone", oneDrone)
  } catch (err) {
    next(err)
  }
})

router.post('/:id/update', async function (req, res, next) {
  try {
    const updatedOne = await DroneModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.redirect('/drones')
  } catch (err) {
    next(err)
  }
})

module.exports = router;
