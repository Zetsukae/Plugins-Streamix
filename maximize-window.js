// @author Zetsukae
// @github https://github.com/Zetsukae
// @version 1.0

(function() {
    'use strict';
    // ... reste de ton code de plugin ...
    // (le même que celui que je t'ai donné tout à l'heure)
    const ID_BTN = 'streamix-btn-maximize';
    const ICON_MAX = `<svg width="10" height="10" viewBox="0 0 10 10"><path fill="none" stroke="currentColor" stroke-width="1" d="M1.5,1.5 h7 v7 h-7 z"/></svg>`;
    const ICON_RESTORE = `<svg width="10" height="10" viewBox="0 0 10 10"><path fill="none" stroke="currentColor" stroke-width="1" d="M3.5,3.5 h5 v5 h-5 z M1.5,3.5 v-2 h2 M1.5,6.5 v2 h2 M6.5,1.5 h2 v2"/></svg>`;

    let isMaximized = false;
    let prevBounds = { x: 0, y: 0, w: 1200, h: 800 };

    function toggleMaximize(btn) {
        if (!isMaximized) {
            prevBounds.x = window.screenX;
            prevBounds.y = window.screenY;
            prevBounds.w = window.outerWidth;
            prevBounds.h = window.outerHeight;

            window.moveTo(0, 0);
            window.resizeTo(screen.availWidth, screen.availHeight);

            isMaximized = true;
            btn.innerHTML = ICON_RESTORE;
            btn.title = "Restaurer";
        } else {
            window.resizeTo(prevBounds.w, prevBounds.h);
            window.moveTo(prevBounds.x, prevBounds.y);

            isMaximized = false;
            btn.innerHTML = ICON_MAX;
            btn.title = "Agrandir";
        }
    }

    function injectButton() {
        const controls = document.getElementById('window-controls');
        if (!controls || document.getElementById(ID_BTN)) return;

        const btn = document.createElement('button');
        btn.id = ID_BTN;
        btn.className = 'streamix-btn';
        btn.innerHTML = ICON_MAX;
        btn.title = "Agrandir";
        btn.style.fontSize = "14px";
        btn.onclick = () => toggleMaximize(btn);

        const closeBtn = controls.lastElementChild;
        if (closeBtn) {
            controls.insertBefore(btn, closeBtn);
        } else {
            controls.appendChild(btn);
        }
    }

    const observer = new MutationObserver(() => {
        if (document.getElementById('window-controls')) {
            injectButton();
        }
    });

    if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
        injectButton();
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            observer.observe(document.body, { childList: true, subtree: true });
        });
    }
})();
