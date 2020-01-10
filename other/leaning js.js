// //changing colors
// var n = 'red';
// function Defaults() {
//   document.getElementById('Menu1').style.color = n
//   document.getElementById('Icon1').style.color = n
//   document.getElementById('div3').style.border = 'solid red'
//   document.getElementById('Account1Pic').style.border = 'solid red'
// }

// function changer(x) {
//   var x, Id, m
//   let colors = ['none', 'blue', 'greenyellow', 'red', 'orange', 'palevioletred', 'purple']

//   Id = x.id.slice(6)
//   m = 'div' + Id

//   let l, buttonId, divId
//   for (l = 1; l < 7; l++) {
//     buttonId = 'div' + l
//     divId = 'button' + l
//     document.getElementById(buttonId).style.border = 'none';
//     document.getElementById(divId).style.border = 'none';
//   }
//   n = colors[Id].toString()
//   document.getElementById('div' + Id).style.border = 'solid'
//   document.getElementById('div' + Id).style.borderColor = n
//   document.getElementById('Account1Pic').style.border = 'solid'
//   document.getElementById('Account1Pic').style.borderColor = n
//   document.getElementById('Menu1').style.color = n
//   document.getElementById('Icon1').style.color = n
//   console.log('n', n)
// }
// function noborder(y) {
//   document.getElementById(y.id).style.outline = 'none'
// }

// //Activating Prefrences Menus
// function Action(Pick) {
//   //changing color
//   var k, DisplayList = ['none', 'Display1', 'Display2', 'Display3', 'Display4']
//   var MenuList = ['none', 'Menu1', 'Menu2', 'Menu3', 'Menu4']
//   var IconList = ['none', 'Icon1', 'Icon2', 'Icon3', 'Icon4']
//   let j, IconId
//   for (j = 1; j < 5; j++) {
//     document.getElementById(DisplayList[j]).style.display = 'none'
//     document.getElementById(MenuList[j]).style.color = 'snow'
//     document.getElementById(IconList[j]).style.color = 'snow'
//   }
//   k = Pick.id.slice(4)
//   IconId = 'Icon' + Pick.id.slice(4)
//   k = 'Display' + k

//   document.getElementById(k).style.display = 'block'
//   document.getElementById(Pick.id).style.color = n
//   document.getElementById(IconId).style.color = n
//   document.getElementById(Pick.id).style.textDecoration = 'none'

//   //sliding Menu
//   if (window.innerWidth < 800) {
//     document.getElementById("middle").style.width = "45px";
//     document.getElementById('middle').style.overflow = 'hidden'
//     document.querySelector('.prefrences').style.visibility = 'hidden';

//   }
// }

// function slide() {

//   if (window.innerWidth < 800) {
//     document.getElementById("middle").style.width = "304px";
//     document.querySelector('.prefrences').style.visibility = 'visible';

//   }
// }
// window.onresize = resize;

// function resize() {
//   if (window.innerWidth > 800) {
//     document.getElementById("middle").style.width = "304px";
//     document.querySelector('.prefrences').style.visibility = 'visible';
//   }
//   else {
//     document.getElementById("middle").style.width = "45px";
//     document.getElementById('middle').style.overflow = 'hidden';
//     document.querySelector('.prefrences').style.visibility = 'hidden';

//   }

// }
// var c={
//   a:{
//     a1:1 ,
//     a2:2
//   },
//   b:{
//     b1:3,
//     b2:4
//   }

// }
// d={
//   d:{
//     d1:1,
//     d2:2
//   }

// }
// console.log('first C',c)
// // c={...c,a:{...c.a,a1:7}}

// c={...c,...d}
// console.log('second C',c)
// // var x=[
//   i={
//     i1:1,
//     i2:2
//   },
//   j={
//     j1:1,
//     j2:2
//   }
// ]
// console.log('first X',x)
// x=[...x.a,{i1:}]
// console.log('second X',x)
// var x = { x1: 1, x2: [a = { a1: 1, a2: 2 }, b = { b1: 3, b2: 5 }] }
// k = { ...x, x2: [a = { a55: 1, a2: 2 }, b = { b1: 3, b2: 5 }] }
// console.log('k', k)

