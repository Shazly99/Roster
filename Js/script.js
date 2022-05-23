// ===================================when click menu show and hide sidebar
// alert($('nav').innerHeight())

function calling(){
  let widthSlidebar = $(".slidebar").innerWidth();
  $(".menu").click(function () {

    if ($(".slidebar").css("right") != "0px") {
      $(".slidebar").css("right", "0px");
      $(".slidebarBody").css("width", `calc(82%`);

      $(".slidebarFax").mouseover(function () {
        $(".slidebar").css("right", "0");
        $(".slidebarBody").css("width", `calc(100%`);
      });    
    } else {
      $(".slidebarFax").mouseout(function () {
        $(".slidebar").css("right", "-255.988px");
        $(".slidebarBody").css("width", `calc(100%`);
      });     


      $(".slidebar").css("right", "-255.988px");
      $(".slidebarBody").css("width", "calc(100% )");
  
    }

    
  });
}
calling()

//======================================================api sideBar
let getSidebar = [];
let level0 = [];
let level1 = [];
let level2 = []; 
let level3 = []; 
let level4 = []; 
let level5 = []; 
let level6 = []; 
let level7 = []; 
let level8 = []; 
let level9 = []; 
let level10 = []; 
let level11 = [];  
async function linkSidebar(){
  let sidebarAPI = await fetch("https://alliwa.maxapex.net/apex/liwatest/side_mun/side");
  let apiItem = await sidebarAPI.json();
  getSidebar = apiItem.items;
  // console.log(getSidebar)
  let item1=getSidebar.slice(0, 34);
  level2=item1
  let item=getSidebar.slice(111, 113);
  level0=item 
  let item2=getSidebar.slice(34, 40);
  level1=item2
  let item3=getSidebar.slice(40, 46);
  level3=item3
  let item4=getSidebar.slice(46, 52);
  level4=item4
  let item5=getSidebar.slice(52, 59);
  level5=item5
  let item6=getSidebar.slice(59, 65);
  level6=item6
  let item7=getSidebar.slice(65, 71);
  level7=item7
  let item8=getSidebar.slice(71, 77);
  level8=item8
  let item9=getSidebar.slice(77, 83);
  level9=item9
  let item10=getSidebar.slice(83, 89);
  level10=item10
  let item11=getSidebar.slice(89, 110);
  level11=item11
  showLevel1(); 
    JSON.parse(localStorage.getItem("ahlaKlamSave"));  
} 
//=============================================call of apis function
(async () => {
  await linkSidebar();
})();
let labelLevelOne = [];
function showLevel1() {
  //الصفحات المفضلة
  let x0=level0.filter((e)=> {return e.level === 1} )
  // الحسابات 
  let x=level2.filter((e)=> {return e.level === 1} )
  let y=level2.filter((e)=>{return e.level===2})
  let z=level2.filter((e)=>{return e.level===3})
  //الماليات 
  let x1=level1.filter((e)=> {return e.level === 1} )
  let y1=level1.filter((e)=>{return e.level===2})
  //المبيعات 
  let x2=level3.filter((e)=> {return e.level === 1} )
  let y2=level3.filter((e)=>{return e.level===2})
  //المشتريات
  let x3=level4.filter((e)=> {return e.level === 1} )
  let y3=level4.filter((e)=>{return e.level===2})
  //المخازن
  let x4=level5.filter((e)=> {return e.level === 1} )
  let y4=level5.filter((e)=>{return e.level===2})
  let z4=level5.filter((e)=>{return e.level===3})
  //الانتاج
  let x5=level6.filter((e)=> {return e.level === 1} )
  let y5=level6.filter((e)=>{return e.level===2})
  // الورش
  let x6=level7.filter((e)=> {return e.level === 1} )
  let y6=level7.filter((e)=>{return e.level===2}) 
  //الأصول الثابتة
  let x7=level8.filter((e)=> {return e.level === 1} )
  let y7=level8.filter((e)=>{return e.level===2}) 
  //شئون العاملين
  let x8=level9.filter((e)=> {return e.level === 1} )
  let y8=level9.filter((e)=>{return e.level===2}) 
  //الرواتب
  let x9=level10.filter((e)=> {return e.level === 1} )
  let y9=level10.filter((e)=>{return e.level===2}) 
  //اعدادت النظام
  let x10=level11.filter((e)=> {return e.level === 1} )
  let y10=level11.filter((e)=>{return e.level===2}) 
  let z10=level11.filter((e)=>{return e.level===3})
  var cartona =`
  <li class="nav-item ">
  <a href="${x[0].target}" onclick="NewLapleInTab('${x[0].label.toString()}, ${x[0].target}' )"    class="   nav-link text-white"  ><i class="hideIcon text-light  fa ${x[0].image_attribute}"></i>${x[0].label}  </a>
  <a  href="${x0[0].target}"onclick="NewLapleInTab('${x0[0].label.toString()}, ${x0[0].target}' )"class="  nav-link text-white"  ><i class="hideIcon text-light  fa ${x0[0].image_attribute}"></i>${x0[0].label}  </a>
  <a   href="${x0[1].target}"onclick="NewLapleInTab('${x0[1].label.toString()}, ${x0[1].target}' )"class=" nav-link text-white"  ><i class="hideIcon text-light  fa ${x0[1].image_attribute}"></i>${x0[1].label}  </a>
  
  <a   class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item1" href="#"><i class="hideIcon text-light  fa ${x[1].image_attribute}"></i>
  ${x[1].label} <i class="bi small bi-caret-down-fill"></i> </a>
  <ul id="menu_item1" class="submenu collapse"  data-bs-parent="#nav_accordion">
    <li>
      <a href="index.html?=p${y[0].target}"class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item2" href="#">
      ${y[0].label} <i class="bi small bi-caret-down-fill"></i> </a>
        <ul id="menu_item2" class="submenu collapse" data-bs-parent="#menu_item1">
          <li><a href="${z[0].target}"onclick="NewLapleInTab('${z[0].label.toString()}, ${z[0].target}' )" class="   nav-link  text-white " href="#">${z[0].label}</a></li>
        </ul>
    </li>
    <li>
      <a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item3" href="#">
      ${y[1].label} <i class="bi small bi-caret-down-fill"></i> </a>
        <ul id="menu_item3" class="submenu collapse" data-bs-parent="#menu_item1">
        <li><a href="${z[1].target}"onclick="NewLapleInTab('${z[1].label.toString()}, ${z[1].target}' )" class="nav-link text-white  " href="#">${z[1].label}</a></li>
        <li><a href="${z[2].target}"onclick="NewLapleInTab('${z[2].label.toString()}, ${z[2].target}' )"class="nav-link text-white" href="#">${z[2].label}</a></li>
        <li><a href="${z[3].target}"onclick="NewLapleInTab('${z[3].label.toString()}, ${z[3].target}' )"class="nav-link text-white" href="#">${z[3].label} </a> </li>
        <li><a href="${z[4].target}"onclick="NewLapleInTab('${z[4].label.toString()}, ${z[4].target}' )"class="nav-link text-white   " href="#">${z[4].label}</a></li>
        <li><a href="${z[5].target}"onclick="NewLapleInTab('${z[5].label.toString()}, ${z[5].target}' )"class="nav-link text-white" href="#">${z[5].label}</a></li>
      </ul>
    </li>




    
    <li>
      <a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item4" href="#">
      ${y[2].label} <i class="bi small bi-caret-down-fill"></i> </a>
        <ul id="menu_item4" class="submenu collapse" data-bs-parent="#menu_item1">

        <li><a href="${z[6].target}"onclick="NewLapleInTab('${z[6].label.toString()}, ${z[6].target}' )"class="nav-link text-white" href="#">${z[6].label} </a> </li>
        <li><a href="${z[7].target}"onclick="NewLapleInTab('${z[7].label.toString()}, ${z[7].target}' )"class="nav-link text-white   " href="#">${z[7].label}</a></li>
        <li><a href="${z[8].target}"onclick="NewLapleInTab('${z[8].label.toString()}, ${z[8].target}' )"class="nav-link text-white" href="#">${z[8].label}</a></li>
        <li><a href="${z[9].target}"onclick="NewLapleInTab('${z[9].label.toString()}, ${z[9].target}' )"class="nav-link text-white   " href="#">${z[9].label}</a></li>
        <li><a href="${z[10].target}"onclick="NewLapleInTab('${z[10].label.toString()}, ${z[10].target}' )"class="nav-link text-white" href="#">${z[10].label}</a></li>
        <li><a href="${z[11].target}"onclick="NewLapleInTab('${z[11].label.toString()}, ${z[11].target}' )"class="nav-link text-white" href="#">${z[11].label} </a> </li>
        </ul>
    </li>
    <li>
      <a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item5" href="#">
      ${y[3].label} <i class="bi small bi-caret-down-fill"></i> </a>
        <ul id="menu_item5" class="submenu collapse" data-bs-parent="#menu_item1">
        <li><a href="${z[12].target}"onclick="NewLapleInTab('${z[12].label.toString()}, ${z[12].target}' )" class="nav-link text-white   " href="#">${z[12].label}</a></li>
        <li><a href="${z[13].target}"onclick="NewLapleInTab('${z[13].label.toString()}, ${z[13].target}' )"class="nav-link text-white" href="#">${z[13].label}</a></li>
        <li><a href="${z[14].target}"onclick="NewLapleInTab('${z[14].label.toString()}, ${z[14].target}' )"class="nav-link text-white   " href="#">${z[14].label}</a></li>
        <li><a href="${z[15].target}"onclick="NewLapleInTab('${z[15].label.toString()}, ${z[15].target}' )"class="nav-link text-white" href="#">${z[15].label}</a></li>
        <li><a href="${z[16].target}"onclick="NewLapleInTab('${z[16].label.toString()}, ${z[16].target}' )"class="nav-link text-white" href="#">${z[16].label} </a> </li>
        <li><a href="${z[17].target}"onclick="NewLapleInTab('${z[17].label.toString()}, ${z[17].target}' )"class="nav-link text-white   " href="#">${z[17].label}</a></li>
        <li><a href="${z[18].target}"onclick="NewLapleInTab('${z[18].label.toString()}, ${z[18].target}' )"class="nav-link text-white" href="#">${z[18].label}</a></li>
        <li><a href="${z[19].target}"onclick="NewLapleInTab('${z[19].label.toString()}, ${z[19].target}' )"class="nav-link text-white   " href="#">${z[19].label}</a></li>
        <li><a href="${z[20].target}"onclick="NewLapleInTab('${z[20].label.toString()}, ${z[20].target}' )"class="nav-link text-white" href="#">${z[20].label}</a></li>
        <li><a href="${z[21].target}"onclick="NewLapleInTab('${z[21].label.toString()}, ${z[21].target}' )"class="nav-link text-white" href="#">${z[21].label} </a> </li>
        <li><a href="${z[22].target}"onclick="NewLapleInTab('${z[22].label.toString()}, ${z[22].target}' )"class="nav-link text-white   " href="#">${z[22].label}</a></li>
        <li><a href="${z[23].target}"onclick="NewLapleInTab('${z[23].label.toString()}, ${z[23].target}' )"class="nav-link text-white" href="#">${z[23].label}</a></li>
 
        </ul>
    </li>
    <li>
    <a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item6" href="#">
    ${y[4].label} <i class="bi small bi-caret-down-fill"></i> </a>
      <ul id="menu_item6" class="submenu collapse" data-bs-parent="#menu_item1">
      <li><a href="${z[24].target}"onclick="NewLapleInTab('${z[24].label.toString()}, ${z[24].target}' )"class="nav-link text-white" href="#">${z[24].label}</a></li>
      <li><a href="${z[25].target}"onclick="NewLapleInTab('${z[25].label.toString()}, ${z[25].target}' )"class="nav-link text-white" href="#">${z[25].label}</a></li> 
      <li><a href="${z[26].target}"onclick="NewLapleInTab('${z[26].label.toString()}, ${z[26].target}' )"class="nav-link text-white" href="#">${z[26].label}</a></li> 
      </ul>
  </li>
  </ul>
</li>

<li class="nav-item ">
<a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item7" href="#"><i class="hideIcon text-light  fa ${x1[0].image_attribute}"></i>
${x1[0].label} <i class="bi small bi-caret-down-fill"></i> </a>
<ul id="menu_item7" class="submenu collapse"  data-bs-parent="#nav_accordion">
 <li>
   <li><a href="${y1[0].target}"onclick="NewLapleInTab('${y1[0].label.toString()}, ${y1[0].target}' )" class="   nav-link  text-white " href="#">${y1[0].label}</a></li>
   <li><a href="${y1[1].target}"onclick="NewLapleInTab('${y1[1].label.toString()}, ${y1[1].target}' )" class="   nav-link  text-white " href="#">${y1[1].label}</a></li>
   <li><a href="${y1[2].target}"onclick="NewLapleInTab('${y1[2].label.toString()}, ${y1[2].target}' )" class="   nav-link  text-white " href="#">${y1[2].label}</a></li>
   <li><a href="${y1[3].target}"onclick="NewLapleInTab('${y1[3].label.toString()}, ${y1[3].target}' )" class="   nav-link  text-white " href="#">${y1[3].label}</a></li>
   <li><a href="${y1[4].target}"onclick="NewLapleInTab('${y1[4].label.toString()}, ${y1[4].target}' )" class="   nav-link  text-white " href="#">${y1[4].label}</a></li>
  </li>
</ul>
</li>

<li class="nav-item ">
<a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item8" href="#"><i class="hideIcon text-light  fa ${x2[0].image_attribute}"></i>
${x2[0].label} <i class="bi small bi-caret-down-fill"></i> </a>
<ul id="menu_item8" class="submenu collapse"  data-bs-parent="#nav_accordion">
 <li>
   <li><a href="${y2[0].target}"onclick="NewLapleInTab('${y2[0].label.toString()}, ${y2[0].target}' )" class="   nav-link  text-white " href="#">${y2[0].label}</a></li>
   <li><a href="${y2[1].target}"onclick="NewLapleInTab('${y2[1].label.toString()}, ${y2[1].target}' )" class="   nav-link  text-white " href="#">${y2[1].label}</a></li>
   <li><a href="${y2[2].target}"onclick="NewLapleInTab('${y2[2].label.toString()}, ${y2[2].target}' )" class="   nav-link  text-white " href="#">${y2[2].label}</a></li>
   <li><a href="${y2[3].target}"onclick="NewLapleInTab('${y2[3].label.toString()}, ${y2[3].target}' )" class="   nav-link  text-white " href="#">${y2[3].label}</a></li>
   <li><a href="${y2[4].target}"onclick="NewLapleInTab('${y2[4].label.toString()}, ${y2[4].target}' )" class="   nav-link  text-white " href="#">${y2[4].label}</a></li>
  </li>
</ul>
</li>

<li class="nav-item ">
<a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item9" href="#"><i class="hideIcon text-light  fa ${x3[0].image_attribute}"></i>
${x3[0].label} <i class="bi small bi-caret-down-fill"></i> </a>
<ul id="menu_item9" class="submenu collapse"  data-bs-parent="#nav_accordion">
 <li>
   <li><a href="${y3[0].target}"onclick="NewLapleInTab('${y3[0].label.toString()}, ${y3[0].target}' )" class="   nav-link  text-white " href="#">${y3[0].label}</a></li>
   <li><a href="${y3[1].target}"onclick="NewLapleInTab('${y3[1].label.toString()}, ${y3[1].target}' )" class="   nav-link  text-white " href="#">${y3[1].label}</a></li>
   <li><a href="${y3[2].target}"onclick="NewLapleInTab('${y3[2].label.toString()}, ${y3[2].target}' )" class="   nav-link  text-white " href="#">${y3[2].label}</a></li>
   <li><a href="${y3[3].target}"onclick="NewLapleInTab('${y3[3].label.toString()}, ${y3[3].target}' )" class="   nav-link  text-white " href="#">${y3[3].label}</a></li>
   <li><a href="${y3[4].target}"onclick="NewLapleInTab('${y3[4].label.toString()}, ${y3[4].target}' )" class="   nav-link  text-white " href="#">${y3[4].label}</a></li>
  </li>
</ul>
</li>

<li class="nav-item ">
<a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item10" href="#"><i class="hideIcon text-light  fa ${x4[0].image_attribute}"></i>
${x4[0].label} <i class="bi small bi-caret-down-fill"></i> </a>
<ul id="menu_item10" class="submenu collapse"  data-bs-parent="#nav_accordion">
 <li>
   <li><a href="${y4[0].target}"onclick="NewLapleInTab('${y4[0].label.toString()}, ${y4[0].target}' )" class="   nav-link  text-white " href="#">${y4[0].label}</a></li>
   <li><a href="${y4[1].target}"onclick="NewLapleInTab('${y4[1].label.toString()}, ${y4[1].target}' )" class="   nav-link  text-white " href="#">${y4[1].label}</a></li>
   <li><a href="${y4[2].target}"onclick="NewLapleInTab('${y4[2].label.toString()}, ${y4[2].target}' )" class="   nav-link  text-white " href="#">${y4[2].label}</a></li>
   <li><a href="${y4[3].target}"onclick="NewLapleInTab('${y4[3].label.toString()}, ${y4[3].target}' )" class="   nav-link  text-white " href="#">${y4[3].label}</a></li>
   <li>
   <a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item5" href="#">
   ${y4[4].label} <i class="bi small bi-caret-down-fill"></i> </a>
     <ul id="menu_item5" class="submenu collapse" data-bs-parent="#menu_item1">
        <li><a href="${z4[0].target}"onclick="NewLapleInTab('${z4[0].label.toString()}, ${z4[0].target}' )"class="nav-link text-white   " href="#">${z4[0].label}</a></li>
     </ul>
   </li>
  </li>
</ul>
</li>

<li class="nav-item ">
<a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item11" href="#"><i class="hideIcon text-light  fa ${x5[0].image_attribute}"></i>
${x5[0].label} <i class="bi small bi-caret-down-fill"></i> </a>
<ul id="menu_item11" class="submenu collapse"  data-bs-parent="#nav_accordion">
 <li>
   <li><a href="${y5[0].target}"onclick="NewLapleInTab('${y5[0].label.toString()}, ${y5[0].target}' )" class="   nav-link  text-white " href="#">${y5[0].label}</a></li>
   <li><a href="${y5[1].target}"onclick="NewLapleInTab('${y5[1].label.toString()}, ${y5[1].target}' )" class="   nav-link  text-white " href="#">${y5[1].label}</a></li>
   <li><a href="${y5[2].target}"onclick="NewLapleInTab('${y5[2].label.toString()}, ${y5[2].target}' )" class="   nav-link  text-white " href="#">${y5[2].label}</a></li>
   <li><a href="${y5[3].target}"onclick="NewLapleInTab('${y5[3].label.toString()}, ${y5[3].target}' )" class="   nav-link  text-white " href="#">${y5[3].label}</a></li>
   <li><a href="${y5[4].target}"onclick="NewLapleInTab('${y5[4].label.toString()}, ${y5[4].target}' )" class="   nav-link  text-white " href="#">${y5[4].label}</a></li>
  </li>
</ul>
</li>

<li class="nav-item ">
<a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item12" href="#"><i class="hideIcon text-light  fa ${x6[0].image_attribute}"></i>
${x6[0].label} <i class="bi small bi-caret-down-fill"></i> </a>
<ul id="menu_item12" class="submenu collapse"  data-bs-parent="#nav_accordion">
 <li>
   <li><a href="${y6[0].target}"onclick="NewLapleInTab('${y6[0].label.toString()}, ${y6[0].target}' )" class="   nav-link  text-white " href="#">${y6[0].label}</a></li>
   <li><a href="${y6[1].target}"onclick="NewLapleInTab('${y6[1].label.toString()}, ${y6[1].target}' )" class="   nav-link  text-white " href="#">${y6[1].label}</a></li>
   <li><a href="${y6[2].target}"onclick="NewLapleInTab('${y6[2].label.toString()}, ${y6[2].target}' )" class="   nav-link  text-white " href="#">${y6[2].label}</a></li>
   <li><a href="${y6[3].target}"onclick="NewLapleInTab('${y6[3].label.toString()}, ${y6[3].target}' )" class="   nav-link  text-white " href="#">${y6[3].label}</a></li>
   <li><a href="${y6[4].target}"onclick="NewLapleInTab('${y6[4].label.toString()}, ${y6[4].target}' )" class="   nav-link  text-white " href="#">${y6[4].label}</a></li>
  </li>
</ul>
</li>

<li class="nav-item ">
<a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item13" href="#"><i class="hideIcon text-light  fa ${x7[0].image_attribute}"></i>
${x7[0].label} <i class="bi small bi-caret-down-fill"></i> </a>
<ul id="menu_item13" class="submenu collapse"  data-bs-parent="#nav_accordion">
 <li>
   <li><a href="${y7[0].target}"onclick="NewLapleInTab('${y7[0].label.toString()}, ${y7[0].target}' )" class="   nav-link  text-white " href="#">${y7[0].label}</a></li>
   <li><a href="${y7[1].target}"onclick="NewLapleInTab('${y7[1].label.toString()}, ${y7[1].target}' )" class="   nav-link  text-white " href="#">${y7[1].label}</a></li>
   <li><a href="${y7[2].target}"onclick="NewLapleInTab('${y7[2].label.toString()}, ${y7[2].target}' )" class="   nav-link  text-white " href="#">${y7[2].label}</a></li>
   <li><a href="${y7[3].target}"onclick="NewLapleInTab('${y7[3].label.toString()}, ${y7[3].target}' )" class="   nav-link  text-white " href="#">${y7[3].label}</a></li>
   <li><a href="${y7[4].target}"onclick="NewLapleInTab('${y7[4].label.toString()}, ${y7[4].target}' )" class="   nav-link  text-white " href="#">${y7[4].label}</a></li>
  </li>
</ul>
</li>

<li class="nav-item ">
<a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item14" href="#"><i class="hideIcon text-light  fa ${x8[0].image_attribute}"></i>
${x8[0].label} <i class="bi small bi-caret-down-fill"></i> </a>
<ul id="menu_item14" class="submenu collapse"  data-bs-parent="#nav_accordion">
 <li>
   <li><a href="${y8[0].target}"onclick="NewLapleInTab('${y8[0].label.toString()}, ${y8[0].target}' )" class="   nav-link  text-white " href="#">${y8[0].label}</a></li>
   <li><a href="${y8[1].target}"onclick="NewLapleInTab('${y8[1].label.toString()}, ${y8[1].target}' )" class="   nav-link  text-white " href="#">${y8[1].label}</a></li>
   <li><a href="${y8[2].target}"onclick="NewLapleInTab('${y8[2].label.toString()}, ${y8[2].target}' )" class="   nav-link  text-white " href="#">${y8[2].label}</a></li>
   <li><a href="${y8[3].target}"onclick="NewLapleInTab('${y8[3].label.toString()}, ${y8[3].target}' )" class="   nav-link  text-white " href="#">${y8[3].label}</a></li>
   <li><a href="${y8[4].target}"onclick="NewLapleInTab('${y8[4].label.toString()}, ${y8[4].target}' )" class="   nav-link  text-white " href="#">${y8[4].label}</a></li>
  </li>
</ul>
</li>



<li class="nav-item ">
<a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item15" href="#"><i class="hideIcon text-light  fa ${x9[0].image_attribute}"></i>
${x9[0].label} <i class="bi small bi-caret-down-fill"></i> </a>
<ul id="menu_item15" class="submenu collapse"  data-bs-parent="#nav_accordion">
 <li>
   <li><a href="${y9[0].target}"onclick="NewLapleInTab('${y9[0].label.toString()}, ${y9[0].target}' )" class="   nav-link  text-white " href="#">${y9[0].label}</a></li>
   <li><a href="${y9[1].target}"onclick="NewLapleInTab('${y9[1].label.toString()}, ${y9[1].target}' )" class="   nav-link  text-white " href="#">${y9[1].label}</a></li>
   <li><a href="${y9[2].target}"onclick="NewLapleInTab('${y9[2].label.toString()}, ${y9[2].target}' )" class="   nav-link  text-white " href="#">${y9[2].label}</a></li>
   <li><a href="${y9[3].target}"onclick="NewLapleInTab('${y9[3].label.toString()}, ${y9[3].target}' )" class="   nav-link  text-white " href="#">${y9[3].label}</a></li>
   <li><a href="${y9[4].target}"onclick="NewLapleInTab('${y9[4].label.toString()}, ${y9[4].target}' )" class="   nav-link  text-white " href="#">${y9[4].label}</a></li>
  </li>
</ul>
</li>

<li class="nav-item ">
<a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item16" href="#"><i class="hideIcon text-light  fa ${x10[0].image_attribute}"></i>
${x10[0].label} <i class="bi small bi-caret-down-fill"></i> </a>
<ul id="menu_item16" class="submenu collapse"  data-bs-parent="#nav_accordion">
 <li>
   <li><a href="${y10[0].target}"onclick="NewLapleInTab('${y10[0].label.toString()}, ${y10[0].target}' )" class="   nav-link  text-white " href="#">${y10[0].label}</a></li>
   <li><a href="${y10[1].target}"onclick="NewLapleInTab('${y10[1].label.toString()}, ${y10[1].target}' )" class="   nav-link  text-white " href="#">${y10[1].label}</a></li>
   <li><a href="${y10[2].target}"onclick="NewLapleInTab('${y10[2].label.toString()}, ${y10[2].target}' )" class="   nav-link  text-white " href="#">${y10[2].label}</a></li>
   <li>
   <a class="nav-link text-white" data-bs-toggle="collapse" data-bs-target="#menu_item17" href="#">
   ${y10[3].label} <i class="bi small bi-caret-down-fill"></i> </a>
     <ul id="menu_item17" class="submenu collapse"  data-bs-parent="#menu_item1">
     <li><a href="${z10[0].target}"onclick="NewLapleInTab('${z10[0].label.toString()} , ${z10[0].target}' )"class="nav-link text-white   " >${z10[0].label}</a></li>
     <li><a href="${z10[1].target}"onclick="NewLapleInTab('${z10[1].label.toString()}, ${z10[1].target}' )"class="nav-link text-white   "  >${z10[1].label}</a></li>
     <li><a href="${z10[2].target}"onclick="NewLapleInTab('${z10[2].label.toString()}, ${z10[2].target}' )"class="nav-link text-white   " >${z10[2].label}</a></li>
     <li><a href="${z10[3].target}"onclick="NewLapleInTab('${z10[3].label.toString()}, ${z10[3].target}' )"class="nav-link text-white   "  >${z10[3].label}</a></li>
     <li><a href="${z10[4].target}"onclick="NewLapleInTab('${z10[4].label.toString()}, ${z10[4].target}' )"class="nav-link text-white   "  >${z10[4].label}</a></li>
     <li><a href="${z10[5].target}"onclick="NewLapleInTab('${z10[5].label.toString()}, ${z10[5].target}' )"class="nav-link text-white   " >${z10[5].label}</a></li>
     <li><a href="${z10[6].target}"onclick="NewLapleInTab('${z10[6].label.toString()}, ${z10[4].target}' )"class="nav-link text-white   " >${z10[6].label}</a></li>
     <li><a href="${z10[7].target}"onclick="NewLapleInTab('${z10[7].label.toString()}, ${z10[4].target}' )"class="nav-link text-white   "  >${z10[7].label}</a></li>
     <li><a href="${z10[8].target}"onclick="NewLapleInTab('${z10[8].label.toString()}, ${z10[4].target}' )"class="nav-link text-white   "  >${z10[8].label}</a></li>
     <li><a href="${z10[9].target}"onclick="NewLapleInTab('${z10[9].label.toString()}, ${z10[4].target}' )"class="nav-link text-white   "  >${z10[9].label}</a></li>
     <li><a href="${z10[10].target}"onclick="NewLapleInTab('${z10[10].label.toString()}, ${z10[10].target}' )"class="nav-link text-white "  >${z10[10].label}</a></li>
     <li><a href="${z10[11].target}"onclick="NewLapleInTab('${z10[11].label.toString()}, ${z10[11].target}' )"class="nav-link text-white   "  >${z10[11].label}</a></li>
     <li><a href="${z10[12].target}"onclick="NewLapleInTab('${z10[12].label.toString()}, ${z10[12].target}' )"class="nav-link text-white   "  >${z10[12].label}</a></li>
     <li><a href="${z10[13].target}"onclick="NewLapleInTab('${z10[13].label.toString()}, ${z10[13].target}' )"class="nav-link text-white   "  >${z10[13].label}</a></li>
     <li><a href="${z10[14].target}"onclick="NewLapleInTab('${z10[14].label.toString()}, ${z10[13].target}' )"class="nav-link text-white   "  >${z10[14].label}</a></li>
     <li><a href="${z10[15].target}"onclick="NewLapleInTab('${z10[15].label.toString()}, ${z10[15].target}' )"class="nav-link text-white   "  >${z10[15].label}</a></li>  
     </ul>
   </li>
  </li>
</ul>
</li>


`; 
 let item2 =document.getElementById('nav_accordion');
 item2.innerHTML=cartona

}  

