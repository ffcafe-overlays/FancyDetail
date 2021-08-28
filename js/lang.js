var userLang = "zh";
userLang = navigator.language || navigator.userLanguage;
userLang = userLang.substring(0, 2);

var Languages = {
	"lang":{
		"ko":"한국어",
		"en":"English",
		"ja":"日本語",
		"zh":"中文",
	},
	"data":[
		"settings", "html", "label", "columns"
	],
	"settings":{
		"glapld":{
			"ko":"검술사, 나이트 배경색",
			"en":"GLA, PLD BackColor",
			"ja":"剣術士, ナイト 背景色",
			"zh":"剑术师/骑士 背景色"
		},
		"mrdwar":{
			"ko":"도끼술사, 전사 배경색",
			"en":"MRD, WAR BackColor",
			"ja":"斧術士, 戦士 背景色",
			"zh":"斧术师/战士 背景色"
		},
		"drk":{
			"ko":"암흑기사 배경색",
			"en":"DRK BackColor",
			"ja":"暗黒騎士 背景色",
			"zh":"暗黑骑士 背景色"
		},
		"zhjwhm":{
			"ko":"환술사, 백마도사 배경색",
			"en":"zhJ, WHM BackColor",
			"ja":"幻術士, 白魔道士 背景色",
			"zh":"幻术师/白魔法师 背景色"
		},
		"sch":{
			"ko":"학자 배경색",
			"en":"SCH BackColor",
			"ja":"学者 背景色",
			"zh":"学者 背景色"
		},
		"ast":{
			"ko":"점성술사 배경색",
			"en":"ACT BackColor",
			"ja":"占星術師 背景色",
			"zh":"占星术士 背景色"
		},
		"pglmnk":{
			"ko":"격투사, 몽크 배경색",
			"en":"PGL, MNK BackColor",
			"ja":"格闘士, モンク 背景色",
			"zh":"格斗家/武僧 背景色"
		},
		"lncdrg":{
			"ko":"창술사, 용기사 배경색",
			"en":"LNC, DRG BackColor",
			"ja":"槍術士, 竜騎士 背景色",
			"zh":"枪术师/龙骑士 背景色"
		},
		"rognin":{
			"ko":"쌍검사, 닌자 배경색",
			"en":"ROG, NIN BackColor",
			"ja":"双剣士, 忍者 背景色",
			"zh":"双剑师/忍者 背景色"
		},
		"sam":{
			"ko":"사무라이 배경색",
			"en":"SAM BackColor",
			"ja":"侍 背景色",
			"zh":"武士 背景色"
		},
		"arcbrd":{
			"ko":"궁술사, 음유시인 배경색",
			"en":"ARC, BRD BackColor",
			"ja":"弓術士, 吟遊詩人 背景色",
			"zh":"弓箭手/吟游诗人 背景色"
		},
		"mch":{
			"ko":"기공사 배경색",
			"en":"MCH BackColor",
			"ja":"機工士 背景色",
			"zh":"机工士 背景色"
		},
		"thmblm":{
			"ko":"주술사, 흑마도사 배경색",
			"en":"THM, BLM BackColor",
			"ja":"呪術士, 黒魔道士 背景色",
			"zh":"咒术师/黑魔法师 背景色"
		},
		"azhsmn":{
			"ko":"비술사, 소환사 배경색",
			"en":"Azh, SMN BackColor",
			"ja":"巴術士, 召喚士 背景色",
			"zh":"秘术师/召唤师 背景色"
		},
		"rdm":{
			"ko":"적마도사 배경색",
			"en":"RDM BackColor",
			"ja":"赤魔道士 背景色",
			"zh":"赤魔法师 背景色"
		},
		"glapldf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"mrdwarf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"drkf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"zhjwhmf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"schf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"astf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"pglmnkf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"lncdrgf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"rogninf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"samf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"arcbrdf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"mchf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"thmblmf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"azhsmnf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"rdmf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"lmb":{
			"ko":"리미트 브레이크 배경색",
			"en":"LMB BackColor",
			"ja":"リミットブレイク 背景色",
			"zh":"极限技 背景色"
		},
		"lmbf":{
			"ko":"글자색",
			"en":"Font Color",
			"ja":"文字色",
			"zh":"文字色"
		},
		"bgcolor":{
			"ko":"배경색",
			"en":"BackColor",
			"ja":"文字色",
			"zh":"背景色"
		},
		"advancedset":{
			"ko":"고급",
			"en":"Advanced",
			"ja":"高度",
			"zh":"高级"
		},
		"user":{
			"ko":"사용자",
			"en":"USER",
			"ja":"ユーザー",
			"zh":"玩家"
		},
		"ui":{
			"ko":"표시",
			"en":"Interface",
			"ja":"インターフェース",
			"zh":"界面"
		},
		"data":{
			"ko":"데이터",
			"en":"Data",
			"ja":"データ",
			"zh":"数据"
		},
		"language":{
			"ko":"언어",
			"en":"Language",
			"ja":"言語",
			"zh":"语言"
		},
		"nickhide":{
			"ko":"자신 이외의 닉네임 블러",
			"en":"Blur User Names (exclude YOU)",
			"ja":"プレイヤー名をぼかす (自分以外)",
			"zh":"模糊角色名（自己以外）"
		},
		"rankanim":{
			"ko":"순위변경 효과 사용",
			"en":"Use Ranking Animation",
			"ja":"順位の更新にアニメーションを使う",
			"zh":"排名变化动画"
		},
		"numbanim":{
			"ko":"숫자변경 효과 사용",
			"en":"Use RDPS & RHPS Number Animation",
			"ja":"数字の更新にアニメーションを使う",
			"zh":"数字变化动画"
		},
		"hpsallview":{
			"ko":"힐러 영역에 힐러 외 직업 숨김",
			"en":"Display Only Healer on HPS Area",
			"ja":"HPS領域にヒーラーのみを表示する",
			"zh":"HPS 面板只显示治疗职业"
		},
		"opacity":{
			"ko":"막대 투명도",
			"en":"Bar Opacity",
			"ja":"バーの不透明度",
			"zh":"统计条不透明度"
		},
		"displayhps":{
			"ko":"힐러 영역 표시",
			"en":"Display HPS Area",
			"ja":"HPS領域を表示する",
			"zh":"显示 HPS 面板"
		},
		"image":{
			"ko":"배경 이미지",
			"en":"Background Image",
			"ja":"背景画像",
			"zh":"背景图"
		},
		"imgalign":{
			"ko":"이미지 정렬",
			"en":"Image Align",
			"ja":"画像の配置",
			"zh":"图片对齐"
		},
		"imgsizeopt":{
			"ko":"이미지 크기",
			"en":"Image Size",
			"ja":"画像の大きさ",
			"zh":"图片大小"
		},
		"nickshorter":{
			"ko":"이름 줄이기 (글로벌용)",
			"en":"Use Initial Name",
			"ja":"頭文字を使う",
			"zh":"名字缩略（国际服）"
		},
		"tankers":{
			"ko":"방어 역할",
			"en":"Tanker",
			"ja":"タンク",
			"zh":"防护职业"
		},
		"healers":{
			"ko":"회복 역할",
			"en":"Healer",
			"ja":"ヒーラー",
			"zh":"治疗职业"
		},
		"dealers":{
			"ko":"공격 역할",
			"en":"DPS",
			"ja":"DPS",
			"zh":"输出职业"
		},
		"rolecolor":{
			"ko":"역할 색상",
			"en":"Role Color",
			"ja":"ロールの色",
			"zh":"职业颜色"
		},
		"c_tanker":{
			"ko":"방어 역할",
			"en":"Tanker",
			"ja":"タンク",
			"zh":"防护职业"
		},
		"c_healer":{
			"ko":"회복 역할",
			"en":"Healer",
			"ja":"ヒーラー",
			"zh":"治疗职业"
		},
		"c_dps":{
			"ko":"공격 역할",
			"en":"DPS",
			"ja":"DPS",
			"zh":"输出职业"
		},
		"etcicon":{
			"ko":"막대 일반 설정",
			"en":"Bar General Setting",
			"ja":"バーの全般的な設定",
			"zh":"统计条全局设置"
		},
		"overhealcolor":{
			"ko":"오버힐 색상",
			"en":"Overheal Color",
			"ja":"オーバーヒールの色",
			"zh":"过疗颜色"
		},
		"iconglow":{
			"ko":"직업 아이콘 글로우 색",
			"en":"Icon Glow Color",
			"ja":"ジョブアイコンの光る色",
			"zh":"图标发光色"
		},
		"fonts":{
			"ko":"폰트 스타일",
			"en":"General Font Style",
			"ja":"フォント",
			"zh":"全局字体"
		},
		"fontsize":{
			"ko":"폰트 크기",
			"en":"General Font Size",
			"ja":"文字の大きさ",
			"zh":"全局字号"
		},
		"columnset":{
			"ko":"항목 설정",
			"en":"Column Setting",
			"ja":"カラム設定",
			"zh":"栏目设置"
		},
		"setting-in-out":{
			"ko":"설정 내보내기/들여오기",
			"en":"Set Export/Import",
			"ja":"設定のエクスポート／インポート",
			"zh":"导入导出"
		},
		"overlayinfo":{
			"ko":"오버레이 정보",
			"en":"Overlay Information",
			"ja":"オーバーレイ情報",
			"zh":"关于"
		},
		"topbgcolor":{
			"ko":"헤더 색상",
			"en":"Header Color",
			"ja":"ヘッダーの色",
			"zh":"标题颜色"
		}
	},
	"html":{
		"lang-setting":{
			"ko":"설정",
			"en":"Setting",
			"ja":"設定",
			"zh":"设置"
		}
	},
	"label":{
		"donate":{
			"ko":"기부",
			"en":"DONATE",
			"ja":"寄付",
			"zh":"捐赠"
		},
		"issue":{
			"ko":"문의",
			"en":"OPEN ISSUE",
			"ja":"お問い合わせ",
			"zh":"回报问题"
		},
		"setting":{
			"ko":"설정",
			"en":"SET AND INFO",
			"ja":"設定",
			"en":"设置"
		},
		"cssfilter":{
			"ko":"CSS필터",
			"en":"CSS Filter",
			"ja":"CSSフィルタ",
			"zh":"CSS 滤镜"
		},
		"widthfit":{
			"ko":"좌우에 맞게",
			"en":"Width fit",
			"ja":"横幅を合わせる",
			"zh":"自动调整宽度"
		},
		"heightfit":{
			"ko":"상하에 맞게",
			"en":"Height fit",
			"ja":"縦幅を合わせる",
			"zh":"自动调整高度"
		},
		"original":{
			"ko":"원본",
			"en":"Original",
			"ja":"そのまま",
			"zh":"原始"
		},
		"notuse":{
			"ko":"Aquamarin Diamond (사용 안 함)",
			"en":"Aquamarin Diamond",
			"ja":"Naoki Yoshida",
			"zh":"显示全名"
		},
		"nameval1":{
			"ko":"Aquamarin D. (뒷 이름 줄이기)",
			"en":"Aquamarin D.",
			"ja":"Naoki Y.",
			"zh":"缩略前"
		},
		"nameval2":{
			"ko":"A. Diamond (앞 이름 줄이기)",
			"en":"A. Diamond",
			"ja":"N. Yoshida",
			"zh":"缩略后"
		},
		"nameval3":{
			"ko":"A. D. (모두 줄이기)",
			"en":"A. D.",
			"ja":"N. Y.",
			"zh":"全缩略"
		},
		"setexport":{
			"ko":"텍스트 상자를 복사하여 설정을 공유하거나 저장할 수 있습니다.",
			"en":"Copy textbox content, you can save and share this.",
			"ja":"テキストボックスの中身をコピーして、設定を共有したり、保存することができます",
			"zh":"复制文本框中的内容，用于保存或分享。"
		},
		"setimport":{
			"ko":"혹은, 공유받거나 저장한 설정이 있으면 불러올 수 있습니다.",
			"en":"Or, if you have Setting JSON. Paste that below textbox and press Allow button.",
			"ja":"また、JSONデータを持っている場合は貼り付けて適用することができます。",
			"zh":"将复制的预设内容粘贴，并点击按钮保存。"
		},
		"set-gen":{
			"ko":"일반",
			"en":"General Set",
			"ja":"全般",
			"zh":"通用设置"
		},
		"set-bgs":{
			"ko":"배경 및 헤더 설정",
			"en":"BG &amp; Header Edit",
			"ja":"背景とヘッダー",
			"zh":"背景和标题编辑"
		},
		"set-col":{
			"ko":"항목 설정",
			"en":"Columns Edit",
			"ja":"カラム編集",
			"zh":"栏目编辑"
		},
		"set-gnb":{
			"ko":"전역 바 설정",
			"en":"General Bar Set",
			"ja":"バーの設定",
			"zh":"通用统计条设置"
		},
		"set-adb":{
			"ko":"상세 바 설정",
			"en":"Advanced Bar Set",
			"ja":"バーの設定 (詳細)",
			"zh":"高级统计条设置"
		},
		"set-xim":{
			"ko":"들여오기/내보내기",
			"en":"Set Export/Import",
			"ja":"インポート／エクスポート",
			"zh":"导入导出"
		},
		"set-inf":{
			"ko":"오버레이 정보",
			"en":"Overlay Information",
			"ja":"オーバーレイ情報",
			"zh":"关于"
		}
	},
	"columns":{
		"encdps":{
			"ko":"DPS",
			"en":"DPS",
			"ja":"DPS",
			"zh":"DPS"
		},
		"enchps":{
			"ko":"HPS",
			"en":"HPS",
			"ja":"HPS",
			"zh":"HPS"
		},
		"damage":{
			"ko":"딜량",
			"en":"Damage",
			"ja":"Damage",
			"zh":"伤害"
		},
		"crithit%":{
			"ko":"극대%",
			"en":"D.Crit%",
			"ja":"D.Crit%",
			"zh":"直暴%"
		},
		"maxhit":{
			"ko":"최대딜",
			"en":"Max Hit",
			"ja":"Best Hit",
			"zh":"最高输出"
		},
		"swings":{
			"ko":"타격",
			"en":"Swing",
			"ja":"Swing",
			"zh":"伤害次数"
		},
		"misses":{
			"ko":"빗나감",
			"en":"Miss",
			"ja":"Miss",
			"zh":"Miss"
		},
		"deaths":{
			"ko":"사망",
			"en":"D",
			"ja":"死",
			"zh":"死"
		},
		"healed":{
			"ko":"힐량",
			"en":"Healed",
			"ja":"Healed",
			"zh":"治疗量"
		},
		"dps":{
			"ko":"개인DPS",
			"en":"P.DPS",
			"ja":"個人DPS",
			"zh":"PDPS"
		},
		"hps":{
			"ko":"개인HPS",
			"en":"P.HPS",
			"ja":"個人HPS",
			"zh":"PHPS"
		},
		"overHeal":{
			"ko":"오버힐",
			"en":"Ov.H",
			"ja":"Ov.H",
			"zh":"过疗"
		},
		"overHeal%":{
			"ko":"오버힐%",
			"en":"Ov.H%",
			"ja":"Ov.H%",
			"zh":"过疗%"
		},
		"damageShield":{
			"ko":"보호막",
			"en":"D.Shield",
			"ja":"バリア",
			"zh":"盾"
		},
		"effectiveHeal":{
			"en":"유효힐",
			"ko":"Eff.H",
			"ja":"有効ヒール",
			"zh":"有效治疗"
		}
	}
};

