
  document.getElementById("drop0").addEventListener("mouseleave", mouseLeave0);
  document.getElementById("drop1").addEventListener("mouseleave", mouseLeave1);
  document.getElementById("drop3").addEventListener("onclick", mouseEnter2);
  document.getElementById("drop3").addEventListener("mouseleave", mouseLeave2);
  document.getElementById("drop4").addEventListener("onclick", mouseEnter3);  
  document.getElementById("drop4").addEventListener("mouseleave", mouseLeave3);
  
  let b_m = document.getElementById("acc");
  let dr = document.getElementById("drop0_1");
  b_m.addEventListener("click", () =>{
    if(getComputedStyle(dr).display != "none"){
      mouseLeave0();
    }
    else
    {

      leaveall();
      document.getElementById("drop0_1").style.display = "block";   
      document.getElementById("drop0_1").style.borderRadius = "10px";
      document.getElementById("acc").innerHTML = "Accueil <img width='20px' src='../icons/round_keyboard_arrow_left_black_18dp.png'>";
    }
  })
  let b_msw = document.getElementById("sw");
  let drmsw = document.getElementById("drop1_1");
  b_msw.addEventListener("click", () => {
    if (getComputedStyle(drmsw).display != "none") {
      mouseLeave1();
    }
    else {

      leaveall();
      document.getElementById("drop1_1").style.display = "block";
      document.getElementById("drop1_1").style.borderRadius = "10px";
      document.getElementById("sw").innerHTML = "Star Wars <img width='20px' src='../icons/round_keyboard_arrow_left_black_18dp.png'>";
    }
  })
  let b_neutralsyst = document.getElementById("neutralsyst");
  let dr_neutralsyst = document.getElementById("Celeste");
  b_neutralsyst.addEventListener("click", () =>{
    if(getComputedStyle(dr_neutralsyst).display != "none"){
      leavesw();
    }
    else
    {
      leavesw();
      replace_footer();
      document.getElementById('Celeste').style.display = 'block';
      document.getElementById('Terrestre').style.display = 'none';
      document.getElementById('Republic').style.display = 'none';
      leaveall();
    }
  })
  let b_csi = document.getElementById("csi");
  let dr_csi = document.getElementById("Terrestre");
  b_csi.addEventListener("click", () =>{
    if(getComputedStyle(dr_csi).display != "none"){
      // dr.style.display = "none";
      leavesw();
    }
    else
    {
      leavesw();
      document.getElementById("Footer").style.bottom ="27px";
      replace_footer();
      leaveall();
    }
  })
  let b_repbut = document.getElementById("repbut");
  let dr_repbut = document.getElementById("Republic");
  b_repbut.addEventListener("click", () =>{
    if(getComputedStyle(dr_repbut).display != "none"){
      // dr.style.display = "none";
      leavesw();
      // console.log("heck");
    }
    else
    {
      leavesw();
      replace_footer();

      document.getElementById('Republic').style.display = 'block';
      leaveall();
    }
  })

  function getRepublic()
  {
    var statistics = "https://my-json-server.typicode.com/MasterJediKnight/animals-starwars/Page"
    fetch(statistics)
    .then(response => response.json())                                    	 
    .then(function (stats) {
        statistics_data = stats;
        var republic_governor = statistics_data[0].StarWarsI[0].Republic[0].li
        // console.log(republic_governor);
        createRepublic(statistics_data[0].StarWarsI[0].Republic[0], statistics_data[0].StarWarsI[0].Republic[0].li, statistics_data[0].StarWarsI[0].Republic[0].image);
    });
  }
  function createRepublic(element, subelement1, imaget)
  {
    let newli1 = document.createElement("li");
    newli1.textContent = subelement1;
    let divmod= document.getElementById("Republic");
    divmod.appendChild(newli1);
    toimage_rep(element,subelement1);
  }
  function toimage_rep(obj, subelement1) {
     var img = new Image();
     img.src = obj.image;
     img.setAttribute("Id", "myImg");
     img.setAttribute("onclick", "showImg(this)");
     img.setAttribute("style","width:100%;max-width:300px");
     img.setAttribute("alt", subelement1);
     document.getElementById("Republic").appendChild(img);
  }
  function mouseLeave0() {
    leaveall();
    document.getElementById("acc").innerHTML = "Accueil <img width='20px' src='../icons/round_keyboard_arrow_down_black_18dp.png'>";
    replace_footer();
  }

  //Menu drop 2
  function mouseEnter1() {
    leaveall();
    document.getElementById("sw").innerHTML = "Animaux <img width='20px' src='../icons/round_keyboard_arrow_left_black_18dp.png'>";
    document.getElementById("drop1_1").style.display = "block";
    document.getElementById("drop1_1").style.borderRadius = "10px";
    replace_footer();
  }
  function mouseLeave1() {
    leaveall();
    document.getElementById("sw").innerHTML = "Animaux <img width='20px' src='../icons/round_keyboard_arrow_down_black_18dp.png'>";
    replace_footer();
  }
  function mouseEnter2() {
    leaveall();
    document.getElementById("mamif").innerHTML = "Animaux<img width='20px' src='../icons/round_keyboard_arrow_left_black_18dp.png'>";
    replace_footer();
  }
  function mouseLeave2() {
    leaveall();
    document.getElementById("mamif").innerHTML = "Animaux <img width='20px' src='../icons/round_keyboard_arrow_down_black_18dp.png'>";
    replace_footer();
  }
  function mouseEnter3() {
    leaveall();
    document.getElementById("gamertime").innerHTML = "A vous de jouer <img width='20px' src='../icons/round_keyboard_arrow_left_black_18dp.png'>";
    replace_footer();
  }
  function mouseLeave3() {
    leaveall();
    document.getElementById("gamertime").innerHTML = "A vous de jouer <img width='20px' src='../icons/round_keyboard_arrow_down_black_18dp.png'>";
    replace_footer();
  }
  function mouseEnter4() {
    leaveall();
    document.getElementById("whoru").innerHTML = "Qui sommes-nous <img width='20px' src='../icons/round_keyboard_arrow_left_black_18dp.png'>";
    replace_footer();
  }
  function mouseLeave4() {
    leaveall();
    document.getElementById("whoru").innerHTML = "Qui sommes-nous <img width='20px' src='../icons/round_keyboard_arrow_down_black_18dp.png'>";
    replace_footer();
  }
  /******/
  //ZOOMS
  var modal = document.getElementById("myModal");
  var i;

  var imag = document.getElementsByClassName("myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  function showImg(ele) {
    modal.style.display = "block";
    modalImg.src = ele.src;
    captionText.innerHTML = ele.alt;
  }
  var span = document.getElementsByClassName("close")[0];

  /*****/
  //LEAVE ALL
  function leaveall() {
    document.getElementById("drop0_1").style.display = "none";
    document.getElementById("drop1_1").style.display = "none";
    document.getElementById("acc").innerHTML = "Accueil <img width='20px' src='../icons/round_keyboard_arrow_down_black_18dp.png'>";
    document.getElementById("sw").innerHTML = "Star Wars <img width='20px' src='../icons/round_keyboard_arrow_down_black_18dp.png'>";
    document.getElementById("mamif").innerHTML = "Animaux <img width='20px' src='../icons/round_keyboard_arrow_down_black_18dp.png'>";
    document.getElementById("gamertime").innerHTML = "A vous de jouer <img width='20px' src='../icons/round_keyboard_arrow_down_black_18dp.png'>";
    document.getElementById("whoru").innerHTML = "Qui sommes-nous <img width='20px' src='../icons/round_keyboard_arrow_down_black_18dp.png'>";
    document.getElementById("Footer").style.bottom = "27px";
    document.getElementById("allrights").style.bottom = "0";
  }
  function replace_footer()
  {
    document.getElementById("Footer").style.bottom = "27px";
    document.getElementById("allrights").style.bottom = "0";
    document.getElementById("Footer").style.transition = "all 1s ease-out;";
    document.getElementById("allrights").style.transition = "all 1s ease-out;";
  }
  function leavesw()
  { 
    document.getElementById('Celeste').style.display = 'none';
    document.getElementById('Terrestre').style.display = 'none';
    document.getElementById('Republic').style.display = 'none';
  } 
  window.onload = leaveall();
  window.onload = leavesw();
  window.onload = getRepublic();