/**
 * Add a new tab
 * display new tab in layout
 * deleteonclick="NewLapleInTab('${z[1].label.toString()}' )" when click in icon X
 */
 let DBTabs = [];

if (localStorage.getItem("ahlaKlamSave") != null) {
  DBTabs = JSON.parse(localStorage.getItem("ahlaKlamSave"));
  let cartonaGet=``;
  for (let i = 0; i < DBTabs.length; i++) {
    let z=DBTabs[i].split(',')
    cartonaGet+= `
         <li class="" dataset-cont="three">
                <a href="${z[1]}">${z[0]}</a>
                <i onclick="d(${i})" class="  fa fa-times  "></i> 

         </li>`;
  }
  document.querySelector(".tab").innerHTML = cartonaGet;
   
} else {
  DBTabs = [];
}


let deleteT = [];
function NewLapleInTab(e) {
  DBTabs.push(e)
  let cartonaTab=``;
  for (let i = 0; i < DBTabs.length; i++) {
    let x=DBTabs[i].split(',')
    cartonaTab+= `
         <li class="" dataset-cont="three">
                <a href="${x[1]}">${x[0]}</a>
                <i onclick="d(${i})" class="  fa fa-times  "></i> 

         </li>`;
  }
  deleteT.push(cartonaTab);

  document.querySelector(".tab").innerHTML = cartonaTab;
  localStorage.setItem("ahlaKlamSave", JSON.stringify(DBTabs));
  tabsStyle();
}
 
function d() {  
  let child = document.querySelector(".fa-times");
  child.parentElement.remove();
  localStorage.removeItem("ahlaKlamSave");
  // DBTabs=[]
}
// =============================================================================================================================
// /**
//  * tabsStyle
//  */
function tabsStyle() {
  let tabs = document.querySelectorAll(".tab>li");
  let tabsArray = Array.from(tabs);
  let divs = document.querySelectorAll(".contentTabs>div");
  let divsArray = Array.from(divs);

  tabsArray.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      tabsArray.forEach((removeActive) => {
        removeActive.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
      //display new content
      divsArray.forEach((content) => {
        content.style.display = "none";
      });
    });
  });
}
 