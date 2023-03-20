export const MENU_LIST = [{
    key:"Products",path:"/product",submenu:[{"list":[],"en":"All Item","jp":"すべての商品","url":"/product?search=all"},{"list":[{"en":"ストール","url":"/product/stole"},{"en":"ハンカチ","url":"/product/handkerchief"},{"en":"ハット","url":"/product/hat"},{"en":"トップス","url":"/product/tops"},{"en":"手袋 / カバー","url":"/product/gloves_cover"},{"en":"ウォーマー","url":"/product/warmer"},{"en":"ソックス","url":"/product/socks"}],"en":"Wear","jp":"肌に優しい衣類","url":"/product?search=wear"},{"list":[{"en":"スリッパ","url":"/product/slippers"},{"en":"シーツ","url":"/product/sheets"},{"en":"ブランケット","url":"/product/blankets"},{"en":"カバー","url":"/product/cover"},{"en":"ピロケース","url":"/product/spare_pillowcases"},{"en":"まくら","url":"/product/pillows"},{"en":"クッションカバー","url":"/product/cushioncover"},{"en":"カーテン","url":"/view/page/curtain"}],"en":"Interior","jp":"快適なお部屋用品","url":"/product?search=interior"},{"list":[{"en":"タオル","url":"/product/towels"},{"en":"ボディ / 洗顔","url":"/product/body_facewash"},{"en":"マット","url":"/product/mat"},{"en":"シャンプー / コンディショナー","url":"/product/shampoo_conditioner"},{"en":"石けん","url":"/product/soap"}],"en":"Bath & Kittchen","jp":"台所・お風呂用品","url":"/product?search=bath"},{"list":[{"en":"マウスケア","url":"/product/mouth_care"},{"en":"くま笹液","url":"/product/kumazasa-solution"},{"en":"くまざさバーム","url":"/product/kumazasa-balm"},{"en":"マスク","url":"/product/mask"}],"en":"Health-care","jp":"健康・日用品","url":"/product?search=health"},{"list":[{"en":"糸","url":"/product/sasawashi-yarn"}],"en":"Yarn","jp":"ささ和紙糸","url":"/product?search=yarn"}]
},{
    key:"About",path:"/about"
},{
    key:"Guide",path:"/guide"
},{
    key:"News",path:"/news"
},{
    key:"Shop List",path:"/shop"
},{
    key:"Contact",path:"/contact"
}]


export const NEWS_LIST = [
    {"date":"2023/01/30", "title":"サイト休業（1月31日夜間）のご案内"  },
    {"date":"2023/01/16", "title":"価格改定のお知らせ"  },
    {"date":"2022/12/21", "title":"冬季休業日のご案内"  },
    {"date":"2022/10/28", "title":"商品リニューアルのお知らせ"  },
    {"date":"2022/08/04", "title":"夏季休業日のご案内"  },
    {"date":"2022/04/28", "title":"新商品のお知らせ"  },
    {"date":"2022/04/28", "title":"フットカバー色追加のお知らせ"  },
    {"date":"2022/04/28", "title":"バスマット色追加のお知らせ"  },
    {"date":"2022/04/15", "title":"ソックス色追加のお知らせ"  },
    {"date":"2022/03/08", "title":"価格改定のお知らせ"  },
    {"date":"2021/12/20", "title":"冬季休業日のご案内"  },
    {"date":"2021/08/10", "title":"夏季休業日のご案内"  },
    {"date":"2021/08/03", "title":"サイトリニューアルに伴う、パスワード再設定のお願い。"  },
    {"date":"2021/08/03", "title":"SASAWASHI ONLINE SHOPリニューアルのお知らせ"  }
]


export const BASE = `https://pro.form-mailer.jp/fms/`
export const CONTACT_DATA = [{
  title:"法人・小売店のお客様",
  list: [
    {k:'卸売りについてのお問い合わせ', url:'3d26f969263360'},
    {k:'その他のお問い合わせ', url:'3b654cbd263362'}]
  },{
    title:"個人のお客様",
    list:[{
      k:'ご質問・ご意見・ご相談',url:'292eff6e200430'
    },{
      k:'ご注文、オンラインストアについて',url:'f76b9a44200434'
    },{
      k:'カーテンのお問い合わせ',url:'3ccf1a4d221389'
    }]
  }]

