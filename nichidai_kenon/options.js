function getSelectIndex(elementId){
    var elements = document.getElementById(elementId);
    for (var i=0; i < elements.length; i++) {
        if (elements[i].selected) {
            return i;
        }
    }
}

function getCookie(keyName){
    var cookies = document.cookie;
    var cookiesArray = cookies.split("; ");

    for(var c of cookiesArray){
        var cArray = c.split("=");
        if( cArray[0] == keyName){
            return cArray[1];
        }
    }
}

//保存
function button_save(){
    var Temperature_Normal = document.getElementById("Temperature_Normal").value;
    var Temperature_1_select = getSelectIndex("Temperature_1_select");
    var Temperature_1_min = document.getElementById("Temperature_1_min").value;
    var Temperature_1_max = document.getElementById("Temperature_1_max").value;
    var Temperature_2_select = getSelectIndex("Temperature_2_select");
    var Temperature_2_min = document.getElementById("Temperature_2_min").value;
    var Temperature_2_max = document.getElementById("Temperature_2_max").value;
    var Behavior_1 = document.getElementById("Behavior_1").value;
    var Behavior_2 = document.getElementById("Behavior_2").value;
    var Behavior_3 = document.getElementById("Behavior_3").value;
    var Notes = document.getElementById("Notes").value;

    document.getElementById("output").value = 'javascript:(function(){function c(d,e){return Math.floor(10*(d+Math.random()*(e-d+.1)))/10}var a='+Temperature_Normal+',f='+Temperature_1_select+',g=c(parseFloat('+Temperature_1_min+'),parseFloat('+Temperature_1_max+')),h='+Temperature_2_select+',k=c(parseFloat('+Temperature_2_min+'),parseFloat('+Temperature_2_max+')),b='+Behavior_1+',l='+Behavior_2+',m='+Behavior_3+',n='+Notes+';document.getElementById("Ent_Input_Temperature_Normal_String").value=a;document.getElementById("Ent_Input_Temperature_1_Time")[f].selected=!0;document.getElementById("Ent_Input_Temperature_1_String").value=g;document.getElementById("Ent_Input_Temperature_2_Time")[h].selected=!0;document.getElementById("Ent_Input_Temperature_2_String").value=k;for(a=1;12>=a;a++)document.getElementById("Check_"+a.toString()+"_N").click();document.getElementById("Ent_Input_Text_Behavior_1").value=b;document.getElementById("Ent_Input_Text_Behavior_2").value=l;document.getElementById("Ent_Input_Text_Behavior_3").value=m;document.getElementById("Ent_Input_Summary").value=n;b=document.documentElement;window.scroll(0,b.scrollHeight-b.clientHeight)})();';
}

//ロード時
document.addEventListener("DOMContentLoaded", function() {
    //保存ボタンのイベント登録
    document.getElementById("save").addEventListener("click",function() {
        button_save();
    });
});