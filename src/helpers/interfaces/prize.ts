import { User } from './index'

export interface PrizeItem {
	id: string
	value: number
	creator: User
	creationDate: Date
	challengeId: string
};
