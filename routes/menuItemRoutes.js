const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/MenuItem");

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("Menu items fetched");
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newMenuItem = new MenuItem(data);

    //save the new person data to the db
    const response = await newMenuItem.save();
    console.log("Menu item saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;

    if (taste == "spicy" || taste == "sweet" || taste == "sour") {
      const response = await MenuItem.find({ taste: taste });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      console.log("error");
      res.status(404).json({ error: "Invalid taste type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try{
    const menuItemId = req.params.id;
    const updateMenuItemData = req.body;

    const response = await MenuItem.findByIdAndUpdate(menuItemId, updateMenuItemData, { 
      new: true,
      runValidators: true
    });

    if(!response){
      res.status(404).json({ error: "Menu Item not found" });
    }

    console.log("Menu Item updated"), 
    res.status(200).json(response);
  }catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.delete("/:id", async (req, res) => {
  try{
    const menuItemId = req.params.id;

    const response = await MenuItem.findByIdAndDelete(menuItemId);

    if(!response){
      res.status(404).json({ error: "Menu Item not found" });
    }
    console.log("data deleted");
    res.status(200).json({message: "Menu Item deleted successfully"});
  }catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
})


module.exports = router;
