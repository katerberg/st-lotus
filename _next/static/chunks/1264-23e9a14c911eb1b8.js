"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1264],{8492:function(n,e,r){r.d(e,{Z:function(){return DetailsButton}});var t=r(57437),a=r(74275),i=r.n(a),s=r(2265),o=r(49050),c=r(24033);function DetailsButton(n){var e=n.card,r=(0,c.useRouter)(),a=(0,s.useCallback)(function(){return r.push("/details?card=".concat(encodeURIComponent(e)))},[r,e]);return(0,t.jsx)(o.Z,{color:"primary",onClick:a,size:"large",children:"See Details"})}DetailsButton.propTypes={card:i().string.isRequired}},4922:function(n,e,r){r.d(e,{Z:function(){return Suggestion}});var t=r(57437),a=r(25210);r(2265);var i=r(43226);function Suggestion(n){var e=n.searchText,r=n.suggestion,s=n.stats,o=n.onAcceptSuggestion,c=(null==r?void 0:r.knownCard)?"That hasn’t been played in the ".concat(null==s?void 0:s.numberAvailable," drafts it’s been available. How about "):"Hmmm, can’t find that. Did you mean ";return r&&(0,t.jsxs)(i.Z,{color:"white",sx:{margin:"20px 20px 0",minHeight:{xs:"92px",sm:"144px",md:0}},variant:"subtitle1",children:[e===r.suggestion&&"This card hasn’t been played in recent drafts.",e!==r.suggestion&&(0,t.jsxs)(t.Fragment,{children:[c,(0,t.jsx)(a.Z,{color:"primary",onClick:o,sx:{cursor:"pointer"},children:"“".concat(r.suggestion,"”")}),"?"]})]})}},57121:function(n,e,r){r.d(e,{Z:function(){return CardStats}});var t=r(57437),a=r(74275),i=r.n(a),s=r(2265),o=r(28874),c=r(39190),l=r(77261),u=r(43226),d=r(39227),p=r(24670),g=r(49050),h=r(14819),f=r(1993),m=(0,c.Z)(u.Z)({margin:"0 8px",display:"inline-block"});function LotusScore(n){var e=n.lotusScore,r=(0,p._)((0,s.useState)(null),2),a=r[0],i=r[1];return(0,t.jsxs)(o.ZP,{alignItems:"center",container:!0,justifyContent:{md:"start",xs:"center"},sx:{marginBottom:{xs:0,sm:"20px"}},children:[(0,t.jsxs)(u.Z,{color:"white",sx:{display:"inline-block"},children:[(0,t.jsx)(g.Z,{endIcon:(0,t.jsx)(h.Z,{}),onClick:function(n){i(n.currentTarget)},children:"Lotus Score"}),(0,t.jsxs)(f.ZP,{anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},onClose:function(){i(null)},open:!!a,children:[(0,t.jsx)(u.Z,{sx:{p:2},children:"A card’s Lotus Score is a value between 0 and 100."}),(0,t.jsx)(u.Z,{sx:{p:2},children:"It is a single value that indicates how and when a card is taken in the history of VRD."})]})]}),(0,t.jsx)(m,{component:"p",sx:{color:e>98?"primary.main":e>50?"white":e>10?"warning.main":"error.main"},variant:"h3",children:Number.parseFloat(Math.round((e<0?0:e)*10)/10).toFixed(1)})]})}LotusScore.propTypes={lotusScore:i().number};var x=r(1801),v=r(25164);function CardSparkLines(n){var e,r,a,i=n.drafts,s=(e=Math).max.apply(e,(0,x._)(i.filter(function(n){return n.pick}).map(function(n){return n.pick/8}))),c=46>s?46:s,l=i.map(function(n){return n.pick?c-n.pick/8:0});return(0,t.jsx)(o.ZP,{container:!0,sx:{maxWidth:"250px",marginLeft:{xs:"auto",md:0},marginRight:{xs:"auto",md:0},marginBottom:"20px",height:"60px",overflow:"hidden"},children:(0,t.jsxs)(v.Sparklines,{data:i.sort(function(n,e){return n.occurrence<e.occurrence?-1:1}).map(function(n){return n.pick?c-n.pick/8:0}),max:(r=Math).max.apply(r,(0,x._)(l)),min:(a=Math).min.apply(a,(0,x._)(l.filter(function(n){return n}))),style:{width:"100%"},children:[(0,t.jsx)(v.SparklinesCurve,{style:{stroke:"#8dd8f8",fill:"#ffffff",fillOpacity:.8}}),(0,t.jsx)(v.SparklinesReferenceLine,{type:"avg"})]})})}CardSparkLines.propTypes={drafts:i().arrayOf(i().shape({pick:i().number}))};var b=(0,c.Z)(u.Z)({margin:"0 8px",display:"inline-block"});function CardStats(n){var e=n.drafts,r=n.loading,a=n.numberTaken,i=n.numberOfDrafts,s=n.averageRound,c=n.lotusScore,p=!a||!i||!s;return(0,t.jsxs)(o.ZP,{container:!0,flexDirection:"column",sx:{textAlign:{xs:"center",md:"left"}},children:[r&&(0,t.jsxs)(d.Z,{sx:{marginLeft:"5%",width:"90%"},children:[(0,t.jsx)(u.Z,{variant:"h3",children:(0,t.jsx)(l.Z,{sx:{bgcolor:"grey.500"}})}),(0,t.jsx)(u.Z,{variant:"h3",children:(0,t.jsx)(l.Z,{sx:{bgcolor:"grey.500"}})})]}),!r&&(0,t.jsxs)(t.Fragment,{children:[p&&(0,t.jsx)(d.Z,{sx:{marginBottom:{xs:0,sm:"20px"}},children:(0,t.jsx)(u.Z,{color:"white",variant:"subtitle1",children:"Unpicked so far."})}),!p&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(LotusScore,{lotusScore:c}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(u.Z,{color:"white",sx:{display:"inline-block"},children:"Picked in "}),(0,t.jsx)(b,{color:"white",component:"p",variant:"h3",children:a}),(0,t.jsx)(u.Z,{color:"white",sx:{display:"inline-block"},children:" of "}),(0,t.jsx)(b,{color:"white",component:"p",variant:"h3",children:a>i?a:i}),(0,t.jsx)(u.Z,{color:"white",sx:{display:"inline-block"},children:"drafts"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(u.Z,{color:"white",sx:{display:"inline-block"},children:"usually in round "}),(0,t.jsx)(b,{color:"primary",component:"p",variant:"h3",children:s})]}),(null==e?void 0:e.length)&&(0,t.jsx)(CardSparkLines,{drafts:e})]})]})]})}CardStats.propTypes={numberTaken:i().number,numberOfDrafts:i().number,averageRound:i().number,lotusScore:i().number,loading:i().bool.isRequired,drafts:i().arrayOf(i().shape({pick:i().number}))}},41619:function(n,e,r){r.d(e,{Z:function(){return CardImage}});var t=r(24670),a=r(57437),i=r(39190),s=r(74275),o=r.n(s),c=r(2265),l=r(52653),u=r(86787),d=r(39227),p=r(77261),g=(0,i.Z)("img")({maxWidth:"400px",borderRadius:"19px",textAlign:"center",width:"90%"});function CardImage(n){var e=n.cardImage,r=n.cardBackFaceImage,i=n.loading,s=(0,t._)((0,c.useState)(!1),2),o=s[0],h=s[1],f=(0,t._)((0,c.useState)(!1),2),m=f[0],x=f[1];return(0,c.useEffect)(function(){x(!0)},[e]),(0,c.useEffect)(function(){h(!1)},[h,e]),(0,a.jsxs)(d.Z,{sx:{width:"100%",textAlign:"center",position:"relative"},children:[(i||m)&&(0,a.jsx)(p.Z,{color:"white",height:"557px",sx:{maxWidth:"400px",bgcolor:"grey.500",borderRadius:"10px",marginLeft:"auto",marginRight:"auto"},variant:"rectangular",width:"90%"}),!i&&(0,a.jsx)(g,{alt:"Card Image",onLoad:function(){x(!1)},src:o?r:e,sx:{height:i?0:"auto",opacity:i?0:1}}),r&&!i&&(0,a.jsx)(l.Z,{"aria-label":"flip",color:"primary",onClick:function(){h(!o)},size:"large",sx:{backgroundColor:"rgba(0,0,0,0.3)",borderRadius:"50%",position:"absolute",right:"calc(50% - 150px)",top:"160px"},children:(0,a.jsx)(u.Z,{sx:{fontSize:"96px"}})})]})}CardImage.propTypes={loading:o().bool.isRequired,cardImage:o().string,cardBackFaceImage:o().string}},43628:function(n,e,r){r.d(e,{v:function(){return t}});var t={API_CARD_URL:"https://api.stlotus.org:444/cards/",API_SYNERGIES_URL:"https://api.stlotus.org:444/cards/{CARD_NAME}/synergies",API_TOP_CARDS_URL:"https://api.stlotus.org:444/best-cards",API_DECK_URL:"https://api.stlotus.org:444/cards"}},38305:function(n,e,r){var t=r(16687),a=r(24670),i=r(50044),s=r(98554),o=r(2265),c=r(29222),l=r(43628);e.Z=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=(0,a._)((0,o.useState)({drafts:[],average:1.3906,averageRound:1,card:"black lotus",lotusScore:99.6,numberAvailable:69,numberTaken:69}),2),u=r[0],d=r[1],p=(0,a._)((0,o.useState)(!1),2),g=p[0],h=p[1],f=(0,a._)((0,o.useState)("https://c1.scryfall.com/file/scryfall-cards/normal/front/b/3/b3a69a1c-c80f-4413-a6fd-ae54cabbce28.jpg?1559591595"),2),m=f[0],x=f[1],v=(0,a._)((0,o.useState)([]),2),b=v[0],k=v[1],j=(0,a._)((0,o.useState)(null),2),y=j[0],Z=j[1],S=(0,a._)((0,o.useState)(null),2),_=S[0],C=S[1],w=(0,o.useCallback)(function(n){return c.Z.get("".concat(l.v.API_CARD_URL).concat(encodeURIComponent(n)).concat(e?"":"?premier"))},[e]),R=(0,o.useMemo)(function(){return(0,s.Z)(w,300)},[w]);return(0,o.useEffect)(function(){(0,t._)(function(){var e,r,t,a,s,o;return(0,i.Jh)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),h(!0),[4,R(n.trim())];case 1:return(e=i.sent().data).numberTaken?(d(e),Z(null),k([])):(d(e),Z({knownCard:!0,suggestion:e.suggestion}),k(e.suggestions)),c.Z.get("https://api.scryfall.com/cards/named?fuzzy=".concat(encodeURIComponent(n))).then(function(n){var e,r,t,a,i,s=n.data;C(null);var o="https://c1.scryfall.com/file/scryfall-cards/normal/front/5/8/5865603c-0a5e-45c3-84e3-2dc3b4cf0cf7.jpg?1562915786";(null==s?void 0:s.image_uris)?o=null==s?void 0:null===(e=s.image_uris)||void 0===e?void 0:e.normal:(null==s?void 0:s.card_faces)&&(o=null==s?void 0:null===(t=s.card_faces[0])||void 0===t?void 0:null===(r=t.image_uris)||void 0===r?void 0:r.normal,(null==s?void 0:s.card_faces.length)>1&&C(null==s?void 0:null===(i=s.card_faces[1])||void 0===i?void 0:null===(a=i.image_uris)||void 0===a?void 0:a.normal)),x(o),h(!1)}),[3,3];case 2:return(s=null==(a=null==(r=i.sent())?void 0:r.response)?void 0:null===(t=a.data)||void 0===t?void 0:t.message)?(Z({knownCard:!1,suggestion:s}),k((null==a?void 0:null===(o=a.data)||void 0===o?void 0:o.suggestions)||[])):(Z(null),k([])),d(null),h(!1),[3,3];case 3:return[2]}})})()},[n,R]),{stats:u,loadingStats:g,cardImage:m,cardBackFaceImage:_,suggestion:y,suggestions:b}}}}]);