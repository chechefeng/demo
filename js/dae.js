var vm = new Vue({
	el:'#zhanghu',
	data:{
		dq: [{
				diquId: "0001",
				"dqName": "山西"
			},
			{
				diquId: "0002",
				"dqName": "陕西"
			},
			{
				diquId: "0003",
				"dqName": "北京"
			}
		],
		qx: [{
				qxId: "00001",
				diquId: "0001",
				"qxName": "太原"
			},
			{
				qxId: "00002",
				diquId: "0001",
				"qxName": "大同"
			},
			{
				qxId: "00003",
				diquId: "0001",
				"qxName": "朔州"
			},
			{
				qxId: "00004",
				diquId: "0002",
				"qxName": "西安"
			},
			{
				qxId: "00005",
				diquId: "0002",
				"qxName": "铜川"
			},
			{
				qxId: "00006",
				diquId: "0002",
				"qxName": "宝鸡"
			},
			{
				qxId: "00007",
				diquId: "0003",
				"qxName": "朝阳"
			},
			{
				qxId: "00008",
				diquId: "0003",
				"qxName": "海淀"
			},
			{
				qxId: "00009",
				diquId: "0003",
				"qxName": "西城"
			}
		],
		wd: [{
				wdId: "000001",
				qxId: "00001",
				"wdName": "太原南路"
			},
			{
				wdId: "000002",
				qxId: "00001",
				"wdName": "太原北路"
			},
			{
				wdId: "000003",
				qxId: "00002",
				"wdName": "大同南路"
			},
			{
				wdId: "000004",
				qxId: "00002",
				"wdName": "大同北路"
			},
			{
				wdId: "000005",
				qxId: "00003",
				"wdName": "朔州北路"
			},
			{
				wdId: "000006",
				qxId: "00003",
				"wdName": "朔州南路"
			},
			{
				wdId: "000007",
				qxId: "00004",
				"wdName": "西安南路"
			},
			{
				wdId: "000008",
				qxId: "00004",
				"wdName": "西安北路"
			},
			{
				wdId: "000009",
				qxId: "00005",
				"wdName": "铜川南路"
			},
			{
				wdId: "0000010",
				qxId: "00005",
				"wdName": "铜川北路"
			},
			{
				wdId: "0000011",
				qxId: "00006",
				"wdName": "宝鸡南路"
			},
			{
				wdId: "0000012",
				qxId: "00006",
				"wdName": "宝鸡北路"
			},
			{
				wdId: "0000013",
				qxId: "00007",
				"wdName": "朝阳南路"
			},
			{
				wdId: "0000014",
				qxId: "00007",
				"wdName": "朝阳北路"
			},
			{
				wdId: "0000015",
				qxId: "00008",
				"wdName": "海淀南路"
			},
			{
				wdId: "0000016",
				qxId: "00008",
				"wdName": "海淀北路"
			},
			{
				wdId: "0000017",
				qxId: "00009",
				"wdName": "西城南路"
			},
			{
				wdId: "0000018",
				qxId: "00009",
				"wdName": "西城北路"
			},
		],
		chengshi:[
			{
				qxId: "00001",
				diquId: "0001",
				"qxName": "太原"
			},
			{
				qxId: "00002",
				diquId: "0001",
				"qxName": "大同"
			},
			{
				qxId: "00003",
				diquId: "0001",
				"qxName": "朔州"
			},
		],
		wangdian:[
			{
				wdId: "000001",
				qxId: "00001",
				"wdName": "太原南路"
			},
			{
				wdId: "000002",
				qxId: "00001",
				"wdName": "太原北路"
			},
		],
		chengshiId:-1,
		wangdianId:-1,
	},
	methods:{
		/**
		 * 省份
		 */
		checkSFId:function(e){
			this.chengshiId = e.target.value;
			this.chengshi = [];
			for (var i = 0;i<this.qx.length;i++) {
				if (this.chengshiId == this.qx[i].diquId) {
					this.chengshi.push(this.qx[i]);
				}
			}
			console.log(this.chengshi);
		},
		/**
		 * 城市
		 */
		checkCSId:function(e){
			this.wangdianId = e.target.value;
			console.log(this.wangdianId);
			this.wangdian = [];
			for (var i = 0;i<this.wd.length;i++) {
				if (this.wangdianId == this.wd[i].qxId) {
					this.wangdian.push(this.wd[i]);
				}
			}
			console.log(this.wangdian);
		},
	}
})
