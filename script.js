//document ready
$(document).ready(function(){
  var $videoSrc;
  var modalID
  $('.modal-video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
      modalID = $(this).data("bs-target");
      console.log($videoSrc);
  });

  // when the modal is opened, you can autoplayit or ...
  // $(modalID + " ").on('shown.bs.modal', function (e) {
  //   console.log("hello");
  //   $(modalID + " iframe").attr('src',$videoSrc + "?autoplay=1");
  
  // })
    
  // stop playing the youtube video when I close the modal
  //水平靠接
  $("#hCombine").on('hide.bs.modal', function (e) {
      // a poor man's stop video
      $("#hCombine iframe").attr('src',$videoSrc); 
  })
  
  //正向卡接
  $("#fCombine").on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#fCombine iframe").attr('src',$videoSrc);
  })

  //反向拼接
  $("#bCombine").on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#bCombine iframe").attr('src',$videoSrc);
  })

  //側板安裝
  $("#sideCombine").on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#sideCombine iframe").attr('src',$videoSrc);
  })
});
//document ready end


//用Vue動態改所有頁面的重複資料-Header和Footer的基本資料+存放實績案例簡介資料+存放知識分享概要
const vm = Vue.createApp({
  data () {
    return {
      address: '台北市北投區清江路247巷8號1樓',
      tel_number: '(02)2898-6207',
      fax_number: '(02)2898-6132',
      email: 'rainmaster@rainmaster.com',
      message: '',
      //實績案例資料用V-for渲染(page08)
      infilcases: [
        {
          picture_src: '/images/homepage/caseimg_01.JPG',
          title: '士林北藝中心',
          intro: '此案位於捷運劍潭站旁，係為公共工程案。總計施作153m³，上方覆土約25~45cm，為基地保水滲透型。',
          case_href: './page-cases/case01.html',

        },
        {
          picture_src: '/images/homepage/caseimg_02.JPG',
          title: '台北市日新國小',
          intro: '此案位於捷運台北車站旁，係為公共工程案。總計施作230m³，上方覆土約30~40cm，為基地保水滲透型。',
          case_href: './page-cases/case02.html',

        },
        {
          picture_src: '/images/homepage/caseimg_03.JPG',
          title: '龜山區市地重劃',
          intro: '此案位於桃園市龜山區，係為公共工程案。總計施作86m³，上方覆土約40~60cm，為基地保水滲透型。',
          case_href: './page-cases/case03.html',

        },
        {
          picture_src: '/images/homepage/caseimg_04.jpg',
          title: '高雄經濟部金屬中心',
          intro: '此案位於高雄楠梓，為張瑪龍建築師事務所設計。為公共工程，總計施作52.5m³，上方覆土約30~50cm，為基地保水滲透型。', 
          case_href: './page-cases/case04.html',

        },
      ],
      savecases: [
        {
          picture_src: '/images/homepage/caseimg_08.jpg',
          title: '南投貓羅溪',
          intro: '此案位於南投921地震紀念公園旁，係為公共工程案。總計施作100m³，上方覆土約45~60cm，為儲水再利用型。',
          case_href: './page-cases/case08.html',

        },
        {
          picture_src: '/images/homepage/caseimg_05.jpg',
          title: '基隆海洋大學',
          intro: '此案位於國立臺灣海洋大學內，係為公共工程案。總計施作50m³，上方覆土約45~55cm，為儲水型(雨水主要提供各棟大樓廁所使用)。',
          case_href: './page-cases/case05.html',

        },
        {
          picture_src: '/images/homepage/caseimg_06.jpg',
          title: '基隆海科典藏館',
          intro: '此案位於國立海洋科技博物館，係為公共工程案。總計施作75m³，上方覆土約45~115cm，為儲水型(為提供下方大客車停車場廁所使用)。',
          case_href: './page-cases/case06.html',

        },
        {
          picture_src: '/images/homepage/caseimg_07.jpg',
          title: '象山中強公園',
          intro: '此案位於捷運象山站旁，係為公共工程案。總計施作252m³，上方覆土約50~55cm，為儲水再利用型。',
          case_href: './page-cases/case07.html',

        },
        // {
        //   picture_src: '',
        //   title: '',
        //   intro: '',
        //   case_href: '',

        // },
      ],
      //個別案例頁左側欄位(page-cases)
      casetitles: [
       {title: '士林北藝中心', 
        case_href: './case01.html'},
       {title: '台北市日新國小',
        case_href: './case02.html'},
       {title: '龜山區市地重劃',
        case_href: './case03.html'},
       {title: '高雄經濟部金屬中心',
        case_href: './case04.html'},
       {title: '南投貓羅溪',
        case_href: './case08.html'},
       {title: '基隆海洋大學',
        case_href: './case05.html'},
       {title: '基隆海科典藏館',
        case_href: './case06.html'},
       {title: '象山中強公園',
        case_href: './case07.html'},
       
      ],
      //知識分享左側導覽列用V-for渲染(page-articles)
      knowledge: [
        {
          picture_src: '/images/homepage/articleimg_01.jpg',
          title: '如何在儲集框架、混凝土水箱、PP(FRP)桶槽型水箱中做選擇?',
          intro: '施作10立方~1000立方的滯洪儲水、滲透水設施建議使用正在旺所生產的RAIN SAVE 儲集框架產品，具備...',
          case_href: 'article01.html',
        },
        {
          picture_src: '/images/homepage/articleimg_02.jpg',
          title: '為何使用 Rain SAVE 儲集框架?(抗壓強度探討)',
          intro: '主要分為儲集框架主體與儲集框架側板組合而成，部分產品因其結構設計問題須使用相關配件才可以達到25T之抗壓功能...',
          case_href: 'article02.html',
        },
        {
          picture_src: '/images/homepage/articleimg_03.jpg',
          title: '為何使用 Rain SAVE 儲集框架?(進水速度與地震帶上的適應性探討)',
          intro: '若考量雨水流速(進水速度)，長短板型式及框架型式因內部結構空間較大，是較理想的選擇；而若是考慮到產品於亞洲地震帶...',
          case_href: 'article03.html',
        },
      ]

    }
  }
});

