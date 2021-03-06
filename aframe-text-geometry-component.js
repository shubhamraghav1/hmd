!function(e) {
    function t(n) {
        if (o[n])
            return o[n].exports;
        var r = o[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(r.exports, r, r.exports, t),
        r.loaded = !0,
        r.exports
    }
    var o = {};
    return t.m = e,
    t.c = o,
    t.p = "",
    t(0)
}([function(e, t) {
    var o = AFRAME.utils.debug
      , n = o("aframe-text-component:error")
      , r = new THREE.FontLoader;
    AFRAME.registerComponent("text-geometry", {
        schema: {
            bevelEnabled: {
                default: !1
            },
            bevelSize: {
                default: 8,
                min: 0
            },
            bevelThickness: {
                default: 12,
                min: 0
            },
            curveSegments: {
                default: 12,
                min: 0
            },
            font: {
                type: "asset",
                default: "https://rawgit.com/ngokevin/kframe/master/components/text-geometry/lib/helvetiker_regular.typeface.json"
            },
            height: {
                default: .05,
                min: 0
            },
            size: {
                default: .5,
                min: 0
            },
            style: {
                default: "normal",
                oneOf: ["normal", "italics"]
            },
            weight: {
                default: "normal",
                oneOf: ["normal", "bold"]
            },
            value: {
                default: ""
            }
        },
        update: function(e) {
            var t = this.data
              , o = this.el
              , a = o.getOrCreateObject3D("mesh", THREE.Mesh);
            t.font.constructor === String ? r.load(t.font, function(e) {
                var o = AFRAME.utils.clone(t);
                o.font = e,
                a.geometry = new THREE.TextGeometry(t.value,o)
            }) : t.font.constructor === Object ? a.geometry = new THREE.TextGeometry(t.value,t) : n("Must provide `font` (typeface.json) or `fontPath` (string) to text component.")
        }
    })
}
]);