// const state = {

//     messageList: [
//         {
//             text: 'salam',
//             id: 10
//         }
//     ]
// }
// const action = {
//     type: 'EDIT_MESSAGE',
//     payload: 'payload',
//     index: 'index e jadid'
// }
// let newMessageList = state.messageList
// console.log('newMessageList1', newMessageList)
// newMessageList[action.index] = {
//     id: 11,
//     text: action.payload
// }
// const x = { id: 11, text: 'payload' }
// const a = [{ l: 1, j: 2 }, x]
// console.log('a', a)
// console.log('newMessageList2', newMessageList)
// console.log('newMessageList2', newMessageList['index e jadid'])

// // const P = {
//     ...state,
//     messageList: newMessageList
// }

// console.log('P', P)
// const s = { LisT: [0, 1], b: 'oops' }
// console.log('s', s)
// var a = [{ a1: 1 }, { a2: 2 }]
// a[b] = { v: 8, m: 0 }
// console.log('a', a)
var state = {
  user1: {
    id: "ID1",
    msgList: [(msg1 = { txt: 1, time: 2 }), (msg2 = { txt: 3, time: 4 })]
  },
  user2: {
    id: "ID2",
    msgList: [(msg1 = { txt: 5, time: 6 }), (msg2 = { txt: 7, time: 8 })]
  }
};
var user3 = {
  id: "ID3",
  msgList: [(msg3 = { txt: 5, time: 6 }), (msg9 = { txt: 7, time: 8 })]
};

state2 = {
  ...state,
  user3
};
// console.log("state2", state2);
///////////
user2 = {
  id: "ID2",
  msgList: [(msg1 = { txt: 5, time: 6 }), (msg2 = { txt: 7, time: 8 })]
};
user2 = { ...user2, msgList: [...user2.msgList, { txt: 20, time: 40 }] };
state3 = { ...state, user2 };
// console.log("state3", state3);
// state2 = {
//   ...state,
//   user2: {
//     id: "ID2",
//     msgList: [
//       (msg1 = { txt: 5, time: 6 }),
//       (msg2 = { txt: 7, time: 8 }),
//       (msg3 = { txt: 9, time: 10 })
//     ]
//   }
// };

states = {
  List: [
    {
      id: 1,
      name: "Rahele",
      msg: [
        { id: 1, text: "salam" },
        { id: 2, text: "bye" }
      ]
    },
    {
      id: 2,
      name: "Mahdi",
      msg: [
        { id: 1, text: "bonjour" },
        { id: 3, text: "khodahafez" }
      ]
    }
  ]
};
//////for adding problem solved
k = {
  ...states,
  List: [
    ...states.List,
    {
      id: 6,
      name: "mohammad",
      msg: [
        { id: 1, text: "bodddddddddnjour" },
        { id: 3, text: "khodahafez" }
      ]
    }
  ]
};

console.log("k", k);
///for editing

states = {
  List: [
    {
      id: 1,
      name: "Rahele",
      msg: [
        { id: 1, text: "salam" },
        { id: 2, text: "bye" }
      ]
    },
    {
      id: 2,
      name: "Mahdi",
      msg: [
        { id: 1, text: "bonjour" },
        { id: 3, text: "khodahafez" }
      ]
    }
  ]
};

var { List } = states;

let obj = 8;
// obj = List.find(obj => obj.id == 3);
// let p = List.find(x => x.id === "1");
console.log("p", obj);
let b = { a: 1, t: 2 };
let P = [];
P = [...P, { msg: 1, te: 2 }];
P = [...P, { msg: 3, te: 4 }];
P = [...P, { msg: 3, te: "mmmmmm" }];
P.push(b);
console.log("ppp", P);
