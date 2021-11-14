/*
 *  思考ルーチン 0000
 *      - 空応答を返すのみ
 */
"use strict";

const Majiang = require('@kobalab/majiang-core');

module.exports = class Player extends Majiang.Player {

    kaiju(kaiju) {
        super.kaiju(kaiju);
        if (this._callback) this._callback();
    }

    qipai(qipai) {
        super.qipai(qipai);
        if (this._callback) this._callback();
    }

    zimo(zimo, gangzimo) {
        super.zimo(zimo, gangzimo);
        if (! this._callback) return;
        let mianzi;
        if      (this.select_hule(gangzimo))  this._callback({hule: '-'});
        else if (this.select_pingju())        this._callback({pingju: '-'});
        else if (mianzi = this.select_gang()) this._callback({gang: mianzi});
        else this._callback({dapai: this.select_dapai()});
    }

    dapai(dapai) {
        super.dapai(dapai);
        if (! this._callback) return;
        let mianzi;
        if      (this.select_hule(dapai.p))    this._callback({hule: '-'});
        else if (mianzi = this.select_fulou()) this._callback({fulou: mianzi});
        else                                   this._callback();
    }

    fulou(fulou) {
        super.fulou(fulou);
        if (! this._callback) return;
        this._callback({dapai: this.select_dapai()});
    }

    gang(gang) {
        super.gang(gang);
        if (! this._callback) return;
        if      (this.select_hule(gang.m))     this._callback({hule: '-'});
        else                                   this._callback();
    }

    kaigang(kaigang) {
        super.kaigang(kaigang);
    }

    hule(hule) {
        super.hule(hule);
        if (this._callback) this._callback();
    }

    pingju(pingju) {
        super.pingju(pingju);
        if (this._callback) this._callback();
    }

    jieju(paipu) {
        super.jieju(paipu);
        if (this._callback) this._callback();
    }

    select_hule(param) {}
    select_pingju() {}
    select_fulou(p) {}
    select_gang(p)  {}
    select_dapai()  {}
    select_lizhi(p) {}
}
