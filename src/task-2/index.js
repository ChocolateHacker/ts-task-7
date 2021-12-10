/** Задача 2
 * Необходимо реализовать асинхронную подгрузку модулей в браузере:
 * 1) Разнести классы SettingValue, Setting и Example по разным *.ts файлам
 * 2) После компиляции TypeScript должно получаться 3 файла формата *.js.
 * 3) Создать index.html, в котором необходимо указать ссылку на первый JavaScript файл,
 * 	  все остальные файлы должны подгрузиться асинхронно по цепочке, используя requireJS.
 */
define(["require", "exports", "./SettingValue", "./Example", "./Setting"], function (require, exports, SettingValue_1, Example_1, Setting_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const newSettingValue = new SettingValue_1.SettingValue("лол", "кек");
    const newSetting = new Setting_1.Setting("чебурек", newSettingValue);
    const newExample = new Example_1.Example(newSetting);
    newExample.id = 2302;
    newExample.title = "Почему наркоманы любят крапиву? ОНА КОЛЕТСЯ";
    console.log(newExample.id, newExample.title);
});
