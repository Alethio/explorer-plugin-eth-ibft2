import { IPlugin } from "plugin-api";
import { extraDataModule } from "./module/extraDataModule";

const plugin: IPlugin = {
    init(config, api, logger, publicPath) {
        __webpack_public_path__ = publicPath;

        api.addModuleDef("module://aleth.io/eth-ibft2/block/full/extra-data",
            extraDataModule("adapter://aleth.io/full/block/details"));
        api.addModuleDef("module://aleth.io/eth-ibft2/block/lite/extra-data",
            extraDataModule("adapter://aleth.io/lite/block/details"));
    },

    getAvailableLocales() {
        return ["en-US", "zh-CN"];
    },

    async loadTranslations(locale: string) {
        return await import("./translation/" + locale + ".json");
    }
};

// tslint:disable-next-line:no-default-export
export default plugin;

export const manifest = __plugin_manifest__;
