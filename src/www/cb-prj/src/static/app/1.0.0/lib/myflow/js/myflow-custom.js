function RandomString(length){
  console.log('running random string')
  var str = "",
    arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  for(var i=0; i<length; i++){
    pos = Math.round(Math.random() * (arr.length-1));
    str += arr[pos];
  }
  return str;
}

(function (b) {
  var a = {}, flow, rapheal, qqq, ggg;
  a.config = {
    canvas: null,
    editable: true,
    lineHeight: 15,
    basePath: "",
    rect: {
      attr: {
        x: 10,
        y: 10,
        width: 100,
        height: 50,
        r: 5,
        fill: "90-#fff-#C0C0C0",
        stroke: "#000",
        "stroke-width": 1
      },
      showType: "image&text",
      type: "state",
      name: {text: "state", "font-style": "italic"},
      text: {text: "状态", "font-size": 13},
      margin: 5,
      props: [],
      img: {}
    },
    path: {
      attr: {
        path: {path: "M10 10L100 100", stroke: "#7FBCEF", fill: "none", "stroke-width": 2},
        arrow: {path: "M10 10L10 10", stroke: "#7FBCEF", fill: "#7FBCEF", "stroke-width": 2, radius: 4},
        fromDot: {width: 5, height: 5, stroke: "#fff", fill: "#000", cursor: "move", "stroke-width": 2},
        toDot: {width: 5, height: 5, stroke: "#fff", fill: "#000", cursor: "move", "stroke-width": 2},
        bigDot: {width: 5, height: 5, stroke: "#fff", fill: "#000", cursor: "move", "stroke-width": 2},
        smallDot: {width: 5, height: 5, stroke: "#fff", fill: "#000", cursor: "move", "stroke-width": 3}
      }, text: {text: "TO {to}", cursor: "move", background: "#000"},
      textPos: {x: 0, y: -10},
      props: {

      }
    },
    tools: {
      attr: {right: 10, top: 10},
      pointer: {},
      path: {},
      states: {
        onclick: function (c) {
          // console.log(arguments)
        }
      },
      save: {
        onclick: function (c) {
          alert('default:\n' + c)
        }
      }
    },
    props: {attr: {top: 10, right: 30}, props: {}},
    restore: "",
    activeRects: {rects: [], rectAttr: {stroke: "#ff0000", "stroke-width": 2}},
    historyRects: {rects: [], pathAttr: {path: {stroke: "#00ff00"}, arrow: {stroke: "#00ff00", fill: "#00ff00"}}}
  };
  a.util = {
    isLine: function (g, f, e) {
      var d, c;
      if ((g.x - e.x) == 0) {
        d = 1
      } else {
        d = (g.y - e.y) / (g.x - e.x)
      }
      c = (f.x - e.x) * d + e.y;
      if ((f.y - c) < 10 && (f.y - c) > -10) {
        f.y = c;
        return true
      }
      return false
    }, center: function (d, c) {
      return {x: (d.x - c.x) / 2 + c.x, y: (d.y - c.y) / 2 + c.y}
    }, nextId: (function () {
      var c = 0;
      return function () {
        return ++c
      }
    })(), connPoint: function (j, d) {
      var c = d, e = {x: j.x + j.width / 2, y: j.y + j.height / 2};
      var l = (e.y - c.y) / (e.x - c.x);
      l = isNaN(l) ? 0 : l;
      var k = j.height / j.width;
      var h = c.y < e.y ? -1 : 1, f = c.x < e.x ? -1 : 1, g, i;
      if (Math.abs(l) > k && h == -1) {
        g = e.y - j.height / 2;
        i = e.x + h * j.height / 2 / l
      } else {
        if (Math.abs(l) > k && h == 1) {
          g = e.y + j.height / 2;
          i = e.x + h * j.height / 2 / l
        } else {
          if (Math.abs(l) < k && f == -1) {
            g = e.y + f * j.width / 2 * l;
            i = e.x - j.width / 2
          } else {
            if (Math.abs(l) < k && f == 1) {
              g = e.y + j.width / 2 * l;
              i = e.x + j.width / 2
            }
          }
        }
      }
      return {x: i, y: g}
    }, arrow: function (l, k, d) {
      var g = Math.atan2(l.y - k.y, k.x - l.x) * (180 / Math.PI);
      var h = k.x - d * Math.cos(g * (Math.PI / 180));
      var f = k.y + d * Math.sin(g * (Math.PI / 180));
      var e = h + d * Math.cos((g + 120) * (Math.PI / 180));
      var j = f - d * Math.sin((g + 120) * (Math.PI / 180));
      var c = h + d * Math.cos((g + 240) * (Math.PI / 180));
      var i = f - d * Math.sin((g + 240) * (Math.PI / 180));
      return [k, {x: e, y: j}, {x: c, y: i}]
    }
  };
  a.rect = function (p, m) {
    // console.log('value changed: drag new node')
    var u = this, g = "rect" + a.util.nextId(), E = b.extend(true, {}, a.config.rect, p), C = m, t, e, n, f, x, v;
    // var nodeSet = C.set()
    t = C.rect(E.attr.x, E.attr.y, E.attr.width, E.attr.height, E.attr.r).hide().attr(E.attr);
    e = C.image(a.config.basePath + E.img.src, E.attr.x + E.img.width / 2, E.attr.y + (E.attr.height - E.img.height) / 2, E.img.width, E.img.height).hide();
    n = C.text(E.attr.x + E.img.width + (E.attr.width - E.img.width) / 2, E.attr.y + a.config.lineHeight / 2, E.name.text).hide().attr(E.name);
    f = C.text(E.attr.x + E.img.width + (E.attr.width - E.img.width) / 2, E.attr.y + (E.attr.height - a.config.lineHeight) / 2 + a.config.lineHeight, E.text.text).hide().attr(E.text);
    // nodeSet.push(t, n)
    t.drag(function (r, o) {
      // console.log('drag t:'+r+' drag o:'+o)
      A(r, o)
    }, function () {
      z()
    }, function () {
      l()
    });
    e.drag(function (r, o) {
      A(r, o)
    }, function () {
      z()
    }, function () {
      l()
    });
    n.drag(function (r, o) {
      A(r, o)
    }, function () {
      z()
    }, function () {
      l()
    });
    f.drag(function (r, o) {
      A(r, o)
    }, function () {
      z()
    }, function () {
      l()
    });
    var A = function (F, r) {
      if (!a.config.editable) {
        return
      }
      var o = (x + F);
      var G = (v + r);
      q.x = o - E.margin;
      q.y = G - E.margin;
      // console.log('drag manually x:'+F+' y:'+r)
      B()
    };
    var z = function () {
      x = t.attr("x");
      v = t.attr("y");
      t.attr({opacity: 0.5});
      e.attr({opacity: 0.5});
      f.attr({opacity: 0.5})
      // b([t.node, f.node]).unbind('mousemove')
    };
    var l = function () {
      t.attr({opacity: 1});
      e.attr({opacity: 1});
      f.attr({opacity: 1});
      if(x!=t.attr("x")) {//Determine if it truly moving
        // console.log('value changed: moved');
        // var r = b(C).data("currNode");
        // console.log('r is:')
        // console.log(r)
        // console.log('u is:')
        // console.log(u)
        // console.log(u.getBBox())
        // a.history.addHistory({
        //     dragType: 'rect',
        //     dragObj: A,
        //     dragInfo:
        //     {bx: x, by: v, x: t.attr('x'), y: t.attr('y')}
        // })
        // console.log('save obj:')
        // console.log(u.toJson())
        // t.animate({x: x, y:v},1000,'ease-in-out')
        // e.animate({x: x, y: v},1000,'ease-in-out')
        // n.animate({x: x, y: v},1000,'ease-in-out')
        // f.animate({x: x, y: v},1000,'ease-in-out')
        // nodeSet.attr({x: x, y: v}, 1000, 'bounce')
      }
    };
    // 改变大小的边框
    var s, i = {}, h = 5, q = {
      x: E.attr.x - E.margin,
      y: E.attr.y - E.margin,
      width: E.attr.width + E.margin * 2,
      height: E.attr.height + E.margin * 2
    };
    s = C.path("M0 0L1 1").hide();
    // var resizeEnd = function () {
    //     console.log('resizeEnd...')
    // }
    i.t = C.rect(0, 0, h, h).attr({fill: "#000", stroke: "#fff", cursor: "s-resize"}).hide().drag(function (r, o) {
      D(r, o, "t")
    }, function () {
      k(this.attr("x") + h / 2, this.attr("y") + h / 2, "t")
    }, function () {
      // resizeEnd()
    });
    i.lt = C.rect(0, 0, h, h).attr({
      fill: "#000",
      stroke: "#fff",
      cursor: "nw-resize"
    }).hide().drag(function (r, o) {
      D(r, o, "lt")
    }, function () {
      k(this.attr("x") + h / 2, this.attr("y") + h / 2, "lt")
    }, function () {
      // resizeEnd()
    });
    i.l = C.rect(0, 0, h, h).attr({fill: "#000", stroke: "#fff", cursor: "w-resize"}).hide().drag(function (r, o) {
      D(r, o, "l")
    }, function () {
      k(this.attr("x") + h / 2, this.attr("y") + h / 2, "l")
    }, function () {
      // resizeEnd()
    });
    i.lb = C.rect(0, 0, h, h).attr({
      fill: "#000",
      stroke: "#fff",
      cursor: "sw-resize"
    }).hide().drag(function (r, o) {
      D(r, o, "lb")
    }, function () {
      k(this.attr("x") + h / 2, this.attr("y") + h / 2, "lb")
    }, function () {
      // resizeEnd()
    });
    i.b = C.rect(0, 0, h, h).attr({fill: "#000", stroke: "#fff", cursor: "s-resize"}).hide().drag(function (r, o) {
      D(r, o, "b")
    }, function () {
      k(this.attr("x") + h / 2, this.attr("y") + h / 2, "b")
    }, function () {
      // resizeEnd()
    });
    i.rb = C.rect(0, 0, h, h).attr({
      fill: "#000",
      stroke: "#fff",
      cursor: "se-resize"
    }).hide().drag(function (r, o) {
      D(r, o, "rb")
    }, function () {
      k(this.attr("x") + h / 2, this.attr("y") + h / 2, "rb")
    }, function () {
      // resizeEnd()
    });
    i.r = C.rect(0, 0, h, h).attr({fill: "#000", stroke: "#fff", cursor: "w-resize"}).hide().drag(function (r, o) {
      D(r, o, "r")
    }, function () {
      k(this.attr("x") + h / 2, this.attr("y") + h / 2, "r")
    }, function () {
      // resizeEnd()
    });
    i.rt = C.rect(0, 0, h, h).attr({
      fill: "#000",
      stroke: "#fff",
      cursor: "ne-resize"
    }).hide().drag(function (r, o) {
      D(r, o, "rt")
    }, function () {
      k(this.attr("x") + h / 2, this.attr("y") + h / 2, "rt")
    }, function () {
      // resizeEnd()
    });
    var D = function (F, r, G) {
      if (!a.config.editable) {
        return
      }
      var o = _bx + F, H = _by + r;
      switch (G) {
        case "t":
          q.height += q.y - H;
          q.y = H;
          break;
        case "lt":
          q.width += q.x - o;
          q.height += q.y - H;
          q.x = o;
          q.y = H;
          break;
        case "l":
          q.width += q.x - o;
          q.x = o;
          break;
        case "lb":
          q.height = H - q.y;
          q.width += q.x - o;
          q.x = o;
          break;
        case "b":
          q.height = H - q.y;
          break;
        case "rb":
          q.height = H - q.y;
          q.width = o - q.x;
          break;
        case "r":
          q.width = o - q.x;
          break;
        case "rt":
          q.width = o - q.x;
          q.height += q.y - H;
          q.y = H;
          break
      }
      B()
    };
    var k = function (r, o, F) {
      _bx = r;
      _by = o
    };
    b([t.node, f.node, n.node, e.node]).bind("click", function () { //show edit area when click
      if (!a.config.editable) {
        return
      }
      w();
      var o = b(C).data("mod");
      switch (o) {
        case "pointer":
          break;
        case "path":
          var r = b(C).data("currNode");
          if (r && r.getId() != g && r.getId().substring(0, 4) == "rect") {
            console.log('r is :')
            b(C).trigger("addpath", [r, u])
          }
          break
      }
      // console.log('point clicked')
      b(C).trigger("click", u);
      b(C).data("currNode", u);
      return false
    });
    //加入这个会导致连接线不能正常使用
    // b([t.node, f.node]).bind({
    //     mousemove: function (event) {
    //         b(C).data("currNode", u);
    //         mouseX = event.clientX
    //         mouseY = event.clientY
    //         b(C).trigger("rectEnter");
    //         // console.log('in...')
    //     },
    //     mouseleave: function () {
    //         // console.log('out...');
    //         b(C).trigger("rectOut")
    //     }
    // })
    var j = function (o, r) {
      if (!a.config.editable) {
        return
      }
      if (r.getId() == g) {
        console.log('node clicked')
        $('#flowAttr a[href="#nodeManagement"]').tab('show');
        b(C).trigger("showprops", [E.props, r, 'node'])
      } else {
        d()
      }
    };
    // console.log(b(C))
    b(C).bind("click", j);
    var c = function (o, F, r) {
      if (r.getId() == g) {
        f.attr({text: F})
      }
    };
    b(C).bind("textchange", c);
    function y() {
      return "M" + q.x + " " + q.y + "L" + q.x + " " + (q.y + q.height) + "L" + (q.x + q.width) + " " + (q.y + q.height) + "L" + (q.x + q.width) + " " + q.y + "L" + q.x + " " + q.y
    }

    function w() {
      s.show();
      for (var o in i) {
        i[o].show()
      }
    }

    function d() {
      s.hide();
      for (var o in i) {
        i[o].hide()
      }
    }

    function B() {
      // console.log('yeah adjusting')
      var F = q.x + E.margin, r = q.y + E.margin, G = q.width - E.margin * 2, o = q.height - E.margin * 2;
      t.attr({x: F, y: r, width: G, height: o});
      switch (E.showType) {
        case "image":
          e.attr({x: F + (G - E.img.width) / 2, y: r + (o - E.img.height) / 2}).show();
          break;
        case "text":
          t.show();
          f.attr({x: F + G / 2, y: r + o / 2}).show();
          break;
        case "image&text":
          t.show();
          n.attr({x: F + E.img.width + (G - E.img.width) / 2, y: r + a.config.lineHeight / 2}).show();
          f.attr({
            x: F + E.img.width + (G - E.img.width) / 2,
            y: r + (o - a.config.lineHeight) / 2 + a.config.lineHeight
          }).show();
          e.attr({x: F + E.img.width / 2, y: r + (o - E.img.height) / 2}).show();
          break
      }
      i.t.attr({x: q.x + q.width / 2 - h / 2, y: q.y - h / 2});
      i.lt.attr({x: q.x - h / 2, y: q.y - h / 2});
      i.l.attr({x: q.x - h / 2, y: q.y - h / 2 + q.height / 2});
      i.lb.attr({x: q.x - h / 2, y: q.y - h / 2 + q.height});
      i.b.attr({x: q.x - h / 2 + q.width / 2, y: q.y - h / 2 + q.height});
      i.rb.attr({x: q.x - h / 2 + q.width, y: q.y - h / 2 + q.height});
      i.r.attr({x: q.x - h / 2 + q.width, y: q.y - h / 2 + q.height / 2});
      i.rt.attr({x: q.x - h / 2 + q.width, y: q.y - h / 2});
      s.attr({path: y()});
      b(C).trigger("rectresize", u)
    }

    // this.dragA = A;
    this.toJson = function () {
      var r = "{type:'" + E.type + "',text:{text:'" + f.attr("text") + "'}, attr:{ x:" + Math.round(t.attr("x")) + ", y:" + Math.round(t.attr("y")) + ", width:" + Math.round(t.attr("width")) + ", height:" + Math.round(t.attr("height")) + "}, props:{";
      for (var o in E.props) {
        r += o + ":{value:'" + E.props[o].value + "'},"
      }
      if (r.substring(r.length - 1, r.length) == ",") {
        r = r.substring(0, r.length - 1)
      }
      r += "}}";
      return r
    };
    this.getDataId = function () {
      var data;
      // console.log('get props----------')
      // console.log(E.props)
      if(E.props['temp1']) {
        data = E.props['temp1'].value;
      }else if(E.props['nodeId']){
        data = E.props['nodeId'].value
      }else if(E.props['exclusiveId']){
        data = E.props['exclusiveId'].value
      }else if(E.props['parallelId']){
        data = E.props['parallelId'].value
      } else if(E.props['inclusiveId']) {
        data = E.props['inclusiveId'].value
      } else if(E.props['eventId']) {
        data = E.props['eventId'].value
      } else if(E.props['eventGatewayId']) {
        data = E.props['eventGatewayId'].value
      }
      return data;
    };
    this.restore = function (o) {
      var r = o;
      E = b.extend(true, E, o);
      f.attr({text: r.text.text});
      B()
    };
    this.getBBox = function () {
      return q
    };
    this.getId = function () {
      return g
    };
    this.remove = function () {
      t.remove();
      f.remove();
      n.remove();
      e.remove();
      s.remove();
      for (var o in i) {
        i[o].remove()
      }
      console.log('value changed: remove node')
    };
    this.text = function () {
      return f.attr("text")
    };
    this.attr = function (o) {
      console.log(t);
      if (o) {
        t.attr(o)
      }
    };
    B()
  };
  a.pops = function (m) {
    var x = 100, y = 100,rectX = 100, rectY = 40;
    var popSet = m.set();
    var popRect = m.rect(x, y, rectX, rectY);
    popRect.attr({
      fill: "#fff",
      stroke: "#000",
      "stroke-width": 1,
      "stroke-opacity": 0.7,
      r: 5
    });
    popSet.push(popRect);
    var popText = m.text(x+rectX/2, y+rectY/2, "yea");
    popSet.push(popText).hide();
    return popSet;
  };
  a.path = function (q, n, u, e, prop) {
    var v = this, z = n, B = b.extend(true, {}, a.config.path, prop), i, t, f, h = B.textPos, y, w, k = u, s = e, g = "path" + a.util.nextId(), x;

    function p(G, H, D, L) {
      var F = this, M = G, r, o = D, O = L, K, I, N = H;
      switch (M) {
        case "from":
          r = z.rect(H.x - B.attr.fromDot.width / 2, H.y - B.attr.fromDot.height / 2, B.attr.fromDot.width, B.attr.fromDot.height).attr(B.attr.fromDot);
          break;
        case "big":
          r = z.rect(H.xl - B.attr.bigDot.width / 2, H.y - B.attr.bigDot.height / 2, B.attr.bigDot.width, B.attr.bigDot.height).attr(B.attr.bigDot);
          break;
        case "small":
          r = z.rect(H.x - B.attr.smallDot.width / 2, H.y - B.attr.smallDot.height / 2, B.attr.smallDot.width, B.attr.smallDot.height).attr(B.attr.smallDot);
          break;
        case "to":
          r = z.rect(H.x - B.attr.toDot.width / 2, H.y - B.attr.toDot.height / 2, B.attr.toDot.width, B.attr.toDot.height).attr(B.attr.toDot);
          break
      }
      if (r && (M == "big" || M == "small")) {
        r.drag(function (Q, P) {
          C(Q, P)
        }, function () {
          J()
        }, function () {
          E()
        });
        var C = function (R, Q) {
          var P = (K + R), S = (I + Q);
          F.moveTo(P, S)
        };
        var J = function () {
          if (M == "big") {
            K = r.attr("x") + B.attr.bigDot.width / 2;
            I = r.attr("y") + B.attr.bigDot.height / 2
          }
          if (M == "small") {
            K = r.attr("x") + B.attr.smallDot.width / 2;
            I = r.attr("y") + B.attr.smallDot.height / 2
          }
        };
        var E = function () {
        }
      }
      this.type = function (P) {
        if (P) {
          M = P
        } else {
          return M
        }
      };
      this.node = function (P) {
        if (P) {
          r = P
        } else {
          return r
        }
      };
      this.left = function (P) {
        if (P) {
          o = P
        } else {
          return o
        }
      };
      this.right = function (P) {
        if (P) {
          O = P
        } else {
          return O
        }
      };
      this.remove = function () {
        o = null;
        O = null;
        r.remove()
      };
      this.pos = function (P) {
        if (P) {
          N = P;
          r.attr({x: N.x - r.attr("width") / 2, y: N.y - r.attr("height") / 2});
          return this
        } else {
          return N
        }
      };
      this.moveTo = function (Q, T) {
        this.pos({x: Q, y: T});
        switch (M) {
          case "from":
            if (O && O.right() && O.right().type() == "to") {
              O.right().pos(a.util.connPoint(s.getBBox(), N))
            }
            if (O && O.right()) {
              O.pos(a.util.center(N, O.right().pos()))
            }
            break;
          case "big":
            if (O && O.right() && O.right().type() == "to") {
              O.right().pos(a.util.connPoint(s.getBBox(), N))
            }
            if (o && o.left() && o.left().type() == "from") {
              o.left().pos(a.util.connPoint(k.getBBox(), N))
            }
            if (O && O.right()) {
              O.pos(a.util.center(N, O.right().pos()))
            }
            if (o && o.left()) {
              o.pos(a.util.center(N, o.left().pos()))
            }
            var S = {x: N.x, y: N.y};
            if (a.util.isLine(o.left().pos(), S, O.right().pos())) {
              M = "small";
              r.attr(B.attr.smallDot);
              this.pos(S);
              var P = o;
              o.left().right(o.right());
              o = o.left();
              P.remove();
              var R = O;
              O.right().left(O.left());
              O = O.right();
              R.remove()
            }
            break;
          case "small":
            if (o && O && !a.util.isLine(o.pos(), {x: N.x, y: N.y}, O.pos())) {
              M = "big";
              r.attr(B.attr.bigDot);
              var P = new p("small", a.util.center(o.pos(), N), o, o.right());
              o.right(P);
              o = P;
              var R = new p("small", a.util.center(O.pos(), N), O.left(), O);
              O.left(R);
              O = R
            }
            break;
          case "to":
            if (o && o.left() && o.left().type() == "from") {
              o.left().pos(a.util.connPoint(k.getBBox(), N))
            }
            if (o && o.left()) {
              o.pos(a.util.center(N, o.left().pos()))
            }
            break
        }
        m()
      }
    }

    function j() {
      // console.log('value changed: connect point')
      var D, C, E = k.getBBox(), F = s.getBBox(), r, o;
      r = a.util.connPoint(E, {x: F.x + F.width / 2, y: F.y + F.height / 2});
      o = a.util.connPoint(F, r);
      D = new p("from", r, null, new p("small", {x: (r.x + o.x) / 2, y: (r.y + o.y) / 2}));
      D.right().left(D);
      C = new p("to", o, D.right(), null);
      D.right().right(C);
      this.toPathString = function () {
        if (!D) {
          return ""
        }
        var J = D, I = "M" + J.pos().x + " " + J.pos().y, H = "";
        while (J.right()) {
          J = J.right();
          I += "L" + J.pos().x + " " + J.pos().y
        }
        var G = a.util.arrow(J.left().pos(), J.pos(), B.attr.arrow.radius);
        H = "M" + G[0].x + " " + G[0].y + "L" + G[1].x + " " + G[1].y + "L" + G[2].x + " " + G[2].y + "z";
        return [I, H]
      };
      this.toJson = function () {
        var G = "[", H = D;
        while (H) {
          if (H.type() == "big" || H.type() == "from" || H.type() == "to") {
            G += "{x:" + Math.round(H.pos().x) + ",y:" + Math.round(H.pos().y) + "},"
          }
          H = H.right()
        }
        if (G.substring(G.length - 1, G.length) == ",") {
          G = G.substring(0, G.length - 1)
        }
        G += "]";
        return G
      };
      this.restore = function (H) {
        var I = H, J = D.right();
        for (var G = 0; G < I.length; G++) {
          J.moveTo(I[G].x, I[G].y);
          J.moveTo(I[G].x, I[G].y);
          J = J.right()
        }
        this.hide()
      };
      this.fromDot = function () {
        return D
      };
      this.toDot = function () {
        return C
      };
      this.midDot = function () {
        var H = D.right(), G = D.right().right();
        while (G.right() && G.right().right()) {
          G = G.right().right();
          H = H.right()
        }
        return H
      };
      this.show = function () {
        var G = D;
        while (G) {
          G.node().show();
          G = G.right()
        }
      };
      this.hide = function () {
        var G = D;
        while (G) {
          G.node().hide();
          G = G.right()
        }
      };
      this.remove = function () {
        var G = D;
        while (G) {
          if (G.right()) {
            G = G.right();
            G.left().remove()
          } else {
            G.remove();
            G = null
          }
        }
      }
    }

    B = b.extend(true, B, q);
    i = z.path(B.attr.path.path).attr(B.attr.path);
    t = z.path(B.attr.arrow.path).attr(B.attr.arrow);
    x = new j();
    x.hide();

    f = z.text(0, 0, B.text.text).attr(B.text).attr({text: B.text.text.replace("{from}", k.text()).replace("{to}", s.text())});
    f.drag(function (r, o) {
      if (!a.config.editable) {
        return
      }
      f.attr({x: y + r, y: w + o})
    }, function () {
      y = f.attr("x");
      w = f.attr("y")
    }, function () {
      var o = x.midDot().pos();
      h = {x: f.attr("x") - o.x, y: f.attr("y") - o.y}
      // a.history.addHistory({dragType: 'text', dragObj: f, beforeDrag: {x: y, y: w}})
    });
    m();
    b([i.node, t.node]).bind("click", function () {
      if (!a.config.editable) {
        return
      }
      b(z).trigger("click", v);
      b(z).data("currNode", v);
      return false
    });
    var l = function (r, C) {
      if (!a.config.editable) {
        return
      }
      if (C && C.getId() == g) {
        console.log('selected arrow')
        x.show();
        $('#flowAttr a[href="#route"]').tab('show');
        
        console.log('B.props is:-----------')
        console.log(B.props)
        b(z).trigger("showprops", [B.props, v, 'line'])
      } else {
        x.hide()
      }
      var o = b(z).data("mod");
      switch (o) {
        case "pointer":
          break;
        case "path":
          break
      }
    };
    b(z).bind("click", l);
    var A = function (o, r) {
      if (!a.config.editable) {
        return
      }
      if (r && (r.getId() == k.getId() || r.getId() == s.getId())) {
        b(z).trigger("removepath", v)
      }
    };
    b(z).bind("removerect", A);
    var d = function (C, D) {
      if (!a.config.editable) {
        return
      }
      if (k && k.getId() == D.getId()) {
        var o;
        if (x.fromDot().right().right().type() == "to") {
          o = {x: s.getBBox().x + s.getBBox().width / 2, y: s.getBBox().y + s.getBBox().height / 2}
        } else {
          o = x.fromDot().right().right().pos()
        }
        var r = a.util.connPoint(k.getBBox(), o);
        x.fromDot().moveTo(r.x, r.y);
        m()
      }
      if (s && s.getId() == D.getId()) {
        var o;
        if (x.toDot().left().left().type() == "from") {
          o = {x: k.getBBox().x + k.getBBox().width / 2, y: k.getBBox().y + k.getBBox().height / 2}
        } else {
          o = x.toDot().left().left().pos()
        }
        var r = a.util.connPoint(s.getBBox(), o);
        x.toDot().moveTo(r.x, r.y);
        m()
      }
    };
    b(z).bind("rectresize", d);
    var c = function (r, o, C) {
      if (C.getId() == g) {
        f.attr({text: o})
      }
    };
    b(z).bind("textchange", c);
    this.from = function () {
      return k
    };
    this.to = function () {
      return s
    };
    this.toJson = function () {
      var r = "{from:'" + k.getId() + "',to:'" + s.getId() + "', dots:" + x.toJson() + ",text:{text:'" + f.attr("text") + "'},textPos:{x:" + Math.round(h.x) + ",y:" + Math.round(h.y) + "}, props:{";
      for (var o in B.props) {
        r += o + ":{value:'" + B.props[o].value + "'},"
      }
      if (r.substring(r.length - 1, r.length) == ",") {
        r = r.substring(0, r.length - 1)
      }
      r += "}}";
      return r
    };
    this.restore = function (o) {
      var r = o;
      B = b.extend(true, B, o);
      x.restore(r.dots)
    };
    this.remove = function () {
      x.remove();
      i.remove();
      t.remove();
      f.remove();
      try {
        b(z).unbind("click", l)
      } catch (o) {
      }
      try {
        b(z).unbind("removerect", A)
      } catch (o) {
      }
      try {
        b(z).unbind("rectresize", d)
      } catch (o) {
      }
      try {
        b(z).unbind("textchange", c)
      } catch (o) {
      }
    };
    function m() {
      var r = x.toPathString(), o = x.midDot().pos();
      i.attr({path: r[0]});
      t.attr({path: r[1]});
      f.attr({x: o.x + h.x, y: o.y + h.y})
    }

    this.getId = function () {
      return g
    };
    this.sourceToTarget = function () {
      return {source: k.getDataId(), target: s.getDataId()}
    };
    this.text = function () {
      return f.attr("text")
    };
    this.attr = function (o) {
      if (o && o.path) {
        i.attr(o.path)
      }
      if (o && o.arrow) {
        t.attr(o.arrow)
      }
    }
  };
  a.props = function (h, f) {
    var j = this, c = b("#nodeManagement,#route").bind("click", function () {
      return false
    }), g = f, i;
    var d = function (n, m, o, t, type) {
      var e
      switch (t) {
        case 'doc':
          e = $('#flowForm');
          break;
        case 'node':
          e = $('#nodeForm');
          break;
        case 'line':
          e = $('#pathForm');
          break;
      }
      if (i && i.getId() == o.getId()) {
        return
      }
      i = o;
      if (!type || type != 'init') {
        b(e).find(".editor").each(function () {
          var k = b(this).data("editor");
          if (k) {
            k.destroy()
          }
        });
      }
      e.empty();

      for (var l in m) {
        // console.log(m[l].label)
        e.append(
          '<div class="form-group">'+
            '<label class="col-md-4 control-label">'+ m[l].label +'</label>'+
            '<div class="col-md-8">'+
              '<div class="editor" id="p'+l+'"></div>'+
              // '<input type="text" class="form-control"> ' +
            '</div>'+
          '</div>'
        );
        // e.append("<tr><th>" + m[l].label + '</th><td><div id="p' + l + '" class="editor"></div></td></tr>');
        if (m[l].editor) {
          // console.log(m)
          // console.log('key is:'+l)
          m[l].editor().init(m, l, "p" + l, o, g)
        }
      }
      $('select').trigger('change');
      // e.append('<tr id="myflowDelTR"><th>删除</th><td><input type="button" value="删除" onclick="if(confirm(\'确认删除？！\'))jQuery(document).trigger(\'keydown\',true);"/></td></tr>');
    };
    b(g).unbind("showprops").bind("showprops", d);
  };
  a.editors = {
    textEditor: function () {
      var d, e, c, g, f;
      this.init = function (i, h, m, l, j) {
        d = i;
        e = h;
        c = m;
        g = l;
        f = j;
        b('<input class="form-control"/>').val(g.text()).change(function () {
          i[e].value = b(this).val();
          b(f).trigger("textchange", [b(this).val(), g])
        }).appendTo("#" + c);
        b("#" + c).data("editor", this)
      };
      this.destroy = function () {
        b("#" + c + " input").each(function () {
          d[e].value = b(this).val();
          b(f).trigger("textchange", [b(this).val(), g])
        })
      }
    }
  };
  var histories = [],historyIndex, IsHistoryFlag = true;

  a.reload = function(x, r) {
    var y = a.config['canvas'];
    b('#flowChart').unbind('keydown');
    b('#flowChart').unbind('click');
    a._init(x, r, y, qqq, ggg);
  };
  a.init = function (x, r) {
    var v = 5000, e = 7000, y = Raphael(x, v , e ), q = {}, g = {};

    a.config['canvas'] = y;
    rapheal = y;

    flow = x;
    qqq = q;
    ggg = g;

    var w = function (c, i) {
      if (!a.config.editable) {
        return
      }
      if (i.getId().substring(0, 4) == "rect") {
        // q[i.getId()] = null;
        delete q[i.getId()];
        i.remove()
      } else {
        if (i.getId().substring(0, 4) == "path") {
          delete g[i.getId()];
          i.remove()
        }
      }
    };
    b(y).bind("removepath", w);
    b(y).bind("removerect", w);
    b(y).bind("addrect", function (j, c, k) {
      // debugger;
      // console.log('issssssssssssss')
      // console.log(a.config.tools.states[c].props)
      switch (c) {
        case 'start':
          a.config.tools.states[c].props.temp1.value = RandomString(6);
          break;
        case 'end':
          a.config.tools.states[c].props.temp1.value = RandomString(6);
          break;
        case 'task':
          a.config.tools.states[c].props.nodeId.value = RandomString(6);
          break;
        case 'exclusive_gateway':
          a.config.tools.states[c].props.exclusiveId.value = RandomString(6);
          break;
        case 'parallel_gateway':
          a.config.tools.states[c].props.parallelId.value = RandomString(6);
          break;
        case 'inclusive_gateway':
          a.config.tools.states[c].props.inclusiveId.value = RandomString(6);
          break;
        case 'eventbased_gateway':
          a.config.tools.states[c].props.eventGatewayId.value = RandomString(6);
          break;
        case 'intermediate_timer_event':
          a.config.tools.states[c].props.eventId.value = RandomString(6);
          break;
        case 'intermediate_signal_event':
          a.config.tools.states[c].props.eventId.value = RandomString(6);
          break;
      }
      //update random string in unique id. current statement maybe cause repeat id
      var i = new a.rect(b.extend(true, {}, a.config.tools.states[c], k), y);
      q[i.getId()] = i
    });
    var f = function (i, k, j) {
      // debugger;
      a.config.path.props.routeId.value = RandomString(6);
      var c = new a.path({}, y, k, j, a.config.path);
      g[c.getId()] = c
    };
    b(y).bind("addpath", f);
    b(y).data("mod", "point");

    a._init(x, r, y, q, g);
  };

  a._init = function (x, r, y, q, g) {
    
    b.extend(true, a.config, r);
    var ss = b.extend(true, a.config.props, r.restore.props);
    
    b(document).keydown(function (i, byButton) {
      if (!a.config.editable) {
        return
      }
      if (i.keyCode == 46 || byButton) {
        var j = b(y).data("currNode");
        // console.log('curNode')
        // console.log(j)
        if (j) {
          if (j.getId().substring(0, 4) == "rect") {
            b(y).trigger("removerect", j)
          } else {
            if (j.getId().substring(0, 4) == "path") {
              b(y).trigger("removepath", j)
            }
          }
          b(y).removeData("currNode")
        }
      }
    });

    b(y).trigger("showprops", [ss.props, {
      getId: function () {
        console.log('yeahh..')
        return r.restore.flowId
      }
    }, 'doc', 'init']);

    b('#flowChart').click(function () {
      b(y).data("currNode", null);
      b(y).trigger("click", {
        getId: function () {
          return "00000000"
        }
      });
      // console.log('doc clicked...')
      // console.log(ss.props.props)
      $('#flowAttr a[href="#flow"]').tab('show');
      b(y).trigger("showprops", [ss.props, {
        getId: function () {
          console.log('yeahh..')
          return r.restore.flowId
        }
      }, 'doc']);
    });
    if (a.config.editable) {
    }
    if (r.restore) {
      var B = r.restore;
      var z = {};
      if (B.states) {
        for (var s in B.states) {//draw node
          // console.log('states1: ')
          // console.log(a.config.tools.states[B.states[s].type])
          // console.log('states2: ')
          // console.log(B.states[s])
          var d = new a.rect(b.extend(true, {}, a.config.tools.states[B.states[s].type], B.states[s]), y);
          d.restore(B.states[s]);
          z[s] = d;
          q[d.getId()] = d
        }
      }
      if (B.paths) {
        for (var s in B.paths) {
          var n = new a.path(b.extend(true, {}, a.config.tools.path, B.paths[s]), y, z[B.paths[s].from], z[B.paths[s].to]);
          n.restore(B.paths[s]);
          g[n.getId()] = n
        }
      }
    }
    var A = a.config.historyRects, l = a.config.activeRects;
    if (A.rects.length || l.rects.length) {
      var m = {}, z = {};
      for (var h in g) {
        if (!z[g[h].from().text()]) {
          z[g[h].from().text()] = {rect: g[h].from(), paths: {}}
        }
        z[g[h].from().text()].paths[g[h].text()] = g[h];
        if (!z[g[h].to().text()]) {
          z[g[h].to().text()] = {rect: g[h].to(), paths: {}}
        }
      }
      for (var u = 0; u < A.rects.length; u++) {
        if (z[A.rects[u].name]) {
          z[A.rects[u].name].rect.attr(A.rectAttr)
        }
        for (var t = 0; t < A.rects[u].paths.length; t++) {
          if (z[A.rects[u].name].paths[A.rects[u].paths[t]]) {
            z[A.rects[u].name].paths[A.rects[u].paths[t]].attr(A.pathAttr)
          }
        }
      }
      for (var u = 0; u < l.rects.length; u++) {
        if (z[l.rects[u].name]) {
          z[l.rects[u].name].rect.attr(l.rectAttr)
        }
        for (var t = 0; t < l.rects[u].paths.length; t++) {
          if (z[l.rects[u].name].paths[l.rects[u].paths[t]]) {
            z[l.rects[u].name].paths[l.rects[u].paths[t]].attr(l.pathAttr)
          }
        }
      }
    }
  };
  a.edit = function (act) {
    console.log('entered');
    // console.log(typeof act);

    if(typeof act === 'boolean') {
      if(act) {
        a.config.editable = true;
        b("#myflow_tools").draggable({handle: "#myflow_tools_handle"}).css(a.config.tools.attr);
        b("#myflow_tools .node").hover(function () {
          b(this).addClass("mover")
        }, function () {
          b(this).removeClass("mover")
        });
        b("#myflow_tools .selectable").click(function () {
          b(".selected").removeClass("selected");
          b(this).addClass("selected");
          b(rapheal).data("mod", this.id)
        });
        b("#myflow_tools .state").each(function () {
          b(this).draggable({helper: "clone"})
        });
        b(flow).droppable({
          accept: ".state", drop: function (c, i) {
            b(rapheal).trigger("addrect", [i.helper.attr("type"), {
              attr: {
                x: i.helper.offset().left-300,
                y: i.helper.offset().top-100
              }
            }])
          }
        });
        b("#copy").click(function () {
          var nodeData = b(rapheal).data("currNode");
          if(nodeData) {
            var data = {}
            data[nodeData.getId()] = nodeData.toJson();
            var nodeInfo = eval('(' + data[nodeData.getId()] + ')');
            nodeInfo.attr.x+=10;
            nodeInfo.attr.y+=10;
            var convertNodeInfo = a.config.tools.states[nodeInfo.type];
            new a.rect(b.extend(true, {}, convertNodeInfo, nodeInfo), rapheal);
          }
        });
        // b("#select").click(function () { //“选择一个”测试
        //     // y.clear()
        //     // var curNode = b(rapheal).data("currNode");
        //     // console.log(curNode)
        //     // b(rapheal).trigger("removerect", curNode)
        //     // b(rapheal).trigger("removepath", curNode)
        //     // console.log($('rect').eq(0).attr('id'))
        // })

        var inspection = function () {
          var rectsMap = {};
          var startType = "start", endType = "end", startNodeCounts = 0, endNodeCounts = 0;
          for (var c in qqq) {
            if (eval( '(' + qqq[c].toJson() + ')' ).type == startType) {
              startNodeCounts++;
            }
            if (eval( '(' + qqq[c].toJson() + ')' ).type == endType) {
              endNodeCounts++;
            }
            if(qqq[c]) {
              rectsMap[qqq[c].getId()]= qqq[c].getId()
            }
          }

          if (startNodeCounts == 0 || endNodeCounts == 0) {
            app.alertError('没有开始或者结束节点');
            return false;
          }

          if (startNodeCounts > 1 || endNodeCounts > 1) {
            app.alertError('只允许有一个开始节点, 一个结束节点');
            return false;
          }

          var paths = '';
          for (var c in ggg) {
            if (eval( '(' + ggg[c].from().toJson() + ')' ).type == endType ) {
              app.alertError('结束节点有流出路由');
              return false;
            }
            if (eval( '(' + ggg[c].to().toJson() + ')' ).type == startType ) {
              app.alertError('开始节点有流入路由');
              return false;
            }
            if (ggg[c]) {
              paths += ggg[c].toJson();
            }
          }
          var isOk = true
          $.each(rectsMap, function (k, v) {
            if(paths.toString().indexOf(k)==-1) {
              isOk = false;
              return false;
            }
          });
          if (!isOk) {
            app.alertError('请连接好所有节点');
            return false;
          }
          return true;
        };

        $('#flowChart').bind('inspection', inspection);

        b("#myflow_save").click(function () {
          if (!inspection()) {
            $('li .nav-item[data-action="save"]').removeAttr('disabled');
            return;
          }
          var flowInfoId = $('div.active > .icheck-list label').find(':radio:checked').val();
          
          // console.log('rectsMap is:')
          // console.log(rectsMap);
            var i = "{states:{";
            for (var c in qqq) {
              // console.log(qqq[c].getId())
              if (c&&qqq[c]) {
                i += qqq[c].getId() + ":" + qqq[c].toJson() + ","
              }
            }
            if (i.substring(i.length - 1, i.length) == ",") {
              i = i.substring(0, i.length - 1)
            }
            i += "},paths:{";
            for (var c in ggg) {
              if (ggg[c]) {
                i += ggg[c].getId() + ":" + ggg[c].toJson() + ","
              }
            }
            if (i.substring(i.length - 1, i.length) == ",") {
              i = i.substring(0, i.length - 1)
            }
            i += "},props:{props:{";
            for (var c in a.config.props.props) {//global description
              console.log(c + ',,,' + a.config.props.props[c].value);
              i += c + ":{value:'" + a.config.props.props[c].value + "'},"
            }
            if (i.substring(i.length - 1, i.length) == ",") {
              i = i.substring(0, i.length - 1)
            }
            i += "}}}";
            a.config.tools.save.onclick(i, flowInfoId)
          
        });
        new a.props({}, rapheal)
      }else {
        a.config.editable = false
      }
    }
  };
  b.fn.myflow = function (c) {
    return this.each(function () {
      a.init(this, c)
    })
  };
  b.myflow = a
})(jQuery);
