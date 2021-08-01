import Admin from "../models/admin.model";
import Land from "../models/land.model";

export const registerAdmin = async (req: any, res: any) => {
  try {
    console.log(req.body);
    const admin = new Admin(req.body);
    const a = await admin.save();
    console.log(a);
    res
      .status(200)
      .json({ message: `Registered successfully as ${req.body.email}.` });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const loginAdmin = async (req: any, res: any) => {
  try {
    console.log(req.body);
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) {
      res.status(404).json({
        message: `Incorrect login information provided. No admin found with ${req.body.email}.`,
      });
    } else {
      if (req.body.password === admin.password) {
        res.status(200).json({
          message: `Logged in successfully.`,
        });
      } else {
        res.status(400).json({
          message: `Incorrect login information provided. Password for ${req.body.email} doesn't match with provided password.`,
        });
      }
    }
    res.status(200).json({});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLands = async (req: any, res: any) => {
  try {
    const lands = await Land.find();
    res.status(200).json({
      lands,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addLand = async (req: any, res: any) => {
  try {
    const land = new Land(req.body);
    await land.save();
    res.status(200).json({
      message: "Successfully added land " + land.name,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addAssetsToLand = async (req: any, res: any) => {
  try {
    let assets: any = [];
    await Land.updateOne(
      { _id: req.params.landid },
      { $set: { assets: assets } }
    );
    res.status(200).json({
      message: "Successfully updated land ",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
