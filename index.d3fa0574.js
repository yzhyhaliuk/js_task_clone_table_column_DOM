var e=document.querySelector("table"),r=e.tHead.rows[0].cells[1],o=e.tHead.rows[0].cells[4];e.tHead.rows[0].insertCell(5).outerHTML=o.outerHTML,o.innerHTML=r.innerHTML;var t=e.tFoot.rows[0].cells[1],s=e.tFoot.rows[0].cells[4];e.tFoot.rows[0].insertCell(5).outerHTML=s.outerHTML,s.innerHTML=t.innerHTML;for(var l=0;l<e.tBodies[0].rows.length;l++){var n=e.tBodies[0].rows[l].cells[1],i=e.tBodies[0].rows[l].cells[4];e.tBodies[0].rows[l].insertCell(5).innerHTML=i.innerHTML,i.innerHTML=n.innerHTML}
//# sourceMappingURL=index.d3fa0574.js.map