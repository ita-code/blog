(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{366:function(t,e,n){},407:function(t,e,n){"use strict";n(366)},415:function(t,e,n){"use strict";n.r(e);var s=n(21),a=n(1);const o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={data:()=>({rawPopupConfig:{message:"发现新内容可用",buttonText:"刷新"},updateEvent:null}),created(){s.a.$on("sw-updated",this.onSWUpdated),!0==={message:"发现新内容可用",buttonText:"刷新"}&&(this.rawPopupConfig=o)},computed:{popupConfig(){return Object(a.h)(this,this.rawPopupConfig)},enabled(){return Boolean(this.popupConfig&&this.updateEvent)},message(){const t=this.popupConfig;return t&&t.message||o["/"].message},buttonText(){const t=this.popupConfig;return t&&t.buttonText||o["/"].buttonText}},methods:{onSWUpdated(t){this.updateEvent=t},reload(){this.updateEvent&&(this.updateEvent.skipWaiting().then(()=>{location.reload(!0)}),this.updateEvent=null)}}},i=(n(407),n(3)),p=Object(i.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",(function(){return[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()]}),{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"ef6a919a",null);e.default=p.exports}}]);