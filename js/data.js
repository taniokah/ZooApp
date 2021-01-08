/*---------- 動物の固定マーカー ----------*/
let markerData = [
  {
    title: "とくしま動物園へようこそ！(入り口)",
    pos: {lat: 34.0139, lng: 134.52075},
    img: "./pic/fly2.JPG",
    num: 0
  },{
    title: "①フライングゲージ",
    pos: {lat: 34.01531, lng: 134.52141},
    img: "./pic/fly1.JPG",
    num: 1
  },{
    title: "②ニホンカモシカ",
    pos: {lat: 34.01442, lng: 134.52155},
    img: "./pic/kamoshika.JPG",
    num: 2
  },{
    title: "③温帯プロムナード",
    pos: {lat: 34.01435, lng: 134.52192},
    img: "./pic/lesserpanda1.JPG",
    num: 3
  },{
    title: "④ツキノワグマ",
    pos: {lat: 34.01405, lng: 134.5218},
    img: "./pic/tsukinowaguma0.JPG",
    num: 4
  },{
    title: "⑤モンキープロムナード",
    pos: {lat: 34.01395, lng: 134.522133},
    img: "./pic/waokitsunezaru1.JPG",
    num: 5
  },{
    title: "⑥タイガープロムナード",
    pos: {lat: 34.01435, lng: 134.5226},
    img: "./pic/tora1.JPG",
    num: 6
  },{
    title: "⑦セイロンゾウ",
    pos: {lat: 34.01465, lng: 134.52288},
    img: "./pic/zou1.JPG",
    num: 7
  },{
    title: "⑧ミーアキャット",
    pos: {lat: 34.0153, lng: 134.52306},
    img: "./pic/miacat3.JPG",
    num: 8
  },{
    title: "⑨ライオン",
    pos: {lat: 34.01532, lng: 134.52284},
    img: "./pic/lion.JPG",
    num: 9
  },{
    title: "⑩サバンナ区",
    pos: {lat: 34.0157, lng: 134.52256},
    img: "./pic/sabanna3.JPG",
    num: 10
  },{
    title: "⑪フラミンゴ",
    pos: {lat: 34.01487, lng: 134.52250},
    img: "./pic/flamingo1.JPG",
    num: 11
  },{
    title: "⑫オオカミ",
    pos: {lat: 34.01482, lng: 134.520447},
    img: "./pic/ookami1.JPG",
    num: 12
  },{
    title: "⑬ホッキョクグマ",
    pos: {lat: 34.01452, lng: 134.52031},
    img: "./pic/pololo4.JPG",
    num: 13
  },{
    title: "⑮アンデスコンドル",
    pos: {lat: 34.014425, lng: 134.51969},
    img: "./pic/condol.JPG",
    num: 14
  },{
    title: "⑯こども動物園",
    pos: {lat: 34.01425, lng: 134.51915},
    img: "./pic/hitsuji2.JPG",
    num: 15
  },{
    title: "多目的広場(乗馬体験)",
    pos: {lat: 34.0142900, lng: 134.5185},
    img: "./pic/pony1.JPG",
    num: 16
  }
];


/*---------- チェックポイントの目安円 ----------*/
//サバンナ区がチェックポイント２つのため、
//markerDataとの番号合わせに片方をcheckCircle[0]とする
let checkCircle = [
  { lat: 34.01542, lng: 134.52263,  //サバンナ１
    r: 8
  },{
    lat: 34.01529, lng: 134.52138,  //とり
    r: 29
  },{
    lat: 34.01443, lng: 134.52158,  //カモシカ
    r: 10
  },{
    lat: 34.01433, lng: 134.52192,  //温帯
    r: 18
  },{
    lat: 34.01404, lng: 134.52183,  //くま
    r: 14
  },{
    lat: 34.01397, lng: 134.52214, //さる
    r: 15
  },{
    lat: 34.01422, lng: 134.52254,  //とら
    r: 22
  },{
    lat: 34.01466, lng: 134.52292,  //ゾウ
    r: 31
  },{
    lat: 34.01526, lng: 134.52303,  //ミーア
    r: 8
  },{
    lat: 34.01526, lng: 134.52284,  //ライオン
    r: 8
  },{
    lat: 34.01520, lng: 134.52230,  //サバンナ２
    r: 8
  },{
    lat: 34.01487, lng: 134.52246,  //フラミンゴ
    r: 15
  },{
    lat: 34.01479, lng: 134.52043,  //オオカミ
    r: 9
  },{
    lat: 34.01455, lng: 134.52031,  //ホッキョクグマ
    r: 15
  },{
    lat: 34.01437, lng: 134.51972,  //コンドル
    r: 12
  },{
    lat: 34.01430, lng: 134.51911,  //こども動物園
    r: 38
  },{
    lat: 34.01430, lng: 134.51911,  //こども動物園
    r: 38
  }
];


/*---------- チェックポイント(Polygon) ----------*
const checkCoords = [
  { lat: 34.01564, lng: 134.5218},    //右上
  { lat: 34.01497, lng: 134.5218},    //右下
  { lat: 34.01497, lng: 134.521},     //左下
  { lat: 34.01564, lng: 134.521}      //左上
];
*/
let checkData = [

];