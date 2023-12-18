import { settingModel } from "../../../../DB/model/setting.js";
import { apiError, asyncHandle } from "../../../middleware/errorHandle.js";
export const getAllSetting = (req, res) => {
  res.status(200).json({ message: "welcome to setting api" });
};
export const createSetting = async (req, res) => {
  const { systemName, mainColor, secondaryColor } = req.body;
  // const { filename } = req.file;
  const setting = await settingModel.findOne({ systemName });
  if (setting) return next(new apiError("this setting is rally exist", 400));
  const addSetting = new settingModel({
    systemName,
    mainColor,
    secondaryColor,
    // logoPicture: filename,
  });
  const saveSetting = await addSetting.save();
  if (!saveSetting) return next(new apiError("in-valid to save setting"));
  else
    res.status(200).json({
      message: "save setting successfully",
      setting: {
        systemName: saveSetting.systemName,
        mainColor: saveSetting.mainColor,
        secondaryColor: saveSetting.secondaryColor,
        // logoPicture: saveSetting.logoPicture,
      },
    });
};
export const updateSetting = async (req, res) => {
  const { systemName, mainColor, secondaryColor } = req.body;
  const { filename } = req.file;
  const setting = await settingModel.findOne({ systemName });
  if (setting) return next(new apiError("this setting is rally exist", 400));
  const addSetting = new settingModel({
    systemName,
    mainColor,
    secondaryColor,
    logoPicture: filename,
  });
  const saveSetting = await addSetting.save();
  if (!saveSetting) return next(new apiError("in-valid to save setting"));
  else
    res.status(200).json({
      message: "save setting successfully",
      setting: {
        systemName: saveSetting.systemName,
        mainColor: saveSetting.mainColor,
        secondaryColor: saveSetting.secondaryColor,
        logoPicture: saveSetting.logoPicture,
      },
    });
};
