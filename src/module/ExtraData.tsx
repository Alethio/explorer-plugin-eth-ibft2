import * as React from "react";
import { LayoutRow } from "@alethio/ui/lib/layout/content/LayoutRow";
import { LayoutRowItem } from "@alethio/ui/lib/layout/content/LayoutRowItem";
import { Label } from "@alethio/ui/lib/data/Label";
import { DecodedHexData } from "@alethio/ui/lib/data/hex/DecodedHexData";
import { ValueBox } from "@alethio/ui/lib/layout/content/box/ValueBox";
import { NumberBox } from "@alethio/ui/lib/data/box/NumberBox";
import { HashValueBox } from "@alethio/ui/lib/data/box/HashValueBox";
import { AddressHashBox } from "@alethio/explorer-ui/lib/box/account/AddressHashBox";
import { IIbftDetails } from "../data/IIBFTDetails";
import { ITranslation } from "plugin-api";

export interface IExtraDataProps {
    ibftDetails: IIbftDetails;
    translation: ITranslation;
    locale: string;
}

export class ExtraData extends React.Component<IExtraDataProps> {
    render() {
        let { ibftDetails, translation: tr, locale } = this.props;

        return (
            <>
                { ibftDetails.extraData.replace("0", "") === "x" ?
                <LayoutRow>
                    <LayoutRowItem autoHeight>
                        <Label>{tr.get("blockView.content.extraData.label")}</Label>
                        <DecodedHexData data={ibftDetails.extraData} />
                    </LayoutRowItem>
                </LayoutRow> : null}
                <LayoutRow>
                    <LayoutRowItem fullRow>
                        <Label>{tr.get("blockView.content.ibft2.validators")}</Label>
                        { ibftDetails.validators.map((item) =>
                            <AddressHashBox key={item}>{item}</AddressHashBox>
                        ) }
                    </LayoutRowItem>
                </LayoutRow>
                { ibftDetails.votes.length !== 0 &&
                    <LayoutRow>
                        <LayoutRowItem fullRow>
                            <Label>{tr.get("blockView.content.ibft2.voting")}</Label>
                            { ibftDetails.votes.map((item) =>
                                <React.Fragment key={item.address}>
                                    <AddressHashBox>{item.address}</AddressHashBox>
                                    <ValueBox>{item.vote ?
                                        tr.get("blockView.content.ibft2.added") :
                                        tr.get("blockView.content.ibft2.removed")}</ValueBox>
                                </React.Fragment>
                            )}
                        </LayoutRowItem>
                    </LayoutRow>
                }
                <LayoutRow>
                    <LayoutRowItem>
                        <Label>{tr.get("blockView.content.ibft2.round")}</Label>
                        <NumberBox value={ibftDetails.blockTries} locale={locale}></NumberBox>
                    </LayoutRowItem>
                </LayoutRow>
                { ibftDetails.commitSeals.length !== 0 &&
                    <LayoutRow>
                        <LayoutRowItem fullRow>
                            <Label>{tr.get("blockView.content.ibft2.commitSeals")}</Label>
                            { ibftDetails.commitSeals.map((item) =>
                                <React.Fragment key={item}>
                                    <HashValueBox>{item}</HashValueBox>
                                </React.Fragment>
                            )}
                        </LayoutRowItem>
                    </LayoutRow>
                }
            </>
        );
    }
}
