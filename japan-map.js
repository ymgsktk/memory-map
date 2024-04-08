//localStorage.clear()//リセット用
/*
arrayは訪問の有無を確認する配列の初期化
array2は各都道府県において1（訪問済み）出会った場合に色を塗り、0（未訪問）の場合はグレーに塗るといった動作を行うための配列
array3はどの都道府県をクリックしたかを記録するための配列（※trueになっているところはユーザが訪問している場所を示す）
*/
if(window.localStorage) {
    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
    localStorage.setItem("myArray", JSON.stringify(array));
} else {
    alert('localStorageが使えません。');
  }

$(function(){   
    var area =[
        {code : 1, name: "北海道", color: "gray", hoverColor: "#696969",prefectures: [1]},
        {code : 2, name: "青森", color: "gray", hoverColor: "#696969",prefectures: [2]},
        {code : 3, name: "岩手", color: "gray", hoverColor: "#696969",prefectures: [3]},
        {code : 4, name: "宮城", color: "gray", hoverColor: "#696969",prefectures: [4]},
        {code : 5, name: "秋田", color: "gray", hoverColor: "#696969",prefectures: [5]},
        {code : 6, name: "山形", color: "gray", hoverColor: "#696969",prefectures: [6]},
        {code : 7, name: "福島", color: "gray", hoverColor: "#696969",prefectures: [7]},
        {code : 8, name: "茨城", color: "gray", hoverColor: "#696969",prefectures: [8]},
        {code : 9, name: "栃木", color: "gray", hoverColor: "#696969",prefectures: [9]},
        {code : 10, name: "群馬", color: "gray", hoverColor: "#696969",prefectures: [10]},
        {code : 11, name: "埼玉", color: "gray", hoverColor: "#696969",prefectures: [11]},
        {code : 12, name: "千葉", color: "gray", hoverColor: "#696969",prefectures: [12]},
        {code : 13, name: "東京", color: "gray", hoverColor: "#696969",prefectures: [13]},
        {code : 14, name: "神奈川", color: "gray", hoverColor: "#696969",prefectures: [14]},
        {code : 15, name: "新潟", color: "gray", hoverColor: "#696969",prefectures: [15]},
        {code : 16, name: "富山", color: "gray", hoverColor: "#696969",prefectures: [16]},
        {code : 17, name: "石川", color: "gray", hoverColor: "#696969",prefectures: [17]},
        {code : 18, name: "福井", color: "gray", hoverColor: "#696969",prefectures: [18]},
        {code : 19, name: "山梨", color: "gray", hoverColor: "#696969",prefectures: [19]},
        {code : 20, name: "長野", color: "gray", hoverColor: "#696969",prefectures: [20]},
        {code : 21, name: "岐阜", color: "gray", hoverColor: "#696969",prefectures: [21]},
        {code : 22, name: "静岡", color: "gray", hoverColor: "#696969",prefectures: [22]},
        {code : 23, name: "愛知", color: "gray", hoverColor: "#696969",prefectures: [23]},
        {code : 24, name: "三重", color: "gray", hoverColor: "#696969",prefectures: [24]},
        {code : 25, name: "滋賀", color: "gray", hoverColor: "#696969",prefectures: [25]},
        {code : 26, name: "京都", color: "gray", hoverColor: "#696969",prefectures: [26]},
        {code : 27, name: "大阪", color: "gray", hoverColor: "#696969",prefectures: [27]},
        {code : 28, name: "兵庫", color: "gray", hoverColor: "#696969",prefectures: [28]},
        {code : 29, name: "奈良", color: "gray", hoverColor: "#696969",prefectures: [29]},
        {code : 30, name: "和歌山", color: "gray", hoverColor: "#696969",prefectures: [30]},
        {code : 31, name: "鳥取", color: "gray", hoverColor: "#696969",prefectures: [31]},
        {code : 32, name: "島根", color: "gray", hoverColor: "#696969",prefectures: [32]},
        {code : 33, name: "岡山", color: "gray", hoverColor: "#696969",prefectures: [33]},
        {code : 34, name: "広島", color: "gray", hoverColor: "#696969",prefectures: [34]},
        {code : 35, name: "山口", color: "gray", hoverColor: "#696969",prefectures: [35]},
        {code : 36, name: "徳島", color: "gray", hoverColor: "#696969",prefectures: [36]},
        {code : 37, name: "香川", color: "gray", hoverColor: "#696969",prefectures: [37]},
        {code : 38, name: "愛媛", color: "gray", hoverColor: "#696969",prefectures: [38]},
        {code : 39, name: "高知", color: "gray", hoverColor: "#696969",prefectures: [39]},
        {code : 40, name: "福岡", color: "gray", hoverColor: "#696969",prefectures: [40]},
        {code : 41, name: "佐賀", color: "gray", hoverColor: "#696969",prefectures: [41]},
        {code : 42, name: "長崎", color: "gray", hoverColor: "#696969",prefectures: [42]},
        {code : 43, name: "熊本", color: "gray", hoverColor: "#696969",prefectures: [43]},
        {code : 44, name: "大分", color: "gray", hoverColor: "#696969",prefectures: [44]},
        {code : 45, name: "宮崎", color: "gray", hoverColor: "#696969",prefectures: [45]},
        {code : 46, name: "鹿児島", color: "gray", hoverColor: "#696969",prefectures: [46]},
        {code : 47, name: "沖縄", color: "gray", hoverColor: "#696969",prefectures: [47]},
      ]

    var array2 = JSON.parse(localStorage.getItem("myArray2"))
    var i = 0
    for (var k in array2){//全ての都道府県を走査し、訪問済み（1）であるところは赤色を、未訪問（0）であるところはグレーを塗る
        if(array2[k]==0){
            area[i].color = "gray"
            i++
        }else{
            area[i].hoverColor = "darkgreen"
            area[i].color = "green"
            i++
        }
    }
    $('.my-map').japanMap({
        areas: area,
        width: 1000, // 任意の幅を指定
        selection: 'prefecture', // 都道府県単位でクリック可能
        drawsBoxLine : false,
        movesIslands : true, //　沖縄の表示位置を日本海側に移動
        onHover: function(data) {
        // 各都道府県にホバーした際のアクションを指定
        },
        onSelect: function(data) {
            switch(data.name){
                case "北海道" :
                    var array = {北海道:true,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "青森県" :
                    var array = {北海道:0,青森県:true,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "岩手県" :
                    var array = {北海道:0,青森県:0,岩手県:true,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "宮城県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:true,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "秋田県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:true,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "山形県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:true,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "福島県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:true,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "茨城県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:true,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "栃木県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:true,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "群馬県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:true,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "埼玉県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:true,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "千葉県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:true,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "東京都" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:true,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "神奈川県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:true,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "新潟県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:true,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "富山県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:true,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "石川県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:true,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "福井県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:true,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "山梨県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:true,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "長野県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:true,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "岐阜県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:true,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "静岡県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:true,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "愛知県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:true,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "三重県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:true,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "滋賀県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:true,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "京都府" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:true,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "大阪府" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:true,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "兵庫県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:true,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "奈良県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:true,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "和歌山県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:true,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "鳥取県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:true,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "島根県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:true,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "岡山県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:true,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "広島県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:true,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "山口県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:true,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "徳島県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:true,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "香川県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:true,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "愛媛県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:true,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "高知県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:true,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "福岡県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:true,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "佐賀県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:true,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "長崎県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:true,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "熊本県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:true,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "大分県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:true,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "宮崎県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:true,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "鹿児島県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:true,沖縄県:0}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
                case "沖縄県" :
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:true}
                    localStorage.setItem("myArray3", JSON.stringify(array));
                    window.location.href='memory.html'
                    break;
            }
        }
        
    });


    $('.editbutton').click(function() {
        switch($(this).attr("id")) {
            case "plus"://新規追加のボタンが押されたら、array3を調査し、該当する都道府県の値をtrueから1に変える
                var array3 = JSON.parse(localStorage.getItem("myArray3"))
                for (var k in array3){
                    if(array3[k]==true){
                        array2[k] = 1
                        localStorage.setItem('myArray2', JSON.stringify(array2));
                    }else{
                    }
                }
                window.location.href='index.html'
                break;
            case "edit":
              c = a - b;
              break;
            case "delete":
                var array3 = JSON.parse(localStorage.getItem("myArray3"))
                for (var k in array3){
                    if(array3[k]==true){
                        array2[k] = 0
                        localStorage.setItem('myArray2', JSON.stringify(array2));
                    }else{
                    }
                }
                window.location.href='index.html'
              break;
            case "alldelete":
                var result = window.confirm('訪問済みの都道府県を全て未訪問にしますか？');
                if( result ) {
                    var array = {北海道:0,青森県:0,岩手県:0,宮城県:0,秋田県:0,山形県:0,福島県:0,茨木県:0,栃木県:0,群馬県:0,埼玉県:0,千葉県:0,東京都:0,神奈川県:0,新潟県:0,富山県:0,石川県:0,福井県:0,山梨県:0,長野県:0,岐阜県:0,静岡県:0,愛知県:0,三重県:0,滋賀県:0,京都府:0,大阪府:0,兵庫県:0,奈良県:0,和歌山県:0,鳥取県:0,島根県:0,岡山県:0,広島県:0,山口県:0,徳島県:0,香川県:0,愛媛県:0,高知県:0,福岡県:0,佐賀県:0,長崎県:0,熊本県:0,大分県:0,宮崎県:0,鹿児島県:0,沖縄県:0}
                    localStorage.setItem("myArray2", JSON.stringify(array));
                }
                else {
                    console.log('キャンセルがクリックされました');
                }
                window.location.href='index.html'
            break;
            }
      });
});


$('.edit').click(function() {
    window.location.href='edit.html'
  });

$('#box1').on('inview', function(event, isInView) {
	if (isInView) {
        var array_find = JSON.parse(localStorage.getItem("myArray2"))
        let count_find = Object.values(array_find).filter(value => value === 1).length;
        let countdown_find = 47-count_find
		//要素が見えたときに実行する処理
		$("#box1 .count-up").each(function(){
			$(this).prop('Counter',0).animate({//0からカウントアップ
		        Counter: count_find
		    }, {
				// スピードやアニメーションの設定
		        duration: 1500,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
		        easing: 'easeOutQuad',//動きの種類。他にもlinearなど設定可能
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    },animation);
            function animation(){{
                $('#box1').animate({
                    top:100,
                    width:1000
                },1000,"swing");
            }}
		});

        $("#box1 .count-down").each(function(){
			$(this).prop('Counter',0).animate({//0からカウントアップ
		        Counter: countdown_find
		    }, {
				// スピードやアニメーションの設定
		        duration: 1500,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
		        easing: 'easeOutQuad',//動きの種類。他にもlinearなど設定可能
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    },animation);
            function animation(){{
                $('#box1').animate({
                    top:100,
                    width:1000
                },1000,"swing");
            }}
		});
	}
});



var access = $.cookie('access')
	if(!access){
		flag = true;
		$.cookie('access', false);
	}else{
		flag = false	
	}
	
	//モーダル表示
	$(".modaal-open").modaal({
	start_open:false, // ページロード時に表示するか
	overlay_close:true,//モーダル背景クリック時に閉じるか
	before_open:function(){// モーダルが開く前に行う動作
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
	});

