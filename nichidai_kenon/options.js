function getSelectIndex(elementId){
    var elements = document.getElementById(elementId);
    for (var i=0; i < elements.length; i++) {
        if (elements[i].selected) {
            return i;
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



    chrome.storage.local.set(  {
        "Temperature_Normal": Temperature_Normal,
        "Temperature_1_select": Temperature_1_select,
        "Temperature_1_min": Temperature_1_min,
        "Temperature_1_max": Temperature_1_max,
        "Temperature_2_select": Temperature_2_select,
        "Temperature_2_min": Temperature_2_min,
        "Temperature_2_max": Temperature_2_max,
        "Behavior_1": Behavior_1,
        "Behavior_2": Behavior_2,
        "Behavior_3": Behavior_3,
        "Notes": Notes
      }
    );

    alert("保存しました");
}

//ロード時
document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.local.get(["Temperature_Normal", "Temperature_1_select", "Temperature_1_min",
    "Temperature_1_max", "Temperature_2_select", "Temperature_2_min", "Temperature_2_max",
    "Behavior_1", "Behavior_2", "Behavior_3", "Notes"], function(items) {
        document.getElementById("Temperature_Normal").value = items.Temperature_Normal;

        var temp_1_Elements = document.getElementById("Temperature_1_select");
        temp_1_Elements[items.Temperature_1_select].selected = true;
        document.getElementById("Temperature_1_min").value = items.Temperature_1_min;
        document.getElementById("Temperature_1_max").value = items.Temperature_1_max;

        var temp_2_Elements = document.getElementById("Temperature_2_select");
        temp_2_Elements[items.Temperature_2_select].selected = true;
        document.getElementById("Temperature_2_min").value = items.Temperature_2_min;
        document.getElementById("Temperature_2_max").value = items.Temperature_2_max;

        document.getElementById("Behavior_1").value = items.Behavior_1;
        document.getElementById("Behavior_2").value = items.Behavior_2;
        document.getElementById("Behavior_3").value = items.Behavior_3;

        document.getElementById("Notes").value = items.Notes;
    });

    //保存ボタンのイベント登録
    document.getElementById("save").addEventListener("click",function() {
        button_save();
    });
});