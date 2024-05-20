const express = require("express");

const paintings = express.Router();

const {
  getAllPaintings,
  getPainting,
  createPainting,
  updatePainting,
  deletePainting,
} = require("../queries/painting");
// const { checkName } = require("../unused/checkPainting");

//INDEX
paintings.get("/", async (req, res) => {
  const allPaintings = await getAllPaintings();
try{
  if(allPaintings[0]) {
    res.status(200).json(allPaintings);
  } 
}catch(err){
    res.status(500).json({ err: "server error" });
  }
});

//SHOW
paintings.get("/:id", async (req, res) => {
  try{
    const { id } = req.params;
    const painting = await getPainting(id);
    if (painting) {
      res.json(painting);
    }
  }catch(err){
    res.status(404).json({ err: `${id} not found` });
  }
});

//CREATE
paintings.post("/", async (req, res) => {
  if (!req.body.image) {
    req.body.image =
      "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
  }
  if (!req.body.size) {
    req.body.size = 0;
  }
  if (!req.body.price) {
    req.body.price = 0;
  }

  try {
    const painting = await createPainting(req.body);
    res.json(painting);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
});

//Update
paintings.put("/:id", async (req, res) => {
  const { id } = req.params;

  if (!req.body.image) {
    req.body.image =
      "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
  }
  if (!req.body.size) {
    req.body.size = 0;
  }
  if (!req.body.price) {
    req.body.price = 0;
  }
  try {
    const updatedPainting = await updatePainting(id, req.body);
    res.json(updatedPainting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Delete
paintings.delete("/:id", async (req, res) => {
  try{
  const { id } = req.params;
  const deletedPainting = await deletePainting(id);

  if (deletedPainting.id) {
    res.status(200).json(deletedPainting);
  }
  }catch(err){
    res.status(404).json({err: `Painting ${id} is No Longer Available`});
  }
   
    
  
});

module.exports = paintings;