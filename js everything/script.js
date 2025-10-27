// var let cost
// declarations and initialization
// Scope(global,  block, functional)
// Temporal dead zone => utna area jitne mein js kp pata ahi ki variable exist karta hai par wo appko value nahi de sakta
// hoisting
// hoisting impact per type
//

// function discountCalculator(discount){
//     return function (price) {
//         return price - price * (discount / 100);
//     }
// }

// let discounter = discountCalculator(50)

// console.log(discounter(200))

let arr = [11, 12, 34, 23, 19];

// arr.forEach((val)=>{
//     console.log(val+"sagar")
// })

// let newarr = arr.find((val) => {
//   return val === 23
// });

// console.log(newarr);


let obj  = {
    name: "Sagar Saini",
    age: 23,
    class: '1st'
}

for(let key in obj){
    console.log(key, obj[key])
}


/* ------------------ Toast / Toaster Implementation ------------------ */
// showToast({ title, message, type, duration })
function showToast({ title = '', message = '', type = 'info', duration = 4000 } = {}) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    // type -> palette
    const typeMap = {
        success: { bg: 'bg-emerald-50', border: 'border-emerald-200', accent: 'text-emerald-600' },
        error: { bg: 'bg-rose-50', border: 'border-rose-200', accent: 'text-rose-600' },
        info: { bg: 'bg-sky-50', border: 'border-sky-200', accent: 'text-sky-600' }
    };

    const palette = typeMap[type] || typeMap.info;

    const toast = document.createElement('div');
    toast.className = `pointer-events-auto max-w-sm w-full ${palette.bg} border ${palette.border} rounded-lg shadow-lg ring-1 ring-black/5 overflow-hidden transform transition duration-300 translate-x-4 opacity-0`;
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');

    toast.innerHTML = `
        <div class="p-4 flex gap-3 items-start">
            <div class="flex-shrink-0 ${palette.accent} mt-0.5">
                ${type === 'success' ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>' : type === 'error' ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"/></svg>'}
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold ${palette.accent}">${escapeHtml(title || capitalize(type))}</p>
                <p class="mt-1 text-sm text-gray-600">${escapeHtml(message)}</p>
            </div>
            <div class="flex-shrink-0 self-start ml-3">
                <button class="close-toast inline-flex text-gray-400 hover:text-gray-600 focus:outline-none" aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                </button>
            </div>
        </div>
    `;

    container.appendChild(toast);

    // Force reflow then enter
    requestAnimationFrame(() => {
        toast.classList.remove('translate-x-4', 'opacity-0');
        toast.classList.add('translate-x-0', 'opacity-100');
    });

    // Close handler
    const removeToast = () => {
        toast.classList.add('translate-x-4', 'opacity-0');
        toast.addEventListener('transitionend', () => {
            toast.remove();
        }, { once: true });
    };

    toast.querySelectorAll('.close-toast').forEach(btn => {
        btn.addEventListener('click', removeToast);
    });

    // Auto remove
    if (duration > 0) {
        setTimeout(removeToast, duration);
    }
}

// Helpers
function capitalize(s) { return String(s).charAt(0).toUpperCase() + String(s).slice(1); }
function escapeHtml(unsafe) {
    return String(unsafe)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Demo triggers (wires to buttons added in index.html)
document.addEventListener('DOMContentLoaded', () => {
    const successBtn = document.getElementById('successBtn');
    const infoBtn = document.getElementById('infoBtn');
    const errorBtn = document.getElementById('errorBtn');

    if (successBtn) successBtn.addEventListener('click', () => {
        showToast({ title: 'Success', message: 'Your action completed successfully.', type: 'success', duration: 3500 });
    });

    if (infoBtn) infoBtn.addEventListener('click', () => {
        showToast({ title: 'Info', message: 'This is an informational note.', type: 'info', duration: 4500 });
    });

    if (errorBtn) errorBtn.addEventListener('click', () => {
        showToast({ title: 'Error', message: 'Something went wrong. Try again.', type: 'error', duration: 5000 });
    });
});

/* ------------------ End Toast Implementation ------------------ */