// header和footer都會用到的公司基本資訊
 const $headerFooterCommon= {
  address: '台北市北投區清江路247巷8號1樓',
  tel_number: '(02)2898-6207',
  fax_number: '(02)2898-6132',
  email: 'rainmaster@rainmaster.com',
  active: 'home'
 };


vm.component('my-header', {
  template: `
  <nav class="navbar navbar-expand-md fixed-top top_1">
    <div class="container-fluid"><a class="navbar-brand" href="/index.html"> <img class="d-inline-block align-text-top" src="/images/rainsave_brandicon.png" alt="Rain SAVE 儲集框架" width="60"/>
        <div class="brand d-inline-block align-text-top"> 
          <h3 class="rainsave">Rain SAVE 儲集框架</h3><img class="company_name" src="/images/company_name+logo.png" alt="正在旺企業有限公司" width="180"/>
        </div></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="bi bi-telegram"> </i></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="company_info ms-auto">
          <div class="line"></div>
          <div class="addr">地址：{{ address }}</div>
          <div class="tel_fax">電話：{{ tel_number }} / 傳真：{{ fax_number }}</div>
          <div class="email">E-mail：{{ email }}</div>
        </div>
      </div>
    </div>
  </nav>
  <header id="rainsave_page01">
    <nav class="navbar navbar-expand-md fixed-top top_2">
      <button class="navbar-toggler ms-auto nav_hide" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent_1" aria-controls="navbarSupportedContent_1" aria-expanded="false" aria-label="Toggle navigation"><i class="bi bi-list"></i></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent_1">
        <ul class="nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="/index.html">首頁</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/page01.html">產品大樣與特點</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/page04.html">保水型與滲透型</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/page07.html">地震淺變性</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/page06.html">使用須知</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/page05.html">需求計算與資源下載</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/page08.html">實績案例</a></li>
        </ul>
      </div>
    </nav>
  </header>`,
  data () {
    return $headerFooterCommon; 
  },
  methods: {
		makeActive: function(item){
			// When a model is changed, the view will be automatically updated.
			this.active = item;
		}
	}

})

vm.mount('html');



//導覽列分頁籤滾動後加白邊框或陰影
$(window).scroll(function(){
  if ($(window).scrollTop() > 0){
    $('.nav-link').css('box-shadow','0 2px 10px 0 white')
  } else {
    $('.nav-link').css('box-shadow','0 2px 10px 0 rgba(0, 0, 0, 0.3)')
  }
})

//3D模型操作提示框去除
$('.remind_box').mouseover(function(){
  $(this).fadeOut(200)
})

