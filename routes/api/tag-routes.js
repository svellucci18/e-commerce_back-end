const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const tags = await Tag.findAll({
    // Configure the 'findAll'
    // be sure to include its associated Product data
    include: [{ model: Product }]
  });

  res.json( tags )

});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag = await Tag.findByPk( req.params.id, {
    include: [{ model: Product }]
  });

  res.json( tag )
});

router.post('/', async (req, res) => {
  // create a new tag
  const tagData = await Tag.create(req.body);

  res.json( tagData )
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const tagData = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  res.json( tagData )
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id
    }
  });

  res.json( tagData )
});

module.exports = router;
