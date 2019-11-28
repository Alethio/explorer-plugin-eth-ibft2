import { IModuleDef } from "plugin-api";
import { IExtraDataProps, ExtraData } from "./ExtraData";
import { ExtraDataDecoder } from "../data/ExtraDataDecoder";
import { IIbftDetails } from "../data/IIbftDetails";

interface IBlockData {
    extraData: string;
}

export const extraDataModule: (blockDataUri: string) => IModuleDef<IExtraDataProps, {}, void> = (blockDataUri) => ({
    contextType: {},
    dataAdapters: [{
        alias: "ibftDetails",
        def: {
            contextType: {},
            dependencies: [blockDataUri],
            async load(context, cancelToken, depData) {
                return new ExtraDataDecoder().decode(
                    (depData.get(blockDataUri)! as IBlockData).extraData);
            }
        }
    }],
    getContentComponent: async () => ExtraData,
    getContentProps: ({ asyncData, translation, locale }) => ({
        ibftDetails: asyncData.get("ibftDetails")!.data as IIbftDetails,
        translation,
        locale
    })
});
