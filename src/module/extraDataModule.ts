import { IModuleDef } from "plugin-api";
import { IExtraDataProps, ExtraData } from "./ExtraData";
import { ExtraDataDecoder } from "../data/ExtraDataDecoder";

interface IBlockDetails {
    extraData: string;
}

export const extraDataModule: IModuleDef<IExtraDataProps, {}, void> = {
    contextType: {},
    dataAdapters: [{ ref: "adapter://aleth.io/block/details" }],
    getContentComponent: async () => ExtraData,
    getContentProps: ({ asyncData, translation, locale }) => ({
        ibftDetails: new ExtraDataDecoder().decode(
            (asyncData.get("adapter://aleth.io/block/details")!.data as IBlockDetails).extraData),
        translation,
        locale
    })
};
