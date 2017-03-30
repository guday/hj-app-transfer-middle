var a = {
    "type": "File",
    "start": 0,
    "end": 2439,
    "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 103, "column": 0}},
    "program": {
        "type": "Program",
        "start": 0,
        "end": 2439,
        "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 103, "column": 0}},
        "sourceType": "module",
        "body": [{
            "type": "ExpressionStatement",
            "start": 65,
            "end": 2437,
            "loc": {"start": {"line": 10, "column": 0}, "end": {"line": 101, "column": 8}},
            "expression": {
                "type": "CallExpression",
                "start": 65,
                "end": 2436,
                "loc": {"start": {"line": 10, "column": 0}, "end": {"line": 101, "column": 7}},
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
                    "end": 2435,
                    "loc": {"start": {"line": 10, "column": 34}, "end": {"line": 101, "column": 6}},
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
                        "end": 2434,
                        "loc": {"start": {"line": 11, "column": 4}, "end": {"line": 101, "column": 5}},
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
                            "end": 2434,
                            "loc": {"start": {"line": 11, "column": 29}, "end": {"line": 101, "column": 5}},
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
                                "type": "ExpressionStatement",
                                "start": 275,
                                "end": 292,
                                "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 25}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 275,
                                    "end": 291,
                                    "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 24}},
                                    "operator": "=",
                                    "left": {
                                        "type": "Identifier",
                                        "start": 275,
                                        "end": 284,
                                        "loc": {
                                            "start": {"line": 17, "column": 8},
                                            "end": {"line": 17, "column": 17},
                                            "identifierName": "scopeData"
                                        },
                                        "name": "scopeData"
                                    },
                                    "right": {
                                        "type": "NullLiteral",
                                        "start": 287,
                                        "end": 291,
                                        "loc": {"start": {"line": 17, "column": 20}, "end": {"line": 17, "column": 24}}
                                    }
                                },
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "单个变量申明",
                                    "start": 301,
                                    "end": 309,
                                    "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 318,
                                "end": 356,
                                "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 46}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 322,
                                    "end": 355,
                                    "loc": {"start": {"line": 19, "column": 12}, "end": {"line": 19, "column": 45}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 322,
                                        "end": 336,
                                        "loc": {
                                            "start": {"line": 19, "column": 12},
                                            "end": {"line": 19, "column": 26},
                                            "identifierName": "singleVariable"
                                        },
                                        "name": "singleVariable",
                                        "leadingComments": null
                                    },
                                    "init": {
                                        "type": "StringLiteral",
                                        "start": 339,
                                        "end": 355,
                                        "loc": {"start": {"line": 19, "column": 29}, "end": {"line": 19, "column": 45}},
                                        "extra": {"rawValue": "singleVariable", "raw": "'singleVariable'"},
                                        "value": "singleVariable"
                                    },
                                    "leadingComments": null
                                }],
                                "kind": "var",
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "单个变量申明",
                                    "start": 301,
                                    "end": 309,
                                    "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 16}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "多个变量申明， 包括函数",
                                    "start": 365,
                                    "end": 379,
                                    "loc": {"start": {"line": 20, "column": 8}, "end": {"line": 20, "column": 22}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 388,
                                "end": 586,
                                "loc": {"start": {"line": 21, "column": 8}, "end": {"line": 27, "column": 27}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 392,
                                    "end": 400,
                                    "loc": {"start": {"line": 21, "column": 12}, "end": {"line": 21, "column": 20}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 392,
                                        "end": 400,
                                        "loc": {
                                            "start": {"line": 21, "column": 12},
                                            "end": {"line": 21, "column": 20},
                                            "identifierName": "mutiVar1"
                                        },
                                        "name": "mutiVar1",
                                        "leadingComments": null
                                    },
                                    "init": null,
                                    "leadingComments": null
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 414,
                                    "end": 429,
                                    "loc": {"start": {"line": 22, "column": 12}, "end": {"line": 22, "column": 27}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 414,
                                        "end": 422,
                                        "loc": {
                                            "start": {"line": 22, "column": 12},
                                            "end": {"line": 22, "column": 20},
                                            "identifierName": "mutiVar2"
                                        },
                                        "name": "mutiVar2"
                                    },
                                    "init": {
                                        "type": "NullLiteral",
                                        "start": 425,
                                        "end": 429,
                                        "loc": {"start": {"line": 22, "column": 23}, "end": {"line": 22, "column": 27}}
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 443,
                                    "end": 464,
                                    "loc": {"start": {"line": 23, "column": 12}, "end": {"line": 23, "column": 33}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 443,
                                        "end": 451,
                                        "loc": {
                                            "start": {"line": 23, "column": 12},
                                            "end": {"line": 23, "column": 20},
                                            "identifierName": "mutiVar3"
                                        },
                                        "name": "mutiVar3"
                                    },
                                    "init": {
                                        "type": "StringLiteral",
                                        "start": 454,
                                        "end": 464,
                                        "loc": {"start": {"line": 23, "column": 23}, "end": {"line": 23, "column": 33}},
                                        "extra": {"rawValue": "mutiVar3", "raw": "\"mutiVar3\""},
                                        "value": "mutiVar3"
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 478,
                                    "end": 557,
                                    "loc": {"start": {"line": 24, "column": 12}, "end": {"line": 26, "column": 13}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 478,
                                        "end": 485,
                                        "loc": {
                                            "start": {"line": 24, "column": 12},
                                            "end": {"line": 24, "column": 19},
                                            "identifierName": "mutiFun"
                                        },
                                        "name": "mutiFun"
                                    },
                                    "init": {
                                        "type": "FunctionExpression",
                                        "start": 488,
                                        "end": 557,
                                        "loc": {"start": {"line": 24, "column": 22}, "end": {"line": 26, "column": 13}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 498,
                                            "end": 504,
                                            "loc": {
                                                "start": {"line": 24, "column": 32},
                                                "end": {"line": 24, "column": 38},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 506,
                                            "end": 557,
                                            "loc": {
                                                "start": {"line": 24, "column": 40},
                                                "end": {"line": 26, "column": 13}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 524,
                                                "end": 543,
                                                "loc": {
                                                    "start": {"line": 25, "column": 16},
                                                    "end": {"line": 25, "column": 35}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 524,
                                                    "end": 543,
                                                    "loc": {
                                                        "start": {"line": 25, "column": 16},
                                                        "end": {"line": 25, "column": 35}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 524,
                                                        "end": 535,
                                                        "loc": {
                                                            "start": {"line": 25, "column": 16},
                                                            "end": {"line": 25, "column": 27}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 524,
                                                            "end": 531,
                                                            "loc": {
                                                                "start": {"line": 25, "column": 16},
                                                                "end": {"line": 25, "column": 23},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 532,
                                                            "end": 535,
                                                            "loc": {
                                                                "start": {"line": 25, "column": 24},
                                                                "end": {"line": 25, "column": 27},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 536,
                                                        "end": 542,
                                                        "loc": {
                                                            "start": {"line": 25, "column": 28},
                                                            "end": {"line": 25, "column": 34},
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
                                    "start": 571,
                                    "end": 585,
                                    "loc": {"start": {"line": 27, "column": 12}, "end": {"line": 27, "column": 26}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 571,
                                        "end": 579,
                                        "loc": {
                                            "start": {"line": 27, "column": 12},
                                            "end": {"line": 27, "column": 20},
                                            "identifierName": "mutiVar4"
                                        },
                                        "name": "mutiVar4"
                                    },
                                    "init": {
                                        "type": "NumericLiteral",
                                        "start": 582,
                                        "end": 585,
                                        "loc": {"start": {"line": 27, "column": 23}, "end": {"line": 27, "column": 26}},
                                        "extra": {"rawValue": 100, "raw": "100"},
                                        "value": 100
                                    }
                                }],
                                "kind": "var",
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "多个变量申明， 包括函数",
                                    "start": 365,
                                    "end": 379,
                                    "loc": {"start": {"line": 20, "column": 8}, "end": {"line": 20, "column": 22}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "函数直接申明",
                                    "start": 597,
                                    "end": 605,
                                    "loc": {"start": {"line": 30, "column": 8}, "end": {"line": 30, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 614,
                                "end": 1593,
                                "loc": {"start": {"line": 31, "column": 8}, "end": {"line": 61, "column": 9}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 618,
                                    "end": 1593,
                                    "loc": {"start": {"line": 31, "column": 12}, "end": {"line": 61, "column": 9}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 618,
                                        "end": 627,
                                        "loc": {
                                            "start": {"line": 31, "column": 12},
                                            "end": {"line": 31, "column": 21},
                                            "identifierName": "singleFun"
                                        },
                                        "name": "singleFun",
                                        "leadingComments": null
                                    },
                                    "init": {
                                        "type": "FunctionExpression",
                                        "start": 630,
                                        "end": 1593,
                                        "loc": {"start": {"line": 31, "column": 24}, "end": {"line": 61, "column": 9}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 640,
                                            "end": 646,
                                            "loc": {
                                                "start": {"line": 31, "column": 34},
                                                "end": {"line": 31, "column": 40},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 648,
                                            "end": 1593,
                                            "loc": {
                                                "start": {"line": 31, "column": 42},
                                                "end": {"line": 61, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 662,
                                                "end": 682,
                                                "loc": {
                                                    "start": {"line": 32, "column": 12},
                                                    "end": {"line": 32, "column": 32}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 662,
                                                    "end": 681,
                                                    "loc": {
                                                        "start": {"line": 32, "column": 12},
                                                        "end": {"line": 32, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 662,
                                                        "end": 673,
                                                        "loc": {
                                                            "start": {"line": 32, "column": 12},
                                                            "end": {"line": 32, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 662,
                                                            "end": 669,
                                                            "loc": {
                                                                "start": {"line": 32, "column": 12},
                                                                "end": {"line": 32, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 670,
                                                            "end": 673,
                                                            "loc": {
                                                                "start": {"line": 32, "column": 20},
                                                                "end": {"line": 32, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 674,
                                                        "end": 680,
                                                        "loc": {
                                                            "start": {"line": 32, "column": 24},
                                                            "end": {"line": 32, "column": 30},
                                                            "identifierName": "param1"
                                                        },
                                                        "name": "param1"
                                                    }]
                                                },
                                                "trailingComments": [{
                                                    "type": "CommentLine",
                                                    "value": "对象",
                                                    "start": 695,
                                                    "end": 699,
                                                    "loc": {
                                                        "start": {"line": 33, "column": 12},
                                                        "end": {"line": 33, "column": 16}
                                                    }
                                                }]
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 712,
                                                "end": 1582,
                                                "loc": {
                                                    "start": {"line": 34, "column": 12},
                                                    "end": {"line": 59, "column": 13}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 716,
                                                    "end": 1582,
                                                    "loc": {
                                                        "start": {"line": 34, "column": 16},
                                                        "end": {"line": 59, "column": 13}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 716,
                                                        "end": 719,
                                                        "loc": {
                                                            "start": {"line": 34, "column": 16},
                                                            "end": {"line": 34, "column": 19},
                                                            "identifierName": "obj"
                                                        },
                                                        "name": "obj",
                                                        "leadingComments": null
                                                    },
                                                    "init": {
                                                        "type": "ObjectExpression",
                                                        "start": 722,
                                                        "end": 1582,
                                                        "loc": {
                                                            "start": {"line": 34, "column": 22},
                                                            "end": {"line": 59, "column": 13}
                                                        },
                                                        "properties": [{
                                                            "type": "ObjectProperty",
                                                            "start": 740,
                                                            "end": 758,
                                                            "loc": {
                                                                "start": {"line": 35, "column": 16},
                                                                "end": {"line": 35, "column": 34}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 740,
                                                                "end": 747,
                                                                "loc": {
                                                                    "start": {"line": 35, "column": 16},
                                                                    "end": {"line": 35, "column": 23},
                                                                    "identifierName": "objVar1"
                                                                },
                                                                "name": "objVar1"
                                                            },
                                                            "value": {
                                                                "type": "StringLiteral",
                                                                "start": 749,
                                                                "end": 758,
                                                                "loc": {
                                                                    "start": {"line": 35, "column": 25},
                                                                    "end": {"line": 35, "column": 34}
                                                                },
                                                                "extra": {"rawValue": "objVar1", "raw": "\"objVar1\""},
                                                                "value": "objVar1"
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 776,
                                                            "end": 858,
                                                            "loc": {
                                                                "start": {"line": 36, "column": 16},
                                                                "end": {"line": 38, "column": 17}
                                                            },
                                                            "method": true,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 776,
                                                                "end": 783,
                                                                "loc": {
                                                                    "start": {"line": 36, "column": 16},
                                                                    "end": {"line": 36, "column": 23},
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
                                                                "start": 784,
                                                                "end": 790,
                                                                "loc": {
                                                                    "start": {"line": 36, "column": 24},
                                                                    "end": {"line": 36, "column": 30},
                                                                    "identifierName": "param1"
                                                                },
                                                                "name": "param1"
                                                            }, {
                                                                "type": "Identifier",
                                                                "start": 792,
                                                                "end": 798,
                                                                "loc": {
                                                                    "start": {"line": 36, "column": 32},
                                                                    "end": {"line": 36, "column": 38},
                                                                    "identifierName": "param2"
                                                                },
                                                                "name": "param2"
                                                            }],
                                                            "body": {
                                                                "type": "BlockStatement",
                                                                "start": 799,
                                                                "end": 858,
                                                                "loc": {
                                                                    "start": {"line": 36, "column": 39},
                                                                    "end": {"line": 38, "column": 17}
                                                                },
                                                                "body": [{
                                                                    "type": "ExpressionStatement",
                                                                    "start": 821,
                                                                    "end": 840,
                                                                    "loc": {
                                                                        "start": {"line": 37, "column": 20},
                                                                        "end": {"line": 37, "column": 39}
                                                                    },
                                                                    "expression": {
                                                                        "type": "CallExpression",
                                                                        "start": 821,
                                                                        "end": 840,
                                                                        "loc": {
                                                                            "start": {"line": 37, "column": 20},
                                                                            "end": {"line": 37, "column": 39}
                                                                        },
                                                                        "callee": {
                                                                            "type": "MemberExpression",
                                                                            "start": 821,
                                                                            "end": 832,
                                                                            "loc": {
                                                                                "start": {"line": 37, "column": 20},
                                                                                "end": {"line": 37, "column": 31}
                                                                            },
                                                                            "object": {
                                                                                "type": "Identifier",
                                                                                "start": 821,
                                                                                "end": 828,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 37,
                                                                                        "column": 20
                                                                                    },
                                                                                    "end": {"line": 37, "column": 27},
                                                                                    "identifierName": "console"
                                                                                },
                                                                                "name": "console"
                                                                            },
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "start": 829,
                                                                                "end": 832,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 37,
                                                                                        "column": 28
                                                                                    },
                                                                                    "end": {"line": 37, "column": 31},
                                                                                    "identifierName": "log"
                                                                                },
                                                                                "name": "log"
                                                                            },
                                                                            "computed": false
                                                                        },
                                                                        "arguments": [{
                                                                            "type": "Identifier",
                                                                            "start": 833,
                                                                            "end": 839,
                                                                            "loc": {
                                                                                "start": {"line": 37, "column": 32},
                                                                                "end": {"line": 37, "column": 38},
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
                                                            "start": 876,
                                                            "end": 1404,
                                                            "loc": {
                                                                "start": {"line": 39, "column": 16},
                                                                "end": {"line": 49, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 876,
                                                                "end": 883,
                                                                "loc": {
                                                                    "start": {"line": 39, "column": 16},
                                                                    "end": {"line": 39, "column": 23},
                                                                    "identifierName": "objFun2"
                                                                },
                                                                "name": "objFun2"
                                                            },
                                                            "value": {
                                                                "type": "FunctionExpression",
                                                                "start": 885,
                                                                "end": 1404,
                                                                "loc": {
                                                                    "start": {"line": 39, "column": 25},
                                                                    "end": {"line": 49, "column": 17}
                                                                },
                                                                "id": null,
                                                                "generator": false,
                                                                "expression": false,
                                                                "async": false,
                                                                "params": [{
                                                                    "type": "Identifier",
                                                                    "start": 895,
                                                                    "end": 901,
                                                                    "loc": {
                                                                        "start": {"line": 39, "column": 35},
                                                                        "end": {"line": 39, "column": 41},
                                                                        "identifierName": "param1"
                                                                    },
                                                                    "name": "param1"
                                                                }, {
                                                                    "type": "Identifier",
                                                                    "start": 903,
                                                                    "end": 909,
                                                                    "loc": {
                                                                        "start": {"line": 39, "column": 43},
                                                                        "end": {"line": 39, "column": 49},
                                                                        "identifierName": "param2"
                                                                    },
                                                                    "name": "param2"
                                                                }],
                                                                "body": {
                                                                    "type": "BlockStatement",
                                                                    "start": 911,
                                                                    "end": 1404,
                                                                    "loc": {
                                                                        "start": {"line": 39, "column": 51},
                                                                        "end": {"line": 49, "column": 17}
                                                                    },
                                                                    "body": [{
                                                                        "type": "ExpressionStatement",
                                                                        "start": 933,
                                                                        "end": 961,
                                                                        "loc": {
                                                                            "start": {"line": 40, "column": 20},
                                                                            "end": {"line": 40, "column": 48}
                                                                        },
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "start": 933,
                                                                            "end": 960,
                                                                            "loc": {
                                                                                "start": {"line": 40, "column": 20},
                                                                                "end": {"line": 40, "column": 47}
                                                                            },
                                                                            "callee": {
                                                                                "type": "MemberExpression",
                                                                                "start": 933,
                                                                                "end": 944,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 40,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 40, "column": 31}
                                                                                },
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "start": 933,
                                                                                    "end": 940,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 40,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 40,
                                                                                            "column": 27
                                                                                        },
                                                                                        "identifierName": "console"
                                                                                    },
                                                                                    "name": "console"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 941,
                                                                                    "end": 944,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 40,
                                                                                            "column": 28
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 40,
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
                                                                                "start": 945,
                                                                                "end": 951,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 40,
                                                                                        "column": 32
                                                                                    },
                                                                                    "end": {"line": 40, "column": 38},
                                                                                    "identifierName": "param1"
                                                                                },
                                                                                "name": "param1"
                                                                            }, {
                                                                                "type": "Identifier",
                                                                                "start": 953,
                                                                                "end": 959,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 40,
                                                                                        "column": 40
                                                                                    },
                                                                                    "end": {"line": 40, "column": 46},
                                                                                    "identifierName": "param2"
                                                                                },
                                                                                "name": "param2"
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 982,
                                                                        "end": 996,
                                                                        "loc": {
                                                                            "start": {"line": 41, "column": 20},
                                                                            "end": {"line": 41, "column": 34}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 982,
                                                                            "end": 995,
                                                                            "loc": {
                                                                                "start": {"line": 41, "column": 20},
                                                                                "end": {"line": 41, "column": 33}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "Identifier",
                                                                                "start": 982,
                                                                                "end": 990,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 41,
                                                                                        "column": 20
                                                                                    },
                                                                                    "end": {"line": 41, "column": 28},
                                                                                    "identifierName": "mutiVar1"
                                                                                },
                                                                                "name": "mutiVar1"
                                                                            },
                                                                            "right": {
                                                                                "type": "NumericLiteral",
                                                                                "start": 993,
                                                                                "end": 995,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 41,
                                                                                        "column": 31
                                                                                    }, "end": {"line": 41, "column": 33}
                                                                                },
                                                                                "extra": {"rawValue": 12, "raw": "12"},
                                                                                "value": 12
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1017,
                                                                        "end": 1049,
                                                                        "loc": {
                                                                            "start": {"line": 42, "column": 20},
                                                                            "end": {"line": 42, "column": 52}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1017,
                                                                            "end": 1048,
                                                                            "loc": {
                                                                                "start": {"line": 42, "column": 20},
                                                                                "end": {"line": 42, "column": 51}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1017,
                                                                                "end": 1037,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 42,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 42, "column": 40}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1017,
                                                                                    "end": 1028,
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
                                                                                        "start": 1017,
                                                                                        "end": 1023,
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
                                                                                        "start": 1024,
                                                                                        "end": 1028,
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
                                                                                    "type": "Identifier",
                                                                                    "start": 1029,
                                                                                    "end": 1037,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 42,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 42,
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
                                                                                "start": 1040,
                                                                                "end": 1048,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 42,
                                                                                        "column": 43
                                                                                    },
                                                                                    "end": {"line": 42, "column": 51},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1070,
                                                                        "end": 1105,
                                                                        "loc": {
                                                                            "start": {"line": 43, "column": 20},
                                                                            "end": {"line": 43, "column": 55}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1070,
                                                                            "end": 1104,
                                                                            "loc": {
                                                                                "start": {"line": 43, "column": 20},
                                                                                "end": {"line": 43, "column": 54}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1070,
                                                                                "end": 1093,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 43,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 43, "column": 43}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1070,
                                                                                    "end": 1081,
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
                                                                                        "start": 1070,
                                                                                        "end": 1076,
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
                                                                                        "start": 1077,
                                                                                        "end": 1081,
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
                                                                                    "type": "StringLiteral",
                                                                                    "start": 1082,
                                                                                    "end": 1092,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 43,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 43,
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
                                                                                "start": 1096,
                                                                                "end": 1104,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 43,
                                                                                        "column": 46
                                                                                    },
                                                                                    "end": {"line": 43, "column": 54},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1126,
                                                                        "end": 1159,
                                                                        "loc": {
                                                                            "start": {"line": 44, "column": 20},
                                                                            "end": {"line": 44, "column": 53}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1126,
                                                                            "end": 1158,
                                                                            "loc": {
                                                                                "start": {"line": 44, "column": 20},
                                                                                "end": {"line": 44, "column": 52}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1126,
                                                                                "end": 1147,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 44,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 44, "column": 41}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1126,
                                                                                    "end": 1137,
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
                                                                                        "start": 1126,
                                                                                        "end": 1132,
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
                                                                                        "start": 1133,
                                                                                        "end": 1137,
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
                                                                                    "type": "Identifier",
                                                                                    "start": 1138,
                                                                                    "end": 1146,
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
                                                                                "computed": true
                                                                            },
                                                                            "right": {
                                                                                "type": "Identifier",
                                                                                "start": 1150,
                                                                                "end": 1158,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 44,
                                                                                        "column": 44
                                                                                    },
                                                                                    "end": {"line": 44, "column": 52},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1180,
                                                                        "end": 1227,
                                                                        "loc": {
                                                                            "start": {"line": 45, "column": 20},
                                                                            "end": {"line": 45, "column": 67}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1180,
                                                                            "end": 1226,
                                                                            "loc": {
                                                                                "start": {"line": 45, "column": 20},
                                                                                "end": {"line": 45, "column": 66}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1180,
                                                                                "end": 1215,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 45,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 45, "column": 55}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1180,
                                                                                    "end": 1191,
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
                                                                                        "start": 1180,
                                                                                        "end": 1186,
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
                                                                                        "start": 1187,
                                                                                        "end": 1191,
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
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1192,
                                                                                    "end": 1214,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 45,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 45,
                                                                                            "column": 54
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1192,
                                                                                        "end": 1200,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 45,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 45,
                                                                                                "column": 40
                                                                                            },
                                                                                            "identifierName": "mutiVar3"
                                                                                        },
                                                                                        "name": "mutiVar3"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1201,
                                                                                        "end": 1214,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 45,
                                                                                                "column": 41
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 45,
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
                                                                                "start": 1218,
                                                                                "end": 1226,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 45,
                                                                                        "column": 58
                                                                                    },
                                                                                    "end": {"line": 45, "column": 66},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1248,
                                                                        "end": 1282,
                                                                        "loc": {
                                                                            "start": {"line": 46, "column": 20},
                                                                            "end": {"line": 46, "column": 54}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 1248,
                                                                            "end": 1281,
                                                                            "loc": {
                                                                                "start": {"line": 46, "column": 20},
                                                                                "end": {"line": 46, "column": 53}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1248,
                                                                                "end": 1268,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 46,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 46, "column": 40}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 1248,
                                                                                    "end": 1259,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 46,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 46,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1248,
                                                                                        "end": 1254,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 46,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 46,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 1255,
                                                                                        "end": 1259,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 46,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 46,
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
                                                                                    "start": 1260,
                                                                                    "end": 1268,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 46,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 46,
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
                                                                                "start": 1271,
                                                                                "end": 1281,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 46,
                                                                                        "column": 43
                                                                                    }, "end": {"line": 46, "column": 53}
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
                                                                        "start": 1303,
                                                                        "end": 1330,
                                                                        "loc": {
                                                                            "start": {"line": 47, "column": 20},
                                                                            "end": {"line": 47, "column": 47}
                                                                        },
                                                                        "declarations": [{
                                                                            "type": "VariableDeclarator",
                                                                            "start": 1307,
                                                                            "end": 1329,
                                                                            "loc": {
                                                                                "start": {"line": 47, "column": 24},
                                                                                "end": {"line": 47, "column": 46}
                                                                            },
                                                                            "id": {
                                                                                "type": "Identifier",
                                                                                "start": 1307,
                                                                                "end": 1319,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 47,
                                                                                        "column": 24
                                                                                    },
                                                                                    "end": {"line": 47, "column": 36},
                                                                                    "identifierName": "unKnownValue"
                                                                                },
                                                                                "name": "unKnownValue"
                                                                            },
                                                                            "init": {
                                                                                "type": "Identifier",
                                                                                "start": 1322,
                                                                                "end": 1329,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 47,
                                                                                        "column": 39
                                                                                    },
                                                                                    "end": {"line": 47, "column": 46},
                                                                                    "identifierName": "unKnown"
                                                                                },
                                                                                "name": "unKnown"
                                                                            }
                                                                        }],
                                                                        "kind": "var"
                                                                    }, {
                                                                        "type": "VariableDeclaration",
                                                                        "start": 1351,
                                                                        "end": 1386,
                                                                        "loc": {
                                                                            "start": {"line": 48, "column": 20},
                                                                            "end": {"line": 48, "column": 55}
                                                                        },
                                                                        "declarations": [{
                                                                            "type": "VariableDeclarator",
                                                                            "start": 1355,
                                                                            "end": 1385,
                                                                            "loc": {
                                                                                "start": {"line": 48, "column": 24},
                                                                                "end": {"line": 48, "column": 54}
                                                                            },
                                                                            "id": {
                                                                                "type": "Identifier",
                                                                                "start": 1355,
                                                                                "end": 1368,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 48,
                                                                                        "column": 24
                                                                                    },
                                                                                    "end": {"line": 48, "column": 37},
                                                                                    "identifierName": "unKnownValue1"
                                                                                },
                                                                                "name": "unKnownValue1"
                                                                            },
                                                                            "init": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1371,
                                                                                "end": 1385,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 48,
                                                                                        "column": 40
                                                                                    }, "end": {"line": 48, "column": 54}
                                                                                },
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "start": 1371,
                                                                                    "end": 1377,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 48,
                                                                                            "column": 40
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 48,
                                                                                            "column": 46
                                                                                        },
                                                                                        "identifierName": "$scope"
                                                                                    },
                                                                                    "name": "$scope"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 1378,
                                                                                    "end": 1385,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 48,
                                                                                            "column": 47
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 48,
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
                                                            "start": 1422,
                                                            "end": 1463,
                                                            "loc": {
                                                                "start": {"line": 50, "column": 16},
                                                                "end": {"line": 52, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1422,
                                                                "end": 1429,
                                                                "loc": {
                                                                    "start": {"line": 50, "column": 16},
                                                                    "end": {"line": 50, "column": 23},
                                                                    "identifierName": "objFun3"
                                                                },
                                                                "name": "objFun3"
                                                            },
                                                            "value": {
                                                                "type": "ArrowFunctionExpression",
                                                                "start": 1431,
                                                                "end": 1463,
                                                                "loc": {
                                                                    "start": {"line": 50, "column": 25},
                                                                    "end": {"line": 52, "column": 17}
                                                                },
                                                                "id": null,
                                                                "generator": false,
                                                                "expression": false,
                                                                "async": false,
                                                                "params": [{
                                                                    "type": "Identifier",
                                                                    "start": 1432,
                                                                    "end": 1434,
                                                                    "loc": {
                                                                        "start": {"line": 50, "column": 26},
                                                                        "end": {"line": 50, "column": 28},
                                                                        "identifierName": "p1"
                                                                    },
                                                                    "name": "p1"
                                                                }, {
                                                                    "type": "Identifier",
                                                                    "start": 1436,
                                                                    "end": 1438,
                                                                    "loc": {
                                                                        "start": {"line": 50, "column": 30},
                                                                        "end": {"line": 50, "column": 32},
                                                                        "identifierName": "p2"
                                                                    },
                                                                    "name": "p2"
                                                                }],
                                                                "body": {
                                                                    "type": "BlockStatement",
                                                                    "start": 1443,
                                                                    "end": 1463,
                                                                    "loc": {
                                                                        "start": {"line": 50, "column": 37},
                                                                        "end": {"line": 52, "column": 17}
                                                                    },
                                                                    "body": [],
                                                                    "directives": []
                                                                }
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 1481,
                                                            "end": 1513,
                                                            "loc": {
                                                                "start": {"line": 53, "column": 16},
                                                                "end": {"line": 55, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1485,
                                                                "end": 1490,
                                                                "loc": {
                                                                    "start": {"line": 53, "column": 20},
                                                                    "end": {"line": 53, "column": 25},
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
                                                                "start": 1493,
                                                                "end": 1513,
                                                                "loc": {
                                                                    "start": {"line": 53, "column": 28},
                                                                    "end": {"line": 55, "column": 17}
                                                                },
                                                                "body": [],
                                                                "directives": []
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 1531,
                                                            "end": 1568,
                                                            "loc": {
                                                                "start": {"line": 56, "column": 16},
                                                                "end": {"line": 58, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1535,
                                                                "end": 1540,
                                                                "loc": {
                                                                    "start": {"line": 56, "column": 20},
                                                                    "end": {"line": 56, "column": 25},
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
                                                                "start": 1541,
                                                                "end": 1546,
                                                                "loc": {
                                                                    "start": {"line": 56, "column": 26},
                                                                    "end": {"line": 56, "column": 31},
                                                                    "identifierName": "value"
                                                                },
                                                                "name": "value"
                                                            }],
                                                            "body": {
                                                                "type": "BlockStatement",
                                                                "start": 1548,
                                                                "end": 1568,
                                                                "loc": {
                                                                    "start": {"line": 56, "column": 33},
                                                                    "end": {"line": 58, "column": 17}
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
                                                    "start": 695,
                                                    "end": 699,
                                                    "loc": {
                                                        "start": {"line": 33, "column": 12},
                                                        "end": {"line": 33, "column": 16}
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
                                    "start": 597,
                                    "end": 605,
                                    "loc": {"start": {"line": 30, "column": 8}, "end": {"line": 30, "column": 16}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope函数初始化",
                                    "start": 1603,
                                    "end": 1615,
                                    "loc": {"start": {"line": 63, "column": 8}, "end": {"line": 63, "column": 20}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 1624,
                                "end": 1704,
                                "loc": {"start": {"line": 64, "column": 8}, "end": {"line": 66, "column": 10}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 1624,
                                    "end": 1703,
                                    "loc": {"start": {"line": 64, "column": 8}, "end": {"line": 66, "column": 9}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 1624,
                                        "end": 1639,
                                        "loc": {"start": {"line": 64, "column": 8}, "end": {"line": 64, "column": 23}},
                                        "object": {
                                            "type": "Identifier",
                                            "start": 1624,
                                            "end": 1630,
                                            "loc": {
                                                "start": {"line": 64, "column": 8},
                                                "end": {"line": 64, "column": 14},
                                                "identifierName": "$scope"
                                            },
                                            "name": "$scope",
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 1631,
                                            "end": 1639,
                                            "loc": {
                                                "start": {"line": 64, "column": 15},
                                                "end": {"line": 64, "column": 23},
                                                "identifierName": "scopeFun"
                                            },
                                            "name": "scopeFun"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "FunctionExpression",
                                        "start": 1642,
                                        "end": 1703,
                                        "loc": {"start": {"line": 64, "column": 26}, "end": {"line": 66, "column": 9}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 1652,
                                            "end": 1658,
                                            "loc": {
                                                "start": {"line": 64, "column": 36},
                                                "end": {"line": 64, "column": 42},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 1660,
                                            "end": 1703,
                                            "loc": {
                                                "start": {"line": 64, "column": 44},
                                                "end": {"line": 66, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 1674,
                                                "end": 1693,
                                                "loc": {
                                                    "start": {"line": 65, "column": 12},
                                                    "end": {"line": 65, "column": 31}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 1674,
                                                    "end": 1693,
                                                    "loc": {
                                                        "start": {"line": 65, "column": 12},
                                                        "end": {"line": 65, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 1674,
                                                        "end": 1685,
                                                        "loc": {
                                                            "start": {"line": 65, "column": 12},
                                                            "end": {"line": 65, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 1674,
                                                            "end": 1681,
                                                            "loc": {
                                                                "start": {"line": 65, "column": 12},
                                                                "end": {"line": 65, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 1682,
                                                            "end": 1685,
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
                                                        "start": 1686,
                                                        "end": 1692,
                                                        "loc": {
                                                            "start": {"line": 65, "column": 24},
                                                            "end": {"line": 65, "column": 30},
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
                                    "start": 1603,
                                    "end": 1615,
                                    "loc": {"start": {"line": 63, "column": 8}, "end": {"line": 63, "column": 20}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope多级初始化函数",
                                    "start": 1714,
                                    "end": 1728,
                                    "loc": {"start": {"line": 68, "column": 8}, "end": {"line": 68, "column": 22}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 1737,
                                "end": 2096,
                                "loc": {"start": {"line": 69, "column": 8}, "end": {"line": 82, "column": 10}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 1737,
                                    "end": 2095,
                                    "loc": {"start": {"line": 69, "column": 8}, "end": {"line": 82, "column": 9}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 1737,
                                        "end": 1761,
                                        "loc": {"start": {"line": 69, "column": 8}, "end": {"line": 69, "column": 32}},
                                        "object": {
                                            "type": "MemberExpression",
                                            "start": 1737,
                                            "end": 1751,
                                            "loc": {
                                                "start": {"line": 69, "column": 8},
                                                "end": {"line": 69, "column": 22}
                                            },
                                            "object": {
                                                "type": "MemberExpression",
                                                "start": 1737,
                                                "end": 1748,
                                                "loc": {
                                                    "start": {"line": 69, "column": 8},
                                                    "end": {"line": 69, "column": 19}
                                                },
                                                "object": {
                                                    "type": "Identifier",
                                                    "start": 1737,
                                                    "end": 1743,
                                                    "loc": {
                                                        "start": {"line": 69, "column": 8},
                                                        "end": {"line": 69, "column": 14},
                                                        "identifierName": "$scope"
                                                    },
                                                    "name": "$scope",
                                                    "leadingComments": null
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "start": 1744,
                                                    "end": 1748,
                                                    "loc": {
                                                        "start": {"line": 69, "column": 15},
                                                        "end": {"line": 69, "column": 19},
                                                        "identifierName": "data"
                                                    },
                                                    "name": "data"
                                                },
                                                "computed": false,
                                                "leadingComments": null
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 1749,
                                                "end": 1751,
                                                "loc": {
                                                    "start": {"line": 69, "column": 20},
                                                    "end": {"line": 69, "column": 22},
                                                    "identifierName": "qq"
                                                },
                                                "name": "qq"
                                            },
                                            "computed": false,
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 1752,
                                            "end": 1761,
                                            "loc": {
                                                "start": {"line": 69, "column": 23},
                                                "end": {"line": 69, "column": 32},
                                                "identifierName": "scopeFun2"
                                            },
                                            "name": "scopeFun2"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "FunctionExpression",
                                        "start": 1764,
                                        "end": 2095,
                                        "loc": {"start": {"line": 69, "column": 35}, "end": {"line": 82, "column": 9}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 1776,
                                            "end": 2095,
                                            "loc": {
                                                "start": {"line": 69, "column": 47},
                                                "end": {"line": 82, "column": 9}
                                            },
                                            "body": [{
                                                "type": "VariableDeclaration",
                                                "start": 1791,
                                                "end": 1814,
                                                "loc": {
                                                    "start": {"line": 71, "column": 12},
                                                    "end": {"line": 71, "column": 35}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 1795,
                                                    "end": 1813,
                                                    "loc": {
                                                        "start": {"line": 71, "column": 16},
                                                        "end": {"line": 71, "column": 34}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 1795,
                                                        "end": 1802,
                                                        "loc": {
                                                            "start": {"line": 71, "column": 16},
                                                            "end": {"line": 71, "column": 23},
                                                            "identifierName": "subFun2"
                                                        },
                                                        "name": "subFun2"
                                                    },
                                                    "init": {
                                                        "type": "Identifier",
                                                        "start": 1805,
                                                        "end": 1813,
                                                        "loc": {
                                                            "start": {"line": 71, "column": 26},
                                                            "end": {"line": 71, "column": 34},
                                                            "identifierName": "_subFun2"
                                                        },
                                                        "name": "_subFun2"
                                                    }
                                                }],
                                                "kind": "var"
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 1827,
                                                "end": 1884,
                                                "loc": {
                                                    "start": {"line": 72, "column": 12},
                                                    "end": {"line": 74, "column": 14}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 1831,
                                                    "end": 1883,
                                                    "loc": {
                                                        "start": {"line": 72, "column": 16},
                                                        "end": {"line": 74, "column": 13}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 1831,
                                                        "end": 1838,
                                                        "loc": {
                                                            "start": {"line": 72, "column": 16},
                                                            "end": {"line": 72, "column": 23},
                                                            "identifierName": "subFun1"
                                                        },
                                                        "name": "subFun1"
                                                    },
                                                    "init": {
                                                        "type": "FunctionExpression",
                                                        "start": 1841,
                                                        "end": 1883,
                                                        "loc": {
                                                            "start": {"line": 72, "column": 26},
                                                            "end": {"line": 74, "column": 13}
                                                        },
                                                        "id": null,
                                                        "generator": false,
                                                        "expression": false,
                                                        "async": false,
                                                        "params": [{
                                                            "type": "Identifier",
                                                            "start": 1851,
                                                            "end": 1857,
                                                            "loc": {
                                                                "start": {"line": 72, "column": 36},
                                                                "end": {"line": 72, "column": 42},
                                                                "identifierName": "param1"
                                                            },
                                                            "name": "param1"
                                                        }, {
                                                            "type": "Identifier",
                                                            "start": 1859,
                                                            "end": 1865,
                                                            "loc": {
                                                                "start": {"line": 72, "column": 44},
                                                                "end": {"line": 72, "column": 50},
                                                                "identifierName": "param2"
                                                            },
                                                            "name": "param2"
                                                        }],
                                                        "body": {
                                                            "type": "BlockStatement",
                                                            "start": 1867,
                                                            "end": 1883,
                                                            "loc": {
                                                                "start": {"line": 72, "column": 52},
                                                                "end": {"line": 74, "column": 13}
                                                            },
                                                            "body": [],
                                                            "directives": []
                                                        }
                                                    }
                                                }],
                                                "kind": "var"
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 1897,
                                                "end": 1922,
                                                "loc": {
                                                    "start": {"line": 75, "column": 12},
                                                    "end": {"line": 75, "column": 37}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 1897,
                                                    "end": 1921,
                                                    "loc": {
                                                        "start": {"line": 75, "column": 12},
                                                        "end": {"line": 75, "column": 36}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 1897,
                                                        "end": 1904,
                                                        "loc": {
                                                            "start": {"line": 75, "column": 12},
                                                            "end": {"line": 75, "column": 19},
                                                            "identifierName": "subFun2"
                                                        },
                                                        "name": "subFun2"
                                                    },
                                                    "arguments": [{
                                                        "type": "MemberExpression",
                                                        "start": 1905,
                                                        "end": 1920,
                                                        "loc": {
                                                            "start": {"line": 75, "column": 20},
                                                            "end": {"line": 75, "column": 35}
                                                        },
                                                        "object": {
                                                            "type": "CallExpression",
                                                            "start": 1905,
                                                            "end": 1914,
                                                            "loc": {
                                                                "start": {"line": 75, "column": 20},
                                                                "end": {"line": 75, "column": 29}
                                                            },
                                                            "callee": {
                                                                "type": "Identifier",
                                                                "start": 1905,
                                                                "end": 1912,
                                                                "loc": {
                                                                    "start": {"line": 75, "column": 20},
                                                                    "end": {"line": 75, "column": 27},
                                                                    "identifierName": "subFun1"
                                                                },
                                                                "name": "subFun1"
                                                            },
                                                            "arguments": []
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 1915,
                                                            "end": 1920,
                                                            "loc": {
                                                                "start": {"line": 75, "column": 30},
                                                                "end": {"line": 75, "column": 35},
                                                                "identifierName": "value"
                                                            },
                                                            "name": "value"
                                                        },
                                                        "computed": false
                                                    }]
                                                }
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 1935,
                                                "end": 1967,
                                                "loc": {
                                                    "start": {"line": 76, "column": 12},
                                                    "end": {"line": 76, "column": 44}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 1935,
                                                    "end": 1966,
                                                    "loc": {
                                                        "start": {"line": 76, "column": 12},
                                                        "end": {"line": 76, "column": 43}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 1935,
                                                        "end": 1942,
                                                        "loc": {
                                                            "start": {"line": 76, "column": 12},
                                                            "end": {"line": 76, "column": 19},
                                                            "identifierName": "subFun1"
                                                        },
                                                        "name": "subFun1"
                                                    },
                                                    "arguments": [{
                                                        "type": "MemberExpression",
                                                        "start": 1943,
                                                        "end": 1965,
                                                        "loc": {
                                                            "start": {"line": 76, "column": 20},
                                                            "end": {"line": 76, "column": 42}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 1943,
                                                            "end": 1951,
                                                            "loc": {
                                                                "start": {"line": 76, "column": 20},
                                                                "end": {"line": 76, "column": 28},
                                                                "identifierName": "mutiVar3"
                                                            },
                                                            "name": "mutiVar3"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 1952,
                                                            "end": 1965,
                                                            "loc": {
                                                                "start": {"line": 76, "column": 29},
                                                                "end": {"line": 76, "column": 42},
                                                                "identifierName": "mutiVar3Value"
                                                            },
                                                            "name": "mutiVar3Value"
                                                        },
                                                        "computed": false
                                                    }]
                                                }
                                            }, {
                                                "type": "FunctionDeclaration",
                                                "start": 1980,
                                                "end": 2030,
                                                "loc": {
                                                    "start": {"line": 77, "column": 12},
                                                    "end": {"line": 79, "column": 13}
                                                },
                                                "id": {
                                                    "type": "Identifier",
                                                    "start": 1989,
                                                    "end": 1997,
                                                    "loc": {
                                                        "start": {"line": 77, "column": 21},
                                                        "end": {"line": 77, "column": 29},
                                                        "identifierName": "_subFun2"
                                                    },
                                                    "name": "_subFun2"
                                                },
                                                "generator": false,
                                                "expression": false,
                                                "async": false,
                                                "params": [{
                                                    "type": "Identifier",
                                                    "start": 1998,
                                                    "end": 2004,
                                                    "loc": {
                                                        "start": {"line": 77, "column": 30},
                                                        "end": {"line": 77, "column": 36},
                                                        "identifierName": "param1"
                                                    },
                                                    "name": "param1"
                                                }, {
                                                    "type": "Identifier",
                                                    "start": 2006,
                                                    "end": 2012,
                                                    "loc": {
                                                        "start": {"line": 77, "column": 38},
                                                        "end": {"line": 77, "column": 44},
                                                        "identifierName": "param2"
                                                    },
                                                    "name": "param2"
                                                }],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "start": 2014,
                                                    "end": 2030,
                                                    "loc": {
                                                        "start": {"line": 77, "column": 46},
                                                        "end": {"line": 79, "column": 13}
                                                    },
                                                    "body": [],
                                                    "directives": []
                                                }
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 2043,
                                                "end": 2084,
                                                "loc": {
                                                    "start": {"line": 80, "column": 12},
                                                    "end": {"line": 80, "column": 53}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 2047,
                                                    "end": 2083,
                                                    "loc": {
                                                        "start": {"line": 80, "column": 16},
                                                        "end": {"line": 80, "column": 52}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 2047,
                                                        "end": 2058,
                                                        "loc": {
                                                            "start": {"line": 80, "column": 16},
                                                            "end": {"line": 80, "column": 27},
                                                            "identifierName": "fnMutiValue"
                                                        },
                                                        "name": "fnMutiValue"
                                                    },
                                                    "init": {
                                                        "type": "MemberExpression",
                                                        "start": 2061,
                                                        "end": 2083,
                                                        "loc": {
                                                            "start": {"line": 80, "column": 30},
                                                            "end": {"line": 80, "column": 52}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 2061,
                                                            "end": 2069,
                                                            "loc": {
                                                                "start": {"line": 80, "column": 30},
                                                                "end": {"line": 80, "column": 38},
                                                                "identifierName": "mutiVar3"
                                                            },
                                                            "name": "mutiVar3"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 2070,
                                                            "end": 2083,
                                                            "loc": {
                                                                "start": {"line": 80, "column": 39},
                                                                "end": {"line": 80, "column": 52},
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
                                    "start": 1714,
                                    "end": 1728,
                                    "loc": {"start": {"line": 68, "column": 8}, "end": {"line": 68, "column": 22}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentBlock",
                                    "value": "*\n         * 表达式\n         ",
                                    "start": 2106,
                                    "end": 2136,
                                    "loc": {"start": {"line": 84, "column": 8}, "end": {"line": 86, "column": 11}}
                                }]
                            }, {
                                "type": "FunctionDeclaration",
                                "start": 2145,
                                "end": 2228,
                                "loc": {"start": {"line": 87, "column": 8}, "end": {"line": 89, "column": 9}},
                                "id": {
                                    "type": "Identifier",
                                    "start": 2154,
                                    "end": 2160,
                                    "loc": {
                                        "start": {"line": 87, "column": 17},
                                        "end": {"line": 87, "column": 23},
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
                                    "start": 2161,
                                    "end": 2167,
                                    "loc": {
                                        "start": {"line": 87, "column": 24},
                                        "end": {"line": 87, "column": 30},
                                        "identifierName": "param1"
                                    },
                                    "name": "param1"
                                }, {
                                    "type": "Identifier",
                                    "start": 2169,
                                    "end": 2175,
                                    "loc": {
                                        "start": {"line": 87, "column": 32},
                                        "end": {"line": 87, "column": 38},
                                        "identifierName": "param2"
                                    },
                                    "name": "param2"
                                }],
                                "body": {
                                    "type": "BlockStatement",
                                    "start": 2177,
                                    "end": 2228,
                                    "loc": {"start": {"line": 87, "column": 40}, "end": {"line": 89, "column": 9}},
                                    "body": [{
                                        "type": "ExpressionStatement",
                                        "start": 2191,
                                        "end": 2218,
                                        "loc": {"start": {"line": 88, "column": 12}, "end": {"line": 88, "column": 39}},
                                        "expression": {
                                            "type": "CallExpression",
                                            "start": 2191,
                                            "end": 2218,
                                            "loc": {
                                                "start": {"line": 88, "column": 12},
                                                "end": {"line": 88, "column": 39}
                                            },
                                            "callee": {
                                                "type": "MemberExpression",
                                                "start": 2191,
                                                "end": 2202,
                                                "loc": {
                                                    "start": {"line": 88, "column": 12},
                                                    "end": {"line": 88, "column": 23}
                                                },
                                                "object": {
                                                    "type": "Identifier",
                                                    "start": 2191,
                                                    "end": 2198,
                                                    "loc": {
                                                        "start": {"line": 88, "column": 12},
                                                        "end": {"line": 88, "column": 19},
                                                        "identifierName": "console"
                                                    },
                                                    "name": "console"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "start": 2199,
                                                    "end": 2202,
                                                    "loc": {
                                                        "start": {"line": 88, "column": 20},
                                                        "end": {"line": 88, "column": 23},
                                                        "identifierName": "log"
                                                    },
                                                    "name": "log"
                                                },
                                                "computed": false
                                            },
                                            "arguments": [{
                                                "type": "Identifier",
                                                "start": 2203,
                                                "end": 2209,
                                                "loc": {
                                                    "start": {"line": 88, "column": 24},
                                                    "end": {"line": 88, "column": 30},
                                                    "identifierName": "param1"
                                                },
                                                "name": "param1"
                                            }, {
                                                "type": "Identifier",
                                                "start": 2211,
                                                "end": 2217,
                                                "loc": {
                                                    "start": {"line": 88, "column": 32},
                                                    "end": {"line": 88, "column": 38},
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
                                    "start": 2106,
                                    "end": 2136,
                                    "loc": {"start": {"line": 84, "column": 8}, "end": {"line": 86, "column": 11}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "直接调用",
                                    "start": 2238,
                                    "end": 2244,
                                    "loc": {"start": {"line": 91, "column": 8}, "end": {"line": 91, "column": 14}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 2253,
                                "end": 2263,
                                "loc": {"start": {"line": 92, "column": 8}, "end": {"line": 92, "column": 18}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 2253,
                                    "end": 2262,
                                    "loc": {"start": {"line": 92, "column": 8}, "end": {"line": 92, "column": 17}},
                                    "callee": {
                                        "type": "Identifier",
                                        "start": 2253,
                                        "end": 2260,
                                        "loc": {
                                            "start": {"line": 92, "column": 8},
                                            "end": {"line": 92, "column": 15},
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
                                    "start": 2238,
                                    "end": 2244,
                                    "loc": {"start": {"line": 91, "column": 8}, "end": {"line": 91, "column": 14}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "调用",
                                    "start": 2272,
                                    "end": 2276,
                                    "loc": {"start": {"line": 93, "column": 8}, "end": {"line": 93, "column": 12}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 2285,
                                "end": 2364,
                                "loc": {"start": {"line": 94, "column": 8}, "end": {"line": 96, "column": 11}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 2285,
                                    "end": 2363,
                                    "loc": {"start": {"line": 94, "column": 8}, "end": {"line": 96, "column": 10}},
                                    "callee": {
                                        "type": "MemberExpression",
                                        "start": 2285,
                                        "end": 2300,
                                        "loc": {"start": {"line": 94, "column": 8}, "end": {"line": 94, "column": 23}},
                                        "object": {
                                            "type": "Identifier",
                                            "start": 2285,
                                            "end": 2291,
                                            "loc": {
                                                "start": {"line": 94, "column": 8},
                                                "end": {"line": 94, "column": 14},
                                                "identifierName": "$scope"
                                            },
                                            "name": "$scope",
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 2292,
                                            "end": 2300,
                                            "loc": {
                                                "start": {"line": 94, "column": 15},
                                                "end": {"line": 94, "column": 23},
                                                "identifierName": "scopeFun"
                                            },
                                            "name": "scopeFun"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "arguments": [{
                                        "type": "FunctionExpression",
                                        "start": 2301,
                                        "end": 2362,
                                        "loc": {"start": {"line": 94, "column": 24}, "end": {"line": 96, "column": 9}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 2311,
                                            "end": 2317,
                                            "loc": {
                                                "start": {"line": 94, "column": 34},
                                                "end": {"line": 94, "column": 40},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 2319,
                                            "end": 2362,
                                            "loc": {
                                                "start": {"line": 94, "column": 42},
                                                "end": {"line": 96, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 2333,
                                                "end": 2352,
                                                "loc": {
                                                    "start": {"line": 95, "column": 12},
                                                    "end": {"line": 95, "column": 31}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 2333,
                                                    "end": 2352,
                                                    "loc": {
                                                        "start": {"line": 95, "column": 12},
                                                        "end": {"line": 95, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 2333,
                                                        "end": 2344,
                                                        "loc": {
                                                            "start": {"line": 95, "column": 12},
                                                            "end": {"line": 95, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 2333,
                                                            "end": 2340,
                                                            "loc": {
                                                                "start": {"line": 95, "column": 12},
                                                                "end": {"line": 95, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 2341,
                                                            "end": 2344,
                                                            "loc": {
                                                                "start": {"line": 95, "column": 20},
                                                                "end": {"line": 95, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 2345,
                                                        "end": 2351,
                                                        "loc": {
                                                            "start": {"line": 95, "column": 24},
                                                            "end": {"line": 95, "column": 30},
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
                                    "start": 2272,
                                    "end": 2276,
                                    "loc": {"start": {"line": 93, "column": 8}, "end": {"line": 93, "column": 12}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": " this.scopeFun2();",
                                    "start": 2373,
                                    "end": 2393,
                                    "loc": {"start": {"line": 97, "column": 8}, "end": {"line": 97, "column": 28}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 2402,
                                "end": 2426,
                                "loc": {"start": {"line": 98, "column": 8}, "end": {"line": 98, "column": 32}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 2402,
                                    "end": 2425,
                                    "loc": {"start": {"line": 98, "column": 8}, "end": {"line": 98, "column": 31}},
                                    "callee": {
                                        "type": "MemberExpression",
                                        "start": 2402,
                                        "end": 2423,
                                        "loc": {"start": {"line": 98, "column": 8}, "end": {"line": 98, "column": 29}},
                                        "object": {
                                            "type": "MemberExpression",
                                            "start": 2402,
                                            "end": 2413,
                                            "loc": {
                                                "start": {"line": 98, "column": 8},
                                                "end": {"line": 98, "column": 19}
                                            },
                                            "object": {
                                                "type": "Identifier",
                                                "start": 2402,
                                                "end": 2408,
                                                "loc": {
                                                    "start": {"line": 98, "column": 8},
                                                    "end": {"line": 98, "column": 14},
                                                    "identifierName": "$scope"
                                                },
                                                "name": "$scope",
                                                "leadingComments": null
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 2409,
                                                "end": 2413,
                                                "loc": {
                                                    "start": {"line": 98, "column": 15},
                                                    "end": {"line": 98, "column": 19},
                                                    "identifierName": "data"
                                                },
                                                "name": "data"
                                            },
                                            "computed": false,
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 2414,
                                            "end": 2423,
                                            "loc": {
                                                "start": {"line": 98, "column": 20},
                                                "end": {"line": 98, "column": 29},
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
                                    "start": 2373,
                                    "end": 2393,
                                    "loc": {"start": {"line": 97, "column": 8}, "end": {"line": 97, "column": 28}}
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
        "value": "单个变量申明",
        "start": 301,
        "end": 309,
        "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "多个变量申明， 包括函数",
        "start": 365,
        "end": 379,
        "loc": {"start": {"line": 20, "column": 8}, "end": {"line": 20, "column": 22}}
    }, {
        "type": "CommentLine",
        "value": "函数直接申明",
        "start": 597,
        "end": 605,
        "loc": {"start": {"line": 30, "column": 8}, "end": {"line": 30, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "对象",
        "start": 695,
        "end": 699,
        "loc": {"start": {"line": 33, "column": 12}, "end": {"line": 33, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "scope函数初始化",
        "start": 1603,
        "end": 1615,
        "loc": {"start": {"line": 63, "column": 8}, "end": {"line": 63, "column": 20}}
    }, {
        "type": "CommentLine",
        "value": "scope多级初始化函数",
        "start": 1714,
        "end": 1728,
        "loc": {"start": {"line": 68, "column": 8}, "end": {"line": 68, "column": 22}}
    }, {
        "type": "CommentBlock",
        "value": "*\n         * 表达式\n         ",
        "start": 2106,
        "end": 2136,
        "loc": {"start": {"line": 84, "column": 8}, "end": {"line": 86, "column": 11}}
    }, {
        "type": "CommentLine",
        "value": "直接调用",
        "start": 2238,
        "end": 2244,
        "loc": {"start": {"line": 91, "column": 8}, "end": {"line": 91, "column": 14}}
    }, {
        "type": "CommentLine",
        "value": "调用",
        "start": 2272,
        "end": 2276,
        "loc": {"start": {"line": 93, "column": 8}, "end": {"line": 93, "column": 12}}
    }, {
        "type": "CommentLine",
        "value": " this.scopeFun2();",
        "start": 2373,
        "end": 2393,
        "loc": {"start": {"line": 97, "column": 8}, "end": {"line": 97, "column": 28}}
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
            "label": "name",
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
        "start": 275,
        "end": 284,
        "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 17}}
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
        "start": 285,
        "end": 286,
        "loc": {"start": {"line": 17, "column": 18}, "end": {"line": 17, "column": 19}}
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
        "start": 287,
        "end": 291,
        "loc": {"start": {"line": 17, "column": 20}, "end": {"line": 17, "column": 24}}
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
        }, "start": 291, "end": 292, "loc": {"start": {"line": 17, "column": 24}, "end": {"line": 17, "column": 25}}
    }, {
        "type": "CommentLine",
        "value": "单个变量申明",
        "start": 301,
        "end": 309,
        "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 16}}
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
        "start": 318,
        "end": 321,
        "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 11}}
    }, {
        "type": {
            "label": "name",
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
        "start": 322,
        "end": 336,
        "loc": {"start": {"line": 19, "column": 12}, "end": {"line": 19, "column": 26}}
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
        "start": 337,
        "end": 338,
        "loc": {"start": {"line": 19, "column": 27}, "end": {"line": 19, "column": 28}}
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
        "start": 339,
        "end": 355,
        "loc": {"start": {"line": 19, "column": 29}, "end": {"line": 19, "column": 45}}
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
        }, "start": 355, "end": 356, "loc": {"start": {"line": 19, "column": 45}, "end": {"line": 19, "column": 46}}
    }, {
        "type": "CommentLine",
        "value": "多个变量申明， 包括函数",
        "start": 365,
        "end": 379,
        "loc": {"start": {"line": 20, "column": 8}, "end": {"line": 20, "column": 22}}
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
        "start": 388,
        "end": 391,
        "loc": {"start": {"line": 21, "column": 8}, "end": {"line": 21, "column": 11}}
    }, {
        "type": {
            "label": "name",
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
        "start": 392,
        "end": 400,
        "loc": {"start": {"line": 21, "column": 12}, "end": {"line": 21, "column": 20}}
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
        }, "start": 400, "end": 401, "loc": {"start": {"line": 21, "column": 20}, "end": {"line": 21, "column": 21}}
    }, {
        "type": {
            "label": "name",
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
        "start": 414,
        "end": 422,
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
        "start": 423,
        "end": 424,
        "loc": {"start": {"line": 22, "column": 21}, "end": {"line": 22, "column": 22}}
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
        "start": 425,
        "end": 429,
        "loc": {"start": {"line": 22, "column": 23}, "end": {"line": 22, "column": 27}}
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
        }, "start": 429, "end": 430, "loc": {"start": {"line": 22, "column": 27}, "end": {"line": 22, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 443,
        "end": 451,
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
        "start": 452,
        "end": 453,
        "loc": {"start": {"line": 23, "column": 21}, "end": {"line": 23, "column": 22}}
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
        "start": 454,
        "end": 464,
        "loc": {"start": {"line": 23, "column": 23}, "end": {"line": 23, "column": 33}}
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
        }, "start": 464, "end": 465, "loc": {"start": {"line": 23, "column": 33}, "end": {"line": 23, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 478,
        "end": 485,
        "loc": {"start": {"line": 24, "column": 12}, "end": {"line": 24, "column": 19}}
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
        "start": 486,
        "end": 487,
        "loc": {"start": {"line": 24, "column": 20}, "end": {"line": 24, "column": 21}}
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
        "start": 488,
        "end": 496,
        "loc": {"start": {"line": 24, "column": 22}, "end": {"line": 24, "column": 30}}
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
        }, "start": 497, "end": 498, "loc": {"start": {"line": 24, "column": 31}, "end": {"line": 24, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 498,
        "end": 504,
        "loc": {"start": {"line": 24, "column": 32}, "end": {"line": 24, "column": 38}}
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
        }, "start": 504, "end": 505, "loc": {"start": {"line": 24, "column": 38}, "end": {"line": 24, "column": 39}}
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
        }, "start": 506, "end": 507, "loc": {"start": {"line": 24, "column": 40}, "end": {"line": 24, "column": 41}}
    }, {
        "type": {
            "label": "name",
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
        "start": 524,
        "end": 531,
        "loc": {"start": {"line": 25, "column": 16}, "end": {"line": 25, "column": 23}}
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
        }, "start": 531, "end": 532, "loc": {"start": {"line": 25, "column": 23}, "end": {"line": 25, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 532,
        "end": 535,
        "loc": {"start": {"line": 25, "column": 24}, "end": {"line": 25, "column": 27}}
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
        }, "start": 535, "end": 536, "loc": {"start": {"line": 25, "column": 27}, "end": {"line": 25, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 536,
        "end": 542,
        "loc": {"start": {"line": 25, "column": 28}, "end": {"line": 25, "column": 34}}
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
        }, "start": 542, "end": 543, "loc": {"start": {"line": 25, "column": 34}, "end": {"line": 25, "column": 35}}
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
        }, "start": 556, "end": 557, "loc": {"start": {"line": 26, "column": 12}, "end": {"line": 26, "column": 13}}
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
        }, "start": 557, "end": 558, "loc": {"start": {"line": 26, "column": 13}, "end": {"line": 26, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 571,
        "end": 579,
        "loc": {"start": {"line": 27, "column": 12}, "end": {"line": 27, "column": 20}}
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
        "start": 580,
        "end": 581,
        "loc": {"start": {"line": 27, "column": 21}, "end": {"line": 27, "column": 22}}
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
        "start": 582,
        "end": 585,
        "loc": {"start": {"line": 27, "column": 23}, "end": {"line": 27, "column": 26}}
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
        }, "start": 585, "end": 586, "loc": {"start": {"line": 27, "column": 26}, "end": {"line": 27, "column": 27}}
    }, {
        "type": "CommentLine",
        "value": "函数直接申明",
        "start": 597,
        "end": 605,
        "loc": {"start": {"line": 30, "column": 8}, "end": {"line": 30, "column": 16}}
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
        "value": "singleFun",
        "start": 618,
        "end": 627,
        "loc": {"start": {"line": 31, "column": 12}, "end": {"line": 31, "column": 21}}
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
        "start": 628,
        "end": 629,
        "loc": {"start": {"line": 31, "column": 22}, "end": {"line": 31, "column": 23}}
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
        "start": 630,
        "end": 638,
        "loc": {"start": {"line": 31, "column": 24}, "end": {"line": 31, "column": 32}}
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
        }, "start": 639, "end": 640, "loc": {"start": {"line": 31, "column": 33}, "end": {"line": 31, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 640,
        "end": 646,
        "loc": {"start": {"line": 31, "column": 34}, "end": {"line": 31, "column": 40}}
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
        }, "start": 646, "end": 647, "loc": {"start": {"line": 31, "column": 40}, "end": {"line": 31, "column": 41}}
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
        }, "start": 648, "end": 649, "loc": {"start": {"line": 31, "column": 42}, "end": {"line": 31, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 662,
        "end": 669,
        "loc": {"start": {"line": 32, "column": 12}, "end": {"line": 32, "column": 19}}
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
        }, "start": 669, "end": 670, "loc": {"start": {"line": 32, "column": 19}, "end": {"line": 32, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 670,
        "end": 673,
        "loc": {"start": {"line": 32, "column": 20}, "end": {"line": 32, "column": 23}}
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
        }, "start": 673, "end": 674, "loc": {"start": {"line": 32, "column": 23}, "end": {"line": 32, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 674,
        "end": 680,
        "loc": {"start": {"line": 32, "column": 24}, "end": {"line": 32, "column": 30}}
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
        }, "start": 680, "end": 681, "loc": {"start": {"line": 32, "column": 30}, "end": {"line": 32, "column": 31}}
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
        }, "start": 681, "end": 682, "loc": {"start": {"line": 32, "column": 31}, "end": {"line": 32, "column": 32}}
    }, {
        "type": "CommentLine",
        "value": "对象",
        "start": 695,
        "end": 699,
        "loc": {"start": {"line": 33, "column": 12}, "end": {"line": 33, "column": 16}}
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
        "start": 712,
        "end": 715,
        "loc": {"start": {"line": 34, "column": 12}, "end": {"line": 34, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 716,
        "end": 719,
        "loc": {"start": {"line": 34, "column": 16}, "end": {"line": 34, "column": 19}}
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
        "start": 720,
        "end": 721,
        "loc": {"start": {"line": 34, "column": 20}, "end": {"line": 34, "column": 21}}
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
        }, "start": 722, "end": 723, "loc": {"start": {"line": 34, "column": 22}, "end": {"line": 34, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 740,
        "end": 747,
        "loc": {"start": {"line": 35, "column": 16}, "end": {"line": 35, "column": 23}}
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
        }, "start": 747, "end": 748, "loc": {"start": {"line": 35, "column": 23}, "end": {"line": 35, "column": 24}}
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
        "start": 749,
        "end": 758,
        "loc": {"start": {"line": 35, "column": 25}, "end": {"line": 35, "column": 34}}
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
        }, "start": 758, "end": 759, "loc": {"start": {"line": 35, "column": 34}, "end": {"line": 35, "column": 35}}
    }, {
        "type": {
            "label": "name",
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
        "start": 776,
        "end": 783,
        "loc": {"start": {"line": 36, "column": 16}, "end": {"line": 36, "column": 23}}
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
        }, "start": 783, "end": 784, "loc": {"start": {"line": 36, "column": 23}, "end": {"line": 36, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 784,
        "end": 790,
        "loc": {"start": {"line": 36, "column": 24}, "end": {"line": 36, "column": 30}}
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
        }, "start": 790, "end": 791, "loc": {"start": {"line": 36, "column": 30}, "end": {"line": 36, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 792,
        "end": 798,
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
        }, "start": 798, "end": 799, "loc": {"start": {"line": 36, "column": 38}, "end": {"line": 36, "column": 39}}
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
        }, "start": 799, "end": 800, "loc": {"start": {"line": 36, "column": 39}, "end": {"line": 36, "column": 40}}
    }, {
        "type": {
            "label": "name",
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
        "start": 821,
        "end": 828,
        "loc": {"start": {"line": 37, "column": 20}, "end": {"line": 37, "column": 27}}
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
        }, "start": 828, "end": 829, "loc": {"start": {"line": 37, "column": 27}, "end": {"line": 37, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 829,
        "end": 832,
        "loc": {"start": {"line": 37, "column": 28}, "end": {"line": 37, "column": 31}}
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
        }, "start": 832, "end": 833, "loc": {"start": {"line": 37, "column": 31}, "end": {"line": 37, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 833,
        "end": 839,
        "loc": {"start": {"line": 37, "column": 32}, "end": {"line": 37, "column": 38}}
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
        }, "start": 839, "end": 840, "loc": {"start": {"line": 37, "column": 38}, "end": {"line": 37, "column": 39}}
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
        }, "start": 857, "end": 858, "loc": {"start": {"line": 38, "column": 16}, "end": {"line": 38, "column": 17}}
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
        }, "start": 858, "end": 859, "loc": {"start": {"line": 38, "column": 17}, "end": {"line": 38, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 876,
        "end": 883,
        "loc": {"start": {"line": 39, "column": 16}, "end": {"line": 39, "column": 23}}
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
        }, "start": 883, "end": 884, "loc": {"start": {"line": 39, "column": 23}, "end": {"line": 39, "column": 24}}
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
        "start": 885,
        "end": 893,
        "loc": {"start": {"line": 39, "column": 25}, "end": {"line": 39, "column": 33}}
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
        }, "start": 894, "end": 895, "loc": {"start": {"line": 39, "column": 34}, "end": {"line": 39, "column": 35}}
    }, {
        "type": {
            "label": "name",
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
        "start": 895,
        "end": 901,
        "loc": {"start": {"line": 39, "column": 35}, "end": {"line": 39, "column": 41}}
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
        }, "start": 901, "end": 902, "loc": {"start": {"line": 39, "column": 41}, "end": {"line": 39, "column": 42}}
    }, {
        "type": {
            "label": "name",
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
        "start": 903,
        "end": 909,
        "loc": {"start": {"line": 39, "column": 43}, "end": {"line": 39, "column": 49}}
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
        }, "start": 909, "end": 910, "loc": {"start": {"line": 39, "column": 49}, "end": {"line": 39, "column": 50}}
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
        }, "start": 911, "end": 912, "loc": {"start": {"line": 39, "column": 51}, "end": {"line": 39, "column": 52}}
    }, {
        "type": {
            "label": "name",
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
        "start": 933,
        "end": 940,
        "loc": {"start": {"line": 40, "column": 20}, "end": {"line": 40, "column": 27}}
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
        }, "start": 940, "end": 941, "loc": {"start": {"line": 40, "column": 27}, "end": {"line": 40, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 941,
        "end": 944,
        "loc": {"start": {"line": 40, "column": 28}, "end": {"line": 40, "column": 31}}
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
        }, "start": 944, "end": 945, "loc": {"start": {"line": 40, "column": 31}, "end": {"line": 40, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 945,
        "end": 951,
        "loc": {"start": {"line": 40, "column": 32}, "end": {"line": 40, "column": 38}}
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
        }, "start": 951, "end": 952, "loc": {"start": {"line": 40, "column": 38}, "end": {"line": 40, "column": 39}}
    }, {
        "type": {
            "label": "name",
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
        "start": 953,
        "end": 959,
        "loc": {"start": {"line": 40, "column": 40}, "end": {"line": 40, "column": 46}}
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
        }, "start": 959, "end": 960, "loc": {"start": {"line": 40, "column": 46}, "end": {"line": 40, "column": 47}}
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
        }, "start": 960, "end": 961, "loc": {"start": {"line": 40, "column": 47}, "end": {"line": 40, "column": 48}}
    }, {
        "type": {
            "label": "name",
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
        "start": 982,
        "end": 990,
        "loc": {"start": {"line": 41, "column": 20}, "end": {"line": 41, "column": 28}}
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
        "start": 991,
        "end": 992,
        "loc": {"start": {"line": 41, "column": 29}, "end": {"line": 41, "column": 30}}
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
        "start": 993,
        "end": 995,
        "loc": {"start": {"line": 41, "column": 31}, "end": {"line": 41, "column": 33}}
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
        }, "start": 995, "end": 996, "loc": {"start": {"line": 41, "column": 33}, "end": {"line": 41, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1017,
        "end": 1023,
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
        }, "start": 1023, "end": 1024, "loc": {"start": {"line": 42, "column": 26}, "end": {"line": 42, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1024,
        "end": 1028,
        "loc": {"start": {"line": 42, "column": 27}, "end": {"line": 42, "column": 31}}
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
        }, "start": 1028, "end": 1029, "loc": {"start": {"line": 42, "column": 31}, "end": {"line": 42, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1029,
        "end": 1037,
        "loc": {"start": {"line": 42, "column": 32}, "end": {"line": 42, "column": 40}}
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
        "start": 1038,
        "end": 1039,
        "loc": {"start": {"line": 42, "column": 41}, "end": {"line": 42, "column": 42}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1040,
        "end": 1048,
        "loc": {"start": {"line": 42, "column": 43}, "end": {"line": 42, "column": 51}}
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
        }, "start": 1048, "end": 1049, "loc": {"start": {"line": 42, "column": 51}, "end": {"line": 42, "column": 52}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1070,
        "end": 1076,
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
        }, "start": 1076, "end": 1077, "loc": {"start": {"line": 43, "column": 26}, "end": {"line": 43, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1077,
        "end": 1081,
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
        }, "start": 1081, "end": 1082, "loc": {"start": {"line": 43, "column": 31}, "end": {"line": 43, "column": 32}}
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
        "start": 1082,
        "end": 1092,
        "loc": {"start": {"line": 43, "column": 32}, "end": {"line": 43, "column": 42}}
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
        }, "start": 1092, "end": 1093, "loc": {"start": {"line": 43, "column": 42}, "end": {"line": 43, "column": 43}}
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
        "start": 1094,
        "end": 1095,
        "loc": {"start": {"line": 43, "column": 44}, "end": {"line": 43, "column": 45}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1096,
        "end": 1104,
        "loc": {"start": {"line": 43, "column": 46}, "end": {"line": 43, "column": 54}}
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
        }, "start": 1104, "end": 1105, "loc": {"start": {"line": 43, "column": 54}, "end": {"line": 43, "column": 55}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1126,
        "end": 1132,
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
        }, "start": 1132, "end": 1133, "loc": {"start": {"line": 44, "column": 26}, "end": {"line": 44, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1133,
        "end": 1137,
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
        }, "start": 1137, "end": 1138, "loc": {"start": {"line": 44, "column": 31}, "end": {"line": 44, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1138,
        "end": 1146,
        "loc": {"start": {"line": 44, "column": 32}, "end": {"line": 44, "column": 40}}
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
        }, "start": 1146, "end": 1147, "loc": {"start": {"line": 44, "column": 40}, "end": {"line": 44, "column": 41}}
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
        "start": 1148,
        "end": 1149,
        "loc": {"start": {"line": 44, "column": 42}, "end": {"line": 44, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1150,
        "end": 1158,
        "loc": {"start": {"line": 44, "column": 44}, "end": {"line": 44, "column": 52}}
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
        }, "start": 1158, "end": 1159, "loc": {"start": {"line": 44, "column": 52}, "end": {"line": 44, "column": 53}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1180,
        "end": 1186,
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
        }, "start": 1186, "end": 1187, "loc": {"start": {"line": 45, "column": 26}, "end": {"line": 45, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1187,
        "end": 1191,
        "loc": {"start": {"line": 45, "column": 27}, "end": {"line": 45, "column": 31}}
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
        }, "start": 1191, "end": 1192, "loc": {"start": {"line": 45, "column": 31}, "end": {"line": 45, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "loc": {"start": {"line": 45, "column": 32}, "end": {"line": 45, "column": 40}}
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
        }, "start": 1200, "end": 1201, "loc": {"start": {"line": 45, "column": 40}, "end": {"line": 45, "column": 41}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1201,
        "end": 1214,
        "loc": {"start": {"line": 45, "column": 41}, "end": {"line": 45, "column": 54}}
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
        }, "start": 1214, "end": 1215, "loc": {"start": {"line": 45, "column": 54}, "end": {"line": 45, "column": 55}}
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
        "start": 1216,
        "end": 1217,
        "loc": {"start": {"line": 45, "column": 56}, "end": {"line": 45, "column": 57}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1218,
        "end": 1226,
        "loc": {"start": {"line": 45, "column": 58}, "end": {"line": 45, "column": 66}}
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
        }, "start": 1226, "end": 1227, "loc": {"start": {"line": 45, "column": 66}, "end": {"line": 45, "column": 67}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1248,
        "end": 1254,
        "loc": {"start": {"line": 46, "column": 20}, "end": {"line": 46, "column": 26}}
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
        }, "start": 1254, "end": 1255, "loc": {"start": {"line": 46, "column": 26}, "end": {"line": 46, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1255,
        "end": 1259,
        "loc": {"start": {"line": 46, "column": 27}, "end": {"line": 46, "column": 31}}
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
        }, "start": 1259, "end": 1260, "loc": {"start": {"line": 46, "column": 31}, "end": {"line": 46, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1260,
        "end": 1268,
        "loc": {"start": {"line": 46, "column": 32}, "end": {"line": 46, "column": 40}}
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
        "start": 1269,
        "end": 1270,
        "loc": {"start": {"line": 46, "column": 41}, "end": {"line": 46, "column": 42}}
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
        "start": 1271,
        "end": 1281,
        "loc": {"start": {"line": 46, "column": 43}, "end": {"line": 46, "column": 53}}
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
        }, "start": 1281, "end": 1282, "loc": {"start": {"line": 46, "column": 53}, "end": {"line": 46, "column": 54}}
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
        "start": 1303,
        "end": 1306,
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
        "value": "unKnownValue",
        "start": 1307,
        "end": 1319,
        "loc": {"start": {"line": 47, "column": 24}, "end": {"line": 47, "column": 36}}
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
        "start": 1320,
        "end": 1321,
        "loc": {"start": {"line": 47, "column": 37}, "end": {"line": 47, "column": 38}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1322,
        "end": 1329,
        "loc": {"start": {"line": 47, "column": 39}, "end": {"line": 47, "column": 46}}
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
        }, "start": 1329, "end": 1330, "loc": {"start": {"line": 47, "column": 46}, "end": {"line": 47, "column": 47}}
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
        "start": 1351,
        "end": 1354,
        "loc": {"start": {"line": 48, "column": 20}, "end": {"line": 48, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1355,
        "end": 1368,
        "loc": {"start": {"line": 48, "column": 24}, "end": {"line": 48, "column": 37}}
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
        "start": 1369,
        "end": 1370,
        "loc": {"start": {"line": 48, "column": 38}, "end": {"line": 48, "column": 39}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1371,
        "end": 1377,
        "loc": {"start": {"line": 48, "column": 40}, "end": {"line": 48, "column": 46}}
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
        }, "start": 1377, "end": 1378, "loc": {"start": {"line": 48, "column": 46}, "end": {"line": 48, "column": 47}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1378,
        "end": 1385,
        "loc": {"start": {"line": 48, "column": 47}, "end": {"line": 48, "column": 54}}
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
        }, "start": 1385, "end": 1386, "loc": {"start": {"line": 48, "column": 54}, "end": {"line": 48, "column": 55}}
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
        }, "start": 1403, "end": 1404, "loc": {"start": {"line": 49, "column": 16}, "end": {"line": 49, "column": 17}}
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
        }, "start": 1404, "end": 1405, "loc": {"start": {"line": 49, "column": 17}, "end": {"line": 49, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1422,
        "end": 1429,
        "loc": {"start": {"line": 50, "column": 16}, "end": {"line": 50, "column": 23}}
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
        }, "start": 1429, "end": 1430, "loc": {"start": {"line": 50, "column": 23}, "end": {"line": 50, "column": 24}}
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
        }, "start": 1431, "end": 1432, "loc": {"start": {"line": 50, "column": 25}, "end": {"line": 50, "column": 26}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1432,
        "end": 1434,
        "loc": {"start": {"line": 50, "column": 26}, "end": {"line": 50, "column": 28}}
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
        }, "start": 1434, "end": 1435, "loc": {"start": {"line": 50, "column": 28}, "end": {"line": 50, "column": 29}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1436,
        "end": 1438,
        "loc": {"start": {"line": 50, "column": 30}, "end": {"line": 50, "column": 32}}
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
        }, "start": 1438, "end": 1439, "loc": {"start": {"line": 50, "column": 32}, "end": {"line": 50, "column": 33}}
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
        }, "start": 1440, "end": 1442, "loc": {"start": {"line": 50, "column": 34}, "end": {"line": 50, "column": 36}}
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
        }, "start": 1443, "end": 1444, "loc": {"start": {"line": 50, "column": 37}, "end": {"line": 50, "column": 38}}
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
        }, "start": 1462, "end": 1463, "loc": {"start": {"line": 52, "column": 16}, "end": {"line": 52, "column": 17}}
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
        }, "start": 1463, "end": 1464, "loc": {"start": {"line": 52, "column": 17}, "end": {"line": 52, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1481,
        "end": 1484,
        "loc": {"start": {"line": 53, "column": 16}, "end": {"line": 53, "column": 19}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1485,
        "end": 1490,
        "loc": {"start": {"line": 53, "column": 20}, "end": {"line": 53, "column": 25}}
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
        }, "start": 1490, "end": 1491, "loc": {"start": {"line": 53, "column": 25}, "end": {"line": 53, "column": 26}}
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
        }, "start": 1491, "end": 1492, "loc": {"start": {"line": 53, "column": 26}, "end": {"line": 53, "column": 27}}
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
        }, "start": 1493, "end": 1494, "loc": {"start": {"line": 53, "column": 28}, "end": {"line": 53, "column": 29}}
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
        }, "start": 1512, "end": 1513, "loc": {"start": {"line": 55, "column": 16}, "end": {"line": 55, "column": 17}}
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
        }, "start": 1513, "end": 1514, "loc": {"start": {"line": 55, "column": 17}, "end": {"line": 55, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1531,
        "end": 1534,
        "loc": {"start": {"line": 56, "column": 16}, "end": {"line": 56, "column": 19}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1535,
        "end": 1540,
        "loc": {"start": {"line": 56, "column": 20}, "end": {"line": 56, "column": 25}}
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
        }, "start": 1540, "end": 1541, "loc": {"start": {"line": 56, "column": 25}, "end": {"line": 56, "column": 26}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1541,
        "end": 1546,
        "loc": {"start": {"line": 56, "column": 26}, "end": {"line": 56, "column": 31}}
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
        }, "start": 1546, "end": 1547, "loc": {"start": {"line": 56, "column": 31}, "end": {"line": 56, "column": 32}}
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
        }, "start": 1548, "end": 1549, "loc": {"start": {"line": 56, "column": 33}, "end": {"line": 56, "column": 34}}
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
        }, "start": 1567, "end": 1568, "loc": {"start": {"line": 58, "column": 16}, "end": {"line": 58, "column": 17}}
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
        }, "start": 1581, "end": 1582, "loc": {"start": {"line": 59, "column": 12}, "end": {"line": 59, "column": 13}}
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
        }, "start": 1592, "end": 1593, "loc": {"start": {"line": 61, "column": 8}, "end": {"line": 61, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "scope函数初始化",
        "start": 1603,
        "end": 1615,
        "loc": {"start": {"line": 63, "column": 8}, "end": {"line": 63, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1624,
        "end": 1630,
        "loc": {"start": {"line": 64, "column": 8}, "end": {"line": 64, "column": 14}}
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
        }, "start": 1630, "end": 1631, "loc": {"start": {"line": 64, "column": 14}, "end": {"line": 64, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1631,
        "end": 1639,
        "loc": {"start": {"line": 64, "column": 15}, "end": {"line": 64, "column": 23}}
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
        "start": 1640,
        "end": 1641,
        "loc": {"start": {"line": 64, "column": 24}, "end": {"line": 64, "column": 25}}
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
        "start": 1642,
        "end": 1650,
        "loc": {"start": {"line": 64, "column": 26}, "end": {"line": 64, "column": 34}}
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
        }, "start": 1651, "end": 1652, "loc": {"start": {"line": 64, "column": 35}, "end": {"line": 64, "column": 36}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1652,
        "end": 1658,
        "loc": {"start": {"line": 64, "column": 36}, "end": {"line": 64, "column": 42}}
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
        }, "start": 1658, "end": 1659, "loc": {"start": {"line": 64, "column": 42}, "end": {"line": 64, "column": 43}}
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
        }, "start": 1660, "end": 1661, "loc": {"start": {"line": 64, "column": 44}, "end": {"line": 64, "column": 45}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1674,
        "end": 1681,
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
        }, "start": 1681, "end": 1682, "loc": {"start": {"line": 65, "column": 19}, "end": {"line": 65, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1682,
        "end": 1685,
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
        }, "start": 1685, "end": 1686, "loc": {"start": {"line": 65, "column": 23}, "end": {"line": 65, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1686,
        "end": 1692,
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
        }, "start": 1692, "end": 1693, "loc": {"start": {"line": 65, "column": 30}, "end": {"line": 65, "column": 31}}
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
        }, "start": 1702, "end": 1703, "loc": {"start": {"line": 66, "column": 8}, "end": {"line": 66, "column": 9}}
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
        }, "start": 1703, "end": 1704, "loc": {"start": {"line": 66, "column": 9}, "end": {"line": 66, "column": 10}}
    }, {
        "type": "CommentLine",
        "value": "scope多级初始化函数",
        "start": 1714,
        "end": 1728,
        "loc": {"start": {"line": 68, "column": 8}, "end": {"line": 68, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1737,
        "end": 1743,
        "loc": {"start": {"line": 69, "column": 8}, "end": {"line": 69, "column": 14}}
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
        }, "start": 1743, "end": 1744, "loc": {"start": {"line": 69, "column": 14}, "end": {"line": 69, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1744,
        "end": 1748,
        "loc": {"start": {"line": 69, "column": 15}, "end": {"line": 69, "column": 19}}
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
        }, "start": 1748, "end": 1749, "loc": {"start": {"line": 69, "column": 19}, "end": {"line": 69, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1749,
        "end": 1751,
        "loc": {"start": {"line": 69, "column": 20}, "end": {"line": 69, "column": 22}}
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
        }, "start": 1751, "end": 1752, "loc": {"start": {"line": 69, "column": 22}, "end": {"line": 69, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1752,
        "end": 1761,
        "loc": {"start": {"line": 69, "column": 23}, "end": {"line": 69, "column": 32}}
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
        "start": 1762,
        "end": 1763,
        "loc": {"start": {"line": 69, "column": 33}, "end": {"line": 69, "column": 34}}
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
        "start": 1764,
        "end": 1772,
        "loc": {"start": {"line": 69, "column": 35}, "end": {"line": 69, "column": 43}}
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
        }, "start": 1773, "end": 1774, "loc": {"start": {"line": 69, "column": 44}, "end": {"line": 69, "column": 45}}
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
        }, "start": 1774, "end": 1775, "loc": {"start": {"line": 69, "column": 45}, "end": {"line": 69, "column": 46}}
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
        }, "start": 1776, "end": 1777, "loc": {"start": {"line": 69, "column": 47}, "end": {"line": 69, "column": 48}}
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
        "start": 1791,
        "end": 1794,
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
        "value": "subFun2",
        "start": 1795,
        "end": 1802,
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
        "start": 1803,
        "end": 1804,
        "loc": {"start": {"line": 71, "column": 24}, "end": {"line": 71, "column": 25}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1805,
        "end": 1813,
        "loc": {"start": {"line": 71, "column": 26}, "end": {"line": 71, "column": 34}}
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
        }, "start": 1813, "end": 1814, "loc": {"start": {"line": 71, "column": 34}, "end": {"line": 71, "column": 35}}
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
        "start": 1827,
        "end": 1830,
        "loc": {"start": {"line": 72, "column": 12}, "end": {"line": 72, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1831,
        "end": 1838,
        "loc": {"start": {"line": 72, "column": 16}, "end": {"line": 72, "column": 23}}
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
        "start": 1839,
        "end": 1840,
        "loc": {"start": {"line": 72, "column": 24}, "end": {"line": 72, "column": 25}}
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
        "start": 1841,
        "end": 1849,
        "loc": {"start": {"line": 72, "column": 26}, "end": {"line": 72, "column": 34}}
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
        }, "start": 1850, "end": 1851, "loc": {"start": {"line": 72, "column": 35}, "end": {"line": 72, "column": 36}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1851,
        "end": 1857,
        "loc": {"start": {"line": 72, "column": 36}, "end": {"line": 72, "column": 42}}
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
        }, "start": 1857, "end": 1858, "loc": {"start": {"line": 72, "column": 42}, "end": {"line": 72, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1859,
        "end": 1865,
        "loc": {"start": {"line": 72, "column": 44}, "end": {"line": 72, "column": 50}}
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
        }, "start": 1865, "end": 1866, "loc": {"start": {"line": 72, "column": 50}, "end": {"line": 72, "column": 51}}
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
        }, "start": 1867, "end": 1868, "loc": {"start": {"line": 72, "column": 52}, "end": {"line": 72, "column": 53}}
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
        }, "start": 1882, "end": 1883, "loc": {"start": {"line": 74, "column": 12}, "end": {"line": 74, "column": 13}}
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
        }, "start": 1883, "end": 1884, "loc": {"start": {"line": 74, "column": 13}, "end": {"line": 74, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1897,
        "end": 1904,
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
        }, "start": 1904, "end": 1905, "loc": {"start": {"line": 75, "column": 19}, "end": {"line": 75, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1905,
        "end": 1912,
        "loc": {"start": {"line": 75, "column": 20}, "end": {"line": 75, "column": 27}}
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
        }, "start": 1912, "end": 1913, "loc": {"start": {"line": 75, "column": 27}, "end": {"line": 75, "column": 28}}
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
        }, "start": 1913, "end": 1914, "loc": {"start": {"line": 75, "column": 28}, "end": {"line": 75, "column": 29}}
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
        }, "start": 1914, "end": 1915, "loc": {"start": {"line": 75, "column": 29}, "end": {"line": 75, "column": 30}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1915,
        "end": 1920,
        "loc": {"start": {"line": 75, "column": 30}, "end": {"line": 75, "column": 35}}
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
        }, "start": 1920, "end": 1921, "loc": {"start": {"line": 75, "column": 35}, "end": {"line": 75, "column": 36}}
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
        }, "start": 1921, "end": 1922, "loc": {"start": {"line": 75, "column": 36}, "end": {"line": 75, "column": 37}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1935,
        "end": 1942,
        "loc": {"start": {"line": 76, "column": 12}, "end": {"line": 76, "column": 19}}
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
        }, "start": 1942, "end": 1943, "loc": {"start": {"line": 76, "column": 19}, "end": {"line": 76, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1943,
        "end": 1951,
        "loc": {"start": {"line": 76, "column": 20}, "end": {"line": 76, "column": 28}}
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
        }, "start": 1951, "end": 1952, "loc": {"start": {"line": 76, "column": 28}, "end": {"line": 76, "column": 29}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1952,
        "end": 1965,
        "loc": {"start": {"line": 76, "column": 29}, "end": {"line": 76, "column": 42}}
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
        }, "start": 1965, "end": 1966, "loc": {"start": {"line": 76, "column": 42}, "end": {"line": 76, "column": 43}}
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
        }, "start": 1966, "end": 1967, "loc": {"start": {"line": 76, "column": 43}, "end": {"line": 76, "column": 44}}
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
        "start": 1980,
        "end": 1988,
        "loc": {"start": {"line": 77, "column": 12}, "end": {"line": 77, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1989,
        "end": 1997,
        "loc": {"start": {"line": 77, "column": 21}, "end": {"line": 77, "column": 29}}
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
        }, "start": 1997, "end": 1998, "loc": {"start": {"line": 77, "column": 29}, "end": {"line": 77, "column": 30}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1998,
        "end": 2004,
        "loc": {"start": {"line": 77, "column": 30}, "end": {"line": 77, "column": 36}}
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
        }, "start": 2004, "end": 2005, "loc": {"start": {"line": 77, "column": 36}, "end": {"line": 77, "column": 37}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2006,
        "end": 2012,
        "loc": {"start": {"line": 77, "column": 38}, "end": {"line": 77, "column": 44}}
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
        }, "start": 2012, "end": 2013, "loc": {"start": {"line": 77, "column": 44}, "end": {"line": 77, "column": 45}}
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
        }, "start": 2014, "end": 2015, "loc": {"start": {"line": 77, "column": 46}, "end": {"line": 77, "column": 47}}
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
        }, "start": 2029, "end": 2030, "loc": {"start": {"line": 79, "column": 12}, "end": {"line": 79, "column": 13}}
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
        "start": 2043,
        "end": 2046,
        "loc": {"start": {"line": 80, "column": 12}, "end": {"line": 80, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2047,
        "end": 2058,
        "loc": {"start": {"line": 80, "column": 16}, "end": {"line": 80, "column": 27}}
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
        "start": 2059,
        "end": 2060,
        "loc": {"start": {"line": 80, "column": 28}, "end": {"line": 80, "column": 29}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2061,
        "end": 2069,
        "loc": {"start": {"line": 80, "column": 30}, "end": {"line": 80, "column": 38}}
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
        }, "start": 2069, "end": 2070, "loc": {"start": {"line": 80, "column": 38}, "end": {"line": 80, "column": 39}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2070,
        "end": 2083,
        "loc": {"start": {"line": 80, "column": 39}, "end": {"line": 80, "column": 52}}
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
        }, "start": 2083, "end": 2084, "loc": {"start": {"line": 80, "column": 52}, "end": {"line": 80, "column": 53}}
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
        }, "start": 2094, "end": 2095, "loc": {"start": {"line": 82, "column": 8}, "end": {"line": 82, "column": 9}}
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
        }, "start": 2095, "end": 2096, "loc": {"start": {"line": 82, "column": 9}, "end": {"line": 82, "column": 10}}
    }, {
        "type": "CommentBlock",
        "value": "*\n         * 表达式\n         ",
        "start": 2106,
        "end": 2136,
        "loc": {"start": {"line": 84, "column": 8}, "end": {"line": 86, "column": 11}}
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
        "start": 2145,
        "end": 2153,
        "loc": {"start": {"line": 87, "column": 8}, "end": {"line": 87, "column": 16}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2154,
        "end": 2160,
        "loc": {"start": {"line": 87, "column": 17}, "end": {"line": 87, "column": 23}}
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
        }, "start": 2160, "end": 2161, "loc": {"start": {"line": 87, "column": 23}, "end": {"line": 87, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2161,
        "end": 2167,
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
        }, "start": 2167, "end": 2168, "loc": {"start": {"line": 87, "column": 30}, "end": {"line": 87, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2169,
        "end": 2175,
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
        }, "start": 2175, "end": 2176, "loc": {"start": {"line": 87, "column": 38}, "end": {"line": 87, "column": 39}}
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
        }, "start": 2177, "end": 2178, "loc": {"start": {"line": 87, "column": 40}, "end": {"line": 87, "column": 41}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2191,
        "end": 2198,
        "loc": {"start": {"line": 88, "column": 12}, "end": {"line": 88, "column": 19}}
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
        }, "start": 2198, "end": 2199, "loc": {"start": {"line": 88, "column": 19}, "end": {"line": 88, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2199,
        "end": 2202,
        "loc": {"start": {"line": 88, "column": 20}, "end": {"line": 88, "column": 23}}
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
        }, "start": 2202, "end": 2203, "loc": {"start": {"line": 88, "column": 23}, "end": {"line": 88, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2203,
        "end": 2209,
        "loc": {"start": {"line": 88, "column": 24}, "end": {"line": 88, "column": 30}}
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
        }, "start": 2209, "end": 2210, "loc": {"start": {"line": 88, "column": 30}, "end": {"line": 88, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2211,
        "end": 2217,
        "loc": {"start": {"line": 88, "column": 32}, "end": {"line": 88, "column": 38}}
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
        }, "start": 2217, "end": 2218, "loc": {"start": {"line": 88, "column": 38}, "end": {"line": 88, "column": 39}}
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
        }, "start": 2227, "end": 2228, "loc": {"start": {"line": 89, "column": 8}, "end": {"line": 89, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "直接调用",
        "start": 2238,
        "end": 2244,
        "loc": {"start": {"line": 91, "column": 8}, "end": {"line": 91, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2253,
        "end": 2260,
        "loc": {"start": {"line": 92, "column": 8}, "end": {"line": 92, "column": 15}}
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
        }, "start": 2260, "end": 2261, "loc": {"start": {"line": 92, "column": 15}, "end": {"line": 92, "column": 16}}
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
        }, "start": 2261, "end": 2262, "loc": {"start": {"line": 92, "column": 16}, "end": {"line": 92, "column": 17}}
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
        }, "start": 2262, "end": 2263, "loc": {"start": {"line": 92, "column": 17}, "end": {"line": 92, "column": 18}}
    }, {
        "type": "CommentLine",
        "value": "调用",
        "start": 2272,
        "end": 2276,
        "loc": {"start": {"line": 93, "column": 8}, "end": {"line": 93, "column": 12}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2285,
        "end": 2291,
        "loc": {"start": {"line": 94, "column": 8}, "end": {"line": 94, "column": 14}}
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
        }, "start": 2291, "end": 2292, "loc": {"start": {"line": 94, "column": 14}, "end": {"line": 94, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2292,
        "end": 2300,
        "loc": {"start": {"line": 94, "column": 15}, "end": {"line": 94, "column": 23}}
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
        }, "start": 2300, "end": 2301, "loc": {"start": {"line": 94, "column": 23}, "end": {"line": 94, "column": 24}}
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
        "start": 2301,
        "end": 2309,
        "loc": {"start": {"line": 94, "column": 24}, "end": {"line": 94, "column": 32}}
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
        }, "start": 2310, "end": 2311, "loc": {"start": {"line": 94, "column": 33}, "end": {"line": 94, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2311,
        "end": 2317,
        "loc": {"start": {"line": 94, "column": 34}, "end": {"line": 94, "column": 40}}
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
        }, "start": 2317, "end": 2318, "loc": {"start": {"line": 94, "column": 40}, "end": {"line": 94, "column": 41}}
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
        }, "start": 2319, "end": 2320, "loc": {"start": {"line": 94, "column": 42}, "end": {"line": 94, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2333,
        "end": 2340,
        "loc": {"start": {"line": 95, "column": 12}, "end": {"line": 95, "column": 19}}
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
        }, "start": 2340, "end": 2341, "loc": {"start": {"line": 95, "column": 19}, "end": {"line": 95, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2341,
        "end": 2344,
        "loc": {"start": {"line": 95, "column": 20}, "end": {"line": 95, "column": 23}}
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
        }, "start": 2344, "end": 2345, "loc": {"start": {"line": 95, "column": 23}, "end": {"line": 95, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2345,
        "end": 2351,
        "loc": {"start": {"line": 95, "column": 24}, "end": {"line": 95, "column": 30}}
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
        }, "start": 2351, "end": 2352, "loc": {"start": {"line": 95, "column": 30}, "end": {"line": 95, "column": 31}}
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
        }, "start": 2361, "end": 2362, "loc": {"start": {"line": 96, "column": 8}, "end": {"line": 96, "column": 9}}
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
        }, "start": 2362, "end": 2363, "loc": {"start": {"line": 96, "column": 9}, "end": {"line": 96, "column": 10}}
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
        }, "start": 2363, "end": 2364, "loc": {"start": {"line": 96, "column": 10}, "end": {"line": 96, "column": 11}}
    }, {
        "type": "CommentLine",
        "value": " this.scopeFun2();",
        "start": 2373,
        "end": 2393,
        "loc": {"start": {"line": 97, "column": 8}, "end": {"line": 97, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2402,
        "end": 2408,
        "loc": {"start": {"line": 98, "column": 8}, "end": {"line": 98, "column": 14}}
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
        }, "start": 2408, "end": 2409, "loc": {"start": {"line": 98, "column": 14}, "end": {"line": 98, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2409,
        "end": 2413,
        "loc": {"start": {"line": 98, "column": 15}, "end": {"line": 98, "column": 19}}
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
        }, "start": 2413, "end": 2414, "loc": {"start": {"line": 98, "column": 19}, "end": {"line": 98, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2414,
        "end": 2423,
        "loc": {"start": {"line": 98, "column": 20}, "end": {"line": 98, "column": 29}}
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
        }, "start": 2423, "end": 2424, "loc": {"start": {"line": 98, "column": 29}, "end": {"line": 98, "column": 30}}
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
        }, "start": 2424, "end": 2425, "loc": {"start": {"line": 98, "column": 30}, "end": {"line": 98, "column": 31}}
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
        }, "start": 2425, "end": 2426, "loc": {"start": {"line": 98, "column": 31}, "end": {"line": 98, "column": 32}}
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
        }, "start": 2433, "end": 2434, "loc": {"start": {"line": 101, "column": 4}, "end": {"line": 101, "column": 5}}
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
        }, "start": 2434, "end": 2435, "loc": {"start": {"line": 101, "column": 5}, "end": {"line": 101, "column": 6}}
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
        }, "start": 2435, "end": 2436, "loc": {"start": {"line": 101, "column": 6}, "end": {"line": 101, "column": 7}}
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
        }, "start": 2436, "end": 2437, "loc": {"start": {"line": 101, "column": 7}, "end": {"line": 101, "column": 8}}
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
        }, "start": 2439, "end": 2439, "loc": {"start": {"line": 103, "column": 0}, "end": {"line": 103, "column": 0}}
    }]
}