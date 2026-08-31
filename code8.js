gdjs.DIED_32LVL_322Code = {};
gdjs.DIED_32LVL_322Code.localVariables = [];
gdjs.DIED_32LVL_322Code.GDDIED_9595TEXT_9595LVL_95952Objects1= [];
gdjs.DIED_32LVL_322Code.GDDIED_9595TEXT_9595LVL_95952Objects2= [];
gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95952Objects1= [];
gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95952Objects2= [];
gdjs.DIED_32LVL_322Code.GDRETRY_9595BUTTON_9595LVL_95952Objects1= [];
gdjs.DIED_32LVL_322Code.GDRETRY_9595BUTTON_9595LVL_95952Objects2= [];
gdjs.DIED_32LVL_322Code.GDMONTYObjects1= [];
gdjs.DIED_32LVL_322Code.GDMONTYObjects2= [];
gdjs.DIED_32LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects1= [];
gdjs.DIED_32LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects2= [];
gdjs.DIED_32LVL_322Code.GDPORTALObjects1= [];
gdjs.DIED_32LVL_322Code.GDPORTALObjects2= [];
gdjs.DIED_32LVL_322Code.GDLAVAObjects1= [];
gdjs.DIED_32LVL_322Code.GDLAVAObjects2= [];
gdjs.DIED_32LVL_322Code.GDQUIT_9595TEXTObjects1= [];
gdjs.DIED_32LVL_322Code.GDQUIT_9595TEXTObjects2= [];
gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595TEXTObjects1= [];
gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595TEXTObjects2= [];
gdjs.DIED_32LVL_322Code.GDRETRY_9595TEXTObjects1= [];
gdjs.DIED_32LVL_322Code.GDRETRY_9595TEXTObjects2= [];
gdjs.DIED_32LVL_322Code.GDNEXT_9595LEVEL_9595TEXTObjects1= [];
gdjs.DIED_32LVL_322Code.GDNEXT_9595LEVEL_9595TEXTObjects2= [];


gdjs.DIED_32LVL_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MAIN_MENU_BUTTON_LVL_2"), gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95952Objects1.length;i<l;++i) {
    if ( gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95952Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95952Objects1[k] = gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95952Objects1[i];
        ++k;
    }
}
gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95952Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAIN MENU", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RETRY_BUTTON_LVL_2"), gdjs.DIED_32LVL_322Code.GDRETRY_9595BUTTON_9595LVL_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DIED_32LVL_322Code.GDRETRY_9595BUTTON_9595LVL_95952Objects1.length;i<l;++i) {
    if ( gdjs.DIED_32LVL_322Code.GDRETRY_9595BUTTON_9595LVL_95952Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DIED_32LVL_322Code.GDRETRY_9595BUTTON_9595LVL_95952Objects1[k] = gdjs.DIED_32LVL_322Code.GDRETRY_9595BUTTON_9595LVL_95952Objects1[i];
        ++k;
    }
}
gdjs.DIED_32LVL_322Code.GDRETRY_9595BUTTON_9595LVL_95952Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LVL 2", false);
}}

}


};

gdjs.DIED_32LVL_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DIED_32LVL_322Code.GDDIED_9595TEXT_9595LVL_95952Objects1.length = 0;
gdjs.DIED_32LVL_322Code.GDDIED_9595TEXT_9595LVL_95952Objects2.length = 0;
gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95952Objects1.length = 0;
gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95952Objects2.length = 0;
gdjs.DIED_32LVL_322Code.GDRETRY_9595BUTTON_9595LVL_95952Objects1.length = 0;
gdjs.DIED_32LVL_322Code.GDRETRY_9595BUTTON_9595LVL_95952Objects2.length = 0;
gdjs.DIED_32LVL_322Code.GDMONTYObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDMONTYObjects2.length = 0;
gdjs.DIED_32LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.DIED_32LVL_322Code.GDPORTALObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDPORTALObjects2.length = 0;
gdjs.DIED_32LVL_322Code.GDLAVAObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDLAVAObjects2.length = 0;
gdjs.DIED_32LVL_322Code.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_322Code.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_322Code.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;

gdjs.DIED_32LVL_322Code.eventsList0(runtimeScene);
gdjs.DIED_32LVL_322Code.GDDIED_9595TEXT_9595LVL_95952Objects1.length = 0;
gdjs.DIED_32LVL_322Code.GDDIED_9595TEXT_9595LVL_95952Objects2.length = 0;
gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95952Objects1.length = 0;
gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595BUTTON_9595LVL_95952Objects2.length = 0;
gdjs.DIED_32LVL_322Code.GDRETRY_9595BUTTON_9595LVL_95952Objects1.length = 0;
gdjs.DIED_32LVL_322Code.GDRETRY_9595BUTTON_9595LVL_95952Objects2.length = 0;
gdjs.DIED_32LVL_322Code.GDMONTYObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDMONTYObjects2.length = 0;
gdjs.DIED_32LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDMAZE_9595WALLS_9595TUTORIALObjects2.length = 0;
gdjs.DIED_32LVL_322Code.GDPORTALObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDPORTALObjects2.length = 0;
gdjs.DIED_32LVL_322Code.GDLAVAObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDLAVAObjects2.length = 0;
gdjs.DIED_32LVL_322Code.GDQUIT_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDQUIT_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDMAIN_9595MENU_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_322Code.GDRETRY_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDRETRY_9595TEXTObjects2.length = 0;
gdjs.DIED_32LVL_322Code.GDNEXT_9595LEVEL_9595TEXTObjects1.length = 0;
gdjs.DIED_32LVL_322Code.GDNEXT_9595LEVEL_9595TEXTObjects2.length = 0;


return;

}

gdjs['DIED_32LVL_322Code'] = gdjs.DIED_32LVL_322Code;