export const COMP_DESC = [
    {
        "key": "会社名",
        "val": "ＳＡＳＡＷＡＳＨＩ株式会社"
    },
    {
        "key": "所在地",
        "val": "本社：〒595-0025　大阪府泉大津市旭町22-45"
    },
    {
        "key": "TEL",
        "val": "0725-22-3384"
    },
    {
        "key": "FAX",
        "val": "0725-22-3348"
    },
    {
        "key": "CEO",
        "val": "代表取締役 糸井昇平"
    },
    {
        "key": "History",
        "val": [
            {
                "date": "平成12年10月",
                "desc": "(株)イトイテキスタイルにささ和紙事業部を設立。世界で初めて和紙の靴下・シーツ・タオル類の量産化に成功し、その販売を始める"
            },
            {
                "date": "平成16年3月",
                "desc": "表参道にSASAWASHI SHOPを開店する"
            },
            {
                "date": "平成17年1月",
                "desc": "SASAWASHI(株)に、(株)イトイテキスタイルささ和紙事業部を移管"
            },
            {
                "date": "平成24年1月",
                "desc": "パリ Maison Objetに出展を始める"
            },
            {
                "date": "平成25年7月",
                "desc": "おおさか地域創造ファンド事業の認定を受ける"
            }
        ]
    },
    {
        "key": "資本金",
        "val": "1,000万円"
    },
    {
        "key": "売上高",
        "val": "2.２億円（令和2年9月実績）"
    },
    {
        "key": "従業員数",
        "val": "5名"
    },
    {
        "key": "取扱商品",
        "val": "SASAWASHI製品（タオル・靴下・シーツ・カーテン・マット等）及び原料（糸・生地）"
    },
    {
        "key": "事業内容",
        "val": "生活提案型商品ＳＡＳＡＷＡＳＨＩの糸・生地・製品の企画・製造・販売。販売先は、一般顧客、小売店、通販会社、高級旅館、海外輸出等。"
    },
    {
        "key": "取引銀行",
        "val": "三菱東京ＵＦＪ銀行 岸和田支店りそな銀行 泉大津支店"
    }
]


