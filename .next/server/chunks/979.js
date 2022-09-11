"use strict";
exports.id = 979;
exports.ids = [979];
exports.modules = {

/***/ 708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TogetherArea_TogetherArea)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/assets/images/together-bg.jpg
var together_bg = __webpack_require__(7128);
;// CONCATENATED MODULE: ./src/data/togetherArea.js

const togetherArea = {
    bg: together_bg["default"],
    tagline: "World is Full with Creativity",
    title: "Together We can Bring More Creativity into the World"
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/components/Reuseable/Link.js
var Link = __webpack_require__(8129);
;// CONCATENATED MODULE: ./src/components/TogetherArea/TogetherArea.js





const { bg , tagline , title  } = togetherArea;
const TogetherArea = ({ className =""  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `together-area bg_cover ${className}`,
        style: {
            backgroundImage: `url(${bg.src})`
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                className: "justify-content-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                    lg: 10,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "together-content text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: tagline
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "title",
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                className: "main-btn",
                                href: "/single-project",
                                children: "Start a Project"
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const TogetherArea_TogetherArea = (TogetherArea);


/***/ }),

/***/ 7864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$f": () => (/* binding */ aboutIntroduction),
/* harmony export */   "ai": () => (/* binding */ aboutAreaThree),
/* harmony export */   "dX": () => (/* binding */ aboutArea)
/* harmony export */ });
/* harmony import */ var _images_about_introduction_thumb_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4770);
/* harmony import */ var _images_about_thumb_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6447);
/* harmony import */ var _images_about_thumb_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4883);
/* harmony import */ var _images_about_thumb_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3828);




const aboutArea = {
    thumb1: _images_about_thumb_1_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
    thumb2: _images_about_thumb_2_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    tagline: "Ready to Go?",
    title: "We Help at Every Step From Concept to Market",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.",
    lists: [
        "Nsectetur cing elit.",
        "Suspe ndisse suscipit sagittis leo.",
        "Entum estibulum dignissim posuere.",
        "If you are going to use a passage.",
        "Lorem Ipsum on the tend to repeat.", 
    ],
    experience: 30,
    experienceText: "Years of \n Experience"
};
const aboutAreaThree = {
    tagline: "Learn More About the Krowd",
    title: "Founded to Empower Innovation",
    image: _images_about_thumb_3_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
    videoId: "2TvWZEVf6go",
    aboutTitle: "We empower people to unite around ideas that matter to them and together make those ideas come to life.",
    items: [
        {
            id: 1,
            title: "Highest Success Rates",
            text: "Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum."
        },
        {
            id: 2,
            title: "Millions in Funding",
            text: "Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum."
        },
        {
            id: 3,
            title: "Highest Success Rates",
            text: "Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum."
        }, 
    ]
};
const aboutIntroduction = {
    thumb: _images_about_introduction_thumb_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],
    tagline: "Our Introduction",
    title: "Learn About Our Company",
    count: 8000,
    text: "There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou or randomised words.",
    items: [
        "Discover how to plan, create, and manage your crowdfunding campaign",
        "Discover how to plan, create, and manage your crowdfunding campaign", 
    ],
    bottomText: "Satisfied Customers"
};


/***/ })

};
;