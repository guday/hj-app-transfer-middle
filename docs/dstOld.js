var a = {
    "type": "File",
    "start": 0,
    "end": 2384,
    "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 101, "column": 0}},
    "program": {
        "type": "Program",
        "start": 0,
        "end": 2384,
        "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 101, "column": 0}},
        "sourceType": "module",
        "body": [{
            "type": "ExpressionStatement",
            "start": 65,
            "end": 2382,
            "loc": {"start": {"line": 10, "column": 0}, "end": {"line": 99, "column": 8}},
            "expression": {
                "type": "CallExpression",
                "start": 65,
                "end": 2381,
                "loc": {"start": {"line": 10, "column": 0}, "end": {"line": 99, "column": 7}},
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
                    "end": 2380,
                    "loc": {"start": {"line": 10, "column": 34}, "end": {"line": 99, "column": 6}},
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
                        "end": 2379,
                        "loc": {"start": {"line": 11, "column": 4}, "end": {"line": 99, "column": 5}},
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
                            "end": 2379,
                            "loc": {"start": {"line": 11, "column": 29}, "end": {"line": 99, "column": 5}},
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
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "单个变量申明",
                                    "start": 275,
                                    "end": 283,
                                    "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 292,
                                "end": 330,
                                "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 46}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 296,
                                    "end": 329,
                                    "loc": {"start": {"line": 18, "column": 12}, "end": {"line": 18, "column": 45}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 296,
                                        "end": 310,
                                        "loc": {
                                            "start": {"line": 18, "column": 12},
                                            "end": {"line": 18, "column": 26},
                                            "identifierName": "singleVariable"
                                        },
                                        "name": "singleVariable",
                                        "leadingComments": null
                                    },
                                    "init": {
                                        "type": "StringLiteral",
                                        "start": 313,
                                        "end": 329,
                                        "loc": {"start": {"line": 18, "column": 29}, "end": {"line": 18, "column": 45}},
                                        "extra": {"rawValue": "singleVariable", "raw": "'singleVariable'"},
                                        "value": "singleVariable"
                                    },
                                    "leadingComments": null
                                }],
                                "kind": "var",
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "单个变量申明",
                                    "start": 275,
                                    "end": 283,
                                    "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 16}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "多个变量申明， 包括函数",
                                    "start": 339,
                                    "end": 353,
                                    "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 22}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 362,
                                "end": 560,
                                "loc": {"start": {"line": 20, "column": 8}, "end": {"line": 26, "column": 27}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 366,
                                    "end": 374,
                                    "loc": {"start": {"line": 20, "column": 12}, "end": {"line": 20, "column": 20}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 366,
                                        "end": 374,
                                        "loc": {
                                            "start": {"line": 20, "column": 12},
                                            "end": {"line": 20, "column": 20},
                                            "identifierName": "mutiVar1"
                                        },
                                        "name": "mutiVar1",
                                        "leadingComments": null
                                    },
                                    "init": null,
                                    "leadingComments": null
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 388,
                                    "end": 403,
                                    "loc": {"start": {"line": 21, "column": 12}, "end": {"line": 21, "column": 27}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 388,
                                        "end": 396,
                                        "loc": {
                                            "start": {"line": 21, "column": 12},
                                            "end": {"line": 21, "column": 20},
                                            "identifierName": "mutiVar2"
                                        },
                                        "name": "mutiVar2"
                                    },
                                    "init": {
                                        "type": "NullLiteral",
                                        "start": 399,
                                        "end": 403,
                                        "loc": {"start": {"line": 21, "column": 23}, "end": {"line": 21, "column": 27}}
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 417,
                                    "end": 438,
                                    "loc": {"start": {"line": 22, "column": 12}, "end": {"line": 22, "column": 33}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 417,
                                        "end": 425,
                                        "loc": {
                                            "start": {"line": 22, "column": 12},
                                            "end": {"line": 22, "column": 20},
                                            "identifierName": "mutiVar3"
                                        },
                                        "name": "mutiVar3"
                                    },
                                    "init": {
                                        "type": "StringLiteral",
                                        "start": 428,
                                        "end": 438,
                                        "loc": {"start": {"line": 22, "column": 23}, "end": {"line": 22, "column": 33}},
                                        "extra": {"rawValue": "mutiVar3", "raw": "\"mutiVar3\""},
                                        "value": "mutiVar3"
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 452,
                                    "end": 531,
                                    "loc": {"start": {"line": 23, "column": 12}, "end": {"line": 25, "column": 13}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 452,
                                        "end": 459,
                                        "loc": {
                                            "start": {"line": 23, "column": 12},
                                            "end": {"line": 23, "column": 19},
                                            "identifierName": "mutiFun"
                                        },
                                        "name": "mutiFun"
                                    },
                                    "init": {
                                        "type": "FunctionExpression",
                                        "start": 462,
                                        "end": 531,
                                        "loc": {"start": {"line": 23, "column": 22}, "end": {"line": 25, "column": 13}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 472,
                                            "end": 478,
                                            "loc": {
                                                "start": {"line": 23, "column": 32},
                                                "end": {"line": 23, "column": 38},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 480,
                                            "end": 531,
                                            "loc": {
                                                "start": {"line": 23, "column": 40},
                                                "end": {"line": 25, "column": 13}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 498,
                                                "end": 517,
                                                "loc": {
                                                    "start": {"line": 24, "column": 16},
                                                    "end": {"line": 24, "column": 35}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 498,
                                                    "end": 517,
                                                    "loc": {
                                                        "start": {"line": 24, "column": 16},
                                                        "end": {"line": 24, "column": 35}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 498,
                                                        "end": 509,
                                                        "loc": {
                                                            "start": {"line": 24, "column": 16},
                                                            "end": {"line": 24, "column": 27}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 498,
                                                            "end": 505,
                                                            "loc": {
                                                                "start": {"line": 24, "column": 16},
                                                                "end": {"line": 24, "column": 23},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 506,
                                                            "end": 509,
                                                            "loc": {
                                                                "start": {"line": 24, "column": 24},
                                                                "end": {"line": 24, "column": 27},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 510,
                                                        "end": 516,
                                                        "loc": {
                                                            "start": {"line": 24, "column": 28},
                                                            "end": {"line": 24, "column": 34},
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
                                    "start": 545,
                                    "end": 559,
                                    "loc": {"start": {"line": 26, "column": 12}, "end": {"line": 26, "column": 26}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 545,
                                        "end": 553,
                                        "loc": {
                                            "start": {"line": 26, "column": 12},
                                            "end": {"line": 26, "column": 20},
                                            "identifierName": "mutiVar4"
                                        },
                                        "name": "mutiVar4"
                                    },
                                    "init": {
                                        "type": "NumericLiteral",
                                        "start": 556,
                                        "end": 559,
                                        "loc": {"start": {"line": 26, "column": 23}, "end": {"line": 26, "column": 26}},
                                        "extra": {"rawValue": 100, "raw": "100"},
                                        "value": 100
                                    }
                                }],
                                "kind": "var",
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "多个变量申明， 包括函数",
                                    "start": 339,
                                    "end": 353,
                                    "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 22}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "函数直接申明",
                                    "start": 571,
                                    "end": 579,
                                    "loc": {"start": {"line": 29, "column": 8}, "end": {"line": 29, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 588,
                                "end": 1567,
                                "loc": {"start": {"line": 30, "column": 8}, "end": {"line": 60, "column": 9}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 592,
                                    "end": 1567,
                                    "loc": {"start": {"line": 30, "column": 12}, "end": {"line": 60, "column": 9}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 592,
                                        "end": 601,
                                        "loc": {
                                            "start": {"line": 30, "column": 12},
                                            "end": {"line": 30, "column": 21},
                                            "identifierName": "singleFun"
                                        },
                                        "name": "singleFun",
                                        "leadingComments": null
                                    },
                                    "init": {
                                        "type": "FunctionExpression",
                                        "start": 604,
                                        "end": 1567,
                                        "loc": {"start": {"line": 30, "column": 24}, "end": {"line": 60, "column": 9}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 614,
                                            "end": 620,
                                            "loc": {
                                                "start": {"line": 30, "column": 34},
                                                "end": {"line": 30, "column": 40},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 622,
                                            "end": 1567,
                                            "loc": {
                                                "start": {"line": 30, "column": 42},
                                                "end": {"line": 60, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 636,
                                                "end": 656,
                                                "loc": {
                                                    "start": {"line": 31, "column": 12},
                                                    "end": {"line": 31, "column": 32}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 636,
                                                    "end": 655,
                                                    "loc": {
                                                        "start": {"line": 31, "column": 12},
                                                        "end": {"line": 31, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 636,
                                                        "end": 647,
                                                        "loc": {
                                                            "start": {"line": 31, "column": 12},
                                                            "end": {"line": 31, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 636,
                                                            "end": 643,
                                                            "loc": {
                                                                "start": {"line": 31, "column": 12},
                                                                "end": {"line": 31, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 644,
                                                            "end": 647,
                                                            "loc": {
                                                                "start": {"line": 31, "column": 20},
                                                                "end": {"line": 31, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 648,
                                                        "end": 654,
                                                        "loc": {
                                                            "start": {"line": 31, "column": 24},
                                                            "end": {"line": 31, "column": 30},
                                                            "identifierName": "param1"
                                                        },
                                                        "name": "param1"
                                                    }]
                                                },
                                                "trailingComments": [{
                                                    "type": "CommentLine",
                                                    "value": "对象",
                                                    "start": 669,
                                                    "end": 673,
                                                    "loc": {
                                                        "start": {"line": 32, "column": 12},
                                                        "end": {"line": 32, "column": 16}
                                                    }
                                                }]
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 686,
                                                "end": 1556,
                                                "loc": {
                                                    "start": {"line": 33, "column": 12},
                                                    "end": {"line": 58, "column": 13}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 690,
                                                    "end": 1556,
                                                    "loc": {
                                                        "start": {"line": 33, "column": 16},
                                                        "end": {"line": 58, "column": 13}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 690,
                                                        "end": 693,
                                                        "loc": {
                                                            "start": {"line": 33, "column": 16},
                                                            "end": {"line": 33, "column": 19},
                                                            "identifierName": "obj"
                                                        },
                                                        "name": "obj",
                                                        "leadingComments": null
                                                    },
                                                    "init": {
                                                        "type": "ObjectExpression",
                                                        "start": 696,
                                                        "end": 1556,
                                                        "loc": {
                                                            "start": {"line": 33, "column": 22},
                                                            "end": {"line": 58, "column": 13}
                                                        },
                                                        "properties": [{
                                                            "type": "ObjectProperty",
                                                            "start": 714,
                                                            "end": 732,
                                                            "loc": {
                                                                "start": {"line": 34, "column": 16},
                                                                "end": {"line": 34, "column": 34}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 714,
                                                                "end": 721,
                                                                "loc": {
                                                                    "start": {"line": 34, "column": 16},
                                                                    "end": {"line": 34, "column": 23},
                                                                    "identifierName": "objVar1"
                                                                },
                                                                "name": "objVar1"
                                                            },
                                                            "value": {
                                                                "type": "StringLiteral",
                                                                "start": 723,
                                                                "end": 732,
                                                                "loc": {
                                                                    "start": {"line": 34, "column": 25},
                                                                    "end": {"line": 34, "column": 34}
                                                                },
                                                                "extra": {"rawValue": "objVar1", "raw": "\"objVar1\""},
                                                                "value": "objVar1"
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 750,
                                                            "end": 832,
                                                            "loc": {
                                                                "start": {"line": 35, "column": 16},
                                                                "end": {"line": 37, "column": 17}
                                                            },
                                                            "method": true,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 750,
                                                                "end": 757,
                                                                "loc": {
                                                                    "start": {"line": 35, "column": 16},
                                                                    "end": {"line": 35, "column": 23},
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
                                                                "start": 758,
                                                                "end": 764,
                                                                "loc": {
                                                                    "start": {"line": 35, "column": 24},
                                                                    "end": {"line": 35, "column": 30},
                                                                    "identifierName": "param1"
                                                                },
                                                                "name": "param1"
                                                            }, {
                                                                "type": "Identifier",
                                                                "start": 766,
                                                                "end": 772,
                                                                "loc": {
                                                                    "start": {"line": 35, "column": 32},
                                                                    "end": {"line": 35, "column": 38},
                                                                    "identifierName": "param2"
                                                                },
                                                                "name": "param2"
                                                            }],
                                                            "body": {
                                                                "type": "BlockStatement",
                                                                "start": 773,
                                                                "end": 832,
                                                                "loc": {
                                                                    "start": {"line": 35, "column": 39},
                                                                    "end": {"line": 37, "column": 17}
                                                                },
                                                                "body": [{
                                                                    "type": "ExpressionStatement",
                                                                    "start": 795,
                                                                    "end": 814,
                                                                    "loc": {
                                                                        "start": {"line": 36, "column": 20},
                                                                        "end": {"line": 36, "column": 39}
                                                                    },
                                                                    "expression": {
                                                                        "type": "CallExpression",
                                                                        "start": 795,
                                                                        "end": 814,
                                                                        "loc": {
                                                                            "start": {"line": 36, "column": 20},
                                                                            "end": {"line": 36, "column": 39}
                                                                        },
                                                                        "callee": {
                                                                            "type": "MemberExpression",
                                                                            "start": 795,
                                                                            "end": 806,
                                                                            "loc": {
                                                                                "start": {"line": 36, "column": 20},
                                                                                "end": {"line": 36, "column": 31}
                                                                            },
                                                                            "object": {
                                                                                "type": "Identifier",
                                                                                "start": 795,
                                                                                "end": 802,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 36,
                                                                                        "column": 20
                                                                                    },
                                                                                    "end": {"line": 36, "column": 27},
                                                                                    "identifierName": "console"
                                                                                },
                                                                                "name": "console"
                                                                            },
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "start": 803,
                                                                                "end": 806,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 36,
                                                                                        "column": 28
                                                                                    },
                                                                                    "end": {"line": 36, "column": 31},
                                                                                    "identifierName": "log"
                                                                                },
                                                                                "name": "log"
                                                                            },
                                                                            "computed": false
                                                                        },
                                                                        "arguments": [{
                                                                            "type": "Identifier",
                                                                            "start": 807,
                                                                            "end": 813,
                                                                            "loc": {
                                                                                "start": {"line": 36, "column": 32},
                                                                                "end": {"line": 36, "column": 38},
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
                                                            "start": 850,
                                                            "end": 1378,
                                                            "loc": {
                                                                "start": {"line": 38, "column": 16},
                                                                "end": {"line": 48, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 850,
                                                                "end": 857,
                                                                "loc": {
                                                                    "start": {"line": 38, "column": 16},
                                                                    "end": {"line": 38, "column": 23},
                                                                    "identifierName": "objFun2"
                                                                },
                                                                "name": "objFun2"
                                                            },
                                                            "value": {
                                                                "type": "FunctionExpression",
                                                                "start": 859,
                                                                "end": 1378,
                                                                "loc": {
                                                                    "start": {"line": 38, "column": 25},
                                                                    "end": {"line": 48, "column": 17}
                                                                },
                                                                "id": null,
                                                                "generator": false,
                                                                "expression": false,
                                                                "async": false,
                                                                "params": [{
                                                                    "type": "Identifier",
                                                                    "start": 869,
                                                                    "end": 875,
                                                                    "loc": {
                                                                        "start": {"line": 38, "column": 35},
                                                                        "end": {"line": 38, "column": 41},
                                                                        "identifierName": "param1"
                                                                    },
                                                                    "name": "param1"
                                                                }, {
                                                                    "type": "Identifier",
                                                                    "start": 877,
                                                                    "end": 883,
                                                                    "loc": {
                                                                        "start": {"line": 38, "column": 43},
                                                                        "end": {"line": 38, "column": 49},
                                                                        "identifierName": "param2"
                                                                    },
                                                                    "name": "param2"
                                                                }],
                                                                "body": {
                                                                    "type": "BlockStatement",
                                                                    "start": 885,
                                                                    "end": 1378,
                                                                    "loc": {
                                                                        "start": {"line": 38, "column": 51},
                                                                        "end": {"line": 48, "column": 17}
                                                                    },
                                                                    "body": [{
                                                                        "type": "ExpressionStatement",
                                                                        "start": 907,
                                                                        "end": 935,
                                                                        "loc": {
                                                                            "start": {"line": 39, "column": 20},
                                                                            "end": {"line": 39, "column": 48}
                                                                        },
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "start": 907,
                                                                            "end": 934,
                                                                            "loc": {
                                                                                "start": {"line": 39, "column": 20},
                                                                                "end": {"line": 39, "column": 47}
                                                                            },
                                                                            "callee": {
                                                                                "type": "MemberExpression",
                                                                                "start": 907,
                                                                                "end": 918,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 39,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 39, "column": 31}
                                                                                },
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "start": 907,
                                                                                    "end": 914,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 39,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 39,
                                                                                            "column": 27
                                                                                        },
                                                                                        "identifierName": "console"
                                                                                    },
                                                                                    "name": "console"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 915,
                                                                                    "end": 918,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 39,
                                                                                            "column": 28
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 39,
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
                                                                                "start": 919,
                                                                                "end": 925,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 39,
                                                                                        "column": 32
                                                                                    },
                                                                                    "end": {"line": 39, "column": 38},
                                                                                    "identifierName": "param1"
                                                                                },
                                                                                "name": "param1"
                                                                            }, {
                                                                                "type": "Identifier",
                                                                                "start": 927,
                                                                                "end": 933,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 39,
                                                                                        "column": 40
                                                                                    },
                                                                                    "end": {"line": 39, "column": 46},
                                                                                    "identifierName": "param2"
                                                                                },
                                                                                "name": "param2"
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 956,
                                                                        "end": 970,
                                                                        "loc": {
                                                                            "start": {"line": 40, "column": 20},
                                                                            "end": {"line": 40, "column": 34}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 956,
                                                                            "end": 969,
                                                                            "loc": {
                                                                                "start": {"line": 40, "column": 20},
                                                                                "end": {"line": 40, "column": 33}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "Identifier",
                                                                                "start": 956,
                                                                                "end": 964,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 40,
                                                                                        "column": 20
                                                                                    },
                                                                                    "end": {"line": 40, "column": 28},
                                                                                    "identifierName": "mutiVar1"
                                                                                },
                                                                                "name": "mutiVar1"
                                                                            },
                                                                            "right": {
                                                                                "type": "NumericLiteral",
                                                                                "start": 967,
                                                                                "end": 969,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 40,
                                                                                        "column": 31
                                                                                    }, "end": {"line": 40, "column": 33}
                                                                                },
                                                                                "extra": {"rawValue": 12, "raw": "12"},
                                                                                "value": 12
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 991,
                                                                        "end": 1023,
                                                                        "loc": {
                                                                            "start": {"line": 41, "column": 20},
                                                                            "end": {"line": 41, "column": 52}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 991,
                                                                            "end": 1022,
                                                                            "loc": {
                                                                                "start": {"line": 41, "column": 20},
                                                                                "end": {"line": 41, "column": 51}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 991,
                                                                                "end": 1011,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 41,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 41, "column": 40}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 991,
                                                                                    "end": 1002,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 41,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 41,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 991,
                                                                                        "end": 997,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 41,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 41,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 998,
                                                                                        "end": 1002,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 41,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 41,
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
                                                                                    "start": 1003,
                                                                                    "end": 1011,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 41,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 41,
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
                                                                                "start": 1014,
                                                                                "end": 1022,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 41,
                                                                                        "column": 43
                                                                                    },
                                                                                    "end": {"line": 41, "column": 51},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1044,
                                                                        "end": 1079,
                                                                        "loc": {
                                                                            "start": {"line": 42, "column": 20},
                                                                            "end": {"line": 42, "column": 55}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1044,
                                                                            "end": 1078,
                                                                            "loc": {
                                                                                "start": {"line": 42, "column": 20},
                                                                                "end": {"line": 42, "column": 54}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1044,
                                                                                "end": 1067,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 42,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 42, "column": 43}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1044,
                                                                                    "end": 1055,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 42,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 42,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1044,
                                                                                        "end": 1050,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 42,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 42,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1051,
                                                                                        "end": 1055,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 42,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 42,
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
                                                                                    "start": 1056,
                                                                                    "end": 1066,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 42,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 42,
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
                                                                                "start": 1070,
                                                                                "end": 1078,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 42,
                                                                                        "column": 46
                                                                                    },
                                                                                    "end": {"line": 42, "column": 54},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1100,
                                                                        "end": 1133,
                                                                        "loc": {
                                                                            "start": {"line": 43, "column": 20},
                                                                            "end": {"line": 43, "column": 53}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1100,
                                                                            "end": 1132,
                                                                            "loc": {
                                                                                "start": {"line": 43, "column": 20},
                                                                                "end": {"line": 43, "column": 52}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1100,
                                                                                "end": 1121,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 43,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 43, "column": 41}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1100,
                                                                                    "end": 1111,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 43,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 43,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1100,
                                                                                        "end": 1106,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 43,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 43,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1107,
                                                                                        "end": 1111,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 43,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 43,
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
                                                                                    "start": 1112,
                                                                                    "end": 1120,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 43,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 43,
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
                                                                                "start": 1124,
                                                                                "end": 1132,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 43,
                                                                                        "column": 44
                                                                                    },
                                                                                    "end": {"line": 43, "column": 52},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1154,
                                                                        "end": 1201,
                                                                        "loc": {
                                                                            "start": {"line": 44, "column": 20},
                                                                            "end": {"line": 44, "column": 67}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1154,
                                                                            "end": 1200,
                                                                            "loc": {
                                                                                "start": {"line": 44, "column": 20},
                                                                                "end": {"line": 44, "column": 66}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1154,
                                                                                "end": 1189,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 44,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 44, "column": 55}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1154,
                                                                                    "end": 1165,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 44,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 44,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1154,
                                                                                        "end": 1160,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 44,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 44,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1161,
                                                                                        "end": 1165,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 44,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 44,
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
                                                                                    "start": 1166,
                                                                                    "end": 1188,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 44,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 44,
                                                                                            "column": 54
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1166,
                                                                                        "end": 1174,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 44,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 44,
                                                                                                "column": 40
                                                                                            },
                                                                                            "identifierName": "mutiVar3"
                                                                                        },
                                                                                        "name": "mutiVar3"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1175,
                                                                                        "end": 1188,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 44,
                                                                                                "column": 41
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 44,
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
                                                                                "start": 1192,
                                                                                "end": 1200,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 44,
                                                                                        "column": 58
                                                                                    },
                                                                                    "end": {"line": 44, "column": 66},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1222,
                                                                        "end": 1256,
                                                                        "loc": {
                                                                            "start": {"line": 45, "column": 20},
                                                                            "end": {"line": 45, "column": 54}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1222,
                                                                            "end": 1255,
                                                                            "loc": {
                                                                                "start": {"line": 45, "column": 20},
                                                                                "end": {"line": 45, "column": 53}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1222,
                                                                                "end": 1242,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 45,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 45, "column": 40}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1222,
                                                                                    "end": 1233,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 45,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 45,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1222,
                                                                                        "end": 1228,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 45,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 45,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1229,
                                                                                        "end": 1233,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 45,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 45,
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
                                                                                    "start": 1234,
                                                                                    "end": 1242,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 45,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 45,
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
                                                                                "start": 1245,
                                                                                "end": 1255,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 45,
                                                                                        "column": 43
                                                                                    }, "end": {"line": 45, "column": 53}
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
                                                                        "start": 1277,
                                                                        "end": 1304,
                                                                        "loc": {
                                                                            "start": {"line": 46, "column": 20},
                                                                            "end": {"line": 46, "column": 47}
                                                                        },
                                                                        "declarations": [{
                                                                            "type": "VariableDeclarator",
                                                                            "start": 1281,
                                                                            "end": 1303,
                                                                            "loc": {
                                                                                "start": {"line": 46, "column": 24},
                                                                                "end": {"line": 46, "column": 46}
                                                                            },
                                                                            "id": {
                                                                                "type": "Identifier",
                                                                                "start": 1281,
                                                                                "end": 1293,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 46,
                                                                                        "column": 24
                                                                                    },
                                                                                    "end": {"line": 46, "column": 36},
                                                                                    "identifierName": "unKnownValue"
                                                                                },
                                                                                "name": "unKnownValue"
                                                                            },
                                                                            "init": {
                                                                                "type": "Identifier",
                                                                                "start": 1296,
                                                                                "end": 1303,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 46,
                                                                                        "column": 39
                                                                                    },
                                                                                    "end": {"line": 46, "column": 46},
                                                                                    "identifierName": "unKnown"
                                                                                },
                                                                                "name": "unKnown"
                                                                            }
                                                                        }],
                                                                        "kind": "var"
                                                                    }, {
                                                                        "type": "VariableDeclaration",
                                                                        "start": 1325,
                                                                        "end": 1360,
                                                                        "loc": {
                                                                            "start": {"line": 47, "column": 20},
                                                                            "end": {"line": 47, "column": 55}
                                                                        },
                                                                        "declarations": [{
                                                                            "type": "VariableDeclarator",
                                                                            "start": 1329,
                                                                            "end": 1359,
                                                                            "loc": {
                                                                                "start": {"line": 47, "column": 24},
                                                                                "end": {"line": 47, "column": 54}
                                                                            },
                                                                            "id": {
                                                                                "type": "Identifier",
                                                                                "start": 1329,
                                                                                "end": 1342,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 47,
                                                                                        "column": 24
                                                                                    },
                                                                                    "end": {"line": 47, "column": 37},
                                                                                    "identifierName": "unKnownValue1"
                                                                                },
                                                                                "name": "unKnownValue1"
                                                                            },
                                                                            "init": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1345,
                                                                                "end": 1359,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 47,
                                                                                        "column": 40
                                                                                    }, "end": {"line": 47, "column": 54}
                                                                                },
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "start": 1345,
                                                                                    "end": 1351,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 47,
                                                                                            "column": 40
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 47,
                                                                                            "column": 46
                                                                                        },
                                                                                        "identifierName": "$scope"
                                                                                    },
                                                                                    "name": "$scope"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 1352,
                                                                                    "end": 1359,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 47,
                                                                                            "column": 47
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 47,
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
                                                                    }],
                                                                    "directives": []
                                                                }
                                                            }
                                                        }, {
                                                            "type": "ObjectProperty",
                                                            "start": 1396,
                                                            "end": 1437,
                                                            "loc": {
                                                                "start": {"line": 49, "column": 16},
                                                                "end": {"line": 51, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1396,
                                                                "end": 1403,
                                                                "loc": {
                                                                    "start": {"line": 49, "column": 16},
                                                                    "end": {"line": 49, "column": 23},
                                                                    "identifierName": "objFun3"
                                                                },
                                                                "name": "objFun3"
                                                            },
                                                            "value": {
                                                                "type": "ArrowFunctionExpression",
                                                                "start": 1405,
                                                                "end": 1437,
                                                                "loc": {
                                                                    "start": {"line": 49, "column": 25},
                                                                    "end": {"line": 51, "column": 17}
                                                                },
                                                                "id": null,
                                                                "generator": false,
                                                                "expression": false,
                                                                "async": false,
                                                                "params": [{
                                                                    "type": "Identifier",
                                                                    "start": 1406,
                                                                    "end": 1408,
                                                                    "loc": {
                                                                        "start": {"line": 49, "column": 26},
                                                                        "end": {"line": 49, "column": 28},
                                                                        "identifierName": "p1"
                                                                    },
                                                                    "name": "p1"
                                                                }, {
                                                                    "type": "Identifier",
                                                                    "start": 1410,
                                                                    "end": 1412,
                                                                    "loc": {
                                                                        "start": {"line": 49, "column": 30},
                                                                        "end": {"line": 49, "column": 32},
                                                                        "identifierName": "p2"
                                                                    },
                                                                    "name": "p2"
                                                                }],
                                                                "body": {
                                                                    "type": "BlockStatement",
                                                                    "start": 1417,
                                                                    "end": 1437,
                                                                    "loc": {
                                                                        "start": {"line": 49, "column": 37},
                                                                        "end": {"line": 51, "column": 17}
                                                                    },
                                                                    "body": [],
                                                                    "directives": []
                                                                }
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 1455,
                                                            "end": 1487,
                                                            "loc": {
                                                                "start": {"line": 52, "column": 16},
                                                                "end": {"line": 54, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1459,
                                                                "end": 1464,
                                                                "loc": {
                                                                    "start": {"line": 52, "column": 20},
                                                                    "end": {"line": 52, "column": 25},
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
                                                                "start": 1467,
                                                                "end": 1487,
                                                                "loc": {
                                                                    "start": {"line": 52, "column": 28},
                                                                    "end": {"line": 54, "column": 17}
                                                                },
                                                                "body": [],
                                                                "directives": []
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 1505,
                                                            "end": 1542,
                                                            "loc": {
                                                                "start": {"line": 55, "column": 16},
                                                                "end": {"line": 57, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1509,
                                                                "end": 1514,
                                                                "loc": {
                                                                    "start": {"line": 55, "column": 20},
                                                                    "end": {"line": 55, "column": 25},
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
                                                                "start": 1515,
                                                                "end": 1520,
                                                                "loc": {
                                                                    "start": {"line": 55, "column": 26},
                                                                    "end": {"line": 55, "column": 31},
                                                                    "identifierName": "value"
                                                                },
                                                                "name": "value"
                                                            }],
                                                            "body": {
                                                                "type": "BlockStatement",
                                                                "start": 1522,
                                                                "end": 1542,
                                                                "loc": {
                                                                    "start": {"line": 55, "column": 33},
                                                                    "end": {"line": 57, "column": 17}
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
                                                    "start": 669,
                                                    "end": 673,
                                                    "loc": {
                                                        "start": {"line": 32, "column": 12},
                                                        "end": {"line": 32, "column": 16}
                                                    }
                                                }]
                                            }],
                                            "directives": [],
                                            "trailingComments": null
                                        },
                                        "trailingComments": null
                                    },
                                    "leadingComments": null,
                                    "trailingComments": null
                                }],
                                "kind": "var",
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "函数直接申明",
                                    "start": 571,
                                    "end": 579,
                                    "loc": {"start": {"line": 29, "column": 8}, "end": {"line": 29, "column": 16}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope函数初始化",
                                    "start": 1577,
                                    "end": 1589,
                                    "loc": {"start": {"line": 62, "column": 8}, "end": {"line": 62, "column": 20}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 1598,
                                "end": 1678,
                                "loc": {"start": {"line": 63, "column": 8}, "end": {"line": 65, "column": 10}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 1598,
                                    "end": 1677,
                                    "loc": {"start": {"line": 63, "column": 8}, "end": {"line": 65, "column": 9}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 1598,
                                        "end": 1613,
                                        "loc": {"start": {"line": 63, "column": 8}, "end": {"line": 63, "column": 23}},
                                        "object": {
                                            "type": "Identifier",
                                            "start": 1598,
                                            "end": 1604,
                                            "loc": {
                                                "start": {"line": 63, "column": 8},
                                                "end": {"line": 63, "column": 14},
                                                "identifierName": "$scope"
                                            },
                                            "name": "$scope",
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 1605,
                                            "end": 1613,
                                            "loc": {
                                                "start": {"line": 63, "column": 15},
                                                "end": {"line": 63, "column": 23},
                                                "identifierName": "scopeFun"
                                            },
                                            "name": "scopeFun"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "FunctionExpression",
                                        "start": 1616,
                                        "end": 1677,
                                        "loc": {"start": {"line": 63, "column": 26}, "end": {"line": 65, "column": 9}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 1626,
                                            "end": 1632,
                                            "loc": {
                                                "start": {"line": 63, "column": 36},
                                                "end": {"line": 63, "column": 42},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 1634,
                                            "end": 1677,
                                            "loc": {
                                                "start": {"line": 63, "column": 44},
                                                "end": {"line": 65, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 1648,
                                                "end": 1667,
                                                "loc": {
                                                    "start": {"line": 64, "column": 12},
                                                    "end": {"line": 64, "column": 31}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 1648,
                                                    "end": 1667,
                                                    "loc": {
                                                        "start": {"line": 64, "column": 12},
                                                        "end": {"line": 64, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 1648,
                                                        "end": 1659,
                                                        "loc": {
                                                            "start": {"line": 64, "column": 12},
                                                            "end": {"line": 64, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 1648,
                                                            "end": 1655,
                                                            "loc": {
                                                                "start": {"line": 64, "column": 12},
                                                                "end": {"line": 64, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 1656,
                                                            "end": 1659,
                                                            "loc": {
                                                                "start": {"line": 64, "column": 20},
                                                                "end": {"line": 64, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 1660,
                                                        "end": 1666,
                                                        "loc": {
                                                            "start": {"line": 64, "column": 24},
                                                            "end": {"line": 64, "column": 30},
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
                                    "start": 1577,
                                    "end": 1589,
                                    "loc": {"start": {"line": 62, "column": 8}, "end": {"line": 62, "column": 20}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope多级初始化函数",
                                    "start": 1688,
                                    "end": 1702,
                                    "loc": {"start": {"line": 67, "column": 8}, "end": {"line": 67, "column": 22}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 1711,
                                "end": 2070,
                                "loc": {"start": {"line": 68, "column": 8}, "end": {"line": 81, "column": 10}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 1711,
                                    "end": 2069,
                                    "loc": {"start": {"line": 68, "column": 8}, "end": {"line": 81, "column": 9}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 1711,
                                        "end": 1735,
                                        "loc": {"start": {"line": 68, "column": 8}, "end": {"line": 68, "column": 32}},
                                        "object": {
                                            "type": "MemberExpression",
                                            "start": 1711,
                                            "end": 1725,
                                            "loc": {
                                                "start": {"line": 68, "column": 8},
                                                "end": {"line": 68, "column": 22}
                                            },
                                            "object": {
                                                "type": "MemberExpression",
                                                "start": 1711,
                                                "end": 1722,
                                                "loc": {
                                                    "start": {"line": 68, "column": 8},
                                                    "end": {"line": 68, "column": 19}
                                                },
                                                "object": {
                                                    "type": "Identifier",
                                                    "start": 1711,
                                                    "end": 1717,
                                                    "loc": {
                                                        "start": {"line": 68, "column": 8},
                                                        "end": {"line": 68, "column": 14},
                                                        "identifierName": "$scope"
                                                    },
                                                    "name": "$scope",
                                                    "leadingComments": null
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "start": 1718,
                                                    "end": 1722,
                                                    "loc": {
                                                        "start": {"line": 68, "column": 15},
                                                        "end": {"line": 68, "column": 19},
                                                        "identifierName": "data"
                                                    },
                                                    "name": "data"
                                                },
                                                "computed": false,
                                                "leadingComments": null
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 1723,
                                                "end": 1725,
                                                "loc": {
                                                    "start": {"line": 68, "column": 20},
                                                    "end": {"line": 68, "column": 22},
                                                    "identifierName": "qq"
                                                },
                                                "name": "qq"
                                            },
                                            "computed": false,
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 1726,
                                            "end": 1735,
                                            "loc": {
                                                "start": {"line": 68, "column": 23},
                                                "end": {"line": 68, "column": 32},
                                                "identifierName": "scopeFun2"
                                            },
                                            "name": "scopeFun2"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "FunctionExpression",
                                        "start": 1738,
                                        "end": 2069,
                                        "loc": {"start": {"line": 68, "column": 35}, "end": {"line": 81, "column": 9}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 1750,
                                            "end": 2069,
                                            "loc": {
                                                "start": {"line": 68, "column": 47},
                                                "end": {"line": 81, "column": 9}
                                            },
                                            "body": [{
                                                "type": "VariableDeclaration",
                                                "start": 1765,
                                                "end": 1788,
                                                "loc": {
                                                    "start": {"line": 70, "column": 12},
                                                    "end": {"line": 70, "column": 35}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 1769,
                                                    "end": 1787,
                                                    "loc": {
                                                        "start": {"line": 70, "column": 16},
                                                        "end": {"line": 70, "column": 34}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 1769,
                                                        "end": 1776,
                                                        "loc": {
                                                            "start": {"line": 70, "column": 16},
                                                            "end": {"line": 70, "column": 23},
                                                            "identifierName": "subFun2"
                                                        },
                                                        "name": "subFun2"
                                                    },
                                                    "init": {
                                                        "type": "Identifier",
                                                        "start": 1779,
                                                        "end": 1787,
                                                        "loc": {
                                                            "start": {"line": 70, "column": 26},
                                                            "end": {"line": 70, "column": 34},
                                                            "identifierName": "_subFun2"
                                                        },
                                                        "name": "_subFun2"
                                                    }
                                                }],
                                                "kind": "var"
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 1801,
                                                "end": 1858,
                                                "loc": {
                                                    "start": {"line": 71, "column": 12},
                                                    "end": {"line": 73, "column": 14}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 1805,
                                                    "end": 1857,
                                                    "loc": {
                                                        "start": {"line": 71, "column": 16},
                                                        "end": {"line": 73, "column": 13}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 1805,
                                                        "end": 1812,
                                                        "loc": {
                                                            "start": {"line": 71, "column": 16},
                                                            "end": {"line": 71, "column": 23},
                                                            "identifierName": "subFun1"
                                                        },
                                                        "name": "subFun1"
                                                    },
                                                    "init": {
                                                        "type": "FunctionExpression",
                                                        "start": 1815,
                                                        "end": 1857,
                                                        "loc": {
                                                            "start": {"line": 71, "column": 26},
                                                            "end": {"line": 73, "column": 13}
                                                        },
                                                        "id": null,
                                                        "generator": false,
                                                        "expression": false,
                                                        "async": false,
                                                        "params": [{
                                                            "type": "Identifier",
                                                            "start": 1825,
                                                            "end": 1831,
                                                            "loc": {
                                                                "start": {"line": 71, "column": 36},
                                                                "end": {"line": 71, "column": 42},
                                                                "identifierName": "param1"
                                                            },
                                                            "name": "param1"
                                                        }, {
                                                            "type": "Identifier",
                                                            "start": 1833,
                                                            "end": 1839,
                                                            "loc": {
                                                                "start": {"line": 71, "column": 44},
                                                                "end": {"line": 71, "column": 50},
                                                                "identifierName": "param2"
                                                            },
                                                            "name": "param2"
                                                        }],
                                                        "body": {
                                                            "type": "BlockStatement",
                                                            "start": 1841,
                                                            "end": 1857,
                                                            "loc": {
                                                                "start": {"line": 71, "column": 52},
                                                                "end": {"line": 73, "column": 13}
                                                            },
                                                            "body": [],
                                                            "directives": []
                                                        }
                                                    }
                                                }],
                                                "kind": "var"
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 1871,
                                                "end": 1896,
                                                "loc": {
                                                    "start": {"line": 74, "column": 12},
                                                    "end": {"line": 74, "column": 37}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 1871,
                                                    "end": 1895,
                                                    "loc": {
                                                        "start": {"line": 74, "column": 12},
                                                        "end": {"line": 74, "column": 36}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 1871,
                                                        "end": 1878,
                                                        "loc": {
                                                            "start": {"line": 74, "column": 12},
                                                            "end": {"line": 74, "column": 19},
                                                            "identifierName": "subFun2"
                                                        },
                                                        "name": "subFun2"
                                                    },
                                                    "arguments": [{
                                                        "type": "MemberExpression",
                                                        "start": 1879,
                                                        "end": 1894,
                                                        "loc": {
                                                            "start": {"line": 74, "column": 20},
                                                            "end": {"line": 74, "column": 35}
                                                        },
                                                        "object": {
                                                            "type": "CallExpression",
                                                            "start": 1879,
                                                            "end": 1888,
                                                            "loc": {
                                                                "start": {"line": 74, "column": 20},
                                                                "end": {"line": 74, "column": 29}
                                                            },
                                                            "callee": {
                                                                "type": "Identifier",
                                                                "start": 1879,
                                                                "end": 1886,
                                                                "loc": {
                                                                    "start": {"line": 74, "column": 20},
                                                                    "end": {"line": 74, "column": 27},
                                                                    "identifierName": "subFun1"
                                                                },
                                                                "name": "subFun1"
                                                            },
                                                            "arguments": []
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 1889,
                                                            "end": 1894,
                                                            "loc": {
                                                                "start": {"line": 74, "column": 30},
                                                                "end": {"line": 74, "column": 35},
                                                                "identifierName": "value"
                                                            },
                                                            "name": "value"
                                                        },
                                                        "computed": false
                                                    }]
                                                }
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 1909,
                                                "end": 1941,
                                                "loc": {
                                                    "start": {"line": 75, "column": 12},
                                                    "end": {"line": 75, "column": 44}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 1909,
                                                    "end": 1940,
                                                    "loc": {
                                                        "start": {"line": 75, "column": 12},
                                                        "end": {"line": 75, "column": 43}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 1909,
                                                        "end": 1916,
                                                        "loc": {
                                                            "start": {"line": 75, "column": 12},
                                                            "end": {"line": 75, "column": 19},
                                                            "identifierName": "subFun1"
                                                        },
                                                        "name": "subFun1"
                                                    },
                                                    "arguments": [{
                                                        "type": "MemberExpression",
                                                        "start": 1917,
                                                        "end": 1939,
                                                        "loc": {
                                                            "start": {"line": 75, "column": 20},
                                                            "end": {"line": 75, "column": 42}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 1917,
                                                            "end": 1925,
                                                            "loc": {
                                                                "start": {"line": 75, "column": 20},
                                                                "end": {"line": 75, "column": 28},
                                                                "identifierName": "mutiVar3"
                                                            },
                                                            "name": "mutiVar3"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 1926,
                                                            "end": 1939,
                                                            "loc": {
                                                                "start": {"line": 75, "column": 29},
                                                                "end": {"line": 75, "column": 42},
                                                                "identifierName": "mutiVar3Value"
                                                            },
                                                            "name": "mutiVar3Value"
                                                        },
                                                        "computed": false
                                                    }]
                                                }
                                            }, {
                                                "type": "FunctionDeclaration",
                                                "start": 1954,
                                                "end": 2004,
                                                "loc": {
                                                    "start": {"line": 76, "column": 12},
                                                    "end": {"line": 78, "column": 13}
                                                },
                                                "id": {
                                                    "type": "Identifier",
                                                    "start": 1963,
                                                    "end": 1971,
                                                    "loc": {
                                                        "start": {"line": 76, "column": 21},
                                                        "end": {"line": 76, "column": 29},
                                                        "identifierName": "_subFun2"
                                                    },
                                                    "name": "_subFun2"
                                                },
                                                "generator": false,
                                                "expression": false,
                                                "async": false,
                                                "params": [{
                                                    "type": "Identifier",
                                                    "start": 1972,
                                                    "end": 1978,
                                                    "loc": {
                                                        "start": {"line": 76, "column": 30},
                                                        "end": {"line": 76, "column": 36},
                                                        "identifierName": "param1"
                                                    },
                                                    "name": "param1"
                                                }, {
                                                    "type": "Identifier",
                                                    "start": 1980,
                                                    "end": 1986,
                                                    "loc": {
                                                        "start": {"line": 76, "column": 38},
                                                        "end": {"line": 76, "column": 44},
                                                        "identifierName": "param2"
                                                    },
                                                    "name": "param2"
                                                }],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "start": 1988,
                                                    "end": 2004,
                                                    "loc": {
                                                        "start": {"line": 76, "column": 46},
                                                        "end": {"line": 78, "column": 13}
                                                    },
                                                    "body": [],
                                                    "directives": []
                                                }
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 2017,
                                                "end": 2058,
                                                "loc": {
                                                    "start": {"line": 79, "column": 12},
                                                    "end": {"line": 79, "column": 53}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 2021,
                                                    "end": 2057,
                                                    "loc": {
                                                        "start": {"line": 79, "column": 16},
                                                        "end": {"line": 79, "column": 52}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 2021,
                                                        "end": 2032,
                                                        "loc": {
                                                            "start": {"line": 79, "column": 16},
                                                            "end": {"line": 79, "column": 27},
                                                            "identifierName": "fnMutiValue"
                                                        },
                                                        "name": "fnMutiValue"
                                                    },
                                                    "init": {
                                                        "type": "MemberExpression",
                                                        "start": 2035,
                                                        "end": 2057,
                                                        "loc": {
                                                            "start": {"line": 79, "column": 30},
                                                            "end": {"line": 79, "column": 52}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 2035,
                                                            "end": 2043,
                                                            "loc": {
                                                                "start": {"line": 79, "column": 30},
                                                                "end": {"line": 79, "column": 38},
                                                                "identifierName": "mutiVar3"
                                                            },
                                                            "name": "mutiVar3"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 2044,
                                                            "end": 2057,
                                                            "loc": {
                                                                "start": {"line": 79, "column": 39},
                                                                "end": {"line": 79, "column": 52},
                                                                "identifierName": "mutiVar3Value"
                                                            },
                                                            "name": "mutiVar3Value"
                                                        },
                                                        "computed": false
                                                    }
                                                }],
                                                "kind": "var"
                                            }],
                                            "directives": []
                                        }
                                    },
                                    "leadingComments": null
                                },
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope多级初始化函数",
                                    "start": 1688,
                                    "end": 1702,
                                    "loc": {"start": {"line": 67, "column": 8}, "end": {"line": 67, "column": 22}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentBlock",
                                    "value": "*\n         * 表达式\n         ",
                                    "start": 2080,
                                    "end": 2110,
                                    "loc": {"start": {"line": 83, "column": 8}, "end": {"line": 85, "column": 11}}
                                }]
                            }, {
                                "type": "FunctionDeclaration",
                                "start": 2119,
                                "end": 2202,
                                "loc": {"start": {"line": 86, "column": 8}, "end": {"line": 88, "column": 9}},
                                "id": {
                                    "type": "Identifier",
                                    "start": 2128,
                                    "end": 2134,
                                    "loc": {
                                        "start": {"line": 86, "column": 17},
                                        "end": {"line": 86, "column": 23},
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
                                    "start": 2135,
                                    "end": 2141,
                                    "loc": {
                                        "start": {"line": 86, "column": 24},
                                        "end": {"line": 86, "column": 30},
                                        "identifierName": "param1"
                                    },
                                    "name": "param1"
                                }, {
                                    "type": "Identifier",
                                    "start": 2143,
                                    "end": 2149,
                                    "loc": {
                                        "start": {"line": 86, "column": 32},
                                        "end": {"line": 86, "column": 38},
                                        "identifierName": "param2"
                                    },
                                    "name": "param2"
                                }],
                                "body": {
                                    "type": "BlockStatement",
                                    "start": 2151,
                                    "end": 2202,
                                    "loc": {"start": {"line": 86, "column": 40}, "end": {"line": 88, "column": 9}},
                                    "body": [{
                                        "type": "ExpressionStatement",
                                        "start": 2165,
                                        "end": 2192,
                                        "loc": {"start": {"line": 87, "column": 12}, "end": {"line": 87, "column": 39}},
                                        "expression": {
                                            "type": "CallExpression",
                                            "start": 2165,
                                            "end": 2192,
                                            "loc": {
                                                "start": {"line": 87, "column": 12},
                                                "end": {"line": 87, "column": 39}
                                            },
                                            "callee": {
                                                "type": "MemberExpression",
                                                "start": 2165,
                                                "end": 2176,
                                                "loc": {
                                                    "start": {"line": 87, "column": 12},
                                                    "end": {"line": 87, "column": 23}
                                                },
                                                "object": {
                                                    "type": "Identifier",
                                                    "start": 2165,
                                                    "end": 2172,
                                                    "loc": {
                                                        "start": {"line": 87, "column": 12},
                                                        "end": {"line": 87, "column": 19},
                                                        "identifierName": "console"
                                                    },
                                                    "name": "console"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "start": 2173,
                                                    "end": 2176,
                                                    "loc": {
                                                        "start": {"line": 87, "column": 20},
                                                        "end": {"line": 87, "column": 23},
                                                        "identifierName": "log"
                                                    },
                                                    "name": "log"
                                                },
                                                "computed": false
                                            },
                                            "arguments": [{
                                                "type": "Identifier",
                                                "start": 2177,
                                                "end": 2183,
                                                "loc": {
                                                    "start": {"line": 87, "column": 24},
                                                    "end": {"line": 87, "column": 30},
                                                    "identifierName": "param1"
                                                },
                                                "name": "param1"
                                            }, {
                                                "type": "Identifier",
                                                "start": 2185,
                                                "end": 2191,
                                                "loc": {
                                                    "start": {"line": 87, "column": 32},
                                                    "end": {"line": 87, "column": 38},
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
                                    "start": 2080,
                                    "end": 2110,
                                    "loc": {"start": {"line": 83, "column": 8}, "end": {"line": 85, "column": 11}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "直接调用",
                                    "start": 2212,
                                    "end": 2218,
                                    "loc": {"start": {"line": 90, "column": 8}, "end": {"line": 90, "column": 14}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 2227,
                                "end": 2237,
                                "loc": {"start": {"line": 91, "column": 8}, "end": {"line": 91, "column": 18}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 2227,
                                    "end": 2236,
                                    "loc": {"start": {"line": 91, "column": 8}, "end": {"line": 91, "column": 17}},
                                    "callee": {
                                        "type": "Identifier",
                                        "start": 2227,
                                        "end": 2234,
                                        "loc": {
                                            "start": {"line": 91, "column": 8},
                                            "end": {"line": 91, "column": 15},
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
                                    "start": 2212,
                                    "end": 2218,
                                    "loc": {"start": {"line": 90, "column": 8}, "end": {"line": 90, "column": 14}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "调用",
                                    "start": 2246,
                                    "end": 2250,
                                    "loc": {"start": {"line": 92, "column": 8}, "end": {"line": 92, "column": 12}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 2259,
                                "end": 2338,
                                "loc": {"start": {"line": 93, "column": 8}, "end": {"line": 95, "column": 11}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 2259,
                                    "end": 2337,
                                    "loc": {"start": {"line": 93, "column": 8}, "end": {"line": 95, "column": 10}},
                                    "callee": {
                                        "type": "MemberExpression",
                                        "start": 2259,
                                        "end": 2274,
                                        "loc": {"start": {"line": 93, "column": 8}, "end": {"line": 93, "column": 23}},
                                        "object": {
                                            "type": "Identifier",
                                            "start": 2259,
                                            "end": 2265,
                                            "loc": {
                                                "start": {"line": 93, "column": 8},
                                                "end": {"line": 93, "column": 14},
                                                "identifierName": "$scope"
                                            },
                                            "name": "$scope",
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 2266,
                                            "end": 2274,
                                            "loc": {
                                                "start": {"line": 93, "column": 15},
                                                "end": {"line": 93, "column": 23},
                                                "identifierName": "scopeFun"
                                            },
                                            "name": "scopeFun"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "arguments": [{
                                        "type": "FunctionExpression",
                                        "start": 2275,
                                        "end": 2336,
                                        "loc": {"start": {"line": 93, "column": 24}, "end": {"line": 95, "column": 9}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 2285,
                                            "end": 2291,
                                            "loc": {
                                                "start": {"line": 93, "column": 34},
                                                "end": {"line": 93, "column": 40},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 2293,
                                            "end": 2336,
                                            "loc": {
                                                "start": {"line": 93, "column": 42},
                                                "end": {"line": 95, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 2307,
                                                "end": 2326,
                                                "loc": {
                                                    "start": {"line": 94, "column": 12},
                                                    "end": {"line": 94, "column": 31}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 2307,
                                                    "end": 2326,
                                                    "loc": {
                                                        "start": {"line": 94, "column": 12},
                                                        "end": {"line": 94, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 2307,
                                                        "end": 2318,
                                                        "loc": {
                                                            "start": {"line": 94, "column": 12},
                                                            "end": {"line": 94, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 2307,
                                                            "end": 2314,
                                                            "loc": {
                                                                "start": {"line": 94, "column": 12},
                                                                "end": {"line": 94, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 2315,
                                                            "end": 2318,
                                                            "loc": {
                                                                "start": {"line": 94, "column": 20},
                                                                "end": {"line": 94, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 2319,
                                                        "end": 2325,
                                                        "loc": {
                                                            "start": {"line": 94, "column": 24},
                                                            "end": {"line": 94, "column": 30},
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
                                    "start": 2246,
                                    "end": 2250,
                                    "loc": {"start": {"line": 92, "column": 8}, "end": {"line": 92, "column": 12}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 2347,
                                "end": 2371,
                                "loc": {"start": {"line": 96, "column": 8}, "end": {"line": 96, "column": 32}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 2347,
                                    "end": 2370,
                                    "loc": {"start": {"line": 96, "column": 8}, "end": {"line": 96, "column": 31}},
                                    "callee": {
                                        "type": "MemberExpression",
                                        "start": 2347,
                                        "end": 2368,
                                        "loc": {"start": {"line": 96, "column": 8}, "end": {"line": 96, "column": 29}},
                                        "object": {
                                            "type": "MemberExpression",
                                            "start": 2347,
                                            "end": 2358,
                                            "loc": {
                                                "start": {"line": 96, "column": 8},
                                                "end": {"line": 96, "column": 19}
                                            },
                                            "object": {
                                                "type": "Identifier",
                                                "start": 2347,
                                                "end": 2353,
                                                "loc": {
                                                    "start": {"line": 96, "column": 8},
                                                    "end": {"line": 96, "column": 14},
                                                    "identifierName": "$scope"
                                                },
                                                "name": "$scope"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 2354,
                                                "end": 2358,
                                                "loc": {
                                                    "start": {"line": 96, "column": 15},
                                                    "end": {"line": 96, "column": 19},
                                                    "identifierName": "data"
                                                },
                                                "name": "data"
                                            },
                                            "computed": false
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 2359,
                                            "end": 2368,
                                            "loc": {
                                                "start": {"line": 96, "column": 20},
                                                "end": {"line": 96, "column": 29},
                                                "identifierName": "scopeFun2"
                                            },
                                            "name": "scopeFun2"
                                        },
                                        "computed": false
                                    },
                                    "arguments": []
                                }
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
        "value": "单个变量申明",
        "start": 275,
        "end": 283,
        "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "多个变量申明， 包括函数",
        "start": 339,
        "end": 353,
        "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 22}}
    }, {
        "type": "CommentLine",
        "value": "函数直接申明",
        "start": 571,
        "end": 579,
        "loc": {"start": {"line": 29, "column": 8}, "end": {"line": 29, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "对象",
        "start": 669,
        "end": 673,
        "loc": {"start": {"line": 32, "column": 12}, "end": {"line": 32, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "scope函数初始化",
        "start": 1577,
        "end": 1589,
        "loc": {"start": {"line": 62, "column": 8}, "end": {"line": 62, "column": 20}}
    }, {
        "type": "CommentLine",
        "value": "scope多级初始化函数",
        "start": 1688,
        "end": 1702,
        "loc": {"start": {"line": 67, "column": 8}, "end": {"line": 67, "column": 22}}
    }, {
        "type": "CommentBlock",
        "value": "*\n         * 表达式\n         ",
        "start": 2080,
        "end": 2110,
        "loc": {"start": {"line": 83, "column": 8}, "end": {"line": 85, "column": 11}}
    }, {
        "type": "CommentLine",
        "value": "直接调用",
        "start": 2212,
        "end": 2218,
        "loc": {"start": {"line": 90, "column": 8}, "end": {"line": 90, "column": 14}}
    }, {
        "type": "CommentLine",
        "value": "调用",
        "start": 2246,
        "end": 2250,
        "loc": {"start": {"line": 92, "column": 8}, "end": {"line": 92, "column": 12}}
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
        "type": "CommentLine",
        "value": "单个变量申明",
        "start": 275,
        "end": 283,
        "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 16}}
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
        "start": 292,
        "end": 295,
        "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 11}}
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
        "start": 296,
        "end": 310,
        "loc": {"start": {"line": 18, "column": 12}, "end": {"line": 18, "column": 26}}
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
        "start": 311,
        "end": 312,
        "loc": {"start": {"line": 18, "column": 27}, "end": {"line": 18, "column": 28}}
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
        "start": 313,
        "end": 329,
        "loc": {"start": {"line": 18, "column": 29}, "end": {"line": 18, "column": 45}}
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
        }, "start": 329, "end": 330, "loc": {"start": {"line": 18, "column": 45}, "end": {"line": 18, "column": 46}}
    }, {
        "type": "CommentLine",
        "value": "多个变量申明， 包括函数",
        "start": 339,
        "end": 353,
        "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 22}}
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
        "start": 362,
        "end": 365,
        "loc": {"start": {"line": 20, "column": 8}, "end": {"line": 20, "column": 11}}
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
        "start": 366,
        "end": 374,
        "loc": {"start": {"line": 20, "column": 12}, "end": {"line": 20, "column": 20}}
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
        }, "start": 374, "end": 375, "loc": {"start": {"line": 20, "column": 20}, "end": {"line": 20, "column": 21}}
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
        "start": 388,
        "end": 396,
        "loc": {"start": {"line": 21, "column": 12}, "end": {"line": 21, "column": 20}}
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
        "start": 397,
        "end": 398,
        "loc": {"start": {"line": 21, "column": 21}, "end": {"line": 21, "column": 22}}
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
        "start": 399,
        "end": 403,
        "loc": {"start": {"line": 21, "column": 23}, "end": {"line": 21, "column": 27}}
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
        }, "start": 403, "end": 404, "loc": {"start": {"line": 21, "column": 27}, "end": {"line": 21, "column": 28}}
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
        "start": 417,
        "end": 425,
        "loc": {"start": {"line": 22, "column": 12}, "end": {"line": 22, "column": 20}}
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
        "start": 426,
        "end": 427,
        "loc": {"start": {"line": 22, "column": 21}, "end": {"line": 22, "column": 22}}
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
        "start": 428,
        "end": 438,
        "loc": {"start": {"line": 22, "column": 23}, "end": {"line": 22, "column": 33}}
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
        }, "start": 438, "end": 439, "loc": {"start": {"line": 22, "column": 33}, "end": {"line": 22, "column": 34}}
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
        "start": 452,
        "end": 459,
        "loc": {"start": {"line": 23, "column": 12}, "end": {"line": 23, "column": 19}}
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
        "start": 460,
        "end": 461,
        "loc": {"start": {"line": 23, "column": 20}, "end": {"line": 23, "column": 21}}
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
        "start": 462,
        "end": 470,
        "loc": {"start": {"line": 23, "column": 22}, "end": {"line": 23, "column": 30}}
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
        }, "start": 471, "end": 472, "loc": {"start": {"line": 23, "column": 31}, "end": {"line": 23, "column": 32}}
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
        "start": 472,
        "end": 478,
        "loc": {"start": {"line": 23, "column": 32}, "end": {"line": 23, "column": 38}}
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
        }, "start": 478, "end": 479, "loc": {"start": {"line": 23, "column": 38}, "end": {"line": 23, "column": 39}}
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
        }, "start": 480, "end": 481, "loc": {"start": {"line": 23, "column": 40}, "end": {"line": 23, "column": 41}}
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
        "start": 498,
        "end": 505,
        "loc": {"start": {"line": 24, "column": 16}, "end": {"line": 24, "column": 23}}
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
        }, "start": 505, "end": 506, "loc": {"start": {"line": 24, "column": 23}, "end": {"line": 24, "column": 24}}
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
        "start": 506,
        "end": 509,
        "loc": {"start": {"line": 24, "column": 24}, "end": {"line": 24, "column": 27}}
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
        }, "start": 509, "end": 510, "loc": {"start": {"line": 24, "column": 27}, "end": {"line": 24, "column": 28}}
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
        "start": 510,
        "end": 516,
        "loc": {"start": {"line": 24, "column": 28}, "end": {"line": 24, "column": 34}}
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
        }, "start": 516, "end": 517, "loc": {"start": {"line": 24, "column": 34}, "end": {"line": 24, "column": 35}}
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
        }, "start": 530, "end": 531, "loc": {"start": {"line": 25, "column": 12}, "end": {"line": 25, "column": 13}}
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
        }, "start": 531, "end": 532, "loc": {"start": {"line": 25, "column": 13}, "end": {"line": 25, "column": 14}}
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
        "start": 545,
        "end": 553,
        "loc": {"start": {"line": 26, "column": 12}, "end": {"line": 26, "column": 20}}
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
        "start": 554,
        "end": 555,
        "loc": {"start": {"line": 26, "column": 21}, "end": {"line": 26, "column": 22}}
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
        "value": 100,
        "start": 556,
        "end": 559,
        "loc": {"start": {"line": 26, "column": 23}, "end": {"line": 26, "column": 26}}
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
        }, "start": 559, "end": 560, "loc": {"start": {"line": 26, "column": 26}, "end": {"line": 26, "column": 27}}
    }, {
        "type": "CommentLine",
        "value": "函数直接申明",
        "start": 571,
        "end": 579,
        "loc": {"start": {"line": 29, "column": 8}, "end": {"line": 29, "column": 16}}
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
        "start": 588,
        "end": 591,
        "loc": {"start": {"line": 30, "column": 8}, "end": {"line": 30, "column": 11}}
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
        "start": 592,
        "end": 601,
        "loc": {"start": {"line": 30, "column": 12}, "end": {"line": 30, "column": 21}}
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
        "start": 602,
        "end": 603,
        "loc": {"start": {"line": 30, "column": 22}, "end": {"line": 30, "column": 23}}
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
        "start": 604,
        "end": 612,
        "loc": {"start": {"line": 30, "column": 24}, "end": {"line": 30, "column": 32}}
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
        }, "start": 613, "end": 614, "loc": {"start": {"line": 30, "column": 33}, "end": {"line": 30, "column": 34}}
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
        "start": 614,
        "end": 620,
        "loc": {"start": {"line": 30, "column": 34}, "end": {"line": 30, "column": 40}}
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
        }, "start": 620, "end": 621, "loc": {"start": {"line": 30, "column": 40}, "end": {"line": 30, "column": 41}}
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
        }, "start": 622, "end": 623, "loc": {"start": {"line": 30, "column": 42}, "end": {"line": 30, "column": 43}}
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
        "start": 636,
        "end": 643,
        "loc": {"start": {"line": 31, "column": 12}, "end": {"line": 31, "column": 19}}
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
        }, "start": 643, "end": 644, "loc": {"start": {"line": 31, "column": 19}, "end": {"line": 31, "column": 20}}
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
        "start": 644,
        "end": 647,
        "loc": {"start": {"line": 31, "column": 20}, "end": {"line": 31, "column": 23}}
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
        }, "start": 647, "end": 648, "loc": {"start": {"line": 31, "column": 23}, "end": {"line": 31, "column": 24}}
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
        "start": 648,
        "end": 654,
        "loc": {"start": {"line": 31, "column": 24}, "end": {"line": 31, "column": 30}}
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
        }, "start": 654, "end": 655, "loc": {"start": {"line": 31, "column": 30}, "end": {"line": 31, "column": 31}}
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
        }, "start": 655, "end": 656, "loc": {"start": {"line": 31, "column": 31}, "end": {"line": 31, "column": 32}}
    }, {
        "type": "CommentLine",
        "value": "对象",
        "start": 669,
        "end": 673,
        "loc": {"start": {"line": 32, "column": 12}, "end": {"line": 32, "column": 16}}
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
        "start": 686,
        "end": 689,
        "loc": {"start": {"line": 33, "column": 12}, "end": {"line": 33, "column": 15}}
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
        "start": 690,
        "end": 693,
        "loc": {"start": {"line": 33, "column": 16}, "end": {"line": 33, "column": 19}}
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
        "start": 694,
        "end": 695,
        "loc": {"start": {"line": 33, "column": 20}, "end": {"line": 33, "column": 21}}
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
        }, "start": 696, "end": 697, "loc": {"start": {"line": 33, "column": 22}, "end": {"line": 33, "column": 23}}
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
        "start": 714,
        "end": 721,
        "loc": {"start": {"line": 34, "column": 16}, "end": {"line": 34, "column": 23}}
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
        }, "start": 721, "end": 722, "loc": {"start": {"line": 34, "column": 23}, "end": {"line": 34, "column": 24}}
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
        "start": 723,
        "end": 732,
        "loc": {"start": {"line": 34, "column": 25}, "end": {"line": 34, "column": 34}}
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
        }, "start": 732, "end": 733, "loc": {"start": {"line": 34, "column": 34}, "end": {"line": 34, "column": 35}}
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
        "start": 750,
        "end": 757,
        "loc": {"start": {"line": 35, "column": 16}, "end": {"line": 35, "column": 23}}
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
        }, "start": 757, "end": 758, "loc": {"start": {"line": 35, "column": 23}, "end": {"line": 35, "column": 24}}
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
        "start": 758,
        "end": 764,
        "loc": {"start": {"line": 35, "column": 24}, "end": {"line": 35, "column": 30}}
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
        }, "start": 764, "end": 765, "loc": {"start": {"line": 35, "column": 30}, "end": {"line": 35, "column": 31}}
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
        "start": 766,
        "end": 772,
        "loc": {"start": {"line": 35, "column": 32}, "end": {"line": 35, "column": 38}}
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
        }, "start": 772, "end": 773, "loc": {"start": {"line": 35, "column": 38}, "end": {"line": 35, "column": 39}}
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
        }, "start": 773, "end": 774, "loc": {"start": {"line": 35, "column": 39}, "end": {"line": 35, "column": 40}}
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
        "start": 795,
        "end": 802,
        "loc": {"start": {"line": 36, "column": 20}, "end": {"line": 36, "column": 27}}
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
        }, "start": 802, "end": 803, "loc": {"start": {"line": 36, "column": 27}, "end": {"line": 36, "column": 28}}
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
        "start": 803,
        "end": 806,
        "loc": {"start": {"line": 36, "column": 28}, "end": {"line": 36, "column": 31}}
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
        }, "start": 806, "end": 807, "loc": {"start": {"line": 36, "column": 31}, "end": {"line": 36, "column": 32}}
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
        "start": 807,
        "end": 813,
        "loc": {"start": {"line": 36, "column": 32}, "end": {"line": 36, "column": 38}}
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
        }, "start": 813, "end": 814, "loc": {"start": {"line": 36, "column": 38}, "end": {"line": 36, "column": 39}}
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
        }, "start": 831, "end": 832, "loc": {"start": {"line": 37, "column": 16}, "end": {"line": 37, "column": 17}}
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
        }, "start": 832, "end": 833, "loc": {"start": {"line": 37, "column": 17}, "end": {"line": 37, "column": 18}}
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
        "start": 850,
        "end": 857,
        "loc": {"start": {"line": 38, "column": 16}, "end": {"line": 38, "column": 23}}
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
        }, "start": 857, "end": 858, "loc": {"start": {"line": 38, "column": 23}, "end": {"line": 38, "column": 24}}
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
        "start": 859,
        "end": 867,
        "loc": {"start": {"line": 38, "column": 25}, "end": {"line": 38, "column": 33}}
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
        }, "start": 868, "end": 869, "loc": {"start": {"line": 38, "column": 34}, "end": {"line": 38, "column": 35}}
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
        "start": 869,
        "end": 875,
        "loc": {"start": {"line": 38, "column": 35}, "end": {"line": 38, "column": 41}}
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
        }, "start": 875, "end": 876, "loc": {"start": {"line": 38, "column": 41}, "end": {"line": 38, "column": 42}}
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
        "start": 877,
        "end": 883,
        "loc": {"start": {"line": 38, "column": 43}, "end": {"line": 38, "column": 49}}
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
        }, "start": 883, "end": 884, "loc": {"start": {"line": 38, "column": 49}, "end": {"line": 38, "column": 50}}
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
        }, "start": 885, "end": 886, "loc": {"start": {"line": 38, "column": 51}, "end": {"line": 38, "column": 52}}
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
        "start": 907,
        "end": 914,
        "loc": {"start": {"line": 39, "column": 20}, "end": {"line": 39, "column": 27}}
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
        }, "start": 914, "end": 915, "loc": {"start": {"line": 39, "column": 27}, "end": {"line": 39, "column": 28}}
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
        "start": 915,
        "end": 918,
        "loc": {"start": {"line": 39, "column": 28}, "end": {"line": 39, "column": 31}}
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
        }, "start": 918, "end": 919, "loc": {"start": {"line": 39, "column": 31}, "end": {"line": 39, "column": 32}}
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
        "start": 919,
        "end": 925,
        "loc": {"start": {"line": 39, "column": 32}, "end": {"line": 39, "column": 38}}
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
        }, "start": 925, "end": 926, "loc": {"start": {"line": 39, "column": 38}, "end": {"line": 39, "column": 39}}
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
        "start": 927,
        "end": 933,
        "loc": {"start": {"line": 39, "column": 40}, "end": {"line": 39, "column": 46}}
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
        }, "start": 933, "end": 934, "loc": {"start": {"line": 39, "column": 46}, "end": {"line": 39, "column": 47}}
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
        }, "start": 934, "end": 935, "loc": {"start": {"line": 39, "column": 47}, "end": {"line": 39, "column": 48}}
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
        "start": 956,
        "end": 964,
        "loc": {"start": {"line": 40, "column": 20}, "end": {"line": 40, "column": 28}}
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
        "start": 965,
        "end": 966,
        "loc": {"start": {"line": 40, "column": 29}, "end": {"line": 40, "column": 30}}
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
        "start": 967,
        "end": 969,
        "loc": {"start": {"line": 40, "column": 31}, "end": {"line": 40, "column": 33}}
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
        }, "start": 969, "end": 970, "loc": {"start": {"line": 40, "column": 33}, "end": {"line": 40, "column": 34}}
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
        "start": 991,
        "end": 997,
        "loc": {"start": {"line": 41, "column": 20}, "end": {"line": 41, "column": 26}}
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
        }, "start": 997, "end": 998, "loc": {"start": {"line": 41, "column": 26}, "end": {"line": 41, "column": 27}}
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
        "start": 998,
        "end": 1002,
        "loc": {"start": {"line": 41, "column": 27}, "end": {"line": 41, "column": 31}}
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
        }, "start": 1002, "end": 1003, "loc": {"start": {"line": 41, "column": 31}, "end": {"line": 41, "column": 32}}
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
        "start": 1003,
        "end": 1011,
        "loc": {"start": {"line": 41, "column": 32}, "end": {"line": 41, "column": 40}}
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
        "start": 1012,
        "end": 1013,
        "loc": {"start": {"line": 41, "column": 41}, "end": {"line": 41, "column": 42}}
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
        "start": 1014,
        "end": 1022,
        "loc": {"start": {"line": 41, "column": 43}, "end": {"line": 41, "column": 51}}
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
        }, "start": 1022, "end": 1023, "loc": {"start": {"line": 41, "column": 51}, "end": {"line": 41, "column": 52}}
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
        "start": 1044,
        "end": 1050,
        "loc": {"start": {"line": 42, "column": 20}, "end": {"line": 42, "column": 26}}
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
        }, "start": 1050, "end": 1051, "loc": {"start": {"line": 42, "column": 26}, "end": {"line": 42, "column": 27}}
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
        "start": 1051,
        "end": 1055,
        "loc": {"start": {"line": 42, "column": 27}, "end": {"line": 42, "column": 31}}
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
        }, "start": 1055, "end": 1056, "loc": {"start": {"line": 42, "column": 31}, "end": {"line": 42, "column": 32}}
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
        "start": 1056,
        "end": 1066,
        "loc": {"start": {"line": 42, "column": 32}, "end": {"line": 42, "column": 42}}
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
        }, "start": 1066, "end": 1067, "loc": {"start": {"line": 42, "column": 42}, "end": {"line": 42, "column": 43}}
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
        "start": 1068,
        "end": 1069,
        "loc": {"start": {"line": 42, "column": 44}, "end": {"line": 42, "column": 45}}
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
        "start": 1070,
        "end": 1078,
        "loc": {"start": {"line": 42, "column": 46}, "end": {"line": 42, "column": 54}}
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
        }, "start": 1078, "end": 1079, "loc": {"start": {"line": 42, "column": 54}, "end": {"line": 42, "column": 55}}
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
        "start": 1100,
        "end": 1106,
        "loc": {"start": {"line": 43, "column": 20}, "end": {"line": 43, "column": 26}}
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
        }, "start": 1106, "end": 1107, "loc": {"start": {"line": 43, "column": 26}, "end": {"line": 43, "column": 27}}
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
        "start": 1107,
        "end": 1111,
        "loc": {"start": {"line": 43, "column": 27}, "end": {"line": 43, "column": 31}}
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
        }, "start": 1111, "end": 1112, "loc": {"start": {"line": 43, "column": 31}, "end": {"line": 43, "column": 32}}
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
        "start": 1112,
        "end": 1120,
        "loc": {"start": {"line": 43, "column": 32}, "end": {"line": 43, "column": 40}}
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
        }, "start": 1120, "end": 1121, "loc": {"start": {"line": 43, "column": 40}, "end": {"line": 43, "column": 41}}
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
        "start": 1122,
        "end": 1123,
        "loc": {"start": {"line": 43, "column": 42}, "end": {"line": 43, "column": 43}}
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
        "start": 1124,
        "end": 1132,
        "loc": {"start": {"line": 43, "column": 44}, "end": {"line": 43, "column": 52}}
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
        }, "start": 1132, "end": 1133, "loc": {"start": {"line": 43, "column": 52}, "end": {"line": 43, "column": 53}}
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
        "loc": {"start": {"line": 44, "column": 20}, "end": {"line": 44, "column": 26}}
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
        }, "start": 1160, "end": 1161, "loc": {"start": {"line": 44, "column": 26}, "end": {"line": 44, "column": 27}}
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
        "loc": {"start": {"line": 44, "column": 27}, "end": {"line": 44, "column": 31}}
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
        }, "start": 1165, "end": 1166, "loc": {"start": {"line": 44, "column": 31}, "end": {"line": 44, "column": 32}}
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
        "start": 1166,
        "end": 1174,
        "loc": {"start": {"line": 44, "column": 32}, "end": {"line": 44, "column": 40}}
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
        }, "start": 1174, "end": 1175, "loc": {"start": {"line": 44, "column": 40}, "end": {"line": 44, "column": 41}}
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
        "start": 1175,
        "end": 1188,
        "loc": {"start": {"line": 44, "column": 41}, "end": {"line": 44, "column": 54}}
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
        }, "start": 1188, "end": 1189, "loc": {"start": {"line": 44, "column": 54}, "end": {"line": 44, "column": 55}}
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
        "start": 1190,
        "end": 1191,
        "loc": {"start": {"line": 44, "column": 56}, "end": {"line": 44, "column": 57}}
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
        "start": 1192,
        "end": 1200,
        "loc": {"start": {"line": 44, "column": 58}, "end": {"line": 44, "column": 66}}
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
        }, "start": 1200, "end": 1201, "loc": {"start": {"line": 44, "column": 66}, "end": {"line": 44, "column": 67}}
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
        "start": 1222,
        "end": 1228,
        "loc": {"start": {"line": 45, "column": 20}, "end": {"line": 45, "column": 26}}
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
        }, "start": 1228, "end": 1229, "loc": {"start": {"line": 45, "column": 26}, "end": {"line": 45, "column": 27}}
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
        "start": 1229,
        "end": 1233,
        "loc": {"start": {"line": 45, "column": 27}, "end": {"line": 45, "column": 31}}
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
        }, "start": 1233, "end": 1234, "loc": {"start": {"line": 45, "column": 31}, "end": {"line": 45, "column": 32}}
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
        "start": 1234,
        "end": 1242,
        "loc": {"start": {"line": 45, "column": 32}, "end": {"line": 45, "column": 40}}
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
        "start": 1243,
        "end": 1244,
        "loc": {"start": {"line": 45, "column": 41}, "end": {"line": 45, "column": 42}}
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
        "start": 1245,
        "end": 1255,
        "loc": {"start": {"line": 45, "column": 43}, "end": {"line": 45, "column": 53}}
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
        }, "start": 1255, "end": 1256, "loc": {"start": {"line": 45, "column": 53}, "end": {"line": 45, "column": 54}}
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
        "start": 1277,
        "end": 1280,
        "loc": {"start": {"line": 46, "column": 20}, "end": {"line": 46, "column": 23}}
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
        "start": 1281,
        "end": 1293,
        "loc": {"start": {"line": 46, "column": 24}, "end": {"line": 46, "column": 36}}
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
        "start": 1294,
        "end": 1295,
        "loc": {"start": {"line": 46, "column": 37}, "end": {"line": 46, "column": 38}}
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
        "start": 1296,
        "end": 1303,
        "loc": {"start": {"line": 46, "column": 39}, "end": {"line": 46, "column": 46}}
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
        }, "start": 1303, "end": 1304, "loc": {"start": {"line": 46, "column": 46}, "end": {"line": 46, "column": 47}}
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
        "start": 1325,
        "end": 1328,
        "loc": {"start": {"line": 47, "column": 20}, "end": {"line": 47, "column": 23}}
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
        "start": 1329,
        "end": 1342,
        "loc": {"start": {"line": 47, "column": 24}, "end": {"line": 47, "column": 37}}
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
        "start": 1343,
        "end": 1344,
        "loc": {"start": {"line": 47, "column": 38}, "end": {"line": 47, "column": 39}}
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
        "start": 1345,
        "end": 1351,
        "loc": {"start": {"line": 47, "column": 40}, "end": {"line": 47, "column": 46}}
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
        }, "start": 1351, "end": 1352, "loc": {"start": {"line": 47, "column": 46}, "end": {"line": 47, "column": 47}}
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
        "start": 1352,
        "end": 1359,
        "loc": {"start": {"line": 47, "column": 47}, "end": {"line": 47, "column": 54}}
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
        }, "start": 1359, "end": 1360, "loc": {"start": {"line": 47, "column": 54}, "end": {"line": 47, "column": 55}}
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
        }, "start": 1377, "end": 1378, "loc": {"start": {"line": 48, "column": 16}, "end": {"line": 48, "column": 17}}
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
        }, "start": 1378, "end": 1379, "loc": {"start": {"line": 48, "column": 17}, "end": {"line": 48, "column": 18}}
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
        "start": 1396,
        "end": 1403,
        "loc": {"start": {"line": 49, "column": 16}, "end": {"line": 49, "column": 23}}
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
        }, "start": 1403, "end": 1404, "loc": {"start": {"line": 49, "column": 23}, "end": {"line": 49, "column": 24}}
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
        }, "start": 1405, "end": 1406, "loc": {"start": {"line": 49, "column": 25}, "end": {"line": 49, "column": 26}}
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
        "start": 1406,
        "end": 1408,
        "loc": {"start": {"line": 49, "column": 26}, "end": {"line": 49, "column": 28}}
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
        }, "start": 1408, "end": 1409, "loc": {"start": {"line": 49, "column": 28}, "end": {"line": 49, "column": 29}}
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
        "start": 1410,
        "end": 1412,
        "loc": {"start": {"line": 49, "column": 30}, "end": {"line": 49, "column": 32}}
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
        }, "start": 1412, "end": 1413, "loc": {"start": {"line": 49, "column": 32}, "end": {"line": 49, "column": 33}}
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
        }, "start": 1414, "end": 1416, "loc": {"start": {"line": 49, "column": 34}, "end": {"line": 49, "column": 36}}
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
        }, "start": 1417, "end": 1418, "loc": {"start": {"line": 49, "column": 37}, "end": {"line": 49, "column": 38}}
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
        }, "start": 1436, "end": 1437, "loc": {"start": {"line": 51, "column": 16}, "end": {"line": 51, "column": 17}}
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
        }, "start": 1437, "end": 1438, "loc": {"start": {"line": 51, "column": 17}, "end": {"line": 51, "column": 18}}
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
        "start": 1455,
        "end": 1458,
        "loc": {"start": {"line": 52, "column": 16}, "end": {"line": 52, "column": 19}}
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
        "start": 1459,
        "end": 1464,
        "loc": {"start": {"line": 52, "column": 20}, "end": {"line": 52, "column": 25}}
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
        }, "start": 1464, "end": 1465, "loc": {"start": {"line": 52, "column": 25}, "end": {"line": 52, "column": 26}}
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
        }, "start": 1465, "end": 1466, "loc": {"start": {"line": 52, "column": 26}, "end": {"line": 52, "column": 27}}
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
        }, "start": 1467, "end": 1468, "loc": {"start": {"line": 52, "column": 28}, "end": {"line": 52, "column": 29}}
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
        }, "start": 1486, "end": 1487, "loc": {"start": {"line": 54, "column": 16}, "end": {"line": 54, "column": 17}}
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
        }, "start": 1487, "end": 1488, "loc": {"start": {"line": 54, "column": 17}, "end": {"line": 54, "column": 18}}
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
        "start": 1505,
        "end": 1508,
        "loc": {"start": {"line": 55, "column": 16}, "end": {"line": 55, "column": 19}}
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
        "start": 1509,
        "end": 1514,
        "loc": {"start": {"line": 55, "column": 20}, "end": {"line": 55, "column": 25}}
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
        }, "start": 1514, "end": 1515, "loc": {"start": {"line": 55, "column": 25}, "end": {"line": 55, "column": 26}}
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
        "start": 1515,
        "end": 1520,
        "loc": {"start": {"line": 55, "column": 26}, "end": {"line": 55, "column": 31}}
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
        }, "start": 1520, "end": 1521, "loc": {"start": {"line": 55, "column": 31}, "end": {"line": 55, "column": 32}}
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
        }, "start": 1522, "end": 1523, "loc": {"start": {"line": 55, "column": 33}, "end": {"line": 55, "column": 34}}
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
        }, "start": 1541, "end": 1542, "loc": {"start": {"line": 57, "column": 16}, "end": {"line": 57, "column": 17}}
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
        }, "start": 1555, "end": 1556, "loc": {"start": {"line": 58, "column": 12}, "end": {"line": 58, "column": 13}}
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
        }, "start": 1566, "end": 1567, "loc": {"start": {"line": 60, "column": 8}, "end": {"line": 60, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "scope函数初始化",
        "start": 1577,
        "end": 1589,
        "loc": {"start": {"line": 62, "column": 8}, "end": {"line": 62, "column": 20}}
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
        "start": 1598,
        "end": 1604,
        "loc": {"start": {"line": 63, "column": 8}, "end": {"line": 63, "column": 14}}
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
        }, "start": 1604, "end": 1605, "loc": {"start": {"line": 63, "column": 14}, "end": {"line": 63, "column": 15}}
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
        "start": 1605,
        "end": 1613,
        "loc": {"start": {"line": 63, "column": 15}, "end": {"line": 63, "column": 23}}
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
        "start": 1614,
        "end": 1615,
        "loc": {"start": {"line": 63, "column": 24}, "end": {"line": 63, "column": 25}}
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
        "start": 1616,
        "end": 1624,
        "loc": {"start": {"line": 63, "column": 26}, "end": {"line": 63, "column": 34}}
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
        }, "start": 1625, "end": 1626, "loc": {"start": {"line": 63, "column": 35}, "end": {"line": 63, "column": 36}}
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
        "start": 1626,
        "end": 1632,
        "loc": {"start": {"line": 63, "column": 36}, "end": {"line": 63, "column": 42}}
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
        }, "start": 1632, "end": 1633, "loc": {"start": {"line": 63, "column": 42}, "end": {"line": 63, "column": 43}}
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
        }, "start": 1634, "end": 1635, "loc": {"start": {"line": 63, "column": 44}, "end": {"line": 63, "column": 45}}
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
        "start": 1648,
        "end": 1655,
        "loc": {"start": {"line": 64, "column": 12}, "end": {"line": 64, "column": 19}}
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
        }, "start": 1655, "end": 1656, "loc": {"start": {"line": 64, "column": 19}, "end": {"line": 64, "column": 20}}
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
        "start": 1656,
        "end": 1659,
        "loc": {"start": {"line": 64, "column": 20}, "end": {"line": 64, "column": 23}}
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
        }, "start": 1659, "end": 1660, "loc": {"start": {"line": 64, "column": 23}, "end": {"line": 64, "column": 24}}
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
        "start": 1660,
        "end": 1666,
        "loc": {"start": {"line": 64, "column": 24}, "end": {"line": 64, "column": 30}}
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
        }, "start": 1666, "end": 1667, "loc": {"start": {"line": 64, "column": 30}, "end": {"line": 64, "column": 31}}
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
        }, "start": 1676, "end": 1677, "loc": {"start": {"line": 65, "column": 8}, "end": {"line": 65, "column": 9}}
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
        }, "start": 1677, "end": 1678, "loc": {"start": {"line": 65, "column": 9}, "end": {"line": 65, "column": 10}}
    }, {
        "type": "CommentLine",
        "value": "scope多级初始化函数",
        "start": 1688,
        "end": 1702,
        "loc": {"start": {"line": 67, "column": 8}, "end": {"line": 67, "column": 22}}
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
        "start": 1711,
        "end": 1717,
        "loc": {"start": {"line": 68, "column": 8}, "end": {"line": 68, "column": 14}}
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
        }, "start": 1717, "end": 1718, "loc": {"start": {"line": 68, "column": 14}, "end": {"line": 68, "column": 15}}
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
        "start": 1718,
        "end": 1722,
        "loc": {"start": {"line": 68, "column": 15}, "end": {"line": 68, "column": 19}}
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
        }, "start": 1722, "end": 1723, "loc": {"start": {"line": 68, "column": 19}, "end": {"line": 68, "column": 20}}
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
        "start": 1723,
        "end": 1725,
        "loc": {"start": {"line": 68, "column": 20}, "end": {"line": 68, "column": 22}}
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
        }, "start": 1725, "end": 1726, "loc": {"start": {"line": 68, "column": 22}, "end": {"line": 68, "column": 23}}
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
        "start": 1726,
        "end": 1735,
        "loc": {"start": {"line": 68, "column": 23}, "end": {"line": 68, "column": 32}}
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
        "start": 1736,
        "end": 1737,
        "loc": {"start": {"line": 68, "column": 33}, "end": {"line": 68, "column": 34}}
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
        "start": 1738,
        "end": 1746,
        "loc": {"start": {"line": 68, "column": 35}, "end": {"line": 68, "column": 43}}
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
        }, "start": 1747, "end": 1748, "loc": {"start": {"line": 68, "column": 44}, "end": {"line": 68, "column": 45}}
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
        }, "start": 1748, "end": 1749, "loc": {"start": {"line": 68, "column": 45}, "end": {"line": 68, "column": 46}}
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
        }, "start": 1750, "end": 1751, "loc": {"start": {"line": 68, "column": 47}, "end": {"line": 68, "column": 48}}
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
        "start": 1765,
        "end": 1768,
        "loc": {"start": {"line": 70, "column": 12}, "end": {"line": 70, "column": 15}}
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
        "start": 1769,
        "end": 1776,
        "loc": {"start": {"line": 70, "column": 16}, "end": {"line": 70, "column": 23}}
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
        "start": 1777,
        "end": 1778,
        "loc": {"start": {"line": 70, "column": 24}, "end": {"line": 70, "column": 25}}
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
        "start": 1779,
        "end": 1787,
        "loc": {"start": {"line": 70, "column": 26}, "end": {"line": 70, "column": 34}}
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
        }, "start": 1787, "end": 1788, "loc": {"start": {"line": 70, "column": 34}, "end": {"line": 70, "column": 35}}
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
        "start": 1801,
        "end": 1804,
        "loc": {"start": {"line": 71, "column": 12}, "end": {"line": 71, "column": 15}}
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
        "start": 1805,
        "end": 1812,
        "loc": {"start": {"line": 71, "column": 16}, "end": {"line": 71, "column": 23}}
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
        "start": 1813,
        "end": 1814,
        "loc": {"start": {"line": 71, "column": 24}, "end": {"line": 71, "column": 25}}
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
        "start": 1815,
        "end": 1823,
        "loc": {"start": {"line": 71, "column": 26}, "end": {"line": 71, "column": 34}}
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
        }, "start": 1824, "end": 1825, "loc": {"start": {"line": 71, "column": 35}, "end": {"line": 71, "column": 36}}
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
        "start": 1825,
        "end": 1831,
        "loc": {"start": {"line": 71, "column": 36}, "end": {"line": 71, "column": 42}}
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
        }, "start": 1831, "end": 1832, "loc": {"start": {"line": 71, "column": 42}, "end": {"line": 71, "column": 43}}
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
        "start": 1833,
        "end": 1839,
        "loc": {"start": {"line": 71, "column": 44}, "end": {"line": 71, "column": 50}}
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
        }, "start": 1839, "end": 1840, "loc": {"start": {"line": 71, "column": 50}, "end": {"line": 71, "column": 51}}
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
        }, "start": 1841, "end": 1842, "loc": {"start": {"line": 71, "column": 52}, "end": {"line": 71, "column": 53}}
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
        }, "start": 1856, "end": 1857, "loc": {"start": {"line": 73, "column": 12}, "end": {"line": 73, "column": 13}}
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
        }, "start": 1857, "end": 1858, "loc": {"start": {"line": 73, "column": 13}, "end": {"line": 73, "column": 14}}
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
        "start": 1871,
        "end": 1878,
        "loc": {"start": {"line": 74, "column": 12}, "end": {"line": 74, "column": 19}}
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
        }, "start": 1878, "end": 1879, "loc": {"start": {"line": 74, "column": 19}, "end": {"line": 74, "column": 20}}
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
        "start": 1879,
        "end": 1886,
        "loc": {"start": {"line": 74, "column": 20}, "end": {"line": 74, "column": 27}}
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
        }, "start": 1886, "end": 1887, "loc": {"start": {"line": 74, "column": 27}, "end": {"line": 74, "column": 28}}
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
        }, "start": 1887, "end": 1888, "loc": {"start": {"line": 74, "column": 28}, "end": {"line": 74, "column": 29}}
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
        }, "start": 1888, "end": 1889, "loc": {"start": {"line": 74, "column": 29}, "end": {"line": 74, "column": 30}}
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
        "start": 1889,
        "end": 1894,
        "loc": {"start": {"line": 74, "column": 30}, "end": {"line": 74, "column": 35}}
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
        }, "start": 1894, "end": 1895, "loc": {"start": {"line": 74, "column": 35}, "end": {"line": 74, "column": 36}}
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
        }, "start": 1895, "end": 1896, "loc": {"start": {"line": 74, "column": 36}, "end": {"line": 74, "column": 37}}
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
        "start": 1909,
        "end": 1916,
        "loc": {"start": {"line": 75, "column": 12}, "end": {"line": 75, "column": 19}}
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
        }, "start": 1916, "end": 1917, "loc": {"start": {"line": 75, "column": 19}, "end": {"line": 75, "column": 20}}
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
        "start": 1917,
        "end": 1925,
        "loc": {"start": {"line": 75, "column": 20}, "end": {"line": 75, "column": 28}}
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
        }, "start": 1925, "end": 1926, "loc": {"start": {"line": 75, "column": 28}, "end": {"line": 75, "column": 29}}
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
        "start": 1926,
        "end": 1939,
        "loc": {"start": {"line": 75, "column": 29}, "end": {"line": 75, "column": 42}}
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
        }, "start": 1939, "end": 1940, "loc": {"start": {"line": 75, "column": 42}, "end": {"line": 75, "column": 43}}
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
        }, "start": 1940, "end": 1941, "loc": {"start": {"line": 75, "column": 43}, "end": {"line": 75, "column": 44}}
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
        "start": 1954,
        "end": 1962,
        "loc": {"start": {"line": 76, "column": 12}, "end": {"line": 76, "column": 20}}
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
        "start": 1963,
        "end": 1971,
        "loc": {"start": {"line": 76, "column": 21}, "end": {"line": 76, "column": 29}}
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
        }, "start": 1971, "end": 1972, "loc": {"start": {"line": 76, "column": 29}, "end": {"line": 76, "column": 30}}
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
        "start": 1972,
        "end": 1978,
        "loc": {"start": {"line": 76, "column": 30}, "end": {"line": 76, "column": 36}}
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
        }, "start": 1978, "end": 1979, "loc": {"start": {"line": 76, "column": 36}, "end": {"line": 76, "column": 37}}
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
        "start": 1980,
        "end": 1986,
        "loc": {"start": {"line": 76, "column": 38}, "end": {"line": 76, "column": 44}}
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
        }, "start": 1986, "end": 1987, "loc": {"start": {"line": 76, "column": 44}, "end": {"line": 76, "column": 45}}
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
        }, "start": 1988, "end": 1989, "loc": {"start": {"line": 76, "column": 46}, "end": {"line": 76, "column": 47}}
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
        }, "start": 2003, "end": 2004, "loc": {"start": {"line": 78, "column": 12}, "end": {"line": 78, "column": 13}}
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
        "start": 2017,
        "end": 2020,
        "loc": {"start": {"line": 79, "column": 12}, "end": {"line": 79, "column": 15}}
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
        "start": 2021,
        "end": 2032,
        "loc": {"start": {"line": 79, "column": 16}, "end": {"line": 79, "column": 27}}
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
        "start": 2033,
        "end": 2034,
        "loc": {"start": {"line": 79, "column": 28}, "end": {"line": 79, "column": 29}}
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
        "start": 2035,
        "end": 2043,
        "loc": {"start": {"line": 79, "column": 30}, "end": {"line": 79, "column": 38}}
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
        }, "start": 2043, "end": 2044, "loc": {"start": {"line": 79, "column": 38}, "end": {"line": 79, "column": 39}}
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
        "start": 2044,
        "end": 2057,
        "loc": {"start": {"line": 79, "column": 39}, "end": {"line": 79, "column": 52}}
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
        }, "start": 2057, "end": 2058, "loc": {"start": {"line": 79, "column": 52}, "end": {"line": 79, "column": 53}}
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
        }, "start": 2068, "end": 2069, "loc": {"start": {"line": 81, "column": 8}, "end": {"line": 81, "column": 9}}
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
        }, "start": 2069, "end": 2070, "loc": {"start": {"line": 81, "column": 9}, "end": {"line": 81, "column": 10}}
    }, {
        "type": "CommentBlock",
        "value": "*\n         * 表达式\n         ",
        "start": 2080,
        "end": 2110,
        "loc": {"start": {"line": 83, "column": 8}, "end": {"line": 85, "column": 11}}
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
        "start": 2119,
        "end": 2127,
        "loc": {"start": {"line": 86, "column": 8}, "end": {"line": 86, "column": 16}}
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
        "start": 2128,
        "end": 2134,
        "loc": {"start": {"line": 86, "column": 17}, "end": {"line": 86, "column": 23}}
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
        }, "start": 2134, "end": 2135, "loc": {"start": {"line": 86, "column": 23}, "end": {"line": 86, "column": 24}}
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
        "start": 2135,
        "end": 2141,
        "loc": {"start": {"line": 86, "column": 24}, "end": {"line": 86, "column": 30}}
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
        }, "start": 2141, "end": 2142, "loc": {"start": {"line": 86, "column": 30}, "end": {"line": 86, "column": 31}}
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
        "start": 2143,
        "end": 2149,
        "loc": {"start": {"line": 86, "column": 32}, "end": {"line": 86, "column": 38}}
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
        }, "start": 2149, "end": 2150, "loc": {"start": {"line": 86, "column": 38}, "end": {"line": 86, "column": 39}}
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
        }, "start": 2151, "end": 2152, "loc": {"start": {"line": 86, "column": 40}, "end": {"line": 86, "column": 41}}
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
        "start": 2165,
        "end": 2172,
        "loc": {"start": {"line": 87, "column": 12}, "end": {"line": 87, "column": 19}}
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
        }, "start": 2172, "end": 2173, "loc": {"start": {"line": 87, "column": 19}, "end": {"line": 87, "column": 20}}
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
        "start": 2173,
        "end": 2176,
        "loc": {"start": {"line": 87, "column": 20}, "end": {"line": 87, "column": 23}}
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
        }, "start": 2176, "end": 2177, "loc": {"start": {"line": 87, "column": 23}, "end": {"line": 87, "column": 24}}
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
        "start": 2177,
        "end": 2183,
        "loc": {"start": {"line": 87, "column": 24}, "end": {"line": 87, "column": 30}}
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
        }, "start": 2183, "end": 2184, "loc": {"start": {"line": 87, "column": 30}, "end": {"line": 87, "column": 31}}
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
        "start": 2185,
        "end": 2191,
        "loc": {"start": {"line": 87, "column": 32}, "end": {"line": 87, "column": 38}}
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
        }, "start": 2191, "end": 2192, "loc": {"start": {"line": 87, "column": 38}, "end": {"line": 87, "column": 39}}
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
        }, "start": 2201, "end": 2202, "loc": {"start": {"line": 88, "column": 8}, "end": {"line": 88, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "直接调用",
        "start": 2212,
        "end": 2218,
        "loc": {"start": {"line": 90, "column": 8}, "end": {"line": 90, "column": 14}}
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
        "start": 2227,
        "end": 2234,
        "loc": {"start": {"line": 91, "column": 8}, "end": {"line": 91, "column": 15}}
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
        }, "start": 2234, "end": 2235, "loc": {"start": {"line": 91, "column": 15}, "end": {"line": 91, "column": 16}}
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
        }, "start": 2235, "end": 2236, "loc": {"start": {"line": 91, "column": 16}, "end": {"line": 91, "column": 17}}
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
        }, "start": 2236, "end": 2237, "loc": {"start": {"line": 91, "column": 17}, "end": {"line": 91, "column": 18}}
    }, {
        "type": "CommentLine",
        "value": "调用",
        "start": 2246,
        "end": 2250,
        "loc": {"start": {"line": 92, "column": 8}, "end": {"line": 92, "column": 12}}
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
        "start": 2259,
        "end": 2265,
        "loc": {"start": {"line": 93, "column": 8}, "end": {"line": 93, "column": 14}}
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
        }, "start": 2265, "end": 2266, "loc": {"start": {"line": 93, "column": 14}, "end": {"line": 93, "column": 15}}
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
        "start": 2266,
        "end": 2274,
        "loc": {"start": {"line": 93, "column": 15}, "end": {"line": 93, "column": 23}}
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
        }, "start": 2274, "end": 2275, "loc": {"start": {"line": 93, "column": 23}, "end": {"line": 93, "column": 24}}
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
        "start": 2275,
        "end": 2283,
        "loc": {"start": {"line": 93, "column": 24}, "end": {"line": 93, "column": 32}}
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
        }, "start": 2284, "end": 2285, "loc": {"start": {"line": 93, "column": 33}, "end": {"line": 93, "column": 34}}
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
        "start": 2285,
        "end": 2291,
        "loc": {"start": {"line": 93, "column": 34}, "end": {"line": 93, "column": 40}}
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
        }, "start": 2291, "end": 2292, "loc": {"start": {"line": 93, "column": 40}, "end": {"line": 93, "column": 41}}
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
        }, "start": 2293, "end": 2294, "loc": {"start": {"line": 93, "column": 42}, "end": {"line": 93, "column": 43}}
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
        "start": 2307,
        "end": 2314,
        "loc": {"start": {"line": 94, "column": 12}, "end": {"line": 94, "column": 19}}
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
        }, "start": 2314, "end": 2315, "loc": {"start": {"line": 94, "column": 19}, "end": {"line": 94, "column": 20}}
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
        "start": 2315,
        "end": 2318,
        "loc": {"start": {"line": 94, "column": 20}, "end": {"line": 94, "column": 23}}
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
        }, "start": 2318, "end": 2319, "loc": {"start": {"line": 94, "column": 23}, "end": {"line": 94, "column": 24}}
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
        "start": 2319,
        "end": 2325,
        "loc": {"start": {"line": 94, "column": 24}, "end": {"line": 94, "column": 30}}
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
        }, "start": 2325, "end": 2326, "loc": {"start": {"line": 94, "column": 30}, "end": {"line": 94, "column": 31}}
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
        }, "start": 2335, "end": 2336, "loc": {"start": {"line": 95, "column": 8}, "end": {"line": 95, "column": 9}}
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
        }, "start": 2336, "end": 2337, "loc": {"start": {"line": 95, "column": 9}, "end": {"line": 95, "column": 10}}
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
        }, "start": 2337, "end": 2338, "loc": {"start": {"line": 95, "column": 10}, "end": {"line": 95, "column": 11}}
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
        "start": 2347,
        "end": 2353,
        "loc": {"start": {"line": 96, "column": 8}, "end": {"line": 96, "column": 14}}
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
        }, "start": 2353, "end": 2354, "loc": {"start": {"line": 96, "column": 14}, "end": {"line": 96, "column": 15}}
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
        "start": 2354,
        "end": 2358,
        "loc": {"start": {"line": 96, "column": 15}, "end": {"line": 96, "column": 19}}
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
        }, "start": 2358, "end": 2359, "loc": {"start": {"line": 96, "column": 19}, "end": {"line": 96, "column": 20}}
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
        "start": 2359,
        "end": 2368,
        "loc": {"start": {"line": 96, "column": 20}, "end": {"line": 96, "column": 29}}
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
        }, "start": 2368, "end": 2369, "loc": {"start": {"line": 96, "column": 29}, "end": {"line": 96, "column": 30}}
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
        }, "start": 2369, "end": 2370, "loc": {"start": {"line": 96, "column": 30}, "end": {"line": 96, "column": 31}}
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
        }, "start": 2370, "end": 2371, "loc": {"start": {"line": 96, "column": 31}, "end": {"line": 96, "column": 32}}
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
        }, "start": 2378, "end": 2379, "loc": {"start": {"line": 99, "column": 4}, "end": {"line": 99, "column": 5}}
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
        }, "start": 2379, "end": 2380, "loc": {"start": {"line": 99, "column": 5}, "end": {"line": 99, "column": 6}}
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
        }, "start": 2380, "end": 2381, "loc": {"start": {"line": 99, "column": 6}, "end": {"line": 99, "column": 7}}
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
        }, "start": 2381, "end": 2382, "loc": {"start": {"line": 99, "column": 7}, "end": {"line": 99, "column": 8}}
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
        }, "start": 2384, "end": 2384, "loc": {"start": {"line": 101, "column": 0}, "end": {"line": 101, "column": 0}}
    }]
}