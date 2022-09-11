"use strict";
exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 2594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);



const PortfolioItem = ({ portfolio ={} , className =""  })=>{
    const { image  } = portfolio;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `portfolio-item${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Image, {
                src: __webpack_require__(990)(`./${image}`).default.src,
                alt: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "portfolio-overlay",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "image-popup",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "flaticon-add"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortfolioItem);


/***/ }),

/***/ 338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ portfolioArea),
/* harmony export */   "V": () => (/* binding */ galleryPage)
/* harmony export */ });
const portfolioArea = [
    {
        id: 1,
        image: "portfolio-1.jpg"
    },
    {
        id: 2,
        image: "portfolio-2.jpg"
    },
    {
        id: 3,
        image: "portfolio-3.jpg"
    },
    {
        id: 4,
        image: "portfolio-4.jpg"
    },
    {
        id: 5,
        image: "portfolio-5.jpg"
    },
    {
        id: 6,
        image: "portfolio-2.jpg"
    }, 
];
const galleryPage = [
    {
        id: 1,
        image: "gallery-1.jpg"
    },
    {
        id: 2,
        image: "gallery-2.jpg"
    },
    {
        id: 3,
        image: "gallery-3.jpg"
    },
    {
        id: 4,
        image: "gallery-4.jpg"
    },
    {
        id: 5,
        image: "gallery-5.jpg"
    },
    {
        id: 6,
        image: "gallery-6.jpg"
    },
    {
        id: 7,
        image: "gallery-7.jpg"
    },
    {
        id: 8,
        image: "gallery-8.jpg"
    },
    {
        id: 9,
        image: "gallery-9.jpg"
    }, 
];


/***/ })

};
;