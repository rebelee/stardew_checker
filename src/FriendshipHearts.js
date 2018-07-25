import React, { Component } from 'react';

class FriendshipHearts extends Component {

	render () {
		function hearts(name) {
			let heart = []

			for (var i = 0; i <= name.length-1; i++) {
				var num = name[i].substring(0, name[i].indexOf('H'))
				var seen = <span class="seen">({'\u2714'}{num}{'\u2665'})</span>
				var not_seen = <span class="notseen">({'\u2718'}{num}{'\u2665'})</span>

				if(name[i].length <= 15) {
					heart.push(seen)
				} else {
					heart.push(not_seen)
				}
			}	

			return heart;		
		}

		function wiki(name, link) {
			return (link) ? null : (<a href={'http://stardewvalleywiki.com/' + name}>{name}</a>)
		}

		let friendInfo;
		friendInfo = this.props.friendLine.slice(11, 140);

		let AbigailSplit;
		let AbigailHearts;

		AbigailSplit = friendInfo[1].split(":");
		AbigailHearts = hearts(friendInfo.slice(2,7));

		let AlexSplit;
		let AlexHearts;

		AlexSplit = friendInfo[7].split(":");
		AlexHearts = hearts(friendInfo.slice(8, 14));

		let ElliottSplit;
		let ElliottHearts;

		ElliottSplit = friendInfo[14].split(":");
		ElliottHearts = hearts(friendInfo.slice(15, 20));


		let EmilySplit;
		let EmilyHearts;

		EmilySplit = friendInfo[20].split(":");
		EmilyHearts = hearts(friendInfo.slice(21, 26));

		let HaleySplit;
		let HaleyHearts;

		HaleySplit = friendInfo[26].split(":");
		HaleyHearts = hearts(friendInfo.slice(27, 32));

		let HarveySplit;
		let HarveyHearts;

		HarveySplit = friendInfo[32].split(":");
		HarveyHearts = hearts(friendInfo.slice(33, 38));

		let LeahSplit;
		let LeahHearts;

		LeahSplit = friendInfo[38].split(":");
		LeahHearts = hearts(friendInfo.slice(39, 44));

		let MaruSplit;
		let MaruHearts;

		MaruSplit = friendInfo[44].split(":");
		MaruHearts = hearts(friendInfo.slice(45, 50));

		let PennySplit;
		let PennyHearts;

		PennySplit = friendInfo[50].split(":");
		PennyHearts = hearts(friendInfo.slice(51, 56));

		let SamSplit;
		let SamHearts;

		SamSplit = friendInfo[56].split(":");
		SamHearts = hearts(friendInfo.slice(57, 63));

		let SebastianSplit;
		let SebastianHearts;

		SebastianSplit = friendInfo[63].split(":");
		SebastianHearts = hearts(friendInfo.slice(64, 69));

		let ShaneSplit;
		let ShaneHearts;

		ShaneSplit = friendInfo[69].split(":");
		ShaneHearts = hearts(friendInfo.slice(70, 77));

		let CarolineSplit;
		let CarolineHearts;

		CarolineSplit = friendInfo[79].split(":");
		CarolineHearts = hearts(friendInfo.slice(80, 81));

		let ClintSplit;
		let ClintHearts;

		ClintSplit = friendInfo[81].split(":");
		ClintHearts = hearts(friendInfo.slice(82, 84));

		let DemetriusSplit;
		let DemetriusHearts;

		DemetriusSplit = friendInfo[84].split(":");
		DemetriusHearts = hearts(friendInfo.slice(85,86));

		let DwarfSplit;
		let DwarfHearts;

		DwarfSplit = friendInfo[86].split(":");
		DwarfHearts = hearts(friendInfo.slice(87, 88));

		let EvelynSplit;
		let EvelynHearts;

		EvelynSplit = friendInfo[88].split(":");
		EvelynHearts = hearts(friendInfo.slice(89, 90));

		let GeorgeSplit;
		let GeorgeHearts;

		GeorgeSplit = friendInfo[90].split(":");
		GeorgeHearts = hearts(friendInfo.slice(91, 92));

		let GusSplit;
		let GusHearts;

		GusSplit = friendInfo[92].split(":");
		GusHearts = hearts(friendInfo.slice(93, 94));

		let JasSplit;
		let JasHearts;

		JasSplit = friendInfo[94].split(":");
		JasHearts = hearts(friendInfo.slice(95, 96));

		let JodiSplit;
		let JodiHearts;

		JodiSplit = friendInfo[96].split(":");
		JodiHearts = hearts(friendInfo.slice(97, 98));

		let KentSplit;
		let KentHearts;

		KentSplit = friendInfo[98].split(":");
		KentHearts = hearts(friendInfo.slice(99, 100));

		let KrobusSplit;

		KrobusSplit = friendInfo[100].split(":");

		let LewisSplit;
		let LewisHearts;

		LewisSplit = friendInfo[101].split(":");
		LewisHearts = hearts(friendInfo.slice(102, 103));

		let LinusSplit;
		let LinusHearts;

		LinusSplit = friendInfo[103].split(":");
		LinusHearts = hearts(friendInfo.slice(104, 106));

		let MarnieSplit;

		MarnieSplit = friendInfo[106].split(":");

		let PamSplit;
		let PamHearts;

		PamSplit = friendInfo[107].split(":");
		PamHearts = hearts(friendInfo.slice(108, 109));

		let PierreSplit;
		let PierreHearts;

		PierreSplit = friendInfo[109].split(":");
		PierreHearts = hearts(friendInfo.slice(110, 111));

		let RobinSplit;
		let RobinHearts;

		RobinSplit = friendInfo[111].split(":");
		RobinHearts = hearts(friendInfo.slice(112, 113));

		let SandySplit;

		SandySplit = friendInfo[113].split(":");

		let VincentSplit;

		VincentSplit = friendInfo[114].split(":");

		let WillySplit;
		let WillyHearts;

		WillySplit = friendInfo[115].split(":");
		WillyHearts = hearts(friendInfo.slice(116, 117));

		let WizardSplit;

		WizardSplit = friendInfo[117].split(":");

		return ( 
			<ul class = 'main'>
				<li class = 'none'><strong>{friendInfo[0].toUpperCase()}</strong></li>
				<li class = 'main-list'><strong>{wiki(AbigailSplit[0])}:</strong> {AbigailSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {AbigailHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(AlexSplit[0])}:</strong> {AlexSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {AlexHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(ElliottSplit[0])}:</strong> {ElliottSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {ElliottHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(EmilySplit[0])}:</strong> {EmilySplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {EmilyHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(HaleySplit[0])}:</strong> {HaleySplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {HaleyHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(HarveySplit[0])}:</strong> {HarveySplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {HarveyHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(LeahSplit[0])}:</strong> {LeahSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {LeahHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(MaruSplit[0])}:</strong> {MaruSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {MaruHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(PennySplit[0])}:</strong> {PennySplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {PennyHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(SamSplit[0])}:</strong> {SamSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {SamHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(SebastianSplit[0])}:</strong> {SebastianSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {SebastianHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(ShaneSplit[0])}:</strong> {ShaneSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {ShaneHearts}</li>
				</ul>
				<br />
				<li class = 'none'><strong>{friendInfo[78].toUpperCase()}</strong></li>
				<li class = 'main-list'><strong>{wiki(CarolineSplit[0])}:</strong> {CarolineSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {CarolineHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(ClintSplit[0])}:</strong> {ClintSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {ClintHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(DemetriusSplit[0])}:</strong> {DemetriusSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {DemetriusHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(DwarfSplit[0])}:</strong> {DwarfSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {DwarfHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(EvelynSplit[0])}:</strong> {EvelynSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {EvelynHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(GeorgeSplit[0])}:</strong> {GeorgeSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {GeorgeHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(GusSplit[0])}:</strong> {GusSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {GusHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(JasSplit[0])}:</strong> {JasSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {JasHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(JodiSplit[0])}:</strong> {JodiSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {JodiHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(KentSplit[0])}:</strong> {KentSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {KentHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(KrobusSplit[0])}:</strong> {KrobusSplit[1].replace(/H/g, '\u2665')}</li>
				<li class = 'main-list'><strong>{wiki(LewisSplit[0])}:</strong> {LewisSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {LewisHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(LinusSplit[0])}:</strong> {LinusSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {LinusHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(MarnieSplit[0])}:</strong> {MarnieSplit[1].replace(/H/g, '\u2665')}</li>
				<li class = 'main-list'><strong>{wiki(PamSplit[0])}:</strong> {PamSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {PamHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(PierreSplit[0])}:</strong> {PierreSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {PierreHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(RobinSplit[0])}:</strong> {RobinSplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {RobinHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(SandySplit[0])}:</strong> {SandySplit[1].replace(/H/g, '\u2665')}</li>
				<li class = 'main-list'><strong>{wiki(VincentSplit[0])}:</strong> {VincentSplit[1].replace(/H/g, '\u2665')}</li>
				<li class = 'main-list'><strong>{wiki(WillySplit[0])}:</strong> {WillySplit[1].replace(/H/g, '\u2665')}</li>
				<ul class = 'indent'>
					<li class = 'indent'>Event(s): {WillyHearts}</li>
				</ul>
				<li class = 'main-list'><strong>{wiki(WizardSplit[0])}:</strong> {WizardSplit[1].replace(/H/g, '\u2665')}</li>
			</ul>
		);
	}
}

export default FriendshipHearts;