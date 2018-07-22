import React, { Component } from 'react';

class FriendshipHearts extends Component {

	render () {
		let friendInfo;
		let AbigailSplit;
		let AbigailHearts;

		friendInfo = this.props.friendLine.slice(11, 140);
		AbigailSplit = friendInfo[1].split(":");
		AbigailHearts = (friendInfo.slice(2, 7)).map(hearts => <li>{hearts}</li>);

		let AlexSplit;
		let AlexHearts;

		AlexSplit = friendInfo[7].split(":");
		AlexHearts = (friendInfo.slice(8, 14)).map(hearts => <li>{hearts}</li>);

		let ElliottSplit;
		let ElliottHearts;

		ElliottSplit = friendInfo[14].split(":");
		ElliottHearts = (friendInfo.slice(15, 20)).map(hearts => <li>{hearts}</li>);

		let EmilySplit;
		let EmilyHearts;

		EmilySplit = friendInfo[20].split(":");
		EmilyHearts = (friendInfo.slice(21, 26)).map(hearts => <li>{hearts}</li>);

		let HaleySplit;
		let HaleyHearts;

		HaleySplit = friendInfo[26].split(":");
		HaleyHearts = (friendInfo.slice(27, 32)).map(hearts => <li>{hearts}</li>);

		let HarveySplit;
		let HarveyHearts;

		HarveySplit = friendInfo[32].split(":");
		HarveyHearts = (friendInfo.slice(33, 38)).map(hearts => <li>{hearts}</li>);

		let LeahSplit;
		let LeahHearts;

		LeahSplit = friendInfo[38].split(":");
		LeahHearts = (friendInfo.slice(39, 44)).map(hearts => <li>{hearts}</li>);

		let MaruSplit;
		let MaruHearts;

		MaruSplit = friendInfo[44].split(":");
		MaruHearts = (friendInfo.slice(45, 50)).map(hearts => <li>{hearts}</li>);

		let PennySplit;
		let PennyHearts;

		PennySplit = friendInfo[50].split(":");
		PennyHearts = (friendInfo.slice(51, 56)).map(hearts => <li>{hearts}</li>);

		let SamSplit;
		let SamHearts;

		SamSplit = friendInfo[56].split(":");
		SamHearts = (friendInfo.slice(57, 63)).map(hearts => <li>{hearts}</li>);

		let SebastianSplit;
		let SebastianHearts;

		SebastianSplit = friendInfo[63].split(":");
		SebastianHearts = (friendInfo.slice(64, 69)).map(hearts => <li>{hearts}</li>);

		let ShaneSplit;
		let ShaneHearts;

		ShaneSplit = friendInfo[69].split(":");
		ShaneHearts = (friendInfo.slice(70, 77)).map(hearts => <li>{hearts}</li>);

		let CarolineSplit;

		CarolineSplit = friendInfo[79].split(":");

		let ClintSplit;
		let ClintHearts;

		ClintSplit = friendInfo[81].split(":");
		ClintHearts = (friendInfo.slice(82, 84)).map(hearts => <li>{hearts}</li>);

		let DemetriusSplit;

		DemetriusSplit = friendInfo[84].split(":");

		let DwarfSplit;

		DwarfSplit = friendInfo[86].split(":");

		let EvelynSplit;

		EvelynSplit = friendInfo[88].split(":");

		let GeorgeSplit;

		GeorgeSplit = friendInfo[90].split(":");

		let GusSplit;

		GusSplit = friendInfo[92].split(":");

		let JasSplit;

		JasSplit = friendInfo[94].split(":");

		let JodiSplit;

		JodiSplit = friendInfo[96].split(":");

		let KentSplit;

		KentSplit = friendInfo[98].split(":");

		let KrobusSplit;

		KrobusSplit = friendInfo[100].split(":");

		let LewisSplit;

		LewisSplit = friendInfo[101].split(":");

		let LinusSplit;
		let LinusHearts;

		LinusSplit = friendInfo[103].split(":");
		LinusHearts = (friendInfo.slice(104, 106)).map(hearts => <li>{hearts}</li>);

		let MarnieSplit;

		MarnieSplit = friendInfo[106].split(":");

		let PamSplit;

		PamSplit = friendInfo[107].split(":");

		let PierreSplit;

		PierreSplit = friendInfo[109].split(":");

		let RobinSplit;

		RobinSplit = friendInfo[111].split(":");

		let SandySplit;

		SandySplit = friendInfo[113].split(":");

		let VincentSplit;

		VincentSplit = friendInfo[114].split(":");

		let WillySplit;

		WillySplit = friendInfo[115].split(":");

		let WizardSplit;

		WizardSplit = friendInfo[117].split(":");

		return ( 
			<ul>
				<strong>{friendInfo[0].toUpperCase()}</strong>
				<li><strong>{AbigailSplit[0]}:</strong> {AbigailSplit[1]}</li>
				<ul>
					<li>{AbigailHearts}</li>
				</ul>
				<li><strong>{AlexSplit[0]}:</strong> {AlexSplit[1]}</li>
				<ul>
					<li>{AlexHearts}</li>
				</ul>
				<li><strong>{ElliottSplit[0]}:</strong> {ElliottSplit[1]}</li>
				<ul>
					<li>{ElliottHearts}</li>
				</ul>
				<li><strong>{EmilySplit[0]}:</strong> {EmilySplit[1]}</li>
				<ul>
					<li>{EmilyHearts}</li>
				</ul>
				<li><strong>{HaleySplit[0]}:</strong> {HaleySplit[1]}</li>
				<ul>
					<li>{HaleyHearts}</li>
				</ul>
				<li><strong>{HarveySplit[0]}:</strong> {HarveySplit[1]}</li>
				<ul>
					<li>{HarveyHearts}</li>
				</ul>
				<li><strong>{LeahSplit[0]}:</strong> {LeahSplit[1]}</li>
				<ul>
					<li>{LeahHearts}</li>
				</ul>
				<li><strong>{MaruSplit[0]}:</strong> {MaruSplit[1]}</li>
				<ul>
					<li>{MaruHearts}</li>
				</ul>
				<li><strong>{PennySplit[0]}:</strong> {PennySplit[1]}</li>
				<ul>
					<li>{PennyHearts}</li>
				</ul>
				<li><strong>{SamSplit[0]}:</strong> {SamSplit[1]}</li>
				<ul>
					<li>{SamHearts}</li>
				</ul>
				<li><strong>{SebastianSplit[0]}:</strong> {SebastianSplit[1]}</li>
				<ul>
					<li>{SebastianHearts}</li>
				</ul>
				<li><strong>{ShaneSplit[0]}:</strong> {ShaneSplit[1]}</li>
				<ul>
					<li>{ShaneHearts}</li>
				</ul>
				<br />
				<strong>{friendInfo[78].toUpperCase()}</strong>
				<li><strong>{CarolineSplit[0]}:</strong> {CarolineSplit[1]}</li>
				<ul>
					<li>{friendInfo[80]}</li>
				</ul>
				<li><strong>{ClintSplit[0]}:</strong> {ClintSplit[1]}</li>
				<ul>
					<li>{ClintHearts}</li>
				</ul>
				<li><strong>{DemetriusSplit[0]}:</strong> {DemetriusSplit[1]}</li>
				<ul>
					<li>{friendInfo[85]}</li>
				</ul>
				<li><strong>{DwarfSplit[0]}:</strong> {DwarfSplit[1]}</li>
				<ul>
					<li>{friendInfo[87]}</li>
				</ul>
				<li><strong>{EvelynSplit[0]}:</strong> {EvelynSplit[1]}</li>
				<ul>
					<li>{friendInfo[89]}</li>
				</ul>
				<li><strong>{GeorgeSplit[0]}:</strong> {GeorgeSplit[1]}</li>
				<ul>
					<li>{friendInfo[91]}</li>
				</ul>
				<li><strong>{GusSplit[0]}:</strong> {GusSplit[1]}</li>
				<ul>
					<li>{friendInfo[93]}</li>
				</ul>
				<li><strong>{JasSplit[0]}:</strong> {JasSplit[1]}</li>
				<ul>
					<li>{friendInfo[95]}</li>
				</ul>
				<li><strong>{JodiSplit[0]}:</strong> {JodiSplit[1]}</li>
				<ul>
					<li>{friendInfo[97]}</li>
				</ul>
				<li><strong>{KentSplit[0]}:</strong> {KentSplit[1]}</li>
				<ul>
					<li>{friendInfo[99]}</li>
				</ul>
				<li><strong>{KrobusSplit[0]}:</strong> {KrobusSplit[1]}</li>
				<li><strong>{LewisSplit[0]}:</strong> {LewisSplit[1]}</li>
				<ul>
					<li>{friendInfo[102]}</li>
				</ul>
				<li><strong>{LinusSplit[0]}:</strong> {LinusSplit[1]}</li>
				<ul>
					<li>{LinusHearts}</li>
				</ul>
				<li><strong>{MarnieSplit[0]}:</strong> {MarnieSplit[1]}</li>
				<li><strong>{PamSplit[0]}:</strong> {PamSplit[1]}</li>
				<ul>
					<li>{friendInfo[108]}</li>
				</ul>
				<li><strong>{PierreSplit[0]}:</strong> {PierreSplit[1]}</li>
				<ul>
					<li>{friendInfo[110]}</li>
				</ul>
				<li><strong>{RobinSplit[0]}:</strong> {RobinSplit[1]}</li>
				<ul>
					<li>{friendInfo[112]}</li>
				</ul>
				<li><strong>{SandySplit[0]}:</strong> {SandySplit[1]}</li>
				<li><strong>{VincentSplit[0]}:</strong> {VincentSplit[1]}</li>
				<li><strong>{WillySplit[0]}:</strong> {WillySplit[1]}</li>
				<ul>
					<li>{friendInfo[116]}</li>
				</ul>
				<li><strong>{WizardSplit[0]}:</strong> {WizardSplit[1]}</li>
			</ul>
		);
	}
}

export default FriendshipHearts;