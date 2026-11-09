module.exports = [
"[next]/internal/font/google/inter_5972bc34.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_5972bc34-module__OU16Qa__className",
});
}),
"[next]/internal/font/google/inter_5972bc34.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_5972bc34.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/frontend/src/data/portfolio.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "portfolioInfo",
    ()=>portfolioInfo,
    "projects",
    ()=>projects,
    "skills",
    ()=>skills
]);
const portfolioInfo = {
    name: 'Alex Rivera',
    title: 'Full-Stack Web3 Developer',
    tagline: 'Building full-stack applications and exploring blockchain-powered products.',
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    x: 'https://x.com/your-username',
    email: 'contact@example.com'
};
const projects = [
    {
        id: '1',
        name: 'Web3 Token Portfolio',
        description: 'An ERC-20 token and token-storage dApp. Users can track token balances and interact with a custom smart contract.',
        technologies: [
            'Solidity',
            'Hardhat',
            'Ethers.js',
            'Next.js',
            'TypeScript'
        ],
        githubUrl: 'https://github.com/your-username/web3-token-portfolio',
        liveUrl: null,
        status: 'in-progress',
        contractAddress: null,
        explorerUrl: null
    },
    {
        id: '2',
        name: 'Voting dApp',
        description: 'A blockchain-based voting application with transparent, tamper-resistant on-chain vote recording.',
        technologies: [
            'Solidity',
            'Hardhat',
            'Ethers.js',
            'React',
            'TypeScript'
        ],
        githubUrl: 'https://github.com/your-username/voting-dapp',
        liveUrl: null,
        status: 'in-progress',
        contractAddress: null,
        explorerUrl: null
    },
    {
        id: '3',
        name: 'Todo List Application',
        description: 'A full-stack CRUD application built with Node.js, Express, PostgreSQL, and Prisma. Clean REST API with a React frontend.',
        technologies: [
            'TypeScript',
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'Prisma',
            'React'
        ],
        githubUrl: 'https://github.com/your-username/todo-app',
        liveUrl: null,
        status: 'completed',
        contractAddress: null,
        explorerUrl: null
    }
];
const skills = {
    languages: [
        {
            name: 'TypeScript',
            level: 'proficient'
        },
        {
            name: 'JavaScript',
            level: 'proficient'
        },
        {
            name: 'Solidity',
            level: 'learning'
        }
    ],
    frontend: [
        {
            name: 'Next.js',
            level: 'proficient'
        },
        {
            name: 'React',
            level: 'proficient'
        },
        {
            name: 'Tailwind CSS',
            level: 'proficient'
        }
    ],
    backend: [
        {
            name: 'Node.js',
            level: 'proficient'
        },
        {
            name: 'Express.js',
            level: 'proficient'
        }
    ],
    blockchain: [
        {
            name: 'Hardhat',
            level: 'learning'
        },
        {
            name: 'Ethers.js',
            level: 'learning'
        }
    ],
    databases: [
        {
            name: 'PostgreSQL',
            level: 'proficient'
        },
        {
            name: 'Prisma',
            level: 'proficient'
        },
        {
            name: 'MongoDB',
            level: 'familiar'
        },
        {
            name: 'Better-SQLite3',
            level: 'familiar'
        }
    ],
    devTools: [
        {
            name: 'Git',
            level: 'proficient'
        },
        {
            name: 'GitHub',
            level: 'proficient'
        },
        {
            name: 'Postman',
            level: 'proficient'
        },
        {
            name: 'Thunder Client',
            level: 'proficient'
        }
    ]
};
}),
"[project]/frontend/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$28$2b$57485e23558912f7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.5.28+57485e23558912f7/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_5972bc34.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/data/portfolio.ts [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["portfolioInfo"].name} — ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["portfolioInfo"].title}`,
    description: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["portfolioInfo"].tagline
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$28$2b$57485e23558912f7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: "scroll-smooth",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$28$2b$57485e23558912f7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].className} bg-[#0a0a0f] text-slate-100 antialiased`,
            children: children
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/layout.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/layout.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/.bun/next@15.5.28+57485e23558912f7/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/.bun/next@15.5.28+57485e23558912f7/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ef5997f5._.js.map