if (Languages.lang[userLang] == undefined)
	userLang = "zh";

var option = {
	displayhps:true,
	nickhide:true,
	rankanim:true,
	numbanim:true,
	hpsallview:true,
	opacity:100,
	backgroundimg:"",
	fonts:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
	fontsize:12
};

var curLang = new function()
{
	this.lang = Languages.lang[userLang];
	for(var l in Languages.data)
	{
		for(var i in Languages[Languages.data[l]])
		{
			if(this[Languages.data[l]] == undefined)
				this[Languages.data[l]] = [];

			for(var i in Languages[Languages.data[l]])
			{
				this[Languages.data[l]][i] = Languages[Languages.data[l]][i][userLang];
			}
		}
	}
};

$(".item[data-id=language]").html(curLang.lang);

if(curLang != undefined)
{
	$("[data-id]").each(function()
	{
		if(curLang.settings[$(this).attr("data-id")] != undefined)
		{
			$(this).attr("label", curLang.settings[$(this).attr("data-id")]);
		}
	});

	for(var i in curLang.html)
	{
		var $element = $("#" + i );
		$element.text(curLang.html[i]);
	}

	for(var i in curLang.label)
	{
		$("[data-label]").each(function()
		{
			if($(this).attr("data-label") == i)
				$(this).html(curLang.label[i]);
		});
	}
}
var origopt = option;
