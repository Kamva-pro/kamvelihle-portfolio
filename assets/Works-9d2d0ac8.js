import{j as a,F as p,a as e}from"./index-a29d39f3.js";import{_ as h}from"./tilt-ce17b0f7.js";import{s as i}from"./styles-bea25d13.js";import{g as x}from"./github-f613a296.js";import{S as f,m as l,t as u,f as c}from"./SectionWrapper-594c7405.js";import{p as v}from"./index-7599990f.js";const g=({index:t,name:s,description:n,tags:o,image:m,link:d})=>e(l.div,{variants:c("up","spring",t*.5,.75),children:a(h,{className:`bg-tertiary p-5 rounded-2xl
      sm:w-[360px] w-full`,options:{max:45,scale:1,speed:450},children:[a("div",{className:"relative w-full h-[230px]",children:[e("img",{src:m,alt:s,className:"w-full h-full object-cover rounded-2xl"}),e("div",{className:`absolute inset-0 flex 
          justify-end m-2 card-img_hover`,children:e("div",{onClick:()=>window.open(d,"_blank"),className:`black-gradient w-10 h-10 rounded-full
            flex justify-center items-center cursor-pointer`,children:e("img",{src:x,alt:"github",className:"w-1/2 h-1/2","object-contain":!0})})})]}),a("div",{className:"mt-5",children:[e("h3",{className:"text-white font-bold text-[24px]",children:s}),e("p",{className:"mt-2 text-secondary text-[14px]",children:n})]}),e("div",{className:"mt-4 flex flex-wrap gap-2",children:o.map(r=>a("p",{className:`text-[14px] 
            ${r.color}`,children:["#",r.name]},r.name))})]})}),w=()=>a(p,{children:[a(l.div,{variants:u(),children:[e("p",{className:i.sectionSubText,children:"What i have done so far."}),e("h2",{className:i.sectionHeadText,children:"My Projects."})]}),e("div",{className:"w-full flex",children:e(l.p,{variants:c("","",.1,1),className:`mt-3 text-secondary text-[17px] 
      max-w-3xl leading-[30px]`,children:"The following projects highlight my skills and experience of working with various technologies."})}),e("div",{className:"mt-20 flex flex-wrap gap-7",children:v.map((t,s)=>e(g,{index:s,...t},`project-${s}`))})]}),_=f(w,"projects");export{_ as default};
