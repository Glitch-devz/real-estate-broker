import Admin from "../models/admin";

export const registerAdmin = async (req: any, res: any) => {
  try {
    console.log(req.body);
    const admin = new Admin(req.body);
    const a = await admin.save();
    console.log(a);
    res.status(200).json({});
  } catch (error) {
    res.status(500).json(error.message);
  }
};
