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




    document.cookie = "Temperature_Normal=" + Temperature_Normal;
    document.cookie = "Temperature_1_select=" + Temperature_1_select;
    document.cookie = "Temperature_1_min=" + Temperature_1_min;
    document.cookie = "Temperature_1_max=" + Temperature_1_max;
    document.cookie = "Temperature_2_select=" + Temperature_2_select;
    document.cookie = "Temperature_2_min=" + Temperature_2_min;
    document.cookie = "Temperature_2_max=" + Temperature_2_max;
    document.cookie = "Behavior_1=" + Behavior_1;
    document.cookie = "Behavior_2=" + Behavior_2;
    document.cookie = "Behavior_3=" + Behavior_3;
    document.cookie = "Notes=" + Notes;

    alert("保存しました");
}

//ロード時
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Temperature_Normal").value = getCookie(Temperature_Normal);

    var temp_1_Elements = document.getElementById("Temperature_1_select");
    //temp_1_Elements[parseInt(getCookie(Temperature_1_select))].selected = true;
    console.log(getCookie(Temperature_1_select));
    document.getElementById("Temperature_1_min").value = getCookie(Temperature_1_min);
    document.getElementById("Temperature_1_max").value = getCookie(Temperature_1_max);

    var temp_2_Elements = document.getElementById("Temperature_2_select");
    //temp_2_Elements[parseInt(getCookie(Temperature_2_select))].selected = true;
    document.getElementById("Temperature_2_min").value = getCookie(Temperature_2_min);
    document.getElementById("Temperature_2_max").value = getCookie(Temperature_2_max);

    document.getElementById("Behavior_1").value = getCookie(Behavior_1);
    document.getElementById("Behavior_2").value = getCookie(Behavior_2);
    document.getElementById("Behavior_3").value = getCookie(Behavior_3);

    document.getElementById("Notes").value = getCookie(Notes);

    //保存ボタンのイベント登録
    document.getElementById("save").addEventListener("click",function() {
        button_save();
    });
});