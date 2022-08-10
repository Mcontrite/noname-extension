game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "汉国战",
        content: function (config, pack) {
            var style1 = document.createElement('style');
            style1.innerHTML += "[data-number='9']>.player[data-position='1']{top:45px;left:calc(97% - 75px);}";
            style1.innerHTML += "[data-number='9']>.player[data-position='2']{top:30px;left:calc(84% - 75px);}";
            style1.innerHTML += "[data-number='9']>.player[data-position='3']{top:15px;left:calc(71% - 75px);}";
            style1.innerHTML += "[data-number='9']>.player[data-position='4']{top:0px;left:calc(58% - 75px);}";
            style1.innerHTML += "[data-number='9']>.player[data-position='5']{top:0px;left:calc(45% - 75px);}";
            style1.innerHTML += "[data-number='9']>.player[data-position='6']{top:15px;left:calc(32% - 75px);}";
            style1.innerHTML += "[data-number='9']>.player[data-position='7']{top:30px;left:calc(19% - 75px);}";
            style1.innerHTML += "[data-number='9']>.player[data-position='8']{top:45px;left:calc(6% - 75px);}";

            style1.innerHTML += "[data-number='10']>.player[data-position='1']{top:calc(200% / 3 - 190px);left:calc(97% - 75px);}";
            style1.innerHTML += "[data-number='10']>.player[data-position='2']{top:calc(100% / 3 - 190px);left:calc(97% - 75px);}";
            style1.innerHTML += "[data-number='10']>.player[data-position='3']{top:0px;left:calc(82% - 75px);}";
            style1.innerHTML += "[data-number='10']>.player[data-position='4']{top:0px;left:calc(67% - 75px);}";
            style1.innerHTML += "[data-number='10']>.player[data-position='5']{top:0px;left:calc(52% - 75px);}";
            style1.innerHTML += "[data-number='10']>.player[data-position='6']{top:0px;left:calc(37% - 75px);}";
            style1.innerHTML += "[data-number='10']>.player[data-position='7']{top:0px;left:calc(22% - 75px);}";
            style1.innerHTML += "[data-number='10']>.player[data-position='8']{top:calc(100% / 3 - 190px);left:calc(7% - 75px);}";
            style1.innerHTML += "[data-number='10']>.player[data-position='9']{top:calc(200% / 3 - 190px);left:calc(7% - 75px);}";

            document.head.appendChild(style1);
            lib.translate.unknown8 = '九号位';
            lib.translate.unknown9 = '十号位';
            lib.mode.identity.config.player_number.item = {
                '2': '两人',
                '3': '三人',
                '4': '四人',
                '5': '五人',
                '6': '六人',
                '7': '七人',
                '8': '八人',
                '9': '九人',
                '10': '十人',
            }
            lib.mode.guozhan.config.player_number.item = {
                '2': '两人',
                '3': '三人',
                '4': '四人',
                '5': '五人',
                '6': '六人',
                '7': '七人',
                '8': '八人',
                '9': '九人',
                '10': '十人',
            };

            lib.extensionMenu.extension_汉国战.junzhengs = {
                name: "军争武将",
                intro: "开启后将池将增加军争和对决武将。",
                init: true,
            }
            lib.extensionMenu.extension_汉国战.guanfangs = {
                name: "官方武将修改",
                intro: "开启后将修改部分官方武将。",
                init: true,
            }
            lib.extensionMenu.extension_汉国战.diys = {
                name: "DIY武将",
                intro: "开启后将池将增加各类DIY武将。",
                init: true,
            }
            lib.extensionMenu.extension_汉国战.addcards = {
                name: "军争卡牌",
                intro: "开启后牌堆中将加入部分军争卡牌。",
                init: true,
            }
            lib.extensionMenu.extension_汉国战.zhenfas = {
                name: "阵法牌",
                intro: "开启后牌堆中将加入阵法牌。",
                init: false,
            }
            lib.extensionMenu.extension_汉国战.yexinjia = {
                name: "野心家",
                intro: "开启后将修改野心家的一些相关设定。",
                init: true,
            }
            lib.extensionMenu.extension_汉国战.hanchao = {
                name: "汉武将",
                intro: "开启后将新增一个汉势力，并且修改部分武将势力为汉朝。",
                init: true,
            }
            lib.extensionMenu.extension_汉国战.shenjiang = {
                name: "神将",
                intro: "开启后将在将池中加入神将，神将只能放在主将位置。",
                init: true,
            }


            // 军争卡牌
            if (config.addcards) {
                if (lib.guozhanPile) {
                    lib.guozhanPile.push(
                        // guozhan
                        // ['spade', 12, 'gz_haolingtianxia'],
                        // ['diamond', 1, 'gz_kefuzhongyuan'],
                        // ['heart', 1, 'gz_guguoanbang'],
                        // ['club', 12, 'gz_wenheluanwu'],
                        ['diamond', 12, 'wuxie', null, ['guo']],
                        ['heart', 12, 'wuxie', null, ['guo']],
                        ['diamond', 1, 'wuxie', null, ['guo']],
                        ['heart', 1, 'wuxie', null, ['guo']],

                        // standard
                        ['spade', 1, 'guding'],
                        ['club', 2, 'cixiong'],
                        ['diamond', 13, 'hualiu'],
                        ["heart", 4, "shan"],
                        ["heart", 11, "shan"],
                        ["club", 10, "shan"],
                        ["spade", 4, "shan"],
                        ["club", 3, "shan"],
                        ["spade", 3, "shan"],
                        ["heart", 9, "jiu"],
                        ["diamond", 9, "jiu"],
                        ["spade", 9, "tao"],
                        ["club", 9, "tao"],

                        // sp
                        ["heart", 2, 'lanyinjia'],
                        ["diamond", 5, 'zhungangshuo'],
                        // ['diamond', 9, 'shengdong'],
                        ['heart', 9, 'shengdong'],
                        // ['spade', 1, 'caomu'],
                        ['club', 3, 'caomu'],
                        ["club", 12, 'qijia'],
                        ["spade", 11, 'jinchan'],
                        ['diamond', 4, 'zengbin'],
                        ['diamond', 12, 'yinyueqiang'],

                        // yingbian
                        ['club', 1, 'taigongyinfu'],
                        ['spade', 7, 'sha', 'ice'],
                        ['heart', 8, 'sha', 'ice'],
                        ['club', 7, 'sha', 'ice'],
                        ['diamond', 8, 'sha', 'ice'],
                        ['spade', 5, 'zhujinqiyuan'],
                        ['diamond', 5, 'chuqibuyi'],
                        // ['club', 12, 'chuqibuyi'],
                        ['heart', 11, 'dongzhuxianji'],
                        ['spade', 2, 'suijiyingbian'],

                        // yongjian
                        // ['diamond', 9, 'tuixinzhifu'],
                        ['diamond', 10, 'tuixinzhifu'],
                        ['club', 5, 'yitianjian'],
                        ['spade', 6, 'sha', 'stab'],
                        ['spade', 7, 'sha', 'stab'],


                        // yunchou
                        ['heart', 6, 'wangmeizhike'],
                        ['club', 1, 'wangmeizhike'],
                        ['heart', 6, 'huoshan', 'fire'],
                        ['diamond', 1, 'diaobingqianjiang'],
                        ['club', 8, 'shuiyanqijun'],
                        ['club', 10, 'toulianghuanzhu'],

                        // zhulu
                        ['diamond', 3, 'jiejia'],
                        ['heart', 11, 'kaihua'],
                        ['spade', 3, 'caochuan'],
                        ['club', 9, 'zhulu_card']
                    )
                }
            }

            // 阵法牌
            if (config.zhenfas) {
                if (lib.guozhanPile) {
                    lib.guozhanPile.push(
                        // zhenfa
                        ["diamond", 1, 'changshezhen'],
                        ["club", 2, 'tianfuzhen'],
                        ["spade", 3, 'dizaizhen'],
                        ["heart", 4, 'fengyangzhen'],
                        ["diamond", 5, 'zhonghuangzhen'],
                        ["club", 6, 'huyizhen'],
                        ["spade", 7, 'qixingzhen'],
                        ["heart", 8, 'shepanzhen'],
                        ["diamond", 9, 'longfeizhen'],
                        ["club", 11, 'niaoxiangzhen'],
                        ["spade", 12, 'yunchuizhen'],
                        ["heart", 13, 'pozhenjue']
                    )
                }
            }




            // 野心家设定修改
            if (config.yexinjia) {
                lib.game.showYexings = function () {
                    if (_status.showYexings) return;
                    _status.showYexings = true;
                    var next = game.createEvent('showYexings', false);
                    next.setContent(function () {
                        'step 0'
                        event.targets = game.filterPlayer(function (current) {
                            return lib.character[current.name1][1] == 'ye';
                        }).sortBySeat(_status.currentPhase);
                        event.targets2 = [];
                        'step 1'
                        var target = targets.shift();
                        event.target = target;
                        'step 2'
                        event.targets2.push(target);
                        target.$fullscreenpop('暴露野心', 'thunder');
                        game.log(target, '暴露了野心');
                        target.showCharacter(0);
                        game.delay(2);
                        if (targets.length) event.goto(1);
                        else if (game.players.length < 3) {
                            delete _status.showYexings;
                            event.finish();
                        }
                        'step 3'
                        var source = event.targets2.shift();
                        event.source = source;
                        var targets = game.filterPlayer(function (current) {
                            return current.identity != 'ye' && current != source && !get.is.jun(current) && !event.targets2.contains(current) && !current.storage.yexinjia_friend;
                        }).sortBySeat(source);
                        if (!targets.length) {
                            delete _status.showYexings;
                            event.finish();
                        } else {
                            event.targets = targets;
                            source.chooseBool('是否发起【拉拢人心】？', '令所有其他不为君主/暴露野心家的角色依次选择是否与你结盟。第一个选择加入的人将势力和胜利条件改为与你相同');
                        }
                        'step 4'
                        if (!result.bool) {
                            if (event.targets2.length) event.goto(3);
                            return;
                        }
                        'step 5'
                        var target = targets.shift();
                        event.target = target;
                        source.line(target, 'green');
                        target.chooseBool('是否响应' + get.translation(source) + '发起的【拉拢人心】？', '将势力改为野心家，且视为和该角色阵营相同').set('ai', function () {
                            if (game.players.length < 4) return true;
                            if (game.players.length < 5) return Math.random() < 0.5;
                            return Math.random() < 0.3;
                        });
                        'step 6'
                        if (result.bool) {
                            target.chat('加入');
                            if (!_status.yexinjia_list) _status.yexinjia_list = ['夏', '商', '周', '楚', '晋', '燕', '故', '鲁', '凉'];
                            source.chooseControl(_status.yexinjia_list).set('prompt', '请选择自己所属的野心家势力的标识').set('ai', () => (_status.yexinjia_list ? _status.yexinjia_list.randomGet() : 0));
                        } else {
                            target.chat('拒绝');
                            game.delay(1.5);
                            if (targets.length) event.goto(5);
                            else event.goto(8);
                        }
                        'step 7'
                        game.broadcastAll(function (player, target, text) {
                            player.identity = 'ye';
                            source.setIdentity(text, 'ye');
                            player.setIdentity(text, 'ye');
                            player.storage.yexinjia_friend = target;
                        }, target, source, result.control);
                        _status.yexinjia_list.remove(result.control);
                        target.markSkill('yexinjia_friend');
                        source.removeMark('yexinjia_mark', 1);
                        target.drawTo(4);
                        target.recover();
                        'step 8'
                        if (event.targets2.length) event.goto(3);
                        else delete _status.showYexings;
                    });
                }

                lib.game.chooseCharacter = function () {
                    var next = game.createEvent('chooseCharacter', false);
                    next.showConfig = true;
                    next.addPlayer = true;
                    next.ai = function (player, list, back) {
                        if (_status.brawl && _status.brawl.chooseCharacterAi) {
                            if (_status.brawl.chooseCharacterAi(player, list, back) !== false) {
                                return;
                            }
                        }
                        var filterChoice = function (name1, name2) {
                            if (get.is.double(name1)) return false;
                            var group1 = lib.character[name1][1];
                            var group2 = lib.character[name2][1];
                            if (group1 == 'ye') return group2 != 'ye';
                            var double = get.is.double(name2, true);
                            if (double) return double.contains(group1);
                            return group1 == group2;
                        };
                        for (var i = 0; i < list.length - 1; i++) {
                            for (var j = i + 1; j < list.length; j++) {
                                if (filterChoice(list[i], list[j]) || filterChoice(list[j], list[i])) {
                                    var mainx = list[i];
                                    var vicex = list[j];
                                    if (!filterChoice(mainx, vicex) || (filterChoice(vicex, mainx) && get.guozhanReverse(mainx, vicex))) {
                                        mainx = list[j];
                                        vicex = list[i];
                                    }
                                    player.init(mainx, vicex, false);
                                    if (back) {
                                        list.remove(player.name1);
                                        list.remove(player.name2);
                                        for (var i = 0; i < list.length; i++) {
                                            back.push(list[i]);
                                        }
                                    }
                                    return;
                                }
                            }
                        }
                    }
                    next.setContent(function () {
                        "step 0"
                        ui.arena.classList.add('choose-character');
                        var addSetting = function (dialog) {
                            dialog.add('选择座位').classList.add('add-setting');
                            var seats = document.createElement('table');
                            seats.classList.add('add-setting');
                            seats.style.margin = '0';
                            seats.style.width = '100%';
                            seats.style.position = 'relative';
                            for (var i = 1; i <= game.players.length; i++) {
                                var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                td.innerHTML = '<span>' + get.cnNumber(i, true) + '</span>';
                                td.link = i - 1;
                                seats.appendChild(td);
                                td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                    if (_status.dragged) return;
                                    if (_status.justdragged) return;
                                    if (_status.cheat_seat) {
                                        _status.cheat_seat.classList.remove('bluebg');
                                        if (_status.cheat_seat == this) {
                                            delete _status.cheat_seat;
                                            return;
                                        }
                                    }
                                    this.classList.add('bluebg');
                                    _status.cheat_seat = this;
                                });
                            }
                            dialog.content.appendChild(seats);
                            if (game.me == game.zhu) {
                                seats.previousSibling.style.display = 'none';
                                seats.style.display = 'none';
                            }

                            dialog.add(ui.create.div('.placeholder.add-setting'));
                            dialog.add(ui.create.div('.placeholder.add-setting'));
                            if (get.is.phoneLayout()) dialog.add(ui.create.div('.placeholder.add-setting'));
                        };
                        var removeSetting = function () {
                            var dialog = _status.event.dialog;
                            if (dialog) {
                                dialog.style.height = '';
                                delete dialog._scrollset;
                                var list = Array.from(dialog.querySelectorAll('.add-setting'));
                                while (list.length) {
                                    list.shift().remove();
                                }
                                ui.update();
                            }
                        };
                        event.addSetting = addSetting;
                        event.removeSetting = removeSetting;

                        var chosen = lib.config.continue_name || [];
                        game.saveConfig('continue_name');
                        event.chosen = chosen;

                        var i;
                        event.list = [];
                        for (i in lib.character) {
                            if (i.indexOf('gz_shibing') == 0) continue;
                            if (chosen.contains(i)) continue;
                            if (lib.filter.characterDisabled(i)) continue;
                            if (get.config('onlyguozhan')) {
                                if (!lib.characterPack.mode_guozhan[i]) continue;
                                if (get.is.jun(i)) continue;
                            }
                            if (lib.character[i][4].contains('hiddenSkill')) continue;
                            if (lib.character[i][2] == 3 || lib.character[i][2] == 4 || lib.character[i][2] == 5)
                                event.list.push(i);
                        }
                        _status.characterlist = event.list.slice(0);
                        _status.yeidentity = [];
                        if (_status.brawl && _status.brawl.chooseCharacterFilter) {
                            event.list = _status.brawl.chooseCharacterFilter(event.list);
                        }
                        event.list.randomSort();
                        // var list=event.list.splice(0,parseInt(get.config('choice_num')));
                        var list;
                        if (_status.brawl && _status.brawl.chooseCharacter) {
                            list = _status.brawl.chooseCharacter(event.list, game.me);
                        } else {
                            list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
                        }
                        if (_status.auto) {
                            event.ai(game.me, list);
                            lib.init.onfree();
                        } else if (chosen.length) {
                            game.me.init(chosen[0], chosen[1], false);
                            lib.init.onfree();
                        } else {
                            var dialog = ui.create.dialog('选择角色', 'hidden', [list, 'character']);
                            if (!_status.brawl || !_status.brawl.noAddSetting) {
                                if (get.config('change_identity')) {
                                    addSetting(dialog);
                                }
                            }
                            var next = game.me.chooseButton(dialog, true, 2).set('onfree', true);
                            next.filterButton = function (button) {
                                if (ui.dialog.buttons.length <= 10) {
                                    for (var i = 0; i < ui.dialog.buttons.length; i++) {
                                        if (ui.dialog.buttons[i] != button) {
                                            if (lib.element.player.perfectPair.call({
                                                    name1: button.link,
                                                    name2: ui.dialog.buttons[i].link
                                                })) {
                                                button.classList.add('glow2');
                                            }
                                        }
                                    }
                                }
                                if (lib.character[button.link][4].contains('hiddenSkill')) return false;
                                if (ui.selected.buttons.length == 0) {
                                    if (get.is.double(button.link)) return false;
                                    if (lib.character[button.link][1] == 'ye') return true;
                                    // if (lib.character[button.link][1] == 'shen') return true;
                                    for (var i = 0; i < ui.dialog.buttons.length; i++) {
                                        var double = get.is.double(ui.dialog.buttons[i].link, true);
                                        if (ui.dialog.buttons[i] != button && (lib.character[button.link][1] == lib.character[ui.dialog.buttons[i].link][1] || double && double.contains(lib.character[button.link][1]))) {
                                            return true;
                                        }
                                    }
                                    return false;
                                };
                                if (!lib.character[button.link] || lib.character[button.link][1] == 'ye') return false;

                                // 神将只能做主将
                                var isShen = false
                                var shenList = ['gz_shen_xunyu', "gz_shen_zhugeliang"]
                                for (var i = 0; i < shenList.length; i++) {
                                    if (button.link == shenList[i]) {
                                        isShen = true;
                                        break
                                    }
                                }
                                if (!lib.character[button.link] || isShen) return false;
                                if (isShen) return true;

                                if (get.is.double(ui.selected.buttons[0].link)) return false;
                                if (lib.character[ui.selected.buttons[0].link][1] == 'ye') return true;
                                if (get.is.double(button.link)) return get.is.double(button.link, true).contains(lib.character[ui.selected.buttons[0].link][1]);
                                return (lib.character[button.link][1] == lib.character[ui.selected.buttons[0].link][1]);
                            };
                            next.switchToAuto = function () {
                                event.ai(game.me, list);
                                ui.arena.classList.remove('selecting');
                            };
                            var createCharacterDialog = function () {
                                event.dialogxx = ui.create.characterDialog('heightset', function (i) {
                                    if (i.indexOf('gz_shibing') == 0) return true;
                                    if (get.config('onlyguozhan')) {
                                        if (!lib.characterPack.mode_guozhan[i]) return true;
                                        if (get.is.jun(i)) return true;
                                    }
                                }, get.config('onlyguozhanexpand') ? 'expandall' : undefined, get.config('onlyguozhan') ? 'onlypack:mode_guozhan' : undefined);
                                if (ui.cheat2) {
                                    ui.cheat2.animate('controlpressdownx', 500);
                                    ui.cheat2.classList.remove('disabled');
                                }
                            };
                            if (lib.onfree) {
                                lib.onfree.push(createCharacterDialog);
                            } else {
                                createCharacterDialog();
                            }
                            ui.create.cheat2 = function () {
                                ui.cheat2 = ui.create.control('自由选将', function () {
                                    if (this.dialog == _status.event.dialog) {
                                        if (game.changeCoin) {
                                            game.changeCoin(50);
                                        }
                                        this.dialog.close();
                                        _status.event.dialog = this.backup;
                                        this.backup.open();
                                        delete this.backup;
                                        game.uncheck();
                                        game.check();
                                        if (ui.cheat) {
                                            ui.cheat.animate('controlpressdownx', 500);
                                            ui.cheat.classList.remove('disabled');
                                        }
                                    } else {
                                        if (game.changeCoin) {
                                            game.changeCoin(-10);
                                        }
                                        this.backup = _status.event.dialog;
                                        _status.event.dialog.close();
                                        _status.event.dialog = _status.event.parent.dialogxx;
                                        this.dialog = _status.event.dialog;
                                        this.dialog.open();
                                        game.uncheck();
                                        game.check();
                                        if (ui.cheat) {
                                            ui.cheat.classList.add('disabled');
                                        }
                                    }
                                });
                                if (lib.onfree) {
                                    ui.cheat2.classList.add('disabled');
                                }
                            }
                            ui.create.cheat = function () {
                                _status.createControl = ui.cheat2;
                                ui.cheat = ui.create.control('更换', function () {
                                    if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
                                        return;
                                    }
                                    if (game.changeCoin) {
                                        game.changeCoin(-3);
                                    }
                                    event.list = event.list.concat(list);
                                    event.list.randomSort();
                                    // list=event.list.splice(0,parseInt(get.config('choice_num')));
                                    list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
                                    var buttons = ui.create.div('.buttons');
                                    var node = _status.event.dialog.buttons[0].parentNode;
                                    _status.event.dialog.buttons = ui.create.buttons(list, 'character', buttons);
                                    _status.event.dialog.content.insertBefore(buttons, node);
                                    buttons.animate('start');
                                    node.remove();
                                    game.uncheck();
                                    game.check();
                                });
                                delete _status.createControl;
                            }
                            if (!_status.brawl || !_status.brawl.chooseCharacterFixed) {
                                if (!ui.cheat && get.config('change_choice'))
                                    ui.create.cheat();
                                if (!ui.cheat2 && get.config('free_choose'))
                                    ui.create.cheat2();
                            }
                        }
                        "step 1"
                        if (ui.cheat) {
                            ui.cheat.close();
                            delete ui.cheat;
                        }
                        if (ui.cheat2) {
                            ui.cheat2.close();
                            delete ui.cheat2;
                        }
                        if (result.buttons) {
                            game.me.init(result.buttons[0].link, result.buttons[1].link, false);
                            game.addRecentCharacter(result.buttons[0].link, result.buttons[1].link);
                        }
                        // game.me.setIdentity(game.me.group);
                        event.list.remove(game.me.name1);
                        event.list.remove(game.me.name2);
                        for (var i = 0; i < game.players.length; i++) {
                            if (game.players[i] != game.me) {
                                event.ai(game.players[i], game.getCharacterChoice(event.list, parseInt(get.config('choice_num'))), event.list);
                            }
                        }
                        for (var i = 0; i < game.players.length; i++) {
                            game.players[i].classList.add('unseen');
                            game.players[i].classList.add('unseen2');
                            _status.characterlist.remove(game.players[i].name);
                            _status.characterlist.remove(game.players[i].name2);
                            if (game.players[i] != game.me) {
                                game.players[i].node.identity.firstChild.innerHTML = '猜';
                                game.players[i].node.identity.dataset.color = 'unknown';
                                game.players[i].node.identity.classList.add('guessing');
                            }
                            game.players[i].hiddenSkills = lib.character[game.players[i].name1][3].slice(0);
                            var hiddenSkills2 = lib.character[game.players[i].name2][3];
                            for (var j = 0; j < hiddenSkills2.length; j++) {
                                game.players[i].hiddenSkills.add(hiddenSkills2[j]);
                            }
                            for (var j = 0; j < game.players[i].hiddenSkills.length; j++) {
                                if (!lib.skill[game.players[i].hiddenSkills[j]]) {
                                    game.players[i].hiddenSkills.splice(j--, 1);
                                }
                            }
                            game.players[i].group = 'unknown';
                            game.players[i].sex = 'unknown';
                            game.players[i].name1 = game.players[i].name;
                            game.players[i].name = 'unknown';
                            game.players[i].identity = 'unknown';
                            game.players[i].node.name.show();
                            game.players[i].node.name2.show();
                            game.players[i]._group = lib.character[game.players[i].name1][1];
                            for (var j = 0; j < game.players[i].hiddenSkills.length; j++) {
                                game.players[i].addSkillTrigger(game.players[i].hiddenSkills[j], true);
                            }
                        }
                        setTimeout(function () {
                            ui.arena.classList.remove('choose-character');
                        }, 500);
                    });
                }
            }

            // 新增汉势力
            if (config.hanchao) {
                ui.create.characterDialog = function () {
                    var filter, str, noclick, thisiscard, seperate, expandall, onlypack, heightset, precharacter, characterx;
                    for (var i = 0; i < arguments.length; i++) {
                        if (arguments[i] === 'thisiscard') {
                            thisiscard = true;
                        } else if (arguments[i] === 'expandall') {
                            expandall = true;
                        } else if (arguments[i] === 'heightset') {
                            heightset = true;
                        } else if (arguments[i] == 'precharacter') {
                            precharacter = true;
                        } else if (arguments[i] == 'characterx') {
                            characterx = true;
                        } else if (typeof arguments[i] == 'string' && arguments[i].indexOf('onlypack:') == 0) {
                            onlypack = arguments[i].slice(9);
                        } else if (typeof arguments[i] == 'object' && typeof arguments[i].seperate == 'function') {
                            seperate = arguments[i].seperate;
                        } else if (typeof arguments[i] === 'string') {
                            str = arguments[i];
                        } else if (typeof arguments[i] === 'function') {
                            filter = arguments[i];
                        } else if (typeof arguments[i] == 'boolean') {
                            noclick = arguments[i];
                        }
                    }
                    var list = [];
                    var dialog;
                    var node = ui.create.div('.caption.pointerspan');
                    if (get.is.phoneLayout()) {
                        node.style.fontSize = '30px';
                    }
                    var namecapt = [];
                    var getCapt = function (str) {
                        var capt;
                        if (str.indexOf('_') == -1) {
                            capt = str[0];
                        } else {
                            capt = str[str.lastIndexOf('_') + 1];
                        }
                        capt = capt.toLowerCase();
                        if (!/[a-z]/i.test(capt)) {
                            capt = '自定义';
                        }
                        return capt;
                    }
                    if (thisiscard) {
                        for (var i in lib.card) {
                            if (!lib.translate[i + '_info']) continue;
                            if (filter && filter(i)) continue;
                            list.push(['', get.translation(lib.card[i].type), i]);
                            if (namecapt.indexOf(getCapt(i)) == -1) {
                                namecapt.push(getCapt(i));
                            }
                        }
                    } else {
                        for (var i in lib.character) {
                            if (lib.character[i][4].contains('minskin')) continue;
                            if (lib.character[i][4].contains('boss') || lib.character[i][4].contains('hiddenboss')) {
                                if (lib.config.mode == 'boss') continue;
                                if (!lib.character[i][4].contains('bossallowed')) continue;
                            }

                            if (lib.character[i][4].contains('stonehidden')) continue;
                            if (lib.character[i][4].contains('unseen')) continue;
                            if (lib.config.banned.contains(i)) continue;
                            if (lib.characterFilter[i] && !lib.characterFilter[i](get.mode())) continue;
                            if (filter && filter(i)) continue;
                            list.push(i);
                            if (namecapt.indexOf(getCapt(i)) == -1) {
                                namecapt.push(getCapt(i));
                            }
                        }
                    }
                    namecapt.sort(function (a, b) {
                        return a > b ? 1 : -1;
                    });
                    if (!thisiscard) {
                        namecapt.remove('自定义');
                        namecapt.push('newline');
                        for (var i in lib.characterDialogGroup) {
                            namecapt.push(i);
                        }
                    }
                    var newlined = false;
                    var newlined2;
                    var packsource;
                    var clickCapt = function (e) {
                        if (_status.dragged) return;
                        if (dialog.currentcapt2 == '最近' && dialog.currentcaptnode2 != this && !dialog.currentcaptnode2.inited) {
                            dialog.currentcapt2 = null;
                            dialog.currentcaptnode2.classList.remove('thundertext');
                            dialog.currentcaptnode2.inited = true;
                            dialog.currentcaptnode2 = null;
                        }
                        if (this.alphabet) {
                            if (this.classList.contains('thundertext')) {
                                dialog.currentcapt = null;
                                dialog.currentcaptnode = null;
                                this.classList.remove('thundertext');
                                if (this.touchlink) {
                                    this.touchlink.classList.remove('active');
                                }
                                for (var i = 0; i < dialog.buttons.length; i++) {
                                    if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
                                        dialog.buttons[i].classList.add('nodisplay');
                                    } else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
                                        dialog.buttons[i].classList.add('nodisplay');
                                    } else {
                                        dialog.buttons[i].classList.remove('nodisplay');
                                    }
                                }
                            } else {
                                if (dialog.currentcaptnode) {
                                    dialog.currentcaptnode.classList.remove('thundertext');
                                    if (dialog.currentcaptnode.touchlink) {
                                        dialog.currentcaptnode.touchlink.classList.remove('active');
                                    }
                                }
                                dialog.currentcapt = this.link;
                                dialog.currentcaptnode = this;
                                this.classList.add('thundertext');
                                if (this.touchlink) {
                                    this.touchlink.classList.add('active');
                                }
                                for (var i = 0; i < dialog.buttons.length; i++) {
                                    if (dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                                        dialog.buttons[i].classList.add('nodisplay');
                                    } else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
                                        dialog.buttons[i].classList.add('nodisplay');
                                    } else if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
                                        dialog.buttons[i].classList.add('nodisplay');
                                    } else {
                                        dialog.buttons[i].classList.remove('nodisplay');
                                    }
                                }
                            }
                        } else {
                            if (newlined2) {
                                newlined2.style.display = 'none';
                                if (!packsource.onlypack) {
                                    packsource.classList.remove('thundertext');
                                    if (!get.is.phoneLayout() || !lib.config.filternode_button) {
                                        packsource.innerHTML = '武将包';
                                    }
                                }
                            }
                            if (this.classList.contains('thundertext')) {
                                dialog.currentcapt2 = null;
                                dialog.currentcaptnode2 = null;
                                this.classList.remove('thundertext');
                                if (this.touchlink) {
                                    this.touchlink.classList.remove('active');
                                }
                                for (var i = 0; i < dialog.buttons.length; i++) {
                                    if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
                                        dialog.buttons[i].classList.add('nodisplay');
                                    } else if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                                        dialog.buttons[i].classList.add('nodisplay');
                                    } else {
                                        dialog.buttons[i].classList.remove('nodisplay');
                                    }
                                }
                            } else {
                                if (dialog.currentcaptnode2) {
                                    dialog.currentcaptnode2.classList.remove('thundertext');
                                    if (dialog.currentcaptnode2.touchlink) {
                                        dialog.currentcaptnode2.touchlink.classList.remove('active');
                                    }
                                }
                                dialog.currentcapt2 = this.link;
                                dialog.currentcaptnode2 = this;
                                this.classList.add('thundertext');
                                if (this.touchlink) {
                                    this.touchlink.classList.add('active');
                                } else if (this.parentNode == newlined2) {
                                    packsource.innerHTML = this.innerHTML;
                                    packsource.classList.add('thundertext');
                                }
                                for (var i = 0; i < dialog.buttons.length; i++) {
                                    if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                                        dialog.buttons[i].classList.add('nodisplay');
                                    } else if (dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
                                        dialog.buttons[i].classList.add('nodisplay');
                                    } else if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
                                        dialog.buttons[i].classList.add('nodisplay');
                                    } else {
                                        if (dialog.buttons[i].activate) {
                                            dialog.buttons[i].activate();
                                        }
                                        dialog.buttons[i].classList.remove('nodisplay');
                                    }
                                }
                            }
                        }
                        if (dialog.seperate) {
                            for (var i = 0; i < dialog.seperate.length; i++) {
                                if (!dialog.seperate[i].nextSibling.querySelector('.button:not(.nodisplay)')) {
                                    dialog.seperate[i].style.display = 'none';
                                    dialog.seperate[i].nextSibling.style.display = 'none';
                                } else {
                                    dialog.seperate[i].style.display = '';
                                    dialog.seperate[i].nextSibling.style.display = '';
                                }
                            }
                        }
                        if (filternode) {
                            if (filternode.querySelector('.active')) {
                                packsource.classList.add('thundertext');
                            } else {
                                packsource.classList.remove('thundertext');
                            }
                        }
                        if (e) e.stopPropagation();
                    };
                    for (i = 0; i < namecapt.length; i++) {
                        if (namecapt[i] == 'newline') {
                            newlined = document.createElement('div');
                            newlined.style.marginTop = '5px';
                            newlined.style.display = 'block';
                            // newlined.style.fontFamily='xinwei';
                            if (get.is.phoneLayout()) {
                                newlined.style.fontSize = '32px';
                            } else {
                                newlined.style.fontSize = '22px';
                            }
                            newlined.style.textAlign = 'center';
                            node.appendChild(newlined);
                        } else if (newlined) {
                            var span = ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius');
                            span.style.margin = '3px';
                            span.style.width = 'auto';
                            span.innerHTML = ' ' + namecapt[i].toUpperCase() + ' ';
                            span.link = namecapt[i];
                            span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
                            newlined.appendChild(span);
                            node[namecapt[i]] = span;
                            if (namecapt[i] == '收藏') {
                                span._nature = 'fire';
                            } else {
                                span._nature = 'wood';
                            }
                        } else {
                            var span = document.createElement('span');
                            span.innerHTML = ' ' + namecapt[i].toUpperCase() + ' ';
                            span.link = namecapt[i];
                            span.alphabet = true;
                            span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
                            node.appendChild(span);
                        }
                    }
                    if (!thisiscard) {
                        var groups = ['wei', 'shu', 'wu', 'qun', 'han', 'jin'];
                        var bool1 = false;
                        var bool2 = false;
                        var bool3 = (get.mode() == 'guozhan' && _status.forceKey != true && get.config('onlyguozhan'));
                        var bool4 = false;
                        for (var i in lib.character) {
                            if (lib.character[i][1] == 'shen') {
                                bool1 = true;
                            }
                            if (bool3 || lib.character[i][1] == 'key') {
                                bool2 = true;
                            }
                            if (!bool4 && get.is.double(i)) bool4 = true;
                            if (bool1 && bool2 && bool4) break;
                        }
                        if (get.mode() != 'guozhan' && bool1) groups.add('shen');
                        if (get.mode() != 'guozhan' && bool2 && !bool3) groups.add('key');
                        if (bool4) groups.add('double');
                        var natures = ['water', 'soil', 'wood', 'metal'];
                        var span = document.createElement('span');
                        newlined.appendChild(span);
                        span.style.margin = '8px';
                        var clickGroup = function () {
                            if (_status.dragged) return;
                            if (dialog.currentcapt2 == '最近' && dialog.currentcaptnode2 != this && !dialog.currentcaptnode2.inited) {
                                dialog.currentcapt2 = null;
                                dialog.currentcaptnode2.classList.remove('thundertext');
                                dialog.currentcaptnode2.inited = true;
                                dialog.currentcaptnode2 = null;
                            }
                            var node = this,
                                link = this.link;
                            if (node.classList.contains('thundertext')) {
                                dialog.currentgroup = null;
                                dialog.currentgroupnode = null;
                                node.classList.remove('thundertext');
                                for (var i = 0; i < dialog.buttons.length; i++) {
                                    if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                                        dialog.buttons[i].classList.add('nodisplay');
                                    } else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
                                        dialog.buttons[i].classList.add('nodisplay');
                                    } else {
                                        dialog.buttons[i].classList.remove('nodisplay');
                                    }
                                }
                            } else {
                                if (dialog.currentgroupnode) {
                                    dialog.currentgroupnode.classList.remove('thundertext');
                                }
                                dialog.currentgroup = link;
                                dialog.currentgroupnode = node;
                                node.classList.add('thundertext');
                                for (var i = 0; i < dialog.buttons.length; i++) {
                                    if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
                                        dialog.buttons[i].classList.add('nodisplay');
                                    } else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
                                        dialog.buttons[i].classList.add('nodisplay');
                                    } else if (dialog.currentgroup == 'double') {
                                        if (dialog.buttons[i]._changeGroup || dialog.buttons[i].group == 'ye') dialog.buttons[i].classList.remove('nodisplay');
                                        else dialog.buttons[i].classList.add('nodisplay');
                                    } else {
                                        if (dialog.buttons[i]._changeGroup || dialog.buttons[i].group == 'ye' || dialog.buttons[i].group != dialog.currentgroup) {
                                            dialog.buttons[i].classList.add('nodisplay');
                                        } else {
                                            dialog.buttons[i].classList.remove('nodisplay');
                                        }
                                    }
                                }
                            }
                        };
                        for (var i = 0; i < groups.length; i++) {
                            var span = ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin');
                            span.style.margin = '3px';
                            newlined.appendChild(span);
                            span.innerHTML = get.translation(groups[i]);
                            span.link = groups[i];
                            span._nature = natures[i];
                            span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickGroup);
                        }

                        var span = document.createElement('span');
                        newlined.appendChild(span);
                        span.style.margin = '8px';

                        packsource = ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin');
                        packsource.style.margin = '3px';
                        newlined.appendChild(packsource);
                        var filternode = null;
                        var clickCaptNode = function (e) {
                            delete _status.filterCharacter;
                            ui.window.classList.remove('shortcutpaused');
                            filternode.delete();
                            filternode.classList.remove('shown');
                            clickCapt.call(this.link, e);
                        };
                        if (get.is.phoneLayout() && lib.config.filternode_button) {
                            newlined.style.marginTop = '';
                            packsource.innerHTML = '筛选';
                            filternode = ui.create.div('.popup-container.filter-character.modenopause');
                            ui.create.div(filternode);
                            filternode.listen(function (e) {
                                if (this.classList.contains('removing')) return;
                                delete _status.filterCharacter;
                                ui.window.classList.remove('shortcutpaused');
                                this.delete();
                                this.classList.remove('shown');
                                e.stopPropagation();
                            });
                            for (var i = 0; i < node.childElementCount; i++) {
                                if (node.childNodes[i].tagName.toLowerCase() == 'span') {
                                    node.childNodes[i].style.display = 'none';
                                    node.childNodes[i].touchlink = ui.create.div(filternode.firstChild, clickCaptNode, '.menubutton.large.capt', node.childNodes[i].innerHTML);
                                    node.childNodes[i].touchlink.link = node.childNodes[i];
                                }
                            }
                            ui.create.node('br', filternode.firstChild);
                        } else {
                            if (onlypack) {
                                packsource.onlypack = true;
                                packsource.innerHTML = get.translation(onlypack + '_character_config');
                                packsource.style.display = 'none';
                                packsource.previousSibling.style.display = 'none';
                            } else {
                                packsource.innerHTML = '武将包';
                            }
                        }

                        newlined2 = document.createElement('div');
                        newlined2.style.marginTop = '5px';
                        newlined2.style.display = 'none';
                        newlined2.style.fontFamily = 'xinwei';
                        newlined2.classList.add('pointernode');
                        if (get.is.phoneLayout()) {
                            newlined2.style.fontSize = '32px';
                        } else {
                            newlined2.style.fontSize = '22px';
                        }
                        newlined2.style.textAlign = 'center';
                        node.appendChild(newlined2);

                        packsource.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                            if (packsource.onlypack) return;
                            if (_status.dragged) return;
                            if (get.is.phoneLayout() && lib.config.filternode_button && filternode) {
                                _status.filterCharacter = true;
                                ui.window.classList.add('shortcutpaused');
                                ui.window.appendChild(filternode);
                                ui.refresh(filternode);
                                filternode.classList.add('shown');
                                var dh = filternode.offsetHeight - filternode.firstChild.offsetHeight;
                                if (dh > 0) {
                                    filternode.firstChild.style.top = (dh / 2) + 'px';
                                } else {
                                    filternode.firstChild.style.top = '';
                                }
                            } else {
                                if (newlined2.style.display == 'none') {
                                    newlined2.style.display = 'block';
                                } else {
                                    newlined2.style.display = 'none';
                                }
                            }
                        });
                        var packlist = [];
                        for (var i = 0; i < lib.config.all.characters.length; i++) {
                            if (!lib.config.characters.contains(lib.config.all.characters[i])) continue;
                            packlist.push(lib.config.all.characters[i]);
                        }
                        for (var i in lib.characterPack) {
                            if (!lib.config.all.characters.contains(i)) {
                                packlist.push(i);
                            }
                        }
                        for (var i = 0; i < packlist.length; i++) {
                            var span = document.createElement('div');
                            span.style.display = 'inline-block';
                            span.style.width = 'auto';
                            span.style.margin = '5px';
                            if (get.is.phoneLayout()) {
                                span.style.fontSize = '32px';
                            } else {
                                span.style.fontSize = '22px';
                            }
                            span.innerHTML = lib.translate[packlist[i] + '_character_config'];
                            span.link = packlist[i];
                            span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
                            newlined2.appendChild(span);
                            if (filternode && !onlypack) {
                                span.touchlink = ui.create.div(filternode.firstChild, clickCaptNode, '.menubutton.large', span.innerHTML);
                                span.touchlink.link = span;
                            }
                        }
                    }

                    var groupSort;
                    if (thisiscard) {
                        groupSort = function (name) {
                            var type = lib.card[name[2]].type;
                            if (lib.cardType[type]) {
                                return lib.cardType[type];
                            }
                            switch (type) {
                                case 'basic':
                                    return 0;
                                case 'chess':
                                    return 1.5;
                                case 'trick':
                                    return 2;
                                case 'delay':
                                    return 3;
                                case 'equip':
                                    return 4;
                                case 'zhenfa':
                                    return 5;
                                default:
                                    return 6;
                            }
                        };
                    } else {
                        var getGroup = function (name) {
                            var group = get.is.double(name, true);
                            if (group) return group[0];
                            return lib.character[name][1];
                        }
                        groupSort = function (name) {
                            if (!lib.character[name]) return 8;
                            var group = getGroup(name);
                            if (group == 'shen') return -1;
                            if (group == 'wei') return 0;
                            if (group == 'shu') return 1;
                            if (group == 'wu') return 2;
                            if (group == 'qun') return 3;
                            if (group == 'han') return 4;
                            if (group == 'jin') return 5;
                            if (group == 'key') return 6;
                            if (group == 'western') return 7;
                            return 8;
                        }
                    }
                    list.sort(function (a, b) {
                        var del = groupSort(a) - groupSort(b);
                        if (del != 0) return del;
                        var aa = a,
                            bb = b;
                        if (a.indexOf('_') != -1) {
                            a = a.slice(a.lastIndexOf('_') + 1);
                        }
                        if (b.indexOf('_') != -1) {
                            b = b.slice(b.lastIndexOf('_') + 1);
                        }
                        if (a != b) {
                            return a > b ? 1 : -1;
                        }
                        return aa > bb ? 1 : -1;
                    });
                    dialog = ui.create.dialog('hidden');
                    dialog.classList.add('noupdate');
                    dialog.classList.add('scroll1');
                    dialog.classList.add('scroll2');
                    dialog.classList.add('scroll3');
                    dialog.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
                        _status.clicked2 = true;
                    });
                    if (heightset) {
                        dialog.style.height = ((game.layout == 'long2' || game.layout == 'nova') ? 380 : 350) + 'px';
                        dialog._scrollset = true;
                    }
                    dialog.getCurrentCapt = function (link, capt, noalph) {
                        var currentcapt = noalph ? this.currentcapt2 : this.currentcapt;
                        if (this.seperatelist && noalph) {
                            if (this.seperatelist[currentcapt].contains(link)) return capt;
                            return null;
                        }
                        if (lib.characterDialogGroup[currentcapt]) {
                            return lib.characterDialogGroup[currentcapt](link, capt);
                        }
                        if (lib.characterPack[currentcapt]) {
                            if (lib.characterPack[currentcapt][link]) {
                                return capt;
                            }
                            return null;
                        }
                        return this.currentcapt;
                    }
                    if (str) {
                        dialog.add(str);
                    }
                    dialog.add(node);
                    if (thisiscard) {
                        if (seperate) {
                            seperate = seperate(list);
                            dialog.seperate = [];
                            dialog.seperatelist = seperate.list;
                            if (dialog.seperatelist) {
                                newlined = document.createElement('div');
                                newlined.style.marginTop = '5px';
                                newlined.style.display = 'block';
                                newlined.style.fontFamily = 'xinwei';
                                if (get.is.phoneLayout()) {
                                    newlined.style.fontSize = '32px';
                                } else {
                                    newlined.style.fontSize = '22px';
                                }
                                newlined.style.textAlign = 'center';
                                node.appendChild(newlined);
                                for (var i in dialog.seperatelist) {
                                    var span = document.createElement('span');
                                    span.style.margin = '3px';
                                    span.innerHTML = i;
                                    span.link = i;
                                    span.seperate = true;
                                    span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
                                    newlined.appendChild(span);
                                }
                            }
                            for (var i in seperate) {
                                if (i == 'list') continue;
                                var link = '';
                                var linkcontent = seperate[i];
                                if (i.indexOf('_link:') != -1) {
                                    link = i.slice(i.indexOf('_link:') + 6);
                                    i = i.slice(0, i.indexOf('_link:'));
                                }
                                var nodesep = dialog.add(i);
                                nodesep.link = link;
                                dialog.seperate.push(nodesep);
                                dialog.add([linkcontent, 'vcard'], noclick);
                            }
                        } else {
                            dialog.add([list, 'vcard'], noclick);
                        }
                    } else {
                        if (precharacter) {
                            dialog.add([list, 'precharacter'], noclick);
                        } else if (characterx) {
                            dialog.add([list, 'characterx'], noclick);
                        } else {
                            dialog.add([list, 'character'], noclick);
                        }
                    }
                    dialog.add(ui.create.div('.placeholder'));
                    for (i = 0; i < dialog.buttons.length; i++) {
                        if (thisiscard) {
                            dialog.buttons[i].capt = getCapt(dialog.buttons[i].link[2]);
                        } else {
                            dialog.buttons[i].group = lib.character[dialog.buttons[i].link][1];
                            dialog.buttons[i].capt = getCapt(dialog.buttons[i].link);
                        }
                    }
                    if (!expandall) {
                        if (!thisiscard && (lib.characterDialogGroup[lib.config.character_dialog_tool] ||
                                lib.config.character_dialog_tool == '自创')) {
                            clickCapt.call(node[lib.config.character_dialog_tool]);
                        }
                    }
                    return dialog;
                }

                lib.game.getIdentityList2 = function (list) {
                    for (var i in list) {
                        switch (i) {
                            case 'unknown':
                                list[i] = '未知';
                                break;
                            case 'ye':
                                list[i] = '野心家';
                                break;
                            case 'qun':
                                list[i] += '雄';
                                break;
                            case 'han':
                                list[i] += '朝';
                                break;
                            case 'jin':
                                list[i] += '朝';
                                break;
                            case 'key':
                                list[i] = 'Key';
                                break;
                            default:
                                list[i] += '国';
                        }
                    }
                }

                // lib.group.add('han')
                lib.group = ['wei', 'shu', 'wu', 'qun', 'han', 'jin', 'shen']
            }

            // 官方武将修改
            if (config.guanfangs) {
                // 野心家
                // 双势力
                // 魏
                lib.characterPack.mode_guozhan.gz_bianfuren = ['female', 'wei', 3, ['wanwei', 'gzyuejian'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_caoren = ['male', 'wei', 4, ['gzjushou', 'xinjiewei'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_dianwei = ['male', 'wei', 4, ['gzqiangxi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_xunyu = ['male', 'wei', 3, ['quhu', 'gzjieming'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_huaxin = ['male', 'wei', 3, ['wanggui', 'xibing'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_jianggan = ["male", "wei", 3, ["weicheng", "daoshu"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zangba = ['male', 'wei', 4, ['hengjiang'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_xiahouyuan = ['male', 'wei', 5, ['gzshensu'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhanghe = ['male', 'wei', 4, ['qiaobian', 'yuanlve'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_xuhuang = ['male', 'wei', 4, ['new_duanliang', 'jiezi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_simayi = ['male', 'wei', 3, ['refankui', 'guicai'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_xiahoudun = ['male', 'wei', 4, ['reganglie', 'xinqingjian'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_dengai = ['male', 'wei', 4, ['oltuntian', 'gz_jixi', 'ziliang'],
                    ['gzskin', 'die_audio']
                ]
                lib.characterPack.mode_guozhan.gz_caocao = ['male', 'wei', 4, ['jianxiong', 'nsxionglue']]
                lib.characterPack.mode_guozhan.gz_zhangliao = ['male', 'wei', 4, ['new_retuxi', 'ziqu']]
                lib.characterPack.mode_guozhan.gz_yuejin = ['male', 'wei', 4, ['xiaoguo'],
                    ['gzskin']
                ]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]


                // 蜀
                lib.characterPack.mode_guozhan.gz_liushan = ['male', 'shu', 3, ['xiangle', 'refangquan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_jiangfei = ['male', 'shu', 3, ['reshengxi', 'gzshoucheng'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_machao = ['male', 'shu', 4, ['zhuiji', 'new_tieji'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhaoyun = ['male', 'shu', 4, ['new_longdan', 'new_yajiao'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhurong = ['female', 'shu', 4, ['juxiang', 'relieren'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_menghuo = ['male', 'shu', 4, ['huoshou', 'rezaiqi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_pangtong = ['male', 'shu', 3, ['xinlianhuan', 'niepan']]
                lib.characterPack.mode_guozhan.gz_weiyan = ['male', 'shu', 4, ['xinkuanggu', 'gz_qimou'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_huangzhong = ['male', 'shu', 4, ['gzliegong'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_liubei = ['male', 'shu', 4, ['rerende'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_guanyu = ['male', 'shu', 5, ['new_rewusheng', 'gz_nuzhan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhangfei = ['male', 'shu', 4, ['gzpaoxiao'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_liaohua = ['male', 'shu', 4, ['gzdangxian'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_chendao = ["male", "shu", 4, ["drlt_wanglie"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zongyu = ['male', 'shu', 3, ['gz_zyqiao', 'chengshang'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_mifuren = ['female', 'shu', 3, ['gzguixiu', 'gzcunsi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_jiangwei = ['male', 'shu', 4, ['retiaoxin', 'tianfu', 'gz_yizhi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhugeliang = ['male', 'shu', 3, ['reguanxing', 'new_kongcheng'],
                    ['gzskin']
                ]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]


                // 吴
                lib.characterPack.mode_guozhan.gz_sunce = ['male', 'wu', 4, ['jiang', 'yingyang', 'gz_hunshang'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sunshangxiang = ['female', 'wu', 3, ['jieyin', 'gzxiaoji'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_ganning = ['male', 'wu', 4, ['qixi', 'fenwei', 'gz_gnsheque'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_taishici = ['male', 'wu', 4, ['tianyi', 'hanzhan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_luyusheng = ['female', 'wu', 3, ['zhente', 'zhiwei'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_lingcao = ['male', 'wu', 4, ['dujin'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_lvfan = ['male', 'wu', 3, ['xindiaodu', 'gzdiancai'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_jiangqing = ['male', 'wu', 4, ['gzshangyi', 'niaoxiang', 'gz_spjianyi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_lingtong = ['male', 'wu', 4, ['rexuanfeng', 'yongjin'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_xusheng = ['male', 'wu', 4, ['xinpojun', 'yicheng'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_daqiao = ['female', 'wu', 3, ['guose', 'liuli'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_re_lusu = ['male', 'wu', 3, ['haoshi', 'dimeng'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sunjian = ['male', 'wu', 5, ['yinghun'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_huanggai = ['male', 'wu', 4, ['new_kurou'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sunquan = ['male', 'wu', 4, ['gzzhiheng'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhugejin = ['male', 'wu', 3, ['gzhuanshi', 'gzhongyuan', 'gzmingzhe'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zumao = ['male', 'wu', 4, ['yinbing', 'juedi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhugeke = ['male', 'wu', 3, ['gz_aocai', 'gzduwu'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_lukang = ['male', 'wu', 4, ['gz_keshou', 'zhuwei', 'drlt_huairou'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhouyu = ['male', 'wu', 3, ['reyingzi', 'refanjian', 'liejiang3d8'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_luxun = ['male', 'wu', 3, ['gzqianxun', 'duoshi', 'zonghuo'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhouyi = ['female', 'wu', 3, ['gzzhukou', 'gzduannian', 'gz_lianyou']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]


                // 群
                lib.characterPack.mode_guozhan.gz_zhangjiao = ['male', 'qun', 3, ['gz_leiji', 'xinguidao'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_caiwenji = ['female', 'han', 3, ['beige', 'gzduanchang'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_lvlingqi = ['female', 'qun', 4, ['guowu', 'gzshenwei', 'gzzhuangrong'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_beimihu = ["female", "qun", 3, ["hmkguishu", "hmkyuanyu"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhangren = ['male', 'han', 4, ['chuanxin', 'fengshi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_re_nanhualaoxian = ['male', 'qun', 3, ['gzgongxiu', 'gzjinghe'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_liqueguosi = ['male', 'qun', 4, ['gzxiongsuan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_pangde = ['male', 'qun', 4, ['mashu', 'jianchu'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_yanwen = ['male', 'qun', 4, ['gz_shuangxiong'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sp_duyu = ['male', 'qun', 4, ['spwuku', 'spmiewu'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_kongrong = ['male', 'han', 3, ['gzmingshi', 'lirang'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_jiling = ['male', 'qun', 4, ['shuangren'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_tianfeng = ['male', 'qun', 3, ['sijian', 'gzsuishi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_fuwan = ['male', 'han', 4, ['twmoukui']]
                lib.characterPack.mode_guozhan.gz_hetaihou = ['female', 'han', 3, ['zhendu', 'qiluan'],
                    ['gzskin']
                ]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]


                // 晋
                lib.characterPack.mode_guozhan.gz_jin_simashi = ['male', 'jin', 4, ['yimie', 'tairan', 'gz_jinglve'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_jin_simazhao = ['male', 'jin', 4, ['xinchoufa', 'zhaoran', 'gz_daigong'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_duyu = ['male', 'jin', 4, ['sanchen']]
                lib.characterPack.mode_guozhan.gz_jin_wangyuanji = ['female', 'jin', 3, ['yanxi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_jin_zhangchunhua = ['female', 'jin', 3, ['huishi', 'qingleng'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_jin_yanghuiyu = ['female', 'jin', 3, ['ciwei', 'caiyuan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_jin_xiahouhui = ['female', 'jin', 3, ['jyishi', 'shiduo']]
                lib.characterPack.mode_guozhan.gz_jin_simayi = ['male', 'jin', 3, ['smyyingshi', 'xiongzhi', 'xinquanbian'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_simazhou = ['male', 'jin', 4, ['recaiwang', 'naxiang'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhongyan = ['female', 'jin', 3, ['bolan', 'yifa'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_shibao = ['male', 'jin', 4, ['gzzhuosheng'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_weiguan = ['male', 'jin', 3, ['zhongyun', 'shenpin'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhanghuyuechen = ['male', 'jin', 4, ['xijue'],
                    ['gzskin']
                ]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
                // lib.characterPack.mode_guozhan. ,['gzskin']]
            }

            // 添加额外武将
            if (config.junzhengs) {
                // 野心家
                lib.characterPack.mode_guozhan.gz_liuyan = ["male", "ye", 3, ["xinfu_tushe", "xinfu_limu"],
                    ['gzskin']
                ]
                // 双势力
                // junzheng1
                lib.characterPack.mode_guozhan.gz_wangji = ['male', 'jin', 3, ['qizhi', 'jinqu'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_qiaozhou = ['male', 'jin', 3, ['zhiming', 'xingbu'],
                    ['doublegroup:jin:shu', 'gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_wuyan = ['male', 'jin', 4, ['lanjiang'],
                    ['doublegroup:jin:wu']
                ]
                // junzheng2
                // junzheng3
                // junzheng4
                lib.characterPack.mode_guozhan.gz_caiyong = ['male', 'han', 3, ['bizhuan', 'tongbo']]

                // 魏
                lib.characterPack.mode_guozhan.gz_tianyu = ['male', 'wei', 4, ['saodi', 'zhuitao']]
                lib.characterPack.mode_guozhan.gz_jiakui = ['male', 'wei', 3, ['gz_zhongzuo', 'wanlan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_qinghegongzhu = ['female', 'wei', 3, ['zengou', 'gz_qhzhangji']]
                lib.characterPack.mode_guozhan.gz_caorui = ['male', 'wei', 3, ['mingjian', 'huituo'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_guohuanghou = ['female', 'wei', 3, ['jiaozhao', 'danxin'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_caoang = ['male', 'wei', 4, ['kaikang', 'gz_xuepin'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_caoanmin = ['male', 'wei', 4, ['nskuishe'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_caoxiu = ['male', 'wei', 4, ['qianju', 'qingxi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_wangling = ['male', 'wei', 4, ['xingqi', 'xinzifu']]
                lib.characterPack.mode_guozhan.gz_wangyi = ['female', 'wei', 3, ['oldzhenlie', 'oldmiji'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_duxi = ['male', 'wei', 3, ['bixiong']]
                lib.characterPack.mode_guozhan.gz_yuanhuan = ['male', 'wei', 3, ['gz_qingjue']]
                lib.characterPack.mode_guozhan.gz_hanhaoshihuan = ['male', 'wei', 4, ['shenduan', 'yonglve'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_caozhi = ['male', 'wei', 3, ['luoying'],
                    ['gzskin']
                ]
                // junzheng2
                lib.characterPack.mode_guozhan.gz_caojinyu = ['female', 'wei', 3, ['yuqi']]
                lib.characterPack.mode_guozhan.gz_dufuren = ['female', 'wei', 3, ['shunshi']]
                lib.characterPack.mode_guozhan.gz_heyan = ['male', 'wei', 3, ['gz_qingtan']]
                lib.characterPack.mode_guozhan.gz_chengyu = ['male', 'wei', 3, ['shefu'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhangchunhua = ['female', 'wei', 3, ['jueqing', 'shangshi']]
                lib.characterPack.mode_guozhan.gz_caochun = ['male', 'wei', 4, ['gz_shanjia'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_caozhang = ['male', 'wei', 4, ['xinjiangchi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_guohuai = ['male', 'wei', 4, ['rejingce'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_wenpin = ['male', 'wei', 4, ['zhenwei'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_wangshuang = ['male', 'wei', 4, ['shanxie'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_litong = ['male', 'wei', 4, ['tuifeng'],
                    ['gzskin']
                ]
                // junzheng3
                lib.characterPack.mode_guozhan.gz_niujin = ['male', 'wei', 4, ['reliewei', 'recuorui'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_caozhen = ['male', 'wei', 4, ['xinsidi']]
                lib.characterPack.mode_guozhan.gz_caoshuang = ['male', 'wei', 4, ['gz_shanzhuan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_haozhao = ["male", "wei", 4, ["drlt_zhenggu"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_lvqian = ["male", "wei", 4, ["xinfu_weilu", "xinfu_zengdao"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_guanqiujian = ['male', 'wei', 4, ['zhengrong', 'qingce'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhongyao = ['male', 'wei', 3, ['huomo', 'zuoding'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_xizhicai = ['male', 'wei', 3, ['gz_xianfu', 'gz_chouce'],
                    ['gzskin']
                ]
                // lib.characterPack.mode_guozhan.gz_yangxiu = ['male', 'wei', 3, ['jilei', 'danlao']]
                lib.characterPack.mode_guozhan.gz_caoying = ["female", "wei", 3, ["gz_lingren"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_manchong = ['male', 'wei', 3, ['junxing', 'yuce'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_chenlin = ['male', 'han', 3, ['bifa', 'songci'],
                    ['doublegroup:han:wei', 'gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sunziliufang = ['male', 'wei', 3, ['guizao', 'jiyu']]
                // junzheng4
                lib.characterPack.mode_guozhan.gz_zhugedan = ['male', 'wei', 4, ['gz_weizhong', 'gz_gongao'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_liuye = ['male', 'wei', 4, ['polu', 'choulve'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_guanlu = ['male', 'wei', 4, ['tuiyan', 'gz_busuan', 'gz_mingjie'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sp_wangcan = ["male", "wei", 3, ["spqiai", "xinfu_denglou"]]
                lib.characterPack.mode_guozhan.gz_guozhao = ['female', 'wei', 3, ['zunwei'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_ruanyu = ['male', 'wei', 3, ['xingzuo']]
                lib.characterPack.mode_guozhan.gz_caochong = ['male', 'wei', 3, ['gz_chengxiang', 'renxin'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_duji = ["male", "wei", 3, ["xinfu_andong"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_tw_caozhao = ['male', 'wei', 4, ['twfeifu']]
                lib.characterPack.mode_guozhan.gz_wanglang = ['male', 'wei', 3, ['gz_gushe'],
                    ['gzskin']
                ]
                // junzheng5
                lib.characterPack.mode_guozhan.gz_caomao = ['male', 'wei', 3, ['fensi', 'qianlong', 'juetao']]
                lib.characterPack.mode_guozhan.gz_chenqun = ['male', 'wei', 3, ['dingpin', 'faen'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_caosong = ['male', 'wei', 3, ['gz_cslilu']]
                lib.characterPack.mode_guozhan.gz_kuailiangkuaiyue = ["male", "wei", 3, ["nzry_jianxiang", "gz_shenshi"]]
                lib.characterPack.mode_guozhan.gz_tw_wangchang = ['male', 'wei', 4, ['twkaiji'],
                    ['doublegroup:wei:jin']
                ]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]

                // 蜀
                // junzheng1
                lib.characterPack.mode_guozhan.gz_zhugezhan = ['male', 'shu', 3, ['xinfu_zuilun', 'xinfu_fuyin'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_furong = ['male', 'shu', 4, ['xuewei', 'liechi']]
                lib.characterPack.mode_guozhan.gz_fuqian = ['male', 'shu', 4, ['gz_poxiang'],
                    ['des:傅佥[qiān]（？～263年），义阳（治今湖北省枣阳市）人，蜀汉将领傅肜之子，三国时期蜀汉将领。佥长于谋略，并颇有胆勇，姜维甚爱之。']
                ]
                lib.characterPack.mode_guozhan.gz_baosanniang = ['female', 'shu', 3, ['meiyong', 'gz_rezhennan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sp_huaman = ['female', 'shu', 3, ['spxiangzhen', 'gz_mansi']]
                lib.characterPack.mode_guozhan.gz_guanzhang = ['male', 'shu', 4, ['fuhun'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_liuchen = ['male', 'shu', 4, ['zhanjue'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_liucheng = ['female', 'shu', 3, ['splveying', 'spyingwu'],
                    ['des:刘赪[cheng]，游卡桌游的原创人物，设定为黄忠的妻子。']
                ]
                lib.characterPack.mode_guozhan.gz_maliang = ['male', 'shu', 3, ['zishu', 'xinyingyuan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_wuban = ['male', 'shu', 4, ['gz_jintao']]
                lib.characterPack.mode_guozhan.gz_xiangchong = ['male', 'shu', 4, ['guying', 'muzhen']]
                // lib.characterPack.mode_guozhan.gz_liaohua = ['male', 'shu', 4, ['dangxian', 'xinfuli'],
                //     ['gzskin']
                // ]
                // junzheng2
                lib.characterPack.mode_guozhan.gz_dongyun = ['male', 'shu', 3, ['bingzheng', 'sheyan']]
                lib.characterPack.mode_guozhan.gz_liyan = ['male', 'shu', 4, ['duliang', 'fulin'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_wuxian = ['female', 'shu', 3, ['fumian', 'daiyan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_xiahoushi = ['female', 'shu', 3, ['qiaoshi', 'yanyu'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_yangyi = ['male', 'shu', 3, ['oljuanxia', 'gz_dingcuo']]
                lib.characterPack.mode_guozhan.gz_zhaoxiang = ['female', 'shu', 3, ['refanghun'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_guanping = ['male', 'shu', 4, ['relongyin', 'gz_jiezhong'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_leitong = ['male', 'shu', 4, ['gz_kuiji']]
                lib.characterPack.mode_guozhan.gz_wuyi = ['male', 'shu', 4, ['benxi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_yanyan = ["male", "han", 4, ["nzry_juzhan"],
                    ['doublegroup:han:shu']
                ]
                lib.characterPack.mode_guozhan.gz_guanyinping = ['female', 'shu', 3, ['huxiao', 'xueji'],
                    ['gzskin']
                ]
                // junzheng3
                lib.characterPack.mode_guozhan.gz_sp_yangwan = ['female', 'shu', 3, ['spmingxuan', 'spxianchou']]
                lib.characterPack.mode_guozhan.gz_zhangxingcai = ['female', 'shu', 3, ['shenxian', 'qiangwu'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhangsong = ['male', 'shu', 3, ['qiangzhi', 'xiantu'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_huanghao = ['male', 'shu', 3, ['huisheng'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_huangquan = ["male", "shu", 3, ["gz_dianhu", "xinfu_jianji"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_mizhu = ['male', 'shu', 3, ['ziyuan', 'gz_jugu'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sunqian = ['male', 'shu', 3, ['qianya', 'shuimeng'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_huojun = ['male', 'shu', 4, ['twjieyu'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_guansuo = ['male', 'shu', 4, ['xiefang', 'gz_zhengnan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_mayunlu = ['female', 'shu', 4, ['fengpo', 'mashu'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhangyi = ['male', 'shu', 4, ['wurong', 'reshizhi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhangyì = ['male', 'shu', 4, ['rezhiyi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhoucang = ['male', 'shu', 4, ['rezhongyong'],
                    ['gzskin']
                ]
                // junzheng4
                lib.characterPack.mode_guozhan.gz_liufeng = ['male', 'shu', 4, ['xiansi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_mazhong = ['male', 'shu', 4, ['fuman'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_puyuan = ['male', 'shu', 4, ['gz_tianjiang', 'pyzhuren'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_jianyong = ['male', 'shu', 3, ['reqiaoshui', 'jyzongshi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_qinmi = ['male', 'shu', 3, ['jianzheng', 'zhuandui', 'tianbian'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_lvkai = ["male", "shu", 3, ["xinfu_tunan", "xinfu_bijing"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sp_chenzhen = ['male', 'shu', 3, ['gz_shameng']]
                lib.characterPack.mode_guozhan.gz_yiji = ["male", "shu", 3, ["xinfu_jijie", "xinfu_jiyuan"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_wulan = ['male', 'shu', 4, ['wlcuorui']]
                lib.characterPack.mode_guozhan.gz_xujing = ['male', 'shu', 3, ['yuxu', 'xjshijian'],
                    ['gzskin']
                ]
                // junzheng5
                lib.characterPack.mode_guozhan.gz_zhugeguo = ['female', 'shu', 3, ['yuhua', 'gz_qirang'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_liuyong = ['male', 'shu', 3, ['gz_zhuning', 'fengxiang'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_hujinding = ['female', 'shu', 3, ['wuyuan', 'huaizi']]
                lib.characterPack.mode_guozhan.gz_fanyufeng = ['female', 'shu', 3, ['zmdiewu', 'zmmuyun'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_huoyi = ['male', 'shu', 4, ['zmyihua', 'twsidai'],
                    ['doublegroup:shu:jin', 'gzskin', 'des:霍弋（生卒年不详），字绍先，霍峻之子，三国时期蜀汉至西晋初时将领。邓艾偷袭阴平，霍弋想率军救援成都，但刘禅以成都已有准备，不准，后刘禅投降，霍弋在得知司马氏善待刘禅后，才率领南中六郡投降。降晋后仍为南中都督，平定交阯、日南、九真三郡，功封列侯。']
                ]
                lib.characterPack.mode_guozhan.gz_zhouqun = ['male', 'shu', 3, ['tiansuan']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]

                // 吴
                // junzheng1
                lib.characterPack.mode_guozhan.gz_fanjiangzhangda = ['male', 'wu', 4, ['yuanchou', 'juesheng']]
                lib.characterPack.mode_guozhan.gz_qiaogong = ['male', 'wu', 3, ['yizhu']]
                lib.characterPack.mode_guozhan.gz_yufan = ['male', 'wu', 3, ['xinzhiyan', 'xinzongxuan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sunliang = ["male", "wu", 3, ["nzry_kuizhu", "nzry_zhizheng"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sunhao = ['male', 'wu', 4, ['recanshi', 'rechouhai'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_quancong = ['male', 'wu', 4, ['xinyaoming', 'zhenshan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sunluban = ['female', 'wu', 3, ['chanhui', 'jiaojin'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_chengpu = ['male', 'wu', 4, ['lihuo', 'chunlao'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_panshu = ['female', 'wu', 3, ['jinzhi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_panzhangmazhong = ['male', 'wu', 4, ['xinduodao', 'xinanjian'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sunyi = ['male', 'wu', 4, ['zaoli']]
                lib.characterPack.mode_guozhan.gz_zhouchu = ['male', 'wu', 4, ['gz_xianghai', 'chuhai'],
                    ['doublegroup:wu:jin']
                ]
                // junzheng2
                lib.characterPack.mode_guozhan.gz_zhaoyan = ['female', 'wu', 3, ['jinhui'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_weiwenzhugezhi = ['male', 'wu', 4, ['refuhai'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_handang = ['male', 'wu', 4, ['regongji', 'jiefan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhuran = ['male', 'wu', 4, ['danshou'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_kanze = ['male', 'wu', 3, ['xiashu', 'rekuanshi']]
                lib.characterPack.mode_guozhan.gz_sunru = ['female', 'wu', 3, ['yingjian', 'shixin'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sunxiu = ['male', 'wu', 3, ['yanzhu', 'rexingxue'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_xushi = ['female', 'wu', 3, ['wengua', 'fuzhu'],
                    ['gzskin']
                ]
                // lib.characterPack.mode_guozhan.gz_zhugejin = ['male', 'wu', 3, ['hongyuan', 'huanshi', 'mingzhe'],
                //     ['gzskin']
                // ]
                lib.characterPack.mode_guozhan.gz_zhuzhi = ['male', 'wu', 4, ['xinanguo'],
                    ['gzskin']
                ]
                // junzheng3
                lib.characterPack.mode_guozhan.gz_liuzan = ['male', 'wu', 4, ['refenyin'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_luotong = ['male', 'wu', 4, ['gz_qinzheng'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhuhuan = ['male', 'wu', 4, ['gz_fenli', 'pingkou'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sundeng = ['male', 'wu', 4, ['kuangbi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_lvdai = ["male", "wu", 4, ["xinfu_qinguo"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_heqi = ['male', 'wu', 4, ['reqizhou', 'shanxi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sunluyu = ['female', 'wu', 3, ['remeibu', 'new_mumu'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_bulianshi = ['female', 'wu', 3, ['old_anxu', 'zhuiyi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_xuezong = ['male', 'wu', 3, ['funan', 'xinjiexun'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_cenhun = ['male', 'wu', 3, ['gz_jishe', 'lianhuo']]
                lib.characterPack.mode_guozhan.gz_guyong = ['male', 'wu', 3, ['xinshenxing', 'xinbingyi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhoufei = ["female", "wu", 3, ["liangyin", "kongsheng"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sunhanhua = ['female', 'wu', 3, ['miaojian', 'shhlianhua']]
                // junzheng4
                lib.characterPack.mode_guozhan.gz_xugong = ["male", "han", 4, ["rebiaozhao"],
                    ['doublegroup:han:wu', 'gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhoufang = ["male", "wu", 4, ["gz_youdi", "xinfu_duanfa"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_gexuan = ['male', 'wu', 4, ['twdanfa', 'gz_twlingbao'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_buzhi = ['male', 'wu', 3, ['hongde', 'dingpan']]
                lib.characterPack.mode_guozhan.gz_sunshao = ['male', 'wu', 3, ['bizheng', 'yidian'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_yanjun = ["male", "wu", 3, ["xinfu_guanchao", "xinfu_xunxian"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sp_zhangwen = ['male', 'wu', 3, ['songshu', 'sibian']]
                lib.characterPack.mode_guozhan.gz_luji = ["male", "wu", 3, ["gz_huaiju", "nzry_yili", "nzry_zhenglun"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_wufan = ['male', 'wu', 3, ['gz_tianyun']]
                lib.characterPack.mode_guozhan.gz_caobuxing = ['male', 'wu', 3, ['juanhui'],
                    ['doublegroup:wu:han']
                ]
                // junzheng5
                lib.characterPack.mode_guozhan.gz_tengyin = ['male', 'wu', 3, ['xixiu']] //,'chenjian']]
                lib.characterPack.mode_guozhan.gz_wu_pangtong = ["male", "wu", 3, ["xinfu_guolun", "gz_songsang"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_tengfanglan = ['female', 'wu', 3, ['luochong', 'aichen']]
                lib.characterPack.mode_guozhan.gz_tw_puyangxing = ['male', 'wu', 3, ['xintu3d8']]
                lib.characterPack.mode_guozhan.gz_tenggongzhu = ['female', 'wu', 3, ['gz_xingchong']]
                lib.characterPack.mode_guozhan.gz_zhangti = ["male", "wu", 4, ["biaodou3d8"],
                    ['gzskin']
                ]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]


                // 群
                // junzheng1
                lib.characterPack.mode_guozhan.gz_xurong = ['male', 'qun', 4, ['gz_xionghuo', 'gz_shajue'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_quyi = ['male', 'qun', 4, ['gz_fuqi', 'gz_jiaozi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhaozhong = ['male', 'han', 4, ['yangzhong', 'huangkong'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_chendeng = ['male', 'han', 3, ['refuyuan', 'fengji'],
                    ['doublegroup:han:qun', 'gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_duanwei = ['male', 'qun', 4, ['gz_langmie']]
                lib.characterPack.mode_guozhan.gz_hanmeng = ['male', 'qun', 4, ['jieliang', 'quanjiu']]
                lib.characterPack.mode_guozhan.gz_liuxie = ['male', 'han', 3, ['tianming', 'mizhao'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_fuhuanghou = ['female', 'han', 3, ['spcangni', 'spmixin'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_gongsunzan = ['male', 'qun', 4, ['yicong', 'qiaomeng'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_xinping = ['male', 'qun', 3, ['fuyuan', 'zhongjie']]
                // junzheng2
                lib.characterPack.mode_guozhan.gz_caifuren = ['female', 'han', 3, ['qieting', 'xianzhou'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_liubiao = ['male', 'han', 3, ['rezishou', 'zongshi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_guotufengji = ['male', 'qun', 3, ['jigong', 'shifei'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_jushou = ['male', 'qun', 3, ['xinjianying'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_nashime = ['male', 'qun', 3, ['waishi']]
                lib.characterPack.mode_guozhan.gz_shenpei = ['male', 'qun', 3, ['gangzhi', 'beizhan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_yanpu = ['male', 'qun', 3, ['huantu', 'bihuo']]
                lib.characterPack.mode_guozhan.gz_caoxing = ['male', 'qun', 4, ['gz_liushi']]
                lib.characterPack.mode_guozhan.gz_huaxiong = ["male", "qun", 4, ["reyaowu"]]
                lib.characterPack.mode_guozhan.gz_zhangmiao = ['male', 'han', 4, ['mouni']]
                lib.characterPack.mode_guozhan.gz_zhujun = ['male', 'han', 4, ['gz_kuimang', 'gz_gongjian'],
                    ['gzskin']
                ]
                // junzheng3
                lib.characterPack.mode_guozhan.gz_huangfusong = ['male', 'han', 5, ['gz_shiji', 'sptaoluan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_hansui = ['male', 'qun', 4, ['spniluan', 'spweiwu']]
                lib.characterPack.mode_guozhan.gz_gaoshun = ['male', 'qun', 4, ['jinjiu', 'xinxianzhen'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_gaolan = ['male', 'qun', 4, ['spjungong', 'spdengli']]
                lib.characterPack.mode_guozhan.gz_hejin = ['male', 'han', 4, ['spmouzhu', 'twyanhuo']]
                lib.characterPack.mode_guozhan.gz_dingyuan = ['male', 'qun', 4, ['beizhu']]
                lib.characterPack.mode_guozhan.gz_dongcheng = ['male', 'han', 3, ['xuezhao'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_chengong = ['male', 'qun', 3, ['mingce', 'zhichi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhangrang = ['male', 'han', 3, ['taoluan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_liru = ['male', 'qun', 3, ['juece', 'mieji', 'fencheng']]
                lib.characterPack.mode_guozhan.gz_lisu = ['male', 'qun', 3, ['qiaoyan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_taoqian = ['male', 'qun', 3, ['reyixiang'],
                    ['doublegroup:qun:han']
                ]
                lib.characterPack.mode_guozhan.gz_liuzhang = ['male', 'han', 3, ['gz_jutu', 'yaohu'],
                    ['gzskin']
                ]
                // junzheng4
                lib.characterPack.mode_guozhan.gz_fanchou = ["male", "qun", 4, ["xinxingluan"]]
                lib.characterPack.mode_guozhan.gz_tw_liuhong = ['male', 'han', 4, ['twyujue']]
                lib.characterPack.mode_guozhan.gz_yl_luzhi = ["male", "han", 3, ["gz_mingren", "gz_zhenliang"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_fengfangnv = ['female', 'qun', 3, ['gz_tiqi', 'gz_jiangong']]
                lib.characterPack.mode_guozhan.gz_wangyun = ['male', 'han', 3, ['xinlianji', 'jingong']]
                lib.characterPack.mode_guozhan.gz_yangbiao = ['male', 'han', 3, ['rangjie']]
                lib.characterPack.mode_guozhan.gz_zhangbao = ['male', 'qun', 3, ['xinzhoufu', 'xinyingbing']]
                lib.characterPack.mode_guozhan.gz_hanfu = ['male', 'qun', 4, ['weipo']]
                lib.characterPack.mode_guozhan.gz_caojie = ['female', 'han', 3, ['gz_shouxi', 'huimin'],
                    ['gzskin']
                ]
                // junzheng5
                lib.characterPack.mode_guozhan.gz_liubian = ['male', 'han', 3, ['gz_shiyuan', 'dushi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_tangji = ['female', 'han', 3, ['gz_jielie'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_huangjinleishi = ['female', 'qun', 3, ['fulu', 'fuji']]
                lib.characterPack.mode_guozhan.gz_zhangzhongjing = ['male', 'qun', 3, ['quhan3d8', 'changtang3d8']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]

                // 晋
                // junzheng1
                lib.characterPack.mode_guozhan.gz_wenyang = ['male', 'jin', 5, ['dbquedi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_xinchang = ['male', 'jin', 3, ['canmou', 'gz_xccongjian']]
                lib.characterPack.mode_guozhan.gz_xuangongzhu = ['female', 'jin', 3, ['qimei', 'ybzhuiji'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zuofen = ['female', 'jin', 3, ['zhaosong', 'lisi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_yangyan = ['female', 'jin', 3, ['xinxuanbei', 'xianwan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_yangzhi = ['female', 'jin', 3, ['xinwanyi', 'maihuo'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_jin_jiachong = ['male', 'jin', 3, ['beini', 'jianhui']]
                lib.characterPack.mode_guozhan.gz_peixiu = ['male', 'jin', 3, ['xingtu', 'gz_juezhi']]
                lib.characterPack.mode_guozhan.gz_jin_yanghu = ['male', 'jin', 4, ['chongxin', 'mingfa', 'gz_rongbei']]
                lib.characterPack.mode_guozhan.gz_simafu = ['male', 'jin', 3, ['xunde', 'chenjie']]
                lib.characterPack.mode_guozhan.gz_luzhi = ['male', 'jin', 3, ['qingzhongx', 'weijing'],
                    ['doublegroup:jin:wei', 'gzskin']
                ]
                // junzheng2
                lib.characterPack.mode_guozhan.gz_xinpi = ['male', 'jin', 3, ['gz_chijie', 'spyinju'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_xinxianying = ['female', 'jin', 3, ['xincaishi', 'xinzhongjian'],
                    ['gzskin']
                ]
                // junzheng3
                lib.characterPack.mode_guozhan.gz_zhanghu = ['male', 'jin', 4, ['gz_cuijian'],
                    ['des:张虎（生卒年不详），雁门马邑（今山西省朔城区大夫庄）人。三国时期曹魏名将。晋阳侯张辽之子。官至偏将军，袭封晋阳侯，有一子张统。']
                ]
                lib.characterPack.mode_guozhan.gz_caizhenji = ['female', 'jin', 3, ['sheyi', 'tianyin'],
                    ['gzskin']
                ]
                // junzheng4
                lib.characterPack.mode_guozhan.gz_simalang = ['male', 'jin', 3, ['junbing', 'quji'],
                    ['gzskin']
                ]
                // junzheng5
                lib.characterPack.mode_guozhan.gz_jin_guohuai = ['female', 'jin', 3, ['zhefu', 'yidu']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]


                // 汉朝
                // junzheng6
                // 野心家
                // 双势力
                // 魏
                // 蜀
                // 吴
                // 汉
                lib.characterPack.mode_guozhan.gz_wangrong = ['female', 'han', 3, ['jijing', 'zhuide'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_liuyu = ['male', 'han', 3, ['xinzhige'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_sp_jiben = ['male', 'han', 3, ['spduanzhi', 'spduyi']]
                lib.characterPack.mode_guozhan.gz_liuyao = ["male", "han", 4, ["xinfu_kannan"]]
                lib.characterPack.mode_guozhan.gz_mamidi = ['male', 'han', 3, ['gz_bingjie', 'gz_zhengding']]
                lib.characterPack.mode_guozhan.gz_xushao = ['male', 'han', 3, ['pingjian'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_xingdaorong = ['male', 'han', 4, ['gz_xuxie']]
                lib.characterPack.mode_guozhan.gz_wanniangongzhu = ['female', 'han', 3, ['zhenge'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_ns_wangyue = ['male', 'han', 4, ['nsjianshu', 'nscangjian'],
                    ['gzskin']
                ]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // 群
                lib.characterPack.mode_guozhan.gz_zhangliang = ["male", "qun", 4, ["xinfu_jijun", "xinfu_fangtong"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_cheliji = ['male', 'qun', 4, ['chexuan', 'qiangshou']]
                lib.characterPack.mode_guozhan.gz_chunyuqiong = ['male', 'qun', 4, ['gz_cangchu', 'reliangying', 'reshishou'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_dongbai = ['female', 'qun', 3, ['lianzhu', 'xiehui']]
                lib.characterPack.mode_guozhan.gz_gongsunkang = ['male', 'qun', 4, ['juliao', 'taomie']]
                lib.characterPack.mode_guozhan.gz_hucheer = ['male', 'qun', 4, ['daoji']]
                lib.characterPack.mode_guozhan.gz_lvkuanglvxiang = ['male', 'qun', 4, ['liehou', 'qigong']]
                lib.characterPack.mode_guozhan.gz_mayuanyi = ['male', 'qun', 3, ['jibing', 'wangjing']]
                lib.characterPack.mode_guozhan.gz_yanfuren = ['female', 'qun', 3, ['channi']]
                lib.characterPack.mode_guozhan.gz_qiuliju = ['male', 'qun', 4, ['gz_koulve', 'qljsuiren']]
                lib.characterPack.mode_guozhan.gz_tadun = ['male', 'qun', 4, ['reluanzhan']]
                lib.characterPack.mode_guozhan.gz_zhangji = ["male", "qun", 4, ["xinfu_lveming", "xinfu_tunjun"],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_tw_zhangmancheng = ['male', 'qun', 4, ["jl_guanlei", "jl_leiming"]]
                lib.characterPack.mode_guozhan.gz_haomeng = ['male', 'qun', 4, ['gz_xiongmang']]
                lib.characterPack.mode_guozhan.gz_zhangheng = ['male', 'qun', 4, ['dangzai', 'liangjue']]
                lib.characterPack.mode_guozhan.gz_liangxing = ['male', 'qun', 4, ['nslulve']]
                lib.characterPack.mode_guozhan.gz_gaogan = ['male', 'qun', 4, ['gz_juguan']]
                lib.characterPack.mode_guozhan.gz_yuejiu = ['male', 'qun', 3, ['gz_cuijin']]
                lib.characterPack.mode_guozhan.gz_zhangning = ['female', 'qun', 3, ['nsfuzhou'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhangling = ['male', 'qun', 3, ['zlhuji'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_lingju = ['female', 'qun', 3, ['jieyuan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_licaiwei = ['female', 'qun', 3, ['qibie']]
                lib.characterPack.mode_guozhan.gz_re_pangdegong = ['male', 'qun', 3, ['heqia', 'yinyi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_simahui = ["male", "qun", 3, ["xinfu_chenghao", "gz_yinshi"]]
                lib.characterPack.mode_guozhan.gz_tongyuan = ['male', 'qun', 4, ['chaofeng']]
                lib.characterPack.mode_guozhan.gz_yuantan = ['male', 'qun', 4, ['gz_dikai', 'gz_zhengsi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhangqiying = ["female", "qun", 3, ["gz_dianhua", "gz_zhenyi"],
                    ['gzskin']
                ]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // lib.characterPack.mode_guozhan.gz_,['gzskin']]
                // 晋
            }

            // 添加 DIY 武将
            if (config.diys) {
                // 野心家

                // 双势力

                // 魏
                lib.characterPack.mode_guozhan.gz_diy_zaozhirenjun = ['male', 'wei', 4, ['liangce', 'diyjuntun']]
                lib.characterPack.mode_guozhan.gz_ns_chentai = ['male', 'wei', 4, ['chezhen', 'youzhan']]
                lib.characterPack.mode_guozhan.gz_ns_caimao = ['male', 'wei', 4, ['nsdingzhou'],
                    ['doublegroup:wei:han']
                ]
                lib.characterPack.mode_guozhan.gz_zm_zhaoang = ["male", "wei", 3, ["zmfenji"]]
                lib.characterPack.mode_guozhan.gz_diy_liufu = ['male', 'wei', 3, ['zhucheng']]
                lib.characterPack.mode_guozhan.gz_diy_hanlong = ['male', 'wei', 4, ['siji', 'gz_ciqiu']]
                // lib.characterPack.mode_guozhan.gz_3d8_qianzhao = ["male", "wei", 4, ["yuanzhen3d8", "zhirong3d8"]]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]



                // 蜀
                lib.characterPack.mode_guozhan.gz_diy_xizhenxihong = ['male', 'shu', 4, ['fuchou', 'jinyan']]
                lib.characterPack.mode_guozhan.gz_zm_ehuan = ["male", "shu", 4, ["zmxueji"]]
                lib.characterPack.mode_guozhan.gz_zm_liuxian = ["male", "shu", 4, ["zmmengpo"],
                    ['doublegroup:shu:han']
                ]
                lib.characterPack.mode_guozhan.gz_feishi = ['male', 'shu', 3, ['gz_shuaiyan', 'moshou'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_jl_xianglang = ["male", 'shu', 3, ["jl_cangshu", "jl_kanwu"]]
                // lib.characterPack.mode_guozhan.gz_3d8_lihui = ["male", "shu", 4, ["xiazhi3d8", "pingshi3d8"]]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]

                // 吴
                lib.characterPack.mode_guozhan.gz_liulveliuping = ['male', 'wu', 4, ['kangyin'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zhangxiang = ['male', 'wu', 4, ['gz_guolie'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zm_sunjing = ["male", "wu", 4, ["zmzhenxiang"]]
                lib.characterPack.mode_guozhan.gz_zm_sunyu = ["male", "wu", 3, ["zmhongyuan", "zmfujiang"]]
                lib.characterPack.mode_guozhan.gz_zm_huzong = ["male", "wu", 3, ["zmwengao", "jl_weifeng"]]
                // lib.characterPack.mode_guozhan.gz_3d8_sp_lvju = ["male", "wu", 4, ["zhiqu3d8", "sisheng3d8"]]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]


                // 群
                lib.characterPack.mode_guozhan.gz_yuanxiyuanshang = ['male', 'qun', 4, ['nsshengyan', 'nsdaizhan'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_zm_huzhen = ["male", "qun", 4, ["zmbaoluan", "zmmozhong"],
                    ["des:胡轸（zhěn），字文才，东汉末年董卓部将。192年，董卓死，李傕反叛，王允遣胡轸、徐荣在新丰对战李傕，徐荣战死、胡轸率众投降。《魏书》记载，他在诬死游殷一个月后，被游殷的魂魄索命而死去。"]
                ]
                lib.characterPack.mode_guozhan.gz_zm_zhangyan = ["male", "qun", 4, ["zmfeiyan"]]
                lib.characterPack.mode_guozhan.gz_ns_duangui = ['male', 'han', 3, ['gz_jianning', 'gz_changshi']]
                lib.characterPack.mode_guozhan.gz_zm_chenggongying = ["male", "qun", 3, ["zmpingxi", "zmwangzhi"]]
                // lib.characterPack.mode_guozhan.gz_3d8_gongsundu = ["male", "qun", 4, ["baliao3d8", "chailve3d8"]]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]


                // 汉
                lib.characterPack.mode_guozhan.gz_zm_wuanguo = ["male", "han", 4, ["gz_nuchui"],
                    ['des:武安国字霸候，是历史小说《三国演义》中虚构的一位人物，是北海太守孔融的部将，兵器为一把长柄铁锤，虎牢关被吕布一戟斩断手腕。']
                ]
                // lib.characterPack.mode_guozhan.gz_3d8_liuchong = ["male", "han", 4, ["jinggou3d8", "moyan3d8"]]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]


                // 晋
                lib.characterPack.mode_guozhan.gz_yangdao = ['male', 'jin', 3, ['nsqingde', 'nsyidi'],
                    ['gzskin']
                ]
                lib.characterPack.mode_guozhan.gz_3d8_ruanji = ["male", "jin", 3, ["shinan3d8"]] //, "yinling3d8"]]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
                // lib.characterPack.mode_guozhan.gz_ ]
            }

            // 添加神将
            if (config.shenjiang) {
                // 野心家
                // 双势力
                // 魏
                // 蜀
                // 吴
                // 群
                // 汉
                lib.characterPack.mode_guozhan.gz_shen_xunyu = ['male', 'shen', 3, ['gz_lingce', 'dinghan'],
                    ['han']
                ]
                // 晋
            }

            // 武将包内容
            lib.characterSort.mode_guozhan.junzheng1 = [
                // 野心家
                // 双势力
                'gz_wangji', 'gz_qiaozhou', 'gz_wuyan',
                // 魏
                'gz_tianyu', 'gz_jiakui', 'gz_qinghegongzhu', 'gz_caorui',
                'gz_guohuanghou', 'gz_caoang', 'gz_caoanmin', 'gz_caoxiu', 'gz_wangling',
                'gz_wangyi', 'gz_duxi', 'gz_yuanhuan', 'gz_hanhaoshihuan', 'gz_caozhi',
                // 蜀
                'gz_zhugezhan', 'gz_furong', 'gz_fuqian', 'gz_baosanniang',
                'gz_sp_huaman', 'gz_guanzhang', 'gz_liuchen', 'gz_liucheng', 'gz_maliang',
                'gz_wuban', 'gz_xiangchong', // 'gz_liaohua', 'gz_chendao',
                // 吴
                'gz_fanjiangzhangda', 'gz_qiaogong', 'gz_yufan', 'gz_chengpu',
                'gz_sunliang', 'gz_sunhao', 'gz_quancong', 'gz_sunluban',
                'gz_panshu', 'gz_panzhangmazhong', 'gz_sunyi', 'gz_zhouchu',
                // 群
                'gz_xurong', 'gz_quyi', 'gz_zhaozhong', 'gz_chendeng', 'gz_duanwei',
                'gz_hanmeng', 'gz_liuxie', 'gz_fuhuanghou', 'gz_gongsunzan', 'gz_xinping',
                // 晋
                'gz_wenyang', 'gz_xinchang', 'gz_xuangongzhu', 'gz_zuofen', 'gz_yangyan',
                'gz_yangzhi', 'gz_jin_jiachong', 'gz_peixiu', 'gz_jin_yanghu', 'gz_simafu',
                'gz_luzhi',
            ]
            lib.characterSort.mode_guozhan.junzheng2 = [
                // 野心家
                // 双势力
                // 魏
                'gz_caojinyu', 'gz_dufuren', 'gz_heyan', 'gz_chengyu',
                'gz_zhangchunhua', 'gz_caochun', 'gz_caozhang', 'gz_guohuai',
                'gz_wenpin', 'gz_wangshuang', 'gz_litong',
                // 蜀
                'gz_dongyun', 'gz_liyan', 'gz_wuxian', 'gz_xiahoushi',
                'gz_yangyi', 'gz_zhaoxiang', 'gz_guanping', 'gz_leitong',
                'gz_yanyan', 'gz_wuyi', 'gz_guanyinping',
                // 吴
                'gz_zhaoyan', 'gz_weiwenzhugezhi', 'gz_handang', 'gz_zhuran',
                'gz_kanze', 'gz_sunru', 'gz_sunxiu', 'gz_xushi',
                'gz_zhuzhi', // 'gz_zhugejin', 'gz_zumao',
                // 群
                'gz_caifuren', 'gz_liubiao', 'gz_jushou', 'gz_guotufengji',
                'gz_nashime', 'gz_shenpei', 'gz_yanpu', 'gz_caoxing', 'gz_huaxiong',
                'gz_zhangmiao', 'gz_zhujun',
                // 晋
                'gz_xinpi', 'gz_xinxianying',
            ]
            lib.characterSort.mode_guozhan.junzheng3 = [
                // 野心家
                'gz_liuyan',
                // 双势力
                // 魏
                'gz_niujin', 'gz_caoshuang', 'gz_caozhen', 'gz_haozhao', 'gz_lvqian',
                'gz_guanqiujian', 'gz_sunziliufang', 'gz_caoying', 'gz_chenlin',
                'gz_manchong', 'gz_zhongyao', 'gz_xizhicai', // 'gz_yangxiu',
                // 蜀
                'gz_zhangyì', 'gz_zhangyi', 'gz_guansuo', 'gz_mayunlu', 'gz_zhoucang',
                'gz_huojun', 'gz_sp_yangwan', 'gz_zhangxingcai', 'gz_sunqian', 'gz_mizhu',
                'gz_huanghao', 'gz_huangquan', 'gz_zhangsong',
                // 吴
                'gz_liuzan', 'gz_luotong', 'gz_zhuhuan', 'gz_sundeng', 'gz_lvdai',
                'gz_heqi', 'gz_sunluyu', 'gz_sunhanhua', 'gz_bulianshi', 'gz_cenhun',
                'gz_xuezong', 'gz_guyong', 'gz_zhoufei',
                // 群
                'gz_hansui', 'gz_gaolan', 'gz_gaoshun', 'gz_huangfusong', 'gz_hejin',
                'gz_dingyuan', 'gz_dongcheng', 'gz_chengong', 'gz_zhangrang', 'gz_liru',
                'gz_lisu', 'gz_taoqian', 'gz_liuzhang',
                // 晋
                'gz_zhanghu', 'gz_caizhenji',
            ]
            lib.characterSort.mode_guozhan.junzheng4 = [
                // 野心家
                // 双势力
                'gz_caiyong',
                // 魏
                'gz_zhugedan', 'gz_guanlu', 'gz_liuye', 'gz_sp_wangcan', 'gz_duji',
                'gz_ruanyu', 'gz_guozhao', 'gz_caochong', 'gz_tw_caozhao',
                'gz_wanglang',
                // 蜀
                'gz_liufeng', 'gz_mazhong', 'gz_puyuan', 'gz_jianyong', 'gz_qinmi',
                'gz_lvkai', 'gz_yiji', 'gz_sp_chenzhen', 'gz_wulan', 'gz_xujing',
                // 吴
                'gz_xugong', 'gz_zhoufang', 'gz_gexuan', 'gz_buzhi', 'gz_yanjun',
                'gz_luji', 'gz_sp_zhangwen', 'gz_sunshao', 'gz_caobuxing', 'gz_wufan',
                // 群
                'gz_tw_liuhong', 'gz_fanchou', 'gz_fengfangnv', 'gz_yl_luzhi',
                'gz_zhangbao', 'gz_wangyun', 'gz_yangbiao', 'gz_hanfu', 'gz_caojie',
                // 晋
                'gz_simalang',
            ]
            lib.characterSort.mode_guozhan.junzheng5 = [
                // 野心家
                // 双势力
                // 魏
                'gz_caomao', 'gz_chenqun', 'gz_caosong', 'gz_kuailiangkuaiyue',
                'gz_tw_wangchang',
                // 蜀
                'gz_zhugeguo', 'gz_liuyong', 'gz_hujinding', 'gz_fanyufeng',
                'gz_huoyi', 'gz_zhouqun',
                // 吴
                'gz_tengyin', 'gz_wu_pangtong', 'gz_tengfanglan', 'gz_tw_puyangxing',
                'gz_tenggongzhu', 'gz_zhangti',
                // 群
                'gz_liubian', 'gz_tangji', 'gz_huangjinleishi', 'gz_zhangzhongjing',
                // 晋
                'gz_jin_guohuai',
            ]
            lib.characterSort.mode_guozhan.junzheng6 = [
                // 野心家
                // 双势力
                // 魏
                // 蜀
                // 吴
                // 汉
                'gz_wangrong', 'gz_liuyu', 'gz_sp_jiben', 'gz_liuyao', 'gz_mamidi',
                'gz_xushao', 'gz_xingdaorong', 'gz_wanniangongzhu', 'gz_ns_wangyue',
                // 群
                'gz_zhangliang', 'gz_cheliji', 'gz_chunyuqiong', 'gz_dongbai', 'gz_hucheer',
                'gz_gongsunkang', 'gz_lvkuanglvxiang', 'gz_mayuanyi', 'gz_yanfuren',
                'gz_qiuliju', 'gz_tadun', 'gz_zhangji', 'gz_tw_zhangmancheng', 'gz_haomeng',
                'gz_zhangheng', 'gz_liangxing', 'gz_gaogan', 'gz_yuejiu', 'gz_zhangning',
                'gz_zhangling', 'gz_lingju', 'gz_licaiwei', 'gz_re_pangdegong', 'gz_simahui',
                'gz_tongyuan', 'gz_yuantan', 'gz_zhangqiying'
                // 晋
            ]
            lib.characterSort.mode_guozhan.diy1 = [
                // 野心家
                // 双势力
                // 魏
                'gz_diy_zaozhirenjun', 'gz_ns_chentai', 'gz_ns_caimao', 'gz_zm_zhaoang',
                'gz_diy_liufu', 'gz_diy_hanlong', 'gz_3d8_qianzhao',
                // 蜀
                'gz_diy_xizhenxihong', 'gz_zm_ehuan', 'gz_zm_liuxian', 'gz_feishi',
                'gz_jl_xianglang', 'gz_3d8_lihui',
                // 吴
                'gz_liulveliuping', 'gz_zhangxiang', 'gz_zm_sunjing', 'gz_zm_sunyu',
                'gz_zm_huzong', 'gz_3d8_sp_lvju',
                // 群
                'gz_yuanxiyuanshang', 'gz_zm_huzhen', 'gz_zm_zhangyan', 'gz_ns_duangui',
                'gz_zm_chenggongying', 'gz_3d8_gongsundu',
                // 汉
                'gz_zm_wuanguo', 'gz_3d8_liuchong',
                // 晋
                'gz_yangdao', 'gz_3d8_ruanji',
            ]
            lib.characterSort.mode_guozhan.shenjiang1 = [
                // 野心家
                // 双势力
                // 魏
                // 蜀
                // 吴
                // 群
                // 汉
                'gz_shen_xunyu'
                // 晋
            ]
            // lib.characterSort.mode_guozhan.packname = [
            //     // 野心家
            //     // 双势力
            //     // 魏
            //     // 蜀
            //     // 吴
            //     // 群
            //     // 汉
            //     // 晋
            // ]

            // 武将包翻译
            lib.translate.han = '汉';
            lib.translate.han2 = '汉朝';
            lib.translate.junzheng1 = '军争一扩';
            lib.translate.junzheng2 = '军争二扩';
            lib.translate.junzheng3 = '军争三扩';
            lib.translate.junzheng4 = '军争四扩';
            lib.translate.junzheng5 = '军争五扩';
            lib.translate.junzheng6 = '军争六扩';
            lib.translate.diy1 = 'DIY一扩';
            lib.translate.shenjiang1 = '神将一扩';
            // lib.translate. = '';
            // lib.translate. = '';
            // lib.translate. = '';

            // 武将翻译
            // 野心家
            // 双势力
            // 魏
            lib.translate.gz_sp_wangcan = '王粲';
            lib.translate.gz_zm_zhaoang = '赵昂';
            lib.translate.gz_3d8_qianzhao = '牵招';
            // lib.translate. = '';
            // lib.translate. = '';
            // lib.translate. = '';
            // lib.translate. = '';

            // 蜀
            lib.translate.gz_baosanniang = '鲍三娘';
            lib.translate.gz_yangyi = '杨仪';
            lib.translate.gz_huangquan = '黄权';
            lib.translate.gz_huojun = '霍峻';
            lib.translate.gz_guanzhang = '关兴张苞';
            lib.translate.gz_yiji = '伊籍';
            lib.translate.gz_sp_huaman = '花鬘';
            lib.translate.gz_zm_ehuan = '鄂焕';
            lib.translate.gz_zm_liuxian = '刘贤';
            lib.translate.gz_feishi = '费诗';
            lib.translate.gz_jl_xianglang = '向朗';
            lib.translate.gz_huoyi = '霍弋';
            lib.translate.gz_3d8_lihui = '李恢';
            // lib.translate. = '';
            // lib.translate. = '';
            // lib.translate. = '';
            // lib.translate. = '';

            // 吴
            lib.translate.gz_sunyi = '孙翊';
            lib.translate.gz_kanze = '阚泽';
            lib.translate.gz_liuzan = '留赞';
            lib.translate.gz_sunluyu = '孙鲁育';
            lib.translate.gz_liulveliuping = '留略留平';
            lib.translate.gz_sp_zhangwen = '张温';
            lib.translate.gz_wu_pangtong = '庞统';
            lib.translate.gz_zhangxiang = '张象';
            lib.translate.gz_zm_sunjing = '孙静';
            lib.translate.gz_zm_sunyu = '孙瑜';
            lib.translate.gz_zm_huzong = '胡综';
            lib.translate.gz_tw_puyangxing = '濮阳兴';
            lib.translate.gz_zhangti = '张悌';
            lib.translate.gz_3d8_sp_lvju = '吕据';
            // lib.translate. = '';
            // lib.translate. = '';

            // 群
            lib.translate.gz_chendeng = '陈登';
            lib.translate.gz_quyi = '麹义';
            lib.translate.gz_jushou = '沮授';
            lib.translate.gz_dingyuan = '丁原';
            lib.translate.gz_dongcheng = '董承';
            lib.translate.gz_taoqian = '陶谦';
            lib.translate.gz_liru = '李儒';
            lib.translate.gz_fengfangnv = '冯妤';
            lib.translate.gz_zhangbao = '张宝';
            lib.translate.gz_yuanxiyuanshang = '袁熙袁尚';
            lib.translate.gz_zm_huzhen = '胡轸';
            lib.translate.gz_zm_zhangyan = '张燕';
            lib.translate.gz_zm_chenggongying = '成公英';
            lib.translate.gz_dongbai = '董白';
            lib.translate.gz_yuantan = '袁谭';
            lib.translate.gz_gaolan = '高览';
            lib.translate.gz_3d8_gongsundu = '公孙度';
            // lib.translate. = '';
            // lib.translate. = '';
            // lib.translate. = '';


            // 汉
            lib.translate.gz_tw_liuhong = '刘宏';
            lib.translate.gz_3d8_liuchong = '刘宠';
            lib.translate.gz_sp_jiben = '吉本';
            lib.translate.gz_zm_wuanguo = '武安国';
            // lib.translate. = '';
            // lib.translate. = '';
            // lib.translate. = '';
            // lib.translate. = '';
            // lib.translate. = '';
            // lib.translate. = '';

            // 晋
            lib.translate.gz_xinxianying = '辛宪英';
            lib.translate.gz_yangdao = '羊衜';
            lib.translate.gz_3d8_ruanji = '阮籍';
            // lib.translate. = '';
            // lib.translate. = '';
            // lib.translate. = '';
            // lib.translate. = '';


            // 珠联璧合（名称去掉 gz_ 前缀）
            // 野心家
            lib.perfectPair.simazhao = [
                'simayi', 'jin_simayi', 'zhangchunhua', 'jin_zhangchunhua',
                'jin_simashi', 'jin_wangyuanji',
            ]
            lib.perfectPair.gongsunyuan = ['3d8_gongsundu', 'gongsunkang']
            lib.perfectPair.liuyan = ['liuzhang', 'zhanglu']


            // 双势力
            lib.perfectPair.wangji = ['jin_simashi', 'jin_simazhao', 'simazhao']
            lib.perfectPair.caiyong = ['caiwenji', 'caizhenji']

            // 魏
            lib.perfectPair.caocao = ['caosong', 'caoang', 'caoanmin', 'caopi', 'caozhang', 'caozhi', 'caochong', 'caozhen', 'chengyu']
            lib.perfectPair.caopi = ['guozhao', 'caomao', 'jiakui']
            lib.perfectPair.caorui = ['zhenji', 'guohuanghou', 'guanqiujian']
            lib.perfectPair.caoang = ['caoanmin', 'qinghegongzhu']
            lib.perfectPair.caoxiu = ['caohong', 'tw_caozhao']
            lib.perfectPair.caojinyu = ['dufuren', 'heyan']
            lib.perfectPair.caochun = ['caoren']
            lib.perfectPair.caozhang = ['bianfuren']
            lib.perfectPair.niujin = ['caoren']
            lib.perfectPair.caozhen = ['caoshuang']
            lib.perfectPair.zhongyao = ['zhonghui', 'zhangchangpu']
            lib.perfectPair.chenlin = ['sp_wangcan', 'ruanyu']
            lib.perfectPair.sp_wangcan = ['ruanyu']
            lib.perfectPair.guozhao = ['zhangchunhua']
            lib.perfectPair.zaozhirenjun = ['dengai', 'hanhaoshihuan']
            lib.perfectPair.chenqun = ['ns_chentai']
            lib.perfectPair.zm_zhaoang = ['wangyi']
            lib.perfectPair.tianyu = ['3d8_qianzhao']
            lib.perfectPair.qinghegongzhu = ['caoang']
            lib.perfectPair.qinghegongzhu = ['caoang']


            // 蜀
            lib.perfectPair.liubei = ['liuchen', 'liuyong', 'wuxian', 'liufeng', 'mizhu', 'fazheng']
            lib.perfectPair.liushan = ['zhangxingcai', 'liuchen', 'liuyong']
            lib.perfectPair.zhugeliang = ['zhugezhan', 'zhugeguo', 'puyuan', 'mazhong']
            lib.perfectPair.huangyueying = ['zhugezhan', 'zhugeguo']
            lib.perfectPair.zhugezhan = ['zhugeguo']
            lib.perfectPair.guanyu = ['hujinding', 'guanping', 'guansuo', 'guanyinping', 'guanzhang', 'zhoucang']
            lib.perfectPair.guanping = ['guanzhang', 'guansuo', 'guanyinping']
            lib.perfectPair.guansuo = ['hujinding', 'baosanniang', 'sp_huaman', 'guanzhang']
            lib.perfectPair.zhangfei = ['xiahoushi', 'guanzhang', 'zhangxingcai']
            lib.perfectPair.xiahoushi = ['xiahouba', 'zhangxingcai']
            lib.perfectPair.zhaoyun = ['mayunlu', 'fanyufeng', 'zhaoxiang', 'guanyinping', 'chendao']
            lib.perfectPair.machao = ['sp_yangwan', 'mayunlu']
            lib.perfectPair.liucheng = ['huangzhong']
            lib.perfectPair.liaohua = ['huangzhong', 'yanyan']
            lib.perfectPair.maliang = ['masu']
            lib.perfectPair.wuban = ['wuxian']
            lib.perfectPair.wuxian = ['wuyi']
            lib.perfectPair.zhaoxiang = ['guanping', 'mayunlu', 'zhaotongzhaoguang']
            lib.perfectPair.zhangyi = ['jiangwei']
            lib.perfectPair.zhangsong = ['fazheng', 'mengda']
            lib.perfectPair.mizhu = ['mifangfushiren', 'mifuren']
            lib.perfectPair.menghuo = ['zhurong', 'sp_huaman']
            lib.perfectPair.jl_xianglang = ['xiangchong']
            lib.perfectPair.furong = ['fuqian']
            lib.perfectPair.huojun = ['huoyi']
            lib.perfectPair.wuban = ['wuxian']
            lib.perfectPair.wuban = ['wuxian']
            lib.perfectPair.wuban = ['wuxian']
            lib.perfectPair.wuban = ['wuxian']
            lib.perfectPair.wuban = ['wuxian']
            lib.perfectPair.wuban = ['wuxian']
            lib.perfectPair.wuban = ['wuxian']


            // 吴
            lib.perfectPair.sunjian = ['zm_sunjing', 'handang', 'zumao', 'sunru']
            lib.perfectPair.sunce = ['zhouyu', 'sunyi']
            lib.perfectPair.zm_sunjing = ['zm_sunyu']
            lib.perfectPair.sunyi = ['xushi']
            lib.perfectPair.zhouyu = ['zhouyi', 'zhoufei', 'lusu', 'wu_pangtong']
            lib.perfectPair.qiaogong = ['daqiao', 'xiaoqiao']
            lib.perfectPair.sunquan = ['bulianshi', 'zhaoyan', 'panshu', 'sundeng', 'lvmeng']
            lib.perfectPair.quancong = ['sunluban']
            lib.perfectPair.panshu = ['sunliang']
            lib.perfectPair.chengpu = ['dingfeng']
            lib.perfectPair.yufan = ['lvmeng']
            lib.perfectPair.zhuzhi = ['zhuran']
            lib.perfectPair.sunxiu = ['sunliang']
            lib.perfectPair.zhugejin = ['zhugeke']
            lib.perfectPair.sundeng = ['zhoufei', 'zhugeke']
            lib.perfectPair.bulianshi = ['sunluban', 'sunluyu', 'buzhi']
            lib.perfectPair.zhoufei = ['xiaoqiao']
            lib.perfectPair.sunhao = ['tengfanglan', 'cenhun']
            lib.perfectPair.guyong = ['zhangzhang']
            lib.perfectPair.zhoufang = ['zhouchu']
            lib.perfectPair.yanjun = ['buzhi', 'zhugejin']
            lib.perfectPair.wufan = ['caobuxing']
            lib.perfectPair.luji = ['luyusheng']
            lib.perfectPair.liuzan = ['liulveliuping']
            lib.perfectPair.tengyin = ['tenggongzhu']
            lib.perfectPair.lvfan = ['3d8_sp_lvju']
            lib.perfectPair.sunyi = ['sunce']
            lib.perfectPair.sunyi = ['sunce']
            lib.perfectPair.sunyi = ['sunce']


            // 群
            lib.perfectPair.zhangjiao = ['zhangbao', 'zhangliang', 'zhangning']
            lib.perfectPair.zhangbao = ['zhangliang', 'zhangning']
            lib.perfectPair.zhangliang = ['zhangning']
            lib.perfectPair.yuanshao = ['yuantan', 'yuanxiyuanshang']
            lib.perfectPair.nashime = ['beimihu']
            lib.perfectPair.shenpei = ['guotufengji']
            lib.perfectPair.zhujun = ['huangfusong', 'yl_luzhi']
            lib.perfectPair.huangfusong = ['yl_luzhi']
            lib.perfectPair.hansui = ['mateng', 'zm_chenggongying']
            lib.perfectPair.lvbu = ['yanfuren', 'lvlingqi', 'lingju', 'gaoshun', 'chengong']
            lib.perfectPair.lvlingqi = ['yanfuren', 'diaochan', 'lingju']
            lib.perfectPair.diaochan = ['lingju']
            lib.perfectPair.liuzhang = ['liuyan']
            lib.perfectPair.sp_dongzhuo = ['liru', 'lisu']
            lib.perfectPair.fuwan = ['fuhuanghou']
            lib.perfectPair.yuanshu = ['fengfangnv']
            lib.perfectPair.zhangrang = ['zhaozhong', 'ns_duangui']
            lib.perfectPair.dongcheng = ['sp_jiben']
            lib.perfectPair.zhangxiu = ['jiaxu', 'hucheer', 'tongyuan', 'zoushi']
            lib.perfectPair.jiaxu = ['hucheer']
            lib.perfectPair.qiuliju = ['tadun']
            lib.perfectPair.zhangling = ['zhanglu', 'zhangqiying']
            lib.perfectPair.zhanglu = ['zhangqiying', 'yanpu']
            lib.perfectPair.pangde = ['licaiwei']
            lib.perfectPair.re_pangdegong = ['simahui']
            lib.perfectPair.huatuo = ['zhangzhongjing']
            lib.perfectPair.gongsunkang = ['3d8_gongsundu']
            lib.perfectPair.hanmeng = ['yuanshao']
            lib.perfectPair.hanmeng = ['yuanshao']
            lib.perfectPair.hanmeng = ['yuanshao']
            lib.perfectPair.hanmeng = ['yuanshao']
            lib.perfectPair.hanmeng = ['yuanshao']


            // 汉
            lib.perfectPair.tw_liuhong = ['hetaihou', 'wangrong', 'liuxie', 'liubian', 'wanniangongzhu']
            lib.perfectPair.hetaihou = ['hejin', 'liubian']
            lib.perfectPair.liubian = ['tangji', 'wanniangongzhu']
            lib.perfectPair.liuxie = ['fuhuanghou', 'caojie', 'wangrong', 'wanniangongzhu']
            lib.perfectPair.liubiao = ['caifuren']
            lib.perfectPair.kongrong = ['zm_wuanguo']
            lib.perfectPair.kongrong = ['zm_wuanguo']
            lib.perfectPair.kongrong = ['zm_wuanguo']
            lib.perfectPair.kongrong = ['zm_wuanguo']
            lib.perfectPair.kongrong = ['zm_wuanguo']
            lib.perfectPair.kongrong = ['zm_wuanguo']
            lib.perfectPair.kongrong = ['zm_wuanguo']
            lib.perfectPair.kongrong = ['zm_wuanguo']
            lib.perfectPair.kongrong = ['zm_wuanguo']
            lib.perfectPair.kongrong = ['zm_wuanguo']
            lib.perfectPair.kongrong = ['zm_wuanguo']


            // 晋
            lib.perfectPair.jin_simayi = ['jin_zhangchunhua', 'jin_simashi', 'jin_simazhao', 'simafu', 'xuangongzhu']
            lib.perfectPair.jin_simashi = ['jin_xiahouhui', 'jin_yanghuiyu']
            lib.perfectPair.jin_simazhao = ['jin_wangyuanji']
            lib.perfectPair.jin_yanghu = ['duyu', 'yanghuiyu']
            lib.perfectPair.yangyan = ['yangzhi']
            lib.perfectPair.xinpi = ['xinxianying', 'xinchang']
            lib.perfectPair.caizhenji = ['yanghu', 'yanghuiyu']
            lib.perfectPair.duyu = ['xuangongzhu']
            lib.perfectPair.yangdao = ['jin_yanghu', 'jin_yanghuiyu']
            lib.perfectPair.jin_jiachong = ['jin_guohuai']
            lib.perfectPair.yangyan = ['yangzhi']
            lib.perfectPair.yangyan = ['yangzhi']
            lib.perfectPair.yangyan = ['yangzhi']
            lib.perfectPair.yangyan = ['yangzhi']
            lib.perfectPair.yangyan = ['yangzhi']
        },
        precontent: function () {

        },
        config: {},
        help: {},
        package: {
            character: {
                character: {},
                translate: {},
            },
            card: {
                card: {},
                translate: {
                    longfeizhen_info: '弃置围攻你的角色各一张牌，然后摸一张牌',
                    qixingzhen_info: '令我方所有角色进入围攻状态',
                    shepanzhen_info: '令我方所有角色进入队列状态',
                    yunchuizhen_info: '令所有围攻角色获得技能【无双】，直到其首次造成伤害',
                    fengyangzhen_info: '令所有被围攻角色获得技能【飞影】，直到其首次受到伤害',
                    pozhenjue_info: '将所有角色的顺序随机重排',
                },
                list: [],
            },
            skill: {
                // 武将技能
                skill: {
                    // guanping
                    gz_jiezhong: {
                        audio: 'jiezhong',
                        trigger: {
                            player: "phaseZhunbeiBegin",
                        },
                        limited: true,
                        skillAnimation: true,
                        animationColor: 'orange',
                        filter: function (event, player) {
                            return player.countCards('h') < player.maxHp;
                        },
                        content: function () {
                            player.awakenSkill('gz_jiezhong');
                            player.draw(Math.min(5, player.maxHp - player.countCards('h')));
                        },
                    },
                    // lihui
                    xiazhi3d8: {
                        audio: "jlsg_zhige",
                        group: ["xiazhi3d8_before", "xiazhi3d8_after"],
                        trigger: {
                            global: "phaseBegin"
                        },
                        preHidden: true,
                        check: function (event, player) {
                            return get.attitude(player, event.player) < 0 || get.attitude(player, event.player) >= 3;
                        },
                        logTarget: "player",
                        filter: function (event, player) {
                            if (player.hasSkill("xiazhi3d82")) return false;
                            return event.player != player;
                        },
                        content: function () {
                            "step 0"
                            player.storage.xiazhi3d8_after = true;
                            player.addTempSkill("xiazhi3d82", "roundStart");
                            var controls = player.storage.xiazhi3d8;
                            if (trigger.player.countCards("he") < 2) controls.remove("将两张牌置于牌堆顶");
                            player.chooseControl(function (event, player) {
                                var att = get.attitude(player, trigger.player);
                                var judges = trigger.player.getCards('j');
                                if (att >= 0) {
                                    if (trigger.player.countCards("he") >= 2 && trigger.player.countCards("he") >= trigger.player.hp && !player.hasWuxie() && judges.length > 0) {
                                        if (judges[0].name == 'lebu' || (judges.length > 1 && judges[1].name == 'lebu')) return "选项三";
                                    }
                                    return "选项一";
                                } else if (trigger.player.countCards("he") >= 2 && trigger.player.countCards("he") >= trigger.player.hp && !player.hasWuxie() && judges.length > 0) {
                                    if (judges[0].name == 'lebu' || (judges.length > 1 && judges[1].name == 'lebu')) return "选项二";
                                } else if (trigger.player.hp <= 3) return "选项二";
                                else if (trigger.player.countCards("he") >= 2) return "选项三";
                                return "选项二";
                            }).set("prompt", "辖治：请选择令" + get.translation(trigger.player) + "执行一项").set("choiceList", controls);
                            "step 1"
                            if (result.control == "选项一") {
                                player.storage.xiazhi3d8.remove("摸两张牌");
                                trigger.player.draw(2);
                                event.finish();
                            }
                            if (result.control == "选项二") {
                                player.storage.xiazhi3d8.remove("失去1点体力");
                                trigger.player.loseHp();
                                event.finish();
                            }
                            if (result.control == "选项三") {
                                player.storage.xiazhi3d8.remove("将两张牌置于牌堆顶");
                                trigger.player.chooseCard("he", true, 2, "将两张牌置于牌堆顶，先点击者在上").set('ai', function (card) {
                                    var judges = trigger.player.getCards('j');
                                    if (judges.length > 0) {
                                        var judge = get.judge(judges[0]);
                                        if (ui.selected.cards.length == 0) return judge(card);
                                        if (judges.length > 1 && ui.selected.cards.length == 1) {
                                            var judge1 = get.judge(judges[1]);
                                            return judge1(card);
                                        }
                                    }
                                    return 10 - get.value(card);
                                });
                            }
                            "step 2"
                            if (result.bool) {
                                event.cards = result.cards.slice(0);
                                trigger.player.lose(event.cards, ui.special);
                            }
                            "step 3"
                            for (var i = event.cards.length - 1; i >= 0; i--) {
                                event.cards[i].fix();
                                ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
                            }
                            game.log(trigger.player, "将两张牌置于牌堆顶");
                        },
                        ai: {
                            expose: 0.2,
                            threaten: 1.6,
                        },
                        subSkill: {
                            before: {
                                trigger: {
                                    global: "phaseBefore"
                                },
                                popup: false,
                                forced: true,
                                firstDo: true,
                                content: function () {
                                    player.storage.xiazhi3d8 = ["摸两张牌", "失去1点体力", "将两张牌置于牌堆顶"];
                                }
                            },
                            after: {
                                trigger: {
                                    global: "phaseEnd"
                                },
                                popup: false,
                                forced: true,
                                firstDo: true,
                                filter: function (event, player) {
                                    return player.storage.xiazhi3d8_after == true;
                                },
                                content: function () {
                                    "step 0"
                                    delete player.storage.xiazhi3d8_after;
                                    if (player.getHistory("gain").length == 0 && player.getHistory("lose").length == 0) {
                                        player.removeSkill("xiazhi3d82");
                                        var controls = player.storage.xiazhi3d8;
                                        if (player.countCards("he") < 2) controls.remove("将两张牌置于牌堆顶");
                                        trigger.player.line(player);
                                        trigger.player.chooseControl(controls).set("prompt", "请选择令" + get.translation(player) + "执行一项").ai = function () {
                                            var att = get.attitude(trigger.player, player);
                                            if (att < 0 && controls.contains("失去1点体力")) return "失去1点体力";
                                            else if (att < 0 && controls.contains("将两张牌置于牌堆顶")) return "将两张牌置于牌堆顶";
                                            else if (controls.contains("摸两张牌")) return "摸两张牌";
                                            else if (controls.contains("将两张牌置于牌堆顶")) return "将两张牌置于牌堆顶";
                                            else if (controls.contains("失去1点体力")) return "失去1点体力";
                                        }
                                    } else event.finish();
                                    "step 1"
                                    game.log(player, "重置了“辖治”");
                                    if (result.control == "摸两张牌") {
                                        player.draw(2);
                                        event.finish();
                                    }
                                    if (result.control == "失去1点体力") {
                                        player.loseHp();
                                        event.finish();
                                    }
                                    if (result.control == "将两张牌置于牌堆顶") {
                                        player.chooseCard("he", true, 2, "将两张牌置于牌堆顶，先点击者在上").set('ai', function (card) {
                                            var next = _status.currentPhase.next;
                                            var judges = next.getCards('j');
                                            var att = get.attitude(player, next);
                                            if (att < 0) {
                                                if (judges.length > 0) {
                                                    var judge = get.judge(judges[0]);
                                                    if (ui.selected.cards.length == 0) return -judge(card);
                                                    if (judges.length > 1 && ui.selected.cards.length == 1) {
                                                        var judge1 = get.judge(judges[1]);
                                                        return -judge1(card);
                                                    }
                                                    return 10 - get.value(card);
                                                }
                                                return 10 - get.value(card);
                                            }
                                            if (att == 0) return 10 - get.value(card);
                                            if (judges.length > 0) {
                                                var judge = get.judge(judges[0]);
                                                if (ui.selected.cards.length == 0) return judge(card);
                                                if (judges.length > 1 && ui.selected.cards.length == 1) {
                                                    var judge1 = get.judge(judges[1]);
                                                    return judge1(card);
                                                }
                                                return get.value(card);
                                            }
                                            return get.value(card);
                                        });
                                    }
                                    "step 2"
                                    if (result.bool) {
                                        event.cards = result.cards.slice(0);
                                        player.lose(event.cards, ui.special);
                                    }
                                    "step 3"
                                    for (var i = event.cards.length - 1; i >= 0; i--) {
                                        event.cards[i].fix();
                                        ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
                                    }
                                    game.log(player, "将两张牌置于牌堆顶");
                                }
                            }
                        }
                    },
                    xiazhi3d82: {},
                    pingshi3d8: {
                        audio: "jlsg_yanxi",
                        group: ["pingshi3d8_change", "pingshi3d8_before"],
                        preHidden: true,
                        trigger: {
                            global: "phaseEnd"
                        },
                        filter: function (event, player) {
                            if (player.storage.pingshi3d8.length < 2) return false;
                            var flag = 0;
                            for (var i = 0; i < game.players.length; i++) {
                                if (player.storage.pingshi3d8.contains(game.players[i]) && game.players[i].isDamaged()) flag++;
                            }
                            return flag > 0;
                        },
                        direct: true,
                        content: function () {
                            "step 0"
                            player.chooseTarget(get.prompt("pingshi3d8"), "令一名角色回复1点体力", function (card, player, target) {
                                return target.isDamaged() && player.storage.pingshi3d8.contains(target);
                            }).set("ai", function (target) {
                                var player = _status.event.player;
                                return get.recoverEffect(target, player, player);
                            });
                            "step 1"
                            if (result.bool) {
                                var target = result.targets[0];
                                player.logSkill("pingshi3d8", target);
                                target.recover();
                            }
                        },
                        subSkill: {
                            change: {
                                trigger: {
                                    global: "changeHp"
                                },
                                forced: true,
                                popup: false,
                                content: function () {
                                    player.storage.pingshi3d8.add(trigger.player);
                                }
                            },
                            before: {
                                trigger: {
                                    global: "phaseBefore"
                                },
                                forced: true,
                                popup: false,
                                content: function () {
                                    player.storage.pingshi3d8 = [];
                                }
                            }
                        }
                    },
                    // huoyi
                    zmyihua: {
                        audio: 'twsidai',
                        enable: "phaseUse",
                        usable: 1,
                        filter: function (event, player) {
                            return game.hasPlayer(function (current) {
                                return current != player && current.countCards('h');
                            });
                        },
                        filterTarget: function (card, player, target) {
                            return player != target && target.countCards('h');
                        },
                        content: function () {
                            'step 0'
                            event.card = target.getCards('h').randomGet();
                            target.showCards(event.card);
                            'step 1'
                            if (get.type(event.card, 'trick') == 'basic') {
                                player.chooseCard('he').ai = function (card) {
                                    var att = get.attitude(player, target);
                                    var value = get.value(event.card);
                                    if (att > 2) return value + 6 - get.value(card);
                                    return value - get.value(card);;
                                };
                            }
                            if (get.type(event.card, 'trick') == 'equip') {
                                target.damage();
                                event.finish();
                            }
                            if (get.type(event.card, 'trick') == 'trick') {
                                target.discard(event.card);
                                player.chooseToDiscard('he', true);
                                event.finish();
                            }
                            'step 2'
                            if (!result.bool) event.finish();
                            else {
                                player.give(result.cards, target);
                                target.give(event.card, player);
                            }
                        },
                        ai: {
                            order: 8,
                            result: {
                                player: function (player, target) {
                                    return 1;
                                },
                                target: function (player, target) {
                                    if (target.countCards('h') == 1) return -1.5;
                                    return -0.5;
                                },
                            },
                        },
                    },
                    // zongyu
                    gz_zyqiao: {
                        audio: 'zyqiao',
                        trigger: {
                            target: 'useCardToTargeted'
                        },
                        logTarget: 'player',
                        preHidden: true,
                        filter: function (event, player) {
                            var source = event.player;
                            if (source == player) return false;
                            if (source.isFriendOf(player)) return false;
                            return source.countDiscardableCards(player, 'he') > 0 && player.countCards('he') > 0;
                        },
                        check: function (event, player) {
                            var target = event.player;
                            if (get.attitude(player, target) >= 0) return false;
                            if (!player.countCards('he', function (card) {
                                    return lib.filter.cardDiscardable(card, player, 'gz_zyqiao');
                                })) return true;
                            if (player.countCards('he', (card) => get.value(card, player) < 5)) return true;
                            if (target.countCards('he', (card) => get.value(card, target) > 6) && player.countCards('he', (card) => get.value(card, player) < 7)) return true;
                            return false;
                        },
                        content: function () {
                            'step 0'
                            player.chooseToDiscard('he', true);
                            'step 1'
                            player.discardPlayerCard(trigger.player, true, 'he');
                        },
                    },
                    // weiyan
                    gz_qimou: {
                        unique: true,
                        limited: true,
                        audio: 'qimou',
                        enable: 'phaseUse',
                        filter: function (event, player) {
                            return !player.storage.gz_qimou;
                        },
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_qimou');
                            player.storage.gz_qimou == false
                        },
                        mark: true,
                        intro: {
                            content: 'limited'
                        },
                        skillAnimation: true,
                        animationColor: 'orange',
                        content: function () {
                            'step 0'
                            var shas = player.getCards('h', 'sha');
                            var num;
                            if (player.hp >= 4 && shas.length >= 3) {
                                num = 3;
                            } else if (player.hp >= 3 && shas.length >= 2) {
                                num = 2;
                            } else {
                                num = 1
                            }
                            var map = {};
                            var list = [];
                            for (var i = 1; i <= player.hp; i++) {
                                var cn = get.cnNumber(i, true);
                                map[cn] = i;
                                list.push(cn);
                            }
                            event.map = map;
                            player.awakenSkill('gz_qimou');
                            player.storage.gz_qimou = true;
                            player.chooseControl(list, function () {
                                return get.cnNumber(_status.event.goon, true);
                            }).set('prompt', '失去任意点体力').set('goon', num);
                            'step 1'
                            var num = event.map[result.control] || 1;
                            player.storage.gz_qimou2 = num;
                            player.loseHp(num);
                            player.addTempSkill('gz_qimou2');
                        },
                        ai: {
                            order: 2,
                            result: {
                                player: function (player) {
                                    if (player.hp == 1) return 0;
                                    var shas = player.getCards('h', 'sha');
                                    if (!shas.length) return 0;
                                    var card = shas[0];
                                    if (!lib.filter.cardEnabled(card, player)) return 0;
                                    if (lib.filter.cardUsable(card, player)) return 0;
                                    var mindist;
                                    if (player.hp >= 4 && shas.length >= 3) {
                                        mindist = 4;
                                    } else if (player.hp >= 3 && shas.length >= 2) {
                                        mindist = 3;
                                    } else {
                                        mindist = 2;
                                    }
                                    if (game.hasPlayer(function (current) {
                                            return (current.hp <= mindist - 1 &&
                                                get.distance(player, current, 'attack') <= mindist &&
                                                player.canUse(card, current, false) &&
                                                get.effect(current, card, player, player) > 0);
                                        })) {
                                        return 1;
                                    }
                                    return 0;
                                }
                            }
                        }
                    },
                    gz_qimou2: {
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_qimou2')
                        },
                        onremove: true,
                        mod: {
                            cardUsable: function (card, player, num) {
                                if (typeof player.storage.gz_qimou2 == 'number' && card.name == 'sha') {
                                    return num + player.storage.gz_qimou2;
                                }
                            },
                            globalFrom: function (from, to, distance) {
                                if (typeof from.storage.gz_qimou2 == 'number') {
                                    return distance - from.storage.gz_qimou2;
                                }
                            }
                        }
                    },
                    // fanyufeng
                    zmdiewu: {
                        audio: 'bazhan',
                        enable: "phaseUse",
                        usable: 1,
                        filterTarget: function (card, player, target) {
                            return !target.hasSkill('zmdiewu2') && target != player;
                        },
                        filter: function (event, player) {
                            return player.countCards('he');
                        },
                        discard: false,
                        prepare: "give",
                        filterCard: true,
                        position: "he",
                        content: function () {
                            target.gain(cards, player);
                            target.storage.zmdiewu3 = cards[0];
                            target.storage.zmdiewu2 = player;
                            target.addTempSkill('zmdiewu2', {
                                player: 'phaseAfter'
                            });
                            target.markSkillCharacter('zmdiewu', player, '蝶舞', '你可以将“蝶舞”牌当作一张【杀】或【闪】使用或打出');
                            player.draw();
                        },
                        check: function (card) {
                            return 8 - get.value(card);
                        },
                        ai: {
                            order: 3,
                            result: {
                                target: function (player, target) {
                                    if (!target.hasSha() || !target.hasShan()) return 2;
                                    return 1;
                                },
                            },
                        },
                    },
                    zmdiewu2: {
                        onremove: function (player) {
                            player.unmarkSkill('zmdiewu');
                            delete player.storage.zmdiewu2;
                            delete player.storage.zmdiewu3;
                        },
                        trigger: {
                            player: "loseEnd",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return event.cards.contains(player.storage.zmdiewu3);
                        },
                        content: function () {
                            player.removeSkill('zmdiewu2');
                        },
                        group: ["zmdiewu22", "zmdiewu23"],
                    },
                    zmdiewu22: {
                        trigger: {
                            player: "chooseToRespondBegin",
                        },
                        filter: function (event, player) {
                            if (event.responded) return false;
                            if (!event.filterCard({
                                    name: 'shan'
                                }, player, event) && !event.filterCard({
                                    name: 'sha'
                                }, player, event)) return false;
                            return player.storage.zmdiewu3 && player.storage.zmdiewu2.isIn();
                        },
                        content: function () {
                            "step 0"
                            player.discard(player.storage.zmdiewu3);
                            "step 1"
                            trigger.untrigger();
                            trigger.responded = true;
                            if (trigger.filterCard({
                                    name: 'shan',
                                    isCard: false
                                })) {
                                trigger.result = {
                                    bool: true,
                                    card: {
                                        name: 'shan',
                                        isCard: false
                                    }
                                }
                            } else {
                                trigger.result = {
                                    bool: true,
                                    card: {
                                        name: 'sha',
                                        isCard: false
                                    }
                                }
                            }
                        },
                        ai: {
                            effect: {
                                target: function (card, player, target, effect) {
                                    if (get.tag(card, 'respondShan')) return 0.7;
                                    if (get.tag(card, 'respondSha')) return 0.7;
                                },
                            },
                        },
                    },
                    zmdiewu23: {
                        enable: "chooseToUse",
                        filter: function (event, player) {
                            if (!player.storage.zmdiewu3) return false;
                            if (!player.storage.zmdiewu2.isIn()) return false;
                            return event.filterCard({
                                name: 'sha'
                            }, player, event) || event.filterCard({
                                name: 'shan'
                            }, player, event);
                        },
                        chooseButton: {
                            dialog: function (event, player) {
                                var list = [];
                                if (event.filterCard({
                                        name: 'sha'
                                    }, player, event)) {
                                    list.push(['基本', '', 'sha']);
                                    list.push(['基本', '', 'sha', 'fire']);
                                    list.push(['基本', '', 'sha', 'thunder']);
                                }
                                if (event.filterCard({
                                        name: 'shan'
                                    }, player, event)) {
                                    list.push(['基本', '', 'shan']);
                                }
                                return ui.create.dialog('蝶舞', [list, 'vcard'], 'hidden');
                            },
                            check: function (button) {
                                var player = _status.event.player;
                                var card = {
                                    name: button.link[2],
                                    nature: button.link[3]
                                };
                                if (card.name == 'sha') {
                                    if (card.nature == 'fire') return 2.95;
                                    else if (card.nature == 'fire') return 2.92;
                                    else return 2.9;
                                } else if (card.name == 'shan') {
                                    return 4;
                                }
                                return 0;
                            },
                            backup: function (links, player) {
                                return {
                                    filterCard: function () {
                                        return false
                                    },
                                    viewAs: {
                                        name: links[0][2],
                                        nature: links[0][3],
                                        isCard: false
                                    },
                                    selectCard: -1,
                                    popname: true,
                                    log: false,
                                    precontent: function () {
                                        player.discard(player.storage.zmdiewu3);
                                    },
                                }
                            },
                            prompt: function (links, player) {
                                return '选择' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '的目标';
                            },
                        },
                        ai: {
                            order: 12,
                            respondShan: true,
                            respondSha: true,
                            result: {
                                player: function (player) {
                                    return 10;
                                },
                            },
                        },
                    },
                    zmmuyun: {
                        audio: 'jiaoying',
                        trigger: {
                            global: ["useCardAfter", "respondAfter"],
                        },
                        filter: function (event, player) {
                            if (event.card.isCard) return false;
                            return event.card && event.player.isAlive();
                        },
                        prompt: function (event, player) {
                            var str = '是否发动【慕云】令' + get.translation(event.player) + '摸一张牌？';
                            return str;
                        },
                        check: function (event, player) {
                            if (get.attitude(player, event.player) > 0) return true;
                            return false;
                        },
                        logTarget: "player",
                        content: function () {
                            trigger.player.draw();
                        },
                    },
                    // feishi
                    gz_shuaiyan: {
                        trigger: {
                            global: 'recoverAfter'
                        },
                        filter: function (event, player) {
                            return event.player != player && _status.currentPhase != player && !player.getStorage('gz_shuaiyan').contains(event.player);
                        },
                        logTarget: 'player',
                        content: function () {
                            "step 0"
                            if (!player.storage.gz_shuaiyan) player.storage.gz_shuaiyan = [];
                            player.storage.gz_shuaiyan.push(trigger.player);
                            player.markSkill('gz_shuaiyan');
                            var att = get.attitude(trigger.player, player);
                            var bool = 0;
                            if (att < 0) {
                                if (trigger.player.countCards('e') == 0 && trigger.player.countCards('h') > 2) bool = 1;
                                else if (trigger.player.countCards('he') == 0) bool = 1;
                            } else if (att == 0 && trigger.player.countCards('he') == 0) {
                                bool = 1;
                            }
                            trigger.player.chooseControl(function () {
                                return _status.event.bool;
                            }).set('prompt', '率言').set('bool', bool).set('choiceList', ['令' + get.translation(player) + '摸一张牌', '令' + get.translation(player) + '弃置你一张牌']);
                            "step 1"
                            if (result.control == '选项一') {
                                player.draw();
                                event.finish();
                            } else if (trigger.player.countCards('he')) {
                                player.discardPlayerCard(trigger.player, true, 'he');
                            } else {
                                event.finish();
                            }
                        },
                        ai: {
                            threaten: 1.2
                        }
                    },
                    // jl_xianglang
                    jl_cangshu: {
                        audio: "cangshu",
                        trigger: {
                            global: "useCard"
                        },
                        direct: true,
                        filter: function (event, player) {
                            if (event.cards.length == 0) return false;
                            return event.player != player && get.type(event.card) == "trick" && player.countCards("h", {
                                type: "basic"
                            }) > 0;
                        },
                        content: function () {
                            "step 0"
                            player.chooseCard("是否对" + get.translation(trigger.player) + "发动藏书？<p>交给" + get.translation(trigger.player) + "1张基本牌，令" + get.translation(trigger.card) + "无效并获得之</p>", {
                                type: "basic"
                            }).ai = function (card) {
                                if (ai.get.attitude(player, trigger.player) < 0)
                                    return 10 - ai.get.value(card);
                                return 0;
                            }
                            "step 1"
                            if (result.bool) {
                                player.logSkill("jl_cangshu", trigger.player);
                                player.$give(1, trigger.player);
                                trigger.player.gain(result.cards[0]);
                                trigger.player.draw()
                                game.delay();
                            } else {
                                event.finish();
                            }
                            "step 2"
                            if (trigger.cards) {
                                player.$draw(trigger.cards);
                                player.gain(trigger.cards);
                            }
                            "step 3"
                            trigger.cancel();
                        },
                    },
                    jl_kanwu: {
                        audio: "kanwu",
                        group: ['jl_kanwu1', 'jl_kanwu2', "jl_kanwu3"],
                    },
                    jl_kanwu1: {
                        audio: "ext:民间极略:true",
                        enable: ['chooseToUse', 'chooseToRespond'],
                        filter: function (event, player) {
                            return _status.currentPhase != player && player.countCards("h", {
                                type: "trick"
                            }) > 0;
                        },
                        filterCard: function (card) {
                            return get.type(card, 'trick') == 'trick';
                        },
                        selectCard: 1,
                        viewAs: {
                            name: 'shan'
                        },
                        ai: {
                            basic: {
                                useful: [7, 2],
                                value: [7, 2],
                            },
                        },
                    },
                    jl_kanwu2: {
                        audio: "kanwu",
                        enable: ['chooseToRespond', 'chooseToUse'],
                        filter: function (event, player) {
                            return _status.currentPhase != player && player.countCards("h", {
                                type: "trick"
                            }) > 0;
                        },
                        filterCard: function (card) {
                            return get.type(card, 'trick') == 'trick';
                        },
                        selectCard: 1,
                        viewAs: {
                            name: 'tao'
                        },
                        ai: {
                            basic: {
                                order: function (card, player) {
                                    if (player.hasSkillTag('pretao')) return 5;
                                    return 2;
                                },
                                useful: [8, 6.5, 5, 4],
                                value: [8, 6.5, 5, 4],
                            },
                            result: {
                                target: function (player, target) {
                                    if (player == target && player.hp <= 0) return 2;
                                    var nd = player.needsToDiscard();
                                    var keep = false;
                                    if (nd <= 0) {
                                        keep = true;
                                    } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                        keep = true;
                                    }
                                    var mode = get.mode();
                                    if (target.hp >= 2 && keep && target.hasFriend()) {
                                        if (target.hp > 2 || nd == 0) return 0;
                                        if (target.hp == 2) {
                                            if (game.hasPlayer(function (current) {
                                                    if (target != current && get.attitude(target, current) >= 3) {
                                                        if (current.hp <= 1) return true;
                                                        if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                    }
                                                })) {
                                                return 0;
                                            }
                                        }
                                    }
                                    if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                    var att = get.attitude(player, target);
                                    if (att < 3 && att >= 0 && player != target) return 0;
                                    var tri = _status.event.getTrigger();
                                    if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                        if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                            var num = game.countPlayer(function (current) {
                                                if (current.identity == 'fan') {
                                                    return current.countCards('h', 'tao');
                                                }
                                            });
                                            if (num > 1 && player == target) return 2;
                                            return 0;
                                        }
                                    }
                                    if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                        if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                            return 0;
                                        }
                                    }
                                    if (mode == 'stone' && target.isMin() &&
                                        player != target && tri && tri.name == 'dying' && player.side == target.side &&
                                        tri.source != target.getEnemy()) {
                                        return 0;
                                    }
                                    return 2;
                                },
                            },
                            tag: {
                                recover: 1,
                                save: 1,
                            },
                        },
                    },
                    jl_kanwu3: {
                        audio: "kanwu",
                        enable: ['chooseToUse', 'chooseToRespond'],
                        filter: function (event, player) {
                            return _status.currentPhase != player && player.countCards("h", {
                                type: "trick"
                            }) > 0;
                        },
                        filterCard: function (card) {
                            return get.type(card, 'trick') == 'trick';
                        },
                        selectCard: 1,
                        viewAs: {
                            name: 'sha'
                        },
                        ai: {
                            basic: {
                                useful: [5, 1],
                                value: [5, 1],
                            },
                            order: function () {
                                if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                return 3;
                            },
                            result: {
                                target: function (player, target) {
                                    if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                        if (get.attitude(player, target) > 0) {
                                            return -6;
                                        } else {
                                            return -3;
                                        }
                                    }
                                    return -1.5;
                                },
                            },
                            tag: {
                                respond: 1,
                                respondShan: 1,
                                damage: function (card) {
                                    if (card.nature == 'poison') return;
                                    return 1;
                                },
                                natureDamage: function (card) {
                                    if (card.nature) return 1;
                                },
                                fireDamage: function (card, nature) {
                                    if (card.nature == 'fire') return 1;
                                },
                                thunderDamage: function (card, nature) {
                                    if (card.nature == 'thunder') return 1;
                                },
                                poisonDamage: function (card, nature) {
                                    if (card.nature == 'poison') return 1;
                                },
                            },
                        },
                    },
                    // liuxian
                    zmmengpo: {
                        enable: "phaseUse",
                        usable: 1,
                        filter: function (event, player) {
                            var hs = player.getCards('he');
                            if (!hs.length) return false;
                            for (var i = 0; i < hs.length; i++) {
                                var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                if (mod2 === false) return false;
                            }
                            return true;
                        },
                        filterTarget: function (card, player, target) {
                            return player != target && player.canUse({
                                name: 'sha'
                            }, target);
                        },
                        position: "he",
                        filterCard: true,
                        check: function (card) {
                            return 6 - get.value(card);
                        },
                        content: function () {
                            player.addTempSkill('zmmengpo2');
                            player.useCard({
                                name: 'sha',
                                isCard: true
                            }, target, false);
                        },
                        ai: {
                            order: 6,
                            result: {
                                target: function (player, target) {
                                    if (!target.countCards('h', 'shan')) return -5;
                                    return -1;
                                },
                            },
                        },
                    },
                    zmmengpo2: {
                        trigger: {
                            player: "useCard",
                        },
                        silent: true,
                        forced: true,
                        popup: false,
                        onremove: function (player) {
                            player.removeSkill('zmmengpo3');
                        },
                        filter: function (event, player) {
                            var evt = event.getParent(2);
                            return evt.skill == 'zmmengpo';
                        },
                        content: function () {
                            player.storage.zmmengpo2 = trigger.card;
                        },
                        group: ["zmmengpo2_reset", "zmmengpo2_damage"],
                        subSkill: {
                            damage: {
                                trigger: {
                                    source: "damage",
                                },
                                silent: true,
                                forced: true,
                                popup: false,
                                filter: function (event, player) {
                                    return player.storage.zmmengpo2 && event.card == player.storage.zmmengpo2;
                                },
                                content: function () {
                                    player.addTempSkill('zmmengpo3');
                                },
                                sub: true,
                            },
                            reset: {
                                trigger: {
                                    player: "useCardAfter",
                                },
                                forced: true,
                                silent: true,
                                popup: false,
                                filter: function (event, player) {
                                    return player.storage.zmmengpo2 && event.card == player.storage.zmmengpo2;
                                },
                                content: function () {
                                    'step 0'
                                    if (!player.hasSkill('zmmengpo3')) {
                                        player.chooseControl().set('choiceList', [
                                            '摸一张牌',
                                            '视为再使用一张【杀】',
                                        ]).set('ai', function () {
                                            var player = _status.event.player;
                                            if (player.countCards('h') < 2) return 0;
                                            return 1;
                                        });
                                    } else event.goto(2);
                                    'step 1'
                                    if (result.index == 0) {
                                        player.draw();
                                    } else if (result.index == 1) {
                                        player.chooseUseTarget({
                                            name: 'sha'
                                        }, false, true);
                                    }
                                    'step 2'
                                    delete player.storage.zmmengpo2;
                                    player.removeSkill('zmmengpo2');
                                },
                                sub: true,
                            },
                        },
                    },
                    zmmengpo3: {},
                    // ehuan
                    zmxueji: {
                        enable: "phaseUse",
                        usable: 1,
                        filterCard: true,
                        selectCard: -1,
                        filter: function (event, player) {
                            var hs = player.getCards('h');
                            if (!hs.length) return false;
                            for (var i = 0; i < hs.length; i++) {
                                var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                if (mod2 === false) return false;
                            }
                            return true;
                        },
                        complexCard: true,
                        complexSelect: true,
                        selectTarget: function () {
                            return [1, Math.min(ui.selected.cards.length, 3)];
                        },
                        filterTarget: function (card, player, target) {
                            return lib.filter.targetEnabled({
                                name: 'sha'
                            }, player, target);
                        },
                        viewAs: {
                            name: 'sha',
                            isCard: true
                        },
                        group: "zmxueji2",
                        ai: {
                            damage: true,
                            order: 6,
                            effect: {
                                player: function (card, player, target) {
                                    if (_status.event.skill == 'zmxueji') {
                                        if (player.countCards('h') > 3 || target.getEquip('tengjia')) return 'zeroplayertarget';
                                        if (player.countCards('h', 'tao')) return 'zeroplayertarget';
                                    }
                                },
                            },
                            basic: {
                                useful: [5, 1],
                                value: [5, 1],
                            },
                            result: {
                                target: function (player, target, card, isLink) {
                                    if (!isLink && player.hasSkill('jiu') && !target.hasSkillTag('filterDamage', null, {
                                            player: player,
                                            card: card,
                                            jiu: true,
                                        })) {
                                        if (get.attitude(player, target) > 0) {
                                            return -7;
                                        } else {
                                            return -4;
                                        }
                                    }
                                    return -1.5;
                                },
                            },
                            tag: {
                                respond: 1,
                                respondShan: 1,
                                damage: function (card) {
                                    if (card.nature == 'poison') return;
                                    return 1;
                                },
                                natureDamage: function (card) {
                                    if (card.nature) return 1;
                                },
                                fireDamage: function (card, nature) {
                                    if (card.nature == 'fire') return 1;
                                },
                                thunderDamage: function (card, nature) {
                                    if (card.nature == 'thunder') return 1;
                                },
                                poisonDamage: function (card, nature) {
                                    if (card.nature == 'poison') return 1;
                                },
                            },
                        },
                    },
                    zmxueji2: {
                        trigger: {
                            player: "damageAfter",
                            source: "damageAfter",
                        },
                        forced: true,
                        popup: false,
                        filter: function (event, player) {
                            return event.parent.skill == 'zmxueji';
                        },
                        content: function () {
                            player.draw();
                        },
                    },
                    // zhugeguo
                    gz_qirang: {
                        audio: 'qirang',
                        trigger: {
                            player: 'equipEnd'
                        },
                        frequent: true,
                        content: function () {
                            var card = get.cardPile(function (card) {
                                return get.type(card, 'trick') == 'trick';
                            });
                            if (card) {
                                var next = player.gain(card, 'gain2');
                                if (get.type(card) == 'trick') next.gaintag.add('qirang');
                            }
                        },
                        ai: {
                            effect: {
                                target: function (card, player, target, current) {
                                    if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                }
                            },
                            threaten: 1.3
                        },
                    },
                    // liuyong
                    gz_zhuning: {
                        audio: 'zhuning',
                        enable: 'phaseUse',
                        usable: 1,
                        filter: function (event, player) {
                            if (!player.countCards('he')) return false;
                            return !player.getStat('skill').gz_zhuning;
                        },
                        filterCard: true,
                        position: 'he',
                        filterTarget: lib.filter.notMe,
                        selectCard: [1, Infinity],
                        delay: false,
                        lose: false,
                        discard: false,
                        check: function (card) {
                            if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                            if (!ui.selected.cards.length && card.name == 'du') return 20;
                            var player = get.owner(card);
                            if (ui.selected.cards.length >= Math.max(1, player.countCards('h') - player.hp)) return 0;
                            return 10 - get.value(card);
                        },
                        content: function () {
                            'step 0'
                            target.gain(cards, player, 'giveAuto').gaintag.add('fengxiang_tag');
                            'step 1'
                            var list = [];
                            for (var name of lib.inpile) {
                                var type = get.type(name);
                                if (type != 'basic' && type != 'trick') continue;
                                var card = {
                                    name: name,
                                    isCard: true
                                };
                                if (get.tag(card, 'damage') > 0 && player.hasUseTarget(card)) {
                                    list.push([type, '', name]);
                                }
                                if (name == 'sha') {
                                    for (var i of lib.inpile_nature) {
                                        card.nature = i;
                                        if (player.hasUseTarget(card)) list.push([type, '', name, i]);
                                    }
                                }
                            }
                            if (list.length) {
                                player.chooseButton(['是否视为使用一张伤害牌？', [list, 'vcard']]).set('ai', function (button) {
                                    return _status.event.player.getUseValue({
                                        name: button.link[2]
                                    });
                                });
                            } else event.finish();
                            'step 2'
                            if (result.bool) {
                                player.chooseUseTarget({
                                    name: result.links[0][2],
                                    nature: result.links[0][3],
                                    isCard: true
                                }, true, false);
                            } else event.finish();
                        },
                        ai: {
                            fireAttack: true,
                            order: 4,
                            result: {
                                target: function (player, target) {
                                    if (target.hasSkillTag('nogain')) return 0;
                                    if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                        if (target.hasSkillTag('nodu')) return 0;
                                        return -10;
                                    }
                                    if (target.hasJudge('lebu')) return 0;
                                    var nh = target.countCards('h');
                                    var np = player.countCards('h');
                                    if (player.hp == player.maxHp || player.storage.rerende < 0 || player.countCards('h') <= 1) {
                                        if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                                    }
                                    return Math.max(1, 5 - nh);
                                }
                            },
                        }
                    },
                    // guanyu
                    gz_nuzhan: {
                        audio: 'nuzhan',
                        trigger: {
                            player: 'useCard1'
                        },
                        forced: true,
                        popup: false,
                        silent: true,
                        firstDo: true,
                        filter: function (event, player) {
                            return event.card && event.card.name == 'sha' && event.cards &&
                                event.cards.length == 1 && get.type(event.cards[0]) == 'equip';
                        },
                        content: function () {
                            trigger.baseDamage++;
                        }
                    },
                    // baosanniang
                    gz_rezhennan: {
                        audio: 'xinfu_zhennan',
                        trigger: {
                            target: 'useCardToTargeted'
                        },
                        filter: function (event, player) {
                            return event.player != player && event.targets && event.targets.length && event.targets.length > event.player.hp;
                        },
                        direct: true,
                        content: function () {
                            'step 0'
                            var next = player.chooseToDiscard(get.prompt('gz_rezhennan', trigger.player), '弃置2张牌并对其造成1点伤害', 'he', 2);
                            next.set('logSkill', ['gz_rezhennan', trigger.player]);
                            next.set('ai', function (card) {
                                var player = _status.event.player;
                                var target = _status.event.getTrigger().player;
                                if (get.damageEffect(target, player, player) > 0) return 7 - get.value(card);
                                return -1;
                            });
                            'step 1'
                            if (result.bool) trigger.player.damage();
                        },
                    },
                    // jiangwei
                    gz_yizhi: {
                        viceSkill: true,
                        init: function (player) {
                            player.checkViceSkill('gz_yizhi')
                        },
                        inherit: 'guanxing',
                        filter: function (event, player) {
                            return !player.hasSkill('guanxing');
                        }
                    },
                    // chenzhen
                    gz_shameng: {
                        audio: 'shameng',
                        enable: 'phaseUse',
                        usable: 1,
                        filter: function (event, player) {
                            var hs = player.getCards('h');
                            if (hs.length < 2) return false;
                            var red = 0,
                                black = 0;
                            for (var i of hs) {
                                if (get.color(i, player) == 'red') red++;
                                else black++;
                                if (red > 1 || black > 1) return true;
                            }
                            return false;
                        },
                        complexCard: true,
                        selectCard: 2,
                        filterCard: function (card, player) {
                            if (ui.selected.cards.length) return get.color(card, player) == get.color(ui.selected.cards[0], player);
                            var color = get.color(card, player);
                            return player.countCards('h', function (cardx) {
                                return cardx != card && color == get.color(cardx, player);
                            }) > 0;
                        },
                        filterTarget: lib.filter.notMe,
                        check: function (card) {
                            return 7 - get.value(card)
                        },
                        position: 'h',
                        content: function () {
                            target.draw(2);
                            player.draw(1);
                        },
                        ai: {
                            order: 6,
                            result: {
                                target: 2
                            },
                        },
                    },
                    // puyuan
                    gz_tianjiang: {
                        audio: 'pytianjiang',
                        trigger: {
                            player: 'showCharacterAfter',
                        },
                        forced: true,
                        locked: false,
                        filter: function (event, player) {
                            return (event.name != 'phase' || game.phaseNumber == 0) && event.toShow.contains('gz_puyuan');
                        },
                        content: function () {
                            'step 0'
                            var i = 0;
                            var list = [];
                            while (i++ < 2) {
                                var card = get.cardPile(function (card) {
                                    if (get.type(card) != 'equip') return false;
                                    return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
                                });
                                if (card) list.push(card);
                            }
                            if (!list.length) {
                                event.finish();
                                return;
                            }
                            event.list = list;
                            player.gain(event.list, 'gain2');
                            'step 1'
                            game.delay(1);
                            var card = event.list.shift();
                            if (player.getCards('h').contains(card)) {
                                player.$give(card, player, false)
                                player.equip(card);
                            }
                            if (event.list.length) event.redo();
                        },
                        group: 'pytianjiang_move',
                    },
                    // mizhu
                    gz_jugu: {
                        audio: 'jugu',
                        mod: {
                            maxHandcard: function (player, num) {
                                return num + player.maxHp;
                            }
                        },
                        trigger: {
                            player: "showCharacterAfter",
                        },
                        forced: true,
                        unique: true,
                        filter: function (event, player) {
                            return (event.name != 'phase' || game.phaseNumber == 0) && event.toShow.contains('gz_mizhu');
                        },
                        content: function () {
                            player.draw(player.maxHp);
                        }
                    },
                    // yangyi
                    gz_dingcuo: {
                        trigger: {
                            player: 'damageEnd',
                        },
                        usable: 1,
                        content: function () {
                            'step 0'
                            player.draw(2);
                            'step 1'
                            if (Array.isArray(result) && result.length > 1) {
                                var color = get.color(result[0], player);
                                for (var i = 1; i < result.length; i++) {
                                    if (get.color(result[i], player) != color) {
                                        if (player.countCards('h')) player.chooseToDiscard('h', true);
                                        break;
                                    }
                                }
                            }
                        },
                    },
                    // huangquan
                    gz_dianhu: {
                        audio: 'xinfu_dianhu',
                        unique: true,
                        trigger: {
                            player: "showCharacterAfter",
                        },
                        forced: true,
                        filter: function (event) {
                            return game.players.length > 1 && (event.name != 'phase' || game.phaseNumber == 0) && event.toShow.contains('gz_huangquan');
                        },
                        content: function () {
                            'step 0'
                            player.chooseTarget('选择【点虎】的目标', lib.translate.gz_dianhu_info, true, function (card, player, target) {
                                return target != player && !target.hasSkill('gz_dianhu2');
                            }).set('ai', function (target) {
                                var att = get.attitude(_status.event.player, target);
                                if (att < 0) return -att + 3;
                                return Math.random();
                            });
                            'step 1'
                            if (result.bool) {
                                var target = result.targets[0];
                                player.line(target, 'green');
                                game.log(target, '成为了', '【点虎】', '的目标');
                                target.storage.gz_dianhu2 = player;
                                target.addTempSkill('gz_dianhu2', {
                                    player: 'die'
                                });
                            }
                        },
                    },
                    gz_dianhu2: {
                        mark: "character",
                        intro: {
                            content: "当你受到与$相同势力的角色的伤害或回复体力后，$摸一张牌",
                        },
                        nopop: true,
                        trigger: {
                            player: ["damageEnd", "recoverEnd"],
                        },
                        forced: true,
                        popup: false,
                        charlotte: true,
                        filter: function (event, player) {
                            if (player.storage.gz_dianhu2 && player.storage.gz_dianhu2.isIn()) {
                                if (event.name == 'damage') {
                                    var playerHq = player.storage.gz_dianhu2;
                                    return event.source == playerHq || event.source.isFriendOf(playerHq);
                                }
                                return true;
                            };
                        },
                        content: function () {
                            'step 0'
                            var target = player.storage.gz_dianhu2;
                            target.logSkill('gz_dianhu');
                            target.draw();
                        },
                        onremove: true,
                    },
                    // guansuo
                    gz_zhengnan: {
                        audio: 'zhengnan',
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_zhengnan')
                        },
                        trigger: {
                            global: 'dying'
                        },
                        frequent: true,
                        filter: function (event, player) {
                            return !player.storage.gz_zhengnan || !player.storage.gz_zhengnan.contains(event.player);
                        },
                        content: function () {
                            'step 0'
                            if (!player.storage.gz_zhengnan) player.storage.gz_zhengnan = [];
                            player.storage.gz_zhengnan.add(trigger.player);
                            player.storage.gz_zhengnan.sortBySeat();
                            player.markSkill('gz_zhengnan');
                            // player.recover();
                            var list = [];
                            if (!player.hasSkill('new_rewusheng')) {
                                list.push('new_rewusheng');
                            }
                            if (!player.hasSkill('xindangxian')) {
                                list.push('xindangxian');
                            }
                            if (!player.hasSkill('rezhiman')) {
                                list.push('rezhiman');
                            }
                            if (list.length) {
                                // player.draw();
                                event.list = list;
                            } else {
                                player.draw();
                                event.finish();
                            }
                            'step 1'
                            if (event.list.length == 1) event._result = {
                                control: event.list[0]
                            };
                            else player.chooseControl(event.list).set('prompt', '征南：选择获得下列技能中的一个').set('ai', function () {
                                if (event.list.contains('xindangxian')) return 'xindangxian';
                                return 0;
                            });
                            'step 2'
                            if (result.control == 'xindangxian') player.storage.xinfuli = true;
                            player.addSkill(result.control);
                            player.popup(result.control);
                            game.log(player, '获得了技能', '#g【' + get.translation(result.control) + '】');
                        },
                        ai: {
                            threaten: 1.3
                        },
                        intro: {
                            content: '已因$发动过技能',
                        },
                        derivation: ['new_rewusheng', 'xindangxian', 'rezhiman'],
                    },
                    // leitong
                    gz_kuiji: {
                        audio: 'kuiji',
                        usable: 1,
                        enable: "phaseUse",
                        filter: function (event, player) {
                            if (player.hasJudge('bingliang')) return false;
                            return player.countCards('hes', function (card) {
                                return get.color(card) == 'black' && get.type(card) == 'basic';
                            }) > 0;
                        },
                        viewAs: {
                            name: 'bingliang'
                        },
                        position: "hes",
                        filterCard: function (card, player, event) {
                            return get.color(card) == 'black' && get.type(card) == 'basic' && player.canAddJudge({
                                name: 'bingliang',
                                cards: [card]
                            });
                        },
                        selectTarget: -1,
                        filterTarget: function (card, player, target) {
                            return player == target;
                        },
                        check: function (card) {
                            return 9 - get.value(card);
                        },
                        onuse: function (links, player) {
                            var next = game.createEvent('gz_kuiji_content', false, _status.event.getParent());
                            next.player = player;
                            next.setContent(lib.skill.gz_kuiji.gz_kuiji_content);
                        },
                        gz_kuiji_content: function () {
                            'step 0'
                            player.draw();
                            'step 1'
                            player.chooseTarget('选择一名体力值最大的敌方角色，对其造成1点伤害', function (card, player, target) {
                                return target.isEnemyOf(player) && !game.hasPlayer(function (current) {
                                    return current.isEnemyOf(player) && current.hp > target.hp;
                                });
                            }).set('ai', function (target) {
                                var player = _status.event.player;
                                return get.damageEffect(target, player, player)
                            });
                            'step 2'
                            if (result.bool) {
                                var target = result.targets[0];
                                player.line(target);
                                target.damage(1);
                            }
                        },
                        ai: {
                            result: {
                                target: 1,
                            },
                            order: 12,
                        },
                        group: 'gz_kuiji_dying',
                        subSkill: {
                            dying: {
                                trigger: {
                                    global: 'dying'
                                },
                                forced: true,
                                popup: false,
                                filter: function (event, player) {
                                    var evt = event.getParent(2);
                                    if (!evt || evt.name != 'gz_kuiji_content' || evt.player != player) return false;
                                    var list = game.filterPlayer(function (current) {
                                        return current.isFriendOf(player);
                                    }).sort(function (a, b) {
                                        return a.hp - b.hp;
                                    });
                                    return (list.length == 1 || list[0].hp < list[1].hp) && list[0].isDamaged();
                                },
                                content: function () {
                                    var list = game.filterPlayer(function (current) {
                                        return current.isFriendOf(player);
                                    }).sort(function (a, b) {
                                        return a.hp - b.hp;
                                    })[0];
                                    player.logSkill('gz_kuiji', list);
                                    list.recover();
                                },
                            },
                        },
                    },
                    // huaman
                    gz_mansi: {
                        audio: 'mansi',
                        position: 'h',
                        enable: 'phaseUse',
                        usable: 1,
                        filterCard: true,
                        selectCard: -1,
                        filter: function (event, player) {
                            var hs = player.getCards('h');
                            if (!hs.length) return false;
                            for (var i = 0; i < hs.length; i++) {
                                var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                if (mod2 === false) return false;
                            }
                            return true;
                        },
                        viewAs: {
                            name: 'nanman'
                        },
                        ai: {
                            order: 0.1
                        },
                    },
                    // wuban
                    gz_jintao: {
                        mod: {
                            cardUsable: function (card, player, num) {
                                if (card.name == 'sha') return num + 1;
                            },
                            targetInRange: function (card) {
                                if (card.name == 'sha') return true;
                            },
                        },
                        audio: 'jintao',
                        trigger: {
                            player: 'useCard'
                        },
                        forced: true,
                        filter: function (event, player) {
                            if (event.card.name != 'sha') return false;
                            var evt = event.getParent('phaseUse');
                            if (!evt || evt.player != player) return false;
                            var index = player.getHistory('useCard', function (evtx) {
                                return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
                            }).indexOf(event);
                            return index == 0 || index == 1;
                        },
                        content: function () {
                            var evt = trigger.getParent('phaseUse');
                            var index = player.getHistory('useCard', function (evtx) {
                                return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
                            }).indexOf(trigger);
                            if (index == 0) {
                                // game.log(trigger.card,'伤害+1');
                                // if(typeof trigger.baseDamage!='number') trigger.baseDamage=1;
                                // trigger.baseDamage++;
                            } else {
                                game.log(trigger.card, '不可被响应');
                                trigger.directHit.addArray(game.players);
                            }
                        },
                    },
                    // fuqian
                    gz_poxiang: {
                        audio: 'poxiang',
                        enable: 'phaseUse',
                        usable: 1,
                        filter: (event, player) => player.countCards('he') > 0,
                        filterCard: true,
                        filterTarget: lib.filter.notMe,
                        position: 'he',
                        discard: false,
                        lose: false,
                        delay: false,
                        content: function () {
                            'step 0'
                            target.gain(cards, player, 'giveAuto');
                            'step 1'
                            player.loseHp();
                            'step 2'
                            player.draw(3) //.gaintag = ['gz_poxiang'];
                            player.addTempSkill('gz_poxiang_mark')
                            //player.skip('phaseDiscard');
                            game.delayx();
                        },
                        ai: {
                            order: 12,
                            result: {
                                player: 4,
                                target: 1,
                            },
                        },
                        subSkill: {
                            mark: {
                                charlotte: true,
                                onremove: function (player) {
                                    player.removeGaintag('gz_poxiang');
                                },
                                mod: {
                                    ignoredHandcard: function (card, player) {
                                        if (card.hasGaintag('gz_poxiang')) {
                                            return true;
                                        }
                                    },
                                    cardDiscardable: function (card, player, name) {
                                        if (name == 'phaseDiscard') {
                                            return false;
                                        }
                                    },
                                },
                            },
                        },
                    },
                    // qinghegongzhu
                    gz_qhzhangji: {
                        audio: 'qhzhangji',
                        trigger: {
                            global: 'phaseJieshuBegin'
                        },
                        direct: true,
                        filter: function (event, player) {
                            if (!event.player.isIn()) return false;
                            if (player.getHistory('sourceDamage').length > 0) return true;
                            if (player.getHistory('damage').length > 0) return event.player.countCards('he') > 0;
                            return false;
                        },
                        content: function () {
                            'step 0'
                            event.target = trigger.player;
                            if (player.getHistory('sourceDamage').length) player.chooseBool(get.prompt('gz_qhzhangji', event.target), '令' + get.translation(event.target) + '摸一张牌').set('choice', get.attitude(player, event.target) > 0).set('ai', () => _status.event.choice);
                            else event.goto(2);
                            'step 1'
                            if (result.bool) {
                                player.logSkill('gz_qhzhangji', target);
                                event.logged = true;
                                target.draw();
                            }
                            'step 2'
                            if (target.isIn() && target.countCards('he') > 0 && player.getHistory('damage').length > 0) player.chooseBool(get.prompt('gz_qhzhangji', event.target), '令' + get.translation(event.target) + '弃置一张牌').set('choice', get.attitude(player, event.target) < 0).set('ai', () => _status.event.choice);
                            else event.finish();
                            'step 3'
                            if (result.bool) {
                                if (!event.logged) player.logSkill('gz_qhzhangji', target);
                                target.chooseToDiscard('he', true, 1);
                            }
                        },
                    },
                    // sunce
                    gz_hunshang: {
                        skillAnimation: true,
                        animationColor: 'wood',
                        audio: "hunzi",
                        trigger: {
                            player: "phaseZhunbeiBegin",
                        },
                        filter: function (event, player) {
                            return player.hp <= 1;
                        },
                        forced: true,
                        content: function () {
                            player.addTempSkill('reyingzi', 'phaseAfter');
                            player.addTempSkill('yinghun', 'phaseAfter');
                        },
                        ai: {
                            threaten: function (player, target) {
                                if (target.hp == 1) return 2;
                                return 0.5;
                            },
                            maixie: true,
                            effect: {
                                target: function (card, player, target) {
                                    if (!target.hasFriend()) return;
                                    if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() &&
                                        _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                },
                            },
                        },
                    },
                    // cenhun
                    gz_jishe: {
                        audio: 'jishe',
                        enable: 'phaseUse',
                        filter: function (event, player) {
                            return player.getHandcardLimit() > 0;
                        },
                        init: function (player) {
                            player.storage.gz_jishe = 0;
                        },
                        // usable:20,
                        content: function () {
                            player.draw();
                            player.storage.gz_jishe++;
                        },
                        ai: {
                            order: 10,
                            result: {
                                player: function (player) {
                                    if (!player.needsToDiscard(1)) {
                                        return 1;
                                    }
                                    return 0;
                                }
                            }
                        },
                        mod: {
                            maxHandcard: function (player, num) {
                                return num - player.storage.gz_jishe;
                            }
                        },
                        group: ['gz_jishe2', 'gz_jishe3']
                    },
                    gz_jishe2: {
                        trigger: {
                            player: 'phaseAfter'
                        },
                        silent: true,
                        content: function () {
                            player.storage.gz_jishe = 0;
                        }
                    },
                    gz_jishe3: {
                        audio: 'jishe',
                        trigger: {
                            player: 'phaseJieshuBegin'
                        },
                        direct: true,
                        filter: function (event, player) {
                            if (player.countCards('h')) return false;
                            return game.hasPlayer(function (current) {
                                return !current.isLinked();
                            });
                        },
                        content: function () {
                            "step 0"
                            var num = game.countPlayer(function (current) {
                                return !current.isLinked();
                            });
                            player.chooseTarget(get.prompt('gz_jishe'), '横置至多' + get.cnNumber(Math.min(num, player.hp)) + '名未横置的角色', [1, Math.min(num, player.hp)], function (card, player, target) {
                                return !target.isLinked();
                            }).set('ai', function (target) {
                                return -get.attitude(_status.event.player, target);
                            });
                            "step 1"
                            if (result.bool) {
                                player.logSkill('gz_jishe', result.targets);
                                event.targets = result.targets;
                                event.num = 0;
                            } else {
                                event.finish();
                            }
                            "step 2"
                            if (event.num < event.targets.length) {
                                event.targets[event.num].link();
                                event.num++;
                                event.redo();
                            }
                        },
                        ai: {
                            expose: 0.3
                        }
                    },
                    // wufan
                    gz_tianyun: {
                        audio: 'tianyun',
                        trigger: {
                            global: 'phaseBegin'
                        },
                        frequent: true,
                        filter: function (event, player) {
                            return event.player.getSeatNum() == game.roundNumber && player.countCards('h') > 0;
                        },
                        content: function () {
                            'step 0'
                            var suits = [],
                                hs = player.getCards('h');
                            for (var i of hs) {
                                suits.add(get.suit(i, player));
                            }
                            var num = suits.length;
                            event.num = num;
                            var cards = get.cards(num);
                            game.cardsGotoOrdering(cards);
                            var next = player.chooseToMove();
                            next.set('list', [
                                ['牌堆顶', cards],
                                ['牌堆底'],
                            ]);
                            next.set('prompt', '天运：点击将牌移动到牌堆顶或牌堆底');
                            next.processAI = function (list) {
                                var cards = list[0][1]
                                return [
                                    [], cards
                                ];
                            }
                            'step 1'
                            var top = result.moved[0];
                            var bottom = result.moved[1];
                            top.reverse();
                            for (var i = 0; i < top.length; i++) {
                                ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                            }
                            for (i = 0; i < bottom.length; i++) {
                                ui.cardPile.appendChild(bottom[i]);
                            }
                            player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                            game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                            game.updateRoundNumber();
                            if (top.length) {
                                game.delayx();
                                event.finish();
                            }
                            'step 2'
                            player.chooseTarget('是否令一名角色摸' + get.cnNumber(num) + '张牌，然后失去1点体力？').set('', function (target) {
                                if (!_status.event.goon || target.hasSkillTag('nogain')) return 0;
                                return get.attitude(_status.event.player, target) * Math.sqrt(Math.max(1, 5 - target.getCards('h')));
                            }).set('goon', num > 1 && player.hp > 5 - num);
                            'step 3'
                            if (result.bool) {
                                var target = result.targets[0];
                                player.line(target, 'green');
                                target.draw(num);
                                player.loseHp();
                            } else game.delayx();
                        },
                        group: 'gz_tianyun_gain',
                        subSkill: {
                            gain: {
                                audio: 'tianyun',
                                trigger: {
                                    player: 'showCharacterAfter',
                                },
                                forced: true,
                                locked: false,
                                filter: function (event, player) {
                                    if (event.name == 'phase' && game.phaseNumber != 0) return false;
                                    var suits = lib.suit.slice(0),
                                        hs = player.getCards('h');
                                    for (var i of hs) {
                                        suits.remove(get.suit(i, player));
                                        if (!suits.length) return false;
                                    }
                                    return true && event.toShow.contains('gz_wufan');
                                },
                                content: function () {
                                    var suits = lib.suit.slice(0),
                                        hs = player.getCards('h');
                                    for (var i of hs) {
                                        suits.remove(get.suit(i, player));
                                    }
                                    var cards = [];
                                    for (var i of suits) {
                                        var card = get.cardPile(function (card) {
                                            return get.suit(card, false) == i;
                                        });
                                        if (card) cards.push(card);
                                    }
                                    if (cards.length) player.gain(cards, 'gain2');
                                },
                            },
                        },
                    },
                    // zhugeke
                    gz_aocai: {
                        audio: 'aocai',
                        audioname: ['gz_zhugeke'],
                        enable: ['chooseToUse', 'chooseToRespond'],
                        hiddenCard: function (player, name) {
                            if (player != _status.currentPhase && get.type(name) == 'basic' && lib.inpile.contains(name)) return true;
                        },
                        filter: function (event, player) {
                            if (event.responded || player == _status.currentPhase || event.gz_aocai) return false;
                            for (var i of lib.inpile) {
                                if (get.type(i) == 'basic' && event.filterCard({
                                        name: i
                                    }, player, event)) return true;
                            }
                            return false;
                        },
                        delay: false,
                        content: function () {
                            'step 0'
                            var evt = event.getParent(2);
                            evt.set('gz_aocai', true);
                            var cards = get.cards((player.countCards('h') == 0) ? 4 : 2);
                            for (var i = cards.length - 1; i >= 0; i--) {
                                ui.cardPile.insertBefore(cards[i].fix(), ui.cardPile.firstChild);
                            }
                            var aozhan = player.hasSkill('aozhan');
                            player.chooseButton(['傲才：选择要' + (evt.name == 'chooseToUse' ? '使用' : '打出') + '的牌', cards]).set('filterButton', function (button) {
                                return _status.event.cards.contains(button.link);
                            }).set('cards', cards.filter(function (card) {
                                if (aozhan && card.name == 'tao') {
                                    return evt.filterCard({
                                        name: 'sha',
                                        isCard: true,
                                        cards: [card],
                                    }, evt.player, evt) || evt.filterCard({
                                        name: 'shan',
                                        isCard: true,
                                        cards: [card],
                                    }, evt.player, evt);
                                }
                                return evt.filterCard(card, evt.player, evt);
                            })).set('ai', function (button) {
                                var evt = _status.event.getParent(3);
                                if (evt && evt.ai) {
                                    var tmp = _status.event;
                                    _status.event = evt;
                                    var result = (evt.ai || event.ai1)(button.link, _status.event.player, evt);
                                    _status.event = tmp;
                                    return result;
                                }
                                return 1;
                            });
                            'step 1'
                            var evt = event.getParent(2);
                            if (result.bool && result.links && result.links.length) {
                                var name = result.links[0].name,
                                    aozhan = (player.hasSkill('aozhan') && name == 'tao');
                                if (aozhan) {
                                    name = evt.filterCard({
                                        name: 'sha',
                                        isCard: true,
                                        cards: [card],
                                    }, evt.player, evt) ? 'sha' : 'shan';
                                }
                                if (evt.name == 'chooseToUse') {
                                    game.broadcastAll(function (result, name) {
                                        lib.skill.aocai_backup.viewAs = {
                                            name: name,
                                            cards: [result],
                                            isCard: true
                                        };
                                        lib.skill.aocai_backup.prompt = '选择' + get.translation(result) + '的目标';
                                    }, result.links[0], name);
                                    evt.set('_backupevent', 'aocai_backup');
                                    evt.backup('aocai_backup');
                                } else {
                                    delete evt.result.skill;
                                    delete evt.result.used;
                                    evt.result.card = get.autoViewAs(result.links[0]);
                                    if (aozhan) evt.result.card.name = name;
                                    evt.result.cards = [result.links[0]];
                                    evt.redo();
                                    return;
                                }
                            }
                            evt.goto(0);
                        },
                        ai: {
                            effect: {
                                target: function (card, player, target, effect) {
                                    if (get.tag(card, 'respondShan')) return 0.7;
                                    if (get.tag(card, 'respondSha')) return 0.7;
                                }
                            },
                            order: 11,
                            respondShan: true,
                            respondSha: true,
                            result: {
                                player: function (player) {
                                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                    return 1;
                                }
                            }
                        }
                    },
                    // luji
                    gz_huaiju: {
                        marktext: "橘",
                        intro: {
                            name: '怀橘',
                            name2: '橘',
                            content: '当前有#个“橘”',
                        },
                        audio: 'nzry_huaiju',
                        trigger: {
                            player: 'showCharacterAfter',
                        },
                        forced: true,
                        unique: true,
                        filter: function (event, player) {
                            return (event.name != 'phase' || game.phaseNumber == 0) && event.toShow.contains('gz_luji');
                        },
                        content: function () {
                            player.addMark('nzry_huaiju', 3);
                            player.addSkill('nzry_huaiju_ai');
                        },
                        group: ['tachibana_effect'],
                    },
                    // zhuhuan
                    gz_fenli: {
                        audio: 'fenli',
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_fenli')
                        },
                        group: ['gz_fenli_draw', 'gz_fenli_use', 'gz_fenli_discard'],
                        subfrequent: ['discard'],
                        subSkill: {
                            draw: {
                                audio: 'fenli',
                                trigger: {
                                    player: 'phaseDrawBefore'
                                },
                                prompt: '是否发动【奋励】跳过摸牌阶段？',
                                filter: function (event, player) {
                                    return player.isMaxHandcard();
                                },
                                check: function (event, player) {
                                    if (player.getHistory('skipped').length > 0) return false;
                                    return game.hasPlayer(function (current) {
                                        return get.attitude(player, current) < 0 && current.hp == 1 && get.damageEffect(current, player, player) > 0;
                                    });
                                },
                                content: function () {
                                    trigger.cancel();
                                }
                            },
                            use: {
                                audio: 'fenli',
                                trigger: {
                                    player: 'phaseUseBefore'
                                },
                                prompt: '是否发动【奋励】跳过出牌阶段？',
                                filter: function (event, player) {
                                    return player.isMaxHp();
                                },
                                check: function (event, player) {
                                    if (!player.needsToDiscard() || (player.countCards('e') && player.isMaxEquip())) return true;
                                    if (player.getHistory('skipped').length > 0) return false;
                                    return game.hasPlayer(function (current) {
                                        return get.attitude(player, current) < 0 && current.hp == 1 && get.damageEffect(current, player, player) > 0;
                                    });
                                },
                                content: function () {
                                    trigger.cancel();
                                }
                            },
                            discard: {
                                audio: 'fenli',
                                trigger: {
                                    player: 'phaseDiscardBefore'
                                },
                                prompt: '是否发动【奋励】跳过弃牌阶段？',
                                frequent: true,
                                filter: function (event, player) {
                                    return player.isMaxEquip() && player.countCards('e');
                                },
                                content: function () {
                                    trigger.cancel();
                                }
                            }
                        },
                        ai: {
                            combo: 'pingkou'
                        }
                    },
                    // zhouyu
                    liejiang3d8: {
                        audio: "yeyan",
                        enable: "phaseUse",
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('liejiang3d8')
                        },
                        usable: 1,
                        filter: function (event, player) {
                            if (player.countCards('h') == 0) {
                                return false;
                            }
                            var players = game.filterPlayer();
                            for (var i = 0; i < players.length; i++) {
                                if (players[i] != player && players[i].countCards("h") > 0) return true;
                            }
                            return false;
                        },
                        content: function () {
                            'step 0'
                            player.chooseTarget(get.prompt2('liejiang3d8'), true, function (card, player, target) {
                                return target != player && target.countCards('h');
                            }).set('ai', function (target) {
                                var att = get.attitude(_status.event.player, target);
                                if (att > 0) return -1;
                                if (att == 0) return 0.1;
                                return get.damageEffect(target, player, player, 'fire');
                            });
                            'step 1'
                            if (result.bool) {
                                player.line(result.targets[0], 'red');
                                event.target = result.targets[0];
                                player.chooseCard('h', true).ai = function (card) {
                                    return 20 - get.value(card);
                                };

                            }
                            'step 2'
                            if (result.bool) {
                                event.cardp = result.cards[0];
                                event.target.chooseCard('h', true).ai = function (card) {
                                    return 20 - get.value(card);
                                };
                            }
                            'step 3'
                            if (result.bool) {
                                event.cardt = result.cards[0];
                                player.showCards(event.cardp);
                                event.target.showCards(event.cardt);
                            }
                            'step 4'
                            player.$giveAuto(event.cardp, event.target);
                            event.target.gain(event.cardp, player);
                            event.target.give(event.cardt, player);
                            'step 5'
                            var suitp = get.suit(event.cardp);
                            var suitt = get.suit(event.cardt);
                            if (suitp != suitt) {
                                event.target.damage('fire', player);
                            }
                        },
                        ai: {
                            order: 1,
                            expose: 0.6,
                            threaten: 2,
                            result: {
                                player: function (player, target) {
                                    var cards = player.getCards('he');
                                    var flag = 0;
                                    for (var i = 0; i < cards.length; i++) {
                                        var card = cards[i];
                                        if (7 - get.value(card) > 0 && card.name != 'tao') flag = 1;
                                    }
                                    if (flag == 0) return -1;
                                    return 1;
                                },
                            },
                        },
                    },
                    // gz_fanjian: {
                    //     inherit: 'fanjian',
                    //     audio: 'fanjian',
                    //     mainSkill: true,
                    //     init: function (player) {
                    //         player.checkMainSkill('gz_fanjian')
                    //     }
                    // },
                    // ganning
                    gz_gnsheque: {
                        inherit: 'gnsheque',
                        audio: 'gnsheque',
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_gnsheque')
                        }
                    },
                    // sunjing
                    zmzhenxiang: {
                        trigger: {
                            player: "damageEnd",
                            source: "damageSource",
                        },
                        filter: function (event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        frequent: true,
                        content: function () {
                            'step 0'
                            _status.currentPhase.chooseControl().set('choiceList', [
                                '令' + get.translation(player) + '摸一张牌，然后可以多使用一张【杀】',
                                '令' + get.translation(player) + '弃置你的一张牌',
                            ]).set('ai', function () {
                                if (_status.currentPhase == player || get.attitude(_status.currentPhase, player) > 0) return 0;
                                if (get.attitude(_status.currentPhase, player) <= 0) {
                                    if (_status.currentPhase.countCards('h', 'sha') > 0) return 0;
                                }
                                return 1;
                            });
                            'step 1'
                            if (result.index == 0) {
                                player.draw();
                                _status.currentPhase.addTempSkill('zmzhenxiang2');
                            } else {
                                player.discardPlayerCard('he', _status.currentPhase, true);
                            }
                        },
                    },
                    zmzhenxiang2: {
                        mod: {
                            cardUsable: function (card, player, num) {
                                if (card.name == 'sha') return num + 1;
                            },
                        },
                    },
                    // lvju
                    zhiqu3d8: {
                        init: function (player) {
                            player.storage.zhiqu3d8 = 0;
                        },
                        trigger: {
                            player: "useCardAfter",
                        },
                        preHidden: true,
                        mark: true,
                        marktext: "次",
                        intro: {
                            content: function (storage, player) {
                                var num = storage;
                                if (num == 0) return '使用的下一张牌无次数限制';
                                else if (num == 1) {
                                    return '使用的下一张牌无距离限制';
                                } else {
                                    return '使用的下一张牌无目标数限制';
                                }
                            },
                        },
                        filter: function (event, player) {
                            if (player != _status.currentPhase) return false;
                            var card = event.card;
                            return get.type(card) == 'basic' || get.type(card) == 'trick';
                        },
                        direct: true,
                        content: function () {
                            'step 0'
                            if (player.hasSkill('zhiqu3d8_temp')) {
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    if (trigger.targets[i].countCards('he') > 0) trigger.targets[i].chooseToDiscard(1, 'he', true);
                                    if (player.countCards('he') > 0) trigger.targets[i].discardPlayerCard(player, 1, 'he', true);
                                }
                                player.removeSkill('zhiqu3d8_temp');
                            }
                            'step 1'
                            if (player.storage.zhiqu3d8 == 0) {
                                player.storage.zhiqu3d8 = 1;
                                player.marks.zhiqu3d8.firstChild.innerHTML = '距';
                            } else if (player.storage.zhiqu3d8 == 1) {
                                player.storage.zhiqu3d8 = 2;
                                player.marks.zhiqu3d8.firstChild.innerHTML = '数';
                            } else if (player.storage.zhiqu3d8 == 2) {
                                player.storage.zhiqu3d8 = 0;
                                player.marks.zhiqu3d8.firstChild.innerHTML = '次';
                            }
                        },
                        mod: {
                            cardUsable: function (card, player, num) {
                                if (player.hasSkill('zhiqu3d8_temp')) {
                                    if (player.storage.zhiqu3d8 >= 0 && (get.type(card) == 'basic' || get.type(card) == 'trick')) {
                                        if (card.name == 'sha' || card.name == 'jiu') return Infinity;
                                    }
                                } else {
                                    if (player.storage.zhiqu3d8 == 0 && (get.type(card) == 'basic' || get.type(card) == 'trick')) {
                                        if (card.name == 'sha' || card.name == 'jiu') return Infinity;
                                    }
                                }
                            },
                            targetInRange: function (card, player, target, now) {
                                if (player.hasSkill('zhiqu3d8_temp')) {
                                    if (player.storage.zhiqu3d8 >= 1 && (get.type(card) == 'basic' || get.type(card) == 'trick')) return true;
                                } else {
                                    if (player.storage.zhiqu3d8 == 1 && (get.type(card) == 'basic' || get.type(card) == 'trick')) return true;
                                }
                            },
                            selectTarget: function (card, player, range) {
                                if (player.storage.zhiqu3d8 == 2 && (get.type(card) == 'basic' || get.type(card) == 'trick')) {
                                    if (range[1] != -1) range[1] += Infinity;
                                }
                            },
                        },
                        // group: ["zhiqu3d8_use"],
                        // subSkill: {
                        //     use: {
                        //         enable: "phaseUse",
                        //         filter: function(event, player) {
                        //             if (player.storage.zhiqu3d8 == 0) return false;
                        //             return true;
                        //         },
                        //         content: function() {
                        //             if (player.hasSkill('zhiqu3d8_temp')) {
                        //                 player.removeSkill('zhiqu3d8_temp');
                        //             } else {
                        //                 player.addSkill('zhiqu3d8_temp');
                        //             }
                        //         },
                        //         ai: {
                        //             order: 13,
                        //             result: {
                        //                 player: function(player, target) {
                        //                     var card = null;

                        //                     var check = player.hasSkill("zhiqu3d8_temp");
                        //                     var cards = player.getCards("h");
                        //                     var order = 0;
                        //                     for (var i = 0; i < cards.length; i++) {
                        //                         if (get.order(cards[i]) > order && player.getUseValue(cards[i]) > 0 &&
                        //                             player.hasUseTarget(cards[i])) {
                        //                             order = get.order(cards[i]);
                        //                             card = cards[i];
                        //                         }
                        //                     }
                        //                     if(card == null){
                        //                         if(!check) return -1;
                        //                         return 1;
                        //                     }
                        //                     var check1 = false;
                        //                     var check2 = false;
                        //                     if (card.name == 'sha' && game.hasPlayer(function(current) {
                        //                             return get.effect(current, card, player, player) > 0 && get.attitude(player, current) < 0 &&
                        //                                 current.countCards("he") > 0;
                        //                         })) check1 = true;
                        //                     if ((card.name == 'sha' || card.name == 'shunshou') && game.hasPlayer(function(current) {
                        //                             return get.effect(current, card, player, player) > 0 && get.attitude(player, current) < 0 &&
                        //                                 current.countCards("he") > 0 && get.distance(player, current) > player.getAttackRange();
                        //                         })) check2 = true;
                        //                     if (!check) {
                        //                         if (player.storage.zhiqu3d8 == 1) {
                        //                             if (check1) return 1;
                        //                         }
                        //                         if (check1 || check2) return 1;
                        //                         return -1;
                        //                     }
                        //                     if (player.storage.zhiqu3d8 == 1) {
                        //                         if (check1) return -1;
                        //                     }
                        //                     if (check1 || check2) return -1;
                        //                     return 1;
                        //                 }
                        //             }
                        //         },
                        //         sub: true,
                        //     },
                        //     temp: {
                        //         sub: true,
                        //     },
                        // },
                    },
                    sisheng3d8: {
                        enable: "phaseUse",
                        usable: 1,
                        preHidden: true,
                        init: function (player, skill) {
                            player.storage.sisheng3d8 = 0;
                        },
                        hiddenCard: function (player, name) {
                            if (player.countCards("hes") < 3 && player.countCards("h") != 1) return false;
                            return get.type(name) == 'basic' && lib.inpile.contains(name);
                        },
                        filter: function (event, player) {
                            if (player.countCards("hes") < 3 && player.countCards("h") != 1) return false;
                            for (var i of lib.inpile) {
                                if (get.type(i) == 'basic' && event.filterCard({
                                        name: i
                                    }, player, event)) return true;
                            }
                            return false;
                        },
                        chooseButton: {
                            dialog: function (event, player) {
                                var list = [];
                                if (event.filterCard({
                                        name: 'sha'
                                    }, player, event)) {
                                    list.push(['基本', '', 'sha']);
                                    for (var j of lib.inpile_nature) {
                                        if (event.filterCard({
                                                name: "sha",
                                                nature: j
                                            }, player, event)) list.push(['基本', '', 'sha', j]);
                                    }
                                }
                                if (event.filterCard({
                                        name: 'tao'
                                    }, player, event)) {
                                    list.push(['基本', '', 'tao']);
                                }
                                if (event.filterCard({
                                        name: 'jiu'
                                    }, player, event)) {
                                    list.push(['基本', '', 'jiu']);
                                }
                                if (event.filterCard({
                                        name: 'shan'
                                    }, player, event)) {
                                    list.push(['基本', '', 'shan']);
                                }
                                return ui.create.dialog('死生', [list, 'vcard']);
                            },
                            filter: function (button, player) {
                                return _status.event.getParent().filterCard({
                                    name: button.link[2]
                                }, player, _status.event.getParent());
                            },
                            check: function (button) {
                                var player = _status.event.player;
                                var effect = player.getUseValue(button.link[2]);
                                if (effect <= 0) return 0;
                                if (player.storage.sisheng3d8 == 0) {
                                    if (player.countCards("h") == 1) return effect;
                                    if (player.countCards("hes") >= 3 && player.countCards("h") <= 3) return effect;
                                }
                                if (player.countCards('he', button.link[2]) > 0) return 0;
                                return effect;
                            },
                            backup: function (links, player) {
                                return {
                                    filterCard: function (card) {
                                        if (player.countCards("h") == 1) return get.position(card) == "h";
                                        return true;
                                    },
                                    popname: true,
                                    selectCard: function (card) {
                                        if (player.countCards("h") == 1) return -1;
                                        return 3;
                                    },
                                    ai1: function (card) {
                                        var player = _status.event.player;
                                        var evt = _status.event.getParent();
                                        var card1 = {
                                            name: links[0][2],
                                            nature: links[0][3]
                                        };
                                        if (player.storage.sisheng3d8 == 0 && player.countCards("h") == 1 && get.position(card) == "h") {
                                            return 10;
                                        }
                                        if (card.name == card1.name) return -1;
                                        if (player.countCards("h") == 1 && get.position(ui.selected.cards[0]) == 'h' &&
                                            ui.selected.cards.length == 1) return -1;
                                        if (name == 'shan') {
                                            if (player.countCards("h") == 1) return 10 - get.value(card);
                                            return 7 - get.value(card);
                                        }
                                        if (evt.type == 'dying') {
                                            if (get.attitude(player, evt.dying) < 2) return false;
                                            if (card1.name == 'jiu') return 10 - get.value(card);
                                            return 10 - get.value(card);
                                        }
                                        if (evt.type == 'phase') {
                                            var check = game.hasPlayer(function (current) {
                                                return player.canUse({
                                                        name: "sha"
                                                    }, current) &&
                                                    get.effect(current, {
                                                        name: "sha"
                                                    }, player, player) > 0;
                                            });
                                            if (card1.name == 'jiu') {
                                                if (player.countCards("h") == 1) return -1;
                                                return 5 - get.value(card);
                                            }
                                            if (game.hasPlayer(function (current) {
                                                    return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                                })) {
                                                if (card1.name == 'sha') {
                                                    if (card1.nature == 'fire') return 2.95;
                                                    else if (card1.nature == 'fire') return 2.92;
                                                    else return 2.9;
                                                } else if (card1.name == 'tao' || card1.name == 'shan') {
                                                    return 4;
                                                }
                                            }
                                            return 0;
                                        }
                                        return -1;
                                    },
                                    position: "hes",
                                    viewAs: {
                                        name: links[0][2],
                                        nature: links[0][3]
                                    },
                                    onuse: function (result, player) {
                                        // player.addTempSkill('sisheng3d8_temp','sisheng3d8_endAfter');
                                    },
                                }
                            },
                            prompt: function (links, player) {
                                if (player.countCards("h") == 1) return '将最后一张手牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                return '将三张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                            },
                        },
                        ai: {
                            fireAttack: true,
                            respondSha: true,
                            respondShan: true,
                            skillTagFilter: function (player) {
                                return player.countCards("hes") > 2 && player.countCards("h") == 1
                            },
                            order: function () {
                                var player = _status.event.player;
                                if (player.storage.sisheng3d8 == 0) {
                                    if (player.countCards("h") == 1) return 13;
                                    if (player.countCards("hes") >= 3 && player.countCards("h") <= 3) return 9;
                                }
                                return 4;
                            },
                            result: {
                                player: function (player) {
                                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                    return 1;
                                },
                            },
                        },
                        group: ["sisheng3d8_end", "sisheng3d8_clear"],
                        subSkill: {
                            end: {
                                sub: true,
                                trigger: {
                                    player: "loseAfter",
                                },
                                forced: true,
                                popup: false,
                                filter: function (event, player) {
                                    if (player.countCards('h')) return false;
                                    //if(!player.hasSkill("sisheng3d8_temp")) return false;
                                    var evtx = event.getParent();
                                    var evt = event.getl(player);
                                    return evt && evt.hs && evt.hs.length && evtx.name == "useCard" && evtx.skill == "sisheng3d8_backup";
                                },
                                content: function () {
                                    if (player.storage.sisheng3d8 == 0) {
                                        player.storage.sisheng3d8++;
                                        player.addTempSkill('sisheng3d8_draw');
                                    }
                                },
                            },
                            draw: {
                                sub: true,
                                trigger: {
                                    global: "phaseJieshuBegin",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return true;
                                },
                                content: function () {
                                    player.draw(3);
                                },
                            },
                            clear: {
                                sub: true,
                                trigger: {
                                    global: "roundStart"
                                },
                                forced: true,
                                popup: false,
                                charlotte: true,
                                content: function () {
                                    player.storage.sisheng3d8 = 0;
                                },
                            },
                            temp: {
                                sub: true,
                            },
                            backup: {
                                sub: true,
                            },
                            empty: {
                                sub: true,
                            },
                        },
                    },
                    // zhouchu
                    gz_xianghai: {
                        audio: 'xianghai',
                        global: 'gz_xianghai_g',
                        mod: {
                            cardname: function (card) {
                                if (get.type(card, null, false) == 'equip') return 'jiu';
                            },
                        },
                        ai: {
                            threaten: 2,
                        },
                    },
                    gz_xianghai_g: {
                        mod: {
                            maxHandcard: function (player, num) {
                                return num - game.countPlayer(function (current) {
                                    return !player.isFriendOf(current) && current.hasSkill('gz_xianghai');
                                });
                            },
                        },
                    },
                    // zhangti
                    biaodou3d8: {
                        audio: "jlsg_wangsi",
                        trigger: {
                            player: "useCardToPlayer",
                            target: "useCardToTarget",
                        },
                        usable: 1,
                        filter: function (event, player) {
                            if (event.card.name != "sha") return false;
                            return event.player.countCards("h") && event.target.countCards("h");
                        },
                        check: function (event, player) {
                            if (event.player == player) {
                                var player = event.player;
                                var target = event.target;
                                if (get.attitude(player, target) >= 0) return false;
                                if (!status.currentPhase == player) return false;
                                var cards = player.getCards("h");
                                var count = 0;
                                for (var i = 0; i < cards.length; i++) {
                                    var card = cards[i];
                                    if (game.hasPlayer(function (current) {
                                            return player.canUse(card, current);
                                        }) && lib.filter.cardUsable(card, player) && player.getCardUsable(card) > 0 && player.getUseValue(card) >= 0) count += 1;
                                }
                                var count_cards = player.countCards("h");
                                if (count == count_cards) return true;
                                if (!player.needsToDiscard()) return Math.random() > 1 - (count / (count_cards + 0.0));
                                return true;
                            }
                            if (get.attitude(player, event.player) >= 0) return false;
                            if (!status.currentPhase == event.player) return true;
                            var count = player.countCards("h", 'shan');
                            var count1 = player.countCards("h", 'tao') + player.countCards("h", 'jiu');
                            if (player.hp == 1) count += count1;
                            var count_cards = player.countCards("h");
                            if (count == count_cards) return true;
                            if (!event.player.needsToDiscard()) return true;
                            return Math.random() > 1 - (count / (count_cards + 0.0));
                        },
                        content: function () {
                            "step 0"
                            player.addTempSkill("biaodou3d83");
                            trigger.player.choosePlayerCard(trigger.target, "h", true);
                            "step 1"
                            if (result.bool) {
                                var card = result.cards[0];
                                trigger.player.showCards(card);
                                trigger.target.addGaintag(card, "biaodou3d8");
                                trigger.target.addTempSkill("biaodou3d82");
                                trigger.player.storage.biaodou3d82 = trigger.target;
                            }
                            "step 2"
                            trigger.target.choosePlayerCard(trigger.player, "h", true);
                            "step 3"
                            if (result.bool) {
                                var card = result.cards[0];
                                trigger.target.showCards(card);
                                trigger.player.addGaintag(card, "biaodou3d8");
                                trigger.player.addTempSkill("biaodou3d82");
                                trigger.target.storage.biaodou3d82 = trigger.player;
                            }
                        },
                        ai: {
                            presha: true,
                            skillTagFilter: function (player, tag) {
                                if (tag == 'presha') {
                                    if (player.hasSkill("biaodou3d82")) return false;
                                }
                            },
                        },
                    },
                    biaodou3d82: {
                        audio: "jlsg_wangsi",
                        mod: {
                            aiOrder: function (player, card, num) {
                                var flag = 0;
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].storage.biaodou3d8 == true) flag = 1;
                                }
                                if (get.itemtype(card) == 'card' && card.hasGaintag('biaodou3d8')) {
                                    if (flag == 0) return num + 10;
                                }
                            },
                            aiValue: function (player, card, num) {
                                var flag = 0;
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].storage.biaodou3d8 == true) flag = 1;
                                }
                                if (get.itemtype(card) == 'card' && card.hasGaintag('biaodou3d8')) {
                                    if (flag == 0) return num - 6;
                                }
                            },
                            aiUseful: function (player, card, num) {
                                var flag = 0;
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].storage.biaodou3d8 == true) flag = 1;
                                }
                                if (get.itemtype(card) == 'card' && card.hasGaintag('biaodou3d8')) {
                                    if (flag == 0) return num - 6;
                                }
                            },
                        },
                        trigger: {
                            player: "loseEnd"
                        },
                        forced: true,
                        filter: function (event, player) {
                            var flag0 = 0;
                            for (var i in event.gaintag_map) {
                                if (event.gaintag_map[i].contains('biaodou3d8')) flag0 = 1;
                            }
                            var flag = 0;
                            for (var i = 0; i < game.players.length; i++) {
                                if (game.players[i].storage.biaodou3d8 == true) flag = 1;
                            }
                            var bool = false
                            if (flag == 0 && flag0 == 1) bool = true;
                            if (bool) return true;
                            return false;
                        },
                        content: function () {
                            "step 0"
                            player.storage.biaodou3d8 = true;
                            player.draw(2);
                            var target = player.storage.biaodou3d82;
                            target.loseHp();
                            "step 1"
                            for (var i = 0; i < game.players.length; i++) {
                                if (game.players[i].hasSkill("biaodou3d82")) {
                                    game.players[i].removeSkill("biaodou3d82");
                                }
                            }
                        },
                        onremove: function (player) {
                            player.removeGaintag("biaodou3d8");
                            delete player.storage.biaodou3d8;
                            delete player.storage.biaodou3d82;
                        },
                        ai: {
                            expose: 0.2,
                            threaten: 1.3,
                            effect: {
                                player: function (card, player, target, current) {
                                    var flag = 0;
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i].storage.biaodou3d8 == true) flag = 1;
                                    }
                                    if (!card.cards) return;
                                    if (get.itemtype(card.cards[0]) == 'card' && card.cards[0].hasGaintag('biaodou3d8')) {
                                        if (flag == 0) return current + 4;
                                    }
                                },
                            },
                        },
                    },
                    biaodou3d83: {},
                    // tenggongzhu
                    gz_xingchong: {
                        audio: 'xingchong',
                        mark: true,
                        locked: false,
                        zhuanhuanji: true,
                        marktext: '☯',
                        intro: {
                            content: function (storage, player, skill) {
                                if (player.storage.gz_xingchong == true) return '一名角色于弃牌阶段外弃置牌时，你可以令其摸一张牌。';
                                return '一名角色于摸牌阶段外获得牌时，你可以令其弃置一张牌';
                            },
                        },
                        group: ["gz_xingchong_1", "gz_xingchong_2"],
                        subSkill: {
                            "1": {
                                trigger: {
                                    global: "gainAfter",
                                },
                                direct: true,
                                filter: function (event, player) {
                                    if (event.getParent(2).name == 'gz_xingchong_2') return false;
                                    if (event.parent.parent.name == 'phaseDraw') return false;
                                    return event.cards && event.cards.length > 0 && player.storage.gz_xingchong != true && event.player.isAlive();
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseBool('是否发动【幸宠】令' + get.translation(trigger.player) + '弃置一张牌？').set('choice', get.attitude(player, trigger.player) < 0);
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('gz_xingchong', trigger.player);
                                        player.storage.gz_xingchong = true;
                                        trigger.player.chooseToDiscard('he', true);
                                    }
                                },
                                sub: true,
                            },
                            "2": {
                                trigger: {
                                    global: "discardAfter",
                                },
                                direct: true,
                                filter: function (event, player) {
                                    if (event.getParent(2).name == 'gz_xingchong_1') return false;
                                    if (event.parent.parent.name == 'phaseDiscard') return false;
                                    return event.cards && event.cards.length > 0 && player.storage.gz_xingchong == true && event.player.isAlive();
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseBool('是否发动【幸宠】令' + get.translation(trigger.player) + '摸一张牌？').set('choice', get.attitude(player, trigger.player) > 0);
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('gz_xingchong', trigger.player);
                                        player.storage.gz_xingchong = false;
                                        trigger.player.draw();
                                    }
                                },
                                sub: true,
                            },
                        },
                    },
                    // lukang
                    gz_keshou: {
                        audio: 'keshou',
                        trigger: {
                            player: 'damageBegin3'
                        },
                        filter: function (event, player) {
                            return event.num > 0 && player.countCards('he') >= 2;
                        },
                        direct: true,
                        preHidden: true,
                        content: function () {
                            'step 0'
                            var check = (player.countCards('h', {
                                color: 'red'
                            }) > 1 || player.countCards('h', {
                                color: 'black'
                            }) > 1);
                            player.chooseCard(get.prompt('gz_keshou'), '弃置两张颜色相同的牌，令即将受到的伤害-1', 'he', 2, function (card) {
                                if (ui.selected.cards.length) return get.color(card) == get.color(ui.selected.cards[0]);
                                return true;
                            }).set('complexCard', true).set('ai', function (card) {
                                if (!_status.event.check) return 0;
                                var player = _status.event.player;
                                if (player.hp == 1) {
                                    if (!player.countCards('h', function (card) {
                                            return get.tag(card, 'save')
                                        }) && !player.hasSkillTag('save', true)) return 10 - get.value(card);
                                    return 7 - get.value(card);
                                }
                                return 6 - get.value(card);
                            }).set('check', check).setHiddenSkill(event.name);
                            'step 1'
                            var logged = false;
                            if (result.cards) {
                                logged = true;
                                player.logSkill('gz_keshou');
                                player.discard(result.cards);
                                trigger.num--;
                            }
                            if (!player.isUnseen() && !game.hasPlayer(function (current) {
                                    return current != player && current.isFriendOf(player);
                                })) {
                                if (!logged) player.logSkill('gz_keshou');
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return 1;
                                    return 0;
                                });
                            } else event.finish();
                            'step 2'
                            if (result.judge > 0) player.draw();
                        }
                    },
                    // puyangxing
                    xintu3d8: {
                        audio: "twzhengjian",
                        forced: true,
                        trigger: {
                            player: "phaseDrawBegin1",
                        },
                        content: function () {
                            "step 0"
                            player.storage.xintu3d8 = 0;
                            event.cards = get.cards(3);
                            game.cardsGotoOrdering(event.cards);
                            player.showCards(event.cards);
                            "step 1"
                            var bool = game.hasPlayer(function (current) {
                                return player.canUse(event.cards[0], current);
                            });
                            if (bool) {
                                player.chooseUseTarget(event.cards[0], true, false);
                                player.storage.xintu3d8++;
                            }
                            event.cards.remove(event.cards[0]);
                            "step 2"
                            if (event.cards.length) event.goto(1);
                            "step 3"
                            if (player.storage.xintu3d8 >= player.hp) {
                                player.chooseToDiscard("e", true);
                            }
                            if (player.storage.xintu3d8 > player.hp) {
                                trigger.cancel();
                            }
                            "step 4"
                            delete player.storage.xintu3d8;
                        },
                    },
                    // zhangxiang
                    gz_guolie: {
                        trigger: {
                            player: 'phaseDrawBefore'
                        },
                        check: function (event, player) {
                            var h1 = player.getUseValue({
                                name: 'huogong'
                            });
                            var h2 = player.getUseValue({
                                name: 'guohe'
                            });
                            return player.countCards('h', function (card) {
                                if (get.color(card) == 'red') return h1 > 0;
                                return h2 > 0;
                            }) > 2;
                        },
                        content: function () {
                            trigger.cancel();
                            player.addTempSkill('gz_guolie2');
                        },
                    },
                    gz_guolie2: {
                        mod: {
                            cardname: function (card, player) {
                                var color = get.color(card, player);
                                if (color == 'red') return 'huogong';
                                if (color == 'black') return 'guohe';
                            },
                            cardnature: function () {
                                return false;
                            },
                            cardUsable: function () {
                                return Infinity;
                            }
                        },
                        trigger: {
                            player: 'phaseJieshuBegin'
                        },
                        forced: true,
                        filter: function (event, player) {
                            var cards = [];
                            game.getGlobalHistory('cardMove', function (evt) {
                                if (evt.player == player) return;
                                for (var i of evt.cards) {
                                    if (get.position(i, true) == 'd') cards.push(i);
                                }
                            });
                            return cards.length > 0;
                        },
                        content: function () {
                            var cards = [];
                            game.getGlobalHistory('cardMove', function (evt) {
                                if (evt.player == player) return;
                                if (evt.name == 'cardsDiscard' && evt.parent.name == 'orderingDiscard') return;
                                for (var i of evt.cards) {
                                    if (get.position(i, true) == 'd') cards.push(i);
                                }
                            });
                            player.gain(cards, 'gain2');
                        },
                    },
                    // huzong
                    zmwengao: {
                        trigger: {
                            player: 'useCard'
                        },
                        filter: function (event, player) {
                            return _status.currentPhase == player && get.color(event.card) == 'red';
                        },
                        prompt: function (event, player) {
                            return '是否发动【文诰】获得' + get.translation(event.cards) + '？';
                        },
                        check: function (event, player) {
                            if (get.number(event.card) <= 1) return false;
                            if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay') return false;
                            return true;
                        },
                        content: function () {
                            'step 0'
                            event.num = trigger.cards[0].number;
                            player.gain(trigger.cards, 'gain2');
                            'step 1'
                            if (event.num) player.storage.zmwengao2 = event.num;
                            player.addTempSkill('zmwengao2');
                        },
                    },
                    zmwengao2: {
                        onremove: function (player) {
                            delete player.storage.zmwengao2;
                        },
                        mark: true,
                        mod: {
                            cardEnabled: function (card, player) {
                                if (card.number >= player.storage.zmwengao2) return false;
                            },
                            cardSavable: function (card, player) {
                                if (card.number >= player.storage.zmwengao2) return false;
                            },
                        },
                    },
                    jl_weifeng: {
                        audio: "jl_weifeng",
                        trigger: {
                            player: 'phaseBegin'
                        },
                        filter: function (event, player) {
                            return player.countCards('h') < player.hp && player.countCards('h') > 0;
                        },
                        direct: true,
                        content: function () {
                            'step 0'
                            player.chooseTarget('是否发动【威奉】？', function (card, player, target) {
                                return player != target && target.countCards('h');
                            }).ai = function (target) {
                                return -ai.get.attitude(player, target);
                            }
                            'step 1'
                            if (result.bool) {
                                event.target = result.targets[0];
                                player.logSkill('jlsg_weifeng', event.target);
                                player.chooseToCompare(event.target);
                            } else {
                                event.finish();
                            }
                            'step 2'
                            if (result.bool) {
                                player.draw(2);
                            } else {
                                event.target.draw(2);
                            }
                        }
                    },
                    // zmpojian: {
                    //     trigger: {
                    //         player: "phaseZhunbeiBegin",
                    //     },
                    //     filter: function (event, player) {
                    //         return player.countCards('h');
                    //     },
                    //     direct: true,
                    //     content: function () {
                    //         'step 0'
                    //         player.chooseTarget(get.prompt2('zmpojian'), function (card, player, target) {
                    //             return player != target;
                    //         }).set('ai', function (target) {
                    //             var player = _status.event.player;
                    //             return get.damageEffect(target, player, player);
                    //         });
                    //         'step 1'
                    //         if (result.bool) {
                    //             event.target = result.targets[0];
                    //             player.logSkill('zmpojian', event.target);
                    //             event.target.viewHandcards(player);
                    //             player.storage.zmpojian = event.target;
                    //             if (!player.storage.zmpojian2 && !player.storage.zmpojian3) {
                    //                 player.storage.zmpojian2 = [];
                    //                 player.storage.zmpojian3 = [];
                    //             }
                    //             if (player.storage.zmpojian2.length == 0 && player.storage.zmpojian2.length == 0) {
                    //                 player.addTempSkill('zmpojian2');
                    //                 player.storage.zmpojian2 = player.storage.zmpojian2.concat(player.getCards('h'));
                    //                 player.storage.zmpojian3 = player.storage.zmpojian3.concat(player.getCards('h'));
                    //             }
                    //         }
                    //     },
                    //     group: "zmpojian_end",
                    //     subSkill: {
                    //         end: {
                    //             trigger: {
                    //                 player: "phaseJieshuBegin",
                    //             },
                    //             filter: function (event, player) {
                    //                 return player.storage.zmpojian && player.storage.zmpojian.isAlive();
                    //             },
                    //             forced: true,
                    //             content: function () {
                    //                 'step 0'
                    //                 player.storage.zmpojian.line(player, 'green');
                    //                 player.storage.zmpojian.viewHandcards(player);
                    //                 'step 1'
                    //                 if (player.storage.zmpojian2.length >= player.hp) {
                    //                     player.viewHandcards(player.storage.zmpojian);
                    //                     player.storage.zmpojian.damage();
                    //                 }
                    //                 'step 2'
                    //                 delete player.storage.zmpojian;
                    //                 delete player.storage.zmpojian2;
                    //                 delete player.storage.zmpojian3;
                    //             },
                    //             sub: true,
                    //         },
                    //     },
                    // },
                    // zmpojian2: {
                    //     mod: {
                    //         aiOrder: function (player, card, num) {
                    //             if (card == player.storage.zmpojian2 && player.storage.zmpojian.isIn()) return num + get.sgn(get.attitude(player, player.storage.zmpojian));
                    //         },
                    //     },
                    //     trigger: {
                    //         player: "loseEnd",
                    //     },
                    //     forced: true,
                    //     silent: true,
                    //     content: function () {
                    //         if (player.storage.zmpojian2) {
                    //             for (var i = 0; i < player.storage.zmpojian2.length; i++) {
                    //                 if (trigger.cards.contains(player.storage.zmpojian2[i])) {
                    //                     player.storage.zmpojian2.splice(i--, 1);
                    //                 }
                    //             }
                    //         }
                    //     },
                    //     group: "zmpojian2_gain",
                    //     subSkill: {
                    //         gain: {
                    //             trigger: {
                    //                 player: "gainAfter",
                    //             },
                    //             forced: true,
                    //             silent: true,
                    //             content: function () {
                    //                 if (player.storage.zmpojian2 && player.storage.zmpojian3) {
                    //                     for (var i = 0; i < player.storage.zmpojian3.length; i++) {
                    //                         if (trigger.cards.contains(player.storage.zmpojian3[i])) {
                    //                             player.storage.zmpojian2 = player.storage.zmpojian2.concat(trigger.cards);
                    //                         }
                    //                     }
                    //                 }
                    //             },
                    //             sub: true,
                    //             popup: false,
                    //         },
                    //     },
                    //     popup: false,
                    // },
                    // zhouyi
                    gz_lianyou: {
                        trigger: {
                            player: 'die'
                        },
                        direct: true,
                        forceDie: true,
                        skillAnimation: true,
                        animationColor: 'fire',
                        content: function () {
                            'step 0'
                            player.chooseTarget(lib.filter.notMe, get.prompt('gz_lianyou'), '令一名其他角色获得〖兴火〗').set('forceDie', true).set('ai', function (target) {
                                return target.isFriendOf(player) && 10 + (get.attitude(_status.event.player, target) * target.hasSkillTag('fireAttack', null, null, true) ? 2 : 1)
                            });
                            'step 1'
                            if (result.bool) {
                                var target = result.targets[0];
                                player.logSkill('gz_lianyou', target);
                                target.addSkillLog('gzxinghuo');
                                game.delayx();
                            }
                        },
                        derivation: 'gzxinghuo',
                    },
                    // sunyu
                    zmhongyuan: {
                        trigger: {
                            global: ["discardAfter", "gainAfter"],
                        },
                        filter: function (event, player) {
                            return event.cards.length > 2;
                        },
                        frequent: true,
                        content: function () {
                            'step 0'
                            player.chooseControl().set('choiceList', [
                                '将手牌补至三张',
                                '令' + get.translation(trigger.player) + '摸一张牌',
                            ]).set('ai', function () {
                                var player = _status.event.player;
                                if (!player.countCards('h')) return 0;
                                if (player.countCards('h') >= 2 && get.attitude(player, trigger.player) > 0) return 1;
                                if (player.countCards('h') >= 3 && trigger.player == player) return 1;
                                return 0;
                            });
                            'step 1'
                            if (result.index == 0) {
                                player.drawTo(3);
                            } else if (result.index == 1) {
                                trigger.player.draw();
                            }
                        },
                    },
                    zmfujiang: {
                        trigger: {
                            global: "gainAfter",
                        },
                        check: function (event, player) {
                            return get.attitude(player, event.player) < 0;
                        },
                        filter: function (event, player) {
                            if (event.source == player && event.player != player) {
                                if (event.cards && event.cards.length > 0) return true;
                            }
                            return false;
                        },
                        logTarget: "player",
                        content: function () {
                            "step 0"
                            if (!trigger.player.countCards('e')) {
                                player.line(trigger.player, 'green');
                                trigger.player.damage();
                                event.finish();
                            }
                            "step 1"
                            player.choosePlayerCard(trigger.player, get.prompt('zmfujiang', trigger.player), 'e').set('ai', function (button) {
                                return 10 - get.value(button.link);
                            });
                            "step 2"
                            if (result.bool) {
                                event.card = result.links[0];
                                trigger.player.discard(event.card);
                            }
                        },
                    },
                    // wu_pangtong
                    gz_songsang: {
                        limited: true,
                        unique: true,
                        init: function (player) {
                            player.storage.gz_songsang = false;
                        },
                        skillAnimation: true,
                        animationColor: 'wood',
                        audio: 'xinfu_songsang',
                        trigger: {
                            global: "dieAfter",
                        },
                        filter: function (event, player) {
                            if (player.storage.gz_songsang == true) return false;
                            return true;
                        },
                        content: function () {
                            player.awakenSkill('gz_songsang');
                            player.gainMaxHp();
                            player.recover();
                            player.draw();
                            player.storage.gz_songsang = true;
                        },
                        mark: true,
                        intro: {
                            content: "limited",
                        },
                    },
                    // jiangqing
                    gz_spjianyi: {
                        inherit: 'spjianyi',
                        audio: 'spjianyi',
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_spjianyi')
                        }
                    },
                    // gexuan
                    gz_twlingbao: {
                        inherit: 'twlingbao',
                        audio: 'twlingbao',
                        viceSkill: true,
                        init: function (player) {
                            if (player.checkViceSkill('gz_twlingbao') && !player.viceChanged) {
                                player.removeMaxHp();
                            }
                        },
                    },
                    // zhoufang
                    gz_youdi: {
                        inherit: 'xinfu_youdi',
                        audio: 'xinfu_youdi',
                        mainSkill: true,
                        init: function (player) {
                            if (player.checkMainSkill('gz_youdi')) {
                                player.removeMaxHp();
                            }
                        }
                    },
                    // gz_youdi: {
                    //     audio: 'youdi',
                    //     trigger: {
                    //         player: 'phaseJieshuBegin'
                    //     },
                    //     direct: true,
                    //     filter: function (event, player) {
                    //         return player.countCards('he') > 0;
                    //     },
                    //     content: function () {
                    //         "step 0"
                    //         player.chooseTarget(get.prompt('gz_youdi'), function (card, player, target) {
                    //             return player != target;
                    //         }).set('ai', function (target) {
                    //             if (!_status.event.goon) return 0;
                    //             if (target.countCards('he') == 0) return 0;
                    //             return -get.attitude(_status.event.player, target);
                    //         }).set('goon', player.countCards('h', 'sha') <= player.countCards('h') / 3);
                    //         "step 1"
                    //         if (result.bool) {
                    //             game.delay();
                    //             player.logSkill('gz_youdi', result.targets);
                    //             event.target = result.targets[0];
                    //             event.target.discardPlayerCard(player, 'he', true);
                    //         } else {
                    //             event.finish();
                    //         }
                    //         "step 2"
                    //         if (result.links[0].name != 'sha' && event.target.countCards('he')) {
                    //             player.gainPlayerCard('he', event.target, true);
                    //             player.draw();
                    //         }
                    //     },
                    //     ai: {
                    //         expose: 0.2,
                    //         threaten: 1.4
                    //     }
                    // },
                    // luotong
                    gz_qinzheng: {
                        audio: 'qinzheng',
                        trigger: {
                            player: ['useCard', 'respond']
                        },
                        forced: true,
                        filter: function (event, player) {
                            var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                            return num % 5 == 0 || num % 10 == 0 || num % 15 == 0;
                        },
                        content: function () {
                            var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                            var cards = [];
                            if (num % 5 == 0) {
                                var card = get.cardPile2(function (card) {
                                    return card.name == 'sha' || card.name == 'shan';
                                });
                                if (card) cards.push(card);
                            }
                            if (num % 10 == 0) {
                                var card = get.cardPile2(function (card) {
                                    return ['tao', 'jiu', 'zong', 'xionghuangjiu'].contains(card.name);
                                });
                                if (card) cards.push(card);
                            }
                            if (num % 15 == 0) {
                                var card = get.cardPile2(function (card) {
                                    return ['juedou', 'wuzhong', 'zengbin', 'sadouchengbing', 'dongzhuxianji', 'tongzhougongji'].contains(card.name);
                                });
                                if (card) cards.push(card);
                            }
                            if (cards.length) player.gain(cards, 'gain2');
                        },
                        group: 'gz_qinzheng_count',
                        intro: {
                            content: function (num) {
                                var str = '<li>总次数：';
                                str += num;
                                str += '<br><li>杀/闪：';
                                str += num % 5;
                                str += '/5<br><li>桃/酒：';
                                str += num % 10;
                                str += '/10<br><li>决斗/无中生有：';
                                str += num % 15;
                                str += '/15';
                                return str;
                            },
                        },
                    },
                    gz_qinzheng_count: {
                        trigger: {
                            player: ['useCard1', 'respond']
                        },
                        silent: true,
                        firstDo: true,
                        noHidden: true,
                        content: function () {
                            player.storage.gz_qinzheng = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                            player.markSkill('gz_qinzheng');
                        },
                    },
                    // zhangjiao
                    gz_leiji: {
                        group: 'gz_leiji_misa',
                        audio: 'xinleiji',
                        trigger: {
                            player: ['useCard', 'respond']
                        },
                        filter: function (event, player) {
                            return event.card.name == 'shan' || event.name == 'useCard' && event.card.name == 'shandian';
                        },
                        judgeCheck: function (card, bool) {
                            var suit = get.suit(card);
                            if (suit == 'spade') {
                                if (bool && get.number(card) > 1 && get.number(card) < 10) return 5;
                                return 4;
                            }
                            if (suit == 'club') return 2;
                            return 0;
                        },
                        content: function () {
                            player.judge(lib.skill.gz_leiji.judgeCheck).judge2 = function (result) {
                                return result.bool ? true : false;
                            };
                        },
                        ai: {
                            useShan: true,
                            effect: {
                                target: function (card, player, target, current) {
                                    if (get.tag(card, 'respondShan') && !player.hasSkillTag('directHit_ai', true, {
                                            target: target,
                                            card: card,
                                        }, true)) {
                                        var hastarget = game.hasPlayer(function (current) {
                                            return get.attitude(target, current) < 0;
                                        });
                                        var be = target.countCards('e', {
                                            color: 'black'
                                        });
                                        if (target.countCards('h', 'shan') && be) {
                                            if (!target.hasSkill('xinguidao')) return 0;
                                            return [0, hastarget ? target.countCards('he') / 2 : 0];
                                        }
                                        if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                            if (!target.hasSkill('xinguidao')) return 0;
                                            return [0, hastarget ? target.countCards('h') / 4 : 0];
                                        }
                                        if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
                                            return [0, 0];
                                        }
                                        if (target.countCards('h') == 0) {
                                            return [1.5, 0];
                                        }
                                        if (target.countCards('h') == 1 && !be) {
                                            return [1.2, 0];
                                        }
                                        if (!target.hasSkill('xinguidao')) return [1, 0.05];
                                        return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                                    }
                                }
                            }
                        }
                    },
                    gz_leiji_misa: {
                        audio: 'xinleiji',
                        trigger: {
                            player: 'judgeAfter'
                        },
                        direct: true,
                        filter: function (event, player) {
                            return ['spade', 'club'].contains(event.result.suit);
                        },
                        content: function () {
                            'step 0'
                            event.num = 1 + ['club', 'spade'].indexOf(trigger.result.suit);
                            event.logged = false;
                            if (event.num == 1 && player.isDamaged()) {
                                event.logged = true;
                                player.logSkill('gz_leiji');
                                player.recover();
                            } else {
                                player.chooseTarget('雷击：是否对一名角色造成1点雷电伤害？', lib.filter.notMe).ai = function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player, 'thunder');
                                };
                                'step 1'
                                if (result.bool && result.targets && result.targets.length) {
                                    if (!event.logged) player.logSkill('gz_leiji', result.targets);
                                    else player.line(result.targets, 'thunder');
                                    result.targets[0].damage(1, 'thunder');
                                }
                            };
                        },
                    },
                    // fengfangnv
                    gz_tiqi: {
                        audio: 'tiqi',
                        trigger: {
                            global: ['phaseDrawEnd', 'phaseDrawSkipped', 'phaseDrawCancelled']
                        },
                        filter: function (event, player) {
                            if (player == event.player) return false;
                            var num = 0;
                            event.player.getHistory('gain', function (evt) {
                                if (evt.getParent().name == 'draw' && evt.getParent('phaseDraw') == event) num += evt.cards.length;
                            });
                            return num != 2;
                        },
                        frequent: true,
                        logTarget: 'player',
                        content: function () {
                            'step 0'
                            var num = 0;
                            trigger.player.getHistory('gain', function (evt) {
                                if (evt.getParent().name == 'draw' && evt.getParent('phaseDraw') == trigger) num += evt.cards.length;
                            });
                            event.num = num;
                            player.draw();
                        },
                    },
                    gz_jiangong: {
                        audio: 'baoshu',
                        trigger: {
                            player: 'phaseDiscardEnd'
                        },
                        filter: function (event, player) {
                            if (event.cards && event.cards.length > 0) {
                                return game.hasPlayer(function (current) {
                                    return current.hp > player.hp;
                                });
                            }
                            return false;
                        },
                        content: function () {
                            'step 0'
                            player.chooseTarget('恭俭：将置的牌交给一名体力值大于你的角色', function (card, player, target) {
                                return target.hp > player.hp;
                            }).set('ai', function (target) {
                                return get.attitude(_status.event.player, target) / Math.sqrt(target.countCards('h') + 1);
                            });
                            'step 1'
                            if (result.bool) {
                                player.line(result.targets, 'green');
                                result.targets[0].gain(trigger.cards, 'gain2');
                            }
                        },
                    },
                    // gongsundu
                    baliao3d8: {
                        audio: "huaiyi",
                        mark: true,
                        marktext: "霸",
                        preHidden: true,
                        intro: {
                            content: function (storage, player, skill) {
                                return "出牌阶段限一次，你可与一名其他角色拼点，若你赢，你视为对其使用【" + get.translation(player.storage.baliao3d81) + "】；若你没赢，其视为对你使用【" + get.translation(player.storage.baliao3d82) + "】。"
                            }
                        },
                        init: function (player) {
                            player.storage.baliao3d81 = "shunshou";
                            player.storage.baliao3d82 = "juedou";
                        },
                        enable: "phaseUse",
                        usable: 1,
                        filterTarget: function (card, player, target) {
                            return player.canCompare(target);
                        },
                        filter: function (event, player) {
                            return player.countCards("h") > 0;
                        },
                        content: function () {
                            "step 0"
                            player.chooseToCompare(target).ai = function (card) {
                                if (typeof card == 'string' && lib.skill[card]) {
                                    var ais = lib.skill[card].check || function () {
                                        return 0
                                    };
                                    return ais();
                                }
                                var player = get.owner(card);
                                var getn = function (card) {
                                    if (player.hasSkill('tianbian') && get.suit(card) == 'heart') return 13;
                                    return get.number(card);
                                }
                                var event = _status.event.getParent();
                                var to = (player == event.player ? event.target : event.player);
                                var addi = (get.value(card) >= 8 && get.type(card) != 'equip') ? -10 : 0;
                                if (card.name == 'du') addi -= 5;
                                var check1 = player.storage.baliao3d81 == "shunshou";
                                var check2 = player.storage.baliao3d82 == "shunshou";
                                var sha = player.countCards("h", {
                                    name: "sha"
                                });
                                var sha1 = player.countCards("h", {
                                    name: "sha"
                                });
                                if (player == event.player) {
                                    if (get.attitude(player, to) > 0) {
                                        if (check1 && to.countCards("h") > 0) return getn(card) - get.value(card) / 2 + addi;
                                        return -getn(card) - get.value(card) / 2 + addi;
                                    }
                                    if (check1 && !check2 && sha >= to.countCards("h") - 2) {
                                        return -getn(card) - get.value(card) / 2 + addi;
                                    }
                                    return getn(card) - get.value(card) / 2 + addi;
                                } else {
                                    if (get.attitude(player, to) > 0) {
                                        return -getn(card) - get.value(card) / 2 + addi;
                                    }
                                    if (check1 && !check2 && sha1 == 0 && to.countCards("h") >= 3) {
                                        return -getn(card) - get.value(card) / 2 + addi;
                                    }
                                    return getn(card) - get.value(card) / 2 + addi;
                                }
                            };
                            "step 1"
                            if (result.bool) {
                                if (player.storage.baliao3d81 == 'shunshou' && target.countCards("hej") == 0) event.finish();
                                if (player.canUse({
                                        name: player.storage.baliao3d81,
                                        isCard: true
                                    }, target, false)) player.useCard({
                                    name: player.storage.baliao3d81,
                                    isCard: true
                                }, target);
                            } else {
                                if (player.storage.baliao3d82 == 'shunshou' && player.countCards("hej") == 0) event.finish();
                                if (target.canUse({
                                        name: player.storage.baliao3d82,
                                        isCard: true
                                    }, player, false) && (player.storage.baliao3d82 != 'shunshou' || player.countCards("hej") > 0)) target.useCard({
                                    name: player.storage.baliao3d82,
                                    isCard: true
                                }, player);
                            }
                        },
                        ai: {
                            order: function () {
                                var player = _status.event.player;
                                if (player.storage.baliao3d81 == "shunshou") return 9;
                                return get.order({
                                    name: 'sha'
                                }) + 0.01;
                            },
                            result: {
                                target: function (player, target) {
                                    var hs = player.getCards('h');
                                    var hs1 = target.getCards('h');
                                    var check1 = player.storage.baliao3d81 == "shunshou";
                                    var check2 = player.storage.baliao3d82 == "shunshou";
                                    var can_use1 = player.canUse({
                                        name: "shunshou",
                                        isCard: true
                                    }, target, false) && target.countCards("hej") > 0;
                                    var can_use2 = player.canUse({
                                        name: "juedou",
                                        isCard: true
                                    }, target, false);

                                    if (check1 && check2) {
                                        if (get.attitude(player, target) >= 3 && target.hasJudge("lebu") && target.countCards("h") - target.getHandcardLimit() >= 3 && can_use1) {
                                            return 1;
                                        }

                                        if (player.countCards("he") == 1 && get.value(hs[0]) < 5) return -1;
                                        for (var i = 0; i < hs.length; i++) {
                                            if (get.value(hs[i]) <= 6 && hs[i].number >= 9 && hs1.length <= 2 * hs[i].number - 16 && can_use1) return -1;
                                        }
                                    }
                                    if (check1 && !check2) {
                                        if (get.attitude(player, target) >= 3 && target.hasJudge("lebu") && target.countCards("h") - target.getHandcardLimit() >= 3 && can_use1) {
                                            return 1;
                                        }
                                        var flag = 0;
                                        var flag1 = 0;
                                        var sha_flag = 0;
                                        for (var i = 0; i < hs.length; i++) {
                                            if (get.value(hs[i]) <= 6 && hs[i].number >= 10 && hs1.length <= 2 * hs[i].number - 16 && can_use1) {
                                                flag = 1;
                                            }
                                            if (get.value(hs[i]) <= 6 && hs[i].number <= 5 && hs1.length <= -2 * hs[i].number + 12) {
                                                flag1 = 1;
                                                if (hs[i].name == 'sha') sha_flag = 1;
                                            }
                                        }
                                        var sha = player.countCards("h", {
                                            name: "sha"
                                        });
                                        if (sha_flag == 1) sha -= 1;
                                        if (flag == 1) return -1;
                                        if (flag1 == 1 && sha > 0 && sha >= hs1.length - 2 && get.damageEffect(target, player, player) > 0) return -1;
                                    }
                                    if (!check1 && check2) {
                                        var flag = 0;
                                        var flag1 = 0;
                                        var sha_flag = 0;
                                        if (player.countCards("he") == 1 && get.value(hs[0]) < 5) return -1;
                                        for (var i = 0; i < hs.length; i++) {
                                            if (get.value(hs[i]) <= 6 && hs[i].number >= 9 && hs1.length <= 2 * hs[i].number - 16 && can_use2) {
                                                flag = 1;
                                                if (hs[i].name == 'sha') sha_flag = 1;
                                            }
                                        }
                                        var sha = player.countCards("h", {
                                            name: "sha"
                                        });
                                        if (sha_flag == 1) sha -= 1;
                                        if (flag == 1 && sha >= hs1.length - 2 && get.damageEffect(target, player, player) > 0) return -1;
                                    }
                                    if (!check1 && !check2) {
                                        var flag = 0;
                                        var flag1 = 0;
                                        var sha_flag = 0;
                                        var sha_flag1 = 0;
                                        for (var i = 0; i < hs.length; i++) {
                                            if (get.value(hs[i]) <= 6 && hs[i].number >= 9 && hs1.length <= 2 * hs[i].number - 16 && can_use2) {
                                                flag = 1;
                                                if (hs[i].name == 'sha') sha_flag = 1;
                                            }
                                        }
                                        var sha = player.countCards("h", {
                                            name: "sha"
                                        });
                                        if (sha_flag == 1) sha -= 1;
                                        if (flag == 1 && sha >= hs1.length - 2 && get.damageEffect(target, player, player) > 0) return -1;
                                    }
                                },
                            },
                        },
                    },
                    chailve3d8: {
                        audio: "rehuaiyi",
                        preHidden: true,
                        trigger: {
                            global: ["equipAfter", "addJudgeAfter", "loseAfter", "gainAfter", "loseAsyncAfter", "dying"],
                        },
                        filter: function (event, player) {
                            if (player != _status.currentPhase) return false;
                            if (event.name == "dying") return event.player != player;
                            else {
                                return game.hasPlayer(function (current) {
                                    if (current == player) return false;
                                    var evt = event.getl(current);
                                    return evt && evt.hs && evt.hs.length && current.countCards("h") == 0;
                                });
                            }
                        },
                        check: function (event, player) {
                            if (player.storage.baliao3d81 == player.storage.baliao3d82) return Math.random() < 0.5;
                            return true;
                        },
                        content: function () {
                            "step 0"
                            player.chooseControl(function () {
                                if (trigger.parent.name == 'chooseToCompare' && trigger.parent.parent.name == 'baliao3d8') {
                                    if (trigger.parent.card1.number <= 5) return "选项一";
                                    if (trigger.parent.card1.number >= 9) {
                                        if (player.canUse({
                                                name: "juedou",
                                                isCard: true
                                            }, trigger.parent.target, false) && player.storage.baliao3d81 == 'shunshou') return "选项一";
                                        return "选项二";
                                    }
                                    return Math.random() < 0.5 ? "选项一" : "选项二";
                                }
                                if (player.storage.baliao3d81 == player.storage.baliao3d82) return Math.random() < 0.5 ? "选项一" : "选项二";
                                if (player.storage.baliao3d81 == 'shunshou') {
                                    if (player.countCards("h") >= 3 && player.countCards("h", {
                                            name: "sha"
                                        }) >= 2) return "选项一";
                                    return "选项二";
                                }
                                if (player.countCards("h") >= 3 && player.countCards("h", {
                                        name: "sha"
                                    }) >= 2) return "选项二";
                                return "选项一";
                            }).set("prompt", "豺略：请选择要改变的名称").set("choiceList", ["你拼点赢对目标使用的牌", "你拼点没赢目标对你使用的牌"]);
                            "step 1"
                            if (result.control == "选项一") {
                                if (player.storage.baliao3d81 == "shunshou") {
                                    game.log(player, "将“霸辽”的拼点胜利选项转换为决斗");
                                    player.storage.baliao3d81 = "juedou";
                                } else {
                                    game.log(player, "将“霸辽”的拼点胜利选项转换为顺手牵羊");
                                    player.storage.baliao3d81 = "shunshou"
                                }
                            } else {
                                if (player.storage.baliao3d82 == "shunshou") {
                                    game.log(player, "将“霸辽”的拼点失败选项转换为决斗");
                                    player.storage.baliao3d82 = "juedou";
                                } else {
                                    game.log(player, "将“霸辽”的拼点失败选项转换为顺手牵羊");
                                    player.storage.baliao3d82 = "shunshou"
                                }
                            }
                            "step 2"
                            if (player.storage.baliao3d81 == player.storage.baliao3d82) player.draw(2);
                        },
                    },
                    // zhangzhongjing
                    quhan3d8: {
                        audio: "xinliaoyi",
                        enable: "phaseUse",
                        filter: function (event, player) {
                            if (!player.countCards('he')) return false;
                            if (player.hasSkill('quhan3d82')) return false;
                            return game.hasPlayer(function (current) {
                                return current != player && current.countCards('h') > 0 && current.hp < current.maxHp;
                            });
                        },
                        filterTarget: function (card, player, target) {
                            return target != player && target.hp < target.maxHp && target.countCards('h') > 0;
                        },
                        content: function () {
                            'step 0'
                            player.choosePlayerCard("选择" + get.translation(target) + "的至多" + get.cnNumber(Math.min(target.countCards('h'), target.maxHp - target.hp)) + "张牌", target, 'h', [1, Math.min(target.countCards('h'), target.maxHp - target.hp)], true);
                            'step 1'
                            var hs = result.cards;
                            target.showCards(hs);
                            player.chooseCard({
                                filterCard: function (card) {
                                    var suits = [];
                                    for (var i = 0; i < result.cards.length; i++) {
                                        suits.add(get.suit(result.cards[i]));
                                    }
                                    return suits.contains(get.suit(card));
                                },
                                position: 'he',
                                selectCard: 1,
                                ai: function (card) {
                                    if (card.name == 'du' && player.hp == 1) return 1;
                                    return 8 - get.value(card);
                                },
                                prompt: '弃置一张同花色的手牌，令' + get.translation(target) + '回复一点体力'
                            });
                            'step 2'
                            if (result.bool) {
                                player.discard(result.cards);
                                target.recover();
                            } else {
                                player.addTempSkill("quhan3d82");
                            }
                        },
                        ai: {
                            order: 9,
                            result: {
                                target: function (player, target) {
                                    if (target.hp == 1) return 5;
                                    return Math.min(target.maxHp - target.hp, target.countCards('h')) + 2;
                                },
                            },
                            threaten: 2,
                        },
                    },
                    quhan3d82: {

                    },
                    changtang3d8: {
                        audio: "jishi",
                        trigger: {
                            player: "phaseJieshuBegin",
                        },
                        filter: function (event, player) {
                            return true;
                        },
                        check: function (event, player) {
                            var suits = [];
                            var cards = player.getCards("h");
                            for (var i = 0; i < cards.length; i++) {
                                suits.add(get.suit(cards[i]));
                            }
                            if (suits.length < 4) return true;
                            return false;
                        },
                        content: function () {
                            'step 0'
                            player.chooseTarget(true, "选择一名除你之外手牌数最少的角色", function (card, player, target) {
                                if (player == target) return false;
                                var players = game.filterPlayer();
                                var min = Infinity;
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i] == player) continue;
                                    min = Math.min(min, players[i].countCards("h"));
                                }
                                if (target.countCards("h") == min) return true;
                                return false;
                            }, false).ai = function (target) {
                                return get.attitude(player, target) + 20
                            };
                            'step 1'
                            player.showHandcards();
                            event.target = result.targets[0];
                            var players = [];
                            var current = event.target.next;
                            players.push(event.target);
                            while (current != event.target) {
                                if (current != player) players.push(current);
                                current = current.next;
                            }
                            event.changtang3d8_curr = 0;
                            event.changtang3d8_players = players;
                            player.line(result.targets, 'green');
                            'step 2'
                            console.log(event.changtang3d8_players);
                            event.changtang3d8_players[event.changtang3d8_curr].chooseCard({
                                filterCard: function (card) {
                                    var suits = [];
                                    var cards = trigger.player.getCards("h");
                                    for (var i = 0; i < cards.length; i++) {
                                        suits.add(get.suit(cards[i]));
                                    }
                                    return !suits.contains(get.suit(card));
                                },
                                position: 'he',
                                selectCard: 1,
                                ai: function (card) {
                                    if (get.attitude(event.target, player) > 0) {
                                        if (card.name == 'du') return 0.1;
                                        return 20 - get.value(card);
                                    }
                                    if (card.name == 'du') return 20;
                                    return 6 - get.value(card);
                                },
                                prompt: '交给' + get.translation(trigger.player) + '一张与其手牌花色均不同的牌'
                            });
                            "step 3"
                            if (result.bool) {
                                trigger.player.gain(result.cards, event.changtang3d8_players[event.changtang3d8_curr], 'give');
                                event.changtang3d8_players[event.changtang3d8_curr].draw(2);
                            } else game.log(event.changtang3d8_players[event.changtang3d8_curr], "没有交给", trigger.player, "牌");
                            event.changtang3d8_curr += 1;
                            if (event.changtang3d8_curr == event.changtang3d8_players.length) event.finish();
                            else event.goto(2);

                        },
                        ai: {
                            expose: 0.2,
                            threaten: 0.8,
                        },
                    },
                    // zhangqiying
                    gz_dianhua: {
                        audio: 'xinfu_dianhua',
                        enable: 'phaseUse',
                        usable: 1,
                        filter: function (event, player) {
                            var nh = player.countCards('h');
                            return nh && nh <= player.maxHp;
                        },
                        content: function () {
                            'step 0'
                            player.showHandcards();
                            event.num = player.countCards('h');
                            'step 1'
                            player.directgain(get.cards(event.num));
                            player.chooseCard('将' + get.cnNumber(event.num) + '张手牌以按顺序置于牌堆顶（先选择的在上）', event.num, true).set('ai', function (card) {
                                return -get.value(card);
                            });
                            'step 2'
                            if (result.bool) {
                                player.lose(result.cards, ui.special)._triggered = null;
                                event.cards = result.cards.slice(0);
                            } else {
                                event.finish();
                            }
                            'step 3'
                            if (player == game.me && _status.auto) {
                                game.delay();
                            }
                            'step 4'
                            while (event.cards.length) {
                                var current = event.cards.pop();
                                current.fix();
                                ui.cardPile.insertBefore(current, ui.cardPile.firstChild);
                            }
                        },
                        ai: {
                            order: 10,
                            result: {
                                player: 1
                            }
                        }
                    },
                    gz_zhenyi: {
                        audio: 'xinfu_zhenyi',
                        trigger: {
                            player: 'damageBefore'
                        },
                        forced: true,
                        priority: 15,
                        filter: function (event, player) {
                            if (get.type(event.card, 'trick') == 'trick') {
                                if (event.getParent(2).name == 'useCard') {
                                    return event.getParent(2).targets.length == 1;
                                }
                                return true;
                            }
                            return false;
                        },
                        content: function () {
                            trigger.cancel();
                        },
                        ai: {
                            notrick: true,
                            effect: {
                                target: function (card, player, target, current) {
                                    if (get.type(card) == 'trick' && get.tag(card, 'damage') && !get.tag(card, 'multitarget')) {
                                        return 'zeroplayertarget';
                                    }
                                }
                            }
                        },
                        group: 'gz_zhenyi_cancel',
                        subSkill: {
                            cancel: {
                                trigger: {
                                    target: 'useCardToAfter'
                                },
                                silent: true,
                                filter: function (event, player) {
                                    return get.type(event.card, 'trick') == 'trick' && _status.currentPhase == event.player && event.player != player;
                                },
                                content: function () {
                                    player.addTempSkill('gz_zhenyi_disable');
                                }
                            },
                            disable: {
                                trigger: {
                                    target: 'useCardToBefore'
                                },
                                forced: true,
                                priority: 15,
                                onremove: true,
                                filter: function (event, player) {
                                    return (event.player == _status.currentPhase && get.type(event.card, 'trick') == 'trick');
                                },
                                content: function () {
                                    trigger.cancel();
                                },
                                ai: {
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.type(card, 'trick') == 'trick' && _status.currentPhase == player) return 'zeroplayertarget';
                                        }
                                    }
                                }
                            }
                        }
                    },
                    // yuantan
                    gz_dikai: {
                        audio: 'neifa',
                        mod: {
                            targetInRange: function (card, player, target) {
                                if (card.gz_dikai) return true;
                            },
                        },
                        enable: 'phaseUse',
                        usable: 1,
                        position: 'hs',
                        viewAs: {
                            name: 'sha',
                            gz_dikai: true,
                        },
                        locked: false,
                        filter: function (event, player) {
                            return player.countCards('hs') > 0;
                        },
                        filterCard: true,
                        selectCard: [2, Infinity],
                        position: 'hs',
                        check: function (card) {
                            var player = _status.event.player;
                            if (ui.selected.cards.length) {
                                var list = game.filterPlayer(function (current) {
                                    return current != player && player.canUse('sha', current, false) && get.effect(current, {
                                        name: 'sha'
                                    }, player, player) > 0;
                                }).sort(function (a, b) {
                                    return get.effect(b, {
                                        name: 'sha'
                                    }, player, player) - get.effect(a, {
                                        name: 'sha'
                                    }, player, player);
                                });
                                if (!list.length) return 0;
                                var target = list[0];
                                if (target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                                        target: target,
                                        card: card,
                                    }, true)) return 7 - get.value(card);
                            }
                            return 5 - get.value(card);
                        },
                        onuse: function (result, player) {
                            player.addTempSkill('gz_dikai_draw');
                        },
                        subSkill: {
                            draw: {
                                trigger: {
                                    player: 'shaMiss'
                                },
                                forced: true,
                                charlotte: true,
                                filter: function (event, player) {
                                    return event.skill == 'gz_dikai' && event.cards && event.cards.length;
                                },
                                content: function () {
                                    player.draw(trigger.cards.length);
                                },
                            },
                        },
                        ai: {
                            order: function (item, player) {
                                return get.order({
                                    name: 'sha'
                                }, player) + 0.3 * (Math.min(player.getCardUsable('sha'), player.countCards('hs', 'sha') + player.hasCard(function (card) {
                                    return card.name != 'sha' && get.value(card, player) < 7;
                                }, 'hs') ? 1 : 0) > 1 ? -1 : 1);
                            },
                        },
                    },
                    gz_zhengsi: {
                        trigger: {
                            player: "phaseAfter",
                        },
                        audio: 'neifa',
                        forced: true,
                        content: function () {
                            var num = player.countCards('h') - 2;
                            if (num > 0) {
                                player.chooseToDiscard(num, 'h', true);
                            } else player.draw(-num);
                        },
                    },
                    // simahui
                    gz_yinshi: {
                        audio: 'xinfu_yinshi',
                        trigger: {
                            player: "damageBegin4",
                        },
                        forced: true,
                        filter: function (event, player) {
                            if (!player.isEmpty(2)) return false;
                            if (event.nature) return true;
                            return get.type(event.card, 'trick') == 'trick';
                        },
                        content: function () {
                            trigger.cancel();
                        },
                        ai: {
                            notrick: true,
                            nofire: true,
                            nothunder: true,
                            effect: {
                                target: function (card, player, target, current) {
                                    if (player == target && get.subtype(card) == 'equip2') {
                                        if (get.equipValue(card) <= 8) return 0;
                                    }
                                    if (!target.isEmpty(2)) return;
                                    if (get.tag(card, 'natureDamage')) return 'zerotarget';
                                    if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                        return 'zeroplayertarget';
                                    }
                                },
                            },
                        },
                    },
                    // xingdaorong
                    gz_xuxie: {
                        audio: 'xuxie',
                        trigger: {
                            player: 'phaseUseBegin'
                        },
                        logTarget: function (event, player) {
                            return game.filterPlayer(function (current) {
                                return get.distance(player, current) <= 1;
                            }).sortBySeat();
                        },
                        check: function (event, player) {
                            if (player.isHealthy()) return false;
                            var list = game.filterPlayer(function (current) {
                                return get.distance(player, current) <= 1;
                            });
                            var draw = 0;
                            var discard = 0;
                            var num = 2 / player.getDamagedHp();
                            while (list.length) {
                                var target = list.shift();
                                var att = get.attitude(player, target);
                                if (att > 0) {
                                    draw++;
                                    if (target.countDiscardableCards(player, 'he') > 0) discard--;
                                }
                                if (att == 0) {
                                    draw--;
                                    if (target.countDiscardableCards(player, 'he') > 0) discard--;
                                }
                                if (att < 0) {
                                    draw--;
                                    if (target.countDiscardableCards(player, 'he') > 0) discard++;
                                }
                            }
                            return draw >= num || discard >= num;
                        },
                        content: function () {
                            'step 0'
                            player.loseHp();
                            'step 1'
                            var targets = game.filterPlayer(function (current) {
                                return get.distance(player, current) <= 1;
                            }).sortBySeat();
                            if (!targets.length) event.finish();
                            else {
                                event.targets = targets;
                                player.chooseControl().set('choiceList', [
                                    '弃置' + get.translation(targets) + '的各一张牌',
                                    '令' + get.translation(targets) + '各摸一张牌',
                                ]).set('ai', function () {
                                    var player = _status.event.player;
                                    var list = _status.event.getParent().targets.slice(0);
                                    var draw = 0;
                                    var discard = 0;
                                    while (list.length) {
                                        var target = list.shift();
                                        var att = get.attitude(player, target);
                                        if (att > 0) {
                                            draw++;
                                            if (target.countDiscardableCards(player, 'he') > 0) discard--;
                                        }
                                        if (att < 0) {
                                            draw--;
                                            if (target.countDiscardableCards(player, 'he') > 0) discard++;
                                        }
                                    }
                                    if (draw > discard) return 1;
                                    return 0;
                                });
                            }
                            'step 2'
                            event.index = result.index;
                            if (result.index == 1) {
                                game.asyncDraw(targets);
                            } else event.goto(4);
                            'step 3'
                            game.delay();
                            event.finish();
                            'step 4'
                            var target = targets.shift();
                            if (target.countDiscardableCards(player, 'he') > 0) player.discardPlayerCard(target, 'he', true);
                            if (targets.length) event.redo();
                        },
                        group: 'gz_xuxie_add',
                    },
                    gz_xuxie_add: {
                        audio: 'xuxie',
                        trigger: {
                            player: 'phaseUseEnd'
                        },
                        forced: true,
                        locked: false,
                        filter: function (event, player) {
                            return game.hasPlayer(function (current) {
                                return current.hp > player.hp && current.countCards('h') > player.countCards('h');
                            });
                        },
                        content: function () {
                            player.chooseDrawRecover(2, true);
                        },
                    },
                    // chunyuqiong
                    gz_cangchu: {
                        audio: 'recangchu',
                        trigger: {
                            player: 'showCharacterAfter',
                        },
                        marktext: '粮',
                        forced: true,
                        filter: function (event, player) {
                            return player.countMark('recangchu') < game.countPlayer() && event.toShow.contains('gz_chunyuqiong');
                        },
                        content: function () {
                            player.addMark('recangchu', Math.min(3, game.countPlayer() - player.countMark('recangchu')));
                        },
                        intro: {
                            content: 'mark',
                            name: '粮'
                        },
                        mod: {
                            maxHandcard: function (player, num) {
                                return num + player.countMark('recangchu');
                            },
                        },
                        group: ['recangchu2', 'recangchu3'],
                    },
                    // liuchong
                    jinggou3d8: {
                        audio: "jlsg_zhige",
                        forced: true,
                        trigger: {
                            player: 'useCardAfter',
                        },
                        preHidden: true,
                        filter: function (event, player) {
                            if (get.type(event.card) != 'equip') return false;
                            if (get.subtype(event.card) != 'equip1') return false;
                            var max = Math.max();
                            var min = Math.min();
                            var players = game.filterPlayer();
                            for (var i = 0; i < players.length; i++) {
                                max = Math.max(players[i].getAttackRange(), max);
                                min = Math.min(players[i].getAttackRange(), min);
                            }
                            if (player.getAttackRange() == max || player.getAttackRange() == min) return true;
                            return false;
                        },
                        content: function () {
                            'step 0'
                            player.chooseTarget('精彀：对一名角色造成1点伤害', true, function (card, player, target) {
                                return true;
                            }).ai = function (target) {
                                return get.damageEffect(target, player, player) + 10;
                            }
                            'step 1'
                            if (result.bool) {
                                result.targets[0].damage(1);
                            }
                        },
                        ai: {
                            expose: 0.5,
                            threaten: 1.5,
                        },
                    },
                    moyan3d8: {
                        global: ["moyan3d8_buff", "moyan3d8_init"],
                        trigger: {
                            player: 'phaseBegin',
                        },
                        preHidden: true,
                        filter: function (event, player) {
                            return true;
                        },
                        content: function () {
                            "step 0"
                            event.cards = get.cards(3);
                            game.cardsGotoOrdering(event.cards);
                            player.showCards(event.cards);
                            player.chooseTarget("末焱：令一名角色获得至少一张牌", true, function (card, player, target) {
                                return true;
                            }).ai = function (target) {
                                var cards = event.cards;
                                var value = 0;
                                var good = 0;
                                var bad = 0;
                                var rubbish = 0;
                                for (var i = 0; i < cards.length; i++) {
                                    var val = get.value(cards[i]);
                                    value += val;
                                    if (val >= 7) good += 1;
                                    if (val < 4) bad += 1;
                                    if (val < 0) rubbish += 1;
                                }
                                if (good >= 1 || value >= 8) {
                                    var att = get.attitude(player, target);
                                    if (att > 0) {
                                        return att * (1 + target.countCards("h"));
                                    } else {
                                        return att / 100;
                                    }
                                }
                                return -get.attitude(player, target) / (1 + target.countCards("h"));
                            }
                            "step 1"
                            if (result.bool) {
                                player.line(result.targets[0], "red");
                                var target = result.targets[0];
                                event.target = target;
                                target.chooseCardButton("选择并获得至少一张“末焱”牌", true, event.cards, [1, event.cards.length]).set("ai", function (button) {
                                    if (get.value(button.link) >= 6) return 1;
                                    return 0;
                                });
                            }
                            "step 2"
                            if (result.bool) {
                                event.cards.remove(result.links);
                                event.target.gain(result.links, "gain2");
                                game.log(event.target, "通过“末焱”获得了" + get.cnNumber(result.links.length) + "张牌");
                                event.target.storage.moyan3d8_buff = result.links.length;
                                event.target.markSkill("moyan3d8_buff");
                            }
                        },
                        subSkill: {
                            buff: {
                                trigger: {
                                    player: "damageBegin3",
                                },
                                marktext: "焱",
                                intro: {
                                    content: "手牌数不大于#则受到的伤害+#",
                                },
                                popup: false,
                                filter: function (event, player) {
                                    if ((!player.storage.moyan3d8_buff) || player.storage.moyan3d8_buff == 0) return false;
                                    else if (player.countCards("h") > player.storage.moyan3d8_buff) return false;
                                    return true;
                                },
                                forced: true,
                                content: function () {
                                    trigger.num += player.storage.moyan3d8_buff;
                                },
                                sub: true,
                            },
                            init: {
                                trigger: {
                                    global: ["gameStart", "roundStart"],
                                },
                                forced: true,
                                popup: false,
                                firstDo: true,
                                content: function () {
                                    player.storage.moyan3d8_buff = 0;
                                    player.unmarkSkill("moyan3d8_buff");
                                },
                                sub: true,
                            },
                        },
                        ai: {
                            expose: 0.5,
                            threaten: 1.2,
                        },
                    },
                    // mamidi
                    gz_bingjie: {
                        trigger: {
                            player: 'phaseUseBegin'
                        },
                        check: function (event, player) {
                            return player.maxHp > 3 && player.isDamaged() && player.hasCard(function (card) {
                                return game.hasPlayer(function (current) {
                                    return current != player && get.attitude(player, current) < 0 && player.canUse(card, current, null, true) && get.effect(current, card, player, player) > 0;
                                }) && player.hasValueTarget(card);
                            }, 'hs');
                        },
                        content: function () {
                            'step 0'
                            player.loseHp();
                            'step 1'
                            player.addTempSkill('gz_bingjie_effect');
                            game.delayx();
                        },
                        subSkill: {
                            effect: {
                                audio: 'bingjie',
                                trigger: {
                                    player: 'useCardToPlayered'
                                },
                                forced: true,
                                charlotte: true,
                                logTarget: 'target',
                                filter: function (event, player) {
                                    return event.target != player && (event.card.name == 'sha' || get.type(event.card, false) == 'trick') && event.target.countCards('he') > 0;
                                },
                                content: function () {
                                    trigger.target.chooseToDiscard('he', true);
                                },
                            },
                        },
                    },
                    gz_zhengding: {
                        audio: 'zhengding',
                        trigger: {
                            player: ['useCard', 'respond']
                        },
                        forced: true,
                        filter: function (event, player) {
                            if (!Array.isArray(event.respondTo)) return false;
                            if (player == event.respondTo[0]) return false;
                            var color = get.color(event.card);
                            if (color == 'none') return false;
                            return color == get.color(event.respondTo[1]);
                        },
                        content: function () {
                            player.recover();
                        },
                    },
                    // yuejiu
                    gz_cuijin: {
                        audio: 'cuijin',
                        trigger: {
                            global: 'useCard'
                        },
                        direct: true,
                        filter: function (event, player) {
                            return event.card.name == 'sha' && (event.player == player || player.inRange(event.player)) && player.countCards('h') > 0;
                        },
                        content: function () {
                            'step 0'
                            if (player != game.me && !player.isOnline()) game.delayx();
                            var target = trigger.player;
                            event.target = target;
                            player.chooseToDiscard('he', get.prompt('gz_cuijin', target), '弃置两张牌并令' + get.translation(trigger.player) + '使用的【杀】伤害+1，但若其未造成伤害，则你对其造成1点伤害。', 2).set('ai', function (card) {
                                if (_status.event.goon) return 7 - get.value(card);
                                return 0;
                            }).set('goon', function () {
                                var d1 = true;
                                if (trigger.player.hasSkill('jueqing') || trigger.player.hasSkill('gangzhi')) d1 = false
                                for (var target of trigger.targets) {
                                    if (!target.mayHaveShan() || trigger.player.hasSkillTag('directHit_ai', true, {
                                            target: target,
                                            card: trigger.card,
                                        }, true)) {
                                        if (!target.hasSkill('gangzhi')) d1 = false;
                                        if (!target.hasSkillTag('filterDamage', null, {
                                                player: trigger.player,
                                                card: trigger.card,
                                            }) && get.attitude(player, target) < 0) return true;
                                    }
                                }
                                if (d1) return get.damageEffect(trigger.player, player, player) > 0;
                                return false;
                            }()).logSkill = ['gz_cuijin', target];
                            'step 1'
                            if (result.bool) {
                                if (typeof trigger.baseDamage != 'number') trigger.baseDamage = 1;
                                trigger.baseDamage++;
                                player.addTempSkill('gz_cuijin_damage');
                                player.markAuto('gz_cuijin_damage', [trigger.card]);
                            }
                        },
                        subSkill: {
                            damage: {
                                trigger: {
                                    global: 'useCardAfter'
                                },
                                forced: true,
                                popup: false,
                                charlotte: true,
                                onremove: true,
                                filter: function (event, player) {
                                    return player.storage.gz_cuijin_damage.contains(event.card);
                                },
                                content: function () {
                                    player.storage.gz_cuijin_damage.remove(trigger.card);
                                    if (!player.storage.gz_cuijin_damage.length) player.removeSkill('gz_cuijin_damage');
                                    if (trigger.player.isIn() && !game.hasPlayer2(function (current) {
                                            return current.hasHistory('damage', function (evt) {
                                                return evt.card == trigger.card;
                                            });
                                        })) {
                                        player.line(trigger.player, 'green');
                                        trigger.player.damage();
                                    }
                                },
                            },
                        },
                    },
                    // gaogan
                    gz_juguan: {
                        audio: 'juguan',
                        enable: 'phaseUse',
                        usable: 1,
                        filter: function (event, player) {
                            return event.filterCard({
                                name: 'sha',
                            }, player, event) || event.filterCard({
                                name: 'juedou',
                            }, player, event);
                        },
                        chooseButton: {
                            dialog: function () {
                                return ui.create.dialog('拒关', [
                                    ['sha', 'juedou'], 'vcard'
                                ]);
                            },
                            filter: function (button, player) {
                                var evt = _status.event.getParent();
                                return evt.filterCard({
                                    name: button.link[2],
                                }, player, evt);
                            },
                            check: function (button) {
                                return _status.event.player.getUseValue({
                                    name: button.link[2],
                                }) * (button.link[2] == 'juedou' ? 3 : 1);
                            },
                            backup: function (links) {
                                return {
                                    audio: 'juguan',
                                    viewAs: {
                                        name: links[0][2]
                                    },
                                    filterCard: true,
                                    check: function (card) {
                                        return 6 - get.value(card);
                                    },
                                    position: 'h',
                                    onuse: function (result, player) {
                                        player.addTempSkill('gz_juguan_effect');
                                    },
                                }
                            },
                            prompt: function (links) {
                                return '将一张手牌当做' + get.translation(links[0][2]) + '使用';
                            },
                        },
                        ai: {
                            order: function (item, player) {
                                return Math.max(get.order({
                                    name: 'sha'
                                }), get.order({
                                    name: 'juedou'
                                })) + 0.2;
                            },
                            result: {
                                player: 1
                            },
                        },
                        subSkill: {
                            effect: {
                                trigger: {
                                    global: 'damage'
                                },
                                forced: true,
                                charlotte: true,
                                firstDo: true,
                                silent: true,
                                popup: false,
                                filter: function (event, player) {
                                    var evt = event.getParent('useCard');
                                    return event.card && evt && event.card == evt.card && evt.skill == 'gz_juguan_backup' && evt.player == player;
                                },
                                content: function () {
                                    player.addSkill('gz_juguan_draw');
                                    player.markAuto('gz_juguan_draw', [trigger.player]);
                                },
                            },
                            draw: {
                                audio: 'juguan',
                                trigger: {
                                    player: 'phaseDrawBegin'
                                },
                                forced: true,
                                charlotte: true,
                                onremove: true,
                                content: function () {
                                    player.removeSkill('gz_juguan_draw');
                                    if (!trigger.numFixed) trigger.num += 1;
                                },
                                group: 'gz_juguan_clear',
                                intro: {
                                    content: '若没有受到$的伤害，则下个摸牌阶段多摸一张牌',
                                },
                            },
                            clear: {
                                trigger: {
                                    player: 'damage'
                                },
                                forced: true,
                                charlotte: true,
                                firstDo: true,
                                silent: true,
                                popup: false,
                                filter: function (event, player) {
                                    return player.storage.gz_juguan_draw && player.storage.gz_juguan_draw.contains(event.source);
                                },
                                content: function () {
                                    player.unmarkAuto('gz_juguan_draw', [trigger.source]);
                                    if (!player.storage.gz_juguan_draw || !player.storage.gz_juguan_draw.length) player.removeSkill('gz_juguan_draw');
                                },
                            },
                        },
                    },
                    // haomeng
                    gz_xiongmang: {
                        audio: 'xiongmang',
                        enable: 'chooseToUse',
                        viewAs: {
                            name: 'sha'
                        },
                        viewAsFilter: function (player) {
                            return player.countCards('hs') > 0;
                        },
                        selectCard: [1, 4],
                        selectTarget: function () {
                            var card = get.card(),
                                player = get.player();
                            if (card == undefined) return;
                            var range = [1, Math.max(1, ui.selected.cards.length)]
                            game.checkMod(card, player, range, 'selectTarget', player);
                            return range;
                        },
                        complexCard: true,
                        filterCard: function (card) {
                            if (!ui.selected.cards.length) return true;
                            var suit = get.suit(card);
                            for (var i of ui.selected.cards) {
                                if (get.suit(i) == suit) return false;
                            }
                            return true;
                        },
                        check: function (card) {
                            var player = _status.event.player,
                                card = get.autoViewAs({
                                    name: 'sha'
                                }, ui.selected.cards.concat(card));
                            if (game.countPlayer(function (current) {
                                    return get.effect_use(current, card, player, player) > 0;
                                }) <= ui.selected.cards.length) return 0;
                            return 5 - get.value(card);
                        },
                        position: 'hs',
                        onuse: function (links, player) {
                            player.addTempSkill('gz_xiongmang_effect');
                        },
                        ai: {
                            order: () => get.order({
                                name: 'sha'
                            }) + 0.2,
                            respondSha: true,
                            skillTagFilter: function (player, tag, arg) {
                                return player.countCards('hs') > 0;
                            },
                        },
                        subSkill: {
                            effect: {
                                trigger: {
                                    player: 'useCardAfter'
                                },
                                forced: true,
                                charlotte: true,
                                filter: function (event, player) {
                                    return event.skill == 'gz_xiongmang' && !player.hasHistory('sourceDamage', function (evt) {
                                        return evt.card == event.card;
                                    });
                                },
                                content: function () {
                                    player.loseHp();
                                },
                            },
                        },
                    },
                    // zhangmancheng
                    jl_guanlei: {
                        trigger: {
                            player: 'damageBegin1',
                        },
                        forced: true,
                        content: function () {
                            "step 0"
                            trigger.nature = 'thunder';
                            "step 1"
                            if (trigger.source != undefined) {
                                trigger.source.showHandcards();
                            }
                        },
                    },
                    jl_leiming: {
                        trigger: {
                            player: "damageEnd",
                        },
                        filter: function (event) {
                            return event.nature == 'thunder';
                        },
                        content: function () {
                            "step 0"
                            event.num2 = trigger.num;
                            "step 1"
                            player.draw();
                            "step 2"
                            player.useSkill("jl_leiming_buff");
                            "step 3"
                            event.num2--;
                            if (event.num2 > 0) {
                                player.chooseBool('是否继续发动【雷鸣】？');
                            } else {
                                event.finish();
                            }
                            "step 4"
                            if (result.bool) {
                                player.logSkill('jl_leiming');
                                game.delay(0.5);
                                event.goto(1);
                            }
                        },
                    },
                    jl_leiming_buff: {
                        direct: true,
                        silent: true,
                        popup: false,
                        content: function () {
                            "step 0"
                            player.chooseTarget(get.prompt('jl_leiming'), function (card, player, target) {
                                return player != target && target.countCards('hej') > 0;
                            }).ai = function (target) {
                                return ai.get.attitude(player, target) < 0;
                            };
                            "step 1"
                            if (result.bool) {
                                event.target = result.targets[0];
                                player.logSkill('jl_leiming', event.target);
                                event.target.useSkill("jl_leiming_buff_buff");
                            }
                        }
                    },
                    jl_leiming_buff_buff: {
                        direct: true,
                        silent: true,
                        popup: false,
                        content: function () {
                            player.discardPlayerCard(player, 'hej', true);
                        },
                    },
                    // qiuliju
                    gz_koulve: {
                        audio: 'koulve',
                        trigger: {
                            source: 'damageSource'
                        },
                        logTarget: 'player',
                        filter: function (event, player) {
                            return event.player.isDamaged() && event.player.countCards('h') > 0 && player.isPhaseUsing();
                        },
                        check: function (event, player) {
                            if (player.hp == 1 && player.isHealthy()) return false;
                            return get.attitude(player, event.player) <= 0;
                        },
                        content: function () {
                            'step 0'
                            player.choosePlayerCard(trigger.player, 'h', true, trigger.player.getDamagedHp());
                            'step 1'
                            var card = result.cards;
                            event.cards = card;
                            player.showCards(card, get.translation(player) + '发动了【宼略】');
                            'step 2'
                            var gains = [],
                                red = false;
                            var target = trigger.player;
                            for (var card of cards) {
                                var type = get.type2(card, target);
                                if ((type == 'basic' || type == 'trick') && get.tag(card, 'damage') > 0) gains.push(card);
                                if (!red && get.color(card, target) == 'red') red = true;
                            }
                            if (gains.length) player.gain(gains, 'gain2');
                            if (!red) event.finish();
                            'step 3'
                            player.loseHp();
                            player.draw();
                        },
                    },
                    // chenggongying
                    zmpingxi: {
                        trigger: {
                            player: "phaseUseBegin",
                        },
                        direct: true,
                        filter: function (event, player) {
                            if (player.countCards('h', 'sha') > 0) return true;
                            if (player.storage.zmwangzhi && player.storage.zmwangzhi.length) return true;
                            return false;
                        },
                        content: function () {
                            'step 0'
                            player.logSkill('zmpingxi');
                            var list = ['重铸杀', '使用杀'];
                            event.list = list;
                            if (player.countCards('h', 'sha') == 0 && player.storage.zmwangzhi) {
                                event.list.remove('重铸杀');
                            }
                            var num = game.countPlayer(function (current) {
                                return player.canUse({
                                    name: 'sha'
                                }, current, false);
                            });
                            if (num < 1) event.list.remove('使用杀');
                            player.chooseControl(event.list, 'cancel2').set('ai', function (evt, player) {
                                var controls = _status.event.controls;
                                var player = _status.event.player;
                                if (controls.contains('使用杀')) {
                                    return '使用杀';
                                }
                                return controls.randomGet();
                            }).set('prompt', '平西：请选择一项');
                            'step 1'
                            player.popup(result.control);
                            if (result.control == '使用杀') {
                                event.list.remove('重铸杀');
                                player.chooseToUse(function (card, player) {
                                    return card.name == 'sha';
                                });
                                event.goto(3);
                            } else if (result.control == 'cancel2') {
                                event.finish();
                                return;
                            } else if (result.control == '重铸杀') {
                                event.list.remove('使用杀');
                                event.choice = result.control;
                                player.chooseCard('h', true, function (card, player) {
                                    return card.name == 'sha';
                                });
                            }
                            'step 2'
                            if (result.bool) {
                                player.lose(result.cards, ui.discardPile);
                                player.draw('nodelay');
                            }
                            'step 3'
                            player.chooseTarget('平西：请指定一名角色', true, function (card, player, target) {
                                return player != target;
                            }).set('ai', function (target) {
                                return get.attitude(_status.event.player, target);
                            });
                            'step 4'
                            if (result.bool) {
                                event.target = result.targets[0];
                                player.logSkill('zmpingxi', event.target);
                                player.line(event.target, 'green');
                                var count = game.countPlayer(function (current) {
                                    return event.target.canUse({
                                        name: 'sha'
                                    }, current, false);
                                });
                                if (count < 1) event.list.remove('使用杀');
                                if (event.target.countCards('h', 'sha') == 0) {
                                    event.list.remove('使用杀');
                                    event.list.remove('重铸杀');
                                }
                                game.delay(3);
                                event.target.chooseControl(event.list, 'cancel2').set('ai', function (evt, player) {
                                    var controls = _status.event.controls;
                                    var player = _status.event.player;
                                    if (controls.contains('使用杀')) {
                                        return '使用杀';
                                    }
                                    if (controls.contains('重铸杀')) {
                                        return '重铸杀';
                                    }
                                    return controls.randomGet();
                                }).set('prompt', '平西：请选择一项');
                            }
                            'step 5'
                            event.target.popup(result.control);
                            if (result.control == '使用杀') {
                                event.target.chooseToUse(true, function (card, player) {
                                    return card.name == 'sha';
                                });
                                event.finish();
                            } else if (result.control == 'cancel2') {
                                if (event.choice == '重铸杀') {
                                    player.chooseUseTarget('sha', true);
                                } else player.draw('nodelay');
                                event.finish();
                            } else if (result.control == '重铸杀') {
                                event.target.chooseCard('h', true, function (card, player) {
                                    return card.name == 'sha';
                                });
                            }
                            'step 6'
                            if (result.bool) {
                                event.target.lose(result.cards, ui.discardPile);
                                event.target.draw('nodelay');
                            }
                        },
                    },
                    zmwangzhi: {
                        unique: true,
                        trigger: {
                            player: "gainAfter",
                        },
                        direct: true,
                        init: function (player) {
                            player.storage.zmwangzhi = [];
                        },
                        filter: function (event, player) {
                            var num = 0;
                            for (var i = 0; i < event.cards.length; i++) {
                                if (get.suit(event.cards[i]) == 'spade') num++;
                            }
                            return event.cards && event.cards.length > 0 && num > 0;
                        },
                        content: function () {
                            "step 0"
                            event.cards = trigger.cards.slice(0);
                            "step 1"
                            player.chooseCard('he', '是否将其中一张♠牌置于你的武将牌上？', function (card, player) {
                                return _status.event.getParent().cards.contains(card) && get.suit(card) == 'spade';
                            }).set('ai', function (card) {
                                if (card.name == 'du') return 20;
                                return 9 - get.value(card);
                            });
                            "step 2"
                            if (result.bool) {
                                player.$give(result.cards, player, false);
                                player.storage.zmwangzhi = player.storage.zmwangzhi.concat(result.cards);
                                player.lose(result.cards, ui.special, 'toStorage');
                                player.markSkill('zmwangzhi');
                                player.syncStorage('zmwangzhi');
                                game.log(player, '将', result.cards, '置于武将牌上');
                            }
                        },
                        intro: {
                            content: "cards",
                        },
                        group: ["zmwangzhi2", "zmwangzhi3"],
                    },
                    zmwangzhi2: {
                        trigger: {
                            player: "chooseToRespondBegin",
                        },
                        filter: function (event, player) {
                            if (event.responded) return false;
                            if (!event.filterCard({
                                    name: 'shan'
                                }, player, event) && !event.filterCard({
                                    name: 'sha'
                                }, player, event)) return false;
                            return player.storage.zmwangzhi && player.storage.zmwangzhi.length;
                        },
                        content: function () {
                            "step 0"
                            event.num = player.storage.zmwangzhi.length;
                            player.$throw(player.storage.zmwangzhi, 1000);
                            game.cardsDiscard(player.storage.zmwangzhi);
                            player.storage.zmwangzhi = [];
                            player.syncStorage('zmwangzhi');
                            player.unmarkSkill('zmwangzhi');
                            "step 1"
                            trigger.untrigger();
                            trigger.responded = true;
                            if (trigger.filterCard({
                                    name: 'shan',
                                    isCard: true
                                })) {
                                trigger.result = {
                                    bool: true,
                                    card: {
                                        name: 'shan',
                                        isCard: true
                                    }
                                }
                            } else {
                                trigger.result = {
                                    bool: true,
                                    card: {
                                        name: 'sha',
                                        isCard: true
                                    }
                                }
                            }
                            "step 2"
                            player.draw(event.num);
                            player.storage.zmwangzhi.length = 0;
                        },
                        ai: {
                            effect: {
                                target: function (card, player, target, effect) {
                                    if (get.tag(card, 'respondShan')) return 0.7;
                                    if (get.tag(card, 'respondSha')) return 0.7;
                                },
                            },
                        },
                    },
                    zmwangzhi3: {
                        enable: "chooseToUse",
                        filter: function (event, player) {
                            if (!player.storage.zmwangzhi) return false;
                            if (player.storage.zmwangzhi.length == 0) return false;
                            return event.filterCard({
                                name: 'sha'
                            }, player, event) || event.filterCard({
                                name: 'shan'
                            }, player, event);
                        },
                        chooseButton: {
                            dialog: function (event, player) {
                                var list = [];
                                if (event.filterCard({
                                        name: 'sha'
                                    }, player, event)) {
                                    list.push(['基本', '', 'sha']);
                                    list.push(['基本', '', 'sha', 'fire']);
                                    list.push(['基本', '', 'sha', 'thunder']);
                                }
                                if (event.filterCard({
                                        name: 'shan'
                                    }, player, event)) {
                                    list.push(['基本', '', 'shan']);
                                }
                                return ui.create.dialog('望志', [list, 'vcard'], 'hidden');
                            },
                            check: function (button) {
                                var player = _status.event.player;
                                var card = {
                                    name: button.link[2],
                                    nature: button.link[3]
                                };
                                if (card.name == 'sha') {
                                    if (card.nature == 'fire') return 2.95;
                                    else if (card.nature == 'fire') return 2.92;
                                    else return 2.9;
                                } else if (card.name == 'shan') {
                                    return 4;
                                }
                                return 0;
                            },
                            backup: function (links, player) {
                                return {
                                    filterCard: function () {
                                        return false
                                    },
                                    viewAs: {
                                        name: links[0][2],
                                        nature: links[0][3],
                                        isCard: true
                                    },
                                    selectCard: -1,
                                    popname: true,
                                    log: false,
                                    precontent: function () {
                                        'step 0'
                                        event.num = player.storage.zmwangzhi.length;
                                        player.$throw(player.storage.zmwangzhi, 1000);
                                        game.cardsDiscard(player.storage.zmwangzhi);
                                        player.storage.zmwangzhi = [];
                                        player.syncStorage('zmwangzhi');
                                        player.unmarkSkill('zmwangzhi');
                                        'step 1'
                                        player.draw(event.num);
                                        player.storage.zmwangzhi.length = 0;
                                    },
                                }
                            },
                            prompt: function (links, player) {
                                return '选择' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '的目标';
                            },
                        },
                        ai: {
                            order: 11,
                            respondShan: true,
                            respondSha: true,
                            result: {
                                player: function (player) {
                                    return 1;
                                },
                            },
                        },
                    },
                    // duangui
                    gz_jianning: {
                        enable: 'phaseUse',
                        usable: 1,
                        filterTarget: function (card, player, target) {
                            return target.countCards('h') < player.countCards('h');
                        },
                        content: function () {
                            'step 0'
                            player.swapHandcards(target);
                            'step 1'
                            // target.damage();
                        },
                        ai: {
                            order: 10,
                            result: {
                                target: function (player, target) {
                                    if (!player.countCards('h', function (card) {
                                            return get.value(card) >= 8;
                                        }) && player.countCards('h') - target.countCards('h') <= 1) {
                                        if (target.hp == 1 || player.countCards('h', function (card) {
                                                return get.value(card) < 0;
                                            })) {
                                            return get.damageEffect(target, player, target);
                                        }
                                    }
                                    return 0;
                                }
                            }
                        }
                    },
                    gz_changshi: {
                        enable: 'phaseUse',
                        usable: 1,
                        filterTarget: function (card, player, target) {
                            if (target == player) return false;
                            if (ui.selected.targets.length) {
                                return target.hp != ui.selected.targets[0].hp;
                            }
                            return true;
                        },
                        multitarget: true,
                        selectTarget: 2,
                        content: function () {
                            var tmp = targets[0].hp;
                            targets[0].hp = targets[1].hp;
                            targets[1].hp = tmp;
                            targets[0].update();
                            targets[1].update();
                            if (Math.abs(targets[0].hp - targets[1].hp) >= 1) {
                                player.loseHp();
                            }
                        },
                        ai: {
                            order: 10,
                            result: {
                                target: function (player, target) {
                                    if (target == game.zhu) return -1;
                                    if (get.attitude(player, target) > 3) {
                                        var num = game.zhu.hp - target.hp;
                                        if (num == 1) {
                                            return 1;
                                        }
                                        if (num > 1) {
                                            if (player.hp == 1) return num;
                                            if (target.hp == 1) return num;
                                            if (num >= 3) return num;
                                        }
                                    }
                                    return 0;
                                }
                            }
                        }
                    },
                    // zhangyan
                    zmfeiyan: {
                        trigger: {
                            global: "useCardToPlayer",
                        },
                        preHidden: true,
                        filter: function (event, player) {
                            return event.card && event.card.name == 'sha' && event.player != player && event.targets.length == 1 &&
                                get.distance(player, event.player, 'attack') <= 1 && player.countCards('h', 'sha') > 0;
                        },
                        content: function () {
                            "step 0"
                            var check = get.attitude(player, trigger.player) < 0;
                            player.chooseToUse({
                                name: 'sha'
                            }, '飞燕：是否对' + get.translation(trigger.player) + '使用一张【杀】？').set('targetRequired', true).set('complexSelect', true).set('filterTarget', function (card, player, target) {
                                if (target != _status.event.sourcex && !ui.selected.targets.contains(_status.event.sourcex)) return false;
                                return lib.filter.filterTarget.apply(this, arguments);
                            }).set('ai', function () {
                                if (_status.event.check) return 1;
                                return 0;
                            }).set('sourcex', trigger.player).set('check', check);
                            "step 1"
                            if (result.bool) {
                                player.draw();
                            } else event.finish();
                        },
                        mod: {
                            aiValue: function (player, card, num) {
                                if (card.name == 'sha') return 10;
                            },
                        },
                    },
                    // huzhen
                    zmbaoluan: {
                        trigger: {
                            player: "phaseZhunbeiBegin",
                        },
                        forced: true,
                        content: function () {
                            'step 0'
                            if (!player.countCards('he')) {
                                event.finish();
                            } else {
                                player.chooseToDiscard('he', true);
                            }
                        },
                    },
                    zmmozhong: {
                        trigger: {
                            source: "damageBegin2",
                        },
                        filter: function (event, player) {
                            return player.storage.zmmozhong2 && !player.getHistory('sourceDamage').length;
                        },
                        forced: true,
                        mark: true,
                        logTarget: "player",
                        check: function (trigger, player) {
                            if (get.attitude(player, trigger.player) >= -1) return false;
                            return !trigger.player.hasSkillTag('filterDamage', null, {
                                player: player,
                                card: trigger.card,
                            });
                        },
                        content: function () {
                            if (typeof player.storage.zmmozhong2 == 'number') {
                                trigger.num += player.storage.zmmozhong2;
                            }
                        },
                        intro: {
                            mark: function (dialog, content, player) {
                                if (typeof player.storage.zmmozhong2 != 'number') {
                                    return '上回合已损失体力：0';
                                }
                                return '上回合已损失体力：' + player.storage.zmmozhong2;
                            },
                        },
                        group: "zmmozhong2",
                    },
                    "zmmozhong2": {
                        trigger: {
                            global: "phaseJieshuBegin",
                        },
                        priority: -10,
                        silent: true,
                        content: function () {
                            player.storage.zmmozhong2 = player.getDamagedHp();
                            game.broadcast(function (player) {
                                player.storage.zmmozhong2 = player.getDamagedHp();
                            }, player);
                            game.addVideo('storage', player, ['zmmozhong2', player.storage.zmmozhong2]);
                        },
                        intro: {
                            content: function (storage, player) {
                                return '上回合已损失体力：' + storage;
                            },
                        },
                        forced: true,
                        popup: false,
                    },
                    // liubian
                    gz_shiyuan: {
                        audio: 'shiyuan',
                        trigger: {
                            target: 'useCardToTargeted'
                        },
                        // frequent:true,
                        filter: function (event, player) {
                            return player != event.player && event.player.hp >= player.hp && player.getHistory('gain', function (evt) {
                                return evt.getParent(2).name == 'gz_shiyuan' && evt.cards.length == (1 + get.sgn(event.player.hp - player.hp));
                            }).length < 1;
                        },
                        content: function () {
                            player.draw(1 + get.sgn(trigger.player.hp - player.hp));
                        },
                    },
                    // tangji
                    gz_jielie: {
                        audio: 'jielie',
                        trigger: {
                            player: 'showCharacterAfter',
                        },
                        direct: true,
                        filter: function (event, player) {
                            return !player.storage.gz_jielie && event.toShow.contains('gz_tangji');
                        },
                        content: function () {
                            'step 0'
                            player.chooseTarget('请选择【节烈】的目标', '其于回合外摸牌后，你摸等量的牌；其进入濒死状态时，你可令其回复体力至1点；其死亡后，你弃置所有牌并失去1点体力', lib.filter.notMe, true).set('ai', function (target) {
                                return get.attitude(_status.event.player, target) > 0;
                            });
                            'step 1'
                            if (result.bool) {
                                var target = result.targets[0];
                                player.logSkill('gz_jielie', target);
                                player.addSkill('gz_jielie_clear');
                                player.storage.gz_jielie = target;
                                player.markSkill('gz_jielie');
                                game.delayx();
                            }
                        },
                        intro: {
                            content: '已指定$为目标'
                        },
                        group: ['gz_jielie_draw', 'gz_jielie_dying', 'gz_jielie_die'],
                        subSkill: {
                            draw: {
                                audio: 'jielie',
                                trigger: {
                                    global: 'gainAfter'
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return player.countMark('gz_jielie_draw') < 3 && event.player == player.storage.gz_jielie && event.player != _status.currentPhase && event.cards && event.cards.length > 0;
                                },
                                logTarget: 'player',
                                content: function () {
                                    var num = Math.min(3 - player.countMark('gz_jielie_draw'), trigger.cards.length);
                                    player.addMark('gz_jielie_draw', num, false);
                                    player.draw(num);
                                },
                            },
                            clear: {
                                trigger: {
                                    global: 'phaseBeginStart'
                                },
                                forced: true,
                                firstDo: true,
                                popup: false,
                                charlotte: true,
                                filter: function (event, player) {
                                    return player.countMark('gz_jielie_draw') > 0;
                                },
                                content: function () {
                                    player.removeMark('gz_jielie_draw', player.countMark('gz_jielie_draw'), false);
                                },
                            },
                            dying: {
                                audio: 'jielie',
                                trigger: {
                                    global: 'dying'
                                },
                                logTarget: 'player',
                                filter: function (event, player) {
                                    return event.player == player.storage.gz_jielie && event.player.hp < 1 && !player.hasSkill('gz_jielie_temp');
                                },
                                check: function (event, player) {
                                    return get.attitude(player, event.player) > 0;
                                },
                                prompt2: '令其将体力值回复至1点',
                                content: function () {
                                    trigger.player.recover(1 - trigger.player.hp);
                                    player.addTempSkill('gz_jielie_temp', 'roundStart');
                                },
                            },
                            temp: {},
                            die: {
                                audio: 'jielie',
                                trigger: {
                                    global: 'dieAfter'
                                },
                                filter: function (event, player) {
                                    return event.player == player.storage.gz_jielie;
                                },
                                forced: true,
                                content: function () {
                                    var cards = player.getCards('he');
                                    if (cards.length) player.discard(cards);
                                    player.loseHp();
                                },
                            },
                        },
                        ai: {
                            threaten: 2,
                        },
                    },
                    // yanwen
                    gz_shuangxiong: {
                        trigger: {
                            player: "phaseDrawBegin1",
                        },
                        audio: "shuangxiong",
                        audioname: ['re_yanwen'],
                        check: function (event, player) {
                            if (player.countCards('h') > player.hp) return true;
                            if (player.countCards('h') > 3) return true;
                            return false;
                        },
                        filter: function (event, player) {
                            return !event.numFixed;
                        },
                        content: function () {
                            "step 0"
                            trigger.changeToZero();
                            event.cards = get.cards(2);
                            event.videoId = lib.status.videoId++;
                            game.broadcastAll(function (player, id, cards) {
                                var str;
                                if (player == game.me && !_status.auto) {
                                    str = '【双雄】选择获得其中一张牌';
                                } else {
                                    str = '双雄';
                                }
                                var dialog = ui.create.dialog(str, cards);
                                dialog.videoId = id;
                            }, player, event.videoId, event.cards);
                            event.time = get.utc();
                            game.addVideo('showCards', player, ['双雄', get.cardsInfo(event.cards)]);
                            game.addVideo('delay', null, 2);
                            "step 1"
                            var next = player.chooseButton([1, 1], true);
                            next.set('dialog', event.videoId);
                            next.set('ai', function (button) {
                                var player = _status.event.player;
                                var color = get.color(button.link);
                                var value = get.value(button.link, player);
                                if (player.countCards('h', {
                                        color: color
                                    }) > player.countCards('h', ['red', 'black'].remove(color)[0])) value += 5;
                                return value;
                            });
                            "step 2"
                            if (result.bool && result.links) {
                                var cards2 = [];
                                for (var i = 0; i < result.links.length; i++) {
                                    cards2.push(result.links[i]);
                                    cards.remove(result.links[i]);
                                }
                                game.cardsDiscard(cards);
                                event.card2 = cards2[0];
                            }
                            var time = 1000 - (get.utc() - event.time);
                            if (time > 0) {
                                game.delay(0, time);
                            }
                            "step 3"
                            game.broadcastAll('closeDialog', event.videoId);
                            var card2 = event.card2;
                            player.gain(card2, 'gain2');
                            player.addTempSkill('shuangxiong2');
                            player.storage.shuangxiong = get.color(card2);
                        },
                    },
                    // quyi
                    gz_fuqi: {
                        audio: 'fuqi',
                        forced: true,
                        trigger: {
                            player: "useCard",
                        },
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_fuqi')
                        },
                        filter: function (event, player) {
                            return event.card && (get.type(event.card) == 'trick' || get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].contains(event.card.name)) && game.hasPlayer(function (current) {
                                return current != player && get.distance(current, player) <= 1;
                            });
                        },
                        content: function () {
                            trigger.directHit.addArray(game.filterPlayer(function (current) {
                                return current != player && get.distance(current, player) <= 1;
                            }));
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter: function (player, tag, arg) {
                                return get.distance(arg.target, player) <= 1;
                            },
                        },
                    },
                    gz_jiaozi: {
                        audio: 'jiaozi',
                        trigger: {
                            player: 'damageBegin3',
                            source: 'damageBegin1'
                        },
                        viceSkill: true,
                        init: function (player) {
                            player.checkViceSkill('gz_jiaozi');
                        },
                        forced: true,
                        filter: function (event, player) {
                            return player.isMaxHandcard(true);
                        },
                        content: function () {
                            trigger.num++;
                        },
                        ai: {
                            presha: true
                        },
                    },
                    // liuzhang
                    gz_jutu: {
                        audio: 'xiusheng',
                        trigger: {
                            player: 'phaseZhunbeiBegin'
                        },
                        forced: true,
                        filter: function (event, player) {
                            return player.storage.yaohu && game.hasPlayer(function (current) {
                                return current.group == player.storage.yaohu;
                            });
                        },
                        content: function () {
                            'step 0'
                            var cards = player.getExpansions('jutu');
                            if (cards.length > 0) {
                                player.discard(cards, 'gain2');
                            }
                            'step 1'
                            event.num = game.countPlayer(function (current) {
                                return current.group == player.storage.yaohu;
                            });
                            // player.draw(event.num);
                            player.draw()
                            if (!event.num) event.finish();
                            'step 2'
                            var he = player.getCards('he');
                            if (!he.length) event.finish();
                            else if (he.length < num) event._result = {
                                bool: true,
                                cards: he
                            };
                            else player.chooseCard('he', true, num, '选择' + get.cnNumber(num) + '张牌作为生');
                            'step 3'
                            if (result.bool) {
                                var cards = result.cards;
                                player.addToExpansion(player, 'give', cards).gaintag.add('jutu');
                            }
                            'step 4'
                            game.delayx();
                        },
                        intro: {
                            content: 'expansion',
                            markcount: 'expansion',
                        },
                        onremove: function (player, skill) {
                            var cards = player.getExpansions(skill);
                            if (cards.length) player.loseToDiscardpile(cards);
                        },
                        ai: {
                            combo: 'yaohu'
                        },
                    },
                    // caojie
                    gz_shouxi: {
                        audio: 'shouxi',
                        trigger: {
                            target: 'useCardToTargeted'
                        },
                        direct: true,
                        init: function (player) {
                            if (!player.storage.gz_shouxi) player.storage.gz_shouxi = [];
                        },
                        filter: function (event, player) {
                            return event.card.name == 'sha' && event.player.isAlive();
                        },
                        content: function () {
                            'step 0'
                            var list = lib.inpile.filter(function (i) {
                                if (player.storage.gz_shouxi.contains(i)) return false;
                                var type = get.type(i);
                                if (type == 'basic') return true;
                                return false;
                            });
                            for (var i = 0; i < list.length; i++) {
                                list[i] = [get.type(list[i]), '', list[i]];
                            }
                            player.chooseButton([get.prompt('gz_shouxi', trigger.player), [list, 'vcard']]).set('ai', function (button) {
                                return Math.random();
                            });
                            'step 1'
                            if (result.bool) {
                                player.logSkill('gz_shouxi');
                                var name = result.links[0][2];
                                event.vcard = result.links;
                                event.cardname = name;
                                player.storage.gz_shouxi.add(name);
                            } else {
                                event.finish();
                            }
                            'step 2'
                            var name = event.cardname;
                            trigger.player.chooseToDiscard(function (card) {
                                return card.name == _status.event.cardname;
                            }).set('ai', function (card) {
                                if (_status.event.att < 0) {
                                    return 10 - get.value(card);
                                }
                                return 0;
                            }).set('att', get.attitude(trigger.player, player)).set('cardname', name).set('dialog', ['守玺：请弃置一张【' + get.translation(name) + '】，否则此【杀】对' + get.translation(player) + '无效', [event.vcard, 'vcard']]);
                            'step 3'
                            if (result.bool == false) {
                                trigger.excluded.push(player);
                            } else {
                                trigger.player.gainPlayerCard(player);
                            }
                        },
                        ai: {
                            effect: {
                                target: function (card, player, target, current) {
                                    if (card.name == 'sha' && get.attitude(player, target) < 0) {
                                        return 0.6;
                                    }
                                }
                            }
                        }
                    },
                    // yl_luzhi
                    gz_mingren: {
                        audio: "nzry_mingren_1",
                        marktext: "任",
                        intro: {
                            content: 'expansion',
                            markcount: 'expansion',
                        },
                        onremove: function (player, skill) {
                            var cards = player.getExpansions(skill);
                            if (cards.length) player.loseToDiscardpile(cards);
                        },
                        group: ["gz_mingren_1", "gz_mingren_2"],
                        subSkill: {
                            1: {
                                audio: 'nzry_mingren',
                                trigger: {
                                    player: 'showCharacterAfter',
                                },
                                forced: true,
                                locked: false,
                                filter: function (event, player) {
                                    return (event.name != 'phase' || game.phaseNumber == 0) && !player.getExpansions('nzry_mingren').length && event.toShow.contains('gz_yl_luzhi');
                                },
                                content: function () {
                                    'step 0'
                                    player.draw(2);
                                    'step 1'
                                    if (!player.countCards('h')) event.finish();
                                    else player.chooseCard('h', '将一张手牌置于武将牌上，称为“任”', true).set('ai', function (card) {
                                        return 6 - get.value(card);
                                    });
                                    'step 2'
                                    if (result.bool) {
                                        player.addToExpansion(result.cards[0], player, 'give', 'log').gaintag.add('nzry_mingren');
                                    };
                                },
                            },
                            2: {
                                audio: 'nzry_mingren',
                                trigger: {
                                    player: 'phaseJieshuBegin',
                                },
                                filter: function (event, player) {
                                    return player.countCards('h') > 0 && player.getExpansions('nzry_mingren').length > 0;
                                },
                                direct: true,
                                content: function () {
                                    'step 0'
                                    player.chooseCard('h', '是否用一张手牌替换“任”（' + get.translation(player.getExpansions('nzry_mingren')[0]) + '）？').set('ai', function (card) {
                                        var player = _status.event.player;
                                        var color = get.color(card);
                                        if (color == get.color(player.getExpansions('nzry_mingren')[0])) return false;
                                        var num = 0;
                                        var list = [];
                                        player.countCards('h', function (cardx) {
                                            if (cardx != card || get.color(cardx) != color) return false;
                                            if (list.contains(cardx.name)) return false;
                                            list.push(cardx.name);
                                            switch (cardx.name) {
                                                case 'wuxie':
                                                    num += (game.countPlayer() / 2.2);
                                                    break;
                                                case 'caochuan':
                                                    num += 1.1;
                                                    break;
                                                case 'shan':
                                                    num += 1;
                                                    break;
                                            }
                                        });
                                        return num * (30 - get.value(card));
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('gz_mingren');
                                        player.addToExpansion(result.cards[0], 'log', 'give', player).gaintag.add('nzry_mingren');
                                        var card = player.getExpansions('nzry_mingren')[0];
                                        if (card) player.gain(card, 'gain2');
                                    };
                                },
                            },
                        },
                        ai: {
                            combo: 'nzry_zhenliang',
                        },
                    },
                    gz_zhenliang: {
                        inherit: 'nzry_zhenliang',
                        audio: 'nzry_zhenliang',
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_zhenliang')
                        }
                    },
                    // caoxing
                    gz_liushi: {
                        audio: 'cxliushi',
                        enable: 'phaseUse',
                        usable: 1,
                        filter: function (event, player) {
                            return player.countCards('he', {
                                suit: 'heart'
                            }) > 0;
                        },
                        filterCard: {
                            suit: 'heart'
                        },
                        position: 'he',
                        filterTarget: function (card, player, target) {
                            return player.canUse('sha', target, false);
                        },
                        check: function (card) {
                            var player = _status.event.player;
                            var next = player.getNext();
                            var att = get.attitude(player, next);
                            if (att > 0) {
                                var js = next.getCards('j');
                                if (js.length) return get.judge(js[0]) + 10 - get.value(card);
                                return 9 - get.value(card)
                            }
                            return 6 - get.value(card);
                        },
                        discard: false,
                        prepare: 'throw',
                        loseTo: 'cardPile',
                        visible: true,
                        insert: true,
                        content: function () {
                            game.log(player, '将', cards, '置于牌堆顶');
                            player.useCard({
                                name: 'sha',
                                isCard: true
                            }, false, targets).card.gz_liushi = true;
                        },
                        group: 'gz_liushi_damage',
                        subSkill: {
                            damage: {
                                trigger: {
                                    source: 'damageSource'
                                },
                                forced: true,
                                popup: false,
                                filter: function (event, player) {
                                    return event.card && event.card.gz_liushi == true && event.player.isAlive() && event.getParent(3).name == 'gz_liushi';
                                },
                                content: function () {
                                    trigger.player.addMark('gz_liushi2', 1);
                                    trigger.player.addSkill('gz_liushi2');
                                },
                            },
                        },
                        ai: {
                            order: function () {
                                return get.order({
                                    name: 'sha'
                                }) - 0.4;
                            },
                            result: {
                                target: function (player, target) {
                                    var eff = get.effect(target, {
                                        name: 'sha'
                                    }, player, target);
                                    var damageEff = get.damageEffect(target, player, player);
                                    if (eff > 0) return damageEff > 0 ? 0 : eff;
                                    if (target.hasSkill('bagua_skill') || target.hasSkill('rw_bagua_skill') || target.hasSkill('bazhen')) return 0;
                                    return eff;
                                },
                            },
                        },
                    },
                    gz_liushi2: {
                        mod: {
                            maxHandcard: function (player, num) {
                                return num - player.countMark('gz_liushi2');
                            },
                        },
                        onremove: true,
                        charlotte: true,
                        intro: {
                            name2: '流',
                            content: '手牌上限-#',
                        },
                    },
                    // zhujun
                    gz_gongjian: {
                        audio: 'gongjian',
                        trigger: {
                            player: 'useCardToPlayered'
                        },
                        usable: 1,
                        logTarget: 'target',
                        filter: function (event, player) {
                            if (event.card.name != 'sha') return false;
                            if (event.parent.gz_gongjian_targets && event.parent.gz_gongjian_targets.filter(function (target) {
                                    return event.targets.contains(target);
                                }).length > 0) return event.target.countDiscardableCards(player, 'he') > 0;
                            var evt = event.getParent();
                            var history = player.getAllHistory('useCard', function (evtx) {
                                return evtx.card.name == 'sha'
                            });
                            var index = history.indexOf(evt);
                            return index > 0 && history[index - 1].targets.filter(function (target) {
                                return evt.targets.contains(target);
                            }).length > 0 && event.target.countDiscardableCards(player, 'he') > 0;
                        },
                        check: function (event, player) {
                            return get.attitude(player, event.target) <= 0;
                        },
                        content: function () {
                            'step 0'
                            player.discardPlayerCard(trigger.target, true, 'he', 1);
                            'step 1'
                            if (result.bool) {
                                var cards = result.cards.filter(function (card) {
                                    return get.name(card, card.original == 'h' ? trigger.target : false) == 'sha';
                                });
                                if (cards.length) player.gain(cards, 'gain2', 'log');
                            }
                        },
                        group: 'gz_gongjian_count',
                        subSkill: {
                            count: {
                                trigger: {
                                    global: 'useCard1'
                                },
                                silent: true,
                                firstDo: true,
                                filter: function (event, player) {
                                    return event.card && event.card.name == 'sha';
                                },
                                content: function () {
                                    if (player.storage.gz_gongjian) trigger.gz_gongjian_targets = player.storage.gz_gongjian;
                                    player.storage.gz_gongjian = trigger.targets;
                                },
                            },
                        },
                    },
                    gz_kuimang: {
                        audio: 'kuimang',
                        trigger: {
                            global: 'dieAfter'
                        },
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_kuimang')
                        },
                        forced: true,
                        filter: function (event, player) {
                            return player.getAllHistory('sourceDamage', function (target) {
                                return target.player == event.player;
                            }).length > 0;
                        },
                        content: function () {
                            player.draw(2);
                        },
                    },
                    // huangfusong
                    gz_shiji: {
                        audio: 'spshiji',
                        trigger: {
                            source: 'damageBegin2'
                        },
                        logTarget: 'player',
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_zhengnan')
                        },
                        filter: function (event, player) {
                            return player != event.player && event.player.countCards('h') > 0 && !player.isMaxHandcard(true);
                        },
                        check: function (event, player) {
                            return get.attitude(player, event.player) <= 0;
                        },
                        content: function () {
                            var target = trigger.player;
                            player.viewHandcards(target);
                            var hs = target.getCards('h', {
                                color: 'red'
                            });
                            if (hs.length) {
                                target.discard(hs);
                                player.draw(hs.length);
                            }
                        },
                    },
                    // duanwei
                    gz_langmie: {
                        trigger: {
                            global: 'phaseUseEnd'
                        },
                        forced: true,
                        filter: function (event, player) {
                            if (player == event.player || !player.countCards('he')) return false;
                            var map = {};
                            var list = event.player.getHistory('useCard', function (evt) {
                                var evt2 = evt.getParent('phaseUse');
                                return evt2 == event;
                            });
                            for (var i of list) {
                                var name = get.type2(i.card, false);
                                if (!map[name]) map[name] = true;
                                else return true;
                            }
                        },
                        direct: true,
                        content: function () {
                            'step 0'
                            player.chooseToDiscard('he', get.prompt('gz_langmie'), '重铸一张牌').set('ai', (card) => 8 - get.value(card)).logSkill = 'gz_langmie';
                            'step 1'
                            if (result.bool) player.draw();
                        },
                        group: 'gz_langmie_damage',
                    },
                    gz_langmie_damage: {
                        audio: 'langmie',
                        trigger: {
                            global: 'phaseEnd'
                        },
                        direct: true,
                        filter: function (event, player) {
                            return event.player != player && (event.player.getStat('damage') || 0) > 1 && player.countCards('he') > 0;
                        },
                        content: function () {
                            'step 0'
                            player.chooseToDiscard('he', get.prompt('gz_langmie', trigger.player), '弃置一张牌并对其造成1点伤害').set('goon', get.damageEffect(trigger.player, player, player) > 0).set('ai', function (card) {
                                if (!_status.event.goon) return 0;
                                return 7 - get.value(card);
                            }).logSkill = ['gz_langmie_damage', trigger.player];
                            'step 1'
                            if (result.bool) trigger.player.damage();
                        },
                        ai: {
                            expose: 0.2
                        },
                    },
                    // wuanguo
                    gz_nuchui: {
                        trigger: {
                            source: "damageBegin1",
                        },
                        init: function (player) {
                            if (!player.storage.gz_nuchui) player.storage.gz_nuchui = [];
                        },
                        mark: true,
                        locked: true,
                        intro: {
                            content: function (storage) {
                                if (!storage.length) return '';
                                var str = get.translation(storage);
                                return '已对' + str + '造成过伤害';
                            },
                        },
                        filter: function (event) {
                            return event.card && event.notLink() && (event.card.name == 'sha' || event.card.name == 'juedou');
                        },
                        forced: true,
                        content: function () {
                            if (!player.storage.gz_nuchui.contains(trigger.player)) {
                                player.chooseToDiscard('he', '弃置两张牌令伤害加一', 2, true);
                                trigger.num++;
                                player.storage.gz_nuchui.push(trigger.player);
                                player.syncStorage('gz_nuchui');
                            } else if (player.storage.gz_nuchui.contains(trigger.player)) {
                                player.storage.gz_nuchui.remove(trigger.player);
                            }
                            player.updateMarks();
                        },
                    },



                    // xurong
                    gz_xionghuo: {
                        group: ["gz_xionghuo_begin", "gz_xionghuo_damage", "gz_xionghuo_init"],
                        subSkill: {
                            begin: {
                                audio: 'xinfu_xionghuo',
                                logTarget: 'player',
                                line: false,
                                forced: true,
                                trigger: {
                                    global: "phaseUseBegin",
                                },
                                filter: function (event, player) {
                                    return event.player.countMark('xionghuo') > 0 && event.player != player;
                                },
                                content: function () {
                                    'step 0'
                                    trigger.player.removeMark('xionghuo', trigger.player.countMark('xionghuo'));
                                    var list = [1, 2, 3];
                                    var num = list.randomGet();
                                    event.goto(num);
                                    'step 1'
                                    player.line(trigger.player, 'fire');
                                    trigger.player.damage('fire');
                                    if (!trigger.player.storage.xionghuo_disable) trigger.player.storage.xionghuo_disable = [];
                                    trigger.player.storage.xionghuo_disable.push(player);
                                    trigger.player.addTempSkill('xionghuo_disable', 'phaseAfter');
                                    event.goto(4);
                                    'step 2'
                                    player.line(trigger.player, 'water');
                                    trigger.player.loseHp();
                                    trigger.player.addMark('xionghuo_low', 1, false);
                                    trigger.player.addTempSkill('xionghuo_low', 'phaseAfter');
                                    event.goto(4);
                                    'step 3'
                                    player.line(trigger.player, 'green');
                                    var card1 = trigger.player.getCards('h').randomGet();
                                    var card2 = trigger.player.getCards('e').randomGet();
                                    var list = [];
                                    if (card1) list.push(card1);
                                    if (card2) list.push(card2);
                                    if (list.length > 0) {
                                        player.gain(list, trigger.player, 'giveAuto', 'bySelf');
                                    }
                                    'step 4'
                                    game.delay();
                                },
                            },
                            damage: {
                                audio: "xinfu_xionghuo",
                                sub: true,
                                forced: true,
                                trigger: {
                                    source: "damageBegin1",
                                },
                                filter: function (event, player) {
                                    return event.player.countMark('xionghuo') > 0;
                                },
                                content: function () {
                                    trigger.num++;
                                },
                            },
                            init: {
                                audio: 'xinfu_xionghuo',
                                trigger: {
                                    player: "showCharacterAfter",
                                },
                                forced: true,
                                locked: false,
                                filter: function (event, player) {
                                    return (event.name != 'phase' || game.phaseNumber == 0) && event.toShow.contains('gz_xurong');
                                },
                                content: function () {
                                    player.addMark("xionghuo", 3);
                                },
                            },
                        },
                        audio: 'xinfu_xionghuo',
                        enable: "phaseUse",
                        filter: function (event, player) {
                            return player.countMark('xionghuo') > 0;
                        },
                        filterTarget: function (card, player, target) {
                            if (target.hasMark('xionghuo')) return false;
                            return player != target > 0;
                        },
                        content: function () {
                            player.removeMark('xionghuo', 1);
                            target.addMark('xionghuo', 1);
                        },
                        ai: {
                            order: 11,
                            result: {
                                target: function (player, target) {
                                    if ((player.countMark('xionghuo') >= 2 || !game.hasPlayer(function (current) {
                                            return current != player && get.attitude(player, current) < 0 && current.hasMark('xionghuo');
                                        })) && player.countCards('h', function (card) {
                                            return get.tag(card, 'damage') && player.canUse(card, target, null, true) &&
                                                player.getUseValue(card) > 0 && get.effect_use(target, card, player) > 0 &&
                                                target.hasSkillTag('filterDamage', null, {
                                                    player: player,
                                                    card: card,
                                                });
                                        })) return 3 / Math.max(1, target.hp);
                                    if ((!player.hasUnknown() && game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0;
                                        }) <= 1) || player.countMark('xionghuo') >= 2) {
                                        return -1;
                                    }
                                    return 0;
                                },
                            },
                            effect: {
                                player: function (card, player, target) {
                                    if (player != target && get.tag(card, 'damage') && target && target.hasMark('xionghuo') && !target.hasSkillTag('filterDamage', null, {
                                            player: player,
                                            card: card,
                                        })) return [1, 0, 1, -2];
                                },
                            },
                            threaten: 1.6,
                        },
                    },
                    gz_shajue: {
                        inherit: 'xinfu_shajue',
                        audio: 'xinfu_shajue',
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_shajue')
                        }
                    },
                    // qianzhao
                    yuanzhen3d8: {
                        audio: "junxing",
                        trigger: {
                            player: "useCardToPlayered",
                        },
                        logTarget: "target",
                        preHidden: true,
                        forced: true,
                        filter: function (event, player) {
                            if (event.targets.length > 1) return false;
                            return get.distance(player, event.target) > 1;
                        },
                        check: function (event, player) {
                            if (get.attitude(player, event.target) > 0) return true;
                            var target = event.target;
                            return target.countCards("h") == 0 || !target.hasSkillTag("noh");
                        },
                        content: function () {
                            "step 0"
                            trigger.target.chooseToDiscard("he", "弃置一张牌，或令" + get.translation(player) + "摸一张牌").set("ai", function (card) {
                                var trigger = _status.event.getTrigger();
                                return -get.attitude(trigger.target, trigger.player) - get.value(card);
                            });
                            "step 1"
                            if (result.bool == false) player.draw();
                        },
                        effect: {
                            player: function (card, player, target, current) {
                                if (get.tag(card, 'multitarget')) {
                                    if ((card.name == 'nanman' || card.name == 'wanjian') && game.filterPlayer().length == 2) return [1, 1];
                                    return;
                                }
                                if (get.distance(player, event.target) <= 1) return;
                                return [1, 1];
                            },
                        },
                    },
                    zhirong3d8: {
                        audio: "yuce",
                        trigger: {
                            player: "phaseUseBegin",
                        },
                        preHidden: true,
                        filter: function (event, player) {
                            var players = game.filterPlayer();
                            var check = game.hasPlayer(function (current) {
                                if (current.countCards("e") == 0) return false;
                                var cards = current.getCards("e");
                                for (var i = 0; i < cards.length; i++) {
                                    var card = cards[i];
                                    for (var j = 0; j < players.length; j++) {
                                        if (players[i] == current) continue;
                                        if (!current.canUse({
                                                name: "guohe",
                                                isCard: true
                                            }, players[i], false)) continue;
                                        if (get.subtype(card) == 'equip1' && !players[i].isDisabled(1)) return true;
                                        if (get.subtype(card) == 'equip2' && !players[i].isDisabled(2)) return true;
                                        if (get.subtype(card) == 'equip3' && !players[i].isDisabled(3)) return true;
                                        if (get.subtype(card) == 'equip4' && !players[i].isDisabled(4)) return true;
                                        if (get.subtype(card) == 'equip5' && !players[i].isDisabled(5)) return true;
                                    }
                                }
                                return false;
                            });
                            return check;
                        },
                        direct: true,
                        content: function () {
                            "step 0"
                            var next = player.chooseTarget(2, function (card, player, target) {
                                if (ui.selected.targets.length) {
                                    var current = ui.selected.targets[0];
                                    if (!ui.selected.targets[0].canUse({
                                            name: "guohe",
                                            isCard: true
                                        }, target, false)) return false;
                                    var cards = current.getCards("e");
                                    for (var i = 0; i < cards.length; i++) {
                                        var card = cards[i];
                                        if (get.subtype(card) == 'equip1' && !target.isDisabled(1)) return true;
                                        if (get.subtype(card) == 'equip2' && !target.isDisabled(2)) return true;
                                        if (get.subtype(card) == 'equip3' && !target.isDisabled(3)) return true;
                                        if (get.subtype(card) == 'equip4' && !target.isDisabled(4)) return true;
                                        if (get.subtype(card) == 'equip5' && !target.isDisabled(5)) return true;
                                    }
                                    return false;
                                } else {
                                    return target.countCards("e") > 0 && game.hasPlayer(function (current) {
                                        return target.canUse({
                                            name: "guohe",
                                            isCard: true
                                        }, current, false);
                                    });
                                }
                            });
                            next.set("ai", function (target) {
                                var player = _status.event.player;
                                var att = get.attitude(player, target);
                                var sgnatt = get.sgn(att);
                                var players = game.filterPlayer();
                                if (ui.selected.targets.length == 0) {
                                    var cards = target.getCards("e");
                                    var max = -1000;
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i] == target) continue;
                                        if (!target.canUse({
                                                name: "guohe",
                                                isCard: true
                                            }, players[i], false)) continue;
                                        var val = get.effect(players[i], {
                                            name: 'guohe'
                                        }, target, player);
                                        for (var j = 0; j < cards.length; j++) {
                                            var card = cards[j];
                                            if (get.subtype(card) == 'equip1' && players[i].isDisabled(1)) continue;
                                            if (get.subtype(card) == 'equip2' && players[i].isDisabled(2)) continue;
                                            if (get.subtype(card) == 'equip3' && players[i].isDisabled(3)) continue;
                                            if (get.subtype(card) == 'equip4' && players[i].isDisabled(4)) continue;
                                            if (get.subtype(card) == 'equip5' && players[i].isDisabled(5)) continue;
                                            var val1 = get.effect(players[i], card, player, player) + val - get.effect(target, card, player, player);
                                            var att1 = get.attitude(player, target);
                                            var att2 = get.attitude(player, players[i]);
                                            if (!players[i].isEmpty(get.subtype(card))) {
                                                val1 -= get.effect(players[i], players[i].getEquip(get.subtype(card)), player, player);
                                            }
                                            if (att1 > 0 && att2 > 0) {
                                                if (card.name == 'baiyin' && target.isDamaged()) val1 += 10;
                                                else if (val < 0) val1 = -200;
                                                else if (val > 0) val1 += 5;
                                            }
                                            if (att1 > 0 && att2 < 0) {
                                                if (get.effect(players[i], card, player, player) < 0) val1 -= 30;
                                            }
                                            if (att1 < 0 && att2 > 0) {
                                                if (get.effect(target, card, player, player) < 0) val1 += 30;
                                            }
                                            if (att1 < 0 && att2 < 0) {
                                                if (card.name == 'baiyin' && target.isDamaged()) val1 = -100;
                                                else if (get.effect(players[i], {
                                                        name: 'guohe'
                                                    }, target, target) > 0) val1 -= 10;
                                                else val1 += 20;
                                            }
                                            if (att1 == 0 && att2 == 0) va1 = -100;
                                            if (att1 == 0) va1 = -100;
                                            if (att2 == 0 && att1 > 0) val1 -= 40;
                                            max = Math.max(max, val1);
                                        }
                                    }
                                    return max;
                                }
                                var cards = ui.selected.targets[0].getCards("e");
                                var current = ui.selected.targets[0];
                                var max = -1000;
                                var val = get.effect(target, {
                                    name: 'guohe'
                                }, current, player);
                                for (var j = 0; j < cards.length; j++) {
                                    var card = cards[j];
                                    if (get.subtype(card) == 'equip1' && target.isDisabled(1)) continue;
                                    if (get.subtype(card) == 'equip2' && target.isDisabled(2)) continue;
                                    if (get.subtype(card) == 'equip3' && target.isDisabled(3)) continue;
                                    if (get.subtype(card) == 'equip4' && target.isDisabled(4)) continue;
                                    if (get.subtype(card) == 'equip5' && target.isDisabled(5)) continue;
                                    var val1 = get.effect(target, card, player, player) + val - get.effect(current, card, player, player);
                                    var att1 = get.attitude(player, current);
                                    var att2 = get.attitude(player, target);
                                    if (!target.isEmpty(get.subtype(card))) {
                                        val1 -= get.effect(target, target.getEquip(get.subtype(card)), player, player);
                                    }
                                    if (att1 > 0 && att2 > 0) {
                                        if (card.name == 'baiyin' && current.isDamaged()) val1 += 10;
                                        else if (val < 0) val1 = -200;
                                        else if (val > 0) val1 += 5;
                                    }
                                    if (att1 > 0 && att2 < 0) {
                                        if (get.effect(target, card, player, player) < 0) val1 -= 30;
                                    }
                                    if (att1 < 0 && att2 > 0) {
                                        if (get.effect(current, card, player, player) < 0) val1 += 30;
                                    }
                                    if (att1 < 0 && att2 < 0) {
                                        if (card.name == 'baiyin' && current.isDamaged()) val1 = -100;
                                        else if (get.effect(target, {
                                                name: 'guohe'
                                            }, current, current) > 0) val1 -= 10;
                                        else val1 += 20;
                                    }
                                    if (att1 == 0 && att2 == 0) va1 = -100;
                                    if (att1 == 0) va1 = -100;
                                    if (att2 == 0 && att1 > 0) val1 -= 40;
                                    max = Math.max(max, val1);
                                }
                                return max;
                            });
                            next.set("multitarget", true);
                            next.set("targetprompt", _status.event.targetprompt || ["被移走", "移动目标"]);
                            next.set("prompt", event.prompt || "移动场上的一张装备牌");
                            if (event.prompt2) next.set("prompt2", event.prompt2);
                            if (event.forced) next.set("forced", true);
                            "step 1"
                            event.result = result;
                            if (result.bool) {
                                player.line2(result.targets, "green");
                                event.targets = result.targets;
                            } else {
                                event.finish();
                            }
                            "step 2"
                            if (event.targets.length == 2) {
                                player.choosePlayerCard("e", true, function (button) {
                                    var player = _status.event.player;
                                    var targets0 = _status.event.targets0;
                                    var targets1 = _status.event.targets1;
                                    var card = button.link;
                                    var val = get.effect(targets1, {
                                        name: 'guohe'
                                    }, targets0, player)
                                    var val1 = get.effect(targets1, card, player, player) + val -
                                        get.effect(targets0, card, player, player);
                                    var att1 = get.attitude(player, targets0);
                                    var att2 = get.attitude(player, targets1);
                                    if (!targets1.isEmpty(get.subtype(card))) {
                                        val1 -= get.effect(targets1, targets1.getEquip(get.subtype(card)), player, player);
                                    }
                                    if (att1 > 0 && att2 > 0) {
                                        if (card.name == 'baiyin' && targets0.isDamaged()) val1 += 10;
                                        else if (val < 0) val1 = -200;
                                        else if (val > 0) val1 += 5;
                                    }
                                    if (att1 > 0 && att2 < 0) {
                                        if (get.effect(targets1, card, player, player) < 0) val1 -= 30;
                                    }
                                    if (att1 < 0 && att2 > 0) {
                                        if (get.effect(targets0, card, player, player) < 0) val1 += 30;
                                    }
                                    if (att1 < 0 && att2 < 0) {
                                        if (card.name == 'baiyin' && targets0.isDamaged()) val1 = -100;
                                        else if (get.effect(targets1, {
                                                name: 'guohe'
                                            }, targets0, targets0) > 0) val1 -= 10;
                                        else val1 += 20;
                                    }
                                    if (att1 == 0 && att2 == 0) va1 = -100;
                                    if (att1 == 0) va1 = -100;
                                    if (att2 == 0 && att1 > 0) val1 -= 40;
                                    return val1;
                                }, targets[0]).set("targets0", targets[0]).set("targets1", targets[1]).set("filterButton", function (button) {
                                    var targets1 = _status.event.targets1;
                                    var card = button.link;
                                    if (get.subtype(card) == 'equip1' && !targets1.isDisabled(1)) return true;
                                    if (get.subtype(card) == 'equip2' && !targets1.isDisabled(2)) return true;
                                    if (get.subtype(card) == 'equip3' && !targets1.isDisabled(3)) return true;
                                    if (get.subtype(card) == 'equip4' && !targets1.isDisabled(4)) return true;
                                    if (get.subtype(card) == 'equip5' && !targets1.isDisabled(5)) return true;
                                    return false;
                                });
                            } else {
                                event.finish();
                            }
                            "step 3"
                            if (result.bool && result.links.length) {
                                player.logSkill("zhirong3d8", event.targets);
                                var link = result.links[0];
                                if (get.position(link) == "e") {
                                    event.targets[1].equip(link);
                                }
                                event.targets[0].$give(link, event.targets[1], false);
                                game.log(event.targets[0], "的", link, "被移动给了", event.targets[1])
                                event.result.card = link;
                                event.result.position = get.position(link);
                                game.delay();
                            } else event.finish();
                            "step 4"
                            event.targets[0].useCard({
                                name: "guohe",
                                isCard: true
                            }, event.targets[1]);
                        },
                    },
                    // hanlong
                    gz_ciqiu: {
                        trigger: {
                            source: "damageBegin1"
                        },
                        forced: true,
                        filter: function (event) {
                            return event.card && event.card.name == 'sha' && event.player.isHealthy();
                        },
                        content: function () {
                            "step 0"
                            trigger.num++;
                            if (trigger.num >= trigger.player.hp) {
                                trigger.player.addTempSkill('gz_ciqiu_dying');
                                if (player.checkMainSkill('gz_ciqiu', false)) {
                                    player.removeCharacter(0);
                                } else {
                                    player.removeCharacter(1);
                                }
                            }
                        },
                        ai: {
                            effect: {
                                player: function (card, player, target) {
                                    if (card.name == 'sha' && target.isHealthy() && get.attitude(player, target) > 0) {
                                        return [1, -2];
                                    }
                                },
                            },
                        },
                    },
                    gz_ciqiu_dying: {
                        trigger: {
                            player: "dyingBegin"
                        },
                        forced: true,
                        silent: true,
                        firstDo: true,
                        content: function () {
                            player.removeCharacter(0);
                        },
                        popup: false,
                    },
                    // caoying
                    "gz_lingren": {
                        usable: 1,
                        audio: 'xinfu_lingren',
                        trigger: {
                            player: "useCardToPlayered",
                        },
                        direct: true,
                        filter: function (event, player) {
                            if (event.getParent().triggeredTargets3.length > 1) return false;
                            if (!player.isPhaseUsing()) return false;
                            if (!['basic', 'trick'].contains(get.type(event.card))) return false;
                            if (get.tag(event.card, 'damage')) return true;
                            return false;
                        },
                        content: function () {
                            'step 0'
                            player.chooseTarget(get.prompt('gz_lingren'), '选择一名目标角色并猜测其手牌构成', function (card, player, target) {
                                return _status.event.targets.contains(target);
                            }).set('ai', function (target) {
                                return 2 - get.attitude(_status.event.player, target);
                            }).set('targets', trigger.targets);
                            'step 1'
                            if (result.bool) {
                                player.logSkill('gz_lingren', result.targets);
                                var target = result.targets[0];
                                event.target = target;
                                event.choice = {
                                    basic: false,
                                    trick: false,
                                    equip: false,
                                }
                                player.chooseBool('是否押基本牌？').ai = function (event, player) {
                                    var rand = 0.95;
                                    if (!target.countCards('h', {
                                            type: ['basic']
                                        })) rand = 0.05;
                                    if (!target.countCards('h')) rand = 0;
                                    return Math.random() < rand ? true : false;
                                };
                            } else {
                                player.storage.counttrigger.gz_lingren--;
                                event.finish();
                            }
                            'step 2'
                            if (result.bool) {
                                event.choice.basic = true;
                            }
                            player.chooseBool('是否押锦囊牌？').ai = function (event, player) {
                                var rand = 0.9;
                                if (!target.countCards('h', {
                                        type: ['trick', 'delay']
                                    })) rand = 0.1;
                                if (!target.countCards('h')) rand = 0;
                                return Math.random() < rand ? true : false;
                            };
                            'step 3'
                            if (result.bool) {
                                event.choice.trick = true;
                            }
                            player.chooseBool('是否押装备牌？').ai = function (event, player) {
                                var rand = 0.75;
                                if (!target.countCards('h', {
                                        type: ['equip']
                                    })) rand = 0.25;
                                if (!target.countCards('h')) rand = 0;
                                return Math.random() < rand ? true : false;
                            };
                            'step 4'
                            if (result.bool) {
                                event.choice.equip = true;
                            }
                            game.delay();
                            var reality = {
                                basic: false,
                                trick: false,
                                equip: false,
                            }
                            var he = target.getCards('h');
                            for (var i = 0; i < he.length; i++) {
                                reality[get.type(he[i], 'trick')] = true;
                            }
                            event.num = 0;
                            var tl = ['basic', 'trick', 'equip'];
                            for (var i = 0; i < tl.length; i++) {
                                if (event.choice[tl[i]] == reality[tl[i]]) event.num++;
                            }
                            'step 5'
                            player.popup('猜对' + get.cnNumber(event.num) + '项');
                            game.log(player, '猜对了' + get.cnNumber(event.num) + '项');
                            if (event.num > 0) {
                                target.addTempSkill('lingren_adddamage');
                                target.storage.lingren = {
                                    card: trigger.card,
                                }
                            }
                            if (event.num > 1) player.draw(2);
                            if (event.num > 2) {
                                player.addTempSkill('jianxiong', {
                                    player: 'phaseBegin'
                                });
                                player.addTempSkill('xingshang', {
                                    player: 'phaseBegin'
                                });
                            }
                        },
                        ai: {
                            threaten: 2.4,
                        },
                    },
                    // kuailiangkuaiyue
                    gz_shenshi: {
                        audio: 'nzry_shenshi',
                        trigger: {
                            player: 'damageEnd',
                        },
                        filter: function (event, player) {
                            return player.countCards('he') > 0 && event.source && event.source != player;
                        },
                        check: function (event, player) {
                            return event.source && event.source.countCards('h') <= 2 && player.countCards('h') < player.maxHp;
                        },
                        logTarget: 'source',
                        prompt2: '其他角色对你造成伤害后，你可以观看该角色的手牌，然后交给其一张牌，当前角色回合结束时，若此牌仍在该角色的区域内，你将手牌摸至体力上限数。',
                        content: function () {
                            "step 0"
                            player.viewHandcards(trigger.source);
                            player.chooseCard('he', true, '交给' + get.translation(trigger.source) + '一张牌').set('ai', function (card) {
                                return 5 - get.value(card);
                            });
                            "step 1"
                            if (result.bool) {
                                trigger.source.gain(result.cards, player, 'give');
                                player.drawTo(player.maxHp);
                            };
                        },
                    },
                    // caosong
                    gz_cslilu: {
                        audio: 'cslilu',
                        trigger: {
                            player: 'phaseDrawBegin1'
                        },
                        filter: function (event, player) {
                            return !event.numFixed;
                        },
                        check: function (event, player) {
                            return player.maxHp - player.countCards('h') > 3 || game.hasPlayer(function (current) {
                                return current != player && get.attitude(player, current) > 0;
                            });
                        },
                        content: function () {
                            'step 0'
                            trigger.changeToZero();
                            'step 1'
                            player.drawTo(player.maxHp);
                            'step 2'
                            if (player.countCards('h') > 0) {
                                player.chooseCardTarget({
                                    prompt: '将至少一张手牌交给一名其他角色。若给出的牌数不少于于2张，则你回复1点体力。',
                                    filterCard: true,
                                    filterTarget: lib.filter.notMe,
                                    selectCard: [1, Infinity],
                                    forced: true,
                                    ai1: function (card) {
                                        if (ui.selected.cards.length < _status.event.goon) {
                                            if (get.tag(card, 'damage') && game.hasPlayer(function (current) {
                                                    current != player && get.attitude(player, current) > 0 && !current.hasSkillTag('nogain') && !current.hasJudge('lebu') && current.hasValueTarget(card);
                                                })) return 1;
                                            return 1 / Math.max(0.1, get.value(card));
                                        }
                                        return 0;
                                    },
                                    ai2: function (target) {
                                        return Math.sqrt(5 - Math.min(4, target.countCards('h'))) * get.attitude(_status.event.player, target);
                                    },
                                    goon: function () {
                                        if (!game.hasPlayer(function (current) {
                                                return current != player && get.attitude(player, current) > 0 && !current.hasSkillTag('nogain') && !current.hasJudge('lebu');
                                            })) return 1;
                                        if (num < player.countCards('h')) return num + 1;
                                        return 1;
                                    }(),
                                });
                            } else event.finish();
                            'step 3'
                            if (result.bool) {
                                result.targets[0].gain(result.cards, player, 'giveAuto');
                                if (result.cards.length >= 2) {
                                    player.recover();
                                }
                            }
                        },
                    },
                    // wanglang
                    gz_gushe: {
                        audio: 'gushe',
                        enable: 'phaseUse',
                        usable: 1,
                        filterTarget: function (card, player, target) {
                            return player.canCompare(target);
                        },
                        selectTarget: [1, 2],
                        filter: function (event, player) {
                            return player.countCards('h') > 0;
                        },
                        multitarget: true,
                        multiline: true,
                        content: function () {
                            player.chooseToCompare(targets).callback = lib.skill.gz_gushe.callback;
                        },
                        intro: {
                            name: '饶舌',
                            content: 'mark'
                        },
                        chat: ['粗鄙之语', '天地不容', '谄谀之臣', '皓首匹夫，苍髯老贼', '二臣贼子', '断脊之犬', '我从未见过有如此厚颜无耻之人！'],
                        callback: function () {
                            'step 0'
                            if (event.num1 <= event.num2) {
                                target.chat(lib.skill.gz_gushe.chat[player.countMark('gz_gushe')]);
                                game.delay();
                                player.addMark('gz_gushe', 1);
                                if (player.countMark('gz_gushe') >= 6) {
                                    player.loseHp()
                                    if (player.checkMainSkill('gz_gushe', false)) {
                                        player.removeCharacter(0);
                                    } else {
                                        player.removeCharacter(1);
                                    }
                                }
                            }
                            'step 1'
                            if (event.num1 >= event.num2) {
                                target.chooseToDiscard('he', '弃置一张牌，或令' + get.translation(player) + '摸一张牌').set('ai', function (card) {
                                    if (_status.event.goon) return 6 - get.value(card);
                                    return 0;
                                }).set('goon', get.attitude(target, player) < 0);
                            } else event.goto(3);
                            'step 2'
                            if (!result.bool) {
                                player.draw();
                            }
                            'step 3'
                            if (event.num1 <= event.num2) {
                                player.chooseToDiscard('he', '弃置一张牌，或摸一张牌').set('ai', function () {
                                    return -1;
                                });
                            } else event.finish();
                            'step 4'
                            if (!result.bool) player.draw();
                        },
                        ai: {
                            order: 7,
                            result: {
                                target: function (player, target) {
                                    var num = ui.selected.targets.length + 1;
                                    if (num > 3) num = 3;
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (get.value(hs[i]) <= 6) {
                                            switch (hs[i].number) {
                                                case 13:
                                                    return -1;
                                                case 12:
                                                    if (player.countMark('gz_gushe') + num <= 7) return -1;
                                                    break;
                                                case 11:
                                                    if (player.countMark('gz_gushe') + num <= 6) return -1;
                                                    break;
                                                default:
                                                    if (hs[i].number > 5 && player.countMark('gz_gushe') + num <= 5) return -1;
                                            }
                                        }
                                    }
                                    return 0;
                                },
                            }
                        }
                    },
                    // caochong
                    gz_chengxiang: {
                        trigger: {
                            player: 'damageEnd'
                        },
                        //direct:true,
                        frequent: true,
                        audio: 'chengxiang',
                        content: function () {
                            "step 0"
                            event.cards = get.cards(3);
                            game.cardsGotoOrdering(event.cards);
                            event.videoId = lib.status.videoId++;
                            game.broadcastAll(function (player, id, cards, num) {
                                var str;
                                if (player == game.me && !_status.auto) {
                                    str = '称象：选择任意张点数不大于' + num + '的牌';
                                } else {
                                    str = '称象';
                                }
                                var dialog = ui.create.dialog(str, cards);
                                dialog.videoId = id;
                            }, player, event.videoId, event.cards, event.name == 'gz_chengxiang' ? 13 : 12);
                            event.time = get.utc();
                            game.addVideo('showCards', player, ['称象', get.cardsInfo(event.cards)]);
                            game.addVideo('delay', null, 2);
                            "step 1"
                            var next = player.chooseButton([0, 3]);
                            next.set('dialog', event.videoId);
                            next.set('filterButton', function (button) {
                                var num = 0
                                for (var i = 0; i < ui.selected.buttons.length; i++) {
                                    num += get.number(ui.selected.buttons[i].link);
                                }
                                return (num + get.number(button.link) <= _status.event.maxNum);
                            });
                            next.set('maxNum', event.name == 'gz_chengxiang' ? 13 : 12);
                            next.set('ai', function (button) {
                                return get.value(button.link, _status.event.player);
                            });
                            "step 2"
                            if (result.bool && result.links) {
                                var cards2 = [];
                                for (var i = 0; i < result.links.length; i++) {
                                    cards2.push(result.links[i]);
                                    cards.remove(result.links[i]);
                                }
                                event.cards2 = cards2;
                            } else {
                                event.finish();
                            }
                            var time = 1000 - (get.utc() - event.time);
                            if (time > 0) {
                                game.delay(0, time);
                            }
                            "step 3"
                            game.broadcastAll('closeDialog', event.videoId);
                            var cards2 = event.cards2;
                            player.gain(cards2, 'log', 'gain2');
                        },
                        ai: {
                            maixie: true,
                            maixie_hp: true,
                            effect: {
                                target: function (card, player, target) {
                                    if (get.tag(card, 'damage')) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                        if (!target.hasFriend()) return;
                                        if (target.hp >= 4) return [1, 2];
                                        if (target.hp == 3) return [1, 1.5];
                                        if (target.hp == 2) return [1, 0.5];
                                    }
                                }
                            }
                        }
                    },
                    // liufu
                    // gz_duoqi: {
                    //     trigger: {
                    //         global: 'discardAfter'
                    //     },
                    //     filter: function (event, player) {
                    //         if (_status.currentPhase == player) return false;
                    //         if (!player.storage.zhucheng || !player.storage.zhucheng.length) return false;
                    //         var evt = event.getParent('phaseUse');
                    //         if (evt && evt.name == 'phaseUse') return true;
                    //         return false;
                    //     },
                    //     direct: true,
                    //     content: function () {
                    //         'step 0'
                    //         var bool = false;
                    //         if (get.attitude(player, trigger.player) < 0 && trigger.player.needsToDiscard()) {
                    //             bool = true;
                    //         }
                    //         player.chooseCardButton(get.prompt('gz_duoqi', _status.currentPhase), player.storage.zhucheng).set('ai', function (button) {
                    //             return _status.event.bool ? 1 : 0;
                    //         }).set('bool', bool);
                    //         'step 1'
                    //         if (result.bool) {
                    //             player.logSkill('zhucheng', _status.currentPhase);
                    //             player.$throw(result.links[0]);
                    //             player.storage.zhucheng.remove(result.links[0]);
                    //             result.links[0].discard();
                    //             player.syncStorage('zhucheng');
                    //             if (player.storage.zhucheng.length == 0) {
                    //                 player.unmarkSkill('zhucheng');
                    //             } else {
                    //                 player.updateMarks();
                    //             }
                    //             var evt = trigger.getParent('phaseUse');
                    //             if (evt && evt.name == 'phaseUse') {
                    //                 evt.skipped = true;
                    //             }
                    //         }
                    //     },
                    //     ai: {
                    //         expose: 0.2
                    //     }
                    // },
                    // zhaoang
                    zmfenji: {
                        trigger: {
                            player: ["phaseDrawBegin", "phaseDiscardBegin"],
                        },
                        direct: true,
                        init: function (player) {
                            if (!player.storage.zmfenji) player.storage.zmfenji = [];
                        },
                        filter: function (event, player) {
                            return player.storage.zmfenji.length <= 11;
                        },
                        content: function () {
                            'step 0'
                            var list = ['taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
                            for (var i = 0; i < player.storage.zmfenji.length; i++) {
                                list.remove(player.storage.zmfenji[i]);
                            }
                            for (var i = 0; i < list.length; i++) {
                                list[i] = [get.type(list[i]), '', list[i]];
                            }
                            player.chooseButton([get.prompt('zmfenji'), [list, 'vcard']]).set('ai', function (button) {
                                var player = _status.event.player;
                                var recover = 0,
                                    lose = 1,
                                    players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i].hp == 1 && get.damageEffect(players[i], player, player) > 0 && !players[i].hasSha()) {
                                        return (button.link[2] == 'juedou') ? 2 : -1;
                                    }
                                    if (players[i].countCards('h') && get.damageEffect(players[i], player, player) > 0 && players[i].getEquip('tengjia')) {
                                        return (button.link[2] == 'huogong') ? 2 : -1;
                                    }
                                    if (!players[i].isOut()) {
                                        if (players[i].hp < players[i].maxHp) {
                                            if (get.attitude(player, players[i]) > 0) {
                                                if (players[i].hp < 2) {
                                                    lose--;
                                                    recover += 0.5;
                                                }
                                                lose--;
                                                recover++;
                                            } else if (get.attitude(player, players[i]) < 0) {
                                                if (players[i].hp < 2) {
                                                    lose++;
                                                    recover -= 0.5;
                                                }
                                                lose++;
                                                recover--;
                                            }
                                        } else {
                                            if (get.attitude(player, players[i]) > 0) {
                                                lose--;
                                            } else if (get.attitude(player, players[i]) < 0) {
                                                lose++;
                                            }
                                        }
                                    }

                                    if (event.triggername == 'phaseDrawBegin') {
                                        if (lose > recover && lose > 0) return (button.link[2] == 'wanjian') ? 2 : -1;
                                        if (lose > recover && lose > 0) return (button.link[2] == 'nanman') ? 1 : -1;
                                    } else if (event.triggername == 'phaseDiscardBegin') {
                                        if (get.attitude(player, players[i]) < 0 && players[i].getEquip(1)) {
                                            return (button.link[2] == 'jiedao') ? 2 : -1;
                                        }
                                        if (get.attitude(player, players[i]) < 0 && players[i].getEquip(2) && !players[i].hasWuxie()) {
                                            if (get.distance(player, players[i]) <= 1) return (button.link[2] == 'shunshou') ? 2 : -1;
                                            return (button.link[2] == 'guohe') ? 1 : -1;
                                        }
                                        if (lose < recover && recover > 0) return (button.link[2] == 'wugu') ? 2 : -1;
                                        if (lose < recover && recover > 0) return (button.link[2] == 'taoyuan') ? 1 : -1;
                                        if (player.countCards('h') <= player.hp) return (button.link[2] == 'wuzhong') ? 2 : -1;
                                        if (player.countCards('h') > player.hp) return (button.link[2] == 'tiesuo') ? 1 : -1;
                                    }
                                }
                            });
                            'step 1'
                            if (result.bool) {
                                player.logSkill('zmfenji');
                                player.storage.zmfenji.add(result.links[0][2]);
                                player.chooseUseTarget({
                                    name: result.links[0][2]
                                }, true);
                                if (trigger.name == 'phaseDraw' && !player.storage.zmfenji2) {
                                    player.storage.zmfenji2 = true;
                                }
                                if (trigger.name == 'phaseDiscard' && !player.storage.zmfenji3) {
                                    player.storage.zmfenji3 = true;
                                }
                                trigger.cancel();
                            } else event.finish();
                        },
                        group: ["zmfenji_count", "zmfenji_draw", "zmfenji_end"],
                        subSkill: {
                            count: {
                                trigger: {
                                    player: "useCard",
                                },
                                silent: true,
                                forced: true,
                                filter: function (event) {
                                    var evt = event.getParent(3);
                                    return evt.skill == 'zmfenji';
                                },
                                content: function () {
                                    player.storage.zmfenji1 = trigger.card;
                                },
                                sub: true,
                                popup: false,
                            },
                            draw: {
                                trigger: {
                                    player: "useCardEnd",
                                },
                                filter: function (event, player) {
                                    return event.card == player.storage.zmfenji1 && game.countPlayer2(function (current) {
                                        return current.getHistory('damage', function (evt) {
                                            return evt.getParent(2) == event;
                                        }).length > 0;
                                    }) > 0;
                                },
                                forced: true,
                                silent: true,
                                content: function () {
                                    var num = game.countPlayer2(function (current) {
                                        return current.getHistory('damage', function (evt) {
                                            return evt.getParent(2) == trigger;
                                        }).length > 0;
                                    });
                                    if (player.storage.zmfenji2) {
                                        player.draw(num);
                                    } else if (player.storage.zmfenji3) {
                                        player.chooseToDiscard(num, 'h', true);
                                    }
                                },
                                sub: true,
                                popup: false,
                            },
                            end: {
                                trigger: {
                                    player: "useCardAfter",
                                },
                                filter: function (event, player) {
                                    return event.card == player.storage.zmfenji1;
                                },
                                forced: true,
                                silent: true,
                                content: function () {
                                    delete player.storage.zmfenji1;
                                    delete player.storage.zmfenji2;
                                    delete player.storage.zmfenji3;
                                },
                                sub: true,
                                popup: false,
                            },
                        },
                    },
                    // caoang
                    gz_xuepin: {
                        audio: 'kaikang',
                        enable: 'phaseUse',
                        usable: 1,
                        filterTarget: function (event, player, target) {
                            return player.inRange(target) && target.countDiscardableCards(player, 'he') > 0;
                        },
                        content: function () {
                            'step 0'
                            player.loseHp();
                            'step 1'
                            if (target.countDiscardableCards(player, 'he') > 0) player.discardPlayerCard(target, 2, 'he', true);
                            else event.finish();
                            'step 2'
                            if (result.bool && result.cards.length == 2 && get.type2(result.cards[0], result.cards[0].original == 'h' ? target : false) == get.type2(result.cards[1], result.cards[1].original == 'h' ? target : false)) player.draw();
                        },
                        ai: {
                            order: 2,
                            result: {
                                player: function (player, target) {
                                    if (player.hp == 1) return -8;
                                    if (target.countCards('e') > 1) return 0;
                                    if (player.hp > 3 || target.countCards('he') > 2) return -0.5;
                                    return -2;
                                },
                                target: function (player, target) {
                                    if (target.countDiscardableCards(player, 'he') < 2) return 0;
                                    return -2;
                                },
                            },
                        },
                    },
                    // zhugedan
                    gz_gongao: {
                        audio: 'gongao',
                        trigger: {
                            global: 'dieAfter'
                        },
                        forced: true,
                        content: function () {
                            player.recover();
                        },
                        ai: {
                            threaten: 1.5
                        }
                    },
                    gz_weizhong: {
                        audio: 'weizhong',
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_weizhong')
                        },
                        trigger: {
                            player: ['damageEnd', 'recoverEnd']
                        },
                        forced: true,
                        content: function () {
                            // player.draw(player.isMinHandcard() ? 2 : 1);
                            player.draw()
                        }
                    },
                    // yuanhuan
                    gz_qingjue: {
                        audio: 'qingjue',
                        trigger: {
                            global: 'useCardToPlayer'
                        },
                        logTarget: 'player',
                        usable: 1,
                        filter: function (event, player) {
                            return (event.player != player && event.target != player && event.player != event.target &&
                                event.player.hp > event.target.hp && event.targets.length == 1 && event.player.countCards('h') > 0 && !event.target.isDying() &&
                                !event.player.hasSkillTag('noCompareTarget') && !player.hasSkillTag('noCompareSource'));
                        },
                        check: function (event, player) {
                            var target = event.target,
                                source = event.player;
                            var eff1 = get.effect(target, event.card, source, player);
                            if (eff1 >= 0) return false;
                            var eff2 = get.effect(player, event.card, source, player);
                            if (eff2 >= 0) return true;
                            if (eff2 > eff1 / 3) return player.hasCard(function (card) {
                                return (card.number >= 9 && get.value(card) <= 5) || get.value(card) <= 3;
                            });
                            if (eff2 > eff1 / 2) return player.hasCard(function (card) {
                                return card.number > 10 && get.value(card) <= 5;
                            });
                            return player.hasCard(function (card) {
                                return card.number > 11 && get.value(card) <= 5;
                            });
                        },
                        content: function () {
                            'step 0'
                            // player.draw();
                            'step 1'
                            if (player.canCompare(trigger.player)) player.chooseToCompare(trigger.player);
                            else event.finish();
                            'step 2'
                            trigger.targets.remove(trigger.target);
                            trigger.getParent().triggeredTargets1.remove(trigger.target);
                            trigger.untrigger();
                            if (!result.bool) trigger.targets.push(player);
                        },
                    },
                    // caoshuang
                    gz_shanzhuan: {
                        trigger: {
                            source: 'damageSource'
                        },
                        audio: 'shanzhuan',
                        direct: true,
                        filter: function (event, player) {
                            return player != event.player && !event.player.storage._disableJudge && player.countCards('he') && !event.player.countCards('j');
                        },
                        content: function () {
                            'step 0'
                            player.chooseToDiscard('he', get.prompt('gz_shanzhuan', trigger.player)).set('ai', function (card) {
                                if (get.attitude(_status.event.player, _status.event.target) >= 0) return 0;
                                return get.buttonValue(card);
                            });
                            'step 1'
                            if (result.bool) {
                                player.logSkill('gz_shanzhuan', trigger.player);
                                var card = result.cards[0];
                                trigger.player.$throw(card);
                                game.delayx();
                                if (get.type(card, false) == 'delay') trigger.player.addJudge(card);
                                else trigger.player.addJudge({
                                    name: get.color(card, false) == 'red' ? 'lebu' : 'bingliang'
                                }, result.cards);
                                trigger.player.draw();
                            }
                        },
                        group: 'gz_shanzhuan_draw',
                        subfrequent: ['draw'],
                        subSkill: {
                            draw: {
                                audio: 'shanzhuan',
                                trigger: {
                                    player: 'phaseEnd'
                                },
                                frequent: true,
                                prompt: '是否发动【擅专】摸一张牌？',
                                filter: function (event, player) {
                                    return !player.getHistory('sourceDamage').length;
                                },
                                content: function () {
                                    player.draw();
                                },
                            },
                        },
                    },
                    // dengai
                    gz_jixi: {
                        audio: 'jixi',
                        audioname: ['re_dengai', 'gz_dengai', 'ol_dengai'],
                        enable: 'phaseUse',
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_jixi')
                        },
                        filter: function (event, player) {
                            return player.getExpansions('tuntian').length > 0 && event.filterCard({
                                name: 'shunshou'
                            }, player, event);
                        },
                        chooseButton: {
                            dialog: function (event, player) {
                                return ui.create.dialog('急袭', player.getExpansions('tuntian'), 'hidden');
                            },
                            filter: function (button, player) {
                                var card = button.link;
                                if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return false;
                                var evt = _status.event.getParent();
                                return evt.filterCard(get.autoViewAs({
                                    name: 'shunshou'
                                }, [card]), player, evt)
                            },
                            backup: function (links, player) {
                                var skill = _status.event.buttoned;
                                return {
                                    audio: 'jixi',
                                    audioname: ['re_dengai', 'gz_dengai', 'ol_dengai'],
                                    selectCard: -1,
                                    position: 'x',
                                    filterCard: skill == 'gz_jixi' ? (card) => card == lib.skill.gz_jixi_backup.card : (card) => card == lib.skill.gz_jixi_backup.card,
                                    viewAs: {
                                        name: 'shunshou'
                                    },
                                    card: links[0],
                                }
                            },
                            prompt: function (links, player) {
                                return '选择 顺手牵羊（' + get.translation(links[0]) + '）的目标';
                            }
                        },
                        ai: {
                            order: 10,
                            result: {
                                player: function (player) {
                                    return player.getExpansions('tuntian').length - 1;
                                }
                            }
                        }
                    },
                    // heyan
                    gz_qingtan: {
                        audio: 'qingtan',
                        enable: 'phaseUse',
                        usable: 1,
                        filter: function (event, player) {
                            return game.hasPlayer((current) => current.countCards('h') > 0) && player.countCards('h') > 1;
                        },
                        filterTarget: function (card, player, target) {
                            return target.countCards('h') > 0;
                        },
                        filterCard: true,
                        selectTarget: -1,
                        multitarget: true,
                        multiline: true,
                        content: function () {
                            'step 0'
                            targets.sortBySeat();
                            var next = player.chooseCardOL(targets, '请选择要展示的牌', true).set('ai', function (card) {
                                return -get.value(card);
                            }).set('source', player);
                            next.aiCard = function (target) {
                                var hs = target.getCards('h');
                                return {
                                    bool: true,
                                    cards: [hs.randomGet()]
                                };
                            };
                            next._args.remove('glow_result');
                            'step 1'
                            var cards = [];
                            event.videoId = lib.status.videoId++;
                            for (var i = 0; i < targets.length; i++) cards.push(result[i].cards[0]);
                            event.cards = cards;
                            game.log(player, '展示了', targets, '的', cards);
                            game.broadcastAll(function (targets, cards, id, player) {
                                var dialog = ui.create.dialog(get.translation(player) + '发动了【清谈】', cards);
                                dialog.videoId = id;
                                var getName = function (target) {
                                    if (target._tempTranslate) return target._tempTranslate;
                                    var name = target.name;
                                    if (lib.translate[name + '_ab']) return lib.translate[name + '_ab'];
                                    return get.translation(name);
                                }
                                for (var i = 0; i < targets.length; i++) {
                                    dialog.buttons[i].querySelector('.info').innerHTML = getName(targets[i]) + get.translation(cards[i].suit);
                                }
                            }, targets, cards, event.videoId, player);
                            game.delay(4);
                            'step 2'
                            game.broadcastAll('closeDialog', event.videoId);
                            var list = [],
                                map = {};
                            for (var i of cards) {
                                var suit = get.suit(i);
                                if (!map[suit]) map[suit] = [];
                                map[suit].push(i);
                            }
                            var dialog = ['选择获得一种花色的所有牌'];
                            for (var suit of lib.suit) {
                                if (map[suit]) {
                                    var targetsx = map[suit].map(function (card) {
                                        return targets[cards.indexOf(card)];
                                    });
                                    dialog.push('<div class="text center">' + get.translation(targetsx) + '</div>');
                                    dialog.push(map[suit]);
                                    list.push(suit);
                                }
                            }
                            if (list.length) {
                                player.chooseControl(list, 'cancel2').set('dialog', dialog);
                            } else event.finish();
                            'step 3'
                            if (result.control != 'cancel2') {
                                event.cards2 = cards.filter(function (i) {
                                    return get.suit(i) == result.control;
                                })
                                for (var i = 0; i < cards.length; i++) {
                                    if (event.cards2.contains(cards[i])) {
                                        targets[i].$give(cards[i], player, false);
                                    }
                                }
                                player.gain(event.cards2, 'log');
                            } else event.finish();
                            'step 4'
                            var draws = [];
                            for (var i = 0; i < cards.length; i++) {
                                if (!event.cards2.contains(cards[i])) {
                                    // targets[i].discard(cards[i]).delay=false;
                                } else draws.push(targets[i]);
                            }
                            if (draws.length) game.asyncDraw(draws);
                            'step 5'
                            game.delayx();
                        },
                        ai: {
                            order: 7,
                            result: {
                                player: 0.3,
                                target: -1,
                            },
                        },
                    },
                    // guanlu
                    gz_busuan: {
                        audio: 'busuan',
                        enable: 'phaseUse',
                        usable: 1,
                        filterTarget: lib.filter.notMe,
                        content: function () {
                            'step 0'
                            player.loseHp()
                            var list = [];
                            for (var i = 0; i < lib.inpile.length; i++) {
                                var name = lib.inpile[i];
                                var type = get.type(name, 'trick');
                                if (['basic', 'trick'].contains(type)) list.push([type, '', name]);
                            }
                            player.chooseButton(['选择至多两种牌', [list, 'vcard']], true, [1, 2]).set('ai', function (button) {
                                var target = _status.event.getParent().target;
                                var card = {
                                    name: button.link[2]
                                };
                                if (get.type(card) == 'basic' || !target.hasUseTarget(card)) return false;
                                return get.attitude(_status.event.player, target) * (target.getUseValue(card) - 0.1);
                            });
                            'step 1'
                            target.storage.busuan_angelbeats = result.links.slice(0);
                            target.addSkill('busuan_angelbeats');
                        },
                        ai: {
                            order: 1,
                            result: {
                                target: function (player, target) {
                                    var att = get.attitude(player, target);
                                    if (att > 0) return 1
                                    return -5 / (target.countCards('h') + 1);
                                },
                            },
                        },
                    },
                    gz_mingjie: {
                        inherit: 'mingjie',
                        audio: 'mingjie',
                        viceSkill: true,
                        init: function (player) {
                            if (player.checkViceSkill('gz_mingjie') && !player.viceChanged) {
                                player.removeMaxHp();
                            }
                        },
                    },
                    // xizhicai
                    gz_xianfu: {
                        trigger: {
                            player: "showCharacterAfter",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return game.players.length > 1 && (event.name != 'phase' || game.phaseNumber == 0) && event.toShow.contains('gz_xizhicai');
                        },
                        audio: 'xianfu',
                        content: function () {
                            'step 0'
                            player.chooseTarget('请选择【先辅】的目标', lib.translate.gz_xianfu_info, true, function (card, player, target) {
                                return target != player && (!player.storage.gz_xianfu2 || !player.storage.gz_xianfu2.contains(target));
                            }).set('ai', function (target) {
                                var att = get.attitude(_status.event.player, target);
                                if (att > 0) return att + 1;
                                if (att == 0) return Math.random();
                                return att;
                            }).animate = false;
                            'step 1'
                            if (result.bool) {
                                var target = result.targets[0];
                                if (!player.storage.gz_xianfu2) player.storage.gz_xianfu2 = [];
                                player.storage.gz_xianfu2.push(target);
                                player.addSkill('gz_xianfu2');
                            }
                        }
                    },
                    gz_xianfu_mark: {
                        marktext: '辅',
                        intro: {
                            name: '先辅',
                            content: '当你受到伤害后，$受到等量的伤害，当你回复体力后，$回复等量的体力'
                        },
                    },
                    gz_xianfu2: {
                        audio: 'xianfu',
                        charlotte: true,
                        trigger: {
                            global: ['damageEnd', 'recoverEnd']
                        },
                        forced: true,
                        filter: function (event, player) {
                            if (event.player.isDead() || !player.storage.gz_xianfu2 || !player.storage.gz_xianfu2.contains(event.player) || event.num <= 0) return false;
                            if (event.name == 'damage') return true;
                            return player.isDamaged() || player.hp < player.maxHp; //TODO
                        },
                        logTarget: 'player',
                        content: function () {
                            'step 0'
                            var target = trigger.player;
                            if (!target.storage.gz_xianfu_mark) target.storage.gz_xianfu_mark = [];
                            target.storage.gz_xianfu_mark.add(player);
                            target.storage.gz_xianfu_mark.sortBySeat();
                            target.markSkill('gz_xianfu_mark');
                            game.delayx();
                            'step 1'
                            player[trigger.name](trigger.num, 'nosource');
                        },
                        onremove: function (player) {
                            if (!player.storage.gz_xianfu2) return;
                            game.countPlayer(function (current) {
                                if (player.storage.gz_xianfu2.contains(current) && current.storage.gz_xianfu_mark) {
                                    current.storage.gz_xianfu_mark.remove(player);
                                    if (!current.storage.gz_xianfu_mark.length) current.unmarkSkill('gz_xianfu_mark');
                                    else current.markSkill('gz_xianfu_mark');
                                }
                            });
                            delete player.storage.gz_xianfu2;
                        },
                        group: 'gz_xianfu3',
                    },
                    gz_xianfu3: {
                        trigger: {
                            global: 'dieBegin'
                        },
                        silent: true,
                        filter: function (event, player) {
                            return event.player == player || player.storage.gz_xianfu2 && player.storage.gz_xianfu2.contains(player);
                        },
                        content: function () {
                            if (player == trigger.player) lib.skill.gz_xianfu2.onremove(player);
                            else player.storage.gz_xianfu2.remove(event.player);
                        }
                    },
                    gz_chouce: {
                        trigger: {
                            player: 'damageEnd'
                        },
                        content: function () {
                            'step 0'
                            event.num = trigger.num;
                            'step 1'
                            player.judge();
                            'step 2'
                            event.color = result.color;
                            if (event.color == 'black') {
                                player.chooseTarget('弃置一名角色区域内的一张牌', function (card, player, target) {
                                    return target.countCards('hej');
                                }).set('ai', function (target) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, target);
                                    if (att < 0) {
                                        att = -Math.sqrt(-att);
                                    } else {
                                        att = Math.sqrt(att);
                                    }
                                    return att * lib.card.guohe.ai.result.target(player, target);
                                })
                            } else {
                                var next = player.chooseTarget('令一名角色摸一张牌');
                                if (player.storage.gz_xianfu2 && player.storage.gz_xianfu2.length) {
                                    next.set('prompt2', '（若目标为' + get.translation(player.storage.gz_xianfu2) + '则改为摸两张牌）');
                                }
                                next.set('ai', function (target) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards('h'));
                                    if (target.hasSkillTag('nogain')) att /= 10;
                                    if (player.storage.gz_xianfu2 && player.storage.gz_xianfu2.contains(target)) return att * 2;
                                    return att;
                                })
                            }
                            'step 3'
                            if (result.bool) {
                                var target = result.targets[0];
                                player.line(target, 'green');
                                if (event.color == 'black') {
                                    player.discardPlayerCard(target, 'hej', true);
                                } else {
                                    if (player.storage.gz_xianfu2 && player.storage.gz_xianfu2.contains(target)) {
                                        if (!target.storage.gz_xianfu_mark) target.storage.gz_xianfu_mark = [];
                                        target.storage.gz_xianfu_mark.add(player);
                                        target.storage.gz_xianfu_mark.sortBySeat();
                                        target.markSkill('gz_xianfu_mark');
                                        target.draw(2);
                                    } else {
                                        target.draw();
                                    }
                                }
                            }
                            'step 4'
                            if (--event.num > 0) {
                                player.chooseBool(get.prompt2('gz_chouce'));
                            } else {
                                event.finish();
                            }
                            'step 5'
                            if (result.bool) {
                                player.logSkill('gz_chouce');
                                event.goto(1);
                            }
                        },
                        ai: {
                            maixie: true,
                            maixie_hp: true,
                            effect: {
                                target: function (card, player, target) {
                                    if (get.tag(card, 'damage')) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                        if (!target.hasFriend()) return;
                                        if (target.hp >= 4) return [1, get.tag(card, 'damage') * 1.5];
                                        if (target.hp == 3) return [1, get.tag(card, 'damage') * 1];
                                        if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                                    }
                                }
                            }
                        }
                    },
                    // caochun
                    gz_shanjia: {
                        group: ["gz_shanjia_count"],
                        locked: false,
                        mod: {
                            aiValue: function (player, card, num) {
                                if ((player.storage.gz_shanjia || 0) < 2 && get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) {
                                    return num / player.hp;
                                }
                            },
                        },
                        subSkill: {
                            count: {
                                forced: true,
                                silent: true,
                                popup: false,
                                trigger: {
                                    player: "loseEnd",
                                },
                                filter: function (event, player) {
                                    return event.cards2 && event.cards2.length > 0;
                                },
                                content: function () {
                                    lib.skill.gz_shanjia.sync(player);
                                },
                            },
                        },
                        audio: "shanjia",
                        trigger: {
                            player: "phaseUseBegin",
                        },
                        intro: {
                            content: "本局游戏内已失去过#张装备牌",
                        },
                        frequent: true,
                        sync: function (player) {
                            var history = player.actionHistory;
                            var num = 0;
                            for (var i = 0; i < history.length; i++) {
                                for (var j = 0; j < history[i].lose.length; j++) {
                                    if (history[i].lose[j].parent.name == 'useCard') continue;
                                    num += history[i].lose[j].cards2.filter(function (card) {
                                        return get.type(card, false) == 'equip';
                                    }).length;
                                }
                            }
                            player.storage.gz_shanjia = num;
                            if (num > 0) player.markSkill('gz_shanjia');
                        },
                        content: function () {
                            'step 0'
                            player.draw(2);
                            'step 1'
                            lib.skill.gz_shanjia.sync(player);
                            var num = 2 - player.storage.gz_shanjia;
                            if (num > 0) {
                                player.chooseToDiscard('he', true, num).ai = get.disvalue;
                            }
                            'step 2'
                            var bool = true;
                            if (result.cards) {
                                for (var i = 0; i < result.cards.length; i++) {
                                    if (['basic', 'trick'].contains(get.type(result.cards[i], 'trick', result.cards[i].original == 'h' ? player : false))) {
                                        bool = false;
                                        break;
                                    }
                                }
                            }
                            if (bool) {
                                player.chooseUseTarget({
                                    name: 'sha'
                                }, '是否视为使用一张【杀】？', false, 'nodistance');
                            }
                        },
                        ai: {
                            threaten: 3,
                            noe: true,
                            reverseOrder: true,
                            skillTagFilter: function (player) {
                                if (player.storage.gz_shanjia > 2) return false;
                            },
                            effect: {
                                target: function (card, player, target) {
                                    if (player.storage.gz_shanjia < 3 && get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                },
                            },
                        },
                    },
                    // jiakui
                    gz_zhongzuo: {
                        audio: 'zhongzuo',
                        trigger: {
                            global: 'phaseJieshuBegin'
                        },
                        direct: true,
                        filter: function (event, player) {
                            return player.getHistory('damage').length > 0 || player.getHistory('sourceDamage').length > 0;
                        },
                        content: function () {
                            'step 0'
                            player.chooseTarget(get.prompt('gz_zhongzuo'), '令一名角色摸一张牌。若其已受伤，则你摸一张牌。').set('ai', function (target) {
                                if (target.hasSkillTag('nogain') && target != _status.currentPhase) return target.isDamaged() ? 0 : 1;
                                var att = get.attitude(_status.event.player, target);
                                if (target.isDamaged()) att = att * 1.2;
                                return att;
                            });
                            'step 1'
                            if (result.bool) {
                                var target = result.targets[0];
                                player.logSkill('gz_zhongzuo', target);
                                target.draw();
                                if (target.isDamaged()) player.draw();
                            }
                        },
                    },
                    // xinchang
                    gz_xccongjian: {
                        audio: 'drlt_congjian',
                        trigger: {
                            global: 'useCardToTarget'
                        },
                        logTarget: 'target',
                        filter: function (event, player) {
                            return event.target != player && event.targets.length == 1 && get.type(event.card, null, false) == 'trick' &&
                                event.target.isMaxHp(true) && lib.filter.targetEnabled2(event.card, event.player, player);
                        },
                        check: function (event, player) {
                            return get.effect(player, event.card, event.player, player) > 0;
                        },
                        content: function () {
                            trigger.targets.push(player);
                            game.log(player, '也成为了', trigger.card, '的目标');
                            var next = game.createEvent('congjian_draw', false);
                            next.player = player;
                            event.next.remove(next);
                            trigger.getParent().after.push(next);
                            next.setContent(function () {
                                if (player.hasHistory('damage', function (evt) {
                                        return evt.card == event.parent.card;
                                    })) player.draw(2);
                            });
                        },
                    },
                    // peixiu
                    gz_juezhi: {
                        enable: 'phaseUse',
                        usable: 1,
                        filter: function (event, player) {
                            return player.countCards('he') > 1;
                        },
                        filterCard: true,
                        position: 'he',
                        selectCard: [2, Infinity],
                        check: function (card) {
                            if (ui.selected.cards.length > 1) return 0;
                            return 4 - get.value(card);
                        },
                        content: function () {
                            var num = 0;
                            for (var i of cards) num += get.number(i, player);
                            num = Math.min(num, 13);
                            var card = get.cardPile2(function (card) {
                                return get.number(card, false) == num;
                            });
                            if (card) player.gain(card, 'gain2');
                        },
                        ai: {
                            order: 1,
                            result: {
                                player: 1
                            },
                        },
                    },
                    // xinpi
                    gz_chijie: {
                        audio: 'chijie',
                        trigger: {
                            target: 'useCardToTarget'
                        },
                        usable: 1,
                        filter: function (event, player) {
                            return event.player != player && event.targets.length == 1;
                        },
                        check: function (event, player) {
                            return get.effect(player, event.card, event.player, player) < 0;
                        },
                        content: function () {
                            'step 0'
                            player.judge(function (card) {
                                if (get.number(card) > 9) return 2;
                                return 0;
                            }).judge2 = function (result) {
                                return result.bool ? true : false;
                            };
                            'step 1'
                            if (result.bool) {
                                trigger.targets.length = 0;
                                trigger.getParent().triggeredTargets2.length = 0;
                                trigger.cancel();
                            }
                        },
                    },
                    // simashi
                    gz_jinglve: {
                        audio: 'jinglve',
                        enable: 'phaseUse',
                        usable: 1,
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_jinglve')
                        },
                        filter: function (event, player) {
                            if (player.hasSkill('gz_jinglve2')) return false;
                            return game.hasPlayer(function (current) {
                                return current != player && current.countCards('h') > 0;
                            });
                        },
                        filterTarget: function (card, player, target) {
                            return target != player && target.countCards('h') > 0;
                        },
                        content: function () {
                            'step 0'
                            if (!player.storage.gz_jinglve4) player.storage.gz_jinglve4 = [];
                            player.storage.gz_jinglve4.add(target);
                            player.chooseButton(['选择一张牌作为「死士」', target.getCards('h')], true).set('ai', function (button) {
                                var target = _status.event.getParent().target;
                                var card = button.link;
                                var val = target.getUseValue(card);
                                if (val > 0) return val;
                                return get.value(card);
                            });
                            'step 1'
                            if (result.bool) {
                                player.storage.gz_jinglve2 = target;
                                player.storage.gz_jinglve3 = result.links[0];
                                player.addSkill('gz_jinglve2');
                            }
                        },
                        ai: {
                            order: 12,
                            result: {
                                target: -1,
                            },
                        },
                    },
                    gz_jinglve2: {
                        mark: true,
                        intro: {
                            name: '死士',
                            mark: function (dialog, content, player) {
                                dialog.addText('记录目标');
                                dialog.add([content]);
                                if (player == game.me || player.isUnderControl()) {
                                    dialog.addText('死士牌');
                                    dialog.add([player.storage.gz_jinglve3]);
                                }
                            },
                        },
                        onremove: function (player) {
                            delete player.storage.gz_jinglve2;
                            delete player.storage.gz_jinglve3;
                        },
                        trigger: {
                            global: ['dieEnd', 'loseEnd', 'gainEnd']
                        },
                        silent: true,
                        lastDo: true,
                        charlotte: true,
                        filter: function (event, player) {
                            if (event.name != 'gain' && event.player != player.storage.gz_jinglve2) return false;
                            return event.name == 'die' || (event.cards.contains(player.storage.gz_jinglve3) && (event.name == 'gain' || event.position != ui.ordering && event.position != ui.discardPile));
                        },
                        content: function () {
                            player.removeSkill('gz_jinglve2');
                        },
                        group: 'gz_jinglve3',
                    },
                    gz_jinglve3: {
                        audio: 'jinglve',
                        trigger: {
                            global: ['loseAfter', 'useCard', 'phaseAfter', 'cardsDiscardAfter']
                        },
                        filter: function (event, player) {
                            if (event.player && event.player != player.storage.gz_jinglve2) return false;
                            if (event.name == 'phase') return event.player.getCards('hej').contains(player.storage.gz_jinglve3);
                            if (!event.cards.contains(player.storage.gz_jinglve3)) return false;
                            return event.name == 'useCard' || get.position(player.storage.gz_jinglve3, true) == 'd' || event.position == ui.discardPile;
                        },
                        forced: true,
                        charlotte: true,
                        logTarget: 'player',
                        content: function () {
                            if (trigger.name == 'useCard') {
                                trigger.all_excluded = true;
                                trigger.targets.length = 0;
                            } else {
                                if (trigger.name == 'phase') {
                                    player.gain(player.storage.gz_jinglve3, trigger.player, 'giveAuto');
                                } else if (get.position(player.storage.gz_jinglve3, true) == 'd') player.gain(player.storage.gz_jinglve3, 'gain2');
                            }
                            player.removeSkill('gz_jinglve2');
                        },
                    },
                    // simazhao
                    gz_daigong: {
                        usable: 1,
                        audio: 'xinfu_daigong',
                        trigger: {
                            player: "damageBegin4",
                        },
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_daigong')
                        },
                        filter: function (event, player) {
                            return event.source != undefined && player.countCards('h') > 0;
                        },
                        content: function () {
                            'step 0'
                            player.showHandcards();
                            'step 1'
                            var cards = player.getCards('h');
                            var suits = [];
                            for (var i = 0; i < cards.length; i++) {
                                suits.add(get.suit(cards[i]));
                            }
                            trigger.source.chooseCard('he', '交给' + get.translation(player) + '一张满足条件的牌，否则防止此伤害。', function (card) {
                                return !_status.event.suits.contains(get.suit(card));
                            }).set('suits', suits).ai = function (card) {
                                var player = _status.event.player;
                                var target = _status.event.getParent('gz_daigong').player;
                                if (get.damageEffect(target, player, player) > 0) return 6.5 - get.value(card);
                                return 0;
                            };
                            'step 2'
                            if (result.bool) {
                                trigger.source.give(result.cards, player, true);
                            } else trigger.cancel();
                        },
                    },
                    // ruanji
                    shinan3d8: {
                        group: "shinan3d8_rewrite",
                        global: "shinan3d8_buff",
                        trigger: {
                            global: 'useCardToTarget'
                        },
                        check: function (event, player) {
                            var name = event.card.name;
                            if (player.isTurnedOver()) return true;
                            if (player.storage.yinling3d8 == 0) {
                                if (get.effect(player, event.card, event.player, player) > 5) return true;
                                return false;
                            }
                            var players = game.filterPlayer();
                            var current = _status.currentPhase;
                            var enemy = 0;
                            current = current.next;
                            while (current != player) {
                                if (get.attitude(player, current) < 0) enemy += 1;
                                current = current.next;
                            }
                            if (player.hp == 1 && enemy >= 1 && name == 'tao') return true;
                            if (enemy >= 2 && name == 'wuzhong') return true;
                            return false;
                        },
                        filter: function (event, player) {
                            if (!event.targets) return false;
                            if (event.player == player) return false;
                            if (event.targets.contains(player)) return false;
                            if (!lib.filter.targetEnabled2(event.card, event.player, player)) return false;
                            if ((event.player.isDying() || event.getParent(2).type == 'dying') && event.card.name == "jiu" && player.isHealthy()) return false;
                            var name = get.name(event.card);
                            return name == "tao" || name == "jiu" || name == "wuzhong";
                        },
                        autodelay: true,
                        content: function () {
                            "step 0"
                            player.turnOver();
                            "step 1"
                            trigger.getParent().targets.add(player);
                            trigger.player.line(player, 'green');
                        },
                        subSkill: {
                            rewrite: {
                                trigger: {
                                    global: "jiuAfter"
                                },
                                filter: function (event, player) {
                                    if (event.player.isDying() || event.getParent(2).type == 'dying') return false;
                                    return player.hasSkill("jiu");
                                },
                                forced: true,
                                popup: false,
                                content: function () {
                                    "step 0"
                                    player.addSkill("jiu_rewrite");
                                    "step 1"
                                    player.storage.jiu_rewrite = player.storage.jiu;
                                    "step 2"
                                    player.removeSkill("jiu");
                                }
                            }
                        }
                    },
                    shinan3d8_buff: {
                        ai: {
                            effect: {
                                player: function (card, player, target, current) {
                                    var players = game.filterPlayer();
                                    var num = current;
                                    for (var i = 0; i < players.length; i++) {
                                        var player1 = players[i];
                                        if (!player1.hasSkill("shinan3d8")) continue;
                                        if (get.attitude(player, player1) == 0) continue;
                                        if (get.attitude(player, player1) > 0) {
                                            if (player1.isTurnedOver()) current += 4;
                                        }
                                        if (player1.isTurnedOver()) current -= 4;
                                    }
                                    return current;
                                },
                            },
                        },
                    },
                    jiu_rewrite: {
                        init: function (player) {
                            player.node.jiu_rewrite = ui.create.div('.playerjiu', player.node.avatar);
                            player.node.jiu2_rewrite = ui.create.div('.playerjiu', player.node.avatar2);
                        },
                        trigger: {
                            player: 'useCard1'
                        },
                        filter: function (event) {
                            return event.card && get.tag(event.card, "damage") && event.cards.length == 0;
                        },
                        forced: true,
                        charlotte: true,
                        firstDo: true,
                        content: function () {
                            if (!trigger.baseDamage) trigger.baseDamage = 1;
                            trigger.baseDamage += player.storage.jiu_rewrite;
                            trigger.jiu_rewrite = true;
                            trigger.jiu_rewrite_add = player.storage.jiu_rewrite;
                            game.addVideo('jiuNode', player, false);
                            game.broadcastAll(function (player) {
                                player.removeSkill('jiu_rewrite');
                            }, player);
                        },
                        temp: true,
                        vanish: true,
                        silent: true,
                        popup: false,
                        nopop: true,
                        onremove: function (player) {
                            if (player.node.jiu_rewrite) {
                                player.node.jiu_rewrite.delete();
                                player.node.jiu2_rewrite.delete();
                                delete player.node.jiu_rewrite;
                                delete player.node.jiu2_rewrite;
                            }
                            delete player.storage.jiu_rewrite;
                        },
                        ai: {
                            damageBonus: true
                        },
                        group: "jiu_rewrite2",
                    },
                    jiu_rewrite2: {
                        trigger: {
                            player: 'useCardAfter',
                            global: 'phaseAfter'
                        },
                        priority: 2,
                        firstDo: true,
                        charlotte: true,
                        filter: function (event) {
                            if (event.name == 'useCard') return event.card && get.tag(event.card, "damage") && event.cards.length == 0;
                            return true;
                        },
                        forced: true,
                        popup: false,
                        audio: false,
                        content: function () {
                            game.broadcastAll(function (player) {
                                player.removeSkill('jiu_rewrite');
                            }, player);
                            game.addVideo('jiuNode', player, false);
                        },
                    },
                    yinling3d8: {
                        group: ["yinling3d8_storage", "yinling3d8_clear"],
                        init: function (player) {
                            player.storage.yinling3d8 = 0;
                            player.storage.yinling3d82 = 0;
                        },
                        trigger: {
                            global: "phaseJieshuBegin"
                        },
                        filter: function (event, player) {
                            if (!player.storage.yinling3d82) return false;
                            if (player.storage.yinling3d8 != 1) return false;
                            var num = player.storage.yinling3d82;
                            var bool = game.hasPlayer(function (current) {
                                return current.hasCard(function (card) {
                                    return get.translation(card.name).length == num;
                                }, "e");
                            });
                            var list = [];
                            for (var i = 0; i < lib.inpile.length; i++) {
                                var name = lib.inpile[i];
                                if (get.translation(name).length + (player.storage.yinling3d82) != 5) continue;
                                if (name == 'sha' && player.hasUseTarget({
                                        name: name
                                    })) {
                                    list.push(['基本', '', 'sha']);
                                    for (var j of lib.inpile_nature) {
                                        list.push(['基本', '', 'sha', j]);
                                    }
                                } else if (get.type(name) == 'trick' && player.hasUseTarget({
                                        name: name
                                    })) list.push(['锦囊', '', name]);
                                else if (get.type(name) == 'basic' && player.hasUseTarget({
                                        name: name
                                    })) list.push(['基本', '', name]);
                            }
                            return bool || list.length > 0;
                        },
                        check: function (event, player) {
                            var num = player.storage.yinling3d82;
                            var flag = 0;
                            var players = game.filterPlayer();
                            for (var i = 0; i < players.length; i++) {
                                var cards = players[i].getCards("e");
                                for (var j = 0; j < cards.length; j++) {
                                    if (get.translation(cards[j]).length != num) continue;
                                    flag = 1;
                                    var check = cards[j].name == 'baiyin' && players[i].isDamaged();
                                    if (get.value(cards[j]) >= 6 && get.attitude(player, players[i]) < 0 && !check) return true;
                                    if ((get.value(cards[j]) < 4 && get.attitude(player, players[i]) > 0) || check) return true;
                                }
                            }
                            if (flag == 1) return false;
                            for (var i = 0; i < lib.inpile.length; i++) {
                                var name = lib.inpile[i];
                                if (get.translation(name).length + num != 5) continue;
                                if (name == 'sha') {
                                    if (player.hasUseTarget({
                                            name: name
                                        }) && player.getUseValue(name) > 0) return true;
                                    for (var j of lib.inpile_nature) {
                                        if (player.hasUseTarget({
                                                name: name,
                                                nature: j
                                            }) && player.getUseValue(name) > 0) return true;
                                    }
                                }
                                if (player.hasUseTarget({
                                        name: name
                                    }) && player.getUseValue(name) > 0) return true;
                            }
                            return false;
                        },
                        prompt2: function (event, player) {
                            var num = player.storage.yinling3d82;
                            var bool = game.hasPlayer(function (current) {
                                return current.hasCard(function (card) {
                                    return get.translation(card.name).length == num;
                                }, "e");
                            });
                            var num2 = 5 - num;
                            if (bool) return "重铸场上一张字数为" + get.cnNumber(num) + "的牌";
                            else return "视为使用一张字数为" + get.cnNumber(num2) + "的牌";
                        },
                        content: function () {
                            "step 0"
                            var num = player.storage.yinling3d82;
                            var bool = game.hasPlayer(function (current) {
                                return current.hasCard(function (card) {
                                    return get.translation(card.name).length == num;
                                }, "e");
                            });
                            if (bool) {
                                player.chooseTarget("重铸场上一张字数为" + num + "的牌", true, function (card, player, current) {
                                    return current.hasCard(function (card) {
                                        return get.translation(card.name).length == num
                                    }, "e");
                                }).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (target.isDamaged() && target.getEquip("baiyin") && num == 4) {
                                        return get.attitude(player, target);
                                    }
                                    return -get.attitude(player, target);
                                });
                            } else event.goto(3);
                            "step 1"
                            if (result.bool) {
                                var target = result.targets[0];
                                event.target = target;
                                player.choosePlayerCard("重铸一张牌", target, "e", true, function (button) {
                                    var check = target.isDamaged() && button.link.name == 'baiyin';
                                    if (get.attitude(player, target) > 0) {
                                        if (check) return 10;
                                        return -get.effect(target, button.link, target, target);
                                    }
                                    if (check) return -10;
                                    return get.effect(target, button.link, target, target);
                                }).set('filterButton', function (button) {
                                    return get.translation(button.link.name).length == player.storage.yinling3d82;
                                });
                            } else event.finish();
                            "step 2"
                            if (result.bool) {
                                event.target.loseToDiscardpile(result.cards);
                                event.target.draw();
                            }
                            event.finish();
                            "step 3"
                            var list = [];
                            for (var i = 0; i < lib.inpile.length; i++) {
                                var name = lib.inpile[i];
                                if (get.translation(name).length + (player.storage.yinling3d82) != 5) continue;
                                if (name == 'sha') {
                                    list.push(['基本', '', 'sha']);
                                    for (var j of lib.inpile_nature) {
                                        list.push(['基本', '', 'sha', j]);
                                    }
                                } else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                            }
                            var dialog = ui.create.dialog('吟翎', [list, 'vcard']);
                            player.chooseButton(dialog).set('filterButton', function (button) {
                                return _status.event.player.hasUseTarget({
                                    name: button.link[2],
                                    nature: button.link[3]
                                });
                            }).ai = function (button) {
                                var effect = player.getUseValue(button.link[2]);
                                if (effect > 0) return effect;
                                return 0;
                            }
                            "step 4"
                            if (result.bool) {
                                var name = result.links[0][2];
                                var nature = result.links[0][3];
                                player.chooseUseTarget({
                                    name: name,
                                    nature: nature,
                                    isCard: true
                                }, true, false);
                            }
                        },
                        subSkill: {
                            storage: {
                                trigger: {
                                    target: 'useCardToTarget'
                                },
                                forced: true,
                                popup: false,
                                content: function () {
                                    player.storage.yinling3d8++;
                                    var num = get.translation(trigger.card.name).length;
                                    player.storage.yinling3d82 = num;
                                }
                            },
                            clear: {
                                trigger: {
                                    global: 'phaseBegin'
                                },
                                forced: true,
                                popup: false,
                                charlotte: true,
                                content: function () {
                                    player.storage.yinling3d8 = 0;
                                    player.storage.yinling3d82 = 0;
                                }
                            }
                        }
                    },
                    // yanghu
                    gz_rongbei: {
                        audio: 'rongbei',
                        enable: 'phaseUse',
                        mainSkill: true,
                        init: function (player) {
                            player.checkMainSkill('gz_rongbei')
                        },
                        limited: true,
                        skillAnimation: true,
                        animationColor: 'thunder',
                        filter: function (event, player) {
                            return game.hasPlayer((current) => lib.skill.gz_rongbei.filterTarget(null, player, current));
                        },
                        filterTarget: function (card, player, target) {
                            for (var i = 1; i < 6; i++) {
                                if (target.isEmpty(i)) return true;
                            }
                            return false;
                        },
                        content: function () {
                            'step 0'
                            event.num = 0;
                            player.awakenSkill('gz_rongbei');
                            'step 1'
                            while (!target.isEmpty(event.num)) {
                                event.num++;
                                if (event.num > 5) {
                                    event.finish();
                                    return;
                                }
                            }
                            var card = get.cardPile2(function (card) {
                                return get.subtype(card) == 'equip' + event.num && target.canUse(card, target);
                            });
                            if (card) {
                                target.chooseUseTarget(card, true, 'nopopup');
                            }
                            event.num++;
                            if (event.num <= 5) event.redo();
                        },
                        ai: {
                            order: 5,
                            result: {
                                target: function (player, target) {
                                    return (target.hasSkillTag('noe') ? 2 : 1) * (5 - target.countCards('e') - target.countDisabled());
                                },
                            },
                        },
                    },
                    // zhanghu
                    gz_cuijian: {
                        audio: 'cuijian',
                        enable: 'phaseUse',
                        usable: 1,
                        filter: function (event, player) {
                            return game.hasPlayer((current) => lib.skill.gz_cuijian.filterTarget(null, player, current));
                        },
                        filterTarget: function (card, player, target) {
                            return target != player && target.countCards('h') > 0;
                        },
                        content: function () {
                            'step 0'
                            var hs = target.getCards('h', 'shan');
                            if (hs.length) {
                                hs.addArray(target.getCards('he', function (card) {
                                    return get.subtype(card) == 'equip2';
                                }))
                                player.gain(hs, target, 'give');
                                event.num = hs.length;
                            } else {
                                player.draw();
                                event.finish();
                            }
                            'step 1'
                            var hs = player.getCards('he');
                            if (!hs.length || !target.isIn()) event.finish();
                            else if (hs.length <= num) event._result = {
                                bool: true,
                                cards: hs
                            };
                            else player.chooseCard('he', true, '选择交给' + get.translation(target) + get.cnNumber(num) + '张牌', num);
                            'step 2'
                            if (result.bool && result.cards && result.cards.length) target.gain(result.cards, player, 'giveAuto');
                        },
                        ai: {
                            order: 4,
                            result: {
                                player: function (player, target) {
                                    if (!target.countCards('h', 'shan')) return player.hasMark('zhtongyuan_trick') ? 2 : 0;
                                    return 0;
                                },
                                target: function (player, target) {
                                    if (target.countCards('h', 'shan')) {
                                        var num = -target.countCards('h') / 2;
                                        var card = target.getEquip(2);
                                        if (card) num -= (get.value(card, target) / 2);
                                        return num;
                                    }
                                    return -0.01;
                                },
                            },
                        },
                    },


                    // 神将
                    // gz_shen: {
                    //     trigger: {
                    //         player: 'showCharacterAfter',
                    //     },
                    //     locked: true,
                    //     forced: true,
                    //     content: function () {
                    //         var skills = lib.character[target.name2][3];
                    // 			for (var i = 0; i < skills.length; i++) {
                    // 				player.removeSkill(get.name(skills[i]))
                    // 			}
                    //     },
                    // },
                    // shen_xunyu
                    gz_lingce: {
                        audio: 'lingce',
                        trigger: {
                            global: 'useCard'
                        },
                        forced: true,
                        filter: function (event, player) {
                            return (get.zhinangs().contains(event.card.name) || player.getStorage('dinghan').contains(event.card.name)) && event.card.isCard && event.cards.length == 1;
                        },
                        content: function () {
                            player.draw()
                        },
                    },
                    // 武将技能 //
                },
                // 技能翻译
                translate: {
                    // 野心家
                    // 双势力
                    // 魏
                    gz_qhzhangji: '长姬',
                    gz_qhzhangji_info: '一名角色的回合结束时，若你本回合内：造成过伤害，则你可以令其摸1张牌；受到过伤害，则你可以令其弃置1张牌。',
                    gz_zhongzuo: '忠佐',
                    gz_zhongzuo_info: '一名角色的结束阶段开始时，若你于此回合内造成或受到过伤害，则你可以令一名角色摸一张牌。若该角色已受伤，则你摸一张牌。',
                    gz_shanjia: "缮甲",
                    gz_shanjia_info: "出牌阶段开始时，你可以摸2张牌，然后弃置2-X张牌(X为你本局游戏内不因使用而失去过的装备牌的数目且至多为2)。若你没有以此法弃置基本牌或锦囊牌，则你可以视为使用了一张无距离限制且不计入出牌阶段使用次数的【杀】。",
                    gz_xianfu: '先辅',
                    gz_xianfu2: '先辅',
                    gz_xianfu2_bg: '辅',
                    gz_xianfu_info: '锁定技；当你明置此武将时，你选择一名其他角色，当其受到伤害后，你受到等量的伤害，当其回复体力后，你回复等量的体力。',
                    gz_chouce: '筹策',
                    gz_chouce_info: '当你受到一点伤害后，你可以判定，若结果为：黑色，你弃置一名角色区域里的一张牌；红色，你选择一名角色，其摸一张牌，若其是〖先辅〗选择的角色，改为其摸两张牌。',
                    gz_gongao: '功獒',
                    gz_gongao_info: '锁定技；每当一名角色死亡后你回复一点体力。',
                    gz_weizhong: '威重',
                    gz_weizhong_info: '主将技，锁定技；当你受到伤害或回复体力后你摸一张牌。',
                    gz_busuan: '卜算',
                    gz_busuan_info: '出牌阶段限一次，你可以失去一点体力并选择一名其他角色，然后选择至多两张不同的卡牌名称（限基本牌或锦囊牌）。该角色下次摸牌阶段摸牌时，改为从牌堆或弃牌堆中获得你选择的牌。',
                    gz_mingjie: '命戒',
                    gz_mingjie_info: '副将技，此武将计算体力上限时减少一个阴阳鱼；结束阶段，你可以摸一张牌，若此牌为红色，你可以重复此流程直到摸到黑色牌或摸到第三张牌。当你以此法摸到黑色牌时，若你的体力值大于1，则你失去1点体力。',
                    gz_qingtan: '清谈',
                    gz_qingtan_info: '出牌阶段限一次，若你的手牌数不小于2，你可以弃置一张牌，令所有有手牌的角色同时选择一张手牌并展示。然后你可以获得其中一种花色的所有牌，展示此花色牌的角色各摸一张牌。',
                    gz_jixi: '急袭',
                    gz_jixi_info: '主将技；你可以将一张“田”当作【顺手牵羊】使用。',
                    gz_shanzhuan: '擅专',
                    gz_shanzhuan_info: '当你对其他角色造成伤害后，若其判定区没有牌，你可以将你的一张牌置于其判定区；若此牌不为延时类锦囊牌且此牌为红色/黑色，此牌视为【乐不思蜀】/【兵粮寸断】；然后其摸一张牌。回合结束时，若你本回合内未造成伤害，你可摸一张牌。',
                    gz_qingjue: '请决',
                    gz_qingjue_info: '每回合限一次，当有其他角色A使用牌指定其他角色B为目标时，若B体力值小于A且不处于濒死状态，则你可以与A拼点。若你赢/没赢，你取消此目标/将此牌的目标改为自己。',
                    gz_xuepin: '血拼',
                    gz_xuepin_info: '出牌阶段限一次，你可以选择攻击范围内的一名角色并失去1点体力，然后弃置其两张牌；若这两张牌类型相同，你摸一张牌。',
                    zmfenji: "奋计",
                    zmfenji_info: "摸牌/弃牌阶段开始时，你可以视为使用一张未以此法使用过的普通锦囊牌，然后将此阶段的摸牌/弃牌数改为受到过此牌伤害的角色数。",
                    // gz_duoqi: '夺气',
                    // gz_duoqi_info: '若一名角色于除你之外的其他角色的出牌阶段弃置过牌，你可以移去一张“筑”结束当前角色的出牌阶段。',
                    gz_chengxiang: '称象',
                    gz_chengxiang_info: '当你受到伤害后，你可以亮出牌堆顶的3张牌。然后获得其中任意数量点数之和不大于13的牌',
                    gz_gushe: '鼓舌',
                    gz_gushe_bg: '舌',
                    gz_gushe_info: '出牌阶段限一次，你可以用一张手牌与至多二名角色同时拼点，然后依次结算拼点结果，没赢的角色选择一项：1.弃置一张牌；2.令你摸一张牌。若你没赢，你获得一个“饶舌”标记。当你获得第6个“饶舌”标记时，你失去一点体力，然后移除此武将牌。',
                    gz_cslilu: '礼赂',
                    gz_cslilu_info: '摸牌阶段，你可以放弃摸牌，改为将手牌摸至体力上限数，然后将至少一张手牌交给一名其他角色。若你以此法给出的牌数不少于2张，则你回复1点体力。',
                    gz_shenshi: "审时",
                    gz_shenshi_info: "其他角色对你造成伤害后，你可以观看该角色的手牌，然后交给其一张牌，当前角色回合结束时，若此牌仍在该角色的区域内，你将手牌摸至体力上限数。",
                    gz_lingren: "凌人",
                    gz_lingren_info: "每回合限一次；当你于出牌阶段使用带有「伤害」标签的基本牌或普通锦囊牌指定目标后，你可以猜测其中一个目标的手牌中是否有基本牌、锦囊牌或装备牌。若你猜中的项目数：≥1，此牌对该角色的伤害+1；≥2，你摸两张牌；≥3，你获得技能〖奸雄〗和〖行殇〗直到下回合开始。",
                    gz_ciqiu: '刺酋',
                    gz_ciqiu_dying: '刺酋',
                    gz_ciqiu_info: '锁定技；每当你使用【杀】对目标角色造成伤害时，若该角色未受伤，你令此伤害+1；若其因此进入濒死状态，你令其移除主将，然后你移除此武将。 ',
                    yuanzhen3d8: "远振",
                    yuanzhen3d8_info: "锁定技；你使用牌指定与你距离不为1的其他角色为唯一的目标后，你令其选择一项：1. 弃置一张牌；2. 令你摸一张牌。",
                    zhirong3d8: "制戎",
                    zhirong3d8_info: "出牌阶段开始时，你可将一名角色场上的一张装备牌置入另一名角色的装备区，然后前者视为对后者使用【过河拆桥】。",


                    // 蜀
                    gz_poxiang: '破降',
                    gz_poxiang_info: '出牌阶段限一次，你可以将一张牌交给一名其他角色；若如此做，你失去1点体力并摸三张牌，然后跳过弃牌阶段。',
                    gz_jintao: '进讨',
                    gz_jintao_info: '锁定技；你使用【杀】无距离限制且次数上限+1。你于出牌阶段内使用的第二张【杀】不可被响应。',
                    gz_mansi: '蛮嗣',
                    gz_mansi_info: '出牌阶段限一次，你可以将所有手牌当做【南蛮入侵】使用。',
                    gz_kuiji: '溃击',
                    gz_kuiji_info: '出牌阶段限一次，你可以将一张黑色基本牌当作【兵粮寸断】置于你的判定区，然后摸1张牌。若如此做，你可以对一名与你势力不同且体力值最多的角色造成1点伤害；若其因此进入濒死状态，你令与你势力相同的一名角色回复1点体力。',
                    gz_zhengnan: '征南',
                    gz_zhengnan_info: '主将技；当一名角色进入濒死状态时，若你未因其发动过〖征南〗，则你获得下列技能中的任意一个：〖武圣〗、 〖当先〗和〖制蛮〗（若技能全部拥有则改为摸1张牌。你以此法获得的〖当先〗结算时视为已发动过〖伏枥〗）。',
                    gz_dianhu: "点虎",
                    gz_dianhu_info: "锁定技；当你明置此武将时，你选择一名其他角色。当其回复体力或受到与你势力相同的角色造成的伤害后，你摸一张牌。",
                    gz_dianhu2: "点虎",
                    gz_dianhu2_info: "",
                    gz_dingcuo: '定措',
                    gz_dingcuo_info: '每回合限一次。当你受到伤害后，你可摸两张牌，若这两张牌颜色不同，则你弃置一张手牌。',
                    gz_jugu: '巨贾',
                    gz_jugu_info: '锁定技；1.你的手牌上限+X。2.当你明置此武将时，你摸X张牌（X为你的体力上限）',
                    gz_tianjiang: '天匠',
                    gz_tianjiang_info: '当你明置此武将时，你随机获得两张不同副类别的装备牌，并置入你的装备区。出牌阶段，你可以将装备区的牌移动至其他角色的装备区（可替换原装备）。若你以此法移动了〖铸刃〗的衍生装备，你摸两张牌。',
                    gz_shameng: '歃盟',
                    gz_shameng_info: '出牌阶段限一次，你可弃置两张颜色相同的手牌并选择一名其他角色。其摸两张牌，然后你摸一张牌。',
                    gz_yizhi: '遗志',
                    gz_yizhi_info: '副将技；若你的主将拥有技能〖观星〗，则将其描述中的X改为5；若你的主将没有技能〖观星〗，则你视为拥有技能〖观星〗。',
                    gz_rezhennan: '镇南',
                    gz_rezhennan_info: '当你成为其他角色使用的牌的目标后，若此牌的目标数大于该角色的体力值，则你可以弃置两张牌并对其造成一点伤害。',
                    gz_nuzhan: '怒斩',
                    gz_nuzhan_info: '锁定技；你使用的由装备牌转化的【杀】的伤害值基数+1',
                    gz_zhuning: '诛佞',
                    gz_zhuning_info: '出牌阶段限一次。你可将任意张牌交给一名其他角色（称为“隙”），然后可视为使用一张具有伤害标签的基本牌/锦囊牌（不计入次数限制）。',
                    gz_qirang: '祈禳',
                    gz_qirang_info: '当有装备牌进入你的装备区时，你可获得牌堆中的一张锦囊牌。',
                    zmxueji: "血激",
                    zmxueji_info: "出牌阶段限一次，你可以将所有手牌当作【杀】使用，此【杀】无距离限制并可以指定X角色为目标（X为你以此法选择的手牌数且至多为3）；然后你摸Y张牌（Y为你造成了伤害的角色数）。",
                    zmmengpo: "猛破",
                    zmmengpo_info: "出牌阶段限一次，你可以弃置一张牌，视为对一名角色使用一张【杀】，若未以此法造成伤害，你选择一项：1.摸一张牌；2.视为再使用一张【杀】。",
                    jl_cangshu: "藏书",
                    jl_cangshu_info: "当其他角色使用非延时类锦囊牌时，你可以交给其一张基本牌令其无效；然后你获得此牌，其摸一张牌。",
                    jl_kanwu: "勘误",
                    jl_kanwu1: "勘误",
                    jl_kanwu2: "勘误",
                    jl_kanwu3: "勘误",
                    jl_kanwu_info: "当你于回合外需要使用或打出一张基本牌时，你可以弃置一张锦囊牌，视为使用或打出之。",
                    gz_shuaiyan: '率言',
                    gz_shuaiyan_info: '每名角色限一次，当其他角色于你的回合外回复体力后，你可以令该角色选择一项：1.令你摸一张牌；2.令你弃置其一张牌。',
                    zmdiewu: "蝶舞",
                    zmdiewu2: "蝶舞",
                    zmdiewu22: "蝶舞",
                    zmdiewu23: "蝶舞",
                    zmdiewu_info: "出牌阶段限一次，你可以将一张牌交给一名其他角色，称为“蝶舞”，然后你摸一张牌；有“蝶舞”牌的角色可以弃置此牌，然后视为使用或打出一张【杀】或【闪】，直到其回合结束。",
                    zmmuyun: "慕云",
                    zmmuyun_info: "一名角色使用或打出的转化牌或“蝶舞”牌结算后，你可以令其摸一张牌。",
                    gz_qimou: '奇谋',
                    gz_qimou_info: '主将技，限定技；出牌阶段，你可以失去任意点体力，然后直到回合结束，你计算与其他角色的距离时-X，且你可以多使用X张【杀】（X为你失去的体力值）',
                    gz_zyqiao: '气傲',
                    gz_zyqiao_info: "当你成为其他势力的角色使用牌的目标后，你可以弃置一张牌，然后你弃置其一张牌。",
                    zmyihua: "翊化",
                    zmyihua_info: "出牌阶段限一次，你可以展示其他角色的一张手牌，若其展示的牌为：基本牌，你可以用一张牌交换之；装备牌，你对其造成1点伤害；锦囊牌，弃置此牌，然后你弃置一张牌。",
                    xiazhi3d8: "辖治",
                    xiazhi3d8_info: "每轮限一次，其他角色的回合开始时，你可令其执行下列一项，若你于此回合未获得或失去手牌，其于此回合结束时须令你执行下列另一项并重置此技能：1.摸两张牌；2.失去1点体力；3.将两张牌置于牌堆顶 。",
                    pingshi3d8: "平势",
                    pingshi3d8_info: "一名角色的回合结束后，若此回合有至少两名角色的体力减少或增加，你可令其中一名角色回复1点体力。",
                    gz_jiezhong: '竭忠',
                    gz_jiezhong_info: '限定技；准备阶段开始时，你可以将手牌补至手牌上限（至多摸五张）。',



                    // 吴
                    gz_qinzheng: '勤政',
                    gz_qinzheng_info: '锁定技；当你使用或打出牌时，若你本局游戏内使用或打出过的牌数和：为4的倍数，你从牌堆中获得一张【杀】或【闪】；为8的倍数，你从牌堆中获得一张【桃】或【酒】；为12的倍数，你从牌堆中获得一张【决斗】或【无中生有】（可获得对应的衍生替换牌）。',
                    gz_jishe: '极奢',
                    gz_jishe_info: '出牌阶段，若你的手牌上限大于0，你可以摸一张牌，然后你本回合的手牌上限-1。结束阶段开始时，若你没有手牌，则你可以横置至多X名角色的武将牌（X为你的体力值）',
                    gz_hunshang: "魂殇",
                    gz_hunshang_info: "准备阶段，若你的体力值不大于1，则你获得〖英姿〗和〖英魂〗直到回合结束。",
                    gz_fenli: '奋励',
                    gz_fenli_info: '主将技；若你的手牌数为全场最多，你可以跳过摸牌阶段；若你的体力值为全场最多，你可以跳过出牌阶段；若你的装备区里有牌且数量为全场最多，你可以跳过弃牌阶段。',
                    gz_huaiju: "怀橘",
                    gz_huaiju_info: "锁定技；当你明置此武将时，你获得3个“橘”标记。（有“橘”的角色受到伤害时，防止此伤害，然后移去一个“橘”；有“橘”的角色摸牌阶段额外摸一张牌）",
                    gz_aocai: '傲才',
                    gz_aocai_info: '当你于回合外需要使用或打出一张基本牌时，你可以观看牌堆顶的两张牌（若你没有手牌则改为四张）。若你观看的牌中有此牌，你可以使用打出之。',
                    gz_tianyun: '天运',
                    gz_tianyun_info: '①当你明置此武将时，你从牌堆中获得手牌区内没有的花色的各一张牌。②一名角色的回合开始时，若其座位号等于游戏轮数，则你可观看牌堆顶的X张牌并以任意顺序置于牌堆顶。若你将所有的牌均置于了牌堆底，则你可以令一名角色摸X张牌，然后失去1点体力。（X为你手牌中包含的花色数）',
                    // gz_youdi: '诱敌',
                    // gz_youdi_info: '结束阶段开始时，你可以令一名其他角色弃置你的一张牌，若此牌不为【杀】，你摸一张牌并获得该角色的一张牌。',
                    gz_youdi: "诱敌",
                    gz_youdi_info: "主将技，此武将计算体力上限时减少一个单独的阴阳鱼；结束阶段开始时，你可以令一名其他角色弃置你的一张手牌，若此牌：不为黑色，你摸一张牌。不为【杀】，你获得该角色的一张牌。",
                    gz_twlingbao: '灵宝',
                    gz_twlingbao_info: '副将技，此武将计算体力上限时减少一个单独的阴阳鱼；出牌阶段限一次，你可以将两张花色不同的“丹”置入弃牌堆。若这两张牌：均为红色，你令一名其他角色回复1点体力；均为黑色，你弃置一名其他角色区域内至多两张区域不同牌；颜色不同，则你令一名角色摸一张牌，并令另一名角色弃置一张牌。',
                    // gz_fanjian: '反间2',
                    // gz_fanjian_info: '主将技；出牌阶段限一次，你可以令一名角色选择一种花色并展示你的一张手牌，若选择的花色与展示的不同，该角色受到来自你的一点伤害。然后该角色获得展示的牌。',
                    liejiang3d8: "烈江",
                    liejiang3d8_info: "主将技；出牌阶段限一次，你可与一名其他角色交换一张手牌并展示，若花色不同，你对其造成1点火焰伤害。",
                    gz_gnsheque: '射却',
                    gz_gnsheque_info: '主将技；一名其他角色的准备阶段开始时，若其装备区内有牌，则你可以对其使用一张【杀】（无距离关系的限制且无视防具）。',
                    gz_spjianyi: '俭衣',
                    gz_spjianyi_info: '主将技，锁定技；其他角色的回合结束时，若弃牌堆中有于本回合内因弃置而进入弃牌堆的防具牌，则你获得其中一张。',
                    gz_songsang: "送丧",
                    gz_songsang_info: "限定技，其他角色死亡时，你可以增加一点体力上限并回复一点体力，然后摸一张牌。",
                    zmzhenxiang: "镇乡",
                    zmzhenxiang_info: "当你因【杀】受到或造成伤害后，你可以令当前回合角色选择一项：1.令你摸一张牌，然后其于此阶段内可以多使用一张【杀】；2.令你弃置其一张牌。",
                    zmhongyuan: "宏愿",
                    zmhongyuan_info: "一名角色一次性弃置或获得了三张或更多牌后，你可以将手牌数补至三张或令当前回合角色摸一张牌。",
                    zmfujiang: "覆江",
                    zmfujiang_info: "其他角色获得你的牌后，你可以弃置其装备区内的一张牌，若其装备区内没有牌，则改为对其造成1点伤害。",
                    gz_lianyou: '莲佑',
                    gz_lianyou_info: '你死亡时，可以选择一名其他角色，令其获得技能【兴火】。',
                    zmwengao: "文诰",
                    zmwengao2: "文诰",
                    zmwengao_info: "你的回合内，你使用的红色牌结算后你可以获得之；若如此做，你只能使用点数小于此牌的牌直到回合结束。",
                    jl_weifeng: '威奉',
                    jl_weifeng_info: '准备阶段开始时，若你的手牌数小于你的当前体力，你可以与1名角色拼点，若你赢，你从牌堆摸2张牌，若你没赢，该角色从牌堆摸2张牌。',
                    // zmpojian: "破间",
                    // zmpojian_info: "准备阶段，你可以令一名角色观看你的手牌（记录为A）；若如此做，结束阶段其再次观看你的手牌（记录为B），若B中有A且数量不小于X，X为你当前体力值，你观看其手牌，然后对其造成1点伤害。",
                    gz_guolie: '果烈',
                    gz_guolie2: '果烈',
                    gz_guolie_info: '摸牌阶段开始前，你可跳过此阶段。若如此做，你摸一张牌，然后你的红/黑色牌均视为【火攻】/【过河拆桥】直到回合结束；结束阶段，你获得本回合从你以外的区域内进入弃牌堆的所有牌。',
                    xintu3d8: "辛土",
                    xintu3d8_info: "锁定技；摸牌阶段开始时，你展示牌堆顶三张牌并依次使用之（无法使用则不使用），然后你以此法使用的牌数：不小于X，你弃置装备区里一张牌；大于X，你结束摸牌阶段（X为你的体力值）。",
                    gz_keshou: '恪守',
                    gz_keshou_info: '当你受到伤害时，你发动此技能。你可弃置两张颜色相同的牌，若如此做，此伤害-1。你的势力已确定且场上没有与你势力相同的其他角色，则你进行判定，若结果为红色，你摸一张牌。',
                    gz_xingchong: "幸宠",
                    gz_xingchong_info: "转换技，①一名角色于摸牌阶段外获得牌时，你可以令其弃置一张牌；②一名角色于弃牌阶段外弃置牌时，你可以令其摸一张牌。",
                    biaodou3d8: "殉战",
                    biaodou3d8_info: "每回合限一次，你使用【杀】指定其他角色或其他角色使用【杀】指定你时，你可以与其互相随机展示对方一张手牌。若如此做，本回合内先失去被展示牌的角色摸两张牌，后失去被展示牌的角色失去1点体力。",
                    gz_xianghai: '乡害',
                    gz_xianghai_info: '锁定技；你手牌区的装备牌均视为【酒】，与你势力不同的其他角色的手牌上限-1。',
                    zhiqu3d8: "直驱",
                    zhiqu3d8_info: "锁定技；转换技，你回合内使用的下一张基本牌或普通锦囊牌无视①次数②距离③目标数限制。",
                    sisheng3d8: "死生",
                    sisheng3d8_info: "出牌阶段限一次，你可将三张牌或最后一张手牌当一张任意基本牌使用。你以此法失去所有手牌时，若为本轮首次，则于本回合结束时摸三张牌。",



                    // 群
                    gz_xionghuo: "凶镬",
                    gz_xionghuo_info: "当你明置此武将时，你获得3个“暴戾”标记。出牌阶段，你可以交给一名其他角色一个“暴戾”标记，你对有“暴戾”标记的角色造成伤害时，此伤害+1。有“暴戾”的其他角色的出牌阶段开始时，其移去所有“暴戾”标记并随机执行一项：1.受到1点火焰伤害且本回合不能对你使用【杀】；2.失去1点体力且本回合手牌上限-1；3.你随机获得其一张手牌和一张装备区的牌。",
                    gz_shajue: "杀绝",
                    gz_shajue_info: "主将技，锁定技；其他角色进入濒死状态时，若其体力值小于0，则你获得一个“暴戾”标记，并获得使其进入濒死状态的牌。",
                    gz_langmie: '狼灭',
                    gz_langmie_damage: '狼灭',
                    gz_langmie_info: '其他角色的出牌阶段结束时，若其本阶段内使用过的牌中有类型相同的牌，则你可以重铸1张牌；其他角色的结束阶段开始时，若其本回合内造成的伤害大于1，则你可以弃置一张牌并对其造成1点伤害。',
                    gz_shiji: '势击',
                    gz_shiji_info: '主将技，当你对其他角色造成伤害时，若你的手牌数不为全场唯一最多，则你可以观看其手牌。你令其弃置其中的所有红色牌，然后摸等量的牌。',
                    gz_gongjian: '攻坚',
                    gz_gongjian_info: '每回合限一次，当你使用【杀】指定目标后，若此【杀】和你使用的上一张【杀】或场上使用的上一张【杀】有相同的目标，则你可以弃置其一张牌，然后获得以此法弃置的所有【杀】。',
                    gz_kuimang: '溃蟒',
                    gz_kuimang_info: '主将技，锁定技；一名角色死亡后，若你对其造成过伤害，你摸两张牌。',
                    gz_liushi: '流矢',
                    gz_liushi2: '流矢',
                    gz_liushi_info: '出牌阶段限一次，你可以将一张红桃牌置于牌堆顶，视为对一名角色使用一张【杀】（无距离限制且不计入使用次数）。当此【杀】造成伤害后，受到伤害的角色获得一个“流”。有“流”的角色手牌上限-X（X为其“流”数）。',
                    gz_mingren: "明任",
                    gz_mingren_info: "当你明置此武将时，你摸两张牌，然后将一张手牌置于你的武将牌上，称为“任”。结束阶段，你可以用一张手牌替换“任”。",
                    gz_zhenliang: "贞良",
                    gz_zhenliang_info: "主将技，转换技；阴：出牌阶段限一次，你可以弃置一张与“任”颜色相同的牌并对攻击范围内的一名角色造成1点伤害。阳：当你于回合外使用或打出的牌结算完成后，若此牌与“任”颜色相同，则你可以令一名角色摸一张牌。",
                    gz_shouxi: '守玺',
                    gz_shouxi_info: '当你成为【杀】的目标后，你可声明一种未以此法声明过的基本牌的牌名。若使用者弃置一张你声明的牌，其获得你的一张牌；若否，则此【杀】对你无效',
                    gz_jutu: '据土',
                    gz_jutu_info: '锁定技；准备阶段，你弃置所有你武将牌上的“生”并摸1张牌，然后将X张牌置于你的武将牌上，称为“生”（X为你因〖邀虎〗选择势力的角色数量)。',
                    gz_fuqi: '伏骑',
                    gz_fuqi_info: '主将技，锁定技；当你使用牌时，你令所有与你距离为1的其他角色不能使用或打出牌响应此牌。',
                    gz_jiaozi: '骄恣',
                    gz_jiaozi_info: '副将技，锁定技；若你的手牌数为全场唯一最多，则当你造成或受到伤害时，此伤害+1。',
                    gz_shuangxiong: "双雄",
                    gz_shuangxiong_info: "摸牌阶段你可以放弃摸牌，改为展示牌堆顶的两张牌并获得其中的一张。然后你本回合可以将与此牌颜色不同的一张手牌当做【决斗】使用。",
                    gz_shiyuan: '诗怨',
                    gz_shiyuan_info: '每回合每项限一次，当你成为其他角色使用牌的目标后：①若其体力值大于你，你摸2张牌。②若其体力值等于你，你摸1张牌。',
                    gz_jielie: '节烈',
                    gz_jielie_info: '当你明置此武将时，你选择一名其他角色，该角色每次于其回合外获得牌后，你摸等量的牌（每回合至多摸三张）；其进入濒死状态时，你可令其回复体力至1点（每轮限一次）。该角色死亡时，你弃置所有牌并失去1点体力。',
                    gz_leiji: '雷击',
                    gz_leiji_misa: '雷击',
                    gz_leiji_info: '①当你使用或打出【闪】或【闪电】时，你可以进行判定。②你的判定牌生效后，若结果为黑桃/梅花，你可对一名其他角色造成1点雷电伤害/回复1点体力。',
                    zmbaoluan: "暴乱",
                    zmbaoluan_info: "锁定技；准备阶段，你须弃置一张牌。",
                    zmmozhong: "魔踵",
                    zmmozhong_info: "锁定技；当你于回合内首次造成伤害时，你令此伤害+X（X为你上回合结束阶段已损失的体力值）。",
                    zmfeiyan: "飞燕",
                    zmfeiyan_info: "一名其他角色使用【杀】指定目标时，若其在你的攻击范围内，你可以立即对其使用一张【杀】，若如此做，你摸一张牌。",
                    gz_jianning: '奸佞',
                    gz_jianning_info: '出牌阶段限一次，你可以与一名手牌数比你少的角色交换手牌。',
                    gz_changshi: '常仕',
                    gz_changshi_info: '出牌阶段限一次，你可以指定两名其他角色互换体力；如果两名角色体力之差不小于1，你失去一点体力。',
                    zmpingxi: "平西",
                    zmpingxi_info: "出牌阶段开始时，你可以重铸或使用一张【杀】；然后指定一名其他角色，令其执行相同的操作，否则视为你执行另一项。",
                    zmwangzhi: "望志",
                    zmwangzhi2: "望志",
                    zmwangzhi3: "望志",
                    zmwangzhi_info: "当你获得牌后，你可以将其中一张♠牌置于你的武将牌上；你可以将所有因【望志】获得的牌当【杀】或【闪】使用或打出，然后你摸等量的牌。",
                    gz_koulve: '寇略',
                    gz_koulve_info: '当你于出牌阶段内对其他角色造成伤害后，你可以展示其X张手牌（X为其已损失的体力值）。若这些牌中：有带有伤害标签的基本牌或锦囊牌，则你获得之；有红色牌，则你失去1点体力，然后摸一张牌。',
                    jl_guanlei: "贯雷",
                    jl_guanlei_info: "锁定技；当你受到伤害时，视为受到雷电伤害；若有伤害来源，其将展示手牌。",
                    jl_leiming: "雷鸣",
                    jl_leiming_info: "当你受到1点雷电伤害后，你可以摸1张牌，然后可以选择1名其他角色，令其弃置1张区域里的牌。",
                    gz_xiongmang: '雄莽',
                    gz_xiongmang_info: '你可将X张花色各不相同的手牌当做目标数上限为X的【杀】使用。此【杀】使用结算结束后，若你未造成伤害，则你失去一点体力。',
                    gz_juguan: '拒关',
                    gz_juguan_backup: '拒关',
                    gz_juguan_info: '出牌阶段限一次，你可将一张手牌当【杀】或【决斗】使用。若受到此牌伤害的角色未在你的下回合开始前对你造成过伤害，你的下个摸牌阶段摸牌数加一。',
                    gz_cuijin: '催进',
                    gz_cuijin_info: '当你或你攻击范围内的角色使用【杀】时，你可以弃置两张牌并获得如下效果：此【杀】的伤害值基数+1，且当此【杀】结算结束后，若未造成过伤害，则你对使用者造成1点伤害。',
                    gz_cangchu: '仓储',
                    gz_cangchu_info: '锁定技；当你明置此武将时，你获得3个“粮”；你的手牌上限+X（X为“粮”数）。当你于回合外获得牌时，你获得一个“粮”。（你的“粮”数不能超过存活角色数）',
                    gz_yinshi: "隐士",
                    gz_yinshi_info: "锁定技；若你防具栏为空，防止你受到的属性伤害或锦囊牌伤害。",
                    gz_dikai: '敌忾',
                    gz_dikai_info: '出牌阶段，你可以将至少两张手牌当【杀】使用（无距离限制），你以此法使用的【杀】被目标角色的【闪】响应时，你可以摸等量牌。',
                    gz_zhengsi: '争嗣',
                    gz_zhengsi_info: '锁定技；结束阶段开始时，你须将手牌数调整至二。',
                    gz_dianhua: '点化',
                    gz_dianhua_info: '出牌阶段限一次，若你的手牌数不大于你的体力上限，则你可以展示你的手牌，观看牌堆顶相同数量的牌并以任意方式交换之',
                    gz_zhenyi: '真仪',
                    gz_zhenyi_info: '锁定技；单体锦囊牌无法对你造成伤害。其它角色于其回合内第二次使用锦囊牌指定你为目标时，取消之',
                    gz_tiqi: '涕泣',
                    gz_tiqi_info: '其他角色的摸牌阶段结束时/被跳过时，若其于本阶段内因摸牌而获得的牌数不为二，则你可以摸一张牌。',
                    gz_jiangong: '俭恭',
                    gz_jiangong_info: '弃牌阶段，你可以将弃牌交给一名体力值大于你的其它角色',
                    quhan3d8: "祛寒",
                    quhan3d8_info: "出牌阶段，你可以展示一名其他角色一至X张手牌，你需弃置一张为其中一张牌花色的牌令其回复1点体力；否则本阶段“祛寒”失效（X为其已损失的体力值）。",
                    changtang3d8: "敞堂",
                    changtang3d8_info: "结束阶段，你可以选择除你以外手牌最少的一名其他角色，然后你展示手牌，从该角色开始，每名其他角色能交给你一张与你手牌花色均不同的牌，摸两张牌。",
                    baliao3d8: "霸辽",
                    baliao3d8_info: "出牌阶段限一次，你可与一名其他角色拼点，若你赢，你视为对其使用【顺手牵羊】；若你没赢，其视为对你使用【决斗】。",
                    chailve3d8: "豺略",
                    chailve3d8_info: "你的回合内，其他角色进入濒死状态或失去最后的手牌后，你可将“霸辽”描述中一张锦囊牌的名称改为【顺手牵羊】、【决斗】，若因此与另一张名称相同，你摸两张牌。",




                    // 汉
                    gz_nuchui: "怒锤",
                    gz_nuchui_info: "锁定技；当你使用【杀】或【决斗】对一名角色奇数次造成伤害时，你需弃置两张牌令此伤害加一。",
                    gz_xuxie: '虚猲',
                    gz_xuxie_info: '出牌阶段开始时，你可以失去一点体力并选择所有与你距离为一的角色，弃置这些角色的各一张牌或令这些角色各摸一张牌。出牌阶段结束时，若你的体力值和手牌数均不为全场最多，你回复一点体力或摸两张牌。',
                    gz_bingjie: '秉节',
                    gz_bingjie_info: '出牌阶段开始时，你可失去一点体力，然后当你于本阶段内使用【杀】或普通锦囊牌指定其他角色为目标后，其弃置一张牌。',
                    gz_zhengding: '正订',
                    gz_zhengding_info: '锁定技；当你于回合外使用或打出牌响应其他角色使用的牌时，若这两张牌花色相同，则你回复一点体力。',
                    jinggou3d8: "精彀",
                    jinggou3d8_info: "锁定技；你使用的武器牌结算后，若你的攻击范围为全场最大或最小（或之一），你须对一名角色造成1点伤害。",
                    moyan3d8: "末焱",
                    moyan3d8_info: "准备阶段，你可以亮出牌堆顶的三张牌，令一名角色选择并获得其中至少一张牌；本轮其受到伤害时，若其手牌数不大于X，此伤害+X（X为其此次得到的牌数）。",



                    // 晋
                    gz_xccongjian: '从鉴',
                    gz_xccongjian_info: '一名其他角色成为普通锦囊牌的唯一目标时，若其体力值为全场唯一最多，则你也可以成为此牌的目标。此牌结算结束后，若你受到过渠道为此牌的伤害，则你摸两张牌。',
                    gz_juezhi: '爵制',
                    gz_juezhi_info: '出牌阶段限一次，你可以弃置至少两张牌，然后从牌堆中获得一张点数为X的牌（X=min(13, 这些牌的点数和)）。',
                    gz_chijie: '持节',
                    gz_chijie_info: '每回合限一次。当你成为其他角色使用牌的唯一目标时，你可判定。若结果大于9，则你取消此牌的所有目标。',
                    gz_cuijian: '摧坚',
                    gz_cuijian_info: '出牌阶段限一次，你可以选择一名有手牌的其他角色。若其手牌中有【闪】，则其将所有【闪】和防具牌交给你，然后你交给其等量的牌；若其手牌中没有闪，则你摸一张牌。',
                    gz_rongbei: '戎备',
                    gz_rongbei_info: '主将技，限定技；出牌阶段，你可选择一名有空装备栏的角色。系统为该角色的每个空装备栏选择一张装备牌，然后该角色使用之。',
                    gz_jinglve: '景略',
                    gz_jinglve2: '景略',
                    gz_jinglve3: '景略',
                    gz_jinglve_info: '主将技；出牌阶段限一次，若场上没有与你对应的「死士」牌，则你可以观看一名其他角色的手牌，将其中一张牌标记为「死士」。当其使用对应的实体牌中包含「死士」的牌时，你取消此牌的所有目标。当「死士」牌不因使用而进入弃牌堆，或其回合结束后，若「死士」牌仍在其区域内，则你获得此牌。',
                    gz_daigong: "怠攻",
                    gz_daigong_info: "主将技；每回合限一次。当你受到伤害时，你可以展示所有手牌，然后令伤害来源选择一项：交给你一张与你所有手牌花色均不相同的一张牌，或防止此伤害。",
                    shinan3d8: "酾难",
                    shinan3d8_info: "其他角色使用【酒】、【桃】或【无中生有】时，你可以翻面，成为此牌的额外目标；【酒】对你的加伤效果改为对所有能造成伤害的虚拟牌有效。",
                    // yinling3d8: "吟翎",
                    // yinling3d8_info: "你仅成为过一张牌目标的回合结束阶段，你可重铸场上一张与之同字数的其它牌；若无匹配的牌，你可视为使用一张与之字数和为五的即时牌。",


                    // 神
                    // gz_shen: '神',
                    // gz_shen_info: '锁定技；当你明置此武将时，你的副将的所有技能失效。',
                    gz_lingce: '灵策',
                    gz_lingce_info: '锁定技；当有〖智囊〗或〖定汉①〗记录过的锦囊牌被使用时，若此牌不为转化牌且对应实体牌数量为一，则你摸一张牌。',
                },
            },
            intro: "※《汉国战》 <br/>\
                    ※ 国战模式中添加汉朝势力。 <br/>\
                    ※ 将军争、对决武将无脑（几乎）搬运转移到国战（主要是为了顺带熟悉一下玩的少的武将）。<br/>\
                    ※ 扩充国战武将和牌堆，让国战玩法更多样化，尽量维持各国武将人数均等、强度平衡。<br/>\
                    ※ 思路和写法参考了其他扩展：《国战补充》《阵面对决》《极略三国》《贴吧精品》《晋国战平行时空》等。未经相关作者同意，有侵权可以联系删除。",
            author: "Mcontrite",
            diskURL: "",
            forumURL: "",
            version: "2022.08.10",
        },
        files: {
            "character": [],
            "card": [],
            "skill": []
        }
    }
})