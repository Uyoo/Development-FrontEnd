let page404 = {
    collage404H1: document.querySelector('.collage-404 h1'),
    colorRange: document.querySelector('.color-range'),
    colorChoice: document.getElementById('color-choice'),
    currentRange: 0,
    utils: {
        hslToRgb: function (h, s, l) {
            s = s / 100;
            l = l / 100;
            let c, x, m, rgb;
            c = (1 - Math.abs(2 * l - 1)) * s;
            x = c * (1 - Math.abs(((h / 60) % 2) - 1));
            m = l - c / 2;
            if (h >= 0 && h < 60) rgb = [c, x, 0];
            if (h >= 60 && h < 120) rgb = [x, c, 0];
            if (h >= 120 && h < 180) rgb = [0, c, x];
            if (h >= 180 && h < 240) rgb = [0, x, c];
            if (h >= 240 && h < 300) rgb = [x, 0, c];
            if (h >= 300 && h <= 360) rgb = [c, 0, x];

            return rgb.map(function (v) {
                return 255 * (v + m) | 0;
            });
        },
        rgbToHex: function (r, g, b) {
            let rgb = b | (g << 8) | (r << 16);
            return '#' + (0x1000000 + rgb).toString(16).slice(1);
        },
        hslToHex: function (h, s, l) {
            let rgb = this.hslToRgb(h, s, l);
            return this.rgbToHex(rgb[0], rgb[1], rgb[2]);
        },
        hueFromRangeValue: function (val) {
            return ((val / 100) * 360).toFixed(0);
        },
        inputSupported: function (type) {
            var x = document.createElement("input");
            x.setAttribute("type", type);
            return x.type === type;
        },
    },
    syncColors: function () {
        let hue = this.utils.hueFromRangeValue(this.currentRange);
        if (this.utils.inputSupported("range")) {
            hue = this.utils.hueFromRangeValue(this.colorRange.value)
        }
        let hsl = "hsl(" + hue + ", 100%, 50%)";
        let hex = this.utils.hslToHex(hue, 100, 50);
        this.colorRange.style.color = hsl;
        this.colorChoice.style.color = hsl;
        this.colorChoice.innerHTML = hex;
        this.collage404H1.style.color = hex;
        return hex;
    },

    openContactUsModal: function(){
        this.modal.classList.remove("hidden");
    },
    closeContactUs: function(){
        this.modal.classList.add("hidden");
    },
    init: function () {
        this.currentRange = Math.floor(100 * Math.random());
        this.colorRange.value = this.currentRange;
        let me = this.syncColors();
        this.colorRange.addEventListener('input', this.syncColors.bind(this));

        this.overlay.addEventListener("click",this.closeContactUs);
        this.closeBtn.addEventListener("click",this.closeContactUs);
        this.openContactUs.addEventListener("click",this.openContactUsModal);
    }
}
page404.init();

