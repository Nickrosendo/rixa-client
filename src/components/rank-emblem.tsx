import React from 'react';
import { Avatar, Tooltip } from '@chakra-ui/react';

import { Rank } from '@root/helpers/enums';

export interface RankEmblemProps {
	rank: Rank;
	width: string;
	height: string;
}

const rankingMap = { ...Rank };
rankingMap[Rank.Bronze] =
	'https://opgg-static.akamaized.net/images/medals/bronze_1.png?image=q_auto:best&v=1';
rankingMap[Rank.Silver] =
	'https://opgg-static.akamaized.net/images/medals/silver_1.png?image=q_auto:best&v=1';
rankingMap[Rank.Gold] =
	'https://opgg-static.akamaized.net/images/medals/gold_1.png?image=q_auto:best&v=1';
rankingMap[Rank.Platinum] =
	'https://opgg-static.akamaized.net/images/medals/platinum_1.png?image=q_auto:best&v=1';
rankingMap[Rank.Diamond] =
	'https://opgg-static.akamaized.net/images/medals/diamond_1.png?image=q_auto:best&v=1';
rankingMap[Rank.Master] =
	'https://opgg-static.akamaized.net/images/medals/master_1.png?image=q_auto:best&v=1';
rankingMap[Rank.Challenger] =
	'https://opgg-static.akamaized.net/images/medals/challenger_1.png?image=q_auto:best&v=1';

const rankingLabels = {
	...Object.keys(Rank).filter((key: string) => isNaN(Number(key))),
};

export const RankEmblem: React.FC<RankEmblemProps> = ({
	rank = Rank.Gold,
	width = '24px',
	height = '24px',
}) => {
	return (
		<Tooltip hasArrow label={rankingLabels[rank - 1]}>
			<Avatar bg="transparent" w={width} h={height} src={rankingMap[rank]} />
		</Tooltip>
	);
};
