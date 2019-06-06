export interface IIbftVote {
    address: string;
    vote: boolean;
}
export interface IIbftDetails {
    extraData: string;
    validators: string[];
    votes: IIbftVote[];
    blockTries: number;
    commitSeals: string[];
}
