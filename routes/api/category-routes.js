const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const categories = await Category.findAll({
    // be sure to include its associated Product data
    include: [{ model: Product }]
  });

  res.json( categories )

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Product data
  const category = await Category.findByPk( req.params.id, {
    include: [{ model: Product }]
  });

  res.json( category )

});

router.post('/', async (req, res) => {
  // create a new category
  const categoryData = await Category.create(req.body);

  res.json( categoryData ) 
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const categoryData = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  res.json( categoryData )
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id
    }
  });

  res.json(categoryData)
});

module.exports = router;
