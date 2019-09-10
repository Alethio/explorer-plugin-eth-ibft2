import { IPlugin } from "plugin-api";
import { extraDataModule } from "./module/extraDataModule";

const plugin: IPlugin = {
    init(config, api, logger, publicPath) {
        __webpack_public_path__ = publicPath;

        api.addModuleDef("module://aleth.io/block/ibft2-extra-data", extraDataModule);
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
