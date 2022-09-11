"use strict";
exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 7472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NewsArea_NewsArea)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/data/newsArea.js
var newsArea = __webpack_require__(5599);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/components/Reuseable/Title.js
var Title = __webpack_require__(7539);
// EXTERNAL MODULE: ./src/components/Reuseable/Link.js
var Link = __webpack_require__(8129);
;// CONCATENATED MODULE: ./src/components/NewsArea/NewsItem.js




const NewsItem = ({ news ={} , index =0 , newsTwo =false  })=>{
    const { image , date , admin , comments , title , image2  } = news;
    const newImage = newsTwo && image2 ? image2 : image;
    const isEven = (index + 1) % 2 === 0;
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        lg: newsTwo ? 4 : 3,
        md: newsTwo ? 7 : 6,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `news-item mt-30${!newsTwo && isEven ? " d-flex flex-column flex-md-column-reverse" : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "news-thumb",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                        src: __webpack_require__(990)(`./${newImage}`).default.src,
                        alt: "news"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "news-content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: date
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa fa-user-circle"
                                        }),
                                        " ",
                                        admin
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa fa-comments-o"
                                        }),
                                        " ",
                                        comments,
                                        " Comments"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "title",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                            href: "/single-news",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "flaticon-next"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const NewsArea_NewsItem = (NewsItem);

;// CONCATENATED MODULE: ./src/components/NewsArea/NewsArea.js






const { tagline , title , newses  } = newsArea/* newsArea */.Bx;
const NewsArea = ({ className ="" , newsTwo =false , newsPage =false  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `news-area ${className}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
            children: [
                !newsPage && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                    className: "justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                            title: title,
                            tagline: tagline,
                            className: "text-center"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                    className: newsTwo ? "" : "no-gutters",
                    children: newses.slice(0, newsPage ? undefined : newsTwo ? 3 : 4).map((news, index)=>/*#__PURE__*/ jsx_runtime_.jsx(NewsArea_NewsItem, {
                            news: news,
                            index: index,
                            newsTwo: newsTwo
                        }, news.id)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const NewsArea_NewsArea = (NewsArea);


/***/ }),

/***/ 7539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @param {{title?:string;tagline?:string;children?:React.ReactNode}&React.HTMLAttributes<HTMLDivElement>} props
 */ const Title = ({ title ="" , tagline ="" , children , className ="" , ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `section-title ${className}`,
        ...props,
        children: [
            tagline && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: tagline
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "title",
                children: title || children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ })

};
;