export const SHOP_LIST = [
    {
        "area": "北海道",
        "list": [
            {
                "name": "YUIQ",
                "addr": "北海道札幌市中央区大通西3－7",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/dh9BxahpsNKdCqk96"
            },
            {
                "name": "大丸藤井セントラル",
                "addr": "札幌市中央区南1条西3-2 大丸藤井セントラル4F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/Wv9aU4Gxjqi9kg5u5"
            },
            {
                "name": "tou/tell natural & organic store（トウテル）",
                "addr": "北海道河西郡芽室町東2条2丁目1番地9",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/5aV6MPYot7LvPWjn8"
            }
        ]
    },
    {
        "area": "東北",
        "list": [
            {
                "name": "睡眠屋",
                "addr": "山形県酒田市飯森山2-650-1",
                "tel": "03-5772-6008",
                "gps": "https://g.page/suiminya-shop?share"
            },
            {
                "name": "くらし座",
                "addr": "仙台市青葉区本町2-19-9　クリスタルパレス本町　東３F",
                "tel": "03-5772-6008",
                "gps": "https://g.page/kurashiza?share"
            },
            {
                "name": "木糸土 泉パークタウンタピオ店",
                "addr": "宮城県仙台市泉区寺岡6-5-1泉パークタウンタピオ 2F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/df5qHGkKDK9qw17x7"
            },
            {
                "name": "リアルスタイル 仙台",
                "addr": "仙台市青葉区大町1-1-18 西欧館1F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/P98ujj1piNCCRzFU6"
            },
            {
                "name": "さちラボ",
                "addr": "福島県田村郡三春町大字梅ノ木作１２１－２",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/pyu3bJPobzZ4iLCa6"
            },
            {
                "name": "ラビーダ",
                "addr": "福島県郡山市喜久田町堀ノ内字地田東15-2",
                "tel": "03-5772-6008",
                "gps": "https://g.page/lavida-koriyama?share"
            },
            {
                "name": "いげた",
                "addr": "福島県福島市本町2-7",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/jF23x1RhrXdQG1XH6"
            },
            {
                "name": "カーテンハウストビタ",
                "addr": "福島県いわき市鹿島町米田字日渡5 鹿島SCエブリア2F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/x5WEbLxd192SrPrC7"
            },
            {
                "name": "インテリア館トビタ",
                "addr": "福島県いわき市平南白土1－14－4",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/FtWUbTw1wg7ZSoVf8"
            },
            {
                "name": "インテリアSATO",
                "addr": "福島県相馬市中村1-14-4",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/DmQfsDVyimhhxPrg6"
            }
        ]
    },
    {
        "area": "東京",
        "list": [
            {
                "name": "SASAWASHI SHOP",
                "fname": "SASAWASHI SHOP",
                "sname": "",
                "addr": "東京都渋谷区神宮前4-1-23",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/MzR5BRLTGZox8PKt5",
                "img": "https://gigaplus.makeshop.jp/sasawashi/img/company/shop_tokyo.jpg",
                "sche": ["4月〜9月：11:00 - 19:00","10月〜3月：11:00 - 18:00","*定休日：毎週、日・月曜日"],
                "desc": "SASAWASHI製品を、ライフスタイルの中でプレゼンテーションするパイロットショップが、青山（神宮前4丁目）にオープンしました。\n白を基調とした清潔感溢れるインテリアの中で、すべてのラインナップを手に取ってご覧いただけます。"
            },
            {
                "name": "SEMPRE HOME",
                "addr": "東京都目黒区大橋2-16-26",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/GmHvi86rKinQipb98"
            },
            {
                "name": "AKOMEYA TOKYO NEWoMan新宿",
                "addr": "東京都新宿区新宿4-1-6 NEWoMan新宿1F",
                "tel": "03-5772-6008",
                "gps": "https://g.page/akomeya_tokyo_shinjuku?share"
            },
            {
                "name": "WISE・WISE tools",
                "addr": "東京都港区赤坂9-7-4 東京ミッドタウン ガレリアD-0313",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/z7B2P9aRz21oJ9zGA"
            },
            {
                "name": "かなかな",
                "addr": "東京都台東区谷中3-2-9",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/tjeWMTHk2LDmo66U6"
            },
            {
                "name": "IN NATURAL 大泉学園店",
                "addr": "東京都練馬区東大泉5-43-1 ゆめりあフェンテ3階",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/ywJGivz1N6GBFg2XA"
            },
            {
                "name": "群言堂　新宿店",
                "addr": "東京都新宿区西新宿1-1-3　小田急新宿店８F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/JD86HCfeTxu6qhig7"
            },
            {
                "name": "群言堂 高尾駅店",
                "addr": "東京都八王子市高尾町1201-2 JR高尾駅北口",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/fR8Br4oRbEWuwqsX6"
            },
            {
                "name": "gungendo コレド室町店",
                "addr": "東京都中央区日本橋室町1-5-5　コレド室町３　２F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/xKxDgKNxzbcAAu2T8"
            }
        ]
    },
    {
        "area": "関東",
        "list": [
            {
                "name": "桐屋田中 工房はる",
                "addr": "千葉県千葉市中央区新町1000 そごう千葉支店9F 趣味の街",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/cUJTLCr9gPX4yJw86"
            },
            {
                "name": "IN NATURAL セブンパークアリオ柏店",
                "addr": "千葉県柏市大島田950-1 セブンパークアリオ柏1F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/TmYav5wFBibZdTEi6"
            },
            {
                "name": "TIMBER YARD",
                "addr": "千葉県千葉市美浜区新港117",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/F1WH5YQbd5kCNqfF8"
            },
            {
                "name": "PLANTED（プランテッド）",
                "addr": "神奈川県横浜市港北区大曽根1-11-2",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/1R9Ed85RkPdqABC8A"
            },
            {
                "name": "SEITA PLUS（セイタプラス）",
                "addr": "神奈川県鎌倉市小町2-11-17",
                "tel": "03-5772-6008",
                "gps": "https://g.page/seita-plus?share"
            },
            {
                "name": "夢工房 かしわぎ",
                "addr": "神奈川県平塚市立野町17-22",
                "tel": "03-5772-6008",
                "gps": "https://g.page/yumekouboukashiwagi?share"
            },
            {
                "name": "IN NATURAL 湘南店",
                "addr": "神奈川県藤沢市辻堂神台1-3-1 TerraceMall湘南",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/Z53CKxyN6t5rFzBD8"
            },
            {
                "name": "ecomo(エコモ）",
                "addr": "神奈川県藤沢市城南5-6-20",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/vQZdC7Lh692heVVD8"
            },
            {
                "name": "IN NATURAL 海老名店",
                "addr": "神奈川県海老名市扇町13-1 ららぽーと海老名1F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/SMaDr41gCmPjGC226"
            },
            {
                "name": "IN NATURAL 小田原店",
                "addr": "神奈川県小田原市中里313-12 ダイナシティウォーク",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/59HUQzUciW1SjpnBA"
            },
            {
                "name": "IN NATURAL 富士見店",
                "addr": "埼玉県富士見市山室1-1313 ららぽーと富士見1F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/MLb1b9D7uJvUZep87"
            },
            {
                "name": "金澤屋",
                "addr": "群馬県高崎市本町65",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/yyqWDjNogsDFCnSu5"
            },
            {
                "name": "klart",
                "addr": "群馬県高崎市片岡町1-12-11　２F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/QVL2yMjGyaVn1Umq7"
            },
            {
                "name": "山新グランドステージ水戸",
                "addr": "茨城県水戸市酒門町上千束3234-1",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/HVuTUVCwzoKXkUHN7"
            }
        ]
    },
    {
        "area": "甲信越",
        "list": [
            {
                "name": "日本の匠と美ほさか",
                "addr": "山梨県甲府市飯田5-17-41",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/MWS3YwToZ3JHKDALA"
            },
            {
                "name": "さすほん家具",
                "addr": "長野県大町市大町高見町4063",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/bkWzDKTTarTwNdne7"
            },
            {
                "name": "大坂屋家具店　下の店",
                "addr": "長野県北佐久郡軽井沢町軽井沢５９３　旧軽井沢銀座通り沿い",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/UkjiYuAwHu9zZHkx5"
            },
            {
                "name": "Standard Style",
                "addr": "長野県松本市平田東3-1-12",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/KhjYAZ4shgd34njB6"
            },
            {
                "name": "わざわざ",
                "addr": "長野県東御市御牧原2887-1",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/CekRpyrFNoro6PtY7"
            },
            {
                "name": "紡ぎ舎",
                "addr": "長野県北安曇郡小谷村北小谷下寺1814",
                "tel": "03-5772-6008",
                "gps": "https://g.page/tsumugiya_official?share"
            },
            {
                "name": "優茶庵",
                "addr": "新潟県新潟市北区石動1-23-5",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/MgENAsSX4QRaFNvd6"
            }
        ]
    },
    {
        "area": "東海",
        "list": [
            {
                "name": "tsunagu多治見店",
                "addr": "岐阜県多治見市本町5-15-2",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/Y3GiXtP4Ge1HQr2t8"
            },
            {
                "name": "インテリアマルタ",
                "addr": "静岡県富士市高嶺町1-1",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/WxQXVGbwJsTYXi3FA"
            },
            {
                "name": "欧風和楽 静岡店",
                "addr": "静岡県静岡市駿河区丸子新田525-2",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/K9j7U92XfMuFXPk97"
            },
            {
                "name": "欧風和楽 藤枝店",
                "addr": "静岡県藤枝市志太5-3-34",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/7ikGYK6ThEKcWM8J9"
            },
            {
                "name": "Mission Bay",
                "addr": "静岡県沼津市我入道南条寺６９－１",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/fuYoTkN37usVQhnw6"
            },
            {
                "name": "小野ふとん店",
                "addr": "愛知県岡崎市明大寺本町2－25",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/HpDYL1q13oi8uTgs5"
            },
            {
                "name": "YAGURA",
                "addr": "愛知県岡崎市高隆寺峠1番地（岡崎市美術博物館内）",
                "tel": "03-5772-6008",
                "gps": "https://g.page/museumshop-yagura?share"
            },
            {
                "name": "soup. Life Store",
                "addr": "愛知県安城市篠目町竜田86-8",
                "tel": "03-5772-6008",
                "gps": "https://g.page/souplifestore?share"
            },
            {
                "name": "ROOM",
                "addr": "愛知県刈谷市若松町3-25-1",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/79WBnrMJKPWLUV9HA"
            },
            {
                "name": "大和屋家具店",
                "addr": "愛知県半田市更生町151-8",
                "tel": "03-5772-6008",
                "gps": "https://g.page/Yamatoya-furniture?share"
            },
            {
                "name": "にざまつ　散歩道店",
                "addr": "愛知県常滑市原松町5-67",
                "tel": "03-5772-6008",
                "gps": "https://g.page/tokoname-niza?share"
            },
            {
                "name": "CONNETTA（コネッタ）",
                "addr": "愛知県名古屋市西区鳥見町3-22-1 2F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/qRsDNYr9KP6qBsxe8"
            },
            {
                "name": "リアルスタイル ホーム",
                "addr": "愛知県名古屋市天白区鴻の巣1-215",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/nFAsnLyLNS6AJqEG8"
            },
            {
                "name": "イトウふとん店",
                "addr": "愛知県春日井市松新町2-102",
                "tel": "03-5772-6008",
                "gps": "https://g.page/Itofutonten?share"
            },
            {
                "name": "tsunagu江南店",
                "addr": "愛知県江南市江森町南78-1 la CASA TERRACE リビング棟1階",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/uUaSRFi6cHofyd5BA"
            },
            {
                "name": "ヒラマツふとん店",
                "addr": "三重県伊勢市宮町1-9-19",
                "tel": "03-5772-6008",
                "gps": "https://g.page/nemuriyahiramatsu?share"
            }
        ]
    },
    {
        "area": "北陸",
        "list": [
            {
                "name": "nemu nemu",
                "addr": "福井県福井市問屋町1-31",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/cBG6PAzNRRThZf9j6"
            },
            {
                "name": "石田屋 犀川店",
                "addr": "石川県金沢市清川町1-1",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/ks1asZZfgFqe4PsQA"
            },
            {
                "name": "石田屋 和座店",
                "addr": "石川県能美市大成町リ56",
                "tel": "03-5772-6008",
                "gps": "https://g.page/ishitaya-waza?share"
            },
            {
                "name": "石田屋 gamadan",
                "addr": "石川県金沢市高尾3-4-1",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/WS8kGHWaUiXsqtft7"
            },
            {
                "name": "A.Y.C cafe",
                "addr": "富山県富山市婦中町外輪野１２３２４",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/LsRSFfzJTXpePaeX9"
            }
        ]
    },
    {
        "area": "近畿",
        "list": [
            {
                "name": "群言堂 うめだ阪急店",
                "addr": "大阪市北区角田町8-7 阪急うめだ本店10F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/HFiWqDwvvbBx3rp79"
            },
            {
                "name": "暮らしのデザインKITAS",
                "addr": "大阪市阿倍野区阿倍野筋1-1-43 あべのハルカス近鉄本店タワー館9F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/QwcskaGdyg52Xfrv8"
            },
            {
                "name": "大昇堂薬局",
                "addr": "和歌山県和歌山市榎原214-6",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/4GRvV6DfmDM2kh1f7"
            },
            {
                "name": "群言堂 西宮阪急店",
                "addr": "兵庫県西宮市高松町14-1 西宮阪急1F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/DKCnSKMaXgqd2gSg7"
            },
            {
                "name": "WISH",
                "fname": "W・I・S・H",
                "sname": "パートナーショップ",
                "addr": "兵庫県神戸市東灘区住吉本町2-20-26",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/yRaKiXbzSkWuWRCh8",
                "img": "https://gigaplus.makeshop.jp/sasawashi/img/company/shop_kobe.jpg",
                "sche": ["11:00 - 18:00","*定休日：火曜日・水曜日"],
                "web": "http://www.we-wish.co.jp/",
                "desc":"SASAWASHI製品をゆっくりと手に取ってご覧いただけるスペースが神戸にできました\n。豊富なラインナップで、カーテンもご覧いただけます。"
            },
            {
                "name": "OZ　SELECT",
                "addr": "兵庫県神戸市東灘区岡本1－11－20",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/CeJEeaDTfQFfbxQv8"
            },
            {
                "name": "レーベンスフロイデ",
                "addr": "兵庫県神戸市垂水区東舞子町10-1-304 Tio舞子3F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/n38qpbtGd7Gz9FWeA"
            },
            {
                "name": "日用品と雑貨の店　伝所鳩",
                "addr": "兵庫県豊岡市日高町祢布967",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/tqfboZ82tbMZqNdNA"
            },
            {
                "name": "AKOMEYA TOKYO 京都BAL",
                "addr": "京都市 中京区河原町通三条下ル山崎町251 京都BAL 1F",
                "tel": "03-5772-6008",
                "gps": "https://g.page/akomeya_tokyo_kyoto?share"
            },
            {
                "name": "群言堂　ジェイアール京都伊勢丹店",
                "addr": "京都府京都市下京区東塩小路町９０１　ジェイアール京都伊勢丹 7F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/pxx9U9rHnKc2SCyz8"
            }
        ]
    },
    {
        "area": "中国",
        "list": [
            {
                "name": "Decolle（デコレ）",
                "addr": "島根県松江市大庭町1185-2",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/8dpZVxe2V7ZgEnsd7"
            },
            {
                "name": "群言堂 石見銀山本店",
                "addr": "島根県大田市大森町ハ183",
                "tel": "03-5772-6008",
                "gps": "https://g.page/gungendo_honten?share"
            },
            {
                "name": "松井銘木",
                "addr": "島根県出雲市大社町遙堪1064-3",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/CL7y57jSfBusiS7r6"
            },
            {
                "name": "素然",
                "addr": "島根県簸川郡斐川町中洲1134",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/hg4s3tzN2WrK9qQm8"
            },
            {
                "name": "SHIMATORI 米子店",
                "addr": "鳥取県米子市新開2-3-10本の学校内",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/3ePZ7rpbueKD3oq68"
            },
            {
                "name": "さしこう 岡山大福店",
                "addr": "岡山県岡山市南区大福134-7",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/kZxEFcY1zEEXyZbB7"
            },
            {
                "name": "日日",
                "addr": "岡山県岡山市北区表町1丁目6－57",
                "tel": "03-5772-6008",
                "gps": "https://g.page/nichinichi?share"
            },
            {
                "name": "SOT",
                "addr": "岡山県津山市押入791-2 ダイガビル101",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/sA8rxwJ5Bv5qdYAm7"
            },
            {
                "name": "調度品の亀川",
                "addr": "広島県福山市胡町1-3",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/CVGSj1utZiTw8EPYA"
            },
            {
                "name": "blade & company onomichi",
                "addr": "広島県尾道市土堂1-5-16",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/rrCvpTaKgWSyva1e9"
            },
            {
                "name": "ドゥクラフト 土肥家具",
                "addr": "広島県呉市三条3-7-5",
                "tel": "03-5772-6008",
                "gps": "https://g.page/docraft?share"
            },
            {
                "name": "アケミ屋",
                "addr": "山口県光市島田1-11-17",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/YyEZ8XLUrYYDR2qe8"
            },
            {
                "name": "FLOS（フロス）",
                "addr": "山口県周南市2番町2-3",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/CPfwAp5veedz2Dxf6"
            },
            {
                "name": "ギフトギャラリーオズ 下松瑞穂店",
                "addr": "山口県下松市瑞穂町1-3-24",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/vqyLR3cujbDLQ2Ap6"
            },
            {
                "name": "ギフトギャラリーオズ 山口店",
                "addr": "山口県山口市維新公園5-1-15",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/EBBXfLXpExDtGYvF6"
            },
            {
                "name": "ギフトギャラリーオズ 新下関店",
                "addr": "山口県下関市伊倉新町2-2-11",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/V5qsekj7LdskBzGKA"
            }
        ]
    },
    {
        "area": "四国",
        "list": [
            {
                "name": "布物語",
                "addr": "香川県高松市松縄町1104-16",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/t26PiH5xUnDGvc3S8"
            },
            {
                "name": "ファイブペニイズ",
                "addr": "香川県木田郡三木町井戸2606-7",
                "tel": "03-5772-6008",
                "gps": "https://g.page/5pennies?share"
            },
            {
                "name": "merle（メルル）",
                "addr": "愛媛県松山市南江戸2-7-15",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/iskHcg9DxqD3xDABA"
            }
        ]
    },
    {
        "area": "九州",
        "list": [
            {
                "name": "スリービーポッターズ",
                "addr": "福岡県福岡市中央区薬院1-8-8",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/6UbvFZqkQnMSuqaj7"
            },
            {
                "name": "Madame WATSON",
                "addr": "福岡県福岡市南区野間4-2-27",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/MeZMmQM1NgWYZe1s5"
            },
            {
                "name": "everyday/homestore",
                "addr": "福岡県福岡市博多区那珂6丁目23番1号 ららぽーと福岡1F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/L8fB3ywUeteUVwoT7"
            },
            {
                "name": "(株)斉藤寝装",
                "addr": "福岡県筑後市山の井272",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/mBHH77mdTiUCGJxR8"
            },
            {
                "name": "生活購買店reed",
                "addr": "福岡県うきは市吉井町1137-2F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/gacoVeL5j19p1Rz98"
            },
            {
                "name": "うなぎの寝床　旧寺崎邸",
                "addr": "福岡県八女市本町（モトマチ）327",
                "tel": "03-5772-6008",
                "gps": "https://g.page/terasakitei?share"
            },
            {
                "name": "shironeri",
                "addr": "佐賀県佐賀市呉服元町7番4号まつやMeSH shironeri",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/EwqqN7YgPYn4ToCk8"
            },
            {
                "name": "ギフトギャラリーオズ　ひびきの店",
                "addr": "北九州市若松区小敷ひびきの2-2-10",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/hv32WhEkSHfJXffJ6"
            },
            {
                "name": "アトリエシュメール",
                "addr": "大分県大分市古国府888-7",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/rUDeduUjzCtrB7H8A"
            },
            {
                "name": "クロワッサンの店 大分店",
                "addr": "大分県大分市府内町2-6-17 アクアビル２F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/XStEtQ6mQRedgSs59"
            },
            {
                "name": "和蔵",
                "addr": "大分県別府市扇山1-3",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/5p9jDFeHEtvTQAb16"
            },
            {
                "name": "山荘無量塔 蔵拙",
                "addr": "大分県由布市湯布院町川上1264-2 山荘無量塔内",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/24EknxnNHLSWixJf8"
            },
            {
                "name": "リビングかねとき",
                "addr": "長崎県長崎市築町4-22",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/9LgXWu2Ec2ku4wrD9"
            },
            {
                "name": "楽風",
                "addr": "宮崎県宮崎市神宮2-2-92",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/j95Ndqd1YEUvwbLQ8"
            },
            {
                "name": "patio",
                "addr": "鹿児島県鹿児島市呉服町6－5　マルヤガーデンズ４F",
                "tel": "03-5772-6008",
                "gps": "https://goo.gl/maps/2Cy4j49xAcdNupgM8"
            }
        ]
    }
]