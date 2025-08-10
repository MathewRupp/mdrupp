document.addEventListener("DOMContentLoaded",function(){let e=50;document.addEventListener("keydown",function(t){const n=document.activeElement,s=n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.contentEditable==="true");if(s)return;switch(t.key){case"j":t.preventDefault(),window.scrollBy(0,e);break;case"k":t.preventDefault(),window.scrollBy(0,-e);break;case"g":window.vimNavTimeout?window.vimNavFirstG&&(t.preventDefault(),window.scrollTo(0,0),clearTimeout(window.vimNavTimeout),window.vimNavTimeout=null,window.vimNavFirstG=!1):(window.vimNavTimeout=setTimeout(()=>{window.vimNavTimeout=null},500),window.vimNavFirstG=!0);break;case"G":t.preventDefault(),window.scrollTo(0,document.body.scrollHeight);break;default:window.vimNavTimeout&&(clearTimeout(window.vimNavTimeout),window.vimNavTimeout=null,window.vimNavFirstG=!1);break}});const t=document.createElement("style");t.textContent=`
        body.vim-nav-active::after {
            content: 'vim nav: j/k ↕ | gg ↑ | G ↓';
            position: fixed;
            bottom: 10px;
            right: 10px;
            background: var(--bg);
            color: var(--muted);
            padding: 4px 8px;
            border: 1px solid var(--border);
            font-size: 11px;
            font-family: var(--mono);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1001;
            border-radius: 3px;
        }
        
        body.vim-nav-showing::after {
            opacity: 0.7;
        }
    `,document.head.appendChild(t);let n=!1;document.addEventListener("keydown",function(e){!n&&(e.key==="j"||e.key==="k")&&(n=!0,document.body.classList.add("vim-nav-active","vim-nav-showing"),setTimeout(()=>{document.body.classList.remove("vim-nav-showing")},2e3))})})