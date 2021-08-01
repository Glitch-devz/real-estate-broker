import Land from "../models/land.model";

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
