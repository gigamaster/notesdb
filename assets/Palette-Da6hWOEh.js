import{j as e,ad as a,e as l}from"./index-DboLLwwP.js";import"./vendor-B7FnPyzq.js";const u=({selectedColor:n,onSelect:i,className:o="",mode:r="swatch"})=>e.jsxs("div",{className:`grid grid-cols-11 gap-1 ${o}`,children:[a.map(t=>{const s=n===t;return r==="text"?e.jsx("button",{onClick:()=>i(t),className:`
                            w-6 h-6 rounded flex items-center justify-center transition-all
                            hover:bg-zinc-800
                            ${s?"ring-1 ring-zinc-500 bg-zinc-800":""}
                        `,title:t,children:e.jsx("div",{className:`w-4 h-4 rounded-full bg-${t}-500`})},t):e.jsx("button",{onClick:()=>i(t),className:`
                        w-full aspect-square rounded-md transition-all flex items-center justify-center
                        bg-${t}-500 hover:opacity-80
                        ${s?"ring-2 ring-indigo-500/50 ring-offset-1 ring-offset-zinc-900 scale-110 z-10":"opacity-60 hover:opacity-100"}
                    `,title:t,children:s&&e.jsx(l,{size:12,className:"text-white drop-shadow-md"})},t)}),r==="text"&&e.jsx("button",{onClick:()=>i("default"),className:"col-span-11 mt-2 text-[10px] text-zinc-500 hover:text-white border border-zinc-800 rounded py-1 transition-colors",children:"Reset Color"})]});export{u as default};
