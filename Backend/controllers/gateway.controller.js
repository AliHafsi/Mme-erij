var {gateway}=require('../models/Gateway');
router.get('/', (req, res) => {
    gateway.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Gateways :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    gateway.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Gateway :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var Gat = new gateway({
        id: req.body.id,
        Latitude: req.body.Latitude,
        Longitude: req.body.Longitude,
        Description: req.body.Description,
    });
    Gat.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Gateway Save :' + JSON.stringify(err, undefined, 2)); }
    });
})

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var Gat = {
        id: req.body.id,
        Latitude: req.body.Latitude,
        Longitude: req.body.Longitude,
        Description: req.body.Description
    };
    gateway.findByIdAndUpdate(req.params.id, { $set: Gat }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Gateway Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    gateway.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in gateway Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
