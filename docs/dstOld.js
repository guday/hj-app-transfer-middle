var a = {
    "type": "File",
    "start": 0,
    "end": 3174,
    "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 128, "column": 0}},
    "program": {
        "type": "Program",
        "start": 0,
        "end": 3174,
        "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 128, "column": 0}},
        "sourceType": "module",
        "body": [{
            "type": "ExpressionStatement",
            "start": 65,
            "end": 3172,
            "loc": {"start": {"line": 10, "column": 0}, "end": {"line": 126, "column": 8}},
            "expression": {
                "type": "CallExpression",
                "start": 65,
                "end": 3171,
                "loc": {"start": {"line": 10, "column": 0}, "end": {"line": 126, "column": 7}},
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
                    "end": 3170,
                    "loc": {"start": {"line": 10, "column": 34}, "end": {"line": 126, "column": 6}},
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
                        "end": 3169,
                        "loc": {"start": {"line": 11, "column": 4}, "end": {"line": 126, "column": 5}},
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
                            "end": 3169,
                            "loc": {"start": {"line": 11, "column": 29}, "end": {"line": 126, "column": 5}},
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
                                    "value": "变量赋值",
                                    "start": 275,
                                    "end": 281,
                                    "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 14}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 290,
                                "end": 307,
                                "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 25}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 290,
                                    "end": 306,
                                    "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 24}},
                                    "operator": "=",
                                    "left": {
                                        "type": "Identifier",
                                        "start": 290,
                                        "end": 299,
                                        "loc": {
                                            "start": {"line": 18, "column": 8},
                                            "end": {"line": 18, "column": 17},
                                            "identifierName": "scopeData"
                                        },
                                        "name": "scopeData",
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "NullLiteral",
                                        "start": 302,
                                        "end": 306,
                                        "loc": {"start": {"line": 18, "column": 20}, "end": {"line": 18, "column": 24}}
                                    },
                                    "leadingComments": null
                                },
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "变量赋值",
                                    "start": 275,
                                    "end": 281,
                                    "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 14}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "单个变量申明",
                                    "start": 316,
                                    "end": 324,
                                    "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 333,
                                "end": 371,
                                "loc": {"start": {"line": 20, "column": 8}, "end": {"line": 20, "column": 46}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 337,
                                    "end": 370,
                                    "loc": {"start": {"line": 20, "column": 12}, "end": {"line": 20, "column": 45}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 337,
                                        "end": 351,
                                        "loc": {
                                            "start": {"line": 20, "column": 12},
                                            "end": {"line": 20, "column": 26},
                                            "identifierName": "singleVariable"
                                        },
                                        "name": "singleVariable",
                                        "leadingComments": null
                                    },
                                    "init": {
                                        "type": "StringLiteral",
                                        "start": 354,
                                        "end": 370,
                                        "loc": {"start": {"line": 20, "column": 29}, "end": {"line": 20, "column": 45}},
                                        "extra": {"rawValue": "singleVariable", "raw": "'singleVariable'"},
                                        "value": "singleVariable"
                                    },
                                    "leadingComments": null
                                }],
                                "kind": "var",
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "单个变量申明",
                                    "start": 316,
                                    "end": 324,
                                    "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 16}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "多个变量申明， 包括函数",
                                    "start": 380,
                                    "end": 394,
                                    "loc": {"start": {"line": 21, "column": 8}, "end": {"line": 21, "column": 22}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 403,
                                "end": 647,
                                "loc": {"start": {"line": 22, "column": 8}, "end": {"line": 29, "column": 39}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 407,
                                    "end": 415,
                                    "loc": {"start": {"line": 22, "column": 12}, "end": {"line": 22, "column": 20}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 407,
                                        "end": 415,
                                        "loc": {
                                            "start": {"line": 22, "column": 12},
                                            "end": {"line": 22, "column": 20},
                                            "identifierName": "mutiVar1"
                                        },
                                        "name": "mutiVar1",
                                        "leadingComments": null
                                    },
                                    "init": null,
                                    "leadingComments": null
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 429,
                                    "end": 444,
                                    "loc": {"start": {"line": 23, "column": 12}, "end": {"line": 23, "column": 27}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 429,
                                        "end": 437,
                                        "loc": {
                                            "start": {"line": 23, "column": 12},
                                            "end": {"line": 23, "column": 20},
                                            "identifierName": "mutiVar2"
                                        },
                                        "name": "mutiVar2"
                                    },
                                    "init": {
                                        "type": "NullLiteral",
                                        "start": 440,
                                        "end": 444,
                                        "loc": {"start": {"line": 23, "column": 23}, "end": {"line": 23, "column": 27}}
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 458,
                                    "end": 479,
                                    "loc": {"start": {"line": 24, "column": 12}, "end": {"line": 24, "column": 33}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 458,
                                        "end": 466,
                                        "loc": {
                                            "start": {"line": 24, "column": 12},
                                            "end": {"line": 24, "column": 20},
                                            "identifierName": "mutiVar3"
                                        },
                                        "name": "mutiVar3"
                                    },
                                    "init": {
                                        "type": "StringLiteral",
                                        "start": 469,
                                        "end": 479,
                                        "loc": {"start": {"line": 24, "column": 23}, "end": {"line": 24, "column": 33}},
                                        "extra": {"rawValue": "mutiVar3", "raw": "\"mutiVar3\""},
                                        "value": "mutiVar3"
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 493,
                                    "end": 572,
                                    "loc": {"start": {"line": 25, "column": 12}, "end": {"line": 27, "column": 13}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 493,
                                        "end": 500,
                                        "loc": {
                                            "start": {"line": 25, "column": 12},
                                            "end": {"line": 25, "column": 19},
                                            "identifierName": "mutiFun"
                                        },
                                        "name": "mutiFun"
                                    },
                                    "init": {
                                        "type": "FunctionExpression",
                                        "start": 503,
                                        "end": 572,
                                        "loc": {"start": {"line": 25, "column": 22}, "end": {"line": 27, "column": 13}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 513,
                                            "end": 519,
                                            "loc": {
                                                "start": {"line": 25, "column": 32},
                                                "end": {"line": 25, "column": 38},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 521,
                                            "end": 572,
                                            "loc": {
                                                "start": {"line": 25, "column": 40},
                                                "end": {"line": 27, "column": 13}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 539,
                                                "end": 558,
                                                "loc": {
                                                    "start": {"line": 26, "column": 16},
                                                    "end": {"line": 26, "column": 35}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 539,
                                                    "end": 558,
                                                    "loc": {
                                                        "start": {"line": 26, "column": 16},
                                                        "end": {"line": 26, "column": 35}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 539,
                                                        "end": 550,
                                                        "loc": {
                                                            "start": {"line": 26, "column": 16},
                                                            "end": {"line": 26, "column": 27}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 539,
                                                            "end": 546,
                                                            "loc": {
                                                                "start": {"line": 26, "column": 16},
                                                                "end": {"line": 26, "column": 23},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 547,
                                                            "end": 550,
                                                            "loc": {
                                                                "start": {"line": 26, "column": 24},
                                                                "end": {"line": 26, "column": 27},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 551,
                                                        "end": 557,
                                                        "loc": {
                                                            "start": {"line": 26, "column": 28},
                                                            "end": {"line": 26, "column": 34},
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
                                    "start": 586,
                                    "end": 606,
                                    "loc": {"start": {"line": 28, "column": 12}, "end": {"line": 28, "column": 32}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 586,
                                        "end": 594,
                                        "loc": {
                                            "start": {"line": 28, "column": 12},
                                            "end": {"line": 28, "column": 20},
                                            "identifierName": "mutiVar4"
                                        },
                                        "name": "mutiVar4"
                                    },
                                    "init": {
                                        "type": "Identifier",
                                        "start": 597,
                                        "end": 606,
                                        "loc": {
                                            "start": {"line": 28, "column": 23},
                                            "end": {"line": 28, "column": 32},
                                            "identifierName": "scopeData"
                                        },
                                        "name": "scopeData"
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 620,
                                    "end": 646,
                                    "loc": {"start": {"line": 29, "column": 12}, "end": {"line": 29, "column": 38}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 620,
                                        "end": 628,
                                        "loc": {
                                            "start": {"line": 29, "column": 12},
                                            "end": {"line": 29, "column": 20},
                                            "identifierName": "mutiVar5"
                                        },
                                        "name": "mutiVar5"
                                    },
                                    "init": {
                                        "type": "CallExpression",
                                        "start": 631,
                                        "end": 646,
                                        "loc": {"start": {"line": 29, "column": 23}, "end": {"line": 29, "column": 38}},
                                        "callee": {
                                            "type": "MemberExpression",
                                            "start": 631,
                                            "end": 644,
                                            "loc": {
                                                "start": {"line": 29, "column": 23},
                                                "end": {"line": 29, "column": 36}
                                            },
                                            "object": {
                                                "type": "Identifier",
                                                "start": 631,
                                                "end": 636,
                                                "loc": {
                                                    "start": {"line": 29, "column": 23},
                                                    "end": {"line": 29, "column": 28},
                                                    "identifierName": "cache"
                                                },
                                                "name": "cache"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 637,
                                                "end": 644,
                                                "loc": {
                                                    "start": {"line": 29, "column": 29},
                                                    "end": {"line": 29, "column": 36},
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
                                    "start": 380,
                                    "end": 394,
                                    "loc": {"start": {"line": 21, "column": 8}, "end": {"line": 21, "column": 22}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 657,
                                "end": 1218,
                                "loc": {"start": {"line": 31, "column": 8}, "end": {"line": 49, "column": 9}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 661,
                                    "end": 1218,
                                    "loc": {"start": {"line": 31, "column": 12}, "end": {"line": 49, "column": 9}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 661,
                                        "end": 667,
                                        "loc": {
                                            "start": {"line": 31, "column": 12},
                                            "end": {"line": 31, "column": 18},
                                            "identifierName": "objVar"
                                        },
                                        "name": "objVar"
                                    },
                                    "init": {
                                        "type": "ObjectExpression",
                                        "start": 670,
                                        "end": 1218,
                                        "loc": {"start": {"line": 31, "column": 21}, "end": {"line": 49, "column": 9}},
                                        "properties": [{
                                            "type": "ObjectProperty",
                                            "start": 684,
                                            "end": 702,
                                            "loc": {
                                                "start": {"line": 32, "column": 12},
                                                "end": {"line": 32, "column": 30}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 684,
                                                "end": 691,
                                                "loc": {
                                                    "start": {"line": 32, "column": 12},
                                                    "end": {"line": 32, "column": 19},
                                                    "identifierName": "objVar1"
                                                },
                                                "name": "objVar1"
                                            },
                                            "value": {
                                                "type": "StringLiteral",
                                                "start": 693,
                                                "end": 702,
                                                "loc": {
                                                    "start": {"line": 32, "column": 21},
                                                    "end": {"line": 32, "column": 30}
                                                },
                                                "extra": {"rawValue": "objVar1", "raw": "\"objVar1\""},
                                                "value": "objVar1"
                                            }
                                        }, {
                                            "type": "ObjectProperty",
                                            "start": 716,
                                            "end": 734,
                                            "loc": {
                                                "start": {"line": 33, "column": 12},
                                                "end": {"line": 33, "column": 30}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 716,
                                                "end": 723,
                                                "loc": {
                                                    "start": {"line": 33, "column": 12},
                                                    "end": {"line": 33, "column": 19},
                                                    "identifierName": "objVar2"
                                                },
                                                "name": "objVar2"
                                            },
                                            "value": {
                                                "type": "Identifier",
                                                "start": 725,
                                                "end": 734,
                                                "loc": {
                                                    "start": {"line": 33, "column": 21},
                                                    "end": {"line": 33, "column": 30},
                                                    "identifierName": "scopeData"
                                                },
                                                "name": "scopeData"
                                            }
                                        }, {
                                            "type": "ObjectProperty",
                                            "start": 748,
                                            "end": 871,
                                            "loc": {
                                                "start": {"line": 34, "column": 12},
                                                "end": {"line": 37, "column": 13}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 748,
                                                "end": 755,
                                                "loc": {
                                                    "start": {"line": 34, "column": 12},
                                                    "end": {"line": 34, "column": 19},
                                                    "identifierName": "objVar3"
                                                },
                                                "name": "objVar3"
                                            },
                                            "value": {
                                                "type": "FunctionExpression",
                                                "start": 757,
                                                "end": 871,
                                                "loc": {
                                                    "start": {"line": 34, "column": 21},
                                                    "end": {"line": 37, "column": 13}
                                                },
                                                "id": null,
                                                "generator": false,
                                                "expression": false,
                                                "async": false,
                                                "params": [{
                                                    "type": "Identifier",
                                                    "start": 767,
                                                    "end": 773,
                                                    "loc": {
                                                        "start": {"line": 34, "column": 31},
                                                        "end": {"line": 34, "column": 37},
                                                        "identifierName": "param1"
                                                    },
                                                    "name": "param1"
                                                }, {
                                                    "type": "Identifier",
                                                    "start": 775,
                                                    "end": 781,
                                                    "loc": {
                                                        "start": {"line": 34, "column": 39},
                                                        "end": {"line": 34, "column": 45},
                                                        "identifierName": "param2"
                                                    },
                                                    "name": "param2"
                                                }],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "start": 783,
                                                    "end": 871,
                                                    "loc": {
                                                        "start": {"line": 34, "column": 47},
                                                        "end": {"line": 37, "column": 13}
                                                    },
                                                    "body": [{
                                                        "type": "ExpressionStatement",
                                                        "start": 801,
                                                        "end": 819,
                                                        "loc": {
                                                            "start": {"line": 35, "column": 16},
                                                            "end": {"line": 35, "column": 34}
                                                        },
                                                        "expression": {
                                                            "type": "AssignmentExpression",
                                                            "start": 801,
                                                            "end": 818,
                                                            "loc": {
                                                                "start": {"line": 35, "column": 16},
                                                                "end": {"line": 35, "column": 33}
                                                            },
                                                            "operator": "=",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "start": 801,
                                                                "end": 807,
                                                                "loc": {
                                                                    "start": {"line": 35, "column": 16},
                                                                    "end": {"line": 35, "column": 22},
                                                                    "identifierName": "param1"
                                                                },
                                                                "name": "param1"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "start": 810,
                                                                "end": 818,
                                                                "loc": {
                                                                    "start": {"line": 35, "column": 25},
                                                                    "end": {"line": 35, "column": 33},
                                                                    "identifierName": "mutiVar1"
                                                                },
                                                                "name": "mutiVar1"
                                                            }
                                                        }
                                                    }, {
                                                        "type": "ExpressionStatement",
                                                        "start": 836,
                                                        "end": 857,
                                                        "loc": {
                                                            "start": {"line": 36, "column": 16},
                                                            "end": {"line": 36, "column": 37}
                                                        },
                                                        "expression": {
                                                            "type": "AssignmentExpression",
                                                            "start": 836,
                                                            "end": 856,
                                                            "loc": {
                                                                "start": {"line": 36, "column": 16},
                                                                "end": {"line": 36, "column": 36}
                                                            },
                                                            "operator": "=",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "start": 836,
                                                                "end": 842,
                                                                "loc": {
                                                                    "start": {"line": 36, "column": 16},
                                                                    "end": {"line": 36, "column": 22},
                                                                    "identifierName": "param2"
                                                                },
                                                                "name": "param2"
                                                            },
                                                            "right": {
                                                                "type": "MemberExpression",
                                                                "start": 845,
                                                                "end": 856,
                                                                "loc": {
                                                                    "start": {"line": 36, "column": 25},
                                                                    "end": {"line": 36, "column": 36}
                                                                },
                                                                "object": {
                                                                    "type": "Identifier",
                                                                    "start": 845,
                                                                    "end": 851,
                                                                    "loc": {
                                                                        "start": {"line": 36, "column": 25},
                                                                        "end": {"line": 36, "column": 31},
                                                                        "identifierName": "$scope"
                                                                    },
                                                                    "name": "$scope"
                                                                },
                                                                "property": {
                                                                    "type": "Identifier",
                                                                    "start": 852,
                                                                    "end": 856,
                                                                    "loc": {
                                                                        "start": {"line": 36, "column": 32},
                                                                        "end": {"line": 36, "column": 36},
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
                                            "start": 885,
                                            "end": 1028,
                                            "loc": {
                                                "start": {"line": 38, "column": 12},
                                                "end": {"line": 42, "column": 13}
                                            },
                                            "method": true,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 885,
                                                "end": 892,
                                                "loc": {
                                                    "start": {"line": 38, "column": 12},
                                                    "end": {"line": 38, "column": 19},
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
                                                "start": 893,
                                                "end": 899,
                                                "loc": {
                                                    "start": {"line": 38, "column": 20},
                                                    "end": {"line": 38, "column": 26},
                                                    "identifierName": "param1"
                                                },
                                                "name": "param1"
                                            }, {
                                                "type": "Identifier",
                                                "start": 901,
                                                "end": 907,
                                                "loc": {
                                                    "start": {"line": 38, "column": 28},
                                                    "end": {"line": 38, "column": 34},
                                                    "identifierName": "param2"
                                                },
                                                "name": "param2"
                                            }],
                                            "body": {
                                                "type": "BlockStatement",
                                                "start": 908,
                                                "end": 1028,
                                                "loc": {
                                                    "start": {"line": 38, "column": 35},
                                                    "end": {"line": 42, "column": 13}
                                                },
                                                "body": [{
                                                    "type": "ExpressionStatement",
                                                    "start": 926,
                                                    "end": 944,
                                                    "loc": {
                                                        "start": {"line": 39, "column": 16},
                                                        "end": {"line": 39, "column": 34}
                                                    },
                                                    "expression": {
                                                        "type": "AssignmentExpression",
                                                        "start": 926,
                                                        "end": 943,
                                                        "loc": {
                                                            "start": {"line": 39, "column": 16},
                                                            "end": {"line": 39, "column": 33}
                                                        },
                                                        "operator": "=",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "start": 926,
                                                            "end": 932,
                                                            "loc": {
                                                                "start": {"line": 39, "column": 16},
                                                                "end": {"line": 39, "column": 22},
                                                                "identifierName": "param1"
                                                            },
                                                            "name": "param1"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "start": 935,
                                                            "end": 943,
                                                            "loc": {
                                                                "start": {"line": 39, "column": 25},
                                                                "end": {"line": 39, "column": 33},
                                                                "identifierName": "mutiVar1"
                                                            },
                                                            "name": "mutiVar1"
                                                        }
                                                    }
                                                }, {
                                                    "type": "ExpressionStatement",
                                                    "start": 961,
                                                    "end": 982,
                                                    "loc": {
                                                        "start": {"line": 40, "column": 16},
                                                        "end": {"line": 40, "column": 37}
                                                    },
                                                    "expression": {
                                                        "type": "AssignmentExpression",
                                                        "start": 961,
                                                        "end": 981,
                                                        "loc": {
                                                            "start": {"line": 40, "column": 16},
                                                            "end": {"line": 40, "column": 36}
                                                        },
                                                        "operator": "=",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "start": 961,
                                                            "end": 967,
                                                            "loc": {
                                                                "start": {"line": 40, "column": 16},
                                                                "end": {"line": 40, "column": 22},
                                                                "identifierName": "param2"
                                                            },
                                                            "name": "param2"
                                                        },
                                                        "right": {
                                                            "type": "MemberExpression",
                                                            "start": 970,
                                                            "end": 981,
                                                            "loc": {
                                                                "start": {"line": 40, "column": 25},
                                                                "end": {"line": 40, "column": 36}
                                                            },
                                                            "object": {
                                                                "type": "Identifier",
                                                                "start": 970,
                                                                "end": 976,
                                                                "loc": {
                                                                    "start": {"line": 40, "column": 25},
                                                                    "end": {"line": 40, "column": 31},
                                                                    "identifierName": "$scope"
                                                                },
                                                                "name": "$scope"
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "start": 977,
                                                                "end": 981,
                                                                "loc": {
                                                                    "start": {"line": 40, "column": 32},
                                                                    "end": {"line": 40, "column": 36},
                                                                    "identifierName": "data"
                                                                },
                                                                "name": "data"
                                                            },
                                                            "computed": false
                                                        }
                                                    }
                                                }, {
                                                    "type": "ReturnStatement",
                                                    "start": 999,
                                                    "end": 1014,
                                                    "loc": {
                                                        "start": {"line": 41, "column": 16},
                                                        "end": {"line": 41, "column": 31}
                                                    },
                                                    "argument": {
                                                        "type": "Identifier",
                                                        "start": 1006,
                                                        "end": 1013,
                                                        "loc": {
                                                            "start": {"line": 41, "column": 23},
                                                            "end": {"line": 41, "column": 30},
                                                            "identifierName": "objVar1"
                                                        },
                                                        "name": "objVar1"
                                                    }
                                                }],
                                                "directives": []
                                            }
                                        }, {
                                            "type": "ObjectMethod",
                                            "start": 1042,
                                            "end": 1125,
                                            "loc": {
                                                "start": {"line": 43, "column": 12},
                                                "end": {"line": 45, "column": 13}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1046,
                                                "end": 1051,
                                                "loc": {
                                                    "start": {"line": 43, "column": 16},
                                                    "end": {"line": 43, "column": 21},
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
                                                "start": 1054,
                                                "end": 1125,
                                                "loc": {
                                                    "start": {"line": 43, "column": 24},
                                                    "end": {"line": 45, "column": 13}
                                                },
                                                "body": [{
                                                    "type": "ReturnStatement",
                                                    "start": 1072,
                                                    "end": 1111,
                                                    "loc": {
                                                        "start": {"line": 44, "column": 16},
                                                        "end": {"line": 44, "column": 55}
                                                    },
                                                    "argument": {
                                                        "type": "SequenceExpression",
                                                        "start": 1079,
                                                        "end": 1110,
                                                        "loc": {
                                                            "start": {"line": 44, "column": 23},
                                                            "end": {"line": 44, "column": 54}
                                                        },
                                                        "expressions": [{
                                                            "type": "Identifier",
                                                            "start": 1079,
                                                            "end": 1086,
                                                            "loc": {
                                                                "start": {"line": 44, "column": 23},
                                                                "end": {"line": 44, "column": 30},
                                                                "identifierName": "objVar2"
                                                            },
                                                            "name": "objVar2"
                                                        }, {
                                                            "type": "Identifier",
                                                            "start": 1087,
                                                            "end": 1094,
                                                            "loc": {
                                                                "start": {"line": 44, "column": 31},
                                                                "end": {"line": 44, "column": 38},
                                                                "identifierName": "objVar1"
                                                            },
                                                            "name": "objVar1"
                                                        }, {
                                                            "type": "MemberExpression",
                                                            "start": 1096,
                                                            "end": 1110,
                                                            "loc": {
                                                                "start": {"line": 44, "column": 40},
                                                                "end": {"line": 44, "column": 54}
                                                            },
                                                            "object": {
                                                                "type": "Identifier",
                                                                "start": 1096,
                                                                "end": 1105,
                                                                "loc": {
                                                                    "start": {"line": 44, "column": 40},
                                                                    "end": {"line": 44, "column": 49},
                                                                    "identifierName": "scopeData"
                                                                },
                                                                "name": "scopeData"
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "start": 1106,
                                                                "end": 1110,
                                                                "loc": {
                                                                    "start": {"line": 44, "column": 50},
                                                                    "end": {"line": 44, "column": 54},
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
                                            "start": 1139,
                                            "end": 1208,
                                            "loc": {
                                                "start": {"line": 46, "column": 12},
                                                "end": {"line": 48, "column": 13}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1143,
                                                "end": 1148,
                                                "loc": {
                                                    "start": {"line": 46, "column": 16},
                                                    "end": {"line": 46, "column": 21},
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
                                                "start": 1149,
                                                "end": 1154,
                                                "loc": {
                                                    "start": {"line": 46, "column": 22},
                                                    "end": {"line": 46, "column": 27},
                                                    "identifierName": "value"
                                                },
                                                "name": "value"
                                            }],
                                            "body": {
                                                "type": "BlockStatement",
                                                "start": 1156,
                                                "end": 1208,
                                                "loc": {
                                                    "start": {"line": 46, "column": 29},
                                                    "end": {"line": 48, "column": 13}
                                                },
                                                "body": [{
                                                    "type": "ExpressionStatement",
                                                    "start": 1174,
                                                    "end": 1194,
                                                    "loc": {
                                                        "start": {"line": 47, "column": 16},
                                                        "end": {"line": 47, "column": 36}
                                                    },
                                                    "expression": {
                                                        "type": "AssignmentExpression",
                                                        "start": 1174,
                                                        "end": 1194,
                                                        "loc": {
                                                            "start": {"line": 47, "column": 16},
                                                            "end": {"line": 47, "column": 36}
                                                        },
                                                        "operator": "=",
                                                        "left": {
                                                            "type": "MemberExpression",
                                                            "start": 1174,
                                                            "end": 1186,
                                                            "loc": {
                                                                "start": {"line": 47, "column": 16},
                                                                "end": {"line": 47, "column": 28}
                                                            },
                                                            "object": {
                                                                "type": "ThisExpression",
                                                                "start": 1174,
                                                                "end": 1178,
                                                                "loc": {
                                                                    "start": {"line": 47, "column": 16},
                                                                    "end": {"line": 47, "column": 20}
                                                                }
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "start": 1179,
                                                                "end": 1186,
                                                                "loc": {
                                                                    "start": {"line": 47, "column": 21},
                                                                    "end": {"line": 47, "column": 28},
                                                                    "identifierName": "objVar1"
                                                                },
                                                                "name": "objVar1"
                                                            },
                                                            "computed": false
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "start": 1189,
                                                            "end": 1194,
                                                            "loc": {
                                                                "start": {"line": 47, "column": 31},
                                                                "end": {"line": 47, "column": 36},
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
                                    "start": 1228,
                                    "end": 1236,
                                    "loc": {"start": {"line": 51, "column": 8}, "end": {"line": 51, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 1245,
                                "end": 2224,
                                "loc": {"start": {"line": 52, "column": 8}, "end": {"line": 82, "column": 9}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 1249,
                                    "end": 2224,
                                    "loc": {"start": {"line": 52, "column": 12}, "end": {"line": 82, "column": 9}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 1249,
                                        "end": 1258,
                                        "loc": {
                                            "start": {"line": 52, "column": 12},
                                            "end": {"line": 52, "column": 21},
                                            "identifierName": "singleFun"
                                        },
                                        "name": "singleFun",
                                        "leadingComments": null
                                    },
                                    "init": {
                                        "type": "FunctionExpression",
                                        "start": 1261,
                                        "end": 2224,
                                        "loc": {"start": {"line": 52, "column": 24}, "end": {"line": 82, "column": 9}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 1271,
                                            "end": 1277,
                                            "loc": {
                                                "start": {"line": 52, "column": 34},
                                                "end": {"line": 52, "column": 40},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 1279,
                                            "end": 2224,
                                            "loc": {
                                                "start": {"line": 52, "column": 42},
                                                "end": {"line": 82, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 1293,
                                                "end": 1313,
                                                "loc": {
                                                    "start": {"line": 53, "column": 12},
                                                    "end": {"line": 53, "column": 32}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 1293,
                                                    "end": 1312,
                                                    "loc": {
                                                        "start": {"line": 53, "column": 12},
                                                        "end": {"line": 53, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 1293,
                                                        "end": 1304,
                                                        "loc": {
                                                            "start": {"line": 53, "column": 12},
                                                            "end": {"line": 53, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 1293,
                                                            "end": 1300,
                                                            "loc": {
                                                                "start": {"line": 53, "column": 12},
                                                                "end": {"line": 53, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 1301,
                                                            "end": 1304,
                                                            "loc": {
                                                                "start": {"line": 53, "column": 20},
                                                                "end": {"line": 53, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 1305,
                                                        "end": 1311,
                                                        "loc": {
                                                            "start": {"line": 53, "column": 24},
                                                            "end": {"line": 53, "column": 30},
                                                            "identifierName": "param1"
                                                        },
                                                        "name": "param1"
                                                    }]
                                                },
                                                "trailingComments": [{
                                                    "type": "CommentLine",
                                                    "value": "对象",
                                                    "start": 1326,
                                                    "end": 1330,
                                                    "loc": {
                                                        "start": {"line": 54, "column": 12},
                                                        "end": {"line": 54, "column": 16}
                                                    }
                                                }]
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 1343,
                                                "end": 2213,
                                                "loc": {
                                                    "start": {"line": 55, "column": 12},
                                                    "end": {"line": 80, "column": 13}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 1347,
                                                    "end": 2213,
                                                    "loc": {
                                                        "start": {"line": 55, "column": 16},
                                                        "end": {"line": 80, "column": 13}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 1347,
                                                        "end": 1350,
                                                        "loc": {
                                                            "start": {"line": 55, "column": 16},
                                                            "end": {"line": 55, "column": 19},
                                                            "identifierName": "obj"
                                                        },
                                                        "name": "obj",
                                                        "leadingComments": null
                                                    },
                                                    "init": {
                                                        "type": "ObjectExpression",
                                                        "start": 1353,
                                                        "end": 2213,
                                                        "loc": {
                                                            "start": {"line": 55, "column": 22},
                                                            "end": {"line": 80, "column": 13}
                                                        },
                                                        "properties": [{
                                                            "type": "ObjectProperty",
                                                            "start": 1371,
                                                            "end": 1389,
                                                            "loc": {
                                                                "start": {"line": 56, "column": 16},
                                                                "end": {"line": 56, "column": 34}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1371,
                                                                "end": 1378,
                                                                "loc": {
                                                                    "start": {"line": 56, "column": 16},
                                                                    "end": {"line": 56, "column": 23},
                                                                    "identifierName": "objVar1"
                                                                },
                                                                "name": "objVar1"
                                                            },
                                                            "value": {
                                                                "type": "StringLiteral",
                                                                "start": 1380,
                                                                "end": 1389,
                                                                "loc": {
                                                                    "start": {"line": 56, "column": 25},
                                                                    "end": {"line": 56, "column": 34}
                                                                },
                                                                "extra": {"rawValue": "objVar1", "raw": "\"objVar1\""},
                                                                "value": "objVar1"
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 1407,
                                                            "end": 1489,
                                                            "loc": {
                                                                "start": {"line": 57, "column": 16},
                                                                "end": {"line": 59, "column": 17}
                                                            },
                                                            "method": true,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1407,
                                                                "end": 1414,
                                                                "loc": {
                                                                    "start": {"line": 57, "column": 16},
                                                                    "end": {"line": 57, "column": 23},
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
                                                                "start": 1415,
                                                                "end": 1421,
                                                                "loc": {
                                                                    "start": {"line": 57, "column": 24},
                                                                    "end": {"line": 57, "column": 30},
                                                                    "identifierName": "param1"
                                                                },
                                                                "name": "param1"
                                                            }, {
                                                                "type": "Identifier",
                                                                "start": 1423,
                                                                "end": 1429,
                                                                "loc": {
                                                                    "start": {"line": 57, "column": 32},
                                                                    "end": {"line": 57, "column": 38},
                                                                    "identifierName": "param2"
                                                                },
                                                                "name": "param2"
                                                            }],
                                                            "body": {
                                                                "type": "BlockStatement",
                                                                "start": 1430,
                                                                "end": 1489,
                                                                "loc": {
                                                                    "start": {"line": 57, "column": 39},
                                                                    "end": {"line": 59, "column": 17}
                                                                },
                                                                "body": [{
                                                                    "type": "ExpressionStatement",
                                                                    "start": 1452,
                                                                    "end": 1471,
                                                                    "loc": {
                                                                        "start": {"line": 58, "column": 20},
                                                                        "end": {"line": 58, "column": 39}
                                                                    },
                                                                    "expression": {
                                                                        "type": "CallExpression",
                                                                        "start": 1452,
                                                                        "end": 1471,
                                                                        "loc": {
                                                                            "start": {"line": 58, "column": 20},
                                                                            "end": {"line": 58, "column": 39}
                                                                        },
                                                                        "callee": {
                                                                            "type": "MemberExpression",
                                                                            "start": 1452,
                                                                            "end": 1463,
                                                                            "loc": {
                                                                                "start": {"line": 58, "column": 20},
                                                                                "end": {"line": 58, "column": 31}
                                                                            },
                                                                            "object": {
                                                                                "type": "Identifier",
                                                                                "start": 1452,
                                                                                "end": 1459,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 58,
                                                                                        "column": 20
                                                                                    },
                                                                                    "end": {"line": 58, "column": 27},
                                                                                    "identifierName": "console"
                                                                                },
                                                                                "name": "console"
                                                                            },
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "start": 1460,
                                                                                "end": 1463,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 58,
                                                                                        "column": 28
                                                                                    },
                                                                                    "end": {"line": 58, "column": 31},
                                                                                    "identifierName": "log"
                                                                                },
                                                                                "name": "log"
                                                                            },
                                                                            "computed": false
                                                                        },
                                                                        "arguments": [{
                                                                            "type": "Identifier",
                                                                            "start": 1464,
                                                                            "end": 1470,
                                                                            "loc": {
                                                                                "start": {"line": 58, "column": 32},
                                                                                "end": {"line": 58, "column": 38},
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
                                                            "start": 1507,
                                                            "end": 2035,
                                                            "loc": {
                                                                "start": {"line": 60, "column": 16},
                                                                "end": {"line": 70, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1507,
                                                                "end": 1514,
                                                                "loc": {
                                                                    "start": {"line": 60, "column": 16},
                                                                    "end": {"line": 60, "column": 23},
                                                                    "identifierName": "objFun2"
                                                                },
                                                                "name": "objFun2"
                                                            },
                                                            "value": {
                                                                "type": "FunctionExpression",
                                                                "start": 1516,
                                                                "end": 2035,
                                                                "loc": {
                                                                    "start": {"line": 60, "column": 25},
                                                                    "end": {"line": 70, "column": 17}
                                                                },
                                                                "id": null,
                                                                "generator": false,
                                                                "expression": false,
                                                                "async": false,
                                                                "params": [{
                                                                    "type": "Identifier",
                                                                    "start": 1526,
                                                                    "end": 1532,
                                                                    "loc": {
                                                                        "start": {"line": 60, "column": 35},
                                                                        "end": {"line": 60, "column": 41},
                                                                        "identifierName": "param1"
                                                                    },
                                                                    "name": "param1"
                                                                }, {
                                                                    "type": "Identifier",
                                                                    "start": 1534,
                                                                    "end": 1540,
                                                                    "loc": {
                                                                        "start": {"line": 60, "column": 43},
                                                                        "end": {"line": 60, "column": 49},
                                                                        "identifierName": "param2"
                                                                    },
                                                                    "name": "param2"
                                                                }],
                                                                "body": {
                                                                    "type": "BlockStatement",
                                                                    "start": 1542,
                                                                    "end": 2035,
                                                                    "loc": {
                                                                        "start": {"line": 60, "column": 51},
                                                                        "end": {"line": 70, "column": 17}
                                                                    },
                                                                    "body": [{
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1564,
                                                                        "end": 1592,
                                                                        "loc": {
                                                                            "start": {"line": 61, "column": 20},
                                                                            "end": {"line": 61, "column": 48}
                                                                        },
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "start": 1564,
                                                                            "end": 1591,
                                                                            "loc": {
                                                                                "start": {"line": 61, "column": 20},
                                                                                "end": {"line": 61, "column": 47}
                                                                            },
                                                                            "callee": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1564,
                                                                                "end": 1575,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 61,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 61, "column": 31}
                                                                                },
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "start": 1564,
                                                                                    "end": 1571,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 61,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 61,
                                                                                            "column": 27
                                                                                        },
                                                                                        "identifierName": "console"
                                                                                    },
                                                                                    "name": "console"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 1572,
                                                                                    "end": 1575,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 61,
                                                                                            "column": 28
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 61,
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
                                                                                "start": 1576,
                                                                                "end": 1582,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 61,
                                                                                        "column": 32
                                                                                    },
                                                                                    "end": {"line": 61, "column": 38},
                                                                                    "identifierName": "param1"
                                                                                },
                                                                                "name": "param1"
                                                                            }, {
                                                                                "type": "Identifier",
                                                                                "start": 1584,
                                                                                "end": 1590,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 61,
                                                                                        "column": 40
                                                                                    },
                                                                                    "end": {"line": 61, "column": 46},
                                                                                    "identifierName": "param2"
                                                                                },
                                                                                "name": "param2"
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1613,
                                                                        "end": 1627,
                                                                        "loc": {
                                                                            "start": {"line": 62, "column": 20},
                                                                            "end": {"line": 62, "column": 34}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1613,
                                                                            "end": 1626,
                                                                            "loc": {
                                                                                "start": {"line": 62, "column": 20},
                                                                                "end": {"line": 62, "column": 33}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "Identifier",
                                                                                "start": 1613,
                                                                                "end": 1621,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 62,
                                                                                        "column": 20
                                                                                    },
                                                                                    "end": {"line": 62, "column": 28},
                                                                                    "identifierName": "mutiVar1"
                                                                                },
                                                                                "name": "mutiVar1"
                                                                            },
                                                                            "right": {
                                                                                "type": "NumericLiteral",
                                                                                "start": 1624,
                                                                                "end": 1626,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 62,
                                                                                        "column": 31
                                                                                    }, "end": {"line": 62, "column": 33}
                                                                                },
                                                                                "extra": {"rawValue": 12, "raw": "12"},
                                                                                "value": 12
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1648,
                                                                        "end": 1680,
                                                                        "loc": {
                                                                            "start": {"line": 63, "column": 20},
                                                                            "end": {"line": 63, "column": 52}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1648,
                                                                            "end": 1679,
                                                                            "loc": {
                                                                                "start": {"line": 63, "column": 20},
                                                                                "end": {"line": 63, "column": 51}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1648,
                                                                                "end": 1668,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 63,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 63, "column": 40}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1648,
                                                                                    "end": 1659,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 63,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 63,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1648,
                                                                                        "end": 1654,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 63,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 63,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1655,
                                                                                        "end": 1659,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 63,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 63,
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
                                                                                    "start": 1660,
                                                                                    "end": 1668,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 63,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 63,
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
                                                                                "start": 1671,
                                                                                "end": 1679,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 63,
                                                                                        "column": 43
                                                                                    },
                                                                                    "end": {"line": 63, "column": 51},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1701,
                                                                        "end": 1736,
                                                                        "loc": {
                                                                            "start": {"line": 64, "column": 20},
                                                                            "end": {"line": 64, "column": 55}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1701,
                                                                            "end": 1735,
                                                                            "loc": {
                                                                                "start": {"line": 64, "column": 20},
                                                                                "end": {"line": 64, "column": 54}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1701,
                                                                                "end": 1724,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 64,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 64, "column": 43}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1701,
                                                                                    "end": 1712,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 64,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 64,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1701,
                                                                                        "end": 1707,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 64,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 64,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1708,
                                                                                        "end": 1712,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 64,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 64,
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
                                                                                    "start": 1713,
                                                                                    "end": 1723,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 64,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 64,
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
                                                                                "start": 1727,
                                                                                "end": 1735,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 64,
                                                                                        "column": 46
                                                                                    },
                                                                                    "end": {"line": 64, "column": 54},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1757,
                                                                        "end": 1790,
                                                                        "loc": {
                                                                            "start": {"line": 65, "column": 20},
                                                                            "end": {"line": 65, "column": 53}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1757,
                                                                            "end": 1789,
                                                                            "loc": {
                                                                                "start": {"line": 65, "column": 20},
                                                                                "end": {"line": 65, "column": 52}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1757,
                                                                                "end": 1778,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 65,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 65, "column": 41}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1757,
                                                                                    "end": 1768,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 65,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 65,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1757,
                                                                                        "end": 1763,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 65,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 65,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1764,
                                                                                        "end": 1768,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 65,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 65,
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
                                                                                    "start": 1769,
                                                                                    "end": 1777,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 65,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 65,
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
                                                                                "start": 1781,
                                                                                "end": 1789,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 65,
                                                                                        "column": 44
                                                                                    },
                                                                                    "end": {"line": 65, "column": 52},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1811,
                                                                        "end": 1858,
                                                                        "loc": {
                                                                            "start": {"line": 66, "column": 20},
                                                                            "end": {"line": 66, "column": 67}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1811,
                                                                            "end": 1857,
                                                                            "loc": {
                                                                                "start": {"line": 66, "column": 20},
                                                                                "end": {"line": 66, "column": 66}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1811,
                                                                                "end": 1846,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 66,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 66, "column": 55}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1811,
                                                                                    "end": 1822,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 66,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 66,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1811,
                                                                                        "end": 1817,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 66,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 66,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1818,
                                                                                        "end": 1822,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 66,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 66,
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
                                                                                    "start": 1823,
                                                                                    "end": 1845,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 66,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 66,
                                                                                            "column": 54
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1823,
                                                                                        "end": 1831,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 66,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 66,
                                                                                                "column": 40
                                                                                            },
                                                                                            "identifierName": "mutiVar3"
                                                                                        },
                                                                                        "name": "mutiVar3"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1832,
                                                                                        "end": 1845,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 66,
                                                                                                "column": 41
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 66,
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
                                                                                "start": 1849,
                                                                                "end": 1857,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 66,
                                                                                        "column": 58
                                                                                    },
                                                                                    "end": {"line": 66, "column": 66},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1879,
                                                                        "end": 1913,
                                                                        "loc": {
                                                                            "start": {"line": 67, "column": 20},
                                                                            "end": {"line": 67, "column": 54}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1879,
                                                                            "end": 1912,
                                                                            "loc": {
                                                                                "start": {"line": 67, "column": 20},
                                                                                "end": {"line": 67, "column": 53}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1879,
                                                                                "end": 1899,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 67,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 67, "column": 40}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1879,
                                                                                    "end": 1890,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 67,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 67,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1879,
                                                                                        "end": 1885,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 67,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 67,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1886,
                                                                                        "end": 1890,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 67,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 67,
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
                                                                                    "start": 1891,
                                                                                    "end": 1899,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 67,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 67,
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
                                                                                "start": 1902,
                                                                                "end": 1912,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 67,
                                                                                        "column": 43
                                                                                    }, "end": {"line": 67, "column": 53}
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
                                                                        "start": 1934,
                                                                        "end": 1961,
                                                                        "loc": {
                                                                            "start": {"line": 68, "column": 20},
                                                                            "end": {"line": 68, "column": 47}
                                                                        },
                                                                        "declarations": [{
                                                                            "type": "VariableDeclarator",
                                                                            "start": 1938,
                                                                            "end": 1960,
                                                                            "loc": {
                                                                                "start": {"line": 68, "column": 24},
                                                                                "end": {"line": 68, "column": 46}
                                                                            },
                                                                            "id": {
                                                                                "type": "Identifier",
                                                                                "start": 1938,
                                                                                "end": 1950,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 68,
                                                                                        "column": 24
                                                                                    },
                                                                                    "end": {"line": 68, "column": 36},
                                                                                    "identifierName": "unKnownValue"
                                                                                },
                                                                                "name": "unKnownValue"
                                                                            },
                                                                            "init": {
                                                                                "type": "Identifier",
                                                                                "start": 1953,
                                                                                "end": 1960,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 68,
                                                                                        "column": 39
                                                                                    },
                                                                                    "end": {"line": 68, "column": 46},
                                                                                    "identifierName": "unKnown"
                                                                                },
                                                                                "name": "unKnown"
                                                                            }
                                                                        }],
                                                                        "kind": "var"
                                                                    }, {
                                                                        "type": "VariableDeclaration",
                                                                        "start": 1982,
                                                                        "end": 2017,
                                                                        "loc": {
                                                                            "start": {"line": 69, "column": 20},
                                                                            "end": {"line": 69, "column": 55}
                                                                        },
                                                                        "declarations": [{
                                                                            "type": "VariableDeclarator",
                                                                            "start": 1986,
                                                                            "end": 2016,
                                                                            "loc": {
                                                                                "start": {"line": 69, "column": 24},
                                                                                "end": {"line": 69, "column": 54}
                                                                            },
                                                                            "id": {
                                                                                "type": "Identifier",
                                                                                "start": 1986,
                                                                                "end": 1999,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 69,
                                                                                        "column": 24
                                                                                    },
                                                                                    "end": {"line": 69, "column": 37},
                                                                                    "identifierName": "unKnownValue1"
                                                                                },
                                                                                "name": "unKnownValue1"
                                                                            },
                                                                            "init": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2002,
                                                                                "end": 2016,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 69,
                                                                                        "column": 40
                                                                                    }, "end": {"line": 69, "column": 54}
                                                                                },
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2002,
                                                                                    "end": 2008,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 69,
                                                                                            "column": 40
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 69,
                                                                                            "column": 46
                                                                                        },
                                                                                        "identifierName": "$scope"
                                                                                    },
                                                                                    "name": "$scope"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2009,
                                                                                    "end": 2016,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 69,
                                                                                            "column": 47
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 69,
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
                                                            "start": 2053,
                                                            "end": 2094,
                                                            "loc": {
                                                                "start": {"line": 71, "column": 16},
                                                                "end": {"line": 73, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 2053,
                                                                "end": 2060,
                                                                "loc": {
                                                                    "start": {"line": 71, "column": 16},
                                                                    "end": {"line": 71, "column": 23},
                                                                    "identifierName": "objFun3"
                                                                },
                                                                "name": "objFun3"
                                                            },
                                                            "value": {
                                                                "type": "ArrowFunctionExpression",
                                                                "start": 2062,
                                                                "end": 2094,
                                                                "loc": {
                                                                    "start": {"line": 71, "column": 25},
                                                                    "end": {"line": 73, "column": 17}
                                                                },
                                                                "id": null,
                                                                "generator": false,
                                                                "expression": false,
                                                                "async": false,
                                                                "params": [{
                                                                    "type": "Identifier",
                                                                    "start": 2063,
                                                                    "end": 2065,
                                                                    "loc": {
                                                                        "start": {"line": 71, "column": 26},
                                                                        "end": {"line": 71, "column": 28},
                                                                        "identifierName": "p1"
                                                                    },
                                                                    "name": "p1"
                                                                }, {
                                                                    "type": "Identifier",
                                                                    "start": 2067,
                                                                    "end": 2069,
                                                                    "loc": {
                                                                        "start": {"line": 71, "column": 30},
                                                                        "end": {"line": 71, "column": 32},
                                                                        "identifierName": "p2"
                                                                    },
                                                                    "name": "p2"
                                                                }],
                                                                "body": {
                                                                    "type": "BlockStatement",
                                                                    "start": 2074,
                                                                    "end": 2094,
                                                                    "loc": {
                                                                        "start": {"line": 71, "column": 37},
                                                                        "end": {"line": 73, "column": 17}
                                                                    },
                                                                    "body": [],
                                                                    "directives": []
                                                                }
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 2112,
                                                            "end": 2144,
                                                            "loc": {
                                                                "start": {"line": 74, "column": 16},
                                                                "end": {"line": 76, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 2116,
                                                                "end": 2121,
                                                                "loc": {
                                                                    "start": {"line": 74, "column": 20},
                                                                    "end": {"line": 74, "column": 25},
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
                                                                "start": 2124,
                                                                "end": 2144,
                                                                "loc": {
                                                                    "start": {"line": 74, "column": 28},
                                                                    "end": {"line": 76, "column": 17}
                                                                },
                                                                "body": [],
                                                                "directives": []
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 2162,
                                                            "end": 2199,
                                                            "loc": {
                                                                "start": {"line": 77, "column": 16},
                                                                "end": {"line": 79, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 2166,
                                                                "end": 2171,
                                                                "loc": {
                                                                    "start": {"line": 77, "column": 20},
                                                                    "end": {"line": 77, "column": 25},
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
                                                                "start": 2172,
                                                                "end": 2177,
                                                                "loc": {
                                                                    "start": {"line": 77, "column": 26},
                                                                    "end": {"line": 77, "column": 31},
                                                                    "identifierName": "value"
                                                                },
                                                                "name": "value"
                                                            }],
                                                            "body": {
                                                                "type": "BlockStatement",
                                                                "start": 2179,
                                                                "end": 2199,
                                                                "loc": {
                                                                    "start": {"line": 77, "column": 33},
                                                                    "end": {"line": 79, "column": 17}
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
                                                    "start": 1326,
                                                    "end": 1330,
                                                    "loc": {
                                                        "start": {"line": 54, "column": 12},
                                                        "end": {"line": 54, "column": 16}
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
                                    "start": 1228,
                                    "end": 1236,
                                    "loc": {"start": {"line": 51, "column": 8}, "end": {"line": 51, "column": 16}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope函数初始化",
                                    "start": 2234,
                                    "end": 2246,
                                    "loc": {"start": {"line": 84, "column": 8}, "end": {"line": 84, "column": 20}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 2255,
                                "end": 2335,
                                "loc": {"start": {"line": 85, "column": 8}, "end": {"line": 87, "column": 10}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2255,
                                    "end": 2334,
                                    "loc": {"start": {"line": 85, "column": 8}, "end": {"line": 87, "column": 9}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 2255,
                                        "end": 2270,
                                        "loc": {"start": {"line": 85, "column": 8}, "end": {"line": 85, "column": 23}},
                                        "object": {
                                            "type": "Identifier",
                                            "start": 2255,
                                            "end": 2261,
                                            "loc": {
                                                "start": {"line": 85, "column": 8},
                                                "end": {"line": 85, "column": 14},
                                                "identifierName": "$scope"
                                            },
                                            "name": "$scope",
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 2262,
                                            "end": 2270,
                                            "loc": {
                                                "start": {"line": 85, "column": 15},
                                                "end": {"line": 85, "column": 23},
                                                "identifierName": "scopeFun"
                                            },
                                            "name": "scopeFun"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "FunctionExpression",
                                        "start": 2273,
                                        "end": 2334,
                                        "loc": {"start": {"line": 85, "column": 26}, "end": {"line": 87, "column": 9}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 2283,
                                            "end": 2289,
                                            "loc": {
                                                "start": {"line": 85, "column": 36},
                                                "end": {"line": 85, "column": 42},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 2291,
                                            "end": 2334,
                                            "loc": {
                                                "start": {"line": 85, "column": 44},
                                                "end": {"line": 87, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 2305,
                                                "end": 2324,
                                                "loc": {
                                                    "start": {"line": 86, "column": 12},
                                                    "end": {"line": 86, "column": 31}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 2305,
                                                    "end": 2324,
                                                    "loc": {
                                                        "start": {"line": 86, "column": 12},
                                                        "end": {"line": 86, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 2305,
                                                        "end": 2316,
                                                        "loc": {
                                                            "start": {"line": 86, "column": 12},
                                                            "end": {"line": 86, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 2305,
                                                            "end": 2312,
                                                            "loc": {
                                                                "start": {"line": 86, "column": 12},
                                                                "end": {"line": 86, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 2313,
                                                            "end": 2316,
                                                            "loc": {
                                                                "start": {"line": 86, "column": 20},
                                                                "end": {"line": 86, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 2317,
                                                        "end": 2323,
                                                        "loc": {
                                                            "start": {"line": 86, "column": 24},
                                                            "end": {"line": 86, "column": 30},
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
                                    "start": 2234,
                                    "end": 2246,
                                    "loc": {"start": {"line": 84, "column": 8}, "end": {"line": 84, "column": 20}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope多级初始化函数",
                                    "start": 2345,
                                    "end": 2359,
                                    "loc": {"start": {"line": 89, "column": 8}, "end": {"line": 89, "column": 22}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 2368,
                                "end": 2831,
                                "loc": {"start": {"line": 90, "column": 8}, "end": {"line": 107, "column": 10}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2368,
                                    "end": 2830,
                                    "loc": {"start": {"line": 90, "column": 8}, "end": {"line": 107, "column": 9}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 2368,
                                        "end": 2392,
                                        "loc": {"start": {"line": 90, "column": 8}, "end": {"line": 90, "column": 32}},
                                        "object": {
                                            "type": "MemberExpression",
                                            "start": 2368,
                                            "end": 2382,
                                            "loc": {
                                                "start": {"line": 90, "column": 8},
                                                "end": {"line": 90, "column": 22}
                                            },
                                            "object": {
                                                "type": "MemberExpression",
                                                "start": 2368,
                                                "end": 2379,
                                                "loc": {
                                                    "start": {"line": 90, "column": 8},
                                                    "end": {"line": 90, "column": 19}
                                                },
                                                "object": {
                                                    "type": "Identifier",
                                                    "start": 2368,
                                                    "end": 2374,
                                                    "loc": {
                                                        "start": {"line": 90, "column": 8},
                                                        "end": {"line": 90, "column": 14},
                                                        "identifierName": "$scope"
                                                    },
                                                    "name": "$scope",
                                                    "leadingComments": null
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "start": 2375,
                                                    "end": 2379,
                                                    "loc": {
                                                        "start": {"line": 90, "column": 15},
                                                        "end": {"line": 90, "column": 19},
                                                        "identifierName": "data"
                                                    },
                                                    "name": "data"
                                                },
                                                "computed": false,
                                                "leadingComments": null
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 2380,
                                                "end": 2382,
                                                "loc": {
                                                    "start": {"line": 90, "column": 20},
                                                    "end": {"line": 90, "column": 22},
                                                    "identifierName": "qq"
                                                },
                                                "name": "qq"
                                            },
                                            "computed": false,
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 2383,
                                            "end": 2392,
                                            "loc": {
                                                "start": {"line": 90, "column": 23},
                                                "end": {"line": 90, "column": 32},
                                                "identifierName": "scopeFun2"
                                            },
                                            "name": "scopeFun2"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "FunctionExpression",
                                        "start": 2395,
                                        "end": 2830,
                                        "loc": {"start": {"line": 90, "column": 35}, "end": {"line": 107, "column": 9}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 2407,
                                            "end": 2830,
                                            "loc": {
                                                "start": {"line": 90, "column": 47},
                                                "end": {"line": 107, "column": 9}
                                            },
                                            "body": [{
                                                "type": "VariableDeclaration",
                                                "start": 2422,
                                                "end": 2445,
                                                "loc": {
                                                    "start": {"line": 92, "column": 12},
                                                    "end": {"line": 92, "column": 35}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 2426,
                                                    "end": 2444,
                                                    "loc": {
                                                        "start": {"line": 92, "column": 16},
                                                        "end": {"line": 92, "column": 34}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 2426,
                                                        "end": 2433,
                                                        "loc": {
                                                            "start": {"line": 92, "column": 16},
                                                            "end": {"line": 92, "column": 23},
                                                            "identifierName": "subFun2"
                                                        },
                                                        "name": "subFun2"
                                                    },
                                                    "init": {
                                                        "type": "Identifier",
                                                        "start": 2436,
                                                        "end": 2444,
                                                        "loc": {
                                                            "start": {"line": 92, "column": 26},
                                                            "end": {"line": 92, "column": 34},
                                                            "identifierName": "_subFun2"
                                                        },
                                                        "name": "_subFun2"
                                                    }
                                                }],
                                                "kind": "var"
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 2458,
                                                "end": 2515,
                                                "loc": {
                                                    "start": {"line": 93, "column": 12},
                                                    "end": {"line": 95, "column": 14}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 2462,
                                                    "end": 2514,
                                                    "loc": {
                                                        "start": {"line": 93, "column": 16},
                                                        "end": {"line": 95, "column": 13}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 2462,
                                                        "end": 2469,
                                                        "loc": {
                                                            "start": {"line": 93, "column": 16},
                                                            "end": {"line": 93, "column": 23},
                                                            "identifierName": "subFun1"
                                                        },
                                                        "name": "subFun1"
                                                    },
                                                    "init": {
                                                        "type": "FunctionExpression",
                                                        "start": 2472,
                                                        "end": 2514,
                                                        "loc": {
                                                            "start": {"line": 93, "column": 26},
                                                            "end": {"line": 95, "column": 13}
                                                        },
                                                        "id": null,
                                                        "generator": false,
                                                        "expression": false,
                                                        "async": false,
                                                        "params": [{
                                                            "type": "Identifier",
                                                            "start": 2482,
                                                            "end": 2488,
                                                            "loc": {
                                                                "start": {"line": 93, "column": 36},
                                                                "end": {"line": 93, "column": 42},
                                                                "identifierName": "param1"
                                                            },
                                                            "name": "param1"
                                                        }, {
                                                            "type": "Identifier",
                                                            "start": 2490,
                                                            "end": 2496,
                                                            "loc": {
                                                                "start": {"line": 93, "column": 44},
                                                                "end": {"line": 93, "column": 50},
                                                                "identifierName": "param2"
                                                            },
                                                            "name": "param2"
                                                        }],
                                                        "body": {
                                                            "type": "BlockStatement",
                                                            "start": 2498,
                                                            "end": 2514,
                                                            "loc": {
                                                                "start": {"line": 93, "column": 52},
                                                                "end": {"line": 95, "column": 13}
                                                            },
                                                            "body": [],
                                                            "directives": []
                                                        }
                                                    }
                                                }],
                                                "kind": "var"
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 2528,
                                                "end": 2553,
                                                "loc": {
                                                    "start": {"line": 96, "column": 12},
                                                    "end": {"line": 96, "column": 37}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 2528,
                                                    "end": 2552,
                                                    "loc": {
                                                        "start": {"line": 96, "column": 12},
                                                        "end": {"line": 96, "column": 36}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 2528,
                                                        "end": 2535,
                                                        "loc": {
                                                            "start": {"line": 96, "column": 12},
                                                            "end": {"line": 96, "column": 19},
                                                            "identifierName": "subFun2"
                                                        },
                                                        "name": "subFun2"
                                                    },
                                                    "arguments": [{
                                                        "type": "MemberExpression",
                                                        "start": 2536,
                                                        "end": 2551,
                                                        "loc": {
                                                            "start": {"line": 96, "column": 20},
                                                            "end": {"line": 96, "column": 35}
                                                        },
                                                        "object": {
                                                            "type": "CallExpression",
                                                            "start": 2536,
                                                            "end": 2545,
                                                            "loc": {
                                                                "start": {"line": 96, "column": 20},
                                                                "end": {"line": 96, "column": 29}
                                                            },
                                                            "callee": {
                                                                "type": "Identifier",
                                                                "start": 2536,
                                                                "end": 2543,
                                                                "loc": {
                                                                    "start": {"line": 96, "column": 20},
                                                                    "end": {"line": 96, "column": 27},
                                                                    "identifierName": "subFun1"
                                                                },
                                                                "name": "subFun1"
                                                            },
                                                            "arguments": []
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 2546,
                                                            "end": 2551,
                                                            "loc": {
                                                                "start": {"line": 96, "column": 30},
                                                                "end": {"line": 96, "column": 35},
                                                                "identifierName": "value"
                                                            },
                                                            "name": "value"
                                                        },
                                                        "computed": false
                                                    }]
                                                }
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 2566,
                                                "end": 2598,
                                                "loc": {
                                                    "start": {"line": 97, "column": 12},
                                                    "end": {"line": 97, "column": 44}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 2566,
                                                    "end": 2597,
                                                    "loc": {
                                                        "start": {"line": 97, "column": 12},
                                                        "end": {"line": 97, "column": 43}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 2566,
                                                        "end": 2573,
                                                        "loc": {
                                                            "start": {"line": 97, "column": 12},
                                                            "end": {"line": 97, "column": 19},
                                                            "identifierName": "subFun1"
                                                        },
                                                        "name": "subFun1"
                                                    },
                                                    "arguments": [{
                                                        "type": "MemberExpression",
                                                        "start": 2574,
                                                        "end": 2596,
                                                        "loc": {
                                                            "start": {"line": 97, "column": 20},
                                                            "end": {"line": 97, "column": 42}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 2574,
                                                            "end": 2582,
                                                            "loc": {
                                                                "start": {"line": 97, "column": 20},
                                                                "end": {"line": 97, "column": 28},
                                                                "identifierName": "mutiVar3"
                                                            },
                                                            "name": "mutiVar3"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 2583,
                                                            "end": 2596,
                                                            "loc": {
                                                                "start": {"line": 97, "column": 29},
                                                                "end": {"line": 97, "column": 42},
                                                                "identifierName": "mutiVar3Value"
                                                            },
                                                            "name": "mutiVar3Value"
                                                        },
                                                        "computed": false
                                                    }]
                                                }
                                            }, {
                                                "type": "FunctionDeclaration",
                                                "start": 2611,
                                                "end": 2661,
                                                "loc": {
                                                    "start": {"line": 98, "column": 12},
                                                    "end": {"line": 100, "column": 13}
                                                },
                                                "id": {
                                                    "type": "Identifier",
                                                    "start": 2620,
                                                    "end": 2628,
                                                    "loc": {
                                                        "start": {"line": 98, "column": 21},
                                                        "end": {"line": 98, "column": 29},
                                                        "identifierName": "_subFun2"
                                                    },
                                                    "name": "_subFun2"
                                                },
                                                "generator": false,
                                                "expression": false,
                                                "async": false,
                                                "params": [{
                                                    "type": "Identifier",
                                                    "start": 2629,
                                                    "end": 2635,
                                                    "loc": {
                                                        "start": {"line": 98, "column": 30},
                                                        "end": {"line": 98, "column": 36},
                                                        "identifierName": "param1"
                                                    },
                                                    "name": "param1"
                                                }, {
                                                    "type": "Identifier",
                                                    "start": 2637,
                                                    "end": 2643,
                                                    "loc": {
                                                        "start": {"line": 98, "column": 38},
                                                        "end": {"line": 98, "column": 44},
                                                        "identifierName": "param2"
                                                    },
                                                    "name": "param2"
                                                }],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "start": 2645,
                                                    "end": 2661,
                                                    "loc": {
                                                        "start": {"line": 98, "column": 46},
                                                        "end": {"line": 100, "column": 13}
                                                    },
                                                    "body": [],
                                                    "directives": []
                                                }
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 2675,
                                                "end": 2716,
                                                "loc": {
                                                    "start": {"line": 102, "column": 12},
                                                    "end": {"line": 102, "column": 53}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 2679,
                                                    "end": 2715,
                                                    "loc": {
                                                        "start": {"line": 102, "column": 16},
                                                        "end": {"line": 102, "column": 52}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 2679,
                                                        "end": 2690,
                                                        "loc": {
                                                            "start": {"line": 102, "column": 16},
                                                            "end": {"line": 102, "column": 27},
                                                            "identifierName": "fnMutiValue"
                                                        },
                                                        "name": "fnMutiValue"
                                                    },
                                                    "init": {
                                                        "type": "MemberExpression",
                                                        "start": 2693,
                                                        "end": 2715,
                                                        "loc": {
                                                            "start": {"line": 102, "column": 30},
                                                            "end": {"line": 102, "column": 52}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 2693,
                                                            "end": 2701,
                                                            "loc": {
                                                                "start": {"line": 102, "column": 30},
                                                                "end": {"line": 102, "column": 38},
                                                                "identifierName": "mutiVar3"
                                                            },
                                                            "name": "mutiVar3"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 2702,
                                                            "end": 2715,
                                                            "loc": {
                                                                "start": {"line": 102, "column": 39},
                                                                "end": {"line": 102, "column": 52},
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
                                                "start": 2729,
                                                "end": 2755,
                                                "loc": {
                                                    "start": {"line": 103, "column": 12},
                                                    "end": {"line": 103, "column": 38}
                                                },
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "start": 2729,
                                                    "end": 2754,
                                                    "loc": {
                                                        "start": {"line": 103, "column": 12},
                                                        "end": {"line": 103, "column": 37}
                                                    },
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "MemberExpression",
                                                        "start": 2729,
                                                        "end": 2747,
                                                        "loc": {
                                                            "start": {"line": 103, "column": 12},
                                                            "end": {"line": 103, "column": 30}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 2729,
                                                            "end": 2735,
                                                            "loc": {
                                                                "start": {"line": 103, "column": 12},
                                                                "end": {"line": 103, "column": 18},
                                                                "identifierName": "$scope"
                                                            },
                                                            "name": "$scope"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 2736,
                                                            "end": 2747,
                                                            "loc": {
                                                                "start": {"line": 103, "column": 19},
                                                                "end": {"line": 103, "column": 30},
                                                                "identifierName": "funScopeVar"
                                                            },
                                                            "name": "funScopeVar"
                                                        },
                                                        "computed": false
                                                    },
                                                    "right": {
                                                        "type": "StringLiteral",
                                                        "start": 2750,
                                                        "end": 2754,
                                                        "loc": {
                                                            "start": {"line": 103, "column": 33},
                                                            "end": {"line": 103, "column": 37}
                                                        },
                                                        "extra": {"rawValue": "12", "raw": "\"12\""},
                                                        "value": "12"
                                                    }
                                                }
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 2768,
                                                "end": 2777,
                                                "loc": {
                                                    "start": {"line": 104, "column": 12},
                                                    "end": {"line": 104, "column": 21}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 2768,
                                                    "end": 2776,
                                                    "loc": {
                                                        "start": {"line": 104, "column": 12},
                                                        "end": {"line": 104, "column": 20}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 2768,
                                                        "end": 2774,
                                                        "loc": {
                                                            "start": {"line": 104, "column": 12},
                                                            "end": {"line": 104, "column": 18},
                                                            "identifierName": "decFun"
                                                        },
                                                        "name": "decFun"
                                                    },
                                                    "arguments": []
                                                }
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 2790,
                                                "end": 2819,
                                                "loc": {
                                                    "start": {"line": 105, "column": 12},
                                                    "end": {"line": 105, "column": 41}
                                                },
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "start": 2790,
                                                    "end": 2818,
                                                    "loc": {
                                                        "start": {"line": 105, "column": 12},
                                                        "end": {"line": 105, "column": 40}
                                                    },
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "MemberExpression",
                                                        "start": 2790,
                                                        "end": 2812,
                                                        "loc": {
                                                            "start": {"line": 105, "column": 12},
                                                            "end": {"line": 105, "column": 34}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 2790,
                                                            "end": 2799,
                                                            "loc": {
                                                                "start": {"line": 105, "column": 12},
                                                                "end": {"line": 105, "column": 21},
                                                                "identifierName": "scopeData"
                                                            },
                                                            "name": "scopeData"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 2800,
                                                            "end": 2812,
                                                            "loc": {
                                                                "start": {"line": 105, "column": 22},
                                                                "end": {"line": 105, "column": 34},
                                                                "identifierName": "funScopeVar1"
                                                            },
                                                            "name": "funScopeVar1"
                                                        },
                                                        "computed": false
                                                    },
                                                    "right": {
                                                        "type": "StringLiteral",
                                                        "start": 2815,
                                                        "end": 2818,
                                                        "loc": {
                                                            "start": {"line": 105, "column": 37},
                                                            "end": {"line": 105, "column": 40}
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
                                    "start": 2345,
                                    "end": 2359,
                                    "loc": {"start": {"line": 89, "column": 8}, "end": {"line": 89, "column": 22}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentBlock",
                                    "value": "*\n         * 表达式\n         ",
                                    "start": 2841,
                                    "end": 2871,
                                    "loc": {"start": {"line": 109, "column": 8}, "end": {"line": 111, "column": 11}}
                                }]
                            }, {
                                "type": "FunctionDeclaration",
                                "start": 2880,
                                "end": 2963,
                                "loc": {"start": {"line": 112, "column": 8}, "end": {"line": 114, "column": 9}},
                                "id": {
                                    "type": "Identifier",
                                    "start": 2889,
                                    "end": 2895,
                                    "loc": {
                                        "start": {"line": 112, "column": 17},
                                        "end": {"line": 112, "column": 23},
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
                                    "start": 2896,
                                    "end": 2902,
                                    "loc": {
                                        "start": {"line": 112, "column": 24},
                                        "end": {"line": 112, "column": 30},
                                        "identifierName": "param1"
                                    },
                                    "name": "param1"
                                }, {
                                    "type": "Identifier",
                                    "start": 2904,
                                    "end": 2910,
                                    "loc": {
                                        "start": {"line": 112, "column": 32},
                                        "end": {"line": 112, "column": 38},
                                        "identifierName": "param2"
                                    },
                                    "name": "param2"
                                }],
                                "body": {
                                    "type": "BlockStatement",
                                    "start": 2912,
                                    "end": 2963,
                                    "loc": {"start": {"line": 112, "column": 40}, "end": {"line": 114, "column": 9}},
                                    "body": [{
                                        "type": "ExpressionStatement",
                                        "start": 2926,
                                        "end": 2953,
                                        "loc": {
                                            "start": {"line": 113, "column": 12},
                                            "end": {"line": 113, "column": 39}
                                        },
                                        "expression": {
                                            "type": "CallExpression",
                                            "start": 2926,
                                            "end": 2953,
                                            "loc": {
                                                "start": {"line": 113, "column": 12},
                                                "end": {"line": 113, "column": 39}
                                            },
                                            "callee": {
                                                "type": "MemberExpression",
                                                "start": 2926,
                                                "end": 2937,
                                                "loc": {
                                                    "start": {"line": 113, "column": 12},
                                                    "end": {"line": 113, "column": 23}
                                                },
                                                "object": {
                                                    "type": "Identifier",
                                                    "start": 2926,
                                                    "end": 2933,
                                                    "loc": {
                                                        "start": {"line": 113, "column": 12},
                                                        "end": {"line": 113, "column": 19},
                                                        "identifierName": "console"
                                                    },
                                                    "name": "console"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "start": 2934,
                                                    "end": 2937,
                                                    "loc": {
                                                        "start": {"line": 113, "column": 20},
                                                        "end": {"line": 113, "column": 23},
                                                        "identifierName": "log"
                                                    },
                                                    "name": "log"
                                                },
                                                "computed": false
                                            },
                                            "arguments": [{
                                                "type": "Identifier",
                                                "start": 2938,
                                                "end": 2944,
                                                "loc": {
                                                    "start": {"line": 113, "column": 24},
                                                    "end": {"line": 113, "column": 30},
                                                    "identifierName": "param1"
                                                },
                                                "name": "param1"
                                            }, {
                                                "type": "Identifier",
                                                "start": 2946,
                                                "end": 2952,
                                                "loc": {
                                                    "start": {"line": 113, "column": 32},
                                                    "end": {"line": 113, "column": 38},
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
                                    "start": 2841,
                                    "end": 2871,
                                    "loc": {"start": {"line": 109, "column": 8}, "end": {"line": 111, "column": 11}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "直接调用",
                                    "start": 2973,
                                    "end": 2979,
                                    "loc": {"start": {"line": 116, "column": 8}, "end": {"line": 116, "column": 14}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 2988,
                                "end": 2998,
                                "loc": {"start": {"line": 117, "column": 8}, "end": {"line": 117, "column": 18}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 2988,
                                    "end": 2997,
                                    "loc": {"start": {"line": 117, "column": 8}, "end": {"line": 117, "column": 17}},
                                    "callee": {
                                        "type": "Identifier",
                                        "start": 2988,
                                        "end": 2995,
                                        "loc": {
                                            "start": {"line": 117, "column": 8},
                                            "end": {"line": 117, "column": 15},
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
                                    "start": 2973,
                                    "end": 2979,
                                    "loc": {"start": {"line": 116, "column": 8}, "end": {"line": 116, "column": 14}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "调用",
                                    "start": 3007,
                                    "end": 3011,
                                    "loc": {"start": {"line": 118, "column": 8}, "end": {"line": 118, "column": 12}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 3020,
                                "end": 3099,
                                "loc": {"start": {"line": 119, "column": 8}, "end": {"line": 121, "column": 11}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 3020,
                                    "end": 3098,
                                    "loc": {"start": {"line": 119, "column": 8}, "end": {"line": 121, "column": 10}},
                                    "callee": {
                                        "type": "MemberExpression",
                                        "start": 3020,
                                        "end": 3035,
                                        "loc": {
                                            "start": {"line": 119, "column": 8},
                                            "end": {"line": 119, "column": 23}
                                        },
                                        "object": {
                                            "type": "Identifier",
                                            "start": 3020,
                                            "end": 3026,
                                            "loc": {
                                                "start": {"line": 119, "column": 8},
                                                "end": {"line": 119, "column": 14},
                                                "identifierName": "$scope"
                                            },
                                            "name": "$scope",
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 3027,
                                            "end": 3035,
                                            "loc": {
                                                "start": {"line": 119, "column": 15},
                                                "end": {"line": 119, "column": 23},
                                                "identifierName": "scopeFun"
                                            },
                                            "name": "scopeFun"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "arguments": [{
                                        "type": "FunctionExpression",
                                        "start": 3036,
                                        "end": 3097,
                                        "loc": {
                                            "start": {"line": 119, "column": 24},
                                            "end": {"line": 121, "column": 9}
                                        },
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 3046,
                                            "end": 3052,
                                            "loc": {
                                                "start": {"line": 119, "column": 34},
                                                "end": {"line": 119, "column": 40},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 3054,
                                            "end": 3097,
                                            "loc": {
                                                "start": {"line": 119, "column": 42},
                                                "end": {"line": 121, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 3068,
                                                "end": 3087,
                                                "loc": {
                                                    "start": {"line": 120, "column": 12},
                                                    "end": {"line": 120, "column": 31}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 3068,
                                                    "end": 3087,
                                                    "loc": {
                                                        "start": {"line": 120, "column": 12},
                                                        "end": {"line": 120, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 3068,
                                                        "end": 3079,
                                                        "loc": {
                                                            "start": {"line": 120, "column": 12},
                                                            "end": {"line": 120, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3068,
                                                            "end": 3075,
                                                            "loc": {
                                                                "start": {"line": 120, "column": 12},
                                                                "end": {"line": 120, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3076,
                                                            "end": 3079,
                                                            "loc": {
                                                                "start": {"line": 120, "column": 20},
                                                                "end": {"line": 120, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 3080,
                                                        "end": 3086,
                                                        "loc": {
                                                            "start": {"line": 120, "column": 24},
                                                            "end": {"line": 120, "column": 30},
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
                                    "start": 3007,
                                    "end": 3011,
                                    "loc": {"start": {"line": 118, "column": 8}, "end": {"line": 118, "column": 12}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": " this.scopeFun2();",
                                    "start": 3108,
                                    "end": 3128,
                                    "loc": {"start": {"line": 122, "column": 8}, "end": {"line": 122, "column": 28}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 3137,
                                "end": 3161,
                                "loc": {"start": {"line": 123, "column": 8}, "end": {"line": 123, "column": 32}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 3137,
                                    "end": 3160,
                                    "loc": {"start": {"line": 123, "column": 8}, "end": {"line": 123, "column": 31}},
                                    "callee": {
                                        "type": "MemberExpression",
                                        "start": 3137,
                                        "end": 3158,
                                        "loc": {
                                            "start": {"line": 123, "column": 8},
                                            "end": {"line": 123, "column": 29}
                                        },
                                        "object": {
                                            "type": "MemberExpression",
                                            "start": 3137,
                                            "end": 3148,
                                            "loc": {
                                                "start": {"line": 123, "column": 8},
                                                "end": {"line": 123, "column": 19}
                                            },
                                            "object": {
                                                "type": "Identifier",
                                                "start": 3137,
                                                "end": 3143,
                                                "loc": {
                                                    "start": {"line": 123, "column": 8},
                                                    "end": {"line": 123, "column": 14},
                                                    "identifierName": "$scope"
                                                },
                                                "name": "$scope",
                                                "leadingComments": null
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 3144,
                                                "end": 3148,
                                                "loc": {
                                                    "start": {"line": 123, "column": 15},
                                                    "end": {"line": 123, "column": 19},
                                                    "identifierName": "data"
                                                },
                                                "name": "data"
                                            },
                                            "computed": false,
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 3149,
                                            "end": 3158,
                                            "loc": {
                                                "start": {"line": 123, "column": 20},
                                                "end": {"line": 123, "column": 29},
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
                                    "start": 3108,
                                    "end": 3128,
                                    "loc": {"start": {"line": 122, "column": 8}, "end": {"line": 122, "column": 28}}
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
        "value": "变量赋值",
        "start": 275,
        "end": 281,
        "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 14}}
    }, {
        "type": "CommentLine",
        "value": "单个变量申明",
        "start": 316,
        "end": 324,
        "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "多个变量申明， 包括函数",
        "start": 380,
        "end": 394,
        "loc": {"start": {"line": 21, "column": 8}, "end": {"line": 21, "column": 22}}
    }, {
        "type": "CommentLine",
        "value": "函数直接申明",
        "start": 1228,
        "end": 1236,
        "loc": {"start": {"line": 51, "column": 8}, "end": {"line": 51, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "对象",
        "start": 1326,
        "end": 1330,
        "loc": {"start": {"line": 54, "column": 12}, "end": {"line": 54, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "scope函数初始化",
        "start": 2234,
        "end": 2246,
        "loc": {"start": {"line": 84, "column": 8}, "end": {"line": 84, "column": 20}}
    }, {
        "type": "CommentLine",
        "value": "scope多级初始化函数",
        "start": 2345,
        "end": 2359,
        "loc": {"start": {"line": 89, "column": 8}, "end": {"line": 89, "column": 22}}
    }, {
        "type": "CommentBlock",
        "value": "*\n         * 表达式\n         ",
        "start": 2841,
        "end": 2871,
        "loc": {"start": {"line": 109, "column": 8}, "end": {"line": 111, "column": 11}}
    }, {
        "type": "CommentLine",
        "value": "直接调用",
        "start": 2973,
        "end": 2979,
        "loc": {"start": {"line": 116, "column": 8}, "end": {"line": 116, "column": 14}}
    }, {
        "type": "CommentLine",
        "value": "调用",
        "start": 3007,
        "end": 3011,
        "loc": {"start": {"line": 118, "column": 8}, "end": {"line": 118, "column": 12}}
    }, {
        "type": "CommentLine",
        "value": " this.scopeFun2();",
        "start": 3108,
        "end": 3128,
        "loc": {"start": {"line": 122, "column": 8}, "end": {"line": 122, "column": 28}}
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
        "value": "变量赋值",
        "start": 275,
        "end": 281,
        "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 290,
        "end": 299,
        "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 17}}
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
        "start": 300,
        "end": 301,
        "loc": {"start": {"line": 18, "column": 18}, "end": {"line": 18, "column": 19}}
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
        "start": 302,
        "end": 306,
        "loc": {"start": {"line": 18, "column": 20}, "end": {"line": 18, "column": 24}}
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
        }, "start": 306, "end": 307, "loc": {"start": {"line": 18, "column": 24}, "end": {"line": 18, "column": 25}}
    }, {
        "type": "CommentLine",
        "value": "单个变量申明",
        "start": 316,
        "end": 324,
        "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 16}}
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
        "start": 333,
        "end": 336,
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
        "value": "singleVariable",
        "start": 337,
        "end": 351,
        "loc": {"start": {"line": 20, "column": 12}, "end": {"line": 20, "column": 26}}
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
        "start": 352,
        "end": 353,
        "loc": {"start": {"line": 20, "column": 27}, "end": {"line": 20, "column": 28}}
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
        "start": 354,
        "end": 370,
        "loc": {"start": {"line": 20, "column": 29}, "end": {"line": 20, "column": 45}}
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
        }, "start": 370, "end": 371, "loc": {"start": {"line": 20, "column": 45}, "end": {"line": 20, "column": 46}}
    }, {
        "type": "CommentLine",
        "value": "多个变量申明， 包括函数",
        "start": 380,
        "end": 394,
        "loc": {"start": {"line": 21, "column": 8}, "end": {"line": 21, "column": 22}}
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
        "start": 403,
        "end": 406,
        "loc": {"start": {"line": 22, "column": 8}, "end": {"line": 22, "column": 11}}
    }, {
        "type": {
            "label": "name",
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
        "start": 407,
        "end": 415,
        "loc": {"start": {"line": 22, "column": 12}, "end": {"line": 22, "column": 20}}
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
        }, "start": 415, "end": 416, "loc": {"start": {"line": 22, "column": 20}, "end": {"line": 22, "column": 21}}
    }, {
        "type": {
            "label": "name",
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
        "start": 429,
        "end": 437,
        "loc": {"start": {"line": 23, "column": 12}, "end": {"line": 23, "column": 20}}
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
        "start": 438,
        "end": 439,
        "loc": {"start": {"line": 23, "column": 21}, "end": {"line": 23, "column": 22}}
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
        "start": 440,
        "end": 444,
        "loc": {"start": {"line": 23, "column": 23}, "end": {"line": 23, "column": 27}}
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
        }, "start": 444, "end": 445, "loc": {"start": {"line": 23, "column": 27}, "end": {"line": 23, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 458,
        "end": 466,
        "loc": {"start": {"line": 24, "column": 12}, "end": {"line": 24, "column": 20}}
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
        "start": 467,
        "end": 468,
        "loc": {"start": {"line": 24, "column": 21}, "end": {"line": 24, "column": 22}}
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
        "start": 469,
        "end": 479,
        "loc": {"start": {"line": 24, "column": 23}, "end": {"line": 24, "column": 33}}
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
        }, "start": 479, "end": 480, "loc": {"start": {"line": 24, "column": 33}, "end": {"line": 24, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 493,
        "end": 500,
        "loc": {"start": {"line": 25, "column": 12}, "end": {"line": 25, "column": 19}}
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
        "start": 501,
        "end": 502,
        "loc": {"start": {"line": 25, "column": 20}, "end": {"line": 25, "column": 21}}
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
        "start": 503,
        "end": 511,
        "loc": {"start": {"line": 25, "column": 22}, "end": {"line": 25, "column": 30}}
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
        }, "start": 512, "end": 513, "loc": {"start": {"line": 25, "column": 31}, "end": {"line": 25, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 513,
        "end": 519,
        "loc": {"start": {"line": 25, "column": 32}, "end": {"line": 25, "column": 38}}
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
        }, "start": 519, "end": 520, "loc": {"start": {"line": 25, "column": 38}, "end": {"line": 25, "column": 39}}
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
        }, "start": 521, "end": 522, "loc": {"start": {"line": 25, "column": 40}, "end": {"line": 25, "column": 41}}
    }, {
        "type": {
            "label": "name",
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
        "start": 539,
        "end": 546,
        "loc": {"start": {"line": 26, "column": 16}, "end": {"line": 26, "column": 23}}
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
        }, "start": 546, "end": 547, "loc": {"start": {"line": 26, "column": 23}, "end": {"line": 26, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 547,
        "end": 550,
        "loc": {"start": {"line": 26, "column": 24}, "end": {"line": 26, "column": 27}}
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
        }, "start": 550, "end": 551, "loc": {"start": {"line": 26, "column": 27}, "end": {"line": 26, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 551,
        "end": 557,
        "loc": {"start": {"line": 26, "column": 28}, "end": {"line": 26, "column": 34}}
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
        }, "start": 557, "end": 558, "loc": {"start": {"line": 26, "column": 34}, "end": {"line": 26, "column": 35}}
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
        }, "start": 571, "end": 572, "loc": {"start": {"line": 27, "column": 12}, "end": {"line": 27, "column": 13}}
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
        }, "start": 572, "end": 573, "loc": {"start": {"line": 27, "column": 13}, "end": {"line": 27, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 586,
        "end": 594,
        "loc": {"start": {"line": 28, "column": 12}, "end": {"line": 28, "column": 20}}
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
        "start": 595,
        "end": 596,
        "loc": {"start": {"line": 28, "column": 21}, "end": {"line": 28, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 597,
        "end": 606,
        "loc": {"start": {"line": 28, "column": 23}, "end": {"line": 28, "column": 32}}
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
        }, "start": 606, "end": 607, "loc": {"start": {"line": 28, "column": 32}, "end": {"line": 28, "column": 33}}
    }, {
        "type": {
            "label": "name",
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
        "start": 620,
        "end": 628,
        "loc": {"start": {"line": 29, "column": 12}, "end": {"line": 29, "column": 20}}
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
        "start": 629,
        "end": 630,
        "loc": {"start": {"line": 29, "column": 21}, "end": {"line": 29, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 631,
        "end": 636,
        "loc": {"start": {"line": 29, "column": 23}, "end": {"line": 29, "column": 28}}
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
        }, "start": 636, "end": 637, "loc": {"start": {"line": 29, "column": 28}, "end": {"line": 29, "column": 29}}
    }, {
        "type": {
            "label": "name",
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
        "start": 637,
        "end": 644,
        "loc": {"start": {"line": 29, "column": 29}, "end": {"line": 29, "column": 36}}
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
        }, "start": 644, "end": 645, "loc": {"start": {"line": 29, "column": 36}, "end": {"line": 29, "column": 37}}
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
        }, "start": 645, "end": 646, "loc": {"start": {"line": 29, "column": 37}, "end": {"line": 29, "column": 38}}
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
        }, "start": 646, "end": 647, "loc": {"start": {"line": 29, "column": 38}, "end": {"line": 29, "column": 39}}
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
        "start": 657,
        "end": 660,
        "loc": {"start": {"line": 31, "column": 8}, "end": {"line": 31, "column": 11}}
    }, {
        "type": {
            "label": "name",
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
        "start": 661,
        "end": 667,
        "loc": {"start": {"line": 31, "column": 12}, "end": {"line": 31, "column": 18}}
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
        "start": 668,
        "end": 669,
        "loc": {"start": {"line": 31, "column": 19}, "end": {"line": 31, "column": 20}}
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
        }, "start": 670, "end": 671, "loc": {"start": {"line": 31, "column": 21}, "end": {"line": 31, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 684,
        "end": 691,
        "loc": {"start": {"line": 32, "column": 12}, "end": {"line": 32, "column": 19}}
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
        }, "start": 691, "end": 692, "loc": {"start": {"line": 32, "column": 19}, "end": {"line": 32, "column": 20}}
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
        "start": 693,
        "end": 702,
        "loc": {"start": {"line": 32, "column": 21}, "end": {"line": 32, "column": 30}}
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
        }, "start": 702, "end": 703, "loc": {"start": {"line": 32, "column": 30}, "end": {"line": 32, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 716,
        "end": 723,
        "loc": {"start": {"line": 33, "column": 12}, "end": {"line": 33, "column": 19}}
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
        }, "start": 723, "end": 724, "loc": {"start": {"line": 33, "column": 19}, "end": {"line": 33, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 725,
        "end": 734,
        "loc": {"start": {"line": 33, "column": 21}, "end": {"line": 33, "column": 30}}
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
        }, "start": 734, "end": 735, "loc": {"start": {"line": 33, "column": 30}, "end": {"line": 33, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 748,
        "end": 755,
        "loc": {"start": {"line": 34, "column": 12}, "end": {"line": 34, "column": 19}}
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
        }, "start": 755, "end": 756, "loc": {"start": {"line": 34, "column": 19}, "end": {"line": 34, "column": 20}}
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
        "start": 757,
        "end": 765,
        "loc": {"start": {"line": 34, "column": 21}, "end": {"line": 34, "column": 29}}
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
        }, "start": 766, "end": 767, "loc": {"start": {"line": 34, "column": 30}, "end": {"line": 34, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 767,
        "end": 773,
        "loc": {"start": {"line": 34, "column": 31}, "end": {"line": 34, "column": 37}}
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
        }, "start": 773, "end": 774, "loc": {"start": {"line": 34, "column": 37}, "end": {"line": 34, "column": 38}}
    }, {
        "type": {
            "label": "name",
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
        "start": 775,
        "end": 781,
        "loc": {"start": {"line": 34, "column": 39}, "end": {"line": 34, "column": 45}}
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
        }, "start": 781, "end": 782, "loc": {"start": {"line": 34, "column": 45}, "end": {"line": 34, "column": 46}}
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
        }, "start": 783, "end": 784, "loc": {"start": {"line": 34, "column": 47}, "end": {"line": 34, "column": 48}}
    }, {
        "type": {
            "label": "name",
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
        "start": 801,
        "end": 807,
        "loc": {"start": {"line": 35, "column": 16}, "end": {"line": 35, "column": 22}}
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
        "start": 808,
        "end": 809,
        "loc": {"start": {"line": 35, "column": 23}, "end": {"line": 35, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 810,
        "end": 818,
        "loc": {"start": {"line": 35, "column": 25}, "end": {"line": 35, "column": 33}}
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
        }, "start": 818, "end": 819, "loc": {"start": {"line": 35, "column": 33}, "end": {"line": 35, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 836,
        "end": 842,
        "loc": {"start": {"line": 36, "column": 16}, "end": {"line": 36, "column": 22}}
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
        "start": 843,
        "end": 844,
        "loc": {"start": {"line": 36, "column": 23}, "end": {"line": 36, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 845,
        "end": 851,
        "loc": {"start": {"line": 36, "column": 25}, "end": {"line": 36, "column": 31}}
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
        }, "start": 851, "end": 852, "loc": {"start": {"line": 36, "column": 31}, "end": {"line": 36, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 852,
        "end": 856,
        "loc": {"start": {"line": 36, "column": 32}, "end": {"line": 36, "column": 36}}
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
        }, "start": 856, "end": 857, "loc": {"start": {"line": 36, "column": 36}, "end": {"line": 36, "column": 37}}
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
        }, "start": 870, "end": 871, "loc": {"start": {"line": 37, "column": 12}, "end": {"line": 37, "column": 13}}
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
        }, "start": 871, "end": 872, "loc": {"start": {"line": 37, "column": 13}, "end": {"line": 37, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 885,
        "end": 892,
        "loc": {"start": {"line": 38, "column": 12}, "end": {"line": 38, "column": 19}}
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
        }, "start": 892, "end": 893, "loc": {"start": {"line": 38, "column": 19}, "end": {"line": 38, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 893,
        "end": 899,
        "loc": {"start": {"line": 38, "column": 20}, "end": {"line": 38, "column": 26}}
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
        }, "start": 899, "end": 900, "loc": {"start": {"line": 38, "column": 26}, "end": {"line": 38, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 901,
        "end": 907,
        "loc": {"start": {"line": 38, "column": 28}, "end": {"line": 38, "column": 34}}
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
        }, "start": 907, "end": 908, "loc": {"start": {"line": 38, "column": 34}, "end": {"line": 38, "column": 35}}
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
        }, "start": 908, "end": 909, "loc": {"start": {"line": 38, "column": 35}, "end": {"line": 38, "column": 36}}
    }, {
        "type": {
            "label": "name",
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
        "start": 926,
        "end": 932,
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
        "start": 933,
        "end": 934,
        "loc": {"start": {"line": 39, "column": 23}, "end": {"line": 39, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 935,
        "end": 943,
        "loc": {"start": {"line": 39, "column": 25}, "end": {"line": 39, "column": 33}}
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
        }, "start": 943, "end": 944, "loc": {"start": {"line": 39, "column": 33}, "end": {"line": 39, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 961,
        "end": 967,
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
        "start": 968,
        "end": 969,
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
        "value": "$scope",
        "start": 970,
        "end": 976,
        "loc": {"start": {"line": 40, "column": 25}, "end": {"line": 40, "column": 31}}
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
        }, "start": 976, "end": 977, "loc": {"start": {"line": 40, "column": 31}, "end": {"line": 40, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 977,
        "end": 981,
        "loc": {"start": {"line": 40, "column": 32}, "end": {"line": 40, "column": 36}}
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
        }, "start": 981, "end": 982, "loc": {"start": {"line": 40, "column": 36}, "end": {"line": 40, "column": 37}}
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
        "start": 999,
        "end": 1005,
        "loc": {"start": {"line": 41, "column": 16}, "end": {"line": 41, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1006,
        "end": 1013,
        "loc": {"start": {"line": 41, "column": 23}, "end": {"line": 41, "column": 30}}
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
        }, "start": 1013, "end": 1014, "loc": {"start": {"line": 41, "column": 30}, "end": {"line": 41, "column": 31}}
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
        }, "start": 1027, "end": 1028, "loc": {"start": {"line": 42, "column": 12}, "end": {"line": 42, "column": 13}}
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
        }, "start": 1028, "end": 1029, "loc": {"start": {"line": 42, "column": 13}, "end": {"line": 42, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1042,
        "end": 1045,
        "loc": {"start": {"line": 43, "column": 12}, "end": {"line": 43, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1046,
        "end": 1051,
        "loc": {"start": {"line": 43, "column": 16}, "end": {"line": 43, "column": 21}}
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
        }, "start": 1051, "end": 1052, "loc": {"start": {"line": 43, "column": 21}, "end": {"line": 43, "column": 22}}
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
        }, "start": 1052, "end": 1053, "loc": {"start": {"line": 43, "column": 22}, "end": {"line": 43, "column": 23}}
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
        }, "start": 1054, "end": 1055, "loc": {"start": {"line": 43, "column": 24}, "end": {"line": 43, "column": 25}}
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
        "start": 1072,
        "end": 1078,
        "loc": {"start": {"line": 44, "column": 16}, "end": {"line": 44, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1079,
        "end": 1086,
        "loc": {"start": {"line": 44, "column": 23}, "end": {"line": 44, "column": 30}}
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
        }, "start": 1086, "end": 1087, "loc": {"start": {"line": 44, "column": 30}, "end": {"line": 44, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1087,
        "end": 1094,
        "loc": {"start": {"line": 44, "column": 31}, "end": {"line": 44, "column": 38}}
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
        }, "start": 1094, "end": 1095, "loc": {"start": {"line": 44, "column": 38}, "end": {"line": 44, "column": 39}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1096,
        "end": 1105,
        "loc": {"start": {"line": 44, "column": 40}, "end": {"line": 44, "column": 49}}
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
        }, "start": 1105, "end": 1106, "loc": {"start": {"line": 44, "column": 49}, "end": {"line": 44, "column": 50}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1106,
        "end": 1110,
        "loc": {"start": {"line": 44, "column": 50}, "end": {"line": 44, "column": 54}}
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
        }, "start": 1110, "end": 1111, "loc": {"start": {"line": 44, "column": 54}, "end": {"line": 44, "column": 55}}
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
        }, "start": 1124, "end": 1125, "loc": {"start": {"line": 45, "column": 12}, "end": {"line": 45, "column": 13}}
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
        }, "start": 1125, "end": 1126, "loc": {"start": {"line": 45, "column": 13}, "end": {"line": 45, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1139,
        "end": 1142,
        "loc": {"start": {"line": 46, "column": 12}, "end": {"line": 46, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1143,
        "end": 1148,
        "loc": {"start": {"line": 46, "column": 16}, "end": {"line": 46, "column": 21}}
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
        }, "start": 1148, "end": 1149, "loc": {"start": {"line": 46, "column": 21}, "end": {"line": 46, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1149,
        "end": 1154,
        "loc": {"start": {"line": 46, "column": 22}, "end": {"line": 46, "column": 27}}
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
        }, "start": 1154, "end": 1155, "loc": {"start": {"line": 46, "column": 27}, "end": {"line": 46, "column": 28}}
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
        }, "start": 1156, "end": 1157, "loc": {"start": {"line": 46, "column": 29}, "end": {"line": 46, "column": 30}}
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
        "start": 1174,
        "end": 1178,
        "loc": {"start": {"line": 47, "column": 16}, "end": {"line": 47, "column": 20}}
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
        }, "start": 1178, "end": 1179, "loc": {"start": {"line": 47, "column": 20}, "end": {"line": 47, "column": 21}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1179,
        "end": 1186,
        "loc": {"start": {"line": 47, "column": 21}, "end": {"line": 47, "column": 28}}
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
        "start": 1187,
        "end": 1188,
        "loc": {"start": {"line": 47, "column": 29}, "end": {"line": 47, "column": 30}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1189,
        "end": 1194,
        "loc": {"start": {"line": 47, "column": 31}, "end": {"line": 47, "column": 36}}
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
        }, "start": 1207, "end": 1208, "loc": {"start": {"line": 48, "column": 12}, "end": {"line": 48, "column": 13}}
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
        }, "start": 1217, "end": 1218, "loc": {"start": {"line": 49, "column": 8}, "end": {"line": 49, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "函数直接申明",
        "start": 1228,
        "end": 1236,
        "loc": {"start": {"line": 51, "column": 8}, "end": {"line": 51, "column": 16}}
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
        "start": 1245,
        "end": 1248,
        "loc": {"start": {"line": 52, "column": 8}, "end": {"line": 52, "column": 11}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1249,
        "end": 1258,
        "loc": {"start": {"line": 52, "column": 12}, "end": {"line": 52, "column": 21}}
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
        "start": 1259,
        "end": 1260,
        "loc": {"start": {"line": 52, "column": 22}, "end": {"line": 52, "column": 23}}
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
        "start": 1261,
        "end": 1269,
        "loc": {"start": {"line": 52, "column": 24}, "end": {"line": 52, "column": 32}}
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
        }, "start": 1270, "end": 1271, "loc": {"start": {"line": 52, "column": 33}, "end": {"line": 52, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1271,
        "end": 1277,
        "loc": {"start": {"line": 52, "column": 34}, "end": {"line": 52, "column": 40}}
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
        }, "start": 1277, "end": 1278, "loc": {"start": {"line": 52, "column": 40}, "end": {"line": 52, "column": 41}}
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
        }, "start": 1279, "end": 1280, "loc": {"start": {"line": 52, "column": 42}, "end": {"line": 52, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1293,
        "end": 1300,
        "loc": {"start": {"line": 53, "column": 12}, "end": {"line": 53, "column": 19}}
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
        }, "start": 1300, "end": 1301, "loc": {"start": {"line": 53, "column": 19}, "end": {"line": 53, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1301,
        "end": 1304,
        "loc": {"start": {"line": 53, "column": 20}, "end": {"line": 53, "column": 23}}
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
        }, "start": 1304, "end": 1305, "loc": {"start": {"line": 53, "column": 23}, "end": {"line": 53, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1305,
        "end": 1311,
        "loc": {"start": {"line": 53, "column": 24}, "end": {"line": 53, "column": 30}}
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
        }, "start": 1311, "end": 1312, "loc": {"start": {"line": 53, "column": 30}, "end": {"line": 53, "column": 31}}
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
        }, "start": 1312, "end": 1313, "loc": {"start": {"line": 53, "column": 31}, "end": {"line": 53, "column": 32}}
    }, {
        "type": "CommentLine",
        "value": "对象",
        "start": 1326,
        "end": 1330,
        "loc": {"start": {"line": 54, "column": 12}, "end": {"line": 54, "column": 16}}
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
        "start": 1343,
        "end": 1346,
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
        "value": "obj",
        "start": 1347,
        "end": 1350,
        "loc": {"start": {"line": 55, "column": 16}, "end": {"line": 55, "column": 19}}
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
        "start": 1351,
        "end": 1352,
        "loc": {"start": {"line": 55, "column": 20}, "end": {"line": 55, "column": 21}}
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
        }, "start": 1353, "end": 1354, "loc": {"start": {"line": 55, "column": 22}, "end": {"line": 55, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1371,
        "end": 1378,
        "loc": {"start": {"line": 56, "column": 16}, "end": {"line": 56, "column": 23}}
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
        }, "start": 1378, "end": 1379, "loc": {"start": {"line": 56, "column": 23}, "end": {"line": 56, "column": 24}}
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
        "start": 1380,
        "end": 1389,
        "loc": {"start": {"line": 56, "column": 25}, "end": {"line": 56, "column": 34}}
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
        }, "start": 1389, "end": 1390, "loc": {"start": {"line": 56, "column": 34}, "end": {"line": 56, "column": 35}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1407,
        "end": 1414,
        "loc": {"start": {"line": 57, "column": 16}, "end": {"line": 57, "column": 23}}
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
        }, "start": 1414, "end": 1415, "loc": {"start": {"line": 57, "column": 23}, "end": {"line": 57, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1415,
        "end": 1421,
        "loc": {"start": {"line": 57, "column": 24}, "end": {"line": 57, "column": 30}}
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
        }, "start": 1421, "end": 1422, "loc": {"start": {"line": 57, "column": 30}, "end": {"line": 57, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1423,
        "end": 1429,
        "loc": {"start": {"line": 57, "column": 32}, "end": {"line": 57, "column": 38}}
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
        }, "start": 1429, "end": 1430, "loc": {"start": {"line": 57, "column": 38}, "end": {"line": 57, "column": 39}}
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
        }, "start": 1430, "end": 1431, "loc": {"start": {"line": 57, "column": 39}, "end": {"line": 57, "column": 40}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1452,
        "end": 1459,
        "loc": {"start": {"line": 58, "column": 20}, "end": {"line": 58, "column": 27}}
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
        }, "start": 1459, "end": 1460, "loc": {"start": {"line": 58, "column": 27}, "end": {"line": 58, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1460,
        "end": 1463,
        "loc": {"start": {"line": 58, "column": 28}, "end": {"line": 58, "column": 31}}
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
        }, "start": 1463, "end": 1464, "loc": {"start": {"line": 58, "column": 31}, "end": {"line": 58, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1464,
        "end": 1470,
        "loc": {"start": {"line": 58, "column": 32}, "end": {"line": 58, "column": 38}}
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
        }, "start": 1470, "end": 1471, "loc": {"start": {"line": 58, "column": 38}, "end": {"line": 58, "column": 39}}
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
        }, "start": 1488, "end": 1489, "loc": {"start": {"line": 59, "column": 16}, "end": {"line": 59, "column": 17}}
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
        }, "start": 1489, "end": 1490, "loc": {"start": {"line": 59, "column": 17}, "end": {"line": 59, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1507,
        "end": 1514,
        "loc": {"start": {"line": 60, "column": 16}, "end": {"line": 60, "column": 23}}
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
        }, "start": 1514, "end": 1515, "loc": {"start": {"line": 60, "column": 23}, "end": {"line": 60, "column": 24}}
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
        "start": 1516,
        "end": 1524,
        "loc": {"start": {"line": 60, "column": 25}, "end": {"line": 60, "column": 33}}
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
        }, "start": 1525, "end": 1526, "loc": {"start": {"line": 60, "column": 34}, "end": {"line": 60, "column": 35}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1526,
        "end": 1532,
        "loc": {"start": {"line": 60, "column": 35}, "end": {"line": 60, "column": 41}}
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
        }, "start": 1532, "end": 1533, "loc": {"start": {"line": 60, "column": 41}, "end": {"line": 60, "column": 42}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1534,
        "end": 1540,
        "loc": {"start": {"line": 60, "column": 43}, "end": {"line": 60, "column": 49}}
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
        }, "start": 1540, "end": 1541, "loc": {"start": {"line": 60, "column": 49}, "end": {"line": 60, "column": 50}}
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
        }, "start": 1542, "end": 1543, "loc": {"start": {"line": 60, "column": 51}, "end": {"line": 60, "column": 52}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1564,
        "end": 1571,
        "loc": {"start": {"line": 61, "column": 20}, "end": {"line": 61, "column": 27}}
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
        }, "start": 1571, "end": 1572, "loc": {"start": {"line": 61, "column": 27}, "end": {"line": 61, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1572,
        "end": 1575,
        "loc": {"start": {"line": 61, "column": 28}, "end": {"line": 61, "column": 31}}
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
        }, "start": 1575, "end": 1576, "loc": {"start": {"line": 61, "column": 31}, "end": {"line": 61, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1576,
        "end": 1582,
        "loc": {"start": {"line": 61, "column": 32}, "end": {"line": 61, "column": 38}}
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
        }, "start": 1582, "end": 1583, "loc": {"start": {"line": 61, "column": 38}, "end": {"line": 61, "column": 39}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1584,
        "end": 1590,
        "loc": {"start": {"line": 61, "column": 40}, "end": {"line": 61, "column": 46}}
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
        }, "start": 1590, "end": 1591, "loc": {"start": {"line": 61, "column": 46}, "end": {"line": 61, "column": 47}}
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
        }, "start": 1591, "end": 1592, "loc": {"start": {"line": 61, "column": 47}, "end": {"line": 61, "column": 48}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1613,
        "end": 1621,
        "loc": {"start": {"line": 62, "column": 20}, "end": {"line": 62, "column": 28}}
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
        "start": 1622,
        "end": 1623,
        "loc": {"start": {"line": 62, "column": 29}, "end": {"line": 62, "column": 30}}
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
        "start": 1624,
        "end": 1626,
        "loc": {"start": {"line": 62, "column": 31}, "end": {"line": 62, "column": 33}}
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
        }, "start": 1626, "end": 1627, "loc": {"start": {"line": 62, "column": 33}, "end": {"line": 62, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1648,
        "end": 1654,
        "loc": {"start": {"line": 63, "column": 20}, "end": {"line": 63, "column": 26}}
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
        }, "start": 1654, "end": 1655, "loc": {"start": {"line": 63, "column": 26}, "end": {"line": 63, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1655,
        "end": 1659,
        "loc": {"start": {"line": 63, "column": 27}, "end": {"line": 63, "column": 31}}
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
        }, "start": 1659, "end": 1660, "loc": {"start": {"line": 63, "column": 31}, "end": {"line": 63, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1660,
        "end": 1668,
        "loc": {"start": {"line": 63, "column": 32}, "end": {"line": 63, "column": 40}}
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
        "start": 1669,
        "end": 1670,
        "loc": {"start": {"line": 63, "column": 41}, "end": {"line": 63, "column": 42}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1671,
        "end": 1679,
        "loc": {"start": {"line": 63, "column": 43}, "end": {"line": 63, "column": 51}}
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
        }, "start": 1679, "end": 1680, "loc": {"start": {"line": 63, "column": 51}, "end": {"line": 63, "column": 52}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1701,
        "end": 1707,
        "loc": {"start": {"line": 64, "column": 20}, "end": {"line": 64, "column": 26}}
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
        }, "start": 1707, "end": 1708, "loc": {"start": {"line": 64, "column": 26}, "end": {"line": 64, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1708,
        "end": 1712,
        "loc": {"start": {"line": 64, "column": 27}, "end": {"line": 64, "column": 31}}
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
        }, "start": 1712, "end": 1713, "loc": {"start": {"line": 64, "column": 31}, "end": {"line": 64, "column": 32}}
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
        "start": 1713,
        "end": 1723,
        "loc": {"start": {"line": 64, "column": 32}, "end": {"line": 64, "column": 42}}
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
        }, "start": 1723, "end": 1724, "loc": {"start": {"line": 64, "column": 42}, "end": {"line": 64, "column": 43}}
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
        "start": 1725,
        "end": 1726,
        "loc": {"start": {"line": 64, "column": 44}, "end": {"line": 64, "column": 45}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1727,
        "end": 1735,
        "loc": {"start": {"line": 64, "column": 46}, "end": {"line": 64, "column": 54}}
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
        }, "start": 1735, "end": 1736, "loc": {"start": {"line": 64, "column": 54}, "end": {"line": 64, "column": 55}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1757,
        "end": 1763,
        "loc": {"start": {"line": 65, "column": 20}, "end": {"line": 65, "column": 26}}
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
        }, "start": 1763, "end": 1764, "loc": {"start": {"line": 65, "column": 26}, "end": {"line": 65, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1764,
        "end": 1768,
        "loc": {"start": {"line": 65, "column": 27}, "end": {"line": 65, "column": 31}}
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
        }, "start": 1768, "end": 1769, "loc": {"start": {"line": 65, "column": 31}, "end": {"line": 65, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1769,
        "end": 1777,
        "loc": {"start": {"line": 65, "column": 32}, "end": {"line": 65, "column": 40}}
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
        }, "start": 1777, "end": 1778, "loc": {"start": {"line": 65, "column": 40}, "end": {"line": 65, "column": 41}}
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
        "start": 1779,
        "end": 1780,
        "loc": {"start": {"line": 65, "column": 42}, "end": {"line": 65, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1781,
        "end": 1789,
        "loc": {"start": {"line": 65, "column": 44}, "end": {"line": 65, "column": 52}}
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
        }, "start": 1789, "end": 1790, "loc": {"start": {"line": 65, "column": 52}, "end": {"line": 65, "column": 53}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1811,
        "end": 1817,
        "loc": {"start": {"line": 66, "column": 20}, "end": {"line": 66, "column": 26}}
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
        }, "start": 1817, "end": 1818, "loc": {"start": {"line": 66, "column": 26}, "end": {"line": 66, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1818,
        "end": 1822,
        "loc": {"start": {"line": 66, "column": 27}, "end": {"line": 66, "column": 31}}
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
        }, "start": 1822, "end": 1823, "loc": {"start": {"line": 66, "column": 31}, "end": {"line": 66, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1823,
        "end": 1831,
        "loc": {"start": {"line": 66, "column": 32}, "end": {"line": 66, "column": 40}}
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
        }, "start": 1831, "end": 1832, "loc": {"start": {"line": 66, "column": 40}, "end": {"line": 66, "column": 41}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1832,
        "end": 1845,
        "loc": {"start": {"line": 66, "column": 41}, "end": {"line": 66, "column": 54}}
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
        }, "start": 1845, "end": 1846, "loc": {"start": {"line": 66, "column": 54}, "end": {"line": 66, "column": 55}}
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
        "start": 1847,
        "end": 1848,
        "loc": {"start": {"line": 66, "column": 56}, "end": {"line": 66, "column": 57}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1849,
        "end": 1857,
        "loc": {"start": {"line": 66, "column": 58}, "end": {"line": 66, "column": 66}}
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
        }, "start": 1857, "end": 1858, "loc": {"start": {"line": 66, "column": 66}, "end": {"line": 66, "column": 67}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1879,
        "end": 1885,
        "loc": {"start": {"line": 67, "column": 20}, "end": {"line": 67, "column": 26}}
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
        }, "start": 1885, "end": 1886, "loc": {"start": {"line": 67, "column": 26}, "end": {"line": 67, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1886,
        "end": 1890,
        "loc": {"start": {"line": 67, "column": 27}, "end": {"line": 67, "column": 31}}
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
        }, "start": 1890, "end": 1891, "loc": {"start": {"line": 67, "column": 31}, "end": {"line": 67, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1891,
        "end": 1899,
        "loc": {"start": {"line": 67, "column": 32}, "end": {"line": 67, "column": 40}}
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
        "start": 1900,
        "end": 1901,
        "loc": {"start": {"line": 67, "column": 41}, "end": {"line": 67, "column": 42}}
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
        "start": 1902,
        "end": 1912,
        "loc": {"start": {"line": 67, "column": 43}, "end": {"line": 67, "column": 53}}
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
        }, "start": 1912, "end": 1913, "loc": {"start": {"line": 67, "column": 53}, "end": {"line": 67, "column": 54}}
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
        "start": 1934,
        "end": 1937,
        "loc": {"start": {"line": 68, "column": 20}, "end": {"line": 68, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1938,
        "end": 1950,
        "loc": {"start": {"line": 68, "column": 24}, "end": {"line": 68, "column": 36}}
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
        "start": 1951,
        "end": 1952,
        "loc": {"start": {"line": 68, "column": 37}, "end": {"line": 68, "column": 38}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1953,
        "end": 1960,
        "loc": {"start": {"line": 68, "column": 39}, "end": {"line": 68, "column": 46}}
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
        }, "start": 1960, "end": 1961, "loc": {"start": {"line": 68, "column": 46}, "end": {"line": 68, "column": 47}}
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
        "start": 1982,
        "end": 1985,
        "loc": {"start": {"line": 69, "column": 20}, "end": {"line": 69, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1986,
        "end": 1999,
        "loc": {"start": {"line": 69, "column": 24}, "end": {"line": 69, "column": 37}}
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
        "start": 2000,
        "end": 2001,
        "loc": {"start": {"line": 69, "column": 38}, "end": {"line": 69, "column": 39}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2002,
        "end": 2008,
        "loc": {"start": {"line": 69, "column": 40}, "end": {"line": 69, "column": 46}}
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
        }, "start": 2008, "end": 2009, "loc": {"start": {"line": 69, "column": 46}, "end": {"line": 69, "column": 47}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2009,
        "end": 2016,
        "loc": {"start": {"line": 69, "column": 47}, "end": {"line": 69, "column": 54}}
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
        }, "start": 2016, "end": 2017, "loc": {"start": {"line": 69, "column": 54}, "end": {"line": 69, "column": 55}}
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
        }, "start": 2034, "end": 2035, "loc": {"start": {"line": 70, "column": 16}, "end": {"line": 70, "column": 17}}
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
        }, "start": 2035, "end": 2036, "loc": {"start": {"line": 70, "column": 17}, "end": {"line": 70, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2053,
        "end": 2060,
        "loc": {"start": {"line": 71, "column": 16}, "end": {"line": 71, "column": 23}}
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
        }, "start": 2060, "end": 2061, "loc": {"start": {"line": 71, "column": 23}, "end": {"line": 71, "column": 24}}
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
        }, "start": 2062, "end": 2063, "loc": {"start": {"line": 71, "column": 25}, "end": {"line": 71, "column": 26}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2063,
        "end": 2065,
        "loc": {"start": {"line": 71, "column": 26}, "end": {"line": 71, "column": 28}}
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
        }, "start": 2065, "end": 2066, "loc": {"start": {"line": 71, "column": 28}, "end": {"line": 71, "column": 29}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2067,
        "end": 2069,
        "loc": {"start": {"line": 71, "column": 30}, "end": {"line": 71, "column": 32}}
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
        }, "start": 2069, "end": 2070, "loc": {"start": {"line": 71, "column": 32}, "end": {"line": 71, "column": 33}}
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
        }, "start": 2071, "end": 2073, "loc": {"start": {"line": 71, "column": 34}, "end": {"line": 71, "column": 36}}
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
        }, "start": 2074, "end": 2075, "loc": {"start": {"line": 71, "column": 37}, "end": {"line": 71, "column": 38}}
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
        }, "start": 2093, "end": 2094, "loc": {"start": {"line": 73, "column": 16}, "end": {"line": 73, "column": 17}}
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
        }, "start": 2094, "end": 2095, "loc": {"start": {"line": 73, "column": 17}, "end": {"line": 73, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2112,
        "end": 2115,
        "loc": {"start": {"line": 74, "column": 16}, "end": {"line": 74, "column": 19}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2116,
        "end": 2121,
        "loc": {"start": {"line": 74, "column": 20}, "end": {"line": 74, "column": 25}}
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
        }, "start": 2121, "end": 2122, "loc": {"start": {"line": 74, "column": 25}, "end": {"line": 74, "column": 26}}
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
        }, "start": 2122, "end": 2123, "loc": {"start": {"line": 74, "column": 26}, "end": {"line": 74, "column": 27}}
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
        }, "start": 2124, "end": 2125, "loc": {"start": {"line": 74, "column": 28}, "end": {"line": 74, "column": 29}}
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
        }, "start": 2143, "end": 2144, "loc": {"start": {"line": 76, "column": 16}, "end": {"line": 76, "column": 17}}
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
        }, "start": 2144, "end": 2145, "loc": {"start": {"line": 76, "column": 17}, "end": {"line": 76, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2162,
        "end": 2165,
        "loc": {"start": {"line": 77, "column": 16}, "end": {"line": 77, "column": 19}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2166,
        "end": 2171,
        "loc": {"start": {"line": 77, "column": 20}, "end": {"line": 77, "column": 25}}
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
        }, "start": 2171, "end": 2172, "loc": {"start": {"line": 77, "column": 25}, "end": {"line": 77, "column": 26}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2172,
        "end": 2177,
        "loc": {"start": {"line": 77, "column": 26}, "end": {"line": 77, "column": 31}}
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
        }, "start": 2177, "end": 2178, "loc": {"start": {"line": 77, "column": 31}, "end": {"line": 77, "column": 32}}
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
        }, "start": 2179, "end": 2180, "loc": {"start": {"line": 77, "column": 33}, "end": {"line": 77, "column": 34}}
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
        }, "start": 2198, "end": 2199, "loc": {"start": {"line": 79, "column": 16}, "end": {"line": 79, "column": 17}}
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
        }, "start": 2212, "end": 2213, "loc": {"start": {"line": 80, "column": 12}, "end": {"line": 80, "column": 13}}
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
        }, "start": 2223, "end": 2224, "loc": {"start": {"line": 82, "column": 8}, "end": {"line": 82, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "scope函数初始化",
        "start": 2234,
        "end": 2246,
        "loc": {"start": {"line": 84, "column": 8}, "end": {"line": 84, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "loc": {"start": {"line": 85, "column": 8}, "end": {"line": 85, "column": 14}}
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
        }, "start": 2261, "end": 2262, "loc": {"start": {"line": 85, "column": 14}, "end": {"line": 85, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2262,
        "end": 2270,
        "loc": {"start": {"line": 85, "column": 15}, "end": {"line": 85, "column": 23}}
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
        "start": 2271,
        "end": 2272,
        "loc": {"start": {"line": 85, "column": 24}, "end": {"line": 85, "column": 25}}
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
        "start": 2273,
        "end": 2281,
        "loc": {"start": {"line": 85, "column": 26}, "end": {"line": 85, "column": 34}}
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
        }, "start": 2282, "end": 2283, "loc": {"start": {"line": 85, "column": 35}, "end": {"line": 85, "column": 36}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2283,
        "end": 2289,
        "loc": {"start": {"line": 85, "column": 36}, "end": {"line": 85, "column": 42}}
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
        }, "start": 2289, "end": 2290, "loc": {"start": {"line": 85, "column": 42}, "end": {"line": 85, "column": 43}}
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
        }, "start": 2291, "end": 2292, "loc": {"start": {"line": 85, "column": 44}, "end": {"line": 85, "column": 45}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2305,
        "end": 2312,
        "loc": {"start": {"line": 86, "column": 12}, "end": {"line": 86, "column": 19}}
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
        }, "start": 2312, "end": 2313, "loc": {"start": {"line": 86, "column": 19}, "end": {"line": 86, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2313,
        "end": 2316,
        "loc": {"start": {"line": 86, "column": 20}, "end": {"line": 86, "column": 23}}
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
        }, "start": 2316, "end": 2317, "loc": {"start": {"line": 86, "column": 23}, "end": {"line": 86, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2317,
        "end": 2323,
        "loc": {"start": {"line": 86, "column": 24}, "end": {"line": 86, "column": 30}}
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
        }, "start": 2323, "end": 2324, "loc": {"start": {"line": 86, "column": 30}, "end": {"line": 86, "column": 31}}
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
        }, "start": 2333, "end": 2334, "loc": {"start": {"line": 87, "column": 8}, "end": {"line": 87, "column": 9}}
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
        }, "start": 2334, "end": 2335, "loc": {"start": {"line": 87, "column": 9}, "end": {"line": 87, "column": 10}}
    }, {
        "type": "CommentLine",
        "value": "scope多级初始化函数",
        "start": 2345,
        "end": 2359,
        "loc": {"start": {"line": 89, "column": 8}, "end": {"line": 89, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2368,
        "end": 2374,
        "loc": {"start": {"line": 90, "column": 8}, "end": {"line": 90, "column": 14}}
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
        }, "start": 2374, "end": 2375, "loc": {"start": {"line": 90, "column": 14}, "end": {"line": 90, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2375,
        "end": 2379,
        "loc": {"start": {"line": 90, "column": 15}, "end": {"line": 90, "column": 19}}
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
        }, "start": 2379, "end": 2380, "loc": {"start": {"line": 90, "column": 19}, "end": {"line": 90, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2380,
        "end": 2382,
        "loc": {"start": {"line": 90, "column": 20}, "end": {"line": 90, "column": 22}}
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
        }, "start": 2382, "end": 2383, "loc": {"start": {"line": 90, "column": 22}, "end": {"line": 90, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2383,
        "end": 2392,
        "loc": {"start": {"line": 90, "column": 23}, "end": {"line": 90, "column": 32}}
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
        "start": 2393,
        "end": 2394,
        "loc": {"start": {"line": 90, "column": 33}, "end": {"line": 90, "column": 34}}
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
        "start": 2395,
        "end": 2403,
        "loc": {"start": {"line": 90, "column": 35}, "end": {"line": 90, "column": 43}}
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
        }, "start": 2404, "end": 2405, "loc": {"start": {"line": 90, "column": 44}, "end": {"line": 90, "column": 45}}
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
        }, "start": 2405, "end": 2406, "loc": {"start": {"line": 90, "column": 45}, "end": {"line": 90, "column": 46}}
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
        }, "start": 2407, "end": 2408, "loc": {"start": {"line": 90, "column": 47}, "end": {"line": 90, "column": 48}}
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
        "start": 2422,
        "end": 2425,
        "loc": {"start": {"line": 92, "column": 12}, "end": {"line": 92, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2426,
        "end": 2433,
        "loc": {"start": {"line": 92, "column": 16}, "end": {"line": 92, "column": 23}}
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
        "start": 2434,
        "end": 2435,
        "loc": {"start": {"line": 92, "column": 24}, "end": {"line": 92, "column": 25}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2436,
        "end": 2444,
        "loc": {"start": {"line": 92, "column": 26}, "end": {"line": 92, "column": 34}}
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
        }, "start": 2444, "end": 2445, "loc": {"start": {"line": 92, "column": 34}, "end": {"line": 92, "column": 35}}
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
        "start": 2458,
        "end": 2461,
        "loc": {"start": {"line": 93, "column": 12}, "end": {"line": 93, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2462,
        "end": 2469,
        "loc": {"start": {"line": 93, "column": 16}, "end": {"line": 93, "column": 23}}
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
        "start": 2470,
        "end": 2471,
        "loc": {"start": {"line": 93, "column": 24}, "end": {"line": 93, "column": 25}}
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
        "start": 2472,
        "end": 2480,
        "loc": {"start": {"line": 93, "column": 26}, "end": {"line": 93, "column": 34}}
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
        }, "start": 2481, "end": 2482, "loc": {"start": {"line": 93, "column": 35}, "end": {"line": 93, "column": 36}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2482,
        "end": 2488,
        "loc": {"start": {"line": 93, "column": 36}, "end": {"line": 93, "column": 42}}
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
        }, "start": 2488, "end": 2489, "loc": {"start": {"line": 93, "column": 42}, "end": {"line": 93, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2490,
        "end": 2496,
        "loc": {"start": {"line": 93, "column": 44}, "end": {"line": 93, "column": 50}}
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
        }, "start": 2496, "end": 2497, "loc": {"start": {"line": 93, "column": 50}, "end": {"line": 93, "column": 51}}
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
        }, "start": 2498, "end": 2499, "loc": {"start": {"line": 93, "column": 52}, "end": {"line": 93, "column": 53}}
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
        }, "start": 2513, "end": 2514, "loc": {"start": {"line": 95, "column": 12}, "end": {"line": 95, "column": 13}}
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
        }, "start": 2514, "end": 2515, "loc": {"start": {"line": 95, "column": 13}, "end": {"line": 95, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2528,
        "end": 2535,
        "loc": {"start": {"line": 96, "column": 12}, "end": {"line": 96, "column": 19}}
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
        }, "start": 2535, "end": 2536, "loc": {"start": {"line": 96, "column": 19}, "end": {"line": 96, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2536,
        "end": 2543,
        "loc": {"start": {"line": 96, "column": 20}, "end": {"line": 96, "column": 27}}
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
        }, "start": 2543, "end": 2544, "loc": {"start": {"line": 96, "column": 27}, "end": {"line": 96, "column": 28}}
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
        }, "start": 2544, "end": 2545, "loc": {"start": {"line": 96, "column": 28}, "end": {"line": 96, "column": 29}}
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
        }, "start": 2545, "end": 2546, "loc": {"start": {"line": 96, "column": 29}, "end": {"line": 96, "column": 30}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2546,
        "end": 2551,
        "loc": {"start": {"line": 96, "column": 30}, "end": {"line": 96, "column": 35}}
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
        }, "start": 2551, "end": 2552, "loc": {"start": {"line": 96, "column": 35}, "end": {"line": 96, "column": 36}}
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
        }, "start": 2552, "end": 2553, "loc": {"start": {"line": 96, "column": 36}, "end": {"line": 96, "column": 37}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2566,
        "end": 2573,
        "loc": {"start": {"line": 97, "column": 12}, "end": {"line": 97, "column": 19}}
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
        }, "start": 2573, "end": 2574, "loc": {"start": {"line": 97, "column": 19}, "end": {"line": 97, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2574,
        "end": 2582,
        "loc": {"start": {"line": 97, "column": 20}, "end": {"line": 97, "column": 28}}
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
        }, "start": 2582, "end": 2583, "loc": {"start": {"line": 97, "column": 28}, "end": {"line": 97, "column": 29}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2583,
        "end": 2596,
        "loc": {"start": {"line": 97, "column": 29}, "end": {"line": 97, "column": 42}}
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
        }, "start": 2596, "end": 2597, "loc": {"start": {"line": 97, "column": 42}, "end": {"line": 97, "column": 43}}
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
        }, "start": 2597, "end": 2598, "loc": {"start": {"line": 97, "column": 43}, "end": {"line": 97, "column": 44}}
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
        "start": 2611,
        "end": 2619,
        "loc": {"start": {"line": 98, "column": 12}, "end": {"line": 98, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2620,
        "end": 2628,
        "loc": {"start": {"line": 98, "column": 21}, "end": {"line": 98, "column": 29}}
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
        }, "start": 2628, "end": 2629, "loc": {"start": {"line": 98, "column": 29}, "end": {"line": 98, "column": 30}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2629,
        "end": 2635,
        "loc": {"start": {"line": 98, "column": 30}, "end": {"line": 98, "column": 36}}
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
        }, "start": 2635, "end": 2636, "loc": {"start": {"line": 98, "column": 36}, "end": {"line": 98, "column": 37}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2637,
        "end": 2643,
        "loc": {"start": {"line": 98, "column": 38}, "end": {"line": 98, "column": 44}}
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
        }, "start": 2643, "end": 2644, "loc": {"start": {"line": 98, "column": 44}, "end": {"line": 98, "column": 45}}
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
        }, "start": 2645, "end": 2646, "loc": {"start": {"line": 98, "column": 46}, "end": {"line": 98, "column": 47}}
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
        }, "start": 2660, "end": 2661, "loc": {"start": {"line": 100, "column": 12}, "end": {"line": 100, "column": 13}}
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
        "start": 2675,
        "end": 2678,
        "loc": {"start": {"line": 102, "column": 12}, "end": {"line": 102, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2679,
        "end": 2690,
        "loc": {"start": {"line": 102, "column": 16}, "end": {"line": 102, "column": 27}}
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
        "start": 2691,
        "end": 2692,
        "loc": {"start": {"line": 102, "column": 28}, "end": {"line": 102, "column": 29}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2693,
        "end": 2701,
        "loc": {"start": {"line": 102, "column": 30}, "end": {"line": 102, "column": 38}}
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
        }, "start": 2701, "end": 2702, "loc": {"start": {"line": 102, "column": 38}, "end": {"line": 102, "column": 39}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2702,
        "end": 2715,
        "loc": {"start": {"line": 102, "column": 39}, "end": {"line": 102, "column": 52}}
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
        }, "start": 2715, "end": 2716, "loc": {"start": {"line": 102, "column": 52}, "end": {"line": 102, "column": 53}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2729,
        "end": 2735,
        "loc": {"start": {"line": 103, "column": 12}, "end": {"line": 103, "column": 18}}
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
        }, "start": 2735, "end": 2736, "loc": {"start": {"line": 103, "column": 18}, "end": {"line": 103, "column": 19}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2736,
        "end": 2747,
        "loc": {"start": {"line": 103, "column": 19}, "end": {"line": 103, "column": 30}}
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
        "start": 2748,
        "end": 2749,
        "loc": {"start": {"line": 103, "column": 31}, "end": {"line": 103, "column": 32}}
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
        "start": 2750,
        "end": 2754,
        "loc": {"start": {"line": 103, "column": 33}, "end": {"line": 103, "column": 37}}
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
        }, "start": 2754, "end": 2755, "loc": {"start": {"line": 103, "column": 37}, "end": {"line": 103, "column": 38}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2768,
        "end": 2774,
        "loc": {"start": {"line": 104, "column": 12}, "end": {"line": 104, "column": 18}}
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
        }, "start": 2774, "end": 2775, "loc": {"start": {"line": 104, "column": 18}, "end": {"line": 104, "column": 19}}
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
        }, "start": 2775, "end": 2776, "loc": {"start": {"line": 104, "column": 19}, "end": {"line": 104, "column": 20}}
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
        }, "start": 2776, "end": 2777, "loc": {"start": {"line": 104, "column": 20}, "end": {"line": 104, "column": 21}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2790,
        "end": 2799,
        "loc": {"start": {"line": 105, "column": 12}, "end": {"line": 105, "column": 21}}
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
        }, "start": 2799, "end": 2800, "loc": {"start": {"line": 105, "column": 21}, "end": {"line": 105, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2800,
        "end": 2812,
        "loc": {"start": {"line": 105, "column": 22}, "end": {"line": 105, "column": 34}}
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
        "start": 2813,
        "end": 2814,
        "loc": {"start": {"line": 105, "column": 35}, "end": {"line": 105, "column": 36}}
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
        "start": 2815,
        "end": 2818,
        "loc": {"start": {"line": 105, "column": 37}, "end": {"line": 105, "column": 40}}
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
        }, "start": 2818, "end": 2819, "loc": {"start": {"line": 105, "column": 40}, "end": {"line": 105, "column": 41}}
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
        }, "start": 2829, "end": 2830, "loc": {"start": {"line": 107, "column": 8}, "end": {"line": 107, "column": 9}}
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
        }, "start": 2830, "end": 2831, "loc": {"start": {"line": 107, "column": 9}, "end": {"line": 107, "column": 10}}
    }, {
        "type": "CommentBlock",
        "value": "*\n         * 表达式\n         ",
        "start": 2841,
        "end": 2871,
        "loc": {"start": {"line": 109, "column": 8}, "end": {"line": 111, "column": 11}}
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
        "start": 2880,
        "end": 2888,
        "loc": {"start": {"line": 112, "column": 8}, "end": {"line": 112, "column": 16}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2889,
        "end": 2895,
        "loc": {"start": {"line": 112, "column": 17}, "end": {"line": 112, "column": 23}}
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
        }, "start": 2895, "end": 2896, "loc": {"start": {"line": 112, "column": 23}, "end": {"line": 112, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2896,
        "end": 2902,
        "loc": {"start": {"line": 112, "column": 24}, "end": {"line": 112, "column": 30}}
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
        }, "start": 2902, "end": 2903, "loc": {"start": {"line": 112, "column": 30}, "end": {"line": 112, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2904,
        "end": 2910,
        "loc": {"start": {"line": 112, "column": 32}, "end": {"line": 112, "column": 38}}
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
        }, "start": 2910, "end": 2911, "loc": {"start": {"line": 112, "column": 38}, "end": {"line": 112, "column": 39}}
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
        }, "start": 2912, "end": 2913, "loc": {"start": {"line": 112, "column": 40}, "end": {"line": 112, "column": 41}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2926,
        "end": 2933,
        "loc": {"start": {"line": 113, "column": 12}, "end": {"line": 113, "column": 19}}
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
        }, "start": 2933, "end": 2934, "loc": {"start": {"line": 113, "column": 19}, "end": {"line": 113, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2934,
        "end": 2937,
        "loc": {"start": {"line": 113, "column": 20}, "end": {"line": 113, "column": 23}}
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
        }, "start": 2937, "end": 2938, "loc": {"start": {"line": 113, "column": 23}, "end": {"line": 113, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2938,
        "end": 2944,
        "loc": {"start": {"line": 113, "column": 24}, "end": {"line": 113, "column": 30}}
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
        }, "start": 2944, "end": 2945, "loc": {"start": {"line": 113, "column": 30}, "end": {"line": 113, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2946,
        "end": 2952,
        "loc": {"start": {"line": 113, "column": 32}, "end": {"line": 113, "column": 38}}
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
        }, "start": 2952, "end": 2953, "loc": {"start": {"line": 113, "column": 38}, "end": {"line": 113, "column": 39}}
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
        }, "start": 2962, "end": 2963, "loc": {"start": {"line": 114, "column": 8}, "end": {"line": 114, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "直接调用",
        "start": 2973,
        "end": 2979,
        "loc": {"start": {"line": 116, "column": 8}, "end": {"line": 116, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2988,
        "end": 2995,
        "loc": {"start": {"line": 117, "column": 8}, "end": {"line": 117, "column": 15}}
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
        }, "start": 2995, "end": 2996, "loc": {"start": {"line": 117, "column": 15}, "end": {"line": 117, "column": 16}}
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
        }, "start": 2996, "end": 2997, "loc": {"start": {"line": 117, "column": 16}, "end": {"line": 117, "column": 17}}
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
        }, "start": 2997, "end": 2998, "loc": {"start": {"line": 117, "column": 17}, "end": {"line": 117, "column": 18}}
    }, {
        "type": "CommentLine",
        "value": "调用",
        "start": 3007,
        "end": 3011,
        "loc": {"start": {"line": 118, "column": 8}, "end": {"line": 118, "column": 12}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3020,
        "end": 3026,
        "loc": {"start": {"line": 119, "column": 8}, "end": {"line": 119, "column": 14}}
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
        }, "start": 3026, "end": 3027, "loc": {"start": {"line": 119, "column": 14}, "end": {"line": 119, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3027,
        "end": 3035,
        "loc": {"start": {"line": 119, "column": 15}, "end": {"line": 119, "column": 23}}
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
        }, "start": 3035, "end": 3036, "loc": {"start": {"line": 119, "column": 23}, "end": {"line": 119, "column": 24}}
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
        "start": 3036,
        "end": 3044,
        "loc": {"start": {"line": 119, "column": 24}, "end": {"line": 119, "column": 32}}
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
        }, "start": 3045, "end": 3046, "loc": {"start": {"line": 119, "column": 33}, "end": {"line": 119, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3046,
        "end": 3052,
        "loc": {"start": {"line": 119, "column": 34}, "end": {"line": 119, "column": 40}}
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
        }, "start": 3052, "end": 3053, "loc": {"start": {"line": 119, "column": 40}, "end": {"line": 119, "column": 41}}
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
        }, "start": 3054, "end": 3055, "loc": {"start": {"line": 119, "column": 42}, "end": {"line": 119, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3068,
        "end": 3075,
        "loc": {"start": {"line": 120, "column": 12}, "end": {"line": 120, "column": 19}}
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
        }, "start": 3075, "end": 3076, "loc": {"start": {"line": 120, "column": 19}, "end": {"line": 120, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3076,
        "end": 3079,
        "loc": {"start": {"line": 120, "column": 20}, "end": {"line": 120, "column": 23}}
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
        }, "start": 3079, "end": 3080, "loc": {"start": {"line": 120, "column": 23}, "end": {"line": 120, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3080,
        "end": 3086,
        "loc": {"start": {"line": 120, "column": 24}, "end": {"line": 120, "column": 30}}
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
        }, "start": 3086, "end": 3087, "loc": {"start": {"line": 120, "column": 30}, "end": {"line": 120, "column": 31}}
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
        }, "start": 3096, "end": 3097, "loc": {"start": {"line": 121, "column": 8}, "end": {"line": 121, "column": 9}}
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
        }, "start": 3097, "end": 3098, "loc": {"start": {"line": 121, "column": 9}, "end": {"line": 121, "column": 10}}
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
        }, "start": 3098, "end": 3099, "loc": {"start": {"line": 121, "column": 10}, "end": {"line": 121, "column": 11}}
    }, {
        "type": "CommentLine",
        "value": " this.scopeFun2();",
        "start": 3108,
        "end": 3128,
        "loc": {"start": {"line": 122, "column": 8}, "end": {"line": 122, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3137,
        "end": 3143,
        "loc": {"start": {"line": 123, "column": 8}, "end": {"line": 123, "column": 14}}
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
        }, "start": 3143, "end": 3144, "loc": {"start": {"line": 123, "column": 14}, "end": {"line": 123, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3144,
        "end": 3148,
        "loc": {"start": {"line": 123, "column": 15}, "end": {"line": 123, "column": 19}}
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
        }, "start": 3148, "end": 3149, "loc": {"start": {"line": 123, "column": 19}, "end": {"line": 123, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3149,
        "end": 3158,
        "loc": {"start": {"line": 123, "column": 20}, "end": {"line": 123, "column": 29}}
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
        }, "start": 3158, "end": 3159, "loc": {"start": {"line": 123, "column": 29}, "end": {"line": 123, "column": 30}}
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
        }, "start": 3159, "end": 3160, "loc": {"start": {"line": 123, "column": 30}, "end": {"line": 123, "column": 31}}
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
        }, "start": 3160, "end": 3161, "loc": {"start": {"line": 123, "column": 31}, "end": {"line": 123, "column": 32}}
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
        }, "start": 3168, "end": 3169, "loc": {"start": {"line": 126, "column": 4}, "end": {"line": 126, "column": 5}}
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
        }, "start": 3169, "end": 3170, "loc": {"start": {"line": 126, "column": 5}, "end": {"line": 126, "column": 6}}
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
        }, "start": 3170, "end": 3171, "loc": {"start": {"line": 126, "column": 6}, "end": {"line": 126, "column": 7}}
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
        }, "start": 3171, "end": 3172, "loc": {"start": {"line": 126, "column": 7}, "end": {"line": 126, "column": 8}}
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
        }, "start": 3174, "end": 3174, "loc": {"start": {"line": 128, "column": 0}, "end": {"line": 128, "column": 0}}
    }]
}