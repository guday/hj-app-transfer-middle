var a = {
    "type": "File",
    "start": 0,
    "end": 3706,
    "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 147, "column": 0}},
    "program": {
        "type": "Program",
        "start": 0,
        "end": 3706,
        "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 147, "column": 0}},
        "sourceType": "module",
        "body": [{
            "type": "ExpressionStatement",
            "start": 65,
            "end": 3704,
            "loc": {"start": {"line": 10, "column": 0}, "end": {"line": 145, "column": 8}},
            "expression": {
                "type": "CallExpression",
                "start": 65,
                "end": 3703,
                "loc": {"start": {"line": 10, "column": 0}, "end": {"line": 145, "column": 7}},
                "callee": {
                    "type": "MemberExpression",
                    "start": 65,
                    "end": 79,
                    "loc": {"start": {"line": 10, "column": 0}, "end": {"line": 10, "column": 14}},
                    "object": {
                        "type": "Identifier",
                        "start": 65,
                        "end": 68,
                        "loc": {
                            "start": {"line": 10, "column": 0},
                            "end": {"line": 10, "column": 3},
                            "identifierName": "app"
                        },
                        "name": "app",
                        "leadingComments": null
                    },
                    "property": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 79,
                        "loc": {
                            "start": {"line": 10, "column": 4},
                            "end": {"line": 10, "column": 14},
                            "identifierName": "controller"
                        },
                        "name": "controller"
                    },
                    "computed": false,
                    "leadingComments": null
                },
                "arguments": [{
                    "type": "StringLiteral",
                    "start": 80,
                    "end": 97,
                    "loc": {"start": {"line": 10, "column": 15}, "end": {"line": 10, "column": 32}},
                    "extra": {"rawValue": "AboutController", "raw": "'AboutController'"},
                    "value": "AboutController"
                }, {
                    "type": "ArrayExpression",
                    "start": 99,
                    "end": 3702,
                    "loc": {"start": {"line": 10, "column": 34}, "end": {"line": 145, "column": 6}},
                    "elements": [{
                        "type": "StringLiteral",
                        "start": 100,
                        "end": 108,
                        "loc": {"start": {"line": 10, "column": 35}, "end": {"line": 10, "column": 43}},
                        "extra": {"rawValue": "$scope", "raw": "'$scope'"},
                        "value": "$scope"
                    }, {
                        "type": "StringLiteral",
                        "start": 110,
                        "end": 117,
                        "loc": {"start": {"line": 10, "column": 45}, "end": {"line": 10, "column": 52}},
                        "extra": {"rawValue": "cache", "raw": "'cache'"},
                        "value": "cache"
                    }, {
                        "type": "FunctionExpression",
                        "start": 123,
                        "end": 3701,
                        "loc": {"start": {"line": 11, "column": 4}, "end": {"line": 145, "column": 5}},
                        "id": null,
                        "generator": false,
                        "expression": false,
                        "async": false,
                        "params": [{
                            "type": "Identifier",
                            "start": 133,
                            "end": 139,
                            "loc": {
                                "start": {"line": 11, "column": 14},
                                "end": {"line": 11, "column": 20},
                                "identifierName": "$scope"
                            },
                            "name": "$scope"
                        }, {
                            "type": "Identifier",
                            "start": 141,
                            "end": 146,
                            "loc": {
                                "start": {"line": 11, "column": 22},
                                "end": {"line": 11, "column": 27},
                                "identifierName": "cache"
                            },
                            "name": "cache"
                        }],
                        "body": {
                            "type": "BlockStatement",
                            "start": 148,
                            "end": 3701,
                            "loc": {"start": {"line": 11, "column": 29}, "end": {"line": 145, "column": 5}},
                            "body": [{
                                "type": "ExpressionStatement",
                                "start": 180,
                                "end": 197,
                                "loc": {"start": {"line": 14, "column": 8}, "end": {"line": 14, "column": 25}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 180,
                                    "end": 196,
                                    "loc": {"start": {"line": 14, "column": 8}, "end": {"line": 14, "column": 24}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 180,
                                        "end": 191,
                                        "loc": {"start": {"line": 14, "column": 8}, "end": {"line": 14, "column": 19}},
                                        "object": {
                                            "type": "Identifier",
                                            "start": 180,
                                            "end": 186,
                                            "loc": {
                                                "start": {"line": 14, "column": 8},
                                                "end": {"line": 14, "column": 14},
                                                "identifierName": "$scope"
                                            },
                                            "name": "$scope",
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 187,
                                            "end": 191,
                                            "loc": {
                                                "start": {"line": 14, "column": 15},
                                                "end": {"line": 14, "column": 19},
                                                "identifierName": "data"
                                            },
                                            "name": "data"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "ObjectExpression",
                                        "start": 194,
                                        "end": 196,
                                        "loc": {"start": {"line": 14, "column": 22}, "end": {"line": 14, "column": 24}},
                                        "properties": []
                                    },
                                    "leadingComments": null
                                },
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope变量初始化",
                                    "start": 159,
                                    "end": 171,
                                    "loc": {"start": {"line": 13, "column": 8}, "end": {"line": 13, "column": 20}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "commment",
                                    "start": 197,
                                    "end": 207,
                                    "loc": {"start": {"line": 14, "column": 25}, "end": {"line": 14, "column": 35}}
                                }, {
                                    "type": "CommentLine",
                                    "value": "多级变量申明",
                                    "start": 216,
                                    "end": 224,
                                    "loc": {"start": {"line": 15, "column": 8}, "end": {"line": 15, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 233,
                                "end": 266,
                                "loc": {"start": {"line": 16, "column": 8}, "end": {"line": 16, "column": 41}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 237,
                                    "end": 265,
                                    "loc": {"start": {"line": 16, "column": 12}, "end": {"line": 16, "column": 40}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 237,
                                        "end": 246,
                                        "loc": {
                                            "start": {"line": 16, "column": 12},
                                            "end": {"line": 16, "column": 21},
                                            "identifierName": "scopeData"
                                        },
                                        "name": "scopeData",
                                        "leadingComments": null
                                    },
                                    "init": {
                                        "type": "AssignmentExpression",
                                        "start": 249,
                                        "end": 265,
                                        "loc": {"start": {"line": 16, "column": 24}, "end": {"line": 16, "column": 40}},
                                        "operator": "=",
                                        "left": {
                                            "type": "MemberExpression",
                                            "start": 249,
                                            "end": 260,
                                            "loc": {
                                                "start": {"line": 16, "column": 24},
                                                "end": {"line": 16, "column": 35}
                                            },
                                            "object": {
                                                "type": "Identifier",
                                                "start": 249,
                                                "end": 255,
                                                "loc": {
                                                    "start": {"line": 16, "column": 24},
                                                    "end": {"line": 16, "column": 30},
                                                    "identifierName": "$scope"
                                                },
                                                "name": "$scope"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 256,
                                                "end": 260,
                                                "loc": {
                                                    "start": {"line": 16, "column": 31},
                                                    "end": {"line": 16, "column": 35},
                                                    "identifierName": "data"
                                                },
                                                "name": "data"
                                            },
                                            "computed": false
                                        },
                                        "right": {
                                            "type": "ObjectExpression",
                                            "start": 263,
                                            "end": 265,
                                            "loc": {
                                                "start": {"line": 16, "column": 38},
                                                "end": {"line": 16, "column": 40}
                                            },
                                            "properties": []
                                        }
                                    },
                                    "leadingComments": null
                                }],
                                "kind": "var",
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "commment",
                                    "start": 197,
                                    "end": 207,
                                    "loc": {"start": {"line": 14, "column": 25}, "end": {"line": 14, "column": 35}}
                                }, {
                                    "type": "CommentLine",
                                    "value": "多级变量申明",
                                    "start": 216,
                                    "end": 224,
                                    "loc": {"start": {"line": 15, "column": 8}, "end": {"line": 15, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 275,
                                "end": 302,
                                "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 35}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 279,
                                    "end": 301,
                                    "loc": {"start": {"line": 17, "column": 12}, "end": {"line": 17, "column": 34}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 279,
                                        "end": 289,
                                        "loc": {
                                            "start": {"line": 17, "column": 12},
                                            "end": {"line": 17, "column": 22},
                                            "identifierName": "scopeData2"
                                        },
                                        "name": "scopeData2"
                                    },
                                    "init": {
                                        "type": "Identifier",
                                        "start": 292,
                                        "end": 301,
                                        "loc": {
                                            "start": {"line": 17, "column": 25},
                                            "end": {"line": 17, "column": 34},
                                            "identifierName": "scopeData"
                                        },
                                        "name": "scopeData"
                                    }
                                }],
                                "kind": "var",
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "this comment",
                                    "start": 311,
                                    "end": 325,
                                    "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 22}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 334,
                                "end": 352,
                                "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 26}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 334,
                                    "end": 351,
                                    "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 25}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 334,
                                        "end": 344,
                                        "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 18}},
                                        "object": {
                                            "type": "ThisExpression",
                                            "start": 334,
                                            "end": 338,
                                            "loc": {
                                                "start": {"line": 19, "column": 8},
                                                "end": {"line": 19, "column": 12}
                                            },
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 339,
                                            "end": 344,
                                            "loc": {
                                                "start": {"line": 19, "column": 13},
                                                "end": {"line": 19, "column": 18},
                                                "identifierName": "test1"
                                            },
                                            "name": "test1"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "StringLiteral",
                                        "start": 347,
                                        "end": 351,
                                        "loc": {"start": {"line": 19, "column": 21}, "end": {"line": 19, "column": 25}},
                                        "extra": {"rawValue": "12", "raw": "\"12\""},
                                        "value": "12"
                                    },
                                    "leadingComments": null
                                },
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "this comment",
                                    "start": 311,
                                    "end": 325,
                                    "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 22}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "this comment1",
                                    "start": 352,
                                    "end": 367,
                                    "loc": {"start": {"line": 19, "column": 26}, "end": {"line": 19, "column": 41}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 376,
                                "end": 399,
                                "loc": {"start": {"line": 20, "column": 8}, "end": {"line": 20, "column": 31}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 376,
                                    "end": 398,
                                    "loc": {"start": {"line": 20, "column": 8}, "end": {"line": 20, "column": 30}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 376,
                                        "end": 386,
                                        "loc": {"start": {"line": 20, "column": 8}, "end": {"line": 20, "column": 18}},
                                        "object": {
                                            "type": "ThisExpression",
                                            "start": 376,
                                            "end": 380,
                                            "loc": {
                                                "start": {"line": 20, "column": 8},
                                                "end": {"line": 20, "column": 12}
                                            },
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 381,
                                            "end": 386,
                                            "loc": {
                                                "start": {"line": 20, "column": 13},
                                                "end": {"line": 20, "column": 18},
                                                "identifierName": "test1"
                                            },
                                            "name": "test1"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "start": 389,
                                        "end": 398,
                                        "loc": {
                                            "start": {"line": 20, "column": 21},
                                            "end": {"line": 20, "column": 30},
                                            "identifierName": "undefined"
                                        },
                                        "name": "undefined"
                                    },
                                    "leadingComments": null
                                },
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "this comment1",
                                    "start": 352,
                                    "end": 367,
                                    "loc": {"start": {"line": 19, "column": 26}, "end": {"line": 19, "column": 41}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": " this.test2 = function () {",
                                    "start": 408,
                                    "end": 437,
                                    "loc": {"start": {"line": 21, "column": 8}, "end": {"line": 21, "column": 37}}
                                }, {
                                    "type": "CommentLine",
                                    "value": " }",
                                    "start": 447,
                                    "end": 451,
                                    "loc": {"start": {"line": 23, "column": 8}, "end": {"line": 23, "column": 12}}
                                }, {
                                    "type": "CommentLine",
                                    "value": "变量赋值",
                                    "start": 460,
                                    "end": 466,
                                    "loc": {"start": {"line": 24, "column": 8}, "end": {"line": 24, "column": 14}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 475,
                                "end": 518,
                                "loc": {"start": {"line": 25, "column": 8}, "end": {"line": 25, "column": 51}},
                                "expression": {
                                    "type": "SequenceExpression",
                                    "start": 475,
                                    "end": 517,
                                    "loc": {"start": {"line": 25, "column": 8}, "end": {"line": 25, "column": 50}},
                                    "expressions": [{
                                        "type": "AssignmentExpression",
                                        "start": 475,
                                        "end": 503,
                                        "loc": {"start": {"line": 25, "column": 8}, "end": {"line": 25, "column": 36}},
                                        "operator": "=",
                                        "left": {
                                            "type": "MemberExpression",
                                            "start": 475,
                                            "end": 488,
                                            "loc": {
                                                "start": {"line": 25, "column": 8},
                                                "end": {"line": 25, "column": 21}
                                            },
                                            "object": {
                                                "type": "Identifier",
                                                "start": 475,
                                                "end": 484,
                                                "loc": {
                                                    "start": {"line": 25, "column": 8},
                                                    "end": {"line": 25, "column": 17},
                                                    "identifierName": "scopeData"
                                                },
                                                "name": "scopeData",
                                                "leadingComments": null
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 485,
                                                "end": 488,
                                                "loc": {
                                                    "start": {"line": 25, "column": 18},
                                                    "end": {"line": 25, "column": 21},
                                                    "identifierName": "ccc"
                                                },
                                                "name": "ccc"
                                            },
                                            "computed": false,
                                            "leadingComments": null
                                        },
                                        "right": {
                                            "type": "FunctionExpression",
                                            "start": 491,
                                            "end": 503,
                                            "loc": {
                                                "start": {"line": 25, "column": 24},
                                                "end": {"line": 25, "column": 36}
                                            },
                                            "id": null,
                                            "generator": false,
                                            "expression": false,
                                            "async": false,
                                            "params": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "start": 501,
                                                "end": 503,
                                                "loc": {
                                                    "start": {"line": 25, "column": 34},
                                                    "end": {"line": 25, "column": 36}
                                                },
                                                "body": [],
                                                "directives": []
                                            }
                                        },
                                        "leadingComments": null
                                    }, {
                                        "type": "AssignmentExpression",
                                        "start": 504,
                                        "end": 517,
                                        "loc": {"start": {"line": 25, "column": 37}, "end": {"line": 25, "column": 50}},
                                        "operator": "=",
                                        "left": {
                                            "type": "Identifier",
                                            "start": 504,
                                            "end": 514,
                                            "loc": {
                                                "start": {"line": 25, "column": 37},
                                                "end": {"line": 25, "column": 47},
                                                "identifierName": "scopeData2"
                                            },
                                            "name": "scopeData2"
                                        },
                                        "right": {
                                            "type": "NumericLiteral",
                                            "start": 515,
                                            "end": 517,
                                            "loc": {
                                                "start": {"line": 25, "column": 48},
                                                "end": {"line": 25, "column": 50}
                                            },
                                            "extra": {"rawValue": 12, "raw": "12"},
                                            "value": 12
                                        }
                                    }],
                                    "leadingComments": null
                                },
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": " this.test2 = function () {",
                                    "start": 408,
                                    "end": 437,
                                    "loc": {"start": {"line": 21, "column": 8}, "end": {"line": 21, "column": 37}}
                                }, {
                                    "type": "CommentLine",
                                    "value": " }",
                                    "start": 447,
                                    "end": 451,
                                    "loc": {"start": {"line": 23, "column": 8}, "end": {"line": 23, "column": 12}}
                                }, {
                                    "type": "CommentLine",
                                    "value": "变量赋值",
                                    "start": 460,
                                    "end": 466,
                                    "loc": {"start": {"line": 24, "column": 8}, "end": {"line": 24, "column": 14}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "单个变量申明",
                                    "start": 527,
                                    "end": 535,
                                    "loc": {"start": {"line": 26, "column": 8}, "end": {"line": 26, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 544,
                                "end": 582,
                                "loc": {"start": {"line": 27, "column": 8}, "end": {"line": 27, "column": 46}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 548,
                                    "end": 581,
                                    "loc": {"start": {"line": 27, "column": 12}, "end": {"line": 27, "column": 45}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 548,
                                        "end": 562,
                                        "loc": {
                                            "start": {"line": 27, "column": 12},
                                            "end": {"line": 27, "column": 26},
                                            "identifierName": "singleVariable"
                                        },
                                        "name": "singleVariable",
                                        "leadingComments": null
                                    },
                                    "init": {
                                        "type": "StringLiteral",
                                        "start": 565,
                                        "end": 581,
                                        "loc": {"start": {"line": 27, "column": 29}, "end": {"line": 27, "column": 45}},
                                        "extra": {"rawValue": "singleVariable", "raw": "'singleVariable'"},
                                        "value": "singleVariable"
                                    },
                                    "leadingComments": null
                                }],
                                "kind": "var",
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "单个变量申明",
                                    "start": 527,
                                    "end": 535,
                                    "loc": {"start": {"line": 26, "column": 8}, "end": {"line": 26, "column": 16}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "多个变量申明， 包括函数",
                                    "start": 591,
                                    "end": 605,
                                    "loc": {"start": {"line": 28, "column": 8}, "end": {"line": 28, "column": 22}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 614,
                                "end": 858,
                                "loc": {"start": {"line": 29, "column": 8}, "end": {"line": 36, "column": 39}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 618,
                                    "end": 626,
                                    "loc": {"start": {"line": 29, "column": 12}, "end": {"line": 29, "column": 20}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 618,
                                        "end": 626,
                                        "loc": {
                                            "start": {"line": 29, "column": 12},
                                            "end": {"line": 29, "column": 20},
                                            "identifierName": "mutiVar1"
                                        },
                                        "name": "mutiVar1",
                                        "leadingComments": null
                                    },
                                    "init": null,
                                    "leadingComments": null
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 640,
                                    "end": 655,
                                    "loc": {"start": {"line": 30, "column": 12}, "end": {"line": 30, "column": 27}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 640,
                                        "end": 648,
                                        "loc": {
                                            "start": {"line": 30, "column": 12},
                                            "end": {"line": 30, "column": 20},
                                            "identifierName": "mutiVar2"
                                        },
                                        "name": "mutiVar2"
                                    },
                                    "init": {
                                        "type": "NullLiteral",
                                        "start": 651,
                                        "end": 655,
                                        "loc": {"start": {"line": 30, "column": 23}, "end": {"line": 30, "column": 27}}
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 669,
                                    "end": 690,
                                    "loc": {"start": {"line": 31, "column": 12}, "end": {"line": 31, "column": 33}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 669,
                                        "end": 677,
                                        "loc": {
                                            "start": {"line": 31, "column": 12},
                                            "end": {"line": 31, "column": 20},
                                            "identifierName": "mutiVar3"
                                        },
                                        "name": "mutiVar3"
                                    },
                                    "init": {
                                        "type": "StringLiteral",
                                        "start": 680,
                                        "end": 690,
                                        "loc": {"start": {"line": 31, "column": 23}, "end": {"line": 31, "column": 33}},
                                        "extra": {"rawValue": "mutiVar3", "raw": "\"mutiVar3\""},
                                        "value": "mutiVar3"
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 704,
                                    "end": 783,
                                    "loc": {"start": {"line": 32, "column": 12}, "end": {"line": 34, "column": 13}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 704,
                                        "end": 711,
                                        "loc": {
                                            "start": {"line": 32, "column": 12},
                                            "end": {"line": 32, "column": 19},
                                            "identifierName": "mutiFun"
                                        },
                                        "name": "mutiFun"
                                    },
                                    "init": {
                                        "type": "FunctionExpression",
                                        "start": 714,
                                        "end": 783,
                                        "loc": {"start": {"line": 32, "column": 22}, "end": {"line": 34, "column": 13}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 724,
                                            "end": 730,
                                            "loc": {
                                                "start": {"line": 32, "column": 32},
                                                "end": {"line": 32, "column": 38},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 732,
                                            "end": 783,
                                            "loc": {
                                                "start": {"line": 32, "column": 40},
                                                "end": {"line": 34, "column": 13}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 750,
                                                "end": 769,
                                                "loc": {
                                                    "start": {"line": 33, "column": 16},
                                                    "end": {"line": 33, "column": 35}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 750,
                                                    "end": 769,
                                                    "loc": {
                                                        "start": {"line": 33, "column": 16},
                                                        "end": {"line": 33, "column": 35}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 750,
                                                        "end": 761,
                                                        "loc": {
                                                            "start": {"line": 33, "column": 16},
                                                            "end": {"line": 33, "column": 27}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 750,
                                                            "end": 757,
                                                            "loc": {
                                                                "start": {"line": 33, "column": 16},
                                                                "end": {"line": 33, "column": 23},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 758,
                                                            "end": 761,
                                                            "loc": {
                                                                "start": {"line": 33, "column": 24},
                                                                "end": {"line": 33, "column": 27},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 762,
                                                        "end": 768,
                                                        "loc": {
                                                            "start": {"line": 33, "column": 28},
                                                            "end": {"line": 33, "column": 34},
                                                            "identifierName": "param1"
                                                        },
                                                        "name": "param1"
                                                    }]
                                                }
                                            }],
                                            "directives": []
                                        }
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 797,
                                    "end": 817,
                                    "loc": {"start": {"line": 35, "column": 12}, "end": {"line": 35, "column": 32}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 797,
                                        "end": 805,
                                        "loc": {
                                            "start": {"line": 35, "column": 12},
                                            "end": {"line": 35, "column": 20},
                                            "identifierName": "mutiVar4"
                                        },
                                        "name": "mutiVar4"
                                    },
                                    "init": {
                                        "type": "Identifier",
                                        "start": 808,
                                        "end": 817,
                                        "loc": {
                                            "start": {"line": 35, "column": 23},
                                            "end": {"line": 35, "column": 32},
                                            "identifierName": "scopeData"
                                        },
                                        "name": "scopeData"
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 831,
                                    "end": 857,
                                    "loc": {"start": {"line": 36, "column": 12}, "end": {"line": 36, "column": 38}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 831,
                                        "end": 839,
                                        "loc": {
                                            "start": {"line": 36, "column": 12},
                                            "end": {"line": 36, "column": 20},
                                            "identifierName": "mutiVar5"
                                        },
                                        "name": "mutiVar5"
                                    },
                                    "init": {
                                        "type": "CallExpression",
                                        "start": 842,
                                        "end": 857,
                                        "loc": {"start": {"line": 36, "column": 23}, "end": {"line": 36, "column": 38}},
                                        "callee": {
                                            "type": "MemberExpression",
                                            "start": 842,
                                            "end": 855,
                                            "loc": {
                                                "start": {"line": 36, "column": 23},
                                                "end": {"line": 36, "column": 36}
                                            },
                                            "object": {
                                                "type": "Identifier",
                                                "start": 842,
                                                "end": 847,
                                                "loc": {
                                                    "start": {"line": 36, "column": 23},
                                                    "end": {"line": 36, "column": 28},
                                                    "identifierName": "cache"
                                                },
                                                "name": "cache"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 848,
                                                "end": 855,
                                                "loc": {
                                                    "start": {"line": 36, "column": 29},
                                                    "end": {"line": 36, "column": 36},
                                                    "identifierName": "getInfo"
                                                },
                                                "name": "getInfo"
                                            },
                                            "computed": false
                                        },
                                        "arguments": []
                                    }
                                }],
                                "kind": "var",
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "多个变量申明， 包括函数",
                                    "start": 591,
                                    "end": 605,
                                    "loc": {"start": {"line": 28, "column": 8}, "end": {"line": 28, "column": 22}}
                                }]
                            }, {
                                "type": "IfStatement",
                                "start": 868,
                                "end": 956,
                                "loc": {"start": {"line": 38, "column": 8}, "end": {"line": 41, "column": 9}},
                                "test": {
                                    "type": "Identifier",
                                    "start": 872,
                                    "end": 880,
                                    "loc": {
                                        "start": {"line": 38, "column": 12},
                                        "end": {"line": 38, "column": 20},
                                        "identifierName": "mutiVar1"
                                    },
                                    "name": "mutiVar1"
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "start": 882,
                                    "end": 956,
                                    "loc": {"start": {"line": 38, "column": 22}, "end": {"line": 41, "column": 9}},
                                    "body": [{
                                        "type": "VariableDeclaration",
                                        "start": 896,
                                        "end": 911,
                                        "loc": {"start": {"line": 39, "column": 12}, "end": {"line": 39, "column": 27}},
                                        "declarations": [{
                                            "type": "VariableDeclarator",
                                            "start": 900,
                                            "end": 910,
                                            "loc": {
                                                "start": {"line": 39, "column": 16},
                                                "end": {"line": 39, "column": 26}
                                            },
                                            "id": {
                                                "type": "Identifier",
                                                "start": 900,
                                                "end": 906,
                                                "loc": {
                                                    "start": {"line": 39, "column": 16},
                                                    "end": {"line": 39, "column": 22},
                                                    "identifierName": "ifVar1"
                                                },
                                                "name": "ifVar1"
                                            },
                                            "init": {
                                                "type": "NumericLiteral",
                                                "start": 909,
                                                "end": 910,
                                                "loc": {
                                                    "start": {"line": 39, "column": 25},
                                                    "end": {"line": 39, "column": 26}
                                                },
                                                "extra": {"rawValue": 1, "raw": "1"},
                                                "value": 1
                                            }
                                        }],
                                        "kind": "var"
                                    }, {
                                        "type": "VariableDeclaration",
                                        "start": 924,
                                        "end": 946,
                                        "loc": {"start": {"line": 40, "column": 12}, "end": {"line": 40, "column": 34}},
                                        "declarations": [{
                                            "type": "VariableDeclarator",
                                            "start": 928,
                                            "end": 945,
                                            "loc": {
                                                "start": {"line": 40, "column": 16},
                                                "end": {"line": 40, "column": 33}
                                            },
                                            "id": {
                                                "type": "Identifier",
                                                "start": 928,
                                                "end": 934,
                                                "loc": {
                                                    "start": {"line": 40, "column": 16},
                                                    "end": {"line": 40, "column": 22},
                                                    "identifierName": "ifVar2"
                                                },
                                                "name": "ifVar2"
                                            },
                                            "init": {
                                                "type": "Identifier",
                                                "start": 937,
                                                "end": 945,
                                                "loc": {
                                                    "start": {"line": 40, "column": 25},
                                                    "end": {"line": 40, "column": 33},
                                                    "identifierName": "mutiVar2"
                                                },
                                                "name": "mutiVar2"
                                            }
                                        }],
                                        "kind": "var"
                                    }],
                                    "directives": []
                                },
                                "alternate": null
                            }, {
                                "type": "VariableDeclaration",
                                "start": 966,
                                "end": 1530,
                                "loc": {"start": {"line": 43, "column": 8}, "end": {"line": 61, "column": 9}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 970,
                                    "end": 1530,
                                    "loc": {"start": {"line": 43, "column": 12}, "end": {"line": 61, "column": 9}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 970,
                                        "end": 976,
                                        "loc": {
                                            "start": {"line": 43, "column": 12},
                                            "end": {"line": 43, "column": 18},
                                            "identifierName": "objVar"
                                        },
                                        "name": "objVar"
                                    },
                                    "init": {
                                        "type": "ObjectExpression",
                                        "start": 979,
                                        "end": 1530,
                                        "loc": {"start": {"line": 43, "column": 21}, "end": {"line": 61, "column": 9}},
                                        "properties": [{
                                            "type": "ObjectProperty",
                                            "start": 993,
                                            "end": 1011,
                                            "loc": {
                                                "start": {"line": 44, "column": 12},
                                                "end": {"line": 44, "column": 30}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 993,
                                                "end": 1000,
                                                "loc": {
                                                    "start": {"line": 44, "column": 12},
                                                    "end": {"line": 44, "column": 19},
                                                    "identifierName": "objVar1"
                                                },
                                                "name": "objVar1"
                                            },
                                            "value": {
                                                "type": "StringLiteral",
                                                "start": 1002,
                                                "end": 1011,
                                                "loc": {
                                                    "start": {"line": 44, "column": 21},
                                                    "end": {"line": 44, "column": 30}
                                                },
                                                "extra": {"rawValue": "objVar1", "raw": "\"objVar1\""},
                                                "value": "objVar1"
                                            }
                                        }, {
                                            "type": "ObjectProperty",
                                            "start": 1025,
                                            "end": 1043,
                                            "loc": {
                                                "start": {"line": 45, "column": 12},
                                                "end": {"line": 45, "column": 30}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1025,
                                                "end": 1032,
                                                "loc": {
                                                    "start": {"line": 45, "column": 12},
                                                    "end": {"line": 45, "column": 19},
                                                    "identifierName": "objVar2"
                                                },
                                                "name": "objVar2"
                                            },
                                            "value": {
                                                "type": "Identifier",
                                                "start": 1034,
                                                "end": 1043,
                                                "loc": {
                                                    "start": {"line": 45, "column": 21},
                                                    "end": {"line": 45, "column": 30},
                                                    "identifierName": "scopeData"
                                                },
                                                "name": "scopeData"
                                            }
                                        }, {
                                            "type": "ObjectProperty",
                                            "start": 1057,
                                            "end": 1180,
                                            "loc": {
                                                "start": {"line": 46, "column": 12},
                                                "end": {"line": 49, "column": 13}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1057,
                                                "end": 1064,
                                                "loc": {
                                                    "start": {"line": 46, "column": 12},
                                                    "end": {"line": 46, "column": 19},
                                                    "identifierName": "objVar3"
                                                },
                                                "name": "objVar3"
                                            },
                                            "value": {
                                                "type": "FunctionExpression",
                                                "start": 1066,
                                                "end": 1180,
                                                "loc": {
                                                    "start": {"line": 46, "column": 21},
                                                    "end": {"line": 49, "column": 13}
                                                },
                                                "id": null,
                                                "generator": false,
                                                "expression": false,
                                                "async": false,
                                                "params": [{
                                                    "type": "Identifier",
                                                    "start": 1076,
                                                    "end": 1082,
                                                    "loc": {
                                                        "start": {"line": 46, "column": 31},
                                                        "end": {"line": 46, "column": 37},
                                                        "identifierName": "param1"
                                                    },
                                                    "name": "param1"
                                                }, {
                                                    "type": "Identifier",
                                                    "start": 1084,
                                                    "end": 1090,
                                                    "loc": {
                                                        "start": {"line": 46, "column": 39},
                                                        "end": {"line": 46, "column": 45},
                                                        "identifierName": "param2"
                                                    },
                                                    "name": "param2"
                                                }],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "start": 1092,
                                                    "end": 1180,
                                                    "loc": {
                                                        "start": {"line": 46, "column": 47},
                                                        "end": {"line": 49, "column": 13}
                                                    },
                                                    "body": [{
                                                        "type": "ExpressionStatement",
                                                        "start": 1110,
                                                        "end": 1128,
                                                        "loc": {
                                                            "start": {"line": 47, "column": 16},
                                                            "end": {"line": 47, "column": 34}
                                                        },
                                                        "expression": {
                                                            "type": "AssignmentExpression",
                                                            "start": 1110,
                                                            "end": 1127,
                                                            "loc": {
                                                                "start": {"line": 47, "column": 16},
                                                                "end": {"line": 47, "column": 33}
                                                            },
                                                            "operator": "=",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "start": 1110,
                                                                "end": 1116,
                                                                "loc": {
                                                                    "start": {"line": 47, "column": 16},
                                                                    "end": {"line": 47, "column": 22},
                                                                    "identifierName": "param1"
                                                                },
                                                                "name": "param1"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "start": 1119,
                                                                "end": 1127,
                                                                "loc": {
                                                                    "start": {"line": 47, "column": 25},
                                                                    "end": {"line": 47, "column": 33},
                                                                    "identifierName": "mutiVar1"
                                                                },
                                                                "name": "mutiVar1"
                                                            }
                                                        }
                                                    }, {
                                                        "type": "ExpressionStatement",
                                                        "start": 1145,
                                                        "end": 1166,
                                                        "loc": {
                                                            "start": {"line": 48, "column": 16},
                                                            "end": {"line": 48, "column": 37}
                                                        },
                                                        "expression": {
                                                            "type": "AssignmentExpression",
                                                            "start": 1145,
                                                            "end": 1165,
                                                            "loc": {
                                                                "start": {"line": 48, "column": 16},
                                                                "end": {"line": 48, "column": 36}
                                                            },
                                                            "operator": "=",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "start": 1145,
                                                                "end": 1151,
                                                                "loc": {
                                                                    "start": {"line": 48, "column": 16},
                                                                    "end": {"line": 48, "column": 22},
                                                                    "identifierName": "param2"
                                                                },
                                                                "name": "param2"
                                                            },
                                                            "right": {
                                                                "type": "MemberExpression",
                                                                "start": 1154,
                                                                "end": 1165,
                                                                "loc": {
                                                                    "start": {"line": 48, "column": 25},
                                                                    "end": {"line": 48, "column": 36}
                                                                },
                                                                "object": {
                                                                    "type": "Identifier",
                                                                    "start": 1154,
                                                                    "end": 1160,
                                                                    "loc": {
                                                                        "start": {"line": 48, "column": 25},
                                                                        "end": {"line": 48, "column": 31},
                                                                        "identifierName": "$scope"
                                                                    },
                                                                    "name": "$scope"
                                                                },
                                                                "property": {
                                                                    "type": "Identifier",
                                                                    "start": 1161,
                                                                    "end": 1165,
                                                                    "loc": {
                                                                        "start": {"line": 48, "column": 32},
                                                                        "end": {"line": 48, "column": 36},
                                                                        "identifierName": "data"
                                                                    },
                                                                    "name": "data"
                                                                },
                                                                "computed": false
                                                            }
                                                        }
                                                    }],
                                                    "directives": []
                                                }
                                            }
                                        }, {
                                            "type": "ObjectMethod",
                                            "start": 1194,
                                            "end": 1338,
                                            "loc": {
                                                "start": {"line": 50, "column": 12},
                                                "end": {"line": 54, "column": 13}
                                            },
                                            "method": true,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1194,
                                                "end": 1201,
                                                "loc": {
                                                    "start": {"line": 50, "column": 12},
                                                    "end": {"line": 50, "column": 19},
                                                    "identifierName": "objVar4"
                                                },
                                                "name": "objVar4"
                                            },
                                            "kind": "method",
                                            "id": null,
                                            "generator": false,
                                            "expression": false,
                                            "async": false,
                                            "params": [{
                                                "type": "Identifier",
                                                "start": 1202,
                                                "end": 1208,
                                                "loc": {
                                                    "start": {"line": 50, "column": 20},
                                                    "end": {"line": 50, "column": 26},
                                                    "identifierName": "param1"
                                                },
                                                "name": "param1"
                                            }, {
                                                "type": "Identifier",
                                                "start": 1210,
                                                "end": 1216,
                                                "loc": {
                                                    "start": {"line": 50, "column": 28},
                                                    "end": {"line": 50, "column": 34},
                                                    "identifierName": "param2"
                                                },
                                                "name": "param2"
                                            }],
                                            "body": {
                                                "type": "BlockStatement",
                                                "start": 1217,
                                                "end": 1338,
                                                "loc": {
                                                    "start": {"line": 50, "column": 35},
                                                    "end": {"line": 54, "column": 13}
                                                },
                                                "body": [{
                                                    "type": "ExpressionStatement",
                                                    "start": 1235,
                                                    "end": 1253,
                                                    "loc": {
                                                        "start": {"line": 51, "column": 16},
                                                        "end": {"line": 51, "column": 34}
                                                    },
                                                    "expression": {
                                                        "type": "AssignmentExpression",
                                                        "start": 1235,
                                                        "end": 1252,
                                                        "loc": {
                                                            "start": {"line": 51, "column": 16},
                                                            "end": {"line": 51, "column": 33}
                                                        },
                                                        "operator": "=",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "start": 1235,
                                                            "end": 1241,
                                                            "loc": {
                                                                "start": {"line": 51, "column": 16},
                                                                "end": {"line": 51, "column": 22},
                                                                "identifierName": "param1"
                                                            },
                                                            "name": "param1"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "start": 1244,
                                                            "end": 1252,
                                                            "loc": {
                                                                "start": {"line": 51, "column": 25},
                                                                "end": {"line": 51, "column": 33},
                                                                "identifierName": "mutiVar1"
                                                            },
                                                            "name": "mutiVar1"
                                                        }
                                                    }
                                                }, {
                                                    "type": "ExpressionStatement",
                                                    "start": 1270,
                                                    "end": 1291,
                                                    "loc": {
                                                        "start": {"line": 52, "column": 16},
                                                        "end": {"line": 52, "column": 37}
                                                    },
                                                    "expression": {
                                                        "type": "AssignmentExpression",
                                                        "start": 1270,
                                                        "end": 1290,
                                                        "loc": {
                                                            "start": {"line": 52, "column": 16},
                                                            "end": {"line": 52, "column": 36}
                                                        },
                                                        "operator": "=",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "start": 1270,
                                                            "end": 1276,
                                                            "loc": {
                                                                "start": {"line": 52, "column": 16},
                                                                "end": {"line": 52, "column": 22},
                                                                "identifierName": "param2"
                                                            },
                                                            "name": "param2"
                                                        },
                                                        "right": {
                                                            "type": "MemberExpression",
                                                            "start": 1279,
                                                            "end": 1290,
                                                            "loc": {
                                                                "start": {"line": 52, "column": 25},
                                                                "end": {"line": 52, "column": 36}
                                                            },
                                                            "object": {
                                                                "type": "Identifier",
                                                                "start": 1279,
                                                                "end": 1285,
                                                                "loc": {
                                                                    "start": {"line": 52, "column": 25},
                                                                    "end": {"line": 52, "column": 31},
                                                                    "identifierName": "$scope"
                                                                },
                                                                "name": "$scope"
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "start": 1286,
                                                                "end": 1290,
                                                                "loc": {
                                                                    "start": {"line": 52, "column": 32},
                                                                    "end": {"line": 52, "column": 36},
                                                                    "identifierName": "data"
                                                                },
                                                                "name": "data"
                                                            },
                                                            "computed": false
                                                        }
                                                    }
                                                }, {
                                                    "type": "ReturnStatement",
                                                    "start": 1308,
                                                    "end": 1324,
                                                    "loc": {
                                                        "start": {"line": 53, "column": 16},
                                                        "end": {"line": 53, "column": 32}
                                                    },
                                                    "argument": {
                                                        "type": "Identifier",
                                                        "start": 1315,
                                                        "end": 1323,
                                                        "loc": {
                                                            "start": {"line": 53, "column": 23},
                                                            "end": {"line": 53, "column": 31},
                                                            "identifierName": "mutiVar2"
                                                        },
                                                        "name": "mutiVar2"
                                                    }
                                                }],
                                                "directives": []
                                            }
                                        }, {
                                            "type": "ObjectMethod",
                                            "start": 1352,
                                            "end": 1437,
                                            "loc": {
                                                "start": {"line": 55, "column": 12},
                                                "end": {"line": 57, "column": 13}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1356,
                                                "end": 1361,
                                                "loc": {
                                                    "start": {"line": 55, "column": 16},
                                                    "end": {"line": 55, "column": 21},
                                                    "identifierName": "value"
                                                },
                                                "name": "value"
                                            },
                                            "kind": "get",
                                            "id": null,
                                            "generator": false,
                                            "expression": false,
                                            "async": false,
                                            "params": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "start": 1364,
                                                "end": 1437,
                                                "loc": {
                                                    "start": {"line": 55, "column": 24},
                                                    "end": {"line": 57, "column": 13}
                                                },
                                                "body": [{
                                                    "type": "ReturnStatement",
                                                    "start": 1382,
                                                    "end": 1423,
                                                    "loc": {
                                                        "start": {"line": 56, "column": 16},
                                                        "end": {"line": 56, "column": 57}
                                                    },
                                                    "argument": {
                                                        "type": "SequenceExpression",
                                                        "start": 1389,
                                                        "end": 1422,
                                                        "loc": {
                                                            "start": {"line": 56, "column": 23},
                                                            "end": {"line": 56, "column": 56}
                                                        },
                                                        "expressions": [{
                                                            "type": "Identifier",
                                                            "start": 1389,
                                                            "end": 1397,
                                                            "loc": {
                                                                "start": {"line": 56, "column": 23},
                                                                "end": {"line": 56, "column": 31},
                                                                "identifierName": "mutiVar2"
                                                            },
                                                            "name": "mutiVar2"
                                                        }, {
                                                            "type": "Identifier",
                                                            "start": 1398,
                                                            "end": 1406,
                                                            "loc": {
                                                                "start": {"line": 56, "column": 32},
                                                                "end": {"line": 56, "column": 40},
                                                                "identifierName": "mutiVar1"
                                                            },
                                                            "name": "mutiVar1"
                                                        }, {
                                                            "type": "MemberExpression",
                                                            "start": 1408,
                                                            "end": 1422,
                                                            "loc": {
                                                                "start": {"line": 56, "column": 42},
                                                                "end": {"line": 56, "column": 56}
                                                            },
                                                            "object": {
                                                                "type": "Identifier",
                                                                "start": 1408,
                                                                "end": 1417,
                                                                "loc": {
                                                                    "start": {"line": 56, "column": 42},
                                                                    "end": {"line": 56, "column": 51},
                                                                    "identifierName": "scopeData"
                                                                },
                                                                "name": "scopeData"
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "start": 1418,
                                                                "end": 1422,
                                                                "loc": {
                                                                    "start": {"line": 56, "column": 52},
                                                                    "end": {"line": 56, "column": 56},
                                                                    "identifierName": "data"
                                                                },
                                                                "name": "data"
                                                            },
                                                            "computed": false
                                                        }]
                                                    }
                                                }],
                                                "directives": []
                                            }
                                        }, {
                                            "type": "ObjectMethod",
                                            "start": 1451,
                                            "end": 1520,
                                            "loc": {
                                                "start": {"line": 58, "column": 12},
                                                "end": {"line": 60, "column": 13}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1455,
                                                "end": 1460,
                                                "loc": {
                                                    "start": {"line": 58, "column": 16},
                                                    "end": {"line": 58, "column": 21},
                                                    "identifierName": "value"
                                                },
                                                "name": "value"
                                            },
                                            "kind": "set",
                                            "id": null,
                                            "generator": false,
                                            "expression": false,
                                            "async": false,
                                            "params": [{
                                                "type": "Identifier",
                                                "start": 1461,
                                                "end": 1466,
                                                "loc": {
                                                    "start": {"line": 58, "column": 22},
                                                    "end": {"line": 58, "column": 27},
                                                    "identifierName": "value"
                                                },
                                                "name": "value"
                                            }],
                                            "body": {
                                                "type": "BlockStatement",
                                                "start": 1468,
                                                "end": 1520,
                                                "loc": {
                                                    "start": {"line": 58, "column": 29},
                                                    "end": {"line": 60, "column": 13}
                                                },
                                                "body": [{
                                                    "type": "ExpressionStatement",
                                                    "start": 1486,
                                                    "end": 1506,
                                                    "loc": {
                                                        "start": {"line": 59, "column": 16},
                                                        "end": {"line": 59, "column": 36}
                                                    },
                                                    "expression": {
                                                        "type": "AssignmentExpression",
                                                        "start": 1486,
                                                        "end": 1506,
                                                        "loc": {
                                                            "start": {"line": 59, "column": 16},
                                                            "end": {"line": 59, "column": 36}
                                                        },
                                                        "operator": "=",
                                                        "left": {
                                                            "type": "MemberExpression",
                                                            "start": 1486,
                                                            "end": 1498,
                                                            "loc": {
                                                                "start": {"line": 59, "column": 16},
                                                                "end": {"line": 59, "column": 28}
                                                            },
                                                            "object": {
                                                                "type": "ThisExpression",
                                                                "start": 1486,
                                                                "end": 1490,
                                                                "loc": {
                                                                    "start": {"line": 59, "column": 16},
                                                                    "end": {"line": 59, "column": 20}
                                                                }
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "start": 1491,
                                                                "end": 1498,
                                                                "loc": {
                                                                    "start": {"line": 59, "column": 21},
                                                                    "end": {"line": 59, "column": 28},
                                                                    "identifierName": "objVar1"
                                                                },
                                                                "name": "objVar1"
                                                            },
                                                            "computed": false
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "start": 1501,
                                                            "end": 1506,
                                                            "loc": {
                                                                "start": {"line": 59, "column": 31},
                                                                "end": {"line": 59, "column": 36},
                                                                "identifierName": "value"
                                                            },
                                                            "name": "value"
                                                        }
                                                    }
                                                }],
                                                "directives": []
                                            }
                                        }],
                                        "trailingComments": null
                                    },
                                    "trailingComments": null
                                }],
                                "kind": "var",
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "函数直接申明",
                                    "start": 1540,
                                    "end": 1548,
                                    "loc": {"start": {"line": 63, "column": 8}, "end": {"line": 63, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 1557,
                                "end": 2717,
                                "loc": {"start": {"line": 64, "column": 8}, "end": {"line": 98, "column": 9}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 1561,
                                    "end": 2717,
                                    "loc": {"start": {"line": 64, "column": 12}, "end": {"line": 98, "column": 9}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 1561,
                                        "end": 1570,
                                        "loc": {
                                            "start": {"line": 64, "column": 12},
                                            "end": {"line": 64, "column": 21},
                                            "identifierName": "singleFun"
                                        },
                                        "name": "singleFun",
                                        "leadingComments": null
                                    },
                                    "init": {
                                        "type": "FunctionExpression",
                                        "start": 1573,
                                        "end": 2717,
                                        "loc": {"start": {"line": 64, "column": 24}, "end": {"line": 98, "column": 9}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 1583,
                                            "end": 1589,
                                            "loc": {
                                                "start": {"line": 64, "column": 34},
                                                "end": {"line": 64, "column": 40},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 1591,
                                            "end": 2717,
                                            "loc": {
                                                "start": {"line": 64, "column": 42},
                                                "end": {"line": 98, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 1605,
                                                "end": 1625,
                                                "loc": {
                                                    "start": {"line": 65, "column": 12},
                                                    "end": {"line": 65, "column": 32}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 1605,
                                                    "end": 1624,
                                                    "loc": {
                                                        "start": {"line": 65, "column": 12},
                                                        "end": {"line": 65, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 1605,
                                                        "end": 1616,
                                                        "loc": {
                                                            "start": {"line": 65, "column": 12},
                                                            "end": {"line": 65, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 1605,
                                                            "end": 1612,
                                                            "loc": {
                                                                "start": {"line": 65, "column": 12},
                                                                "end": {"line": 65, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 1613,
                                                            "end": 1616,
                                                            "loc": {
                                                                "start": {"line": 65, "column": 20},
                                                                "end": {"line": 65, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 1617,
                                                        "end": 1623,
                                                        "loc": {
                                                            "start": {"line": 65, "column": 24},
                                                            "end": {"line": 65, "column": 30},
                                                            "identifierName": "param1"
                                                        },
                                                        "name": "param1"
                                                    }]
                                                },
                                                "trailingComments": [{
                                                    "type": "CommentLine",
                                                    "value": "对象",
                                                    "start": 1638,
                                                    "end": 1642,
                                                    "loc": {
                                                        "start": {"line": 66, "column": 12},
                                                        "end": {"line": 66, "column": 16}
                                                    }
                                                }]
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 1655,
                                                "end": 2706,
                                                "loc": {
                                                    "start": {"line": 67, "column": 12},
                                                    "end": {"line": 96, "column": 13}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 1659,
                                                    "end": 2706,
                                                    "loc": {
                                                        "start": {"line": 67, "column": 16},
                                                        "end": {"line": 96, "column": 13}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 1659,
                                                        "end": 1662,
                                                        "loc": {
                                                            "start": {"line": 67, "column": 16},
                                                            "end": {"line": 67, "column": 19},
                                                            "identifierName": "obj"
                                                        },
                                                        "name": "obj",
                                                        "leadingComments": null
                                                    },
                                                    "init": {
                                                        "type": "ObjectExpression",
                                                        "start": 1665,
                                                        "end": 2706,
                                                        "loc": {
                                                            "start": {"line": 67, "column": 22},
                                                            "end": {"line": 96, "column": 13}
                                                        },
                                                        "properties": [{
                                                            "type": "ObjectProperty",
                                                            "start": 1683,
                                                            "end": 1701,
                                                            "loc": {
                                                                "start": {"line": 68, "column": 16},
                                                                "end": {"line": 68, "column": 34}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1683,
                                                                "end": 1690,
                                                                "loc": {
                                                                    "start": {"line": 68, "column": 16},
                                                                    "end": {"line": 68, "column": 23},
                                                                    "identifierName": "objVar1"
                                                                },
                                                                "name": "objVar1"
                                                            },
                                                            "value": {
                                                                "type": "StringLiteral",
                                                                "start": 1692,
                                                                "end": 1701,
                                                                "loc": {
                                                                    "start": {"line": 68, "column": 25},
                                                                    "end": {"line": 68, "column": 34}
                                                                },
                                                                "extra": {"rawValue": "objVar1", "raw": "\"objVar1\""},
                                                                "value": "objVar1"
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 1719,
                                                            "end": 1801,
                                                            "loc": {
                                                                "start": {"line": 69, "column": 16},
                                                                "end": {"line": 71, "column": 17}
                                                            },
                                                            "method": true,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1719,
                                                                "end": 1726,
                                                                "loc": {
                                                                    "start": {"line": 69, "column": 16},
                                                                    "end": {"line": 69, "column": 23},
                                                                    "identifierName": "objFun1"
                                                                },
                                                                "name": "objFun1"
                                                            },
                                                            "kind": "method",
                                                            "id": null,
                                                            "generator": false,
                                                            "expression": false,
                                                            "async": false,
                                                            "params": [{
                                                                "type": "Identifier",
                                                                "start": 1727,
                                                                "end": 1733,
                                                                "loc": {
                                                                    "start": {"line": 69, "column": 24},
                                                                    "end": {"line": 69, "column": 30},
                                                                    "identifierName": "param1"
                                                                },
                                                                "name": "param1"
                                                            }, {
                                                                "type": "Identifier",
                                                                "start": 1735,
                                                                "end": 1741,
                                                                "loc": {
                                                                    "start": {"line": 69, "column": 32},
                                                                    "end": {"line": 69, "column": 38},
                                                                    "identifierName": "param2"
                                                                },
                                                                "name": "param2"
                                                            }],
                                                            "body": {
                                                                "type": "BlockStatement",
                                                                "start": 1742,
                                                                "end": 1801,
                                                                "loc": {
                                                                    "start": {"line": 69, "column": 39},
                                                                    "end": {"line": 71, "column": 17}
                                                                },
                                                                "body": [{
                                                                    "type": "ExpressionStatement",
                                                                    "start": 1764,
                                                                    "end": 1783,
                                                                    "loc": {
                                                                        "start": {"line": 70, "column": 20},
                                                                        "end": {"line": 70, "column": 39}
                                                                    },
                                                                    "expression": {
                                                                        "type": "CallExpression",
                                                                        "start": 1764,
                                                                        "end": 1783,
                                                                        "loc": {
                                                                            "start": {"line": 70, "column": 20},
                                                                            "end": {"line": 70, "column": 39}
                                                                        },
                                                                        "callee": {
                                                                            "type": "MemberExpression",
                                                                            "start": 1764,
                                                                            "end": 1775,
                                                                            "loc": {
                                                                                "start": {"line": 70, "column": 20},
                                                                                "end": {"line": 70, "column": 31}
                                                                            },
                                                                            "object": {
                                                                                "type": "Identifier",
                                                                                "start": 1764,
                                                                                "end": 1771,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 70,
                                                                                        "column": 20
                                                                                    },
                                                                                    "end": {"line": 70, "column": 27},
                                                                                    "identifierName": "console"
                                                                                },
                                                                                "name": "console"
                                                                            },
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "start": 1772,
                                                                                "end": 1775,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 70,
                                                                                        "column": 28
                                                                                    },
                                                                                    "end": {"line": 70, "column": 31},
                                                                                    "identifierName": "log"
                                                                                },
                                                                                "name": "log"
                                                                            },
                                                                            "computed": false
                                                                        },
                                                                        "arguments": [{
                                                                            "type": "Identifier",
                                                                            "start": 1776,
                                                                            "end": 1782,
                                                                            "loc": {
                                                                                "start": {"line": 70, "column": 32},
                                                                                "end": {"line": 70, "column": 38},
                                                                                "identifierName": "param1"
                                                                            },
                                                                            "name": "param1"
                                                                        }]
                                                                    }
                                                                }],
                                                                "directives": []
                                                            }
                                                        }, {
                                                            "type": "ObjectProperty",
                                                            "start": 1819,
                                                            "end": 2528,
                                                            "loc": {
                                                                "start": {"line": 72, "column": 16},
                                                                "end": {"line": 86, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1819,
                                                                "end": 1826,
                                                                "loc": {
                                                                    "start": {"line": 72, "column": 16},
                                                                    "end": {"line": 72, "column": 23},
                                                                    "identifierName": "objFun2"
                                                                },
                                                                "name": "objFun2"
                                                            },
                                                            "value": {
                                                                "type": "FunctionExpression",
                                                                "start": 1828,
                                                                "end": 2528,
                                                                "loc": {
                                                                    "start": {"line": 72, "column": 25},
                                                                    "end": {"line": 86, "column": 17}
                                                                },
                                                                "id": null,
                                                                "generator": false,
                                                                "expression": false,
                                                                "async": false,
                                                                "params": [{
                                                                    "type": "Identifier",
                                                                    "start": 1838,
                                                                    "end": 1844,
                                                                    "loc": {
                                                                        "start": {"line": 72, "column": 35},
                                                                        "end": {"line": 72, "column": 41},
                                                                        "identifierName": "param1"
                                                                    },
                                                                    "name": "param1"
                                                                }, {
                                                                    "type": "Identifier",
                                                                    "start": 1846,
                                                                    "end": 1852,
                                                                    "loc": {
                                                                        "start": {"line": 72, "column": 43},
                                                                        "end": {"line": 72, "column": 49},
                                                                        "identifierName": "param2"
                                                                    },
                                                                    "name": "param2"
                                                                }],
                                                                "body": {
                                                                    "type": "BlockStatement",
                                                                    "start": 1854,
                                                                    "end": 2528,
                                                                    "loc": {
                                                                        "start": {"line": 72, "column": 51},
                                                                        "end": {"line": 86, "column": 17}
                                                                    },
                                                                    "body": [{
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1876,
                                                                        "end": 1904,
                                                                        "loc": {
                                                                            "start": {"line": 73, "column": 20},
                                                                            "end": {"line": 73, "column": 48}
                                                                        },
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "start": 1876,
                                                                            "end": 1903,
                                                                            "loc": {
                                                                                "start": {"line": 73, "column": 20},
                                                                                "end": {"line": 73, "column": 47}
                                                                            },
                                                                            "callee": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1876,
                                                                                "end": 1887,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 73,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 73, "column": 31}
                                                                                },
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "start": 1876,
                                                                                    "end": 1883,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 73,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 73,
                                                                                            "column": 27
                                                                                        },
                                                                                        "identifierName": "console"
                                                                                    },
                                                                                    "name": "console"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 1884,
                                                                                    "end": 1887,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 73,
                                                                                            "column": 28
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 73,
                                                                                            "column": 31
                                                                                        },
                                                                                        "identifierName": "log"
                                                                                    },
                                                                                    "name": "log"
                                                                                },
                                                                                "computed": false
                                                                            },
                                                                            "arguments": [{
                                                                                "type": "Identifier",
                                                                                "start": 1888,
                                                                                "end": 1894,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 73,
                                                                                        "column": 32
                                                                                    },
                                                                                    "end": {"line": 73, "column": 38},
                                                                                    "identifierName": "param1"
                                                                                },
                                                                                "name": "param1"
                                                                            }, {
                                                                                "type": "Identifier",
                                                                                "start": 1896,
                                                                                "end": 1902,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 73,
                                                                                        "column": 40
                                                                                    },
                                                                                    "end": {"line": 73, "column": 46},
                                                                                    "identifierName": "param2"
                                                                                },
                                                                                "name": "param2"
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1925,
                                                                        "end": 1939,
                                                                        "loc": {
                                                                            "start": {"line": 74, "column": 20},
                                                                            "end": {"line": 74, "column": 34}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1925,
                                                                            "end": 1938,
                                                                            "loc": {
                                                                                "start": {"line": 74, "column": 20},
                                                                                "end": {"line": 74, "column": 33}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "Identifier",
                                                                                "start": 1925,
                                                                                "end": 1933,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 74,
                                                                                        "column": 20
                                                                                    },
                                                                                    "end": {"line": 74, "column": 28},
                                                                                    "identifierName": "mutiVar1"
                                                                                },
                                                                                "name": "mutiVar1"
                                                                            },
                                                                            "right": {
                                                                                "type": "NumericLiteral",
                                                                                "start": 1936,
                                                                                "end": 1938,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 74,
                                                                                        "column": 31
                                                                                    }, "end": {"line": 74, "column": 33}
                                                                                },
                                                                                "extra": {"rawValue": 12, "raw": "12"},
                                                                                "value": 12
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1960,
                                                                        "end": 1992,
                                                                        "loc": {
                                                                            "start": {"line": 75, "column": 20},
                                                                            "end": {"line": 75, "column": 52}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1960,
                                                                            "end": 1991,
                                                                            "loc": {
                                                                                "start": {"line": 75, "column": 20},
                                                                                "end": {"line": 75, "column": 51}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1960,
                                                                                "end": 1980,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 75,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 75, "column": 40}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1960,
                                                                                    "end": 1971,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 75,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 75,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1960,
                                                                                        "end": 1966,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 75,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 75,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1967,
                                                                                        "end": 1971,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 75,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 75,
                                                                                                "column": 31
                                                                                            },
                                                                                            "identifierName": "data"
                                                                                        },
                                                                                        "name": "data"
                                                                                    },
                                                                                    "computed": false
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 1972,
                                                                                    "end": 1980,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 75,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 75,
                                                                                            "column": 40
                                                                                        },
                                                                                        "identifierName": "newValue"
                                                                                    },
                                                                                    "name": "newValue"
                                                                                },
                                                                                "computed": false
                                                                            },
                                                                            "right": {
                                                                                "type": "Identifier",
                                                                                "start": 1983,
                                                                                "end": 1991,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 75,
                                                                                        "column": 43
                                                                                    },
                                                                                    "end": {"line": 75, "column": 51},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2013,
                                                                        "end": 2048,
                                                                        "loc": {
                                                                            "start": {"line": 76, "column": 20},
                                                                            "end": {"line": 76, "column": 55}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2013,
                                                                            "end": 2047,
                                                                            "loc": {
                                                                                "start": {"line": 76, "column": 20},
                                                                                "end": {"line": 76, "column": 54}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2013,
                                                                                "end": 2036,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 76,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 76, "column": 43}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2013,
                                                                                    "end": 2024,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 76,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 76,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2013,
                                                                                        "end": 2019,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 76,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 76,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2020,
                                                                                        "end": 2024,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 76,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 76,
                                                                                                "column": 31
                                                                                            },
                                                                                            "identifierName": "data"
                                                                                        },
                                                                                        "name": "data"
                                                                                    },
                                                                                    "computed": false
                                                                                },
                                                                                "property": {
                                                                                    "type": "StringLiteral",
                                                                                    "start": 2025,
                                                                                    "end": 2035,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 76,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 76,
                                                                                            "column": 42
                                                                                        }
                                                                                    },
                                                                                    "extra": {
                                                                                        "rawValue": "newValue",
                                                                                        "raw": "\"newValue\""
                                                                                    },
                                                                                    "value": "newValue"
                                                                                },
                                                                                "computed": true
                                                                            },
                                                                            "right": {
                                                                                "type": "Identifier",
                                                                                "start": 2039,
                                                                                "end": 2047,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 76,
                                                                                        "column": 46
                                                                                    },
                                                                                    "end": {"line": 76, "column": 54},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2069,
                                                                        "end": 2102,
                                                                        "loc": {
                                                                            "start": {"line": 77, "column": 20},
                                                                            "end": {"line": 77, "column": 53}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2069,
                                                                            "end": 2101,
                                                                            "loc": {
                                                                                "start": {"line": 77, "column": 20},
                                                                                "end": {"line": 77, "column": 52}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2069,
                                                                                "end": 2090,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 77,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 77, "column": 41}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2069,
                                                                                    "end": 2080,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 77,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 77,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2069,
                                                                                        "end": 2075,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 77,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 77,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2076,
                                                                                        "end": 2080,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 77,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 77,
                                                                                                "column": 31
                                                                                            },
                                                                                            "identifierName": "data"
                                                                                        },
                                                                                        "name": "data"
                                                                                    },
                                                                                    "computed": false
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2081,
                                                                                    "end": 2089,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 77,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 77,
                                                                                            "column": 40
                                                                                        },
                                                                                        "identifierName": "mutiVar3"
                                                                                    },
                                                                                    "name": "mutiVar3"
                                                                                },
                                                                                "computed": true
                                                                            },
                                                                            "right": {
                                                                                "type": "Identifier",
                                                                                "start": 2093,
                                                                                "end": 2101,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 77,
                                                                                        "column": 44
                                                                                    },
                                                                                    "end": {"line": 77, "column": 52},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2123,
                                                                        "end": 2170,
                                                                        "loc": {
                                                                            "start": {"line": 78, "column": 20},
                                                                            "end": {"line": 78, "column": 67}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2123,
                                                                            "end": 2169,
                                                                            "loc": {
                                                                                "start": {"line": 78, "column": 20},
                                                                                "end": {"line": 78, "column": 66}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2123,
                                                                                "end": 2158,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 78,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 78, "column": 55}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2123,
                                                                                    "end": 2134,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 78,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 78,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2123,
                                                                                        "end": 2129,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 78,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 78,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2130,
                                                                                        "end": 2134,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 78,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 78,
                                                                                                "column": 31
                                                                                            },
                                                                                            "identifierName": "data"
                                                                                        },
                                                                                        "name": "data"
                                                                                    },
                                                                                    "computed": false
                                                                                },
                                                                                "property": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2135,
                                                                                    "end": 2157,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 78,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 78,
                                                                                            "column": 54
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2135,
                                                                                        "end": 2143,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 78,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 78,
                                                                                                "column": 40
                                                                                            },
                                                                                            "identifierName": "mutiVar3"
                                                                                        },
                                                                                        "name": "mutiVar3"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2144,
                                                                                        "end": 2157,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 78,
                                                                                                "column": 41
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 78,
                                                                                                "column": 54
                                                                                            },
                                                                                            "identifierName": "mutiVar3Value"
                                                                                        },
                                                                                        "name": "mutiVar3Value"
                                                                                    },
                                                                                    "computed": false
                                                                                },
                                                                                "computed": true
                                                                            },
                                                                            "right": {
                                                                                "type": "Identifier",
                                                                                "start": 2161,
                                                                                "end": 2169,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 78,
                                                                                        "column": 58
                                                                                    },
                                                                                    "end": {"line": 78, "column": 66},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2191,
                                                                        "end": 2234,
                                                                        "loc": {
                                                                            "start": {"line": 79, "column": 20},
                                                                            "end": {"line": 79, "column": 63}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2191,
                                                                            "end": 2233,
                                                                            "loc": {
                                                                                "start": {"line": 79, "column": 20},
                                                                                "end": {"line": 79, "column": 62}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2191,
                                                                                "end": 2222,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 79,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 79, "column": 51}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2191,
                                                                                    "end": 2202,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 79,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 79,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2191,
                                                                                        "end": 2197,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 79,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 79,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2198,
                                                                                        "end": 2202,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 79,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 79,
                                                                                                "column": 31
                                                                                            },
                                                                                            "identifierName": "data"
                                                                                        },
                                                                                        "name": "data"
                                                                                    },
                                                                                    "computed": false
                                                                                },
                                                                                "property": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2203,
                                                                                    "end": 2221,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 79,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 79,
                                                                                            "column": 50
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2203,
                                                                                        "end": 2209,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 79,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 79,
                                                                                                "column": 38
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2210,
                                                                                        "end": 2221,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 79,
                                                                                                "column": 39
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 79,
                                                                                                "column": 50
                                                                                            },
                                                                                            "identifierName": "funScopeVar"
                                                                                        },
                                                                                        "name": "funScopeVar"
                                                                                    },
                                                                                    "computed": false
                                                                                },
                                                                                "computed": true
                                                                            },
                                                                            "right": {
                                                                                "type": "Identifier",
                                                                                "start": 2225,
                                                                                "end": 2233,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 79,
                                                                                        "column": 54
                                                                                    },
                                                                                    "end": {"line": 79, "column": 62},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2255,
                                                                        "end": 2289,
                                                                        "loc": {
                                                                            "start": {"line": 80, "column": 20},
                                                                            "end": {"line": 80, "column": 54}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2255,
                                                                            "end": 2288,
                                                                            "loc": {
                                                                                "start": {"line": 80, "column": 20},
                                                                                "end": {"line": 80, "column": 53}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2255,
                                                                                "end": 2275,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 80,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 80, "column": 40}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2255,
                                                                                    "end": 2266,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 80,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 80,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2255,
                                                                                        "end": 2261,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 80,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 80,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2262,
                                                                                        "end": 2266,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 80,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 80,
                                                                                                "column": 31
                                                                                            },
                                                                                            "identifierName": "data"
                                                                                        },
                                                                                        "name": "data"
                                                                                    },
                                                                                    "computed": false
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2267,
                                                                                    "end": 2275,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 80,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 80,
                                                                                            "column": 40
                                                                                        },
                                                                                        "identifierName": "newValue"
                                                                                    },
                                                                                    "name": "newValue"
                                                                                },
                                                                                "computed": false
                                                                            },
                                                                            "right": {
                                                                                "type": "StringLiteral",
                                                                                "start": 2278,
                                                                                "end": 2288,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 80,
                                                                                        "column": 43
                                                                                    }, "end": {"line": 80, "column": 53}
                                                                                },
                                                                                "extra": {
                                                                                    "rawValue": "newValue",
                                                                                    "raw": "\"newValue\""
                                                                                },
                                                                                "value": "newValue"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "VariableDeclaration",
                                                                        "start": 2310,
                                                                        "end": 2337,
                                                                        "loc": {
                                                                            "start": {"line": 81, "column": 20},
                                                                            "end": {"line": 81, "column": 47}
                                                                        },
                                                                        "declarations": [{
                                                                            "type": "VariableDeclarator",
                                                                            "start": 2314,
                                                                            "end": 2336,
                                                                            "loc": {
                                                                                "start": {"line": 81, "column": 24},
                                                                                "end": {"line": 81, "column": 46}
                                                                            },
                                                                            "id": {
                                                                                "type": "Identifier",
                                                                                "start": 2314,
                                                                                "end": 2326,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 81,
                                                                                        "column": 24
                                                                                    },
                                                                                    "end": {"line": 81, "column": 36},
                                                                                    "identifierName": "unKnownValue"
                                                                                },
                                                                                "name": "unKnownValue"
                                                                            },
                                                                            "init": {
                                                                                "type": "Identifier",
                                                                                "start": 2329,
                                                                                "end": 2336,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 81,
                                                                                        "column": 39
                                                                                    },
                                                                                    "end": {"line": 81, "column": 46},
                                                                                    "identifierName": "unKnown"
                                                                                },
                                                                                "name": "unKnown"
                                                                            }
                                                                        }],
                                                                        "kind": "var"
                                                                    }, {
                                                                        "type": "VariableDeclaration",
                                                                        "start": 2358,
                                                                        "end": 2393,
                                                                        "loc": {
                                                                            "start": {"line": 82, "column": 20},
                                                                            "end": {"line": 82, "column": 55}
                                                                        },
                                                                        "declarations": [{
                                                                            "type": "VariableDeclarator",
                                                                            "start": 2362,
                                                                            "end": 2392,
                                                                            "loc": {
                                                                                "start": {"line": 82, "column": 24},
                                                                                "end": {"line": 82, "column": 54}
                                                                            },
                                                                            "id": {
                                                                                "type": "Identifier",
                                                                                "start": 2362,
                                                                                "end": 2375,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 82,
                                                                                        "column": 24
                                                                                    },
                                                                                    "end": {"line": 82, "column": 37},
                                                                                    "identifierName": "unKnownValue1"
                                                                                },
                                                                                "name": "unKnownValue1"
                                                                            },
                                                                            "init": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2378,
                                                                                "end": 2392,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 82,
                                                                                        "column": 40
                                                                                    }, "end": {"line": 82, "column": 54}
                                                                                },
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2378,
                                                                                    "end": 2384,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 82,
                                                                                            "column": 40
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 82,
                                                                                            "column": 46
                                                                                        },
                                                                                        "identifierName": "$scope"
                                                                                    },
                                                                                    "name": "$scope"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2385,
                                                                                    "end": 2392,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 82,
                                                                                            "column": 47
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 82,
                                                                                            "column": 54
                                                                                        },
                                                                                        "identifierName": "unKnown"
                                                                                    },
                                                                                    "name": "unKnown"
                                                                                },
                                                                                "computed": false
                                                                            }
                                                                        }],
                                                                        "kind": "var"
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2414,
                                                                        "end": 2441,
                                                                        "loc": {
                                                                            "start": {"line": 83, "column": 20},
                                                                            "end": {"line": 83, "column": 47}
                                                                        },
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "start": 2414,
                                                                            "end": 2440,
                                                                            "loc": {
                                                                                "start": {"line": 83, "column": 20},
                                                                                "end": {"line": 83, "column": 46}
                                                                            },
                                                                            "callee": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2414,
                                                                                "end": 2438,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 83,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 83, "column": 44}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2414,
                                                                                    "end": 2428,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 83,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 83,
                                                                                            "column": 34
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "MemberExpression",
                                                                                        "start": 2414,
                                                                                        "end": 2425,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 83,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 83,
                                                                                                "column": 31
                                                                                            }
                                                                                        },
                                                                                        "object": {
                                                                                            "type": "Identifier",
                                                                                            "start": 2414,
                                                                                            "end": 2420,
                                                                                            "loc": {
                                                                                                "start": {
                                                                                                    "line": 83,
                                                                                                    "column": 20
                                                                                                },
                                                                                                "end": {
                                                                                                    "line": 83,
                                                                                                    "column": 26
                                                                                                },
                                                                                                "identifierName": "$scope"
                                                                                            },
                                                                                            "name": "$scope"
                                                                                        },
                                                                                        "property": {
                                                                                            "type": "Identifier",
                                                                                            "start": 2421,
                                                                                            "end": 2425,
                                                                                            "loc": {
                                                                                                "start": {
                                                                                                    "line": 83,
                                                                                                    "column": 27
                                                                                                },
                                                                                                "end": {
                                                                                                    "line": 83,
                                                                                                    "column": 31
                                                                                                },
                                                                                                "identifierName": "data"
                                                                                            },
                                                                                            "name": "data"
                                                                                        },
                                                                                        "computed": false
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2426,
                                                                                        "end": 2428,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 83,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 83,
                                                                                                "column": 34
                                                                                            },
                                                                                            "identifierName": "qq"
                                                                                        },
                                                                                        "name": "qq"
                                                                                    },
                                                                                    "computed": false
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2429,
                                                                                    "end": 2438,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 83,
                                                                                            "column": 35
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 83,
                                                                                            "column": 44
                                                                                        },
                                                                                        "identifierName": "scopeFun2"
                                                                                    },
                                                                                    "name": "scopeFun2"
                                                                                },
                                                                                "computed": false
                                                                            },
                                                                            "arguments": []
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2462,
                                                                        "end": 2480,
                                                                        "loc": {
                                                                            "start": {"line": 84, "column": 20},
                                                                            "end": {"line": 84, "column": 38}
                                                                        },
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "start": 2462,
                                                                            "end": 2479,
                                                                            "loc": {
                                                                                "start": {"line": 84, "column": 20},
                                                                                "end": {"line": 84, "column": 37}
                                                                            },
                                                                            "callee": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2462,
                                                                                "end": 2477,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 84,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 84, "column": 35}
                                                                                },
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2462,
                                                                                    "end": 2468,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 84,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 84,
                                                                                            "column": 26
                                                                                        },
                                                                                        "identifierName": "$scope"
                                                                                    },
                                                                                    "name": "$scope"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2469,
                                                                                    "end": 2477,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 84,
                                                                                            "column": 27
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 84,
                                                                                            "column": 35
                                                                                        },
                                                                                        "identifierName": "scopeFun"
                                                                                    },
                                                                                    "name": "scopeFun"
                                                                                },
                                                                                "computed": false
                                                                            },
                                                                            "arguments": []
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2501,
                                                                        "end": 2510,
                                                                        "loc": {
                                                                            "start": {"line": 85, "column": 20},
                                                                            "end": {"line": 85, "column": 29}
                                                                        },
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "start": 2501,
                                                                            "end": 2509,
                                                                            "loc": {
                                                                                "start": {"line": 85, "column": 20},
                                                                                "end": {"line": 85, "column": 28}
                                                                            },
                                                                            "callee": {
                                                                                "type": "Identifier",
                                                                                "start": 2501,
                                                                                "end": 2507,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 85,
                                                                                        "column": 20
                                                                                    },
                                                                                    "end": {"line": 85, "column": 26},
                                                                                    "identifierName": "decFun"
                                                                                },
                                                                                "name": "decFun"
                                                                            },
                                                                            "arguments": []
                                                                        }
                                                                    }],
                                                                    "directives": []
                                                                }
                                                            }
                                                        }, {
                                                            "type": "ObjectProperty",
                                                            "start": 2546,
                                                            "end": 2587,
                                                            "loc": {
                                                                "start": {"line": 87, "column": 16},
                                                                "end": {"line": 89, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 2546,
                                                                "end": 2553,
                                                                "loc": {
                                                                    "start": {"line": 87, "column": 16},
                                                                    "end": {"line": 87, "column": 23},
                                                                    "identifierName": "objFun3"
                                                                },
                                                                "name": "objFun3"
                                                            },
                                                            "value": {
                                                                "type": "ArrowFunctionExpression",
                                                                "start": 2555,
                                                                "end": 2587,
                                                                "loc": {
                                                                    "start": {"line": 87, "column": 25},
                                                                    "end": {"line": 89, "column": 17}
                                                                },
                                                                "id": null,
                                                                "generator": false,
                                                                "expression": false,
                                                                "async": false,
                                                                "params": [{
                                                                    "type": "Identifier",
                                                                    "start": 2556,
                                                                    "end": 2558,
                                                                    "loc": {
                                                                        "start": {"line": 87, "column": 26},
                                                                        "end": {"line": 87, "column": 28},
                                                                        "identifierName": "p1"
                                                                    },
                                                                    "name": "p1"
                                                                }, {
                                                                    "type": "Identifier",
                                                                    "start": 2560,
                                                                    "end": 2562,
                                                                    "loc": {
                                                                        "start": {"line": 87, "column": 30},
                                                                        "end": {"line": 87, "column": 32},
                                                                        "identifierName": "p2"
                                                                    },
                                                                    "name": "p2"
                                                                }],
                                                                "body": {
                                                                    "type": "BlockStatement",
                                                                    "start": 2567,
                                                                    "end": 2587,
                                                                    "loc": {
                                                                        "start": {"line": 87, "column": 37},
                                                                        "end": {"line": 89, "column": 17}
                                                                    },
                                                                    "body": [],
                                                                    "directives": []
                                                                }
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 2605,
                                                            "end": 2637,
                                                            "loc": {
                                                                "start": {"line": 90, "column": 16},
                                                                "end": {"line": 92, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 2609,
                                                                "end": 2614,
                                                                "loc": {
                                                                    "start": {"line": 90, "column": 20},
                                                                    "end": {"line": 90, "column": 25},
                                                                    "identifierName": "value"
                                                                },
                                                                "name": "value"
                                                            },
                                                            "kind": "get",
                                                            "id": null,
                                                            "generator": false,
                                                            "expression": false,
                                                            "async": false,
                                                            "params": [],
                                                            "body": {
                                                                "type": "BlockStatement",
                                                                "start": 2617,
                                                                "end": 2637,
                                                                "loc": {
                                                                    "start": {"line": 90, "column": 28},
                                                                    "end": {"line": 92, "column": 17}
                                                                },
                                                                "body": [],
                                                                "directives": []
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 2655,
                                                            "end": 2692,
                                                            "loc": {
                                                                "start": {"line": 93, "column": 16},
                                                                "end": {"line": 95, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 2659,
                                                                "end": 2664,
                                                                "loc": {
                                                                    "start": {"line": 93, "column": 20},
                                                                    "end": {"line": 93, "column": 25},
                                                                    "identifierName": "value"
                                                                },
                                                                "name": "value"
                                                            },
                                                            "kind": "set",
                                                            "id": null,
                                                            "generator": false,
                                                            "expression": false,
                                                            "async": false,
                                                            "params": [{
                                                                "type": "Identifier",
                                                                "start": 2665,
                                                                "end": 2670,
                                                                "loc": {
                                                                    "start": {"line": 93, "column": 26},
                                                                    "end": {"line": 93, "column": 31},
                                                                    "identifierName": "value"
                                                                },
                                                                "name": "value"
                                                            }],
                                                            "body": {
                                                                "type": "BlockStatement",
                                                                "start": 2672,
                                                                "end": 2692,
                                                                "loc": {
                                                                    "start": {"line": 93, "column": 33},
                                                                    "end": {"line": 95, "column": 17}
                                                                },
                                                                "body": [],
                                                                "directives": []
                                                            }
                                                        }]
                                                    },
                                                    "leadingComments": null
                                                }],
                                                "kind": "var",
                                                "leadingComments": [{
                                                    "type": "CommentLine",
                                                    "value": "对象",
                                                    "start": 1638,
                                                    "end": 1642,
                                                    "loc": {
                                                        "start": {"line": 66, "column": 12},
                                                        "end": {"line": 66, "column": 16}
                                                    }
                                                }]
                                            }],
                                            "directives": []
                                        }
                                    },
                                    "leadingComments": null
                                }],
                                "kind": "var",
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "函数直接申明",
                                    "start": 1540,
                                    "end": 1548,
                                    "loc": {"start": {"line": 63, "column": 8}, "end": {"line": 63, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 2727,
                                "end": 2757,
                                "loc": {"start": {"line": 100, "column": 8}, "end": {"line": 102, "column": 9}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 2731,
                                    "end": 2757,
                                    "loc": {"start": {"line": 100, "column": 12}, "end": {"line": 102, "column": 9}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 2731,
                                        "end": 2733,
                                        "loc": {
                                            "start": {"line": 100, "column": 12},
                                            "end": {"line": 100, "column": 14},
                                            "identifierName": "xx"
                                        },
                                        "name": "xx"
                                    },
                                    "init": {
                                        "type": "ArrowFunctionExpression",
                                        "start": 2737,
                                        "end": 2757,
                                        "loc": {
                                            "start": {"line": 100, "column": 18},
                                            "end": {"line": 102, "column": 9}
                                        },
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 2738,
                                            "end": 2739,
                                            "loc": {
                                                "start": {"line": 100, "column": 19},
                                                "end": {"line": 100, "column": 20},
                                                "identifierName": "a"
                                            },
                                            "name": "a"
                                        }, {
                                            "type": "Identifier",
                                            "start": 2740,
                                            "end": 2741,
                                            "loc": {
                                                "start": {"line": 100, "column": 21},
                                                "end": {"line": 100, "column": 22},
                                                "identifierName": "b"
                                            },
                                            "name": "b"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 2745,
                                            "end": 2757,
                                            "loc": {
                                                "start": {"line": 100, "column": 26},
                                                "end": {"line": 102, "column": 9}
                                            },
                                            "body": [],
                                            "directives": [],
                                            "leadingComments": null,
                                            "trailingComments": null
                                        },
                                        "trailingComments": null
                                    },
                                    "trailingComments": null
                                }],
                                "kind": "var",
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope函数初始化",
                                    "start": 2766,
                                    "end": 2778,
                                    "loc": {"start": {"line": 103, "column": 8}, "end": {"line": 103, "column": 20}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 2787,
                                "end": 2867,
                                "loc": {"start": {"line": 104, "column": 8}, "end": {"line": 106, "column": 10}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2787,
                                    "end": 2866,
                                    "loc": {"start": {"line": 104, "column": 8}, "end": {"line": 106, "column": 9}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 2787,
                                        "end": 2802,
                                        "loc": {
                                            "start": {"line": 104, "column": 8},
                                            "end": {"line": 104, "column": 23}
                                        },
                                        "object": {
                                            "type": "Identifier",
                                            "start": 2787,
                                            "end": 2793,
                                            "loc": {
                                                "start": {"line": 104, "column": 8},
                                                "end": {"line": 104, "column": 14},
                                                "identifierName": "$scope"
                                            },
                                            "name": "$scope",
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 2794,
                                            "end": 2802,
                                            "loc": {
                                                "start": {"line": 104, "column": 15},
                                                "end": {"line": 104, "column": 23},
                                                "identifierName": "scopeFun"
                                            },
                                            "name": "scopeFun"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "FunctionExpression",
                                        "start": 2805,
                                        "end": 2866,
                                        "loc": {
                                            "start": {"line": 104, "column": 26},
                                            "end": {"line": 106, "column": 9}
                                        },
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 2815,
                                            "end": 2821,
                                            "loc": {
                                                "start": {"line": 104, "column": 36},
                                                "end": {"line": 104, "column": 42},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 2823,
                                            "end": 2866,
                                            "loc": {
                                                "start": {"line": 104, "column": 44},
                                                "end": {"line": 106, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 2837,
                                                "end": 2856,
                                                "loc": {
                                                    "start": {"line": 105, "column": 12},
                                                    "end": {"line": 105, "column": 31}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 2837,
                                                    "end": 2856,
                                                    "loc": {
                                                        "start": {"line": 105, "column": 12},
                                                        "end": {"line": 105, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 2837,
                                                        "end": 2848,
                                                        "loc": {
                                                            "start": {"line": 105, "column": 12},
                                                            "end": {"line": 105, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 2837,
                                                            "end": 2844,
                                                            "loc": {
                                                                "start": {"line": 105, "column": 12},
                                                                "end": {"line": 105, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 2845,
                                                            "end": 2848,
                                                            "loc": {
                                                                "start": {"line": 105, "column": 20},
                                                                "end": {"line": 105, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 2849,
                                                        "end": 2855,
                                                        "loc": {
                                                            "start": {"line": 105, "column": 24},
                                                            "end": {"line": 105, "column": 30},
                                                            "identifierName": "param1"
                                                        },
                                                        "name": "param1"
                                                    }]
                                                }
                                            }],
                                            "directives": []
                                        }
                                    },
                                    "leadingComments": null
                                },
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope函数初始化",
                                    "start": 2766,
                                    "end": 2778,
                                    "loc": {"start": {"line": 103, "column": 8}, "end": {"line": 103, "column": 20}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope多级初始化函数",
                                    "start": 2877,
                                    "end": 2891,
                                    "loc": {"start": {"line": 108, "column": 8}, "end": {"line": 108, "column": 22}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 2900,
                                "end": 3363,
                                "loc": {"start": {"line": 109, "column": 8}, "end": {"line": 126, "column": 10}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2900,
                                    "end": 3362,
                                    "loc": {"start": {"line": 109, "column": 8}, "end": {"line": 126, "column": 9}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 2900,
                                        "end": 2924,
                                        "loc": {
                                            "start": {"line": 109, "column": 8},
                                            "end": {"line": 109, "column": 32}
                                        },
                                        "object": {
                                            "type": "MemberExpression",
                                            "start": 2900,
                                            "end": 2914,
                                            "loc": {
                                                "start": {"line": 109, "column": 8},
                                                "end": {"line": 109, "column": 22}
                                            },
                                            "object": {
                                                "type": "MemberExpression",
                                                "start": 2900,
                                                "end": 2911,
                                                "loc": {
                                                    "start": {"line": 109, "column": 8},
                                                    "end": {"line": 109, "column": 19}
                                                },
                                                "object": {
                                                    "type": "Identifier",
                                                    "start": 2900,
                                                    "end": 2906,
                                                    "loc": {
                                                        "start": {"line": 109, "column": 8},
                                                        "end": {"line": 109, "column": 14},
                                                        "identifierName": "$scope"
                                                    },
                                                    "name": "$scope",
                                                    "leadingComments": null
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "start": 2907,
                                                    "end": 2911,
                                                    "loc": {
                                                        "start": {"line": 109, "column": 15},
                                                        "end": {"line": 109, "column": 19},
                                                        "identifierName": "data"
                                                    },
                                                    "name": "data"
                                                },
                                                "computed": false,
                                                "leadingComments": null
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 2912,
                                                "end": 2914,
                                                "loc": {
                                                    "start": {"line": 109, "column": 20},
                                                    "end": {"line": 109, "column": 22},
                                                    "identifierName": "qq"
                                                },
                                                "name": "qq"
                                            },
                                            "computed": false,
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 2915,
                                            "end": 2924,
                                            "loc": {
                                                "start": {"line": 109, "column": 23},
                                                "end": {"line": 109, "column": 32},
                                                "identifierName": "scopeFun2"
                                            },
                                            "name": "scopeFun2"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "FunctionExpression",
                                        "start": 2927,
                                        "end": 3362,
                                        "loc": {
                                            "start": {"line": 109, "column": 35},
                                            "end": {"line": 126, "column": 9}
                                        },
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 2939,
                                            "end": 3362,
                                            "loc": {
                                                "start": {"line": 109, "column": 47},
                                                "end": {"line": 126, "column": 9}
                                            },
                                            "body": [{
                                                "type": "VariableDeclaration",
                                                "start": 2954,
                                                "end": 2977,
                                                "loc": {
                                                    "start": {"line": 111, "column": 12},
                                                    "end": {"line": 111, "column": 35}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 2958,
                                                    "end": 2976,
                                                    "loc": {
                                                        "start": {"line": 111, "column": 16},
                                                        "end": {"line": 111, "column": 34}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 2958,
                                                        "end": 2965,
                                                        "loc": {
                                                            "start": {"line": 111, "column": 16},
                                                            "end": {"line": 111, "column": 23},
                                                            "identifierName": "subFun2"
                                                        },
                                                        "name": "subFun2"
                                                    },
                                                    "init": {
                                                        "type": "Identifier",
                                                        "start": 2968,
                                                        "end": 2976,
                                                        "loc": {
                                                            "start": {"line": 111, "column": 26},
                                                            "end": {"line": 111, "column": 34},
                                                            "identifierName": "_subFun2"
                                                        },
                                                        "name": "_subFun2"
                                                    }
                                                }],
                                                "kind": "var"
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 2990,
                                                "end": 3047,
                                                "loc": {
                                                    "start": {"line": 112, "column": 12},
                                                    "end": {"line": 114, "column": 14}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 2994,
                                                    "end": 3046,
                                                    "loc": {
                                                        "start": {"line": 112, "column": 16},
                                                        "end": {"line": 114, "column": 13}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 2994,
                                                        "end": 3001,
                                                        "loc": {
                                                            "start": {"line": 112, "column": 16},
                                                            "end": {"line": 112, "column": 23},
                                                            "identifierName": "subFun1"
                                                        },
                                                        "name": "subFun1"
                                                    },
                                                    "init": {
                                                        "type": "FunctionExpression",
                                                        "start": 3004,
                                                        "end": 3046,
                                                        "loc": {
                                                            "start": {"line": 112, "column": 26},
                                                            "end": {"line": 114, "column": 13}
                                                        },
                                                        "id": null,
                                                        "generator": false,
                                                        "expression": false,
                                                        "async": false,
                                                        "params": [{
                                                            "type": "Identifier",
                                                            "start": 3014,
                                                            "end": 3020,
                                                            "loc": {
                                                                "start": {"line": 112, "column": 36},
                                                                "end": {"line": 112, "column": 42},
                                                                "identifierName": "param1"
                                                            },
                                                            "name": "param1"
                                                        }, {
                                                            "type": "Identifier",
                                                            "start": 3022,
                                                            "end": 3028,
                                                            "loc": {
                                                                "start": {"line": 112, "column": 44},
                                                                "end": {"line": 112, "column": 50},
                                                                "identifierName": "param2"
                                                            },
                                                            "name": "param2"
                                                        }],
                                                        "body": {
                                                            "type": "BlockStatement",
                                                            "start": 3030,
                                                            "end": 3046,
                                                            "loc": {
                                                                "start": {"line": 112, "column": 52},
                                                                "end": {"line": 114, "column": 13}
                                                            },
                                                            "body": [],
                                                            "directives": []
                                                        }
                                                    }
                                                }],
                                                "kind": "var"
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 3060,
                                                "end": 3085,
                                                "loc": {
                                                    "start": {"line": 115, "column": 12},
                                                    "end": {"line": 115, "column": 37}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 3060,
                                                    "end": 3084,
                                                    "loc": {
                                                        "start": {"line": 115, "column": 12},
                                                        "end": {"line": 115, "column": 36}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 3060,
                                                        "end": 3067,
                                                        "loc": {
                                                            "start": {"line": 115, "column": 12},
                                                            "end": {"line": 115, "column": 19},
                                                            "identifierName": "subFun2"
                                                        },
                                                        "name": "subFun2"
                                                    },
                                                    "arguments": [{
                                                        "type": "MemberExpression",
                                                        "start": 3068,
                                                        "end": 3083,
                                                        "loc": {
                                                            "start": {"line": 115, "column": 20},
                                                            "end": {"line": 115, "column": 35}
                                                        },
                                                        "object": {
                                                            "type": "CallExpression",
                                                            "start": 3068,
                                                            "end": 3077,
                                                            "loc": {
                                                                "start": {"line": 115, "column": 20},
                                                                "end": {"line": 115, "column": 29}
                                                            },
                                                            "callee": {
                                                                "type": "Identifier",
                                                                "start": 3068,
                                                                "end": 3075,
                                                                "loc": {
                                                                    "start": {"line": 115, "column": 20},
                                                                    "end": {"line": 115, "column": 27},
                                                                    "identifierName": "subFun1"
                                                                },
                                                                "name": "subFun1"
                                                            },
                                                            "arguments": []
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3078,
                                                            "end": 3083,
                                                            "loc": {
                                                                "start": {"line": 115, "column": 30},
                                                                "end": {"line": 115, "column": 35},
                                                                "identifierName": "value"
                                                            },
                                                            "name": "value"
                                                        },
                                                        "computed": false
                                                    }]
                                                }
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 3098,
                                                "end": 3130,
                                                "loc": {
                                                    "start": {"line": 116, "column": 12},
                                                    "end": {"line": 116, "column": 44}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 3098,
                                                    "end": 3129,
                                                    "loc": {
                                                        "start": {"line": 116, "column": 12},
                                                        "end": {"line": 116, "column": 43}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 3098,
                                                        "end": 3105,
                                                        "loc": {
                                                            "start": {"line": 116, "column": 12},
                                                            "end": {"line": 116, "column": 19},
                                                            "identifierName": "subFun1"
                                                        },
                                                        "name": "subFun1"
                                                    },
                                                    "arguments": [{
                                                        "type": "MemberExpression",
                                                        "start": 3106,
                                                        "end": 3128,
                                                        "loc": {
                                                            "start": {"line": 116, "column": 20},
                                                            "end": {"line": 116, "column": 42}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3106,
                                                            "end": 3114,
                                                            "loc": {
                                                                "start": {"line": 116, "column": 20},
                                                                "end": {"line": 116, "column": 28},
                                                                "identifierName": "mutiVar3"
                                                            },
                                                            "name": "mutiVar3"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3115,
                                                            "end": 3128,
                                                            "loc": {
                                                                "start": {"line": 116, "column": 29},
                                                                "end": {"line": 116, "column": 42},
                                                                "identifierName": "mutiVar3Value"
                                                            },
                                                            "name": "mutiVar3Value"
                                                        },
                                                        "computed": false
                                                    }]
                                                }
                                            }, {
                                                "type": "FunctionDeclaration",
                                                "start": 3143,
                                                "end": 3193,
                                                "loc": {
                                                    "start": {"line": 117, "column": 12},
                                                    "end": {"line": 119, "column": 13}
                                                },
                                                "id": {
                                                    "type": "Identifier",
                                                    "start": 3152,
                                                    "end": 3160,
                                                    "loc": {
                                                        "start": {"line": 117, "column": 21},
                                                        "end": {"line": 117, "column": 29},
                                                        "identifierName": "_subFun2"
                                                    },
                                                    "name": "_subFun2"
                                                },
                                                "generator": false,
                                                "expression": false,
                                                "async": false,
                                                "params": [{
                                                    "type": "Identifier",
                                                    "start": 3161,
                                                    "end": 3167,
                                                    "loc": {
                                                        "start": {"line": 117, "column": 30},
                                                        "end": {"line": 117, "column": 36},
                                                        "identifierName": "param1"
                                                    },
                                                    "name": "param1"
                                                }, {
                                                    "type": "Identifier",
                                                    "start": 3169,
                                                    "end": 3175,
                                                    "loc": {
                                                        "start": {"line": 117, "column": 38},
                                                        "end": {"line": 117, "column": 44},
                                                        "identifierName": "param2"
                                                    },
                                                    "name": "param2"
                                                }],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "start": 3177,
                                                    "end": 3193,
                                                    "loc": {
                                                        "start": {"line": 117, "column": 46},
                                                        "end": {"line": 119, "column": 13}
                                                    },
                                                    "body": [],
                                                    "directives": []
                                                }
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 3207,
                                                "end": 3248,
                                                "loc": {
                                                    "start": {"line": 121, "column": 12},
                                                    "end": {"line": 121, "column": 53}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 3211,
                                                    "end": 3247,
                                                    "loc": {
                                                        "start": {"line": 121, "column": 16},
                                                        "end": {"line": 121, "column": 52}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 3211,
                                                        "end": 3222,
                                                        "loc": {
                                                            "start": {"line": 121, "column": 16},
                                                            "end": {"line": 121, "column": 27},
                                                            "identifierName": "fnMutiValue"
                                                        },
                                                        "name": "fnMutiValue"
                                                    },
                                                    "init": {
                                                        "type": "MemberExpression",
                                                        "start": 3225,
                                                        "end": 3247,
                                                        "loc": {
                                                            "start": {"line": 121, "column": 30},
                                                            "end": {"line": 121, "column": 52}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3225,
                                                            "end": 3233,
                                                            "loc": {
                                                                "start": {"line": 121, "column": 30},
                                                                "end": {"line": 121, "column": 38},
                                                                "identifierName": "mutiVar3"
                                                            },
                                                            "name": "mutiVar3"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3234,
                                                            "end": 3247,
                                                            "loc": {
                                                                "start": {"line": 121, "column": 39},
                                                                "end": {"line": 121, "column": 52},
                                                                "identifierName": "mutiVar3Value"
                                                            },
                                                            "name": "mutiVar3Value"
                                                        },
                                                        "computed": false
                                                    }
                                                }],
                                                "kind": "var"
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 3261,
                                                "end": 3287,
                                                "loc": {
                                                    "start": {"line": 122, "column": 12},
                                                    "end": {"line": 122, "column": 38}
                                                },
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "start": 3261,
                                                    "end": 3286,
                                                    "loc": {
                                                        "start": {"line": 122, "column": 12},
                                                        "end": {"line": 122, "column": 37}
                                                    },
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "MemberExpression",
                                                        "start": 3261,
                                                        "end": 3279,
                                                        "loc": {
                                                            "start": {"line": 122, "column": 12},
                                                            "end": {"line": 122, "column": 30}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3261,
                                                            "end": 3267,
                                                            "loc": {
                                                                "start": {"line": 122, "column": 12},
                                                                "end": {"line": 122, "column": 18},
                                                                "identifierName": "$scope"
                                                            },
                                                            "name": "$scope"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3268,
                                                            "end": 3279,
                                                            "loc": {
                                                                "start": {"line": 122, "column": 19},
                                                                "end": {"line": 122, "column": 30},
                                                                "identifierName": "funScopeVar"
                                                            },
                                                            "name": "funScopeVar"
                                                        },
                                                        "computed": false
                                                    },
                                                    "right": {
                                                        "type": "StringLiteral",
                                                        "start": 3282,
                                                        "end": 3286,
                                                        "loc": {
                                                            "start": {"line": 122, "column": 33},
                                                            "end": {"line": 122, "column": 37}
                                                        },
                                                        "extra": {"rawValue": "12", "raw": "\"12\""},
                                                        "value": "12"
                                                    }
                                                }
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 3300,
                                                "end": 3309,
                                                "loc": {
                                                    "start": {"line": 123, "column": 12},
                                                    "end": {"line": 123, "column": 21}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 3300,
                                                    "end": 3308,
                                                    "loc": {
                                                        "start": {"line": 123, "column": 12},
                                                        "end": {"line": 123, "column": 20}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 3300,
                                                        "end": 3306,
                                                        "loc": {
                                                            "start": {"line": 123, "column": 12},
                                                            "end": {"line": 123, "column": 18},
                                                            "identifierName": "decFun"
                                                        },
                                                        "name": "decFun"
                                                    },
                                                    "arguments": []
                                                }
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 3322,
                                                "end": 3351,
                                                "loc": {
                                                    "start": {"line": 124, "column": 12},
                                                    "end": {"line": 124, "column": 41}
                                                },
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "start": 3322,
                                                    "end": 3350,
                                                    "loc": {
                                                        "start": {"line": 124, "column": 12},
                                                        "end": {"line": 124, "column": 40}
                                                    },
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "MemberExpression",
                                                        "start": 3322,
                                                        "end": 3344,
                                                        "loc": {
                                                            "start": {"line": 124, "column": 12},
                                                            "end": {"line": 124, "column": 34}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3322,
                                                            "end": 3331,
                                                            "loc": {
                                                                "start": {"line": 124, "column": 12},
                                                                "end": {"line": 124, "column": 21},
                                                                "identifierName": "scopeData"
                                                            },
                                                            "name": "scopeData"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3332,
                                                            "end": 3344,
                                                            "loc": {
                                                                "start": {"line": 124, "column": 22},
                                                                "end": {"line": 124, "column": 34},
                                                                "identifierName": "funScopeVar1"
                                                            },
                                                            "name": "funScopeVar1"
                                                        },
                                                        "computed": false
                                                    },
                                                    "right": {
                                                        "type": "StringLiteral",
                                                        "start": 3347,
                                                        "end": 3350,
                                                        "loc": {
                                                            "start": {"line": 124, "column": 37},
                                                            "end": {"line": 124, "column": 40}
                                                        },
                                                        "extra": {"rawValue": "1", "raw": "\"1\""},
                                                        "value": "1"
                                                    }
                                                }
                                            }],
                                            "directives": []
                                        }
                                    },
                                    "leadingComments": null
                                },
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope多级初始化函数",
                                    "start": 2877,
                                    "end": 2891,
                                    "loc": {"start": {"line": 108, "column": 8}, "end": {"line": 108, "column": 22}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentBlock",
                                    "value": "*\n         * 表达式\n         ",
                                    "start": 3373,
                                    "end": 3403,
                                    "loc": {"start": {"line": 128, "column": 8}, "end": {"line": 130, "column": 11}}
                                }]
                            }, {
                                "type": "FunctionDeclaration",
                                "start": 3412,
                                "end": 3495,
                                "loc": {"start": {"line": 131, "column": 8}, "end": {"line": 133, "column": 9}},
                                "id": {
                                    "type": "Identifier",
                                    "start": 3421,
                                    "end": 3427,
                                    "loc": {
                                        "start": {"line": 131, "column": 17},
                                        "end": {"line": 131, "column": 23},
                                        "identifierName": "decFun"
                                    },
                                    "name": "decFun",
                                    "leadingComments": null
                                },
                                "generator": false,
                                "expression": false,
                                "async": false,
                                "params": [{
                                    "type": "Identifier",
                                    "start": 3428,
                                    "end": 3434,
                                    "loc": {
                                        "start": {"line": 131, "column": 24},
                                        "end": {"line": 131, "column": 30},
                                        "identifierName": "param1"
                                    },
                                    "name": "param1"
                                }, {
                                    "type": "Identifier",
                                    "start": 3436,
                                    "end": 3442,
                                    "loc": {
                                        "start": {"line": 131, "column": 32},
                                        "end": {"line": 131, "column": 38},
                                        "identifierName": "param2"
                                    },
                                    "name": "param2"
                                }],
                                "body": {
                                    "type": "BlockStatement",
                                    "start": 3444,
                                    "end": 3495,
                                    "loc": {"start": {"line": 131, "column": 40}, "end": {"line": 133, "column": 9}},
                                    "body": [{
                                        "type": "ExpressionStatement",
                                        "start": 3458,
                                        "end": 3485,
                                        "loc": {
                                            "start": {"line": 132, "column": 12},
                                            "end": {"line": 132, "column": 39}
                                        },
                                        "expression": {
                                            "type": "CallExpression",
                                            "start": 3458,
                                            "end": 3485,
                                            "loc": {
                                                "start": {"line": 132, "column": 12},
                                                "end": {"line": 132, "column": 39}
                                            },
                                            "callee": {
                                                "type": "MemberExpression",
                                                "start": 3458,
                                                "end": 3469,
                                                "loc": {
                                                    "start": {"line": 132, "column": 12},
                                                    "end": {"line": 132, "column": 23}
                                                },
                                                "object": {
                                                    "type": "Identifier",
                                                    "start": 3458,
                                                    "end": 3465,
                                                    "loc": {
                                                        "start": {"line": 132, "column": 12},
                                                        "end": {"line": 132, "column": 19},
                                                        "identifierName": "console"
                                                    },
                                                    "name": "console"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "start": 3466,
                                                    "end": 3469,
                                                    "loc": {
                                                        "start": {"line": 132, "column": 20},
                                                        "end": {"line": 132, "column": 23},
                                                        "identifierName": "log"
                                                    },
                                                    "name": "log"
                                                },
                                                "computed": false
                                            },
                                            "arguments": [{
                                                "type": "Identifier",
                                                "start": 3470,
                                                "end": 3476,
                                                "loc": {
                                                    "start": {"line": 132, "column": 24},
                                                    "end": {"line": 132, "column": 30},
                                                    "identifierName": "param1"
                                                },
                                                "name": "param1"
                                            }, {
                                                "type": "Identifier",
                                                "start": 3478,
                                                "end": 3484,
                                                "loc": {
                                                    "start": {"line": 132, "column": 32},
                                                    "end": {"line": 132, "column": 38},
                                                    "identifierName": "param2"
                                                },
                                                "name": "param2"
                                            }]
                                        }
                                    }],
                                    "directives": [],
                                    "trailingComments": null
                                },
                                "leadingComments": [{
                                    "type": "CommentBlock",
                                    "value": "*\n         * 表达式\n         ",
                                    "start": 3373,
                                    "end": 3403,
                                    "loc": {"start": {"line": 128, "column": 8}, "end": {"line": 130, "column": 11}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "直接调用",
                                    "start": 3505,
                                    "end": 3511,
                                    "loc": {"start": {"line": 135, "column": 8}, "end": {"line": 135, "column": 14}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 3520,
                                "end": 3530,
                                "loc": {"start": {"line": 136, "column": 8}, "end": {"line": 136, "column": 18}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 3520,
                                    "end": 3529,
                                    "loc": {"start": {"line": 136, "column": 8}, "end": {"line": 136, "column": 17}},
                                    "callee": {
                                        "type": "Identifier",
                                        "start": 3520,
                                        "end": 3527,
                                        "loc": {
                                            "start": {"line": 136, "column": 8},
                                            "end": {"line": 136, "column": 15},
                                            "identifierName": "mutiFun"
                                        },
                                        "name": "mutiFun",
                                        "leadingComments": null
                                    },
                                    "arguments": [],
                                    "leadingComments": null
                                },
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "直接调用",
                                    "start": 3505,
                                    "end": 3511,
                                    "loc": {"start": {"line": 135, "column": 8}, "end": {"line": 135, "column": 14}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "调用",
                                    "start": 3539,
                                    "end": 3543,
                                    "loc": {"start": {"line": 137, "column": 8}, "end": {"line": 137, "column": 12}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 3552,
                                "end": 3631,
                                "loc": {"start": {"line": 138, "column": 8}, "end": {"line": 140, "column": 11}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 3552,
                                    "end": 3630,
                                    "loc": {"start": {"line": 138, "column": 8}, "end": {"line": 140, "column": 10}},
                                    "callee": {
                                        "type": "MemberExpression",
                                        "start": 3552,
                                        "end": 3567,
                                        "loc": {
                                            "start": {"line": 138, "column": 8},
                                            "end": {"line": 138, "column": 23}
                                        },
                                        "object": {
                                            "type": "Identifier",
                                            "start": 3552,
                                            "end": 3558,
                                            "loc": {
                                                "start": {"line": 138, "column": 8},
                                                "end": {"line": 138, "column": 14},
                                                "identifierName": "$scope"
                                            },
                                            "name": "$scope",
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 3559,
                                            "end": 3567,
                                            "loc": {
                                                "start": {"line": 138, "column": 15},
                                                "end": {"line": 138, "column": 23},
                                                "identifierName": "scopeFun"
                                            },
                                            "name": "scopeFun"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "arguments": [{
                                        "type": "FunctionExpression",
                                        "start": 3568,
                                        "end": 3629,
                                        "loc": {
                                            "start": {"line": 138, "column": 24},
                                            "end": {"line": 140, "column": 9}
                                        },
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 3578,
                                            "end": 3584,
                                            "loc": {
                                                "start": {"line": 138, "column": 34},
                                                "end": {"line": 138, "column": 40},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 3586,
                                            "end": 3629,
                                            "loc": {
                                                "start": {"line": 138, "column": 42},
                                                "end": {"line": 140, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 3600,
                                                "end": 3619,
                                                "loc": {
                                                    "start": {"line": 139, "column": 12},
                                                    "end": {"line": 139, "column": 31}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 3600,
                                                    "end": 3619,
                                                    "loc": {
                                                        "start": {"line": 139, "column": 12},
                                                        "end": {"line": 139, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 3600,
                                                        "end": 3611,
                                                        "loc": {
                                                            "start": {"line": 139, "column": 12},
                                                            "end": {"line": 139, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3600,
                                                            "end": 3607,
                                                            "loc": {
                                                                "start": {"line": 139, "column": 12},
                                                                "end": {"line": 139, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3608,
                                                            "end": 3611,
                                                            "loc": {
                                                                "start": {"line": 139, "column": 20},
                                                                "end": {"line": 139, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 3612,
                                                        "end": 3618,
                                                        "loc": {
                                                            "start": {"line": 139, "column": 24},
                                                            "end": {"line": 139, "column": 30},
                                                            "identifierName": "param1"
                                                        },
                                                        "name": "param1"
                                                    }]
                                                }
                                            }],
                                            "directives": []
                                        }
                                    }],
                                    "leadingComments": null
                                },
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "调用",
                                    "start": 3539,
                                    "end": 3543,
                                    "loc": {"start": {"line": 137, "column": 8}, "end": {"line": 137, "column": 12}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": " this.scopeFun2();",
                                    "start": 3640,
                                    "end": 3660,
                                    "loc": {"start": {"line": 141, "column": 8}, "end": {"line": 141, "column": 28}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 3669,
                                "end": 3693,
                                "loc": {"start": {"line": 142, "column": 8}, "end": {"line": 142, "column": 32}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 3669,
                                    "end": 3692,
                                    "loc": {"start": {"line": 142, "column": 8}, "end": {"line": 142, "column": 31}},
                                    "callee": {
                                        "type": "MemberExpression",
                                        "start": 3669,
                                        "end": 3690,
                                        "loc": {
                                            "start": {"line": 142, "column": 8},
                                            "end": {"line": 142, "column": 29}
                                        },
                                        "object": {
                                            "type": "MemberExpression",
                                            "start": 3669,
                                            "end": 3680,
                                            "loc": {
                                                "start": {"line": 142, "column": 8},
                                                "end": {"line": 142, "column": 19}
                                            },
                                            "object": {
                                                "type": "Identifier",
                                                "start": 3669,
                                                "end": 3675,
                                                "loc": {
                                                    "start": {"line": 142, "column": 8},
                                                    "end": {"line": 142, "column": 14},
                                                    "identifierName": "$scope"
                                                },
                                                "name": "$scope",
                                                "leadingComments": null
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 3676,
                                                "end": 3680,
                                                "loc": {
                                                    "start": {"line": 142, "column": 15},
                                                    "end": {"line": 142, "column": 19},
                                                    "identifierName": "data"
                                                },
                                                "name": "data"
                                            },
                                            "computed": false,
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 3681,
                                            "end": 3690,
                                            "loc": {
                                                "start": {"line": 142, "column": 20},
                                                "end": {"line": 142, "column": 29},
                                                "identifierName": "scopeFun2"
                                            },
                                            "name": "scopeFun2"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "arguments": [],
                                    "leadingComments": null
                                },
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": " this.scopeFun2();",
                                    "start": 3640,
                                    "end": 3660,
                                    "loc": {"start": {"line": 141, "column": 8}, "end": {"line": 141, "column": 28}}
                                }]
                            }],
                            "directives": []
                        }
                    }]
                }],
                "leadingComments": null
            },
            "leadingComments": [{
                "type": "CommentBlock",
                "value": "*\n *\n * Created by allanxu on 15/5/24.\n *\n * 绑定信息设置\n *\n *\n ",
                "start": 0,
                "end": 63,
                "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 8, "column": 3}}
            }]
        }],
        "directives": []
    },
    "comments": [{
        "type": "CommentBlock",
        "value": "*\n *\n * Created by allanxu on 15/5/24.\n *\n * 绑定信息设置\n *\n *\n ",
        "start": 0,
        "end": 63,
        "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 8, "column": 3}}
    }, {
        "type": "CommentLine",
        "value": "scope变量初始化",
        "start": 159,
        "end": 171,
        "loc": {"start": {"line": 13, "column": 8}, "end": {"line": 13, "column": 20}}
    }, {
        "type": "CommentLine",
        "value": "commment",
        "start": 197,
        "end": 207,
        "loc": {"start": {"line": 14, "column": 25}, "end": {"line": 14, "column": 35}}
    }, {
        "type": "CommentLine",
        "value": "多级变量申明",
        "start": 216,
        "end": 224,
        "loc": {"start": {"line": 15, "column": 8}, "end": {"line": 15, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "this comment",
        "start": 311,
        "end": 325,
        "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 22}}
    }, {
        "type": "CommentLine",
        "value": "this comment1",
        "start": 352,
        "end": 367,
        "loc": {"start": {"line": 19, "column": 26}, "end": {"line": 19, "column": 41}}
    }, {
        "type": "CommentLine",
        "value": " this.test2 = function () {",
        "start": 408,
        "end": 437,
        "loc": {"start": {"line": 21, "column": 8}, "end": {"line": 21, "column": 37}}
    }, {
        "type": "CommentLine",
        "value": " }",
        "start": 447,
        "end": 451,
        "loc": {"start": {"line": 23, "column": 8}, "end": {"line": 23, "column": 12}}
    }, {
        "type": "CommentLine",
        "value": "变量赋值",
        "start": 460,
        "end": 466,
        "loc": {"start": {"line": 24, "column": 8}, "end": {"line": 24, "column": 14}}
    }, {
        "type": "CommentLine",
        "value": "单个变量申明",
        "start": 527,
        "end": 535,
        "loc": {"start": {"line": 26, "column": 8}, "end": {"line": 26, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "多个变量申明， 包括函数",
        "start": 591,
        "end": 605,
        "loc": {"start": {"line": 28, "column": 8}, "end": {"line": 28, "column": 22}}
    }, {
        "type": "CommentLine",
        "value": "函数直接申明",
        "start": 1540,
        "end": 1548,
        "loc": {"start": {"line": 63, "column": 8}, "end": {"line": 63, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "对象",
        "start": 1638,
        "end": 1642,
        "loc": {"start": {"line": 66, "column": 12}, "end": {"line": 66, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "scope函数初始化",
        "start": 2766,
        "end": 2778,
        "loc": {"start": {"line": 103, "column": 8}, "end": {"line": 103, "column": 20}}
    }, {
        "type": "CommentLine",
        "value": "scope多级初始化函数",
        "start": 2877,
        "end": 2891,
        "loc": {"start": {"line": 108, "column": 8}, "end": {"line": 108, "column": 22}}
    }, {
        "type": "CommentBlock",
        "value": "*\n         * 表达式\n         ",
        "start": 3373,
        "end": 3403,
        "loc": {"start": {"line": 128, "column": 8}, "end": {"line": 130, "column": 11}}
    }, {
        "type": "CommentLine",
        "value": "直接调用",
        "start": 3505,
        "end": 3511,
        "loc": {"start": {"line": 135, "column": 8}, "end": {"line": 135, "column": 14}}
    }, {
        "type": "CommentLine",
        "value": "调用",
        "start": 3539,
        "end": 3543,
        "loc": {"start": {"line": 137, "column": 8}, "end": {"line": 137, "column": 12}}
    }, {
        "type": "CommentLine",
        "value": " this.scopeFun2();",
        "start": 3640,
        "end": 3660,
        "loc": {"start": {"line": 141, "column": 8}, "end": {"line": 141, "column": 28}}
    }],
    "tokens": [{
        "type": "CommentBlock",
        "value": "*\n *\n * Created by allanxu on 15/5/24.\n *\n * 绑定信息设置\n *\n *\n ",
        "start": 0,
        "end": 63,
        "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 8, "column": 3}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "app",
        "start": 65,
        "end": 68,
        "loc": {"start": {"line": 10, "column": 0}, "end": {"line": 10, "column": 3}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 68, "end": 69, "loc": {"start": {"line": 10, "column": 3}, "end": {"line": 10, "column": 4}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "controller",
        "start": 69,
        "end": 79,
        "loc": {"start": {"line": 10, "column": 4}, "end": {"line": 10, "column": 14}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 79, "end": 80, "loc": {"start": {"line": 10, "column": 14}, "end": {"line": 10, "column": 15}}
    }, {
        "type": {
            "label": "string",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "AboutController",
        "start": 80,
        "end": 97,
        "loc": {"start": {"line": 10, "column": 15}, "end": {"line": 10, "column": 32}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 97, "end": 98, "loc": {"start": {"line": 10, "column": 32}, "end": {"line": 10, "column": 33}}
    }, {
        "type": {
            "label": "[",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 99, "end": 100, "loc": {"start": {"line": 10, "column": 34}, "end": {"line": 10, "column": 35}}
    }, {
        "type": {
            "label": "string",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "$scope",
        "start": 100,
        "end": 108,
        "loc": {"start": {"line": 10, "column": 35}, "end": {"line": 10, "column": 43}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 108, "end": 109, "loc": {"start": {"line": 10, "column": 43}, "end": {"line": 10, "column": 44}}
    }, {
        "type": {
            "label": "string",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "cache",
        "start": 110,
        "end": 117,
        "loc": {"start": {"line": 10, "column": 45}, "end": {"line": 10, "column": 52}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 117, "end": 118, "loc": {"start": {"line": 10, "column": 52}, "end": {"line": 10, "column": 53}}
    }, {
        "type": {
            "label": "function",
            "keyword": "function",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "function",
        "start": 123,
        "end": 131,
        "loc": {"start": {"line": 11, "column": 4}, "end": {"line": 11, "column": 12}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 132, "end": 133, "loc": {"start": {"line": 11, "column": 13}, "end": {"line": 11, "column": 14}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 133,
        "end": 139,
        "loc": {"start": {"line": 11, "column": 14}, "end": {"line": 11, "column": 20}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 139, "end": 140, "loc": {"start": {"line": 11, "column": 20}, "end": {"line": 11, "column": 21}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "cache",
        "start": 141,
        "end": 146,
        "loc": {"start": {"line": 11, "column": 22}, "end": {"line": 11, "column": 27}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 146, "end": 147, "loc": {"start": {"line": 11, "column": 27}, "end": {"line": 11, "column": 28}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 148, "end": 149, "loc": {"start": {"line": 11, "column": 29}, "end": {"line": 11, "column": 30}}
    }, {
        "type": "CommentLine",
        "value": "scope变量初始化",
        "start": 159,
        "end": 171,
        "loc": {"start": {"line": 13, "column": 8}, "end": {"line": 13, "column": 20}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 180,
        "end": 186,
        "loc": {"start": {"line": 14, "column": 8}, "end": {"line": 14, "column": 14}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 186, "end": 187, "loc": {"start": {"line": 14, "column": 14}, "end": {"line": 14, "column": 15}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "data",
        "start": 187,
        "end": 191,
        "loc": {"start": {"line": 14, "column": 15}, "end": {"line": 14, "column": 19}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 192,
        "end": 193,
        "loc": {"start": {"line": 14, "column": 20}, "end": {"line": 14, "column": 21}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 194, "end": 195, "loc": {"start": {"line": 14, "column": 22}, "end": {"line": 14, "column": 23}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 195, "end": 196, "loc": {"start": {"line": 14, "column": 23}, "end": {"line": 14, "column": 24}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 196, "end": 197, "loc": {"start": {"line": 14, "column": 24}, "end": {"line": 14, "column": 25}}
    }, {
        "type": "CommentLine",
        "value": "commment",
        "start": 197,
        "end": 207,
        "loc": {"start": {"line": 14, "column": 25}, "end": {"line": 14, "column": 35}}
    }, {
        "type": "CommentLine",
        "value": "多级变量申明",
        "start": 216,
        "end": 224,
        "loc": {"start": {"line": 15, "column": 8}, "end": {"line": 15, "column": 16}}
    }, {
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 233,
        "end": 236,
        "loc": {"start": {"line": 16, "column": 8}, "end": {"line": 16, "column": 11}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "scopeData",
        "start": 237,
        "end": 246,
        "loc": {"start": {"line": 16, "column": 12}, "end": {"line": 16, "column": 21}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 247,
        "end": 248,
        "loc": {"start": {"line": 16, "column": 22}, "end": {"line": 16, "column": 23}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 249,
        "end": 255,
        "loc": {"start": {"line": 16, "column": 24}, "end": {"line": 16, "column": 30}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 255, "end": 256, "loc": {"start": {"line": 16, "column": 30}, "end": {"line": 16, "column": 31}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "data",
        "start": 256,
        "end": 260,
        "loc": {"start": {"line": 16, "column": 31}, "end": {"line": 16, "column": 35}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 261,
        "end": 262,
        "loc": {"start": {"line": 16, "column": 36}, "end": {"line": 16, "column": 37}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 263, "end": 264, "loc": {"start": {"line": 16, "column": 38}, "end": {"line": 16, "column": 39}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 264, "end": 265, "loc": {"start": {"line": 16, "column": 39}, "end": {"line": 16, "column": 40}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 265, "end": 266, "loc": {"start": {"line": 16, "column": 40}, "end": {"line": 16, "column": 41}}
    }, {
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 275,
        "end": 278,
        "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 11}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "scopeData2",
        "start": 279,
        "end": 289,
        "loc": {"start": {"line": 17, "column": 12}, "end": {"line": 17, "column": 22}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 290,
        "end": 291,
        "loc": {"start": {"line": 17, "column": 23}, "end": {"line": 17, "column": 24}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "scopeData",
        "start": 292,
        "end": 301,
        "loc": {"start": {"line": 17, "column": 25}, "end": {"line": 17, "column": 34}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 301, "end": 302, "loc": {"start": {"line": 17, "column": 34}, "end": {"line": 17, "column": 35}}
    }, {
        "type": "CommentLine",
        "value": "this comment",
        "start": 311,
        "end": 325,
        "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 22}}
    }, {
        "type": {
            "label": "this",
            "keyword": "this",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "this",
        "start": 334,
        "end": 338,
        "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 12}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 338, "end": 339, "loc": {"start": {"line": 19, "column": 12}, "end": {"line": 19, "column": 13}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "test1",
        "start": 339,
        "end": 344,
        "loc": {"start": {"line": 19, "column": 13}, "end": {"line": 19, "column": 18}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 345,
        "end": 346,
        "loc": {"start": {"line": 19, "column": 19}, "end": {"line": 19, "column": 20}}
    }, {
        "type": {
            "label": "string",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "12",
        "start": 347,
        "end": 351,
        "loc": {"start": {"line": 19, "column": 21}, "end": {"line": 19, "column": 25}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 351, "end": 352, "loc": {"start": {"line": 19, "column": 25}, "end": {"line": 19, "column": 26}}
    }, {
        "type": "CommentLine",
        "value": "this comment1",
        "start": 352,
        "end": 367,
        "loc": {"start": {"line": 19, "column": 26}, "end": {"line": 19, "column": 41}}
    }, {
        "type": {
            "label": "this",
            "keyword": "this",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "this",
        "start": 376,
        "end": 380,
        "loc": {"start": {"line": 20, "column": 8}, "end": {"line": 20, "column": 12}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 380, "end": 381, "loc": {"start": {"line": 20, "column": 12}, "end": {"line": 20, "column": 13}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "test1",
        "start": 381,
        "end": 386,
        "loc": {"start": {"line": 20, "column": 13}, "end": {"line": 20, "column": 18}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 387,
        "end": 388,
        "loc": {"start": {"line": 20, "column": 19}, "end": {"line": 20, "column": 20}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "undefined",
        "start": 389,
        "end": 398,
        "loc": {"start": {"line": 20, "column": 21}, "end": {"line": 20, "column": 30}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 398, "end": 399, "loc": {"start": {"line": 20, "column": 30}, "end": {"line": 20, "column": 31}}
    }, {
        "type": "CommentLine",
        "value": " this.test2 = function () {",
        "start": 408,
        "end": 437,
        "loc": {"start": {"line": 21, "column": 8}, "end": {"line": 21, "column": 37}}
    }, {
        "type": "CommentLine",
        "value": " }",
        "start": 447,
        "end": 451,
        "loc": {"start": {"line": 23, "column": 8}, "end": {"line": 23, "column": 12}}
    }, {
        "type": "CommentLine",
        "value": "变量赋值",
        "start": 460,
        "end": 466,
        "loc": {"start": {"line": 24, "column": 8}, "end": {"line": 24, "column": 14}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "scopeData",
        "start": 475,
        "end": 484,
        "loc": {"start": {"line": 25, "column": 8}, "end": {"line": 25, "column": 17}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 484, "end": 485, "loc": {"start": {"line": 25, "column": 17}, "end": {"line": 25, "column": 18}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "ccc",
        "start": 485,
        "end": 488,
        "loc": {"start": {"line": 25, "column": 18}, "end": {"line": 25, "column": 21}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 489,
        "end": 490,
        "loc": {"start": {"line": 25, "column": 22}, "end": {"line": 25, "column": 23}}
    }, {
        "type": {
            "label": "function",
            "keyword": "function",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "function",
        "start": 491,
        "end": 499,
        "loc": {"start": {"line": 25, "column": 24}, "end": {"line": 25, "column": 32}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 499, "end": 500, "loc": {"start": {"line": 25, "column": 32}, "end": {"line": 25, "column": 33}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 500, "end": 501, "loc": {"start": {"line": 25, "column": 33}, "end": {"line": 25, "column": 34}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 501, "end": 502, "loc": {"start": {"line": 25, "column": 34}, "end": {"line": 25, "column": 35}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 502, "end": 503, "loc": {"start": {"line": 25, "column": 35}, "end": {"line": 25, "column": 36}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 503, "end": 504, "loc": {"start": {"line": 25, "column": 36}, "end": {"line": 25, "column": 37}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "scopeData2",
        "start": 504,
        "end": 514,
        "loc": {"start": {"line": 25, "column": 37}, "end": {"line": 25, "column": 47}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 514,
        "end": 515,
        "loc": {"start": {"line": 25, "column": 47}, "end": {"line": 25, "column": 48}}
    }, {
        "type": {
            "label": "num",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": 12,
        "start": 515,
        "end": 517,
        "loc": {"start": {"line": 25, "column": 48}, "end": {"line": 25, "column": 50}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 517, "end": 518, "loc": {"start": {"line": 25, "column": 50}, "end": {"line": 25, "column": 51}}
    }, {
        "type": "CommentLine",
        "value": "单个变量申明",
        "start": 527,
        "end": 535,
        "loc": {"start": {"line": 26, "column": 8}, "end": {"line": 26, "column": 16}}
    }, {
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 544,
        "end": 547,
        "loc": {"start": {"line": 27, "column": 8}, "end": {"line": 27, "column": 11}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "singleVariable",
        "start": 548,
        "end": 562,
        "loc": {"start": {"line": 27, "column": 12}, "end": {"line": 27, "column": 26}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 563,
        "end": 564,
        "loc": {"start": {"line": 27, "column": 27}, "end": {"line": 27, "column": 28}}
    }, {
        "type": {
            "label": "string",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "singleVariable",
        "start": 565,
        "end": 581,
        "loc": {"start": {"line": 27, "column": 29}, "end": {"line": 27, "column": 45}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 581, "end": 582, "loc": {"start": {"line": 27, "column": 45}, "end": {"line": 27, "column": 46}}
    }, {
        "type": "CommentLine",
        "value": "多个变量申明， 包括函数",
        "start": 591,
        "end": 605,
        "loc": {"start": {"line": 28, "column": 8}, "end": {"line": 28, "column": 22}}
    }, {
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 614,
        "end": 617,
        "loc": {"start": {"line": 29, "column": 8}, "end": {"line": 29, "column": 11}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar1",
        "start": 618,
        "end": 626,
        "loc": {"start": {"line": 29, "column": 12}, "end": {"line": 29, "column": 20}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 626, "end": 627, "loc": {"start": {"line": 29, "column": 20}, "end": {"line": 29, "column": 21}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar2",
        "start": 640,
        "end": 648,
        "loc": {"start": {"line": 30, "column": 12}, "end": {"line": 30, "column": 20}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 649,
        "end": 650,
        "loc": {"start": {"line": 30, "column": 21}, "end": {"line": 30, "column": 22}}
    }, {
        "type": {
            "label": "null",
            "keyword": "null",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "null",
        "start": 651,
        "end": 655,
        "loc": {"start": {"line": 30, "column": 23}, "end": {"line": 30, "column": 27}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 655, "end": 656, "loc": {"start": {"line": 30, "column": 27}, "end": {"line": 30, "column": 28}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar3",
        "start": 669,
        "end": 677,
        "loc": {"start": {"line": 31, "column": 12}, "end": {"line": 31, "column": 20}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 678,
        "end": 679,
        "loc": {"start": {"line": 31, "column": 21}, "end": {"line": 31, "column": 22}}
    }, {
        "type": {
            "label": "string",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "mutiVar3",
        "start": 680,
        "end": 690,
        "loc": {"start": {"line": 31, "column": 23}, "end": {"line": 31, "column": 33}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 690, "end": 691, "loc": {"start": {"line": 31, "column": 33}, "end": {"line": 31, "column": 34}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiFun",
        "start": 704,
        "end": 711,
        "loc": {"start": {"line": 32, "column": 12}, "end": {"line": 32, "column": 19}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 712,
        "end": 713,
        "loc": {"start": {"line": 32, "column": 20}, "end": {"line": 32, "column": 21}}
    }, {
        "type": {
            "label": "function",
            "keyword": "function",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "function",
        "start": 714,
        "end": 722,
        "loc": {"start": {"line": 32, "column": 22}, "end": {"line": 32, "column": 30}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 723, "end": 724, "loc": {"start": {"line": 32, "column": 31}, "end": {"line": 32, "column": 32}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 724,
        "end": 730,
        "loc": {"start": {"line": 32, "column": 32}, "end": {"line": 32, "column": 38}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 730, "end": 731, "loc": {"start": {"line": 32, "column": 38}, "end": {"line": 32, "column": 39}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 732, "end": 733, "loc": {"start": {"line": 32, "column": 40}, "end": {"line": 32, "column": 41}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "console",
        "start": 750,
        "end": 757,
        "loc": {"start": {"line": 33, "column": 16}, "end": {"line": 33, "column": 23}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 757, "end": 758, "loc": {"start": {"line": 33, "column": 23}, "end": {"line": 33, "column": 24}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "log",
        "start": 758,
        "end": 761,
        "loc": {"start": {"line": 33, "column": 24}, "end": {"line": 33, "column": 27}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 761, "end": 762, "loc": {"start": {"line": 33, "column": 27}, "end": {"line": 33, "column": 28}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 762,
        "end": 768,
        "loc": {"start": {"line": 33, "column": 28}, "end": {"line": 33, "column": 34}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 768, "end": 769, "loc": {"start": {"line": 33, "column": 34}, "end": {"line": 33, "column": 35}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 782, "end": 783, "loc": {"start": {"line": 34, "column": 12}, "end": {"line": 34, "column": 13}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 783, "end": 784, "loc": {"start": {"line": 34, "column": 13}, "end": {"line": 34, "column": 14}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar4",
        "start": 797,
        "end": 805,
        "loc": {"start": {"line": 35, "column": 12}, "end": {"line": 35, "column": 20}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 806,
        "end": 807,
        "loc": {"start": {"line": 35, "column": 21}, "end": {"line": 35, "column": 22}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "scopeData",
        "start": 808,
        "end": 817,
        "loc": {"start": {"line": 35, "column": 23}, "end": {"line": 35, "column": 32}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 817, "end": 818, "loc": {"start": {"line": 35, "column": 32}, "end": {"line": 35, "column": 33}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar5",
        "start": 831,
        "end": 839,
        "loc": {"start": {"line": 36, "column": 12}, "end": {"line": 36, "column": 20}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 840,
        "end": 841,
        "loc": {"start": {"line": 36, "column": 21}, "end": {"line": 36, "column": 22}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "cache",
        "start": 842,
        "end": 847,
        "loc": {"start": {"line": 36, "column": 23}, "end": {"line": 36, "column": 28}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 847, "end": 848, "loc": {"start": {"line": 36, "column": 28}, "end": {"line": 36, "column": 29}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "getInfo",
        "start": 848,
        "end": 855,
        "loc": {"start": {"line": 36, "column": 29}, "end": {"line": 36, "column": 36}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 855, "end": 856, "loc": {"start": {"line": 36, "column": 36}, "end": {"line": 36, "column": 37}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 856, "end": 857, "loc": {"start": {"line": 36, "column": 37}, "end": {"line": 36, "column": 38}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 857, "end": 858, "loc": {"start": {"line": 36, "column": 38}, "end": {"line": 36, "column": 39}}
    }, {
        "type": {
            "label": "if",
            "keyword": "if",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "if",
        "start": 868,
        "end": 870,
        "loc": {"start": {"line": 38, "column": 8}, "end": {"line": 38, "column": 10}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 871, "end": 872, "loc": {"start": {"line": 38, "column": 11}, "end": {"line": 38, "column": 12}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar1",
        "start": 872,
        "end": 880,
        "loc": {"start": {"line": 38, "column": 12}, "end": {"line": 38, "column": 20}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 880, "end": 881, "loc": {"start": {"line": 38, "column": 20}, "end": {"line": 38, "column": 21}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 882, "end": 883, "loc": {"start": {"line": 38, "column": 22}, "end": {"line": 38, "column": 23}}
    }, {
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 896,
        "end": 899,
        "loc": {"start": {"line": 39, "column": 12}, "end": {"line": 39, "column": 15}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "ifVar1",
        "start": 900,
        "end": 906,
        "loc": {"start": {"line": 39, "column": 16}, "end": {"line": 39, "column": 22}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 907,
        "end": 908,
        "loc": {"start": {"line": 39, "column": 23}, "end": {"line": 39, "column": 24}}
    }, {
        "type": {
            "label": "num",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": 1,
        "start": 909,
        "end": 910,
        "loc": {"start": {"line": 39, "column": 25}, "end": {"line": 39, "column": 26}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 910, "end": 911, "loc": {"start": {"line": 39, "column": 26}, "end": {"line": 39, "column": 27}}
    }, {
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 924,
        "end": 927,
        "loc": {"start": {"line": 40, "column": 12}, "end": {"line": 40, "column": 15}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "ifVar2",
        "start": 928,
        "end": 934,
        "loc": {"start": {"line": 40, "column": 16}, "end": {"line": 40, "column": 22}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 935,
        "end": 936,
        "loc": {"start": {"line": 40, "column": 23}, "end": {"line": 40, "column": 24}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar2",
        "start": 937,
        "end": 945,
        "loc": {"start": {"line": 40, "column": 25}, "end": {"line": 40, "column": 33}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 945, "end": 946, "loc": {"start": {"line": 40, "column": 33}, "end": {"line": 40, "column": 34}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 955, "end": 956, "loc": {"start": {"line": 41, "column": 8}, "end": {"line": 41, "column": 9}}
    }, {
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 966,
        "end": 969,
        "loc": {"start": {"line": 43, "column": 8}, "end": {"line": 43, "column": 11}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "objVar",
        "start": 970,
        "end": 976,
        "loc": {"start": {"line": 43, "column": 12}, "end": {"line": 43, "column": 18}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 977,
        "end": 978,
        "loc": {"start": {"line": 43, "column": 19}, "end": {"line": 43, "column": 20}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 979, "end": 980, "loc": {"start": {"line": 43, "column": 21}, "end": {"line": 43, "column": 22}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "objVar1",
        "start": 993,
        "end": 1000,
        "loc": {"start": {"line": 44, "column": 12}, "end": {"line": 44, "column": 19}}
    }, {
        "type": {
            "label": ":",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1000, "end": 1001, "loc": {"start": {"line": 44, "column": 19}, "end": {"line": 44, "column": 20}}
    }, {
        "type": {
            "label": "string",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "objVar1",
        "start": 1002,
        "end": 1011,
        "loc": {"start": {"line": 44, "column": 21}, "end": {"line": 44, "column": 30}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1011, "end": 1012, "loc": {"start": {"line": 44, "column": 30}, "end": {"line": 44, "column": 31}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "objVar2",
        "start": 1025,
        "end": 1032,
        "loc": {"start": {"line": 45, "column": 12}, "end": {"line": 45, "column": 19}}
    }, {
        "type": {
            "label": ":",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1032, "end": 1033, "loc": {"start": {"line": 45, "column": 19}, "end": {"line": 45, "column": 20}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "scopeData",
        "start": 1034,
        "end": 1043,
        "loc": {"start": {"line": 45, "column": 21}, "end": {"line": 45, "column": 30}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1043, "end": 1044, "loc": {"start": {"line": 45, "column": 30}, "end": {"line": 45, "column": 31}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "objVar3",
        "start": 1057,
        "end": 1064,
        "loc": {"start": {"line": 46, "column": 12}, "end": {"line": 46, "column": 19}}
    }, {
        "type": {
            "label": ":",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1064, "end": 1065, "loc": {"start": {"line": 46, "column": 19}, "end": {"line": 46, "column": 20}}
    }, {
        "type": {
            "label": "function",
            "keyword": "function",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "function",
        "start": 1066,
        "end": 1074,
        "loc": {"start": {"line": 46, "column": 21}, "end": {"line": 46, "column": 29}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1075, "end": 1076, "loc": {"start": {"line": 46, "column": 30}, "end": {"line": 46, "column": 31}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 1076,
        "end": 1082,
        "loc": {"start": {"line": 46, "column": 31}, "end": {"line": 46, "column": 37}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1082, "end": 1083, "loc": {"start": {"line": 46, "column": 37}, "end": {"line": 46, "column": 38}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param2",
        "start": 1084,
        "end": 1090,
        "loc": {"start": {"line": 46, "column": 39}, "end": {"line": 46, "column": 45}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1090, "end": 1091, "loc": {"start": {"line": 46, "column": 45}, "end": {"line": 46, "column": 46}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1092, "end": 1093, "loc": {"start": {"line": 46, "column": 47}, "end": {"line": 46, "column": 48}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 1110,
        "end": 1116,
        "loc": {"start": {"line": 47, "column": 16}, "end": {"line": 47, "column": 22}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 1117,
        "end": 1118,
        "loc": {"start": {"line": 47, "column": 23}, "end": {"line": 47, "column": 24}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar1",
        "start": 1119,
        "end": 1127,
        "loc": {"start": {"line": 47, "column": 25}, "end": {"line": 47, "column": 33}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1127, "end": 1128, "loc": {"start": {"line": 47, "column": 33}, "end": {"line": 47, "column": 34}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param2",
        "start": 1145,
        "end": 1151,
        "loc": {"start": {"line": 48, "column": 16}, "end": {"line": 48, "column": 22}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 1152,
        "end": 1153,
        "loc": {"start": {"line": 48, "column": 23}, "end": {"line": 48, "column": 24}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 1154,
        "end": 1160,
        "loc": {"start": {"line": 48, "column": 25}, "end": {"line": 48, "column": 31}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1160, "end": 1161, "loc": {"start": {"line": 48, "column": 31}, "end": {"line": 48, "column": 32}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "data",
        "start": 1161,
        "end": 1165,
        "loc": {"start": {"line": 48, "column": 32}, "end": {"line": 48, "column": 36}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1165, "end": 1166, "loc": {"start": {"line": 48, "column": 36}, "end": {"line": 48, "column": 37}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1179, "end": 1180, "loc": {"start": {"line": 49, "column": 12}, "end": {"line": 49, "column": 13}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1180, "end": 1181, "loc": {"start": {"line": 49, "column": 13}, "end": {"line": 49, "column": 14}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "objVar4",
        "start": 1194,
        "end": 1201,
        "loc": {"start": {"line": 50, "column": 12}, "end": {"line": 50, "column": 19}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1201, "end": 1202, "loc": {"start": {"line": 50, "column": 19}, "end": {"line": 50, "column": 20}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 1202,
        "end": 1208,
        "loc": {"start": {"line": 50, "column": 20}, "end": {"line": 50, "column": 26}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1208, "end": 1209, "loc": {"start": {"line": 50, "column": 26}, "end": {"line": 50, "column": 27}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param2",
        "start": 1210,
        "end": 1216,
        "loc": {"start": {"line": 50, "column": 28}, "end": {"line": 50, "column": 34}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1216, "end": 1217, "loc": {"start": {"line": 50, "column": 34}, "end": {"line": 50, "column": 35}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1217, "end": 1218, "loc": {"start": {"line": 50, "column": 35}, "end": {"line": 50, "column": 36}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 1235,
        "end": 1241,
        "loc": {"start": {"line": 51, "column": 16}, "end": {"line": 51, "column": 22}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 1242,
        "end": 1243,
        "loc": {"start": {"line": 51, "column": 23}, "end": {"line": 51, "column": 24}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar1",
        "start": 1244,
        "end": 1252,
        "loc": {"start": {"line": 51, "column": 25}, "end": {"line": 51, "column": 33}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1252, "end": 1253, "loc": {"start": {"line": 51, "column": 33}, "end": {"line": 51, "column": 34}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param2",
        "start": 1270,
        "end": 1276,
        "loc": {"start": {"line": 52, "column": 16}, "end": {"line": 52, "column": 22}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 1277,
        "end": 1278,
        "loc": {"start": {"line": 52, "column": 23}, "end": {"line": 52, "column": 24}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 1279,
        "end": 1285,
        "loc": {"start": {"line": 52, "column": 25}, "end": {"line": 52, "column": 31}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1285, "end": 1286, "loc": {"start": {"line": 52, "column": 31}, "end": {"line": 52, "column": 32}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "data",
        "start": 1286,
        "end": 1290,
        "loc": {"start": {"line": 52, "column": 32}, "end": {"line": 52, "column": 36}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1290, "end": 1291, "loc": {"start": {"line": 52, "column": 36}, "end": {"line": 52, "column": 37}}
    }, {
        "type": {
            "label": "return",
            "keyword": "return",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "return",
        "start": 1308,
        "end": 1314,
        "loc": {"start": {"line": 53, "column": 16}, "end": {"line": 53, "column": 22}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar2",
        "start": 1315,
        "end": 1323,
        "loc": {"start": {"line": 53, "column": 23}, "end": {"line": 53, "column": 31}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1323, "end": 1324, "loc": {"start": {"line": 53, "column": 31}, "end": {"line": 53, "column": 32}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1337, "end": 1338, "loc": {"start": {"line": 54, "column": 12}, "end": {"line": 54, "column": 13}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1338, "end": 1339, "loc": {"start": {"line": 54, "column": 13}, "end": {"line": 54, "column": 14}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "get",
        "start": 1352,
        "end": 1355,
        "loc": {"start": {"line": 55, "column": 12}, "end": {"line": 55, "column": 15}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "value",
        "start": 1356,
        "end": 1361,
        "loc": {"start": {"line": 55, "column": 16}, "end": {"line": 55, "column": 21}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1361, "end": 1362, "loc": {"start": {"line": 55, "column": 21}, "end": {"line": 55, "column": 22}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1362, "end": 1363, "loc": {"start": {"line": 55, "column": 22}, "end": {"line": 55, "column": 23}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1364, "end": 1365, "loc": {"start": {"line": 55, "column": 24}, "end": {"line": 55, "column": 25}}
    }, {
        "type": {
            "label": "return",
            "keyword": "return",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "return",
        "start": 1382,
        "end": 1388,
        "loc": {"start": {"line": 56, "column": 16}, "end": {"line": 56, "column": 22}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar2",
        "start": 1389,
        "end": 1397,
        "loc": {"start": {"line": 56, "column": 23}, "end": {"line": 56, "column": 31}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1397, "end": 1398, "loc": {"start": {"line": 56, "column": 31}, "end": {"line": 56, "column": 32}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar1",
        "start": 1398,
        "end": 1406,
        "loc": {"start": {"line": 56, "column": 32}, "end": {"line": 56, "column": 40}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1406, "end": 1407, "loc": {"start": {"line": 56, "column": 40}, "end": {"line": 56, "column": 41}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "scopeData",
        "start": 1408,
        "end": 1417,
        "loc": {"start": {"line": 56, "column": 42}, "end": {"line": 56, "column": 51}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1417, "end": 1418, "loc": {"start": {"line": 56, "column": 51}, "end": {"line": 56, "column": 52}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "data",
        "start": 1418,
        "end": 1422,
        "loc": {"start": {"line": 56, "column": 52}, "end": {"line": 56, "column": 56}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1422, "end": 1423, "loc": {"start": {"line": 56, "column": 56}, "end": {"line": 56, "column": 57}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1436, "end": 1437, "loc": {"start": {"line": 57, "column": 12}, "end": {"line": 57, "column": 13}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1437, "end": 1438, "loc": {"start": {"line": 57, "column": 13}, "end": {"line": 57, "column": 14}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "set",
        "start": 1451,
        "end": 1454,
        "loc": {"start": {"line": 58, "column": 12}, "end": {"line": 58, "column": 15}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "value",
        "start": 1455,
        "end": 1460,
        "loc": {"start": {"line": 58, "column": 16}, "end": {"line": 58, "column": 21}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1460, "end": 1461, "loc": {"start": {"line": 58, "column": 21}, "end": {"line": 58, "column": 22}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "value",
        "start": 1461,
        "end": 1466,
        "loc": {"start": {"line": 58, "column": 22}, "end": {"line": 58, "column": 27}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1466, "end": 1467, "loc": {"start": {"line": 58, "column": 27}, "end": {"line": 58, "column": 28}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1468, "end": 1469, "loc": {"start": {"line": 58, "column": 29}, "end": {"line": 58, "column": 30}}
    }, {
        "type": {
            "label": "this",
            "keyword": "this",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "this",
        "start": 1486,
        "end": 1490,
        "loc": {"start": {"line": 59, "column": 16}, "end": {"line": 59, "column": 20}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1490, "end": 1491, "loc": {"start": {"line": 59, "column": 20}, "end": {"line": 59, "column": 21}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "objVar1",
        "start": 1491,
        "end": 1498,
        "loc": {"start": {"line": 59, "column": 21}, "end": {"line": 59, "column": 28}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 1499,
        "end": 1500,
        "loc": {"start": {"line": 59, "column": 29}, "end": {"line": 59, "column": 30}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "value",
        "start": 1501,
        "end": 1506,
        "loc": {"start": {"line": 59, "column": 31}, "end": {"line": 59, "column": 36}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1519, "end": 1520, "loc": {"start": {"line": 60, "column": 12}, "end": {"line": 60, "column": 13}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1529, "end": 1530, "loc": {"start": {"line": 61, "column": 8}, "end": {"line": 61, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "函数直接申明",
        "start": 1540,
        "end": 1548,
        "loc": {"start": {"line": 63, "column": 8}, "end": {"line": 63, "column": 16}}
    }, {
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 1557,
        "end": 1560,
        "loc": {"start": {"line": 64, "column": 8}, "end": {"line": 64, "column": 11}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "singleFun",
        "start": 1561,
        "end": 1570,
        "loc": {"start": {"line": 64, "column": 12}, "end": {"line": 64, "column": 21}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 1571,
        "end": 1572,
        "loc": {"start": {"line": 64, "column": 22}, "end": {"line": 64, "column": 23}}
    }, {
        "type": {
            "label": "function",
            "keyword": "function",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "function",
        "start": 1573,
        "end": 1581,
        "loc": {"start": {"line": 64, "column": 24}, "end": {"line": 64, "column": 32}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1582, "end": 1583, "loc": {"start": {"line": 64, "column": 33}, "end": {"line": 64, "column": 34}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 1583,
        "end": 1589,
        "loc": {"start": {"line": 64, "column": 34}, "end": {"line": 64, "column": 40}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1589, "end": 1590, "loc": {"start": {"line": 64, "column": 40}, "end": {"line": 64, "column": 41}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1591, "end": 1592, "loc": {"start": {"line": 64, "column": 42}, "end": {"line": 64, "column": 43}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "console",
        "start": 1605,
        "end": 1612,
        "loc": {"start": {"line": 65, "column": 12}, "end": {"line": 65, "column": 19}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1612, "end": 1613, "loc": {"start": {"line": 65, "column": 19}, "end": {"line": 65, "column": 20}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "log",
        "start": 1613,
        "end": 1616,
        "loc": {"start": {"line": 65, "column": 20}, "end": {"line": 65, "column": 23}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1616, "end": 1617, "loc": {"start": {"line": 65, "column": 23}, "end": {"line": 65, "column": 24}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 1617,
        "end": 1623,
        "loc": {"start": {"line": 65, "column": 24}, "end": {"line": 65, "column": 30}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1623, "end": 1624, "loc": {"start": {"line": 65, "column": 30}, "end": {"line": 65, "column": 31}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1624, "end": 1625, "loc": {"start": {"line": 65, "column": 31}, "end": {"line": 65, "column": 32}}
    }, {
        "type": "CommentLine",
        "value": "对象",
        "start": 1638,
        "end": 1642,
        "loc": {"start": {"line": 66, "column": 12}, "end": {"line": 66, "column": 16}}
    }, {
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 1655,
        "end": 1658,
        "loc": {"start": {"line": 67, "column": 12}, "end": {"line": 67, "column": 15}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "obj",
        "start": 1659,
        "end": 1662,
        "loc": {"start": {"line": 67, "column": 16}, "end": {"line": 67, "column": 19}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 1663,
        "end": 1664,
        "loc": {"start": {"line": 67, "column": 20}, "end": {"line": 67, "column": 21}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1665, "end": 1666, "loc": {"start": {"line": 67, "column": 22}, "end": {"line": 67, "column": 23}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "objVar1",
        "start": 1683,
        "end": 1690,
        "loc": {"start": {"line": 68, "column": 16}, "end": {"line": 68, "column": 23}}
    }, {
        "type": {
            "label": ":",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1690, "end": 1691, "loc": {"start": {"line": 68, "column": 23}, "end": {"line": 68, "column": 24}}
    }, {
        "type": {
            "label": "string",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "objVar1",
        "start": 1692,
        "end": 1701,
        "loc": {"start": {"line": 68, "column": 25}, "end": {"line": 68, "column": 34}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1701, "end": 1702, "loc": {"start": {"line": 68, "column": 34}, "end": {"line": 68, "column": 35}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "objFun1",
        "start": 1719,
        "end": 1726,
        "loc": {"start": {"line": 69, "column": 16}, "end": {"line": 69, "column": 23}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1726, "end": 1727, "loc": {"start": {"line": 69, "column": 23}, "end": {"line": 69, "column": 24}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 1727,
        "end": 1733,
        "loc": {"start": {"line": 69, "column": 24}, "end": {"line": 69, "column": 30}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1733, "end": 1734, "loc": {"start": {"line": 69, "column": 30}, "end": {"line": 69, "column": 31}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param2",
        "start": 1735,
        "end": 1741,
        "loc": {"start": {"line": 69, "column": 32}, "end": {"line": 69, "column": 38}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1741, "end": 1742, "loc": {"start": {"line": 69, "column": 38}, "end": {"line": 69, "column": 39}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1742, "end": 1743, "loc": {"start": {"line": 69, "column": 39}, "end": {"line": 69, "column": 40}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "console",
        "start": 1764,
        "end": 1771,
        "loc": {"start": {"line": 70, "column": 20}, "end": {"line": 70, "column": 27}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1771, "end": 1772, "loc": {"start": {"line": 70, "column": 27}, "end": {"line": 70, "column": 28}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "log",
        "start": 1772,
        "end": 1775,
        "loc": {"start": {"line": 70, "column": 28}, "end": {"line": 70, "column": 31}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1775, "end": 1776, "loc": {"start": {"line": 70, "column": 31}, "end": {"line": 70, "column": 32}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 1776,
        "end": 1782,
        "loc": {"start": {"line": 70, "column": 32}, "end": {"line": 70, "column": 38}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1782, "end": 1783, "loc": {"start": {"line": 70, "column": 38}, "end": {"line": 70, "column": 39}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1800, "end": 1801, "loc": {"start": {"line": 71, "column": 16}, "end": {"line": 71, "column": 17}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1801, "end": 1802, "loc": {"start": {"line": 71, "column": 17}, "end": {"line": 71, "column": 18}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "objFun2",
        "start": 1819,
        "end": 1826,
        "loc": {"start": {"line": 72, "column": 16}, "end": {"line": 72, "column": 23}}
    }, {
        "type": {
            "label": ":",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1826, "end": 1827, "loc": {"start": {"line": 72, "column": 23}, "end": {"line": 72, "column": 24}}
    }, {
        "type": {
            "label": "function",
            "keyword": "function",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "function",
        "start": 1828,
        "end": 1836,
        "loc": {"start": {"line": 72, "column": 25}, "end": {"line": 72, "column": 33}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1837, "end": 1838, "loc": {"start": {"line": 72, "column": 34}, "end": {"line": 72, "column": 35}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 1838,
        "end": 1844,
        "loc": {"start": {"line": 72, "column": 35}, "end": {"line": 72, "column": 41}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1844, "end": 1845, "loc": {"start": {"line": 72, "column": 41}, "end": {"line": 72, "column": 42}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param2",
        "start": 1846,
        "end": 1852,
        "loc": {"start": {"line": 72, "column": 43}, "end": {"line": 72, "column": 49}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1852, "end": 1853, "loc": {"start": {"line": 72, "column": 49}, "end": {"line": 72, "column": 50}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1854, "end": 1855, "loc": {"start": {"line": 72, "column": 51}, "end": {"line": 72, "column": 52}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "console",
        "start": 1876,
        "end": 1883,
        "loc": {"start": {"line": 73, "column": 20}, "end": {"line": 73, "column": 27}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1883, "end": 1884, "loc": {"start": {"line": 73, "column": 27}, "end": {"line": 73, "column": 28}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "log",
        "start": 1884,
        "end": 1887,
        "loc": {"start": {"line": 73, "column": 28}, "end": {"line": 73, "column": 31}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1887, "end": 1888, "loc": {"start": {"line": 73, "column": 31}, "end": {"line": 73, "column": 32}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 1888,
        "end": 1894,
        "loc": {"start": {"line": 73, "column": 32}, "end": {"line": 73, "column": 38}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1894, "end": 1895, "loc": {"start": {"line": 73, "column": 38}, "end": {"line": 73, "column": 39}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param2",
        "start": 1896,
        "end": 1902,
        "loc": {"start": {"line": 73, "column": 40}, "end": {"line": 73, "column": 46}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 1902, "end": 1903, "loc": {"start": {"line": 73, "column": 46}, "end": {"line": 73, "column": 47}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1903, "end": 1904, "loc": {"start": {"line": 73, "column": 47}, "end": {"line": 73, "column": 48}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar1",
        "start": 1925,
        "end": 1933,
        "loc": {"start": {"line": 74, "column": 20}, "end": {"line": 74, "column": 28}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 1934,
        "end": 1935,
        "loc": {"start": {"line": 74, "column": 29}, "end": {"line": 74, "column": 30}}
    }, {
        "type": {
            "label": "num",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": 12,
        "start": 1936,
        "end": 1938,
        "loc": {"start": {"line": 74, "column": 31}, "end": {"line": 74, "column": 33}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1938, "end": 1939, "loc": {"start": {"line": 74, "column": 33}, "end": {"line": 74, "column": 34}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 1960,
        "end": 1966,
        "loc": {"start": {"line": 75, "column": 20}, "end": {"line": 75, "column": 26}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1966, "end": 1967, "loc": {"start": {"line": 75, "column": 26}, "end": {"line": 75, "column": 27}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "data",
        "start": 1967,
        "end": 1971,
        "loc": {"start": {"line": 75, "column": 27}, "end": {"line": 75, "column": 31}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1971, "end": 1972, "loc": {"start": {"line": 75, "column": 31}, "end": {"line": 75, "column": 32}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "newValue",
        "start": 1972,
        "end": 1980,
        "loc": {"start": {"line": 75, "column": 32}, "end": {"line": 75, "column": 40}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 1981,
        "end": 1982,
        "loc": {"start": {"line": 75, "column": 41}, "end": {"line": 75, "column": 42}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar3",
        "start": 1983,
        "end": 1991,
        "loc": {"start": {"line": 75, "column": 43}, "end": {"line": 75, "column": 51}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 1991, "end": 1992, "loc": {"start": {"line": 75, "column": 51}, "end": {"line": 75, "column": 52}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 2013,
        "end": 2019,
        "loc": {"start": {"line": 76, "column": 20}, "end": {"line": 76, "column": 26}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2019, "end": 2020, "loc": {"start": {"line": 76, "column": 26}, "end": {"line": 76, "column": 27}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "data",
        "start": 2020,
        "end": 2024,
        "loc": {"start": {"line": 76, "column": 27}, "end": {"line": 76, "column": 31}}
    }, {
        "type": {
            "label": "[",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2024, "end": 2025, "loc": {"start": {"line": 76, "column": 31}, "end": {"line": 76, "column": 32}}
    }, {
        "type": {
            "label": "string",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "newValue",
        "start": 2025,
        "end": 2035,
        "loc": {"start": {"line": 76, "column": 32}, "end": {"line": 76, "column": 42}}
    }, {
        "type": {
            "label": "]",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2035, "end": 2036, "loc": {"start": {"line": 76, "column": 42}, "end": {"line": 76, "column": 43}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 2037,
        "end": 2038,
        "loc": {"start": {"line": 76, "column": 44}, "end": {"line": 76, "column": 45}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar3",
        "start": 2039,
        "end": 2047,
        "loc": {"start": {"line": 76, "column": 46}, "end": {"line": 76, "column": 54}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2047, "end": 2048, "loc": {"start": {"line": 76, "column": 54}, "end": {"line": 76, "column": 55}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 2069,
        "end": 2075,
        "loc": {"start": {"line": 77, "column": 20}, "end": {"line": 77, "column": 26}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2075, "end": 2076, "loc": {"start": {"line": 77, "column": 26}, "end": {"line": 77, "column": 27}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "data",
        "start": 2076,
        "end": 2080,
        "loc": {"start": {"line": 77, "column": 27}, "end": {"line": 77, "column": 31}}
    }, {
        "type": {
            "label": "[",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2080, "end": 2081, "loc": {"start": {"line": 77, "column": 31}, "end": {"line": 77, "column": 32}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar3",
        "start": 2081,
        "end": 2089,
        "loc": {"start": {"line": 77, "column": 32}, "end": {"line": 77, "column": 40}}
    }, {
        "type": {
            "label": "]",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2089, "end": 2090, "loc": {"start": {"line": 77, "column": 40}, "end": {"line": 77, "column": 41}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 2091,
        "end": 2092,
        "loc": {"start": {"line": 77, "column": 42}, "end": {"line": 77, "column": 43}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar3",
        "start": 2093,
        "end": 2101,
        "loc": {"start": {"line": 77, "column": 44}, "end": {"line": 77, "column": 52}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2101, "end": 2102, "loc": {"start": {"line": 77, "column": 52}, "end": {"line": 77, "column": 53}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 2123,
        "end": 2129,
        "loc": {"start": {"line": 78, "column": 20}, "end": {"line": 78, "column": 26}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2129, "end": 2130, "loc": {"start": {"line": 78, "column": 26}, "end": {"line": 78, "column": 27}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "data",
        "start": 2130,
        "end": 2134,
        "loc": {"start": {"line": 78, "column": 27}, "end": {"line": 78, "column": 31}}
    }, {
        "type": {
            "label": "[",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2134, "end": 2135, "loc": {"start": {"line": 78, "column": 31}, "end": {"line": 78, "column": 32}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar3",
        "start": 2135,
        "end": 2143,
        "loc": {"start": {"line": 78, "column": 32}, "end": {"line": 78, "column": 40}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2143, "end": 2144, "loc": {"start": {"line": 78, "column": 40}, "end": {"line": 78, "column": 41}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar3Value",
        "start": 2144,
        "end": 2157,
        "loc": {"start": {"line": 78, "column": 41}, "end": {"line": 78, "column": 54}}
    }, {
        "type": {
            "label": "]",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2157, "end": 2158, "loc": {"start": {"line": 78, "column": 54}, "end": {"line": 78, "column": 55}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 2159,
        "end": 2160,
        "loc": {"start": {"line": 78, "column": 56}, "end": {"line": 78, "column": 57}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar3",
        "start": 2161,
        "end": 2169,
        "loc": {"start": {"line": 78, "column": 58}, "end": {"line": 78, "column": 66}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2169, "end": 2170, "loc": {"start": {"line": 78, "column": 66}, "end": {"line": 78, "column": 67}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 2191,
        "end": 2197,
        "loc": {"start": {"line": 79, "column": 20}, "end": {"line": 79, "column": 26}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2197, "end": 2198, "loc": {"start": {"line": 79, "column": 26}, "end": {"line": 79, "column": 27}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "data",
        "start": 2198,
        "end": 2202,
        "loc": {"start": {"line": 79, "column": 27}, "end": {"line": 79, "column": 31}}
    }, {
        "type": {
            "label": "[",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2202, "end": 2203, "loc": {"start": {"line": 79, "column": 31}, "end": {"line": 79, "column": 32}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 2203,
        "end": 2209,
        "loc": {"start": {"line": 79, "column": 32}, "end": {"line": 79, "column": 38}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2209, "end": 2210, "loc": {"start": {"line": 79, "column": 38}, "end": {"line": 79, "column": 39}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "funScopeVar",
        "start": 2210,
        "end": 2221,
        "loc": {"start": {"line": 79, "column": 39}, "end": {"line": 79, "column": 50}}
    }, {
        "type": {
            "label": "]",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2221, "end": 2222, "loc": {"start": {"line": 79, "column": 50}, "end": {"line": 79, "column": 51}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 2223,
        "end": 2224,
        "loc": {"start": {"line": 79, "column": 52}, "end": {"line": 79, "column": 53}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar3",
        "start": 2225,
        "end": 2233,
        "loc": {"start": {"line": 79, "column": 54}, "end": {"line": 79, "column": 62}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2233, "end": 2234, "loc": {"start": {"line": 79, "column": 62}, "end": {"line": 79, "column": 63}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 2255,
        "end": 2261,
        "loc": {"start": {"line": 80, "column": 20}, "end": {"line": 80, "column": 26}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2261, "end": 2262, "loc": {"start": {"line": 80, "column": 26}, "end": {"line": 80, "column": 27}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "data",
        "start": 2262,
        "end": 2266,
        "loc": {"start": {"line": 80, "column": 27}, "end": {"line": 80, "column": 31}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2266, "end": 2267, "loc": {"start": {"line": 80, "column": 31}, "end": {"line": 80, "column": 32}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "newValue",
        "start": 2267,
        "end": 2275,
        "loc": {"start": {"line": 80, "column": 32}, "end": {"line": 80, "column": 40}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 2276,
        "end": 2277,
        "loc": {"start": {"line": 80, "column": 41}, "end": {"line": 80, "column": 42}}
    }, {
        "type": {
            "label": "string",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "newValue",
        "start": 2278,
        "end": 2288,
        "loc": {"start": {"line": 80, "column": 43}, "end": {"line": 80, "column": 53}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2288, "end": 2289, "loc": {"start": {"line": 80, "column": 53}, "end": {"line": 80, "column": 54}}
    }, {
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 2310,
        "end": 2313,
        "loc": {"start": {"line": 81, "column": 20}, "end": {"line": 81, "column": 23}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "unKnownValue",
        "start": 2314,
        "end": 2326,
        "loc": {"start": {"line": 81, "column": 24}, "end": {"line": 81, "column": 36}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 2327,
        "end": 2328,
        "loc": {"start": {"line": 81, "column": 37}, "end": {"line": 81, "column": 38}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "unKnown",
        "start": 2329,
        "end": 2336,
        "loc": {"start": {"line": 81, "column": 39}, "end": {"line": 81, "column": 46}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2336, "end": 2337, "loc": {"start": {"line": 81, "column": 46}, "end": {"line": 81, "column": 47}}
    }, {
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 2358,
        "end": 2361,
        "loc": {"start": {"line": 82, "column": 20}, "end": {"line": 82, "column": 23}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "unKnownValue1",
        "start": 2362,
        "end": 2375,
        "loc": {"start": {"line": 82, "column": 24}, "end": {"line": 82, "column": 37}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 2376,
        "end": 2377,
        "loc": {"start": {"line": 82, "column": 38}, "end": {"line": 82, "column": 39}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 2378,
        "end": 2384,
        "loc": {"start": {"line": 82, "column": 40}, "end": {"line": 82, "column": 46}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2384, "end": 2385, "loc": {"start": {"line": 82, "column": 46}, "end": {"line": 82, "column": 47}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "unKnown",
        "start": 2385,
        "end": 2392,
        "loc": {"start": {"line": 82, "column": 47}, "end": {"line": 82, "column": 54}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2392, "end": 2393, "loc": {"start": {"line": 82, "column": 54}, "end": {"line": 82, "column": 55}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 2414,
        "end": 2420,
        "loc": {"start": {"line": 83, "column": 20}, "end": {"line": 83, "column": 26}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2420, "end": 2421, "loc": {"start": {"line": 83, "column": 26}, "end": {"line": 83, "column": 27}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "data",
        "start": 2421,
        "end": 2425,
        "loc": {"start": {"line": 83, "column": 27}, "end": {"line": 83, "column": 31}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2425, "end": 2426, "loc": {"start": {"line": 83, "column": 31}, "end": {"line": 83, "column": 32}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "qq",
        "start": 2426,
        "end": 2428,
        "loc": {"start": {"line": 83, "column": 32}, "end": {"line": 83, "column": 34}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2428, "end": 2429, "loc": {"start": {"line": 83, "column": 34}, "end": {"line": 83, "column": 35}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "scopeFun2",
        "start": 2429,
        "end": 2438,
        "loc": {"start": {"line": 83, "column": 35}, "end": {"line": 83, "column": 44}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2438, "end": 2439, "loc": {"start": {"line": 83, "column": 44}, "end": {"line": 83, "column": 45}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2439, "end": 2440, "loc": {"start": {"line": 83, "column": 45}, "end": {"line": 83, "column": 46}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2440, "end": 2441, "loc": {"start": {"line": 83, "column": 46}, "end": {"line": 83, "column": 47}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 2462,
        "end": 2468,
        "loc": {"start": {"line": 84, "column": 20}, "end": {"line": 84, "column": 26}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2468, "end": 2469, "loc": {"start": {"line": 84, "column": 26}, "end": {"line": 84, "column": 27}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "scopeFun",
        "start": 2469,
        "end": 2477,
        "loc": {"start": {"line": 84, "column": 27}, "end": {"line": 84, "column": 35}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2477, "end": 2478, "loc": {"start": {"line": 84, "column": 35}, "end": {"line": 84, "column": 36}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2478, "end": 2479, "loc": {"start": {"line": 84, "column": 36}, "end": {"line": 84, "column": 37}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2479, "end": 2480, "loc": {"start": {"line": 84, "column": 37}, "end": {"line": 84, "column": 38}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "decFun",
        "start": 2501,
        "end": 2507,
        "loc": {"start": {"line": 85, "column": 20}, "end": {"line": 85, "column": 26}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2507, "end": 2508, "loc": {"start": {"line": 85, "column": 26}, "end": {"line": 85, "column": 27}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2508, "end": 2509, "loc": {"start": {"line": 85, "column": 27}, "end": {"line": 85, "column": 28}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2509, "end": 2510, "loc": {"start": {"line": 85, "column": 28}, "end": {"line": 85, "column": 29}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2527, "end": 2528, "loc": {"start": {"line": 86, "column": 16}, "end": {"line": 86, "column": 17}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2528, "end": 2529, "loc": {"start": {"line": 86, "column": 17}, "end": {"line": 86, "column": 18}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "objFun3",
        "start": 2546,
        "end": 2553,
        "loc": {"start": {"line": 87, "column": 16}, "end": {"line": 87, "column": 23}}
    }, {
        "type": {
            "label": ":",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2553, "end": 2554, "loc": {"start": {"line": 87, "column": 23}, "end": {"line": 87, "column": 24}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2555, "end": 2556, "loc": {"start": {"line": 87, "column": 25}, "end": {"line": 87, "column": 26}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "p1",
        "start": 2556,
        "end": 2558,
        "loc": {"start": {"line": 87, "column": 26}, "end": {"line": 87, "column": 28}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2558, "end": 2559, "loc": {"start": {"line": 87, "column": 28}, "end": {"line": 87, "column": 29}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "p2",
        "start": 2560,
        "end": 2562,
        "loc": {"start": {"line": 87, "column": 30}, "end": {"line": 87, "column": 32}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2562, "end": 2563, "loc": {"start": {"line": 87, "column": 32}, "end": {"line": 87, "column": 33}}
    }, {
        "type": {
            "label": "=>",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2564, "end": 2566, "loc": {"start": {"line": 87, "column": 34}, "end": {"line": 87, "column": 36}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2567, "end": 2568, "loc": {"start": {"line": 87, "column": 37}, "end": {"line": 87, "column": 38}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2586, "end": 2587, "loc": {"start": {"line": 89, "column": 16}, "end": {"line": 89, "column": 17}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2587, "end": 2588, "loc": {"start": {"line": 89, "column": 17}, "end": {"line": 89, "column": 18}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "get",
        "start": 2605,
        "end": 2608,
        "loc": {"start": {"line": 90, "column": 16}, "end": {"line": 90, "column": 19}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "value",
        "start": 2609,
        "end": 2614,
        "loc": {"start": {"line": 90, "column": 20}, "end": {"line": 90, "column": 25}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2614, "end": 2615, "loc": {"start": {"line": 90, "column": 25}, "end": {"line": 90, "column": 26}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2615, "end": 2616, "loc": {"start": {"line": 90, "column": 26}, "end": {"line": 90, "column": 27}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2617, "end": 2618, "loc": {"start": {"line": 90, "column": 28}, "end": {"line": 90, "column": 29}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2636, "end": 2637, "loc": {"start": {"line": 92, "column": 16}, "end": {"line": 92, "column": 17}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2637, "end": 2638, "loc": {"start": {"line": 92, "column": 17}, "end": {"line": 92, "column": 18}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "set",
        "start": 2655,
        "end": 2658,
        "loc": {"start": {"line": 93, "column": 16}, "end": {"line": 93, "column": 19}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "value",
        "start": 2659,
        "end": 2664,
        "loc": {"start": {"line": 93, "column": 20}, "end": {"line": 93, "column": 25}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2664, "end": 2665, "loc": {"start": {"line": 93, "column": 25}, "end": {"line": 93, "column": 26}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "value",
        "start": 2665,
        "end": 2670,
        "loc": {"start": {"line": 93, "column": 26}, "end": {"line": 93, "column": 31}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2670, "end": 2671, "loc": {"start": {"line": 93, "column": 31}, "end": {"line": 93, "column": 32}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2672, "end": 2673, "loc": {"start": {"line": 93, "column": 33}, "end": {"line": 93, "column": 34}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2691, "end": 2692, "loc": {"start": {"line": 95, "column": 16}, "end": {"line": 95, "column": 17}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2705, "end": 2706, "loc": {"start": {"line": 96, "column": 12}, "end": {"line": 96, "column": 13}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2716, "end": 2717, "loc": {"start": {"line": 98, "column": 8}, "end": {"line": 98, "column": 9}}
    }, {
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 2727,
        "end": 2730,
        "loc": {"start": {"line": 100, "column": 8}, "end": {"line": 100, "column": 11}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "xx",
        "start": 2731,
        "end": 2733,
        "loc": {"start": {"line": 100, "column": 12}, "end": {"line": 100, "column": 14}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 2734,
        "end": 2735,
        "loc": {"start": {"line": 100, "column": 15}, "end": {"line": 100, "column": 16}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2737, "end": 2738, "loc": {"start": {"line": 100, "column": 18}, "end": {"line": 100, "column": 19}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "a",
        "start": 2738,
        "end": 2739,
        "loc": {"start": {"line": 100, "column": 19}, "end": {"line": 100, "column": 20}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2739, "end": 2740, "loc": {"start": {"line": 100, "column": 20}, "end": {"line": 100, "column": 21}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "b",
        "start": 2740,
        "end": 2741,
        "loc": {"start": {"line": 100, "column": 21}, "end": {"line": 100, "column": 22}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2741, "end": 2742, "loc": {"start": {"line": 100, "column": 22}, "end": {"line": 100, "column": 23}}
    }, {
        "type": {
            "label": "=>",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2742, "end": 2744, "loc": {"start": {"line": 100, "column": 23}, "end": {"line": 100, "column": 25}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2745, "end": 2746, "loc": {"start": {"line": 100, "column": 26}, "end": {"line": 100, "column": 27}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2756, "end": 2757, "loc": {"start": {"line": 102, "column": 8}, "end": {"line": 102, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "scope函数初始化",
        "start": 2766,
        "end": 2778,
        "loc": {"start": {"line": 103, "column": 8}, "end": {"line": 103, "column": 20}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 2787,
        "end": 2793,
        "loc": {"start": {"line": 104, "column": 8}, "end": {"line": 104, "column": 14}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2793, "end": 2794, "loc": {"start": {"line": 104, "column": 14}, "end": {"line": 104, "column": 15}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "scopeFun",
        "start": 2794,
        "end": 2802,
        "loc": {"start": {"line": 104, "column": 15}, "end": {"line": 104, "column": 23}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 2803,
        "end": 2804,
        "loc": {"start": {"line": 104, "column": 24}, "end": {"line": 104, "column": 25}}
    }, {
        "type": {
            "label": "function",
            "keyword": "function",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "function",
        "start": 2805,
        "end": 2813,
        "loc": {"start": {"line": 104, "column": 26}, "end": {"line": 104, "column": 34}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2814, "end": 2815, "loc": {"start": {"line": 104, "column": 35}, "end": {"line": 104, "column": 36}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 2815,
        "end": 2821,
        "loc": {"start": {"line": 104, "column": 36}, "end": {"line": 104, "column": 42}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2821, "end": 2822, "loc": {"start": {"line": 104, "column": 42}, "end": {"line": 104, "column": 43}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2823, "end": 2824, "loc": {"start": {"line": 104, "column": 44}, "end": {"line": 104, "column": 45}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "console",
        "start": 2837,
        "end": 2844,
        "loc": {"start": {"line": 105, "column": 12}, "end": {"line": 105, "column": 19}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2844, "end": 2845, "loc": {"start": {"line": 105, "column": 19}, "end": {"line": 105, "column": 20}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "log",
        "start": 2845,
        "end": 2848,
        "loc": {"start": {"line": 105, "column": 20}, "end": {"line": 105, "column": 23}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2848, "end": 2849, "loc": {"start": {"line": 105, "column": 23}, "end": {"line": 105, "column": 24}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 2849,
        "end": 2855,
        "loc": {"start": {"line": 105, "column": 24}, "end": {"line": 105, "column": 30}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2855, "end": 2856, "loc": {"start": {"line": 105, "column": 30}, "end": {"line": 105, "column": 31}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2865, "end": 2866, "loc": {"start": {"line": 106, "column": 8}, "end": {"line": 106, "column": 9}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2866, "end": 2867, "loc": {"start": {"line": 106, "column": 9}, "end": {"line": 106, "column": 10}}
    }, {
        "type": "CommentLine",
        "value": "scope多级初始化函数",
        "start": 2877,
        "end": 2891,
        "loc": {"start": {"line": 108, "column": 8}, "end": {"line": 108, "column": 22}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 2900,
        "end": 2906,
        "loc": {"start": {"line": 109, "column": 8}, "end": {"line": 109, "column": 14}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2906, "end": 2907, "loc": {"start": {"line": 109, "column": 14}, "end": {"line": 109, "column": 15}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "data",
        "start": 2907,
        "end": 2911,
        "loc": {"start": {"line": 109, "column": 15}, "end": {"line": 109, "column": 19}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2911, "end": 2912, "loc": {"start": {"line": 109, "column": 19}, "end": {"line": 109, "column": 20}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "qq",
        "start": 2912,
        "end": 2914,
        "loc": {"start": {"line": 109, "column": 20}, "end": {"line": 109, "column": 22}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2914, "end": 2915, "loc": {"start": {"line": 109, "column": 22}, "end": {"line": 109, "column": 23}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "scopeFun2",
        "start": 2915,
        "end": 2924,
        "loc": {"start": {"line": 109, "column": 23}, "end": {"line": 109, "column": 32}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 2925,
        "end": 2926,
        "loc": {"start": {"line": 109, "column": 33}, "end": {"line": 109, "column": 34}}
    }, {
        "type": {
            "label": "function",
            "keyword": "function",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "function",
        "start": 2927,
        "end": 2935,
        "loc": {"start": {"line": 109, "column": 35}, "end": {"line": 109, "column": 43}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2936, "end": 2937, "loc": {"start": {"line": 109, "column": 44}, "end": {"line": 109, "column": 45}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2937, "end": 2938, "loc": {"start": {"line": 109, "column": 45}, "end": {"line": 109, "column": 46}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 2939, "end": 2940, "loc": {"start": {"line": 109, "column": 47}, "end": {"line": 109, "column": 48}}
    }, {
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 2954,
        "end": 2957,
        "loc": {"start": {"line": 111, "column": 12}, "end": {"line": 111, "column": 15}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "subFun2",
        "start": 2958,
        "end": 2965,
        "loc": {"start": {"line": 111, "column": 16}, "end": {"line": 111, "column": 23}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 2966,
        "end": 2967,
        "loc": {"start": {"line": 111, "column": 24}, "end": {"line": 111, "column": 25}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "_subFun2",
        "start": 2968,
        "end": 2976,
        "loc": {"start": {"line": 111, "column": 26}, "end": {"line": 111, "column": 34}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 2976, "end": 2977, "loc": {"start": {"line": 111, "column": 34}, "end": {"line": 111, "column": 35}}
    }, {
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 2990,
        "end": 2993,
        "loc": {"start": {"line": 112, "column": 12}, "end": {"line": 112, "column": 15}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "subFun1",
        "start": 2994,
        "end": 3001,
        "loc": {"start": {"line": 112, "column": 16}, "end": {"line": 112, "column": 23}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 3002,
        "end": 3003,
        "loc": {"start": {"line": 112, "column": 24}, "end": {"line": 112, "column": 25}}
    }, {
        "type": {
            "label": "function",
            "keyword": "function",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "function",
        "start": 3004,
        "end": 3012,
        "loc": {"start": {"line": 112, "column": 26}, "end": {"line": 112, "column": 34}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3013, "end": 3014, "loc": {"start": {"line": 112, "column": 35}, "end": {"line": 112, "column": 36}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 3014,
        "end": 3020,
        "loc": {"start": {"line": 112, "column": 36}, "end": {"line": 112, "column": 42}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3020, "end": 3021, "loc": {"start": {"line": 112, "column": 42}, "end": {"line": 112, "column": 43}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param2",
        "start": 3022,
        "end": 3028,
        "loc": {"start": {"line": 112, "column": 44}, "end": {"line": 112, "column": 50}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3028, "end": 3029, "loc": {"start": {"line": 112, "column": 50}, "end": {"line": 112, "column": 51}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3030, "end": 3031, "loc": {"start": {"line": 112, "column": 52}, "end": {"line": 112, "column": 53}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3045, "end": 3046, "loc": {"start": {"line": 114, "column": 12}, "end": {"line": 114, "column": 13}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3046, "end": 3047, "loc": {"start": {"line": 114, "column": 13}, "end": {"line": 114, "column": 14}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "subFun2",
        "start": 3060,
        "end": 3067,
        "loc": {"start": {"line": 115, "column": 12}, "end": {"line": 115, "column": 19}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3067, "end": 3068, "loc": {"start": {"line": 115, "column": 19}, "end": {"line": 115, "column": 20}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "subFun1",
        "start": 3068,
        "end": 3075,
        "loc": {"start": {"line": 115, "column": 20}, "end": {"line": 115, "column": 27}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3075, "end": 3076, "loc": {"start": {"line": 115, "column": 27}, "end": {"line": 115, "column": 28}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3076, "end": 3077, "loc": {"start": {"line": 115, "column": 28}, "end": {"line": 115, "column": 29}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3077, "end": 3078, "loc": {"start": {"line": 115, "column": 29}, "end": {"line": 115, "column": 30}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "value",
        "start": 3078,
        "end": 3083,
        "loc": {"start": {"line": 115, "column": 30}, "end": {"line": 115, "column": 35}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3083, "end": 3084, "loc": {"start": {"line": 115, "column": 35}, "end": {"line": 115, "column": 36}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3084, "end": 3085, "loc": {"start": {"line": 115, "column": 36}, "end": {"line": 115, "column": 37}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "subFun1",
        "start": 3098,
        "end": 3105,
        "loc": {"start": {"line": 116, "column": 12}, "end": {"line": 116, "column": 19}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3105, "end": 3106, "loc": {"start": {"line": 116, "column": 19}, "end": {"line": 116, "column": 20}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar3",
        "start": 3106,
        "end": 3114,
        "loc": {"start": {"line": 116, "column": 20}, "end": {"line": 116, "column": 28}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3114, "end": 3115, "loc": {"start": {"line": 116, "column": 28}, "end": {"line": 116, "column": 29}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar3Value",
        "start": 3115,
        "end": 3128,
        "loc": {"start": {"line": 116, "column": 29}, "end": {"line": 116, "column": 42}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3128, "end": 3129, "loc": {"start": {"line": 116, "column": 42}, "end": {"line": 116, "column": 43}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3129, "end": 3130, "loc": {"start": {"line": 116, "column": 43}, "end": {"line": 116, "column": 44}}
    }, {
        "type": {
            "label": "function",
            "keyword": "function",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "function",
        "start": 3143,
        "end": 3151,
        "loc": {"start": {"line": 117, "column": 12}, "end": {"line": 117, "column": 20}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "_subFun2",
        "start": 3152,
        "end": 3160,
        "loc": {"start": {"line": 117, "column": 21}, "end": {"line": 117, "column": 29}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3160, "end": 3161, "loc": {"start": {"line": 117, "column": 29}, "end": {"line": 117, "column": 30}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 3161,
        "end": 3167,
        "loc": {"start": {"line": 117, "column": 30}, "end": {"line": 117, "column": 36}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3167, "end": 3168, "loc": {"start": {"line": 117, "column": 36}, "end": {"line": 117, "column": 37}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param2",
        "start": 3169,
        "end": 3175,
        "loc": {"start": {"line": 117, "column": 38}, "end": {"line": 117, "column": 44}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3175, "end": 3176, "loc": {"start": {"line": 117, "column": 44}, "end": {"line": 117, "column": 45}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3177, "end": 3178, "loc": {"start": {"line": 117, "column": 46}, "end": {"line": 117, "column": 47}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3192, "end": 3193, "loc": {"start": {"line": 119, "column": 12}, "end": {"line": 119, "column": 13}}
    }, {
        "type": {
            "label": "var",
            "keyword": "var",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "var",
        "start": 3207,
        "end": 3210,
        "loc": {"start": {"line": 121, "column": 12}, "end": {"line": 121, "column": 15}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "fnMutiValue",
        "start": 3211,
        "end": 3222,
        "loc": {"start": {"line": 121, "column": 16}, "end": {"line": 121, "column": 27}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 3223,
        "end": 3224,
        "loc": {"start": {"line": 121, "column": 28}, "end": {"line": 121, "column": 29}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar3",
        "start": 3225,
        "end": 3233,
        "loc": {"start": {"line": 121, "column": 30}, "end": {"line": 121, "column": 38}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3233, "end": 3234, "loc": {"start": {"line": 121, "column": 38}, "end": {"line": 121, "column": 39}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiVar3Value",
        "start": 3234,
        "end": 3247,
        "loc": {"start": {"line": 121, "column": 39}, "end": {"line": 121, "column": 52}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3247, "end": 3248, "loc": {"start": {"line": 121, "column": 52}, "end": {"line": 121, "column": 53}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 3261,
        "end": 3267,
        "loc": {"start": {"line": 122, "column": 12}, "end": {"line": 122, "column": 18}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3267, "end": 3268, "loc": {"start": {"line": 122, "column": 18}, "end": {"line": 122, "column": 19}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "funScopeVar",
        "start": 3268,
        "end": 3279,
        "loc": {"start": {"line": 122, "column": 19}, "end": {"line": 122, "column": 30}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 3280,
        "end": 3281,
        "loc": {"start": {"line": 122, "column": 31}, "end": {"line": 122, "column": 32}}
    }, {
        "type": {
            "label": "string",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "12",
        "start": 3282,
        "end": 3286,
        "loc": {"start": {"line": 122, "column": 33}, "end": {"line": 122, "column": 37}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3286, "end": 3287, "loc": {"start": {"line": 122, "column": 37}, "end": {"line": 122, "column": 38}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "decFun",
        "start": 3300,
        "end": 3306,
        "loc": {"start": {"line": 123, "column": 12}, "end": {"line": 123, "column": 18}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3306, "end": 3307, "loc": {"start": {"line": 123, "column": 18}, "end": {"line": 123, "column": 19}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3307, "end": 3308, "loc": {"start": {"line": 123, "column": 19}, "end": {"line": 123, "column": 20}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3308, "end": 3309, "loc": {"start": {"line": 123, "column": 20}, "end": {"line": 123, "column": 21}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "scopeData",
        "start": 3322,
        "end": 3331,
        "loc": {"start": {"line": 124, "column": 12}, "end": {"line": 124, "column": 21}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3331, "end": 3332, "loc": {"start": {"line": 124, "column": 21}, "end": {"line": 124, "column": 22}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "funScopeVar1",
        "start": 3332,
        "end": 3344,
        "loc": {"start": {"line": 124, "column": 22}, "end": {"line": 124, "column": 34}}
    }, {
        "type": {
            "label": "=",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": true,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "=",
        "start": 3345,
        "end": 3346,
        "loc": {"start": {"line": 124, "column": 35}, "end": {"line": 124, "column": 36}}
    }, {
        "type": {
            "label": "string",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        },
        "value": "1",
        "start": 3347,
        "end": 3350,
        "loc": {"start": {"line": 124, "column": 37}, "end": {"line": 124, "column": 40}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3350, "end": 3351, "loc": {"start": {"line": 124, "column": 40}, "end": {"line": 124, "column": 41}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3361, "end": 3362, "loc": {"start": {"line": 126, "column": 8}, "end": {"line": 126, "column": 9}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3362, "end": 3363, "loc": {"start": {"line": 126, "column": 9}, "end": {"line": 126, "column": 10}}
    }, {
        "type": "CommentBlock",
        "value": "*\n         * 表达式\n         ",
        "start": 3373,
        "end": 3403,
        "loc": {"start": {"line": 128, "column": 8}, "end": {"line": 130, "column": 11}}
    }, {
        "type": {
            "label": "function",
            "keyword": "function",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "function",
        "start": 3412,
        "end": 3420,
        "loc": {"start": {"line": 131, "column": 8}, "end": {"line": 131, "column": 16}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "decFun",
        "start": 3421,
        "end": 3427,
        "loc": {"start": {"line": 131, "column": 17}, "end": {"line": 131, "column": 23}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3427, "end": 3428, "loc": {"start": {"line": 131, "column": 23}, "end": {"line": 131, "column": 24}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 3428,
        "end": 3434,
        "loc": {"start": {"line": 131, "column": 24}, "end": {"line": 131, "column": 30}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3434, "end": 3435, "loc": {"start": {"line": 131, "column": 30}, "end": {"line": 131, "column": 31}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param2",
        "start": 3436,
        "end": 3442,
        "loc": {"start": {"line": 131, "column": 32}, "end": {"line": 131, "column": 38}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3442, "end": 3443, "loc": {"start": {"line": 131, "column": 38}, "end": {"line": 131, "column": 39}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3444, "end": 3445, "loc": {"start": {"line": 131, "column": 40}, "end": {"line": 131, "column": 41}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "console",
        "start": 3458,
        "end": 3465,
        "loc": {"start": {"line": 132, "column": 12}, "end": {"line": 132, "column": 19}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3465, "end": 3466, "loc": {"start": {"line": 132, "column": 19}, "end": {"line": 132, "column": 20}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "log",
        "start": 3466,
        "end": 3469,
        "loc": {"start": {"line": 132, "column": 20}, "end": {"line": 132, "column": 23}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3469, "end": 3470, "loc": {"start": {"line": 132, "column": 23}, "end": {"line": 132, "column": 24}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 3470,
        "end": 3476,
        "loc": {"start": {"line": 132, "column": 24}, "end": {"line": 132, "column": 30}}
    }, {
        "type": {
            "label": ",",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3476, "end": 3477, "loc": {"start": {"line": 132, "column": 30}, "end": {"line": 132, "column": 31}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param2",
        "start": 3478,
        "end": 3484,
        "loc": {"start": {"line": 132, "column": 32}, "end": {"line": 132, "column": 38}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3484, "end": 3485, "loc": {"start": {"line": 132, "column": 38}, "end": {"line": 132, "column": 39}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3494, "end": 3495, "loc": {"start": {"line": 133, "column": 8}, "end": {"line": 133, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "直接调用",
        "start": 3505,
        "end": 3511,
        "loc": {"start": {"line": 135, "column": 8}, "end": {"line": 135, "column": 14}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "mutiFun",
        "start": 3520,
        "end": 3527,
        "loc": {"start": {"line": 136, "column": 8}, "end": {"line": 136, "column": 15}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3527, "end": 3528, "loc": {"start": {"line": 136, "column": 15}, "end": {"line": 136, "column": 16}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3528, "end": 3529, "loc": {"start": {"line": 136, "column": 16}, "end": {"line": 136, "column": 17}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3529, "end": 3530, "loc": {"start": {"line": 136, "column": 17}, "end": {"line": 136, "column": 18}}
    }, {
        "type": "CommentLine",
        "value": "调用",
        "start": 3539,
        "end": 3543,
        "loc": {"start": {"line": 137, "column": 8}, "end": {"line": 137, "column": 12}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 3552,
        "end": 3558,
        "loc": {"start": {"line": 138, "column": 8}, "end": {"line": 138, "column": 14}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3558, "end": 3559, "loc": {"start": {"line": 138, "column": 14}, "end": {"line": 138, "column": 15}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "scopeFun",
        "start": 3559,
        "end": 3567,
        "loc": {"start": {"line": 138, "column": 15}, "end": {"line": 138, "column": 23}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3567, "end": 3568, "loc": {"start": {"line": 138, "column": 23}, "end": {"line": 138, "column": 24}}
    }, {
        "type": {
            "label": "function",
            "keyword": "function",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "function",
        "start": 3568,
        "end": 3576,
        "loc": {"start": {"line": 138, "column": 24}, "end": {"line": 138, "column": 32}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3577, "end": 3578, "loc": {"start": {"line": 138, "column": 33}, "end": {"line": 138, "column": 34}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 3578,
        "end": 3584,
        "loc": {"start": {"line": 138, "column": 34}, "end": {"line": 138, "column": 40}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3584, "end": 3585, "loc": {"start": {"line": 138, "column": 40}, "end": {"line": 138, "column": 41}}
    }, {
        "type": {
            "label": "{",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3586, "end": 3587, "loc": {"start": {"line": 138, "column": 42}, "end": {"line": 138, "column": 43}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "console",
        "start": 3600,
        "end": 3607,
        "loc": {"start": {"line": 139, "column": 12}, "end": {"line": 139, "column": 19}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3607, "end": 3608, "loc": {"start": {"line": 139, "column": 19}, "end": {"line": 139, "column": 20}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "log",
        "start": 3608,
        "end": 3611,
        "loc": {"start": {"line": 139, "column": 20}, "end": {"line": 139, "column": 23}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3611, "end": 3612, "loc": {"start": {"line": 139, "column": 23}, "end": {"line": 139, "column": 24}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "param1",
        "start": 3612,
        "end": 3618,
        "loc": {"start": {"line": 139, "column": 24}, "end": {"line": 139, "column": 30}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3618, "end": 3619, "loc": {"start": {"line": 139, "column": 30}, "end": {"line": 139, "column": 31}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3628, "end": 3629, "loc": {"start": {"line": 140, "column": 8}, "end": {"line": 140, "column": 9}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3629, "end": 3630, "loc": {"start": {"line": 140, "column": 9}, "end": {"line": 140, "column": 10}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3630, "end": 3631, "loc": {"start": {"line": 140, "column": 10}, "end": {"line": 140, "column": 11}}
    }, {
        "type": "CommentLine",
        "value": " this.scopeFun2();",
        "start": 3640,
        "end": 3660,
        "loc": {"start": {"line": 141, "column": 8}, "end": {"line": 141, "column": 28}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "$scope",
        "start": 3669,
        "end": 3675,
        "loc": {"start": {"line": 142, "column": 8}, "end": {"line": 142, "column": 14}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3675, "end": 3676, "loc": {"start": {"line": 142, "column": 14}, "end": {"line": 142, "column": 15}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "data",
        "start": 3676,
        "end": 3680,
        "loc": {"start": {"line": 142, "column": 15}, "end": {"line": 142, "column": 19}}
    }, {
        "type": {
            "label": ".",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3680, "end": 3681, "loc": {"start": {"line": 142, "column": 19}, "end": {"line": 142, "column": 20}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "scopeFun2",
        "start": 3681,
        "end": 3690,
        "loc": {"start": {"line": 142, "column": 20}, "end": {"line": 142, "column": 29}}
    }, {
        "type": {
            "label": "(",
            "beforeExpr": true,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3690, "end": 3691, "loc": {"start": {"line": 142, "column": 29}, "end": {"line": 142, "column": 30}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3691, "end": 3692, "loc": {"start": {"line": 142, "column": 30}, "end": {"line": 142, "column": 31}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3692, "end": 3693, "loc": {"start": {"line": 142, "column": 31}, "end": {"line": 142, "column": 32}}
    }, {
        "type": {
            "label": "}",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3700, "end": 3701, "loc": {"start": {"line": 145, "column": 4}, "end": {"line": 145, "column": 5}}
    }, {
        "type": {
            "label": "]",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3701, "end": 3702, "loc": {"start": {"line": 145, "column": 5}, "end": {"line": 145, "column": 6}}
    }, {
        "type": {
            "label": ")",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        }, "start": 3702, "end": 3703, "loc": {"start": {"line": 145, "column": 6}, "end": {"line": 145, "column": 7}}
    }, {
        "type": {
            "label": ";",
            "beforeExpr": true,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3703, "end": 3704, "loc": {"start": {"line": 145, "column": 7}, "end": {"line": 145, "column": 8}}
    }, {
        "type": {
            "label": "eof",
            "beforeExpr": false,
            "startsExpr": false,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null,
            "updateContext": null
        }, "start": 3706, "end": 3706, "loc": {"start": {"line": 147, "column": 0}, "end": {"line": 147, "column": 0}}
    }]
}