//需求計算-試算機
document.getElementById('calcId').onclick = () => {
  //button 使用getElementById (後面不用加點，直接套 id 名稱) 加上一個 onclick 事件，並執行 function 內容

  //定義變數的內容
  //命名變數為抓取 input 裡面的數值
  //將要在 id 所得到的值用 parseFloat 語法轉換成數字-- 因為input的type設成text了，下次直接改用number應該可以(不行，會變成數量增減框)
  let volume = parseFloat(document.getElementById('lengthId').value) * parseFloat(document.getElementById('widthId').value) *parseFloat(document.getElementById('depthId').value);
  let bodyNum = parseFloat(document.getElementById('lengthId').value) * parseFloat(document.getElementById('widthId').value) *parseFloat(document.getElementById('depthId').value) *16 ;
  let boardNum = (parseFloat(document.getElementById('lengthId').value)+parseFloat(document.getElementById('widthId').value)) * parseFloat(document.getElementById('depthId').value) *8 ;
  let infilNum = (parseFloat(document.getElementById('lengthId').value)+parseFloat(document.getElementById('widthId').value)) * parseFloat(document.getElementById('depthId').value) *2 + parseFloat(document.getElementById('lengthId').value) * parseFloat(document.getElementById('widthId').value) *2 ;
  let saveNum = (parseFloat(document.getElementById('lengthId').value)+parseFloat(document.getElementById('widthId').value)) * parseFloat(document.getElementById('depthId').value) *2 + parseFloat(document.getElementById('lengthId').value) * parseFloat(document.getElementById('widthId').value) ;
  let concretNum = (parseFloat(document.getElementById('lengthId').value)+1)*(parseFloat(document.getElementById('widthId').value)+1)*0.1 ;
  let netNum = parseFloat(document.getElementById('lengthId').value) * parseFloat(document.getElementById('widthId').value);
  let tatolPrice_infil = bodyNum*400 + boardNum*400 + concretNum*2400 + infilNum*100 + netNum*200 + (bodyNum + boardNum)*20 ;
  let tatolPrice_save = bodyNum*400 + boardNum*400 + concretNum*2400 + infilNum*100 + netNum*200 + saveNum*300 + (bodyNum + boardNum)*20 ;
  let boardNum_T2 = boardNum/4/volume ;
  let concretNum_T2 = concretNum/volume ;
  let infilNum_T2 = infilNum/volume ;
  let netNum_T2 = netNum/volume ;
  let saveNum_T2 = saveNum/volume ;
  let installprice_T2 = (bodyNum + boardNum)*20/volume ;
  let tatolPrice_infil_2 = 16*400 + parseFloat(boardNum_T2.toFixed(2))*1600 + parseFloat(concretNum_T2.toFixed(2))*2400 + parseFloat(infilNum_T2.toFixed(2))*100 + parseFloat(netNum_T2.toFixed(2))*200 + parseFloat(installprice_T2.toFixed(2));
  let tatolPrice_save_2 = 16*400 + parseFloat(boardNum_T2.toFixed(2))*1600 + parseFloat(concretNum_T2.toFixed(2))*2400 + parseFloat(infilNum_T2.toFixed(2))*100 + parseFloat(netNum_T2.toFixed(2))*200 + parseFloat(saveNum_T2.toFixed(2))*300 + parseFloat(installprice_T2.toFixed(2));
  
//數量計算結果
  document.getElementById('resultbodyId').textContent = bodyNum ;
  document.getElementById('resultboardId').textContent = boardNum ;
  document.getElementById('resultInfilId').textContent = infilNum ;
  document.getElementById('resultSaveId').textContent = saveNum ;
  document.getElementById('table_bodyNumId').textContent = bodyNum ;
  document.getElementById('table_boardNumId').textContent = boardNum ;
  document.getElementById('table_bodyNumId_2').textContent = bodyNum ;
  document.getElementById('table_boardNumId_2').textContent = boardNum ;
  document.getElementById('table_boardNumId_3').textContent = parseFloat(boardNum_T2.toFixed(2)) ;
  document.getElementById('table_boardNumId_4').textContent = parseFloat(boardNum_T2.toFixed(2)) ;
  document.getElementById('table_concretNumId').textContent = parseFloat(concretNum.toFixed(2)) ;
  document.getElementById('table_concretNumId_2').textContent = parseFloat(concretNum.toFixed(2)) ;
  document.getElementById('table_concretNumId_3').textContent = parseFloat(concretNum_T2.toFixed(2)) ;
  document.getElementById('table_concretNumId_4').textContent = parseFloat(concretNum_T2.toFixed(2)) ;
  document.getElementById('table_infilcloNumId').textContent = infilNum ;
  document.getElementById('table_infilcloNumId_2').textContent = infilNum ;
  document.getElementById('table_infilcloNumId_3').textContent = parseFloat(infilNum_T2.toFixed(2)) ;
  document.getElementById('table_infilcloNumId_4').textContent = parseFloat(infilNum_T2.toFixed(2)) ;
  document.getElementById('table_netNumId').textContent = netNum ;
  document.getElementById('table_netNumId_2').textContent = netNum ;
  document.getElementById('table_netNumId_3').textContent = parseFloat(netNum_T2.toFixed(2)) ;
  document.getElementById('table_netNumId_4').textContent = parseFloat(netNum_T2.toFixed(2)) ;
  document.getElementById('table_uninfilNumId_2').textContent = saveNum ;
  document.getElementById('table_uninfilNumId_4').textContent = parseFloat(saveNum_T2.toFixed(2)) ;

//複價計算結果
  document.getElementById('table_bodySpriceId').textContent = bodyNum*400 ;
  document.getElementById('table_bodySpriceId_2').textContent = bodyNum*400 ;
  document.getElementById('table_bodySpriceId_3').textContent = 16*400 ;
  document.getElementById('table_bodySpriceId_4').textContent = 16*400 ;
  document.getElementById('table_boardSpriceId').textContent = boardNum*400 ;
  document.getElementById('table_boardSpriceId_2').textContent = boardNum*400 ;
  document.getElementById('table_boardSpriceId_3').textContent = parseFloat(boardNum_T2.toFixed(2))*1600 ;
  document.getElementById('table_boardSpriceId_4').textContent = parseFloat(boardNum_T2.toFixed(2))*1600 ;
  //mind: 小數有問題!
  document.getElementById('table_concretSpriceId').textContent = (parseFloat(concretNum.toFixed(2))*2400).toFixed(0) ;
  document.getElementById('table_concretSpriceId_2').textContent = (parseFloat(concretNum.toFixed(2))*2400).toFixed(0) ;
  document.getElementById('table_concretSpriceId_3').textContent = (parseFloat(concretNum_T2.toFixed(2))*2400).toFixed(0) ;
  document.getElementById('table_concretSpriceId_4').textContent = (parseFloat(concretNum_T2.toFixed(2))*2400).toFixed(0) ;
  document.getElementById('table_infilcloSpriceId').textContent = infilNum*100 ;
  document.getElementById('table_infilcloSpriceId_2').textContent = infilNum*100 ;
  document.getElementById('table_infilcloSpriceId_3').textContent = (parseFloat(infilNum_T2)*100).toFixed(2) ;
  document.getElementById('table_infilcloSpriceId_4').textContent = (parseFloat(infilNum_T2)*100).toFixed(2) ;
  document.getElementById('table_netSpriceId').textContent = netNum*200 ;
  document.getElementById('table_netSpriceId_2').textContent = netNum*200 ;
  document.getElementById('table_netSpriceId_3').textContent = parseFloat(netNum_T2.toFixed(2))*200 ;
  document.getElementById('table_netSpriceId_4').textContent = parseFloat(netNum_T2.toFixed(2))*200 ;
  document.getElementById('table_uninfilSpriceId_2').textContent = saveNum*300 ;
  document.getElementById('table_uninfilSpriceId_4').textContent = parseFloat(saveNum_T2.toFixed(2))*300 ;
  // document.getElementById('table_installSpriceId').textContent = (bodyNum + boardNum)*20 ;
  // document.getElementById('table_installSpriceId_2').textContent = (bodyNum + boardNum)*20 ;
  // document.getElementById('table_installSpriceId_3').textContent = parseFloat(installprice_T2.toFixed(2)) ;
  // document.getElementById('table_installSpriceId_4').textContent = parseFloat(installprice_T2.toFixed(2)) ;
//總價計算結果
  document.getElementById('table_totalpriceId').textContent = Math.round(tatolPrice_infil) ;
  document.getElementById('table_totalpriceId_1').textContent = Math.round(tatolPrice_infil) ;
  document.getElementById('table_totalpriceId_2').textContent = Math.round(tatolPrice_save) ;
  document.getElementById('table_totalpriceId_2_1').textContent = Math.round(tatolPrice_save) ;
  document.getElementById('table_totalpriceId_3').textContent = Math.round(tatolPrice_infil_2) ;
  document.getElementById('table_totalpriceId_3_1').textContent = Math.round(tatolPrice_infil_2) ;
  document.getElementById('table_totalpriceId_4').textContent = Math.round(tatolPrice_save_2) ;
  document.getElementById('table_totalpriceId_4_1').textContent = Math.round(tatolPrice_save_2) ;

}
//一鍵全部清除
document.getElementById('clearId').onclick = () => {
  document.getElementById('lengthId').value = "" ;
  document.getElementById('widthId').value = "" ;
  document.getElementById('depthId').value = "" ;
  document.getElementById('resultbodyId').textContent = "" ;
  document.getElementById('resultboardId').textContent = "" ;
  document.getElementById('resultInfilId').textContent = "" ;
  document.getElementById('resultSaveId').textContent = "" ;
  document.getElementById('table_bodyNumId').textContent = "" ;
  document.getElementById('table_boardNumId').textContent = "" ;
  document.getElementById('table_bodyNumId_2').textContent = "" ;
  document.getElementById('table_boardNumId_2').textContent = "" ;
  document.getElementById('table_boardNumId_3').textContent = "" ;
  document.getElementById('table_boardNumId_4').textContent = "" ;
  document.getElementById('table_concretNumId').textContent = "" ;
  document.getElementById('table_concretNumId_2').textContent = "" ;
  document.getElementById('table_concretNumId_3').textContent = "" ;
  document.getElementById('table_concretNumId_4').textContent = "" ;
  document.getElementById('table_infilcloNumId').textContent = "" ;
  document.getElementById('table_infilcloNumId_2').textContent = "" ;
  document.getElementById('table_infilcloNumId_3').textContent = "" ;
  document.getElementById('table_infilcloNumId_4').textContent = "" ;
  document.getElementById('table_netNumId').textContent = "" ;
  document.getElementById('table_netNumId_2').textContent = "" ;
  document.getElementById('table_netNumId_3').textContent = "" ;
  document.getElementById('table_netNumId_4').textContent = "" ;
  document.getElementById('table_uninfilNumId_2').textContent = "" ;
  document.getElementById('table_uninfilNumId_4').textContent = "" ;
  document.getElementById('table_installNumId').textContent = "" ;
  document.getElementById('table_installNumId_2').textContent = "" ;
  document.getElementById('table_bodySpriceId').textContent = "" ;
  document.getElementById('table_bodySpriceId_2').textContent = "" ;
  document.getElementById('table_bodySpriceId_3').textContent = "" ;
  document.getElementById('table_bodySpriceId_4').textContent = "" ;
  document.getElementById('table_boardSpriceId').textContent = "" ;
  document.getElementById('table_boardSpriceId_2').textContent = "" ;
  document.getElementById('table_boardSpriceId_3').textContent = "" ;
  document.getElementById('table_boardSpriceId_4').textContent = "" ;
  document.getElementById('table_concretSpriceId').textContent = "" ;
  document.getElementById('table_concretSpriceId_2').textContent = "" ;
  document.getElementById('table_concretSpriceId_3').textContent = "" ;
  document.getElementById('table_concretSpriceId_4').textContent = "" ;
  document.getElementById('table_infilcloSpriceId').textContent = "" ;
  document.getElementById('table_infilcloSpriceId_2').textContent = "" ;
  document.getElementById('table_infilcloSpriceId_3').textContent = "" ;
  document.getElementById('table_infilcloSpriceId_4').textContent = "" ;
  document.getElementById('table_netSpriceId').textContent = "" ;
  document.getElementById('table_netSpriceId_2').textContent = "" ;
  document.getElementById('table_netSpriceId_3').textContent = "" ;
  document.getElementById('table_netSpriceId_4').textContent = "" ;
  document.getElementById('table_uninfilSpriceId_2').textContent = "" ;
  document.getElementById('table_uninfilSpriceId_4').textContent = "" ;
  // document.getElementById('table_installSpriceId').textContent = "" ;
  // document.getElementById('table_installSpriceId_2').textContent = "" ;
  // document.getElementById('table_installSpriceId_3').textContent = "" ;
  // document.getElementById('table_installSpriceId_4').textContent = "" ;
  // document.getElementById('table_installpriceId_3').textContent = "" ;
  // document.getElementById('table_installpriceId_4').textContent = "" ;
  document.getElementById('table_totalpriceId').textContent = "" ;
  document.getElementById('table_totalpriceId_1').textContent = "" ;
  document.getElementById('table_totalpriceId_2').textContent = "" ;
  document.getElementById('table_totalpriceId_2_1').textContent = "" ;
  document.getElementById('table_totalpriceId_3').textContent = "" ;
  document.getElementById('table_totalpriceId_3_1').textContent = "" ;
  document.getElementById('table_totalpriceId_4').textContent = "" ;
  document.getElementById('table_totalpriceId_4_1').textContent = "" ;
}

