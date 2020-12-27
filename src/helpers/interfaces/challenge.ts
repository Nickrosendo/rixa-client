import { User, PrizeItem } from '@root/helpers/interfaces';
import { Rank } from '@root/helpers/enums';

export interface ChallengeListItem {
	id: string;
	username: string;
	userThumb: string;
	title: string;
	creationDate: Date;
	rank: Rank;
	totalPrize: number;
}

export interface Challenge {
	id: string;
	creator: User;
	creationDate: Date;
	rank: Rank;
	totalPrize: number;
	participants: Array<User>;
	prizeItems: Array<PrizeItem>;
}