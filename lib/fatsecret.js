
var fatsecret = {
    variables: {
        rootUrl: 'https://platform.fatsecret.com/js/Default.aspx?pg=',
        splitter: 'fs_0383a03f9b794484a156fa63f07efcdf',
        key: 'b9f4d796964048b293a62e8b2dfc280d',
        appTitle: 'My Daily Fudes',
        screen: 32,
        navOptions: 1,
        // navOptions: 64,
        autoTemplate: true
    },

    setCookie: function (name, value) {
        var date = new Date();
        date.setTime(date.getTime() + (10 * 365 * 24 * 60 * 60 * 1000));
        document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + date.toUTCString() + ';path=/';
    },

    doWrite: function (url, isCss) {
        var h = isCss ? '<link type="text/css" rel="stylesheet"' : '<script type="text/javascript"';
        h += (isCss ? ' href' : ' src') + '="' + url;
        h += isCss ? '"/>' : '"></script>';
        document.write(h);
    },

    start: function () {
        this.doWrite('https://platform.fatsecret.com/js/static/css/all.css', true);
        this.doWrite('https://platform.fatsecret.com/js/static/css/themes/blue.css', true);
        this.doWrite('https://platform.fatsecret.com/js/static/script/final.js');
    }
};

fatsecret.start();
