export default () => {
    alert(document.cookie);
/*
    function randomRangeTemperature(min, max){
        var range = max - min + 0.1;
        return Math.floor((min + Math.random() * range) * 10) / 10;
    }

    //保存した値を読み込む
    var Temp_Normal = items.Temperature_Normal;

    var Temp_1_Time = items.Temperature_1_select;
    var Temp_1_Value = randomRangeTemperature(parseFloat(items.Temperature_1_min), parseFloat(items.Temperature_1_max));

    var Temp_2_Time = items.Temperature_2_select;
    var Temp_2_Value = randomRangeTemperature(parseFloat(items.Temperature_2_min), parseFloat(items.Temperature_2_max));

    var Text_1 = items.Behavior_1;
    var Text_2 = items.Behavior_2;
    var Text_3 = items.Behavior_3;

    var Text_Summary = items.Notes;
    
    //体温（平熱）
    document.getElementById("Ent_Input_Temperature_Normal_String").value = Temp_Normal;

    //体温（午前）
    var temp_1_Elements = document.getElementById("Ent_Input_Temperature_1_Time");
    temp_1_Elements[Temp_1_Time].selected = true;
    document.getElementById("Ent_Input_Temperature_1_String").value = Temp_1_Value;

    //体温（午後）
    var temp_2_Elements = document.getElementById("Ent_Input_Temperature_2_Time");
    temp_2_Elements[Temp_2_Time].selected = true;
    document.getElementById("Ent_Input_Temperature_2_String").value = Temp_2_Value;

    //確認項目
    for (var i = 1; i <= 12; i++) {
        document.getElementById("Check_" + i.toString() + "_N").click();
    }

    //本日の主な行動
    //午前
    document.getElementById("Ent_Input_Text_Behavior_1").value = Text_1;
    //午後
    document.getElementById("Ent_Input_Text_Behavior_2").value = Text_2;
    //夕方以降
    document.getElementById("Ent_Input_Text_Behavior_3").value = Text_3;
    //備考
    document.getElementById("Ent_Input_Summary").value = Text_Summary;

    //ページスクロール
    var element = document.documentElement;
    var bottom = element.scrollHeight - element.clientHeight;
    window.scroll(0, bottom);
*/
}