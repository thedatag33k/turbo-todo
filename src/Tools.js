export function getUserLocale() {
    return navigator.language || navigator.languages[0];
}

export function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export class Color {
    constructor(){}
    static colorOptions = {
        blue:"#0d6efd",
        indigo:"#6610f2",
        purple:"#6f42c1",
        pink:"#d63384",
        red:"#dc3545",
        orange:"#fd7e14",
        yellow:"#ffc107",
        green:"#198754",
        teal:"#20c997",
        cyan:"#0dcaf0",
        charcoal:"#343a40"
    
    }
    static hexToRgb(hex) {
        hex = hex.replace(/^#/, '');
    
        // Convert the hex to RGB
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
    
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    
        return {r:r,g:g,b:b,isLight:yiq>=128}
    }

    static blendColors(hex1, hex2, weight, alpha=1) {
        const c1 = Color.hexToRgb(hex1);
        const c2 = Color.hexToRgb(hex2);
    
        const r = Math.round(c1.r * (1 - weight) + c2.r * weight);
        const b = Math.round(c1.b * (1 - weight) + c2.b * weight);
        const g = Math.round(c1.g * (1 - weight) + c2.g * weight);
    
        // Convert back to hex
        const mixedColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}${Math.round(alpha * 255).toString(16).padStart(2, '0').toUpperCase()}`;
        return mixedColor;
    }
}

export class Calendar {
    constructor() {}
    static now () {
        return Date.now();
    }
    static today () {
        const today = new Date();
        today.setHours(0,0,0,0);
        return today;
    }
    static new (val) {
        return new Date(val);
    }
    static formatLocal(dateInput) {
        const date = Calendar.new(dateInput);
        return date.toLocaleString(getUserLocale(),{dateStyle:"medium", timeStyle:"full"});
    }
    static formatRelativeTime(dateInput) {
        const date = Calendar.new(dateInput);
        const now = new Date();
        const secondsDiff = Math.floor((now - date) / 1000);
        const minutesDiff = Math.floor(secondsDiff / 60);
        const hoursDiff = Math.floor(minutesDiff / 60);
        const daysDiff = Math.floor(hoursDiff / 24);

        const rtf = new Intl.RelativeTimeFormat(getUserLocale(),{numeric:"auto"});

        if (secondsDiff < 60) {
            return rtf.format(-secondsDiff,"second");
        } else if (minutesDiff < 60) {
            return rtf.format(-minutesDiff,"minute");
        } else if (hoursDiff < 24) {
            return rtf.format(-hoursDiff,"hour");
        } else if (daysDiff < 30) {
            return rtf.format(-daysDiff,"day");
        } else {
            return date.toLocaleString(getUserLocale(),{dateStyle:"medium",timeStyle:"short"});
        }

    }
}