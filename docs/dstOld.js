var a = {
    "type": "File",
    "start": 0,
    "end": 3930,
    "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 155, "column": 0}},
    "program": {
        "type": "Program",
        "start": 0,
        "end": 3930,
        "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 155, "column": 0}},
        "sourceType": "module",
        "body": [{
            "type": "ExpressionStatement",
            "start": 65,
            "end": 3928,
            "loc": {"start": {"line": 10, "column": 0}, "end": {"line": 153, "column": 8}},
            "expression": {
                "type": "CallExpression",
                "start": 65,
                "end": 3927,
                "loc": {"start": {"line": 10, "column": 0}, "end": {"line": 153, "column": 7}},
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
                    "end": 3926,
                    "loc": {"start": {"line": 10, "column": 34}, "end": {"line": 153, "column": 6}},
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
                        "end": 3925,
                        "loc": {"start": {"line": 11, "column": 4}, "end": {"line": 153, "column": 5}},
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
                            "end": 3925,
                            "loc": {"start": {"line": 11, "column": 29}, "end": {"line": 153, "column": 5}},
                            "body": [{
                                "type": "ExpressionStatement",
                                "start": 159,
                                "end": 172,
                                "loc": {"start": {"line": 13, "column": 8}, "end": {"line": 13, "column": 21}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 159,
                                    "end": 171,
                                    "loc": {"start": {"line": 13, "column": 8}, "end": {"line": 13, "column": 20}},
                                    "operator": "=",
                                    "left": {
                                        "type": "Identifier",
                                        "start": 159,
                                        "end": 164,
                                        "loc": {
                                            "start": {"line": 13, "column": 8},
                                            "end": {"line": 13, "column": 13},
                                            "identifierName": "gVar1"
                                        },
                                        "name": "gVar1"
                                    },
                                    "right": {
                                        "type": "StringLiteral",
                                        "start": 167,
                                        "end": 171,
                                        "loc": {"start": {"line": 13, "column": 16}, "end": {"line": 13, "column": 20}},
                                        "extra": {"rawValue": "12", "raw": "\"12\""},
                                        "value": "12"
                                    }
                                }
                            }, {
                                "type": "ExpressionStatement",
                                "start": 181,
                                "end": 225,
                                "loc": {"start": {"line": 14, "column": 8}, "end": {"line": 16, "column": 9}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 181,
                                    "end": 225,
                                    "loc": {"start": {"line": 14, "column": 8}, "end": {"line": 16, "column": 9}},
                                    "operator": "=",
                                    "left": {
                                        "type": "Identifier",
                                        "start": 181,
                                        "end": 186,
                                        "loc": {
                                            "start": {"line": 14, "column": 8},
                                            "end": {"line": 14, "column": 13},
                                            "identifierName": "gFun1"
                                        },
                                        "name": "gFun1"
                                    },
                                    "right": {
                                        "type": "FunctionExpression",
                                        "start": 189,
                                        "end": 225,
                                        "loc": {"start": {"line": 14, "column": 16}, "end": {"line": 16, "column": 9}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 201,
                                            "end": 225,
                                            "loc": {
                                                "start": {"line": 14, "column": 28},
                                                "end": {"line": 16, "column": 9}
                                            },
                                            "body": [],
                                            "directives": [],
                                            "leadingComments": null,
                                            "trailingComments": null
                                        },
                                        "trailingComments": null
                                    },
                                    "trailingComments": null
                                },
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope变量初始化",
                                    "start": 234,
                                    "end": 246,
                                    "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 20}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 255,
                                "end": 272,
                                "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 25}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 255,
                                    "end": 271,
                                    "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 24}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 255,
                                        "end": 266,
                                        "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 19}},
                                        "object": {
                                            "type": "Identifier",
                                            "start": 255,
                                            "end": 261,
                                            "loc": {
                                                "start": {"line": 18, "column": 8},
                                                "end": {"line": 18, "column": 14},
                                                "identifierName": "$scope"
                                            },
                                            "name": "$scope",
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 262,
                                            "end": 266,
                                            "loc": {
                                                "start": {"line": 18, "column": 15},
                                                "end": {"line": 18, "column": 19},
                                                "identifierName": "data"
                                            },
                                            "name": "data"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "ObjectExpression",
                                        "start": 269,
                                        "end": 271,
                                        "loc": {"start": {"line": 18, "column": 22}, "end": {"line": 18, "column": 24}},
                                        "properties": []
                                    },
                                    "leadingComments": null
                                },
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope变量初始化",
                                    "start": 234,
                                    "end": 246,
                                    "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 20}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "commment",
                                    "start": 272,
                                    "end": 282,
                                    "loc": {"start": {"line": 18, "column": 25}, "end": {"line": 18, "column": 35}}
                                }, {
                                    "type": "CommentLine",
                                    "value": "多级变量申明",
                                    "start": 291,
                                    "end": 299,
                                    "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 308,
                                "end": 341,
                                "loc": {"start": {"line": 20, "column": 8}, "end": {"line": 20, "column": 41}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 312,
                                    "end": 340,
                                    "loc": {"start": {"line": 20, "column": 12}, "end": {"line": 20, "column": 40}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 312,
                                        "end": 321,
                                        "loc": {
                                            "start": {"line": 20, "column": 12},
                                            "end": {"line": 20, "column": 21},
                                            "identifierName": "scopeData"
                                        },
                                        "name": "scopeData",
                                        "leadingComments": null
                                    },
                                    "init": {
                                        "type": "AssignmentExpression",
                                        "start": 324,
                                        "end": 340,
                                        "loc": {"start": {"line": 20, "column": 24}, "end": {"line": 20, "column": 40}},
                                        "operator": "=",
                                        "left": {
                                            "type": "MemberExpression",
                                            "start": 324,
                                            "end": 335,
                                            "loc": {
                                                "start": {"line": 20, "column": 24},
                                                "end": {"line": 20, "column": 35}
                                            },
                                            "object": {
                                                "type": "Identifier",
                                                "start": 324,
                                                "end": 330,
                                                "loc": {
                                                    "start": {"line": 20, "column": 24},
                                                    "end": {"line": 20, "column": 30},
                                                    "identifierName": "$scope"
                                                },
                                                "name": "$scope"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 331,
                                                "end": 335,
                                                "loc": {
                                                    "start": {"line": 20, "column": 31},
                                                    "end": {"line": 20, "column": 35},
                                                    "identifierName": "data"
                                                },
                                                "name": "data"
                                            },
                                            "computed": false
                                        },
                                        "right": {
                                            "type": "ObjectExpression",
                                            "start": 338,
                                            "end": 340,
                                            "loc": {
                                                "start": {"line": 20, "column": 38},
                                                "end": {"line": 20, "column": 40}
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
                                    "start": 272,
                                    "end": 282,
                                    "loc": {"start": {"line": 18, "column": 25}, "end": {"line": 18, "column": 35}}
                                }, {
                                    "type": "CommentLine",
                                    "value": "多级变量申明",
                                    "start": 291,
                                    "end": 299,
                                    "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 350,
                                "end": 377,
                                "loc": {"start": {"line": 21, "column": 8}, "end": {"line": 21, "column": 35}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 354,
                                    "end": 376,
                                    "loc": {"start": {"line": 21, "column": 12}, "end": {"line": 21, "column": 34}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 354,
                                        "end": 364,
                                        "loc": {
                                            "start": {"line": 21, "column": 12},
                                            "end": {"line": 21, "column": 22},
                                            "identifierName": "scopeData2"
                                        },
                                        "name": "scopeData2"
                                    },
                                    "init": {
                                        "type": "Identifier",
                                        "start": 367,
                                        "end": 376,
                                        "loc": {
                                            "start": {"line": 21, "column": 25},
                                            "end": {"line": 21, "column": 34},
                                            "identifierName": "scopeData"
                                        },
                                        "name": "scopeData"
                                    }
                                }],
                                "kind": "var",
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "this comment",
                                    "start": 386,
                                    "end": 400,
                                    "loc": {"start": {"line": 22, "column": 8}, "end": {"line": 22, "column": 22}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 409,
                                "end": 427,
                                "loc": {"start": {"line": 23, "column": 8}, "end": {"line": 23, "column": 26}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 409,
                                    "end": 426,
                                    "loc": {"start": {"line": 23, "column": 8}, "end": {"line": 23, "column": 25}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 409,
                                        "end": 419,
                                        "loc": {"start": {"line": 23, "column": 8}, "end": {"line": 23, "column": 18}},
                                        "object": {
                                            "type": "ThisExpression",
                                            "start": 409,
                                            "end": 413,
                                            "loc": {
                                                "start": {"line": 23, "column": 8},
                                                "end": {"line": 23, "column": 12}
                                            },
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 414,
                                            "end": 419,
                                            "loc": {
                                                "start": {"line": 23, "column": 13},
                                                "end": {"line": 23, "column": 18},
                                                "identifierName": "test1"
                                            },
                                            "name": "test1"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "StringLiteral",
                                        "start": 422,
                                        "end": 426,
                                        "loc": {"start": {"line": 23, "column": 21}, "end": {"line": 23, "column": 25}},
                                        "extra": {"rawValue": "12", "raw": "\"12\""},
                                        "value": "12"
                                    },
                                    "leadingComments": null
                                },
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "this comment",
                                    "start": 386,
                                    "end": 400,
                                    "loc": {"start": {"line": 22, "column": 8}, "end": {"line": 22, "column": 22}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "this comment1",
                                    "start": 427,
                                    "end": 442,
                                    "loc": {"start": {"line": 23, "column": 26}, "end": {"line": 23, "column": 41}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 451,
                                "end": 474,
                                "loc": {"start": {"line": 24, "column": 8}, "end": {"line": 24, "column": 31}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 451,
                                    "end": 473,
                                    "loc": {"start": {"line": 24, "column": 8}, "end": {"line": 24, "column": 30}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 451,
                                        "end": 461,
                                        "loc": {"start": {"line": 24, "column": 8}, "end": {"line": 24, "column": 18}},
                                        "object": {
                                            "type": "ThisExpression",
                                            "start": 451,
                                            "end": 455,
                                            "loc": {
                                                "start": {"line": 24, "column": 8},
                                                "end": {"line": 24, "column": 12}
                                            },
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 456,
                                            "end": 461,
                                            "loc": {
                                                "start": {"line": 24, "column": 13},
                                                "end": {"line": 24, "column": 18},
                                                "identifierName": "test1"
                                            },
                                            "name": "test1"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "start": 464,
                                        "end": 473,
                                        "loc": {
                                            "start": {"line": 24, "column": 21},
                                            "end": {"line": 24, "column": 30},
                                            "identifierName": "undefined"
                                        },
                                        "name": "undefined"
                                    },
                                    "leadingComments": null
                                },
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "this comment1",
                                    "start": 427,
                                    "end": 442,
                                    "loc": {"start": {"line": 23, "column": 26}, "end": {"line": 23, "column": 41}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": " this.test2 = function () {",
                                    "start": 483,
                                    "end": 512,
                                    "loc": {"start": {"line": 25, "column": 8}, "end": {"line": 25, "column": 37}}
                                }, {
                                    "type": "CommentLine",
                                    "value": " }",
                                    "start": 522,
                                    "end": 526,
                                    "loc": {"start": {"line": 27, "column": 8}, "end": {"line": 27, "column": 12}}
                                }, {
                                    "type": "CommentLine",
                                    "value": "变量赋值",
                                    "start": 535,
                                    "end": 541,
                                    "loc": {"start": {"line": 28, "column": 8}, "end": {"line": 28, "column": 14}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 550,
                                "end": 593,
                                "loc": {"start": {"line": 29, "column": 8}, "end": {"line": 29, "column": 51}},
                                "expression": {
                                    "type": "SequenceExpression",
                                    "start": 550,
                                    "end": 592,
                                    "loc": {"start": {"line": 29, "column": 8}, "end": {"line": 29, "column": 50}},
                                    "expressions": [{
                                        "type": "AssignmentExpression",
                                        "start": 550,
                                        "end": 578,
                                        "loc": {"start": {"line": 29, "column": 8}, "end": {"line": 29, "column": 36}},
                                        "operator": "=",
                                        "left": {
                                            "type": "MemberExpression",
                                            "start": 550,
                                            "end": 563,
                                            "loc": {
                                                "start": {"line": 29, "column": 8},
                                                "end": {"line": 29, "column": 21}
                                            },
                                            "object": {
                                                "type": "Identifier",
                                                "start": 550,
                                                "end": 559,
                                                "loc": {
                                                    "start": {"line": 29, "column": 8},
                                                    "end": {"line": 29, "column": 17},
                                                    "identifierName": "scopeData"
                                                },
                                                "name": "scopeData",
                                                "leadingComments": null
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 560,
                                                "end": 563,
                                                "loc": {
                                                    "start": {"line": 29, "column": 18},
                                                    "end": {"line": 29, "column": 21},
                                                    "identifierName": "ccc"
                                                },
                                                "name": "ccc"
                                            },
                                            "computed": false,
                                            "leadingComments": null
                                        },
                                        "right": {
                                            "type": "FunctionExpression",
                                            "start": 566,
                                            "end": 578,
                                            "loc": {
                                                "start": {"line": 29, "column": 24},
                                                "end": {"line": 29, "column": 36}
                                            },
                                            "id": null,
                                            "generator": false,
                                            "expression": false,
                                            "async": false,
                                            "params": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "start": 576,
                                                "end": 578,
                                                "loc": {
                                                    "start": {"line": 29, "column": 34},
                                                    "end": {"line": 29, "column": 36}
                                                },
                                                "body": [],
                                                "directives": []
                                            }
                                        },
                                        "leadingComments": null
                                    }, {
                                        "type": "AssignmentExpression",
                                        "start": 579,
                                        "end": 592,
                                        "loc": {"start": {"line": 29, "column": 37}, "end": {"line": 29, "column": 50}},
                                        "operator": "=",
                                        "left": {
                                            "type": "Identifier",
                                            "start": 579,
                                            "end": 589,
                                            "loc": {
                                                "start": {"line": 29, "column": 37},
                                                "end": {"line": 29, "column": 47},
                                                "identifierName": "scopeData2"
                                            },
                                            "name": "scopeData2"
                                        },
                                        "right": {
                                            "type": "NumericLiteral",
                                            "start": 590,
                                            "end": 592,
                                            "loc": {
                                                "start": {"line": 29, "column": 48},
                                                "end": {"line": 29, "column": 50}
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
                                    "start": 483,
                                    "end": 512,
                                    "loc": {"start": {"line": 25, "column": 8}, "end": {"line": 25, "column": 37}}
                                }, {
                                    "type": "CommentLine",
                                    "value": " }",
                                    "start": 522,
                                    "end": 526,
                                    "loc": {"start": {"line": 27, "column": 8}, "end": {"line": 27, "column": 12}}
                                }, {
                                    "type": "CommentLine",
                                    "value": "变量赋值",
                                    "start": 535,
                                    "end": 541,
                                    "loc": {"start": {"line": 28, "column": 8}, "end": {"line": 28, "column": 14}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "单个变量申明",
                                    "start": 602,
                                    "end": 610,
                                    "loc": {"start": {"line": 30, "column": 8}, "end": {"line": 30, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 619,
                                "end": 657,
                                "loc": {"start": {"line": 31, "column": 8}, "end": {"line": 31, "column": 46}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 623,
                                    "end": 656,
                                    "loc": {"start": {"line": 31, "column": 12}, "end": {"line": 31, "column": 45}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 623,
                                        "end": 637,
                                        "loc": {
                                            "start": {"line": 31, "column": 12},
                                            "end": {"line": 31, "column": 26},
                                            "identifierName": "singleVariable"
                                        },
                                        "name": "singleVariable",
                                        "leadingComments": null
                                    },
                                    "init": {
                                        "type": "StringLiteral",
                                        "start": 640,
                                        "end": 656,
                                        "loc": {"start": {"line": 31, "column": 29}, "end": {"line": 31, "column": 45}},
                                        "extra": {"rawValue": "singleVariable", "raw": "'singleVariable'"},
                                        "value": "singleVariable"
                                    },
                                    "leadingComments": null
                                }],
                                "kind": "var",
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "单个变量申明",
                                    "start": 602,
                                    "end": 610,
                                    "loc": {"start": {"line": 30, "column": 8}, "end": {"line": 30, "column": 16}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "多个变量申明， 包括函数",
                                    "start": 666,
                                    "end": 680,
                                    "loc": {"start": {"line": 32, "column": 8}, "end": {"line": 32, "column": 22}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 689,
                                "end": 933,
                                "loc": {"start": {"line": 33, "column": 8}, "end": {"line": 40, "column": 39}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 693,
                                    "end": 701,
                                    "loc": {"start": {"line": 33, "column": 12}, "end": {"line": 33, "column": 20}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 693,
                                        "end": 701,
                                        "loc": {
                                            "start": {"line": 33, "column": 12},
                                            "end": {"line": 33, "column": 20},
                                            "identifierName": "mutiVar1"
                                        },
                                        "name": "mutiVar1",
                                        "leadingComments": null
                                    },
                                    "init": null,
                                    "leadingComments": null
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 715,
                                    "end": 730,
                                    "loc": {"start": {"line": 34, "column": 12}, "end": {"line": 34, "column": 27}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 715,
                                        "end": 723,
                                        "loc": {
                                            "start": {"line": 34, "column": 12},
                                            "end": {"line": 34, "column": 20},
                                            "identifierName": "mutiVar2"
                                        },
                                        "name": "mutiVar2"
                                    },
                                    "init": {
                                        "type": "NullLiteral",
                                        "start": 726,
                                        "end": 730,
                                        "loc": {"start": {"line": 34, "column": 23}, "end": {"line": 34, "column": 27}}
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 744,
                                    "end": 765,
                                    "loc": {"start": {"line": 35, "column": 12}, "end": {"line": 35, "column": 33}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 744,
                                        "end": 752,
                                        "loc": {
                                            "start": {"line": 35, "column": 12},
                                            "end": {"line": 35, "column": 20},
                                            "identifierName": "mutiVar3"
                                        },
                                        "name": "mutiVar3"
                                    },
                                    "init": {
                                        "type": "StringLiteral",
                                        "start": 755,
                                        "end": 765,
                                        "loc": {"start": {"line": 35, "column": 23}, "end": {"line": 35, "column": 33}},
                                        "extra": {"rawValue": "mutiVar3", "raw": "\"mutiVar3\""},
                                        "value": "mutiVar3"
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 779,
                                    "end": 858,
                                    "loc": {"start": {"line": 36, "column": 12}, "end": {"line": 38, "column": 13}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 779,
                                        "end": 786,
                                        "loc": {
                                            "start": {"line": 36, "column": 12},
                                            "end": {"line": 36, "column": 19},
                                            "identifierName": "mutiFun"
                                        },
                                        "name": "mutiFun"
                                    },
                                    "init": {
                                        "type": "FunctionExpression",
                                        "start": 789,
                                        "end": 858,
                                        "loc": {"start": {"line": 36, "column": 22}, "end": {"line": 38, "column": 13}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 799,
                                            "end": 805,
                                            "loc": {
                                                "start": {"line": 36, "column": 32},
                                                "end": {"line": 36, "column": 38},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 807,
                                            "end": 858,
                                            "loc": {
                                                "start": {"line": 36, "column": 40},
                                                "end": {"line": 38, "column": 13}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 825,
                                                "end": 844,
                                                "loc": {
                                                    "start": {"line": 37, "column": 16},
                                                    "end": {"line": 37, "column": 35}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 825,
                                                    "end": 844,
                                                    "loc": {
                                                        "start": {"line": 37, "column": 16},
                                                        "end": {"line": 37, "column": 35}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 825,
                                                        "end": 836,
                                                        "loc": {
                                                            "start": {"line": 37, "column": 16},
                                                            "end": {"line": 37, "column": 27}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 825,
                                                            "end": 832,
                                                            "loc": {
                                                                "start": {"line": 37, "column": 16},
                                                                "end": {"line": 37, "column": 23},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 833,
                                                            "end": 836,
                                                            "loc": {
                                                                "start": {"line": 37, "column": 24},
                                                                "end": {"line": 37, "column": 27},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 837,
                                                        "end": 843,
                                                        "loc": {
                                                            "start": {"line": 37, "column": 28},
                                                            "end": {"line": 37, "column": 34},
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
                                    "start": 872,
                                    "end": 892,
                                    "loc": {"start": {"line": 39, "column": 12}, "end": {"line": 39, "column": 32}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 872,
                                        "end": 880,
                                        "loc": {
                                            "start": {"line": 39, "column": 12},
                                            "end": {"line": 39, "column": 20},
                                            "identifierName": "mutiVar4"
                                        },
                                        "name": "mutiVar4"
                                    },
                                    "init": {
                                        "type": "Identifier",
                                        "start": 883,
                                        "end": 892,
                                        "loc": {
                                            "start": {"line": 39, "column": 23},
                                            "end": {"line": 39, "column": 32},
                                            "identifierName": "scopeData"
                                        },
                                        "name": "scopeData"
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 906,
                                    "end": 932,
                                    "loc": {"start": {"line": 40, "column": 12}, "end": {"line": 40, "column": 38}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 906,
                                        "end": 914,
                                        "loc": {
                                            "start": {"line": 40, "column": 12},
                                            "end": {"line": 40, "column": 20},
                                            "identifierName": "mutiVar5"
                                        },
                                        "name": "mutiVar5"
                                    },
                                    "init": {
                                        "type": "CallExpression",
                                        "start": 917,
                                        "end": 932,
                                        "loc": {"start": {"line": 40, "column": 23}, "end": {"line": 40, "column": 38}},
                                        "callee": {
                                            "type": "MemberExpression",
                                            "start": 917,
                                            "end": 930,
                                            "loc": {
                                                "start": {"line": 40, "column": 23},
                                                "end": {"line": 40, "column": 36}
                                            },
                                            "object": {
                                                "type": "Identifier",
                                                "start": 917,
                                                "end": 922,
                                                "loc": {
                                                    "start": {"line": 40, "column": 23},
                                                    "end": {"line": 40, "column": 28},
                                                    "identifierName": "cache"
                                                },
                                                "name": "cache"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 923,
                                                "end": 930,
                                                "loc": {
                                                    "start": {"line": 40, "column": 29},
                                                    "end": {"line": 40, "column": 36},
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
                                    "start": 666,
                                    "end": 680,
                                    "loc": {"start": {"line": 32, "column": 8}, "end": {"line": 32, "column": 22}}
                                }]
                            }, {
                                "type": "IfStatement",
                                "start": 943,
                                "end": 1031,
                                "loc": {"start": {"line": 42, "column": 8}, "end": {"line": 45, "column": 9}},
                                "test": {
                                    "type": "Identifier",
                                    "start": 947,
                                    "end": 955,
                                    "loc": {
                                        "start": {"line": 42, "column": 12},
                                        "end": {"line": 42, "column": 20},
                                        "identifierName": "mutiVar1"
                                    },
                                    "name": "mutiVar1"
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "start": 957,
                                    "end": 1031,
                                    "loc": {"start": {"line": 42, "column": 22}, "end": {"line": 45, "column": 9}},
                                    "body": [{
                                        "type": "VariableDeclaration",
                                        "start": 971,
                                        "end": 986,
                                        "loc": {"start": {"line": 43, "column": 12}, "end": {"line": 43, "column": 27}},
                                        "declarations": [{
                                            "type": "VariableDeclarator",
                                            "start": 975,
                                            "end": 985,
                                            "loc": {
                                                "start": {"line": 43, "column": 16},
                                                "end": {"line": 43, "column": 26}
                                            },
                                            "id": {
                                                "type": "Identifier",
                                                "start": 975,
                                                "end": 981,
                                                "loc": {
                                                    "start": {"line": 43, "column": 16},
                                                    "end": {"line": 43, "column": 22},
                                                    "identifierName": "ifVar1"
                                                },
                                                "name": "ifVar1"
                                            },
                                            "init": {
                                                "type": "NumericLiteral",
                                                "start": 984,
                                                "end": 985,
                                                "loc": {
                                                    "start": {"line": 43, "column": 25},
                                                    "end": {"line": 43, "column": 26}
                                                },
                                                "extra": {"rawValue": 1, "raw": "1"},
                                                "value": 1
                                            }
                                        }],
                                        "kind": "var"
                                    }, {
                                        "type": "VariableDeclaration",
                                        "start": 999,
                                        "end": 1021,
                                        "loc": {"start": {"line": 44, "column": 12}, "end": {"line": 44, "column": 34}},
                                        "declarations": [{
                                            "type": "VariableDeclarator",
                                            "start": 1003,
                                            "end": 1020,
                                            "loc": {
                                                "start": {"line": 44, "column": 16},
                                                "end": {"line": 44, "column": 33}
                                            },
                                            "id": {
                                                "type": "Identifier",
                                                "start": 1003,
                                                "end": 1009,
                                                "loc": {
                                                    "start": {"line": 44, "column": 16},
                                                    "end": {"line": 44, "column": 22},
                                                    "identifierName": "ifVar2"
                                                },
                                                "name": "ifVar2"
                                            },
                                            "init": {
                                                "type": "Identifier",
                                                "start": 1012,
                                                "end": 1020,
                                                "loc": {
                                                    "start": {"line": 44, "column": 25},
                                                    "end": {"line": 44, "column": 33},
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
                                "start": 1041,
                                "end": 1605,
                                "loc": {"start": {"line": 47, "column": 8}, "end": {"line": 65, "column": 9}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 1045,
                                    "end": 1605,
                                    "loc": {"start": {"line": 47, "column": 12}, "end": {"line": 65, "column": 9}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 1045,
                                        "end": 1051,
                                        "loc": {
                                            "start": {"line": 47, "column": 12},
                                            "end": {"line": 47, "column": 18},
                                            "identifierName": "objVar"
                                        },
                                        "name": "objVar"
                                    },
                                    "init": {
                                        "type": "ObjectExpression",
                                        "start": 1054,
                                        "end": 1605,
                                        "loc": {"start": {"line": 47, "column": 21}, "end": {"line": 65, "column": 9}},
                                        "properties": [{
                                            "type": "ObjectProperty",
                                            "start": 1068,
                                            "end": 1086,
                                            "loc": {
                                                "start": {"line": 48, "column": 12},
                                                "end": {"line": 48, "column": 30}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1068,
                                                "end": 1075,
                                                "loc": {
                                                    "start": {"line": 48, "column": 12},
                                                    "end": {"line": 48, "column": 19},
                                                    "identifierName": "objVar1"
                                                },
                                                "name": "objVar1"
                                            },
                                            "value": {
                                                "type": "StringLiteral",
                                                "start": 1077,
                                                "end": 1086,
                                                "loc": {
                                                    "start": {"line": 48, "column": 21},
                                                    "end": {"line": 48, "column": 30}
                                                },
                                                "extra": {"rawValue": "objVar1", "raw": "\"objVar1\""},
                                                "value": "objVar1"
                                            }
                                        }, {
                                            "type": "ObjectProperty",
                                            "start": 1100,
                                            "end": 1118,
                                            "loc": {
                                                "start": {"line": 49, "column": 12},
                                                "end": {"line": 49, "column": 30}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1100,
                                                "end": 1107,
                                                "loc": {
                                                    "start": {"line": 49, "column": 12},
                                                    "end": {"line": 49, "column": 19},
                                                    "identifierName": "objVar2"
                                                },
                                                "name": "objVar2"
                                            },
                                            "value": {
                                                "type": "Identifier",
                                                "start": 1109,
                                                "end": 1118,
                                                "loc": {
                                                    "start": {"line": 49, "column": 21},
                                                    "end": {"line": 49, "column": 30},
                                                    "identifierName": "scopeData"
                                                },
                                                "name": "scopeData"
                                            }
                                        }, {
                                            "type": "ObjectProperty",
                                            "start": 1132,
                                            "end": 1255,
                                            "loc": {
                                                "start": {"line": 50, "column": 12},
                                                "end": {"line": 53, "column": 13}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1132,
                                                "end": 1139,
                                                "loc": {
                                                    "start": {"line": 50, "column": 12},
                                                    "end": {"line": 50, "column": 19},
                                                    "identifierName": "objVar3"
                                                },
                                                "name": "objVar3"
                                            },
                                            "value": {
                                                "type": "FunctionExpression",
                                                "start": 1141,
                                                "end": 1255,
                                                "loc": {
                                                    "start": {"line": 50, "column": 21},
                                                    "end": {"line": 53, "column": 13}
                                                },
                                                "id": null,
                                                "generator": false,
                                                "expression": false,
                                                "async": false,
                                                "params": [{
                                                    "type": "Identifier",
                                                    "start": 1151,
                                                    "end": 1157,
                                                    "loc": {
                                                        "start": {"line": 50, "column": 31},
                                                        "end": {"line": 50, "column": 37},
                                                        "identifierName": "param1"
                                                    },
                                                    "name": "param1"
                                                }, {
                                                    "type": "Identifier",
                                                    "start": 1159,
                                                    "end": 1165,
                                                    "loc": {
                                                        "start": {"line": 50, "column": 39},
                                                        "end": {"line": 50, "column": 45},
                                                        "identifierName": "param2"
                                                    },
                                                    "name": "param2"
                                                }],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "start": 1167,
                                                    "end": 1255,
                                                    "loc": {
                                                        "start": {"line": 50, "column": 47},
                                                        "end": {"line": 53, "column": 13}
                                                    },
                                                    "body": [{
                                                        "type": "ExpressionStatement",
                                                        "start": 1185,
                                                        "end": 1203,
                                                        "loc": {
                                                            "start": {"line": 51, "column": 16},
                                                            "end": {"line": 51, "column": 34}
                                                        },
                                                        "expression": {
                                                            "type": "AssignmentExpression",
                                                            "start": 1185,
                                                            "end": 1202,
                                                            "loc": {
                                                                "start": {"line": 51, "column": 16},
                                                                "end": {"line": 51, "column": 33}
                                                            },
                                                            "operator": "=",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "start": 1185,
                                                                "end": 1191,
                                                                "loc": {
                                                                    "start": {"line": 51, "column": 16},
                                                                    "end": {"line": 51, "column": 22},
                                                                    "identifierName": "param1"
                                                                },
                                                                "name": "param1"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "start": 1194,
                                                                "end": 1202,
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
                                                        "start": 1220,
                                                        "end": 1241,
                                                        "loc": {
                                                            "start": {"line": 52, "column": 16},
                                                            "end": {"line": 52, "column": 37}
                                                        },
                                                        "expression": {
                                                            "type": "AssignmentExpression",
                                                            "start": 1220,
                                                            "end": 1240,
                                                            "loc": {
                                                                "start": {"line": 52, "column": 16},
                                                                "end": {"line": 52, "column": 36}
                                                            },
                                                            "operator": "=",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "start": 1220,
                                                                "end": 1226,
                                                                "loc": {
                                                                    "start": {"line": 52, "column": 16},
                                                                    "end": {"line": 52, "column": 22},
                                                                    "identifierName": "param2"
                                                                },
                                                                "name": "param2"
                                                            },
                                                            "right": {
                                                                "type": "MemberExpression",
                                                                "start": 1229,
                                                                "end": 1240,
                                                                "loc": {
                                                                    "start": {"line": 52, "column": 25},
                                                                    "end": {"line": 52, "column": 36}
                                                                },
                                                                "object": {
                                                                    "type": "Identifier",
                                                                    "start": 1229,
                                                                    "end": 1235,
                                                                    "loc": {
                                                                        "start": {"line": 52, "column": 25},
                                                                        "end": {"line": 52, "column": 31},
                                                                        "identifierName": "$scope"
                                                                    },
                                                                    "name": "$scope"
                                                                },
                                                                "property": {
                                                                    "type": "Identifier",
                                                                    "start": 1236,
                                                                    "end": 1240,
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
                                                    }],
                                                    "directives": []
                                                }
                                            }
                                        }, {
                                            "type": "ObjectMethod",
                                            "start": 1269,
                                            "end": 1413,
                                            "loc": {
                                                "start": {"line": 54, "column": 12},
                                                "end": {"line": 58, "column": 13}
                                            },
                                            "method": true,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1269,
                                                "end": 1276,
                                                "loc": {
                                                    "start": {"line": 54, "column": 12},
                                                    "end": {"line": 54, "column": 19},
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
                                                "start": 1277,
                                                "end": 1283,
                                                "loc": {
                                                    "start": {"line": 54, "column": 20},
                                                    "end": {"line": 54, "column": 26},
                                                    "identifierName": "param1"
                                                },
                                                "name": "param1"
                                            }, {
                                                "type": "Identifier",
                                                "start": 1285,
                                                "end": 1291,
                                                "loc": {
                                                    "start": {"line": 54, "column": 28},
                                                    "end": {"line": 54, "column": 34},
                                                    "identifierName": "param2"
                                                },
                                                "name": "param2"
                                            }],
                                            "body": {
                                                "type": "BlockStatement",
                                                "start": 1292,
                                                "end": 1413,
                                                "loc": {
                                                    "start": {"line": 54, "column": 35},
                                                    "end": {"line": 58, "column": 13}
                                                },
                                                "body": [{
                                                    "type": "ExpressionStatement",
                                                    "start": 1310,
                                                    "end": 1328,
                                                    "loc": {
                                                        "start": {"line": 55, "column": 16},
                                                        "end": {"line": 55, "column": 34}
                                                    },
                                                    "expression": {
                                                        "type": "AssignmentExpression",
                                                        "start": 1310,
                                                        "end": 1327,
                                                        "loc": {
                                                            "start": {"line": 55, "column": 16},
                                                            "end": {"line": 55, "column": 33}
                                                        },
                                                        "operator": "=",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "start": 1310,
                                                            "end": 1316,
                                                            "loc": {
                                                                "start": {"line": 55, "column": 16},
                                                                "end": {"line": 55, "column": 22},
                                                                "identifierName": "param1"
                                                            },
                                                            "name": "param1"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "start": 1319,
                                                            "end": 1327,
                                                            "loc": {
                                                                "start": {"line": 55, "column": 25},
                                                                "end": {"line": 55, "column": 33},
                                                                "identifierName": "mutiVar1"
                                                            },
                                                            "name": "mutiVar1"
                                                        }
                                                    }
                                                }, {
                                                    "type": "ExpressionStatement",
                                                    "start": 1345,
                                                    "end": 1366,
                                                    "loc": {
                                                        "start": {"line": 56, "column": 16},
                                                        "end": {"line": 56, "column": 37}
                                                    },
                                                    "expression": {
                                                        "type": "AssignmentExpression",
                                                        "start": 1345,
                                                        "end": 1365,
                                                        "loc": {
                                                            "start": {"line": 56, "column": 16},
                                                            "end": {"line": 56, "column": 36}
                                                        },
                                                        "operator": "=",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "start": 1345,
                                                            "end": 1351,
                                                            "loc": {
                                                                "start": {"line": 56, "column": 16},
                                                                "end": {"line": 56, "column": 22},
                                                                "identifierName": "param2"
                                                            },
                                                            "name": "param2"
                                                        },
                                                        "right": {
                                                            "type": "MemberExpression",
                                                            "start": 1354,
                                                            "end": 1365,
                                                            "loc": {
                                                                "start": {"line": 56, "column": 25},
                                                                "end": {"line": 56, "column": 36}
                                                            },
                                                            "object": {
                                                                "type": "Identifier",
                                                                "start": 1354,
                                                                "end": 1360,
                                                                "loc": {
                                                                    "start": {"line": 56, "column": 25},
                                                                    "end": {"line": 56, "column": 31},
                                                                    "identifierName": "$scope"
                                                                },
                                                                "name": "$scope"
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "start": 1361,
                                                                "end": 1365,
                                                                "loc": {
                                                                    "start": {"line": 56, "column": 32},
                                                                    "end": {"line": 56, "column": 36},
                                                                    "identifierName": "data"
                                                                },
                                                                "name": "data"
                                                            },
                                                            "computed": false
                                                        }
                                                    }
                                                }, {
                                                    "type": "ReturnStatement",
                                                    "start": 1383,
                                                    "end": 1399,
                                                    "loc": {
                                                        "start": {"line": 57, "column": 16},
                                                        "end": {"line": 57, "column": 32}
                                                    },
                                                    "argument": {
                                                        "type": "Identifier",
                                                        "start": 1390,
                                                        "end": 1398,
                                                        "loc": {
                                                            "start": {"line": 57, "column": 23},
                                                            "end": {"line": 57, "column": 31},
                                                            "identifierName": "mutiVar2"
                                                        },
                                                        "name": "mutiVar2"
                                                    }
                                                }],
                                                "directives": []
                                            }
                                        }, {
                                            "type": "ObjectMethod",
                                            "start": 1427,
                                            "end": 1512,
                                            "loc": {
                                                "start": {"line": 59, "column": 12},
                                                "end": {"line": 61, "column": 13}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1431,
                                                "end": 1436,
                                                "loc": {
                                                    "start": {"line": 59, "column": 16},
                                                    "end": {"line": 59, "column": 21},
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
                                                "start": 1439,
                                                "end": 1512,
                                                "loc": {
                                                    "start": {"line": 59, "column": 24},
                                                    "end": {"line": 61, "column": 13}
                                                },
                                                "body": [{
                                                    "type": "ReturnStatement",
                                                    "start": 1457,
                                                    "end": 1498,
                                                    "loc": {
                                                        "start": {"line": 60, "column": 16},
                                                        "end": {"line": 60, "column": 57}
                                                    },
                                                    "argument": {
                                                        "type": "SequenceExpression",
                                                        "start": 1464,
                                                        "end": 1497,
                                                        "loc": {
                                                            "start": {"line": 60, "column": 23},
                                                            "end": {"line": 60, "column": 56}
                                                        },
                                                        "expressions": [{
                                                            "type": "Identifier",
                                                            "start": 1464,
                                                            "end": 1472,
                                                            "loc": {
                                                                "start": {"line": 60, "column": 23},
                                                                "end": {"line": 60, "column": 31},
                                                                "identifierName": "mutiVar2"
                                                            },
                                                            "name": "mutiVar2"
                                                        }, {
                                                            "type": "Identifier",
                                                            "start": 1473,
                                                            "end": 1481,
                                                            "loc": {
                                                                "start": {"line": 60, "column": 32},
                                                                "end": {"line": 60, "column": 40},
                                                                "identifierName": "mutiVar1"
                                                            },
                                                            "name": "mutiVar1"
                                                        }, {
                                                            "type": "MemberExpression",
                                                            "start": 1483,
                                                            "end": 1497,
                                                            "loc": {
                                                                "start": {"line": 60, "column": 42},
                                                                "end": {"line": 60, "column": 56}
                                                            },
                                                            "object": {
                                                                "type": "Identifier",
                                                                "start": 1483,
                                                                "end": 1492,
                                                                "loc": {
                                                                    "start": {"line": 60, "column": 42},
                                                                    "end": {"line": 60, "column": 51},
                                                                    "identifierName": "scopeData"
                                                                },
                                                                "name": "scopeData"
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "start": 1493,
                                                                "end": 1497,
                                                                "loc": {
                                                                    "start": {"line": 60, "column": 52},
                                                                    "end": {"line": 60, "column": 56},
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
                                            "start": 1526,
                                            "end": 1595,
                                            "loc": {
                                                "start": {"line": 62, "column": 12},
                                                "end": {"line": 64, "column": 13}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1530,
                                                "end": 1535,
                                                "loc": {
                                                    "start": {"line": 62, "column": 16},
                                                    "end": {"line": 62, "column": 21},
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
                                                "start": 1536,
                                                "end": 1541,
                                                "loc": {
                                                    "start": {"line": 62, "column": 22},
                                                    "end": {"line": 62, "column": 27},
                                                    "identifierName": "value"
                                                },
                                                "name": "value"
                                            }],
                                            "body": {
                                                "type": "BlockStatement",
                                                "start": 1543,
                                                "end": 1595,
                                                "loc": {
                                                    "start": {"line": 62, "column": 29},
                                                    "end": {"line": 64, "column": 13}
                                                },
                                                "body": [{
                                                    "type": "ExpressionStatement",
                                                    "start": 1561,
                                                    "end": 1581,
                                                    "loc": {
                                                        "start": {"line": 63, "column": 16},
                                                        "end": {"line": 63, "column": 36}
                                                    },
                                                    "expression": {
                                                        "type": "AssignmentExpression",
                                                        "start": 1561,
                                                        "end": 1581,
                                                        "loc": {
                                                            "start": {"line": 63, "column": 16},
                                                            "end": {"line": 63, "column": 36}
                                                        },
                                                        "operator": "=",
                                                        "left": {
                                                            "type": "MemberExpression",
                                                            "start": 1561,
                                                            "end": 1573,
                                                            "loc": {
                                                                "start": {"line": 63, "column": 16},
                                                                "end": {"line": 63, "column": 28}
                                                            },
                                                            "object": {
                                                                "type": "ThisExpression",
                                                                "start": 1561,
                                                                "end": 1565,
                                                                "loc": {
                                                                    "start": {"line": 63, "column": 16},
                                                                    "end": {"line": 63, "column": 20}
                                                                }
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "start": 1566,
                                                                "end": 1573,
                                                                "loc": {
                                                                    "start": {"line": 63, "column": 21},
                                                                    "end": {"line": 63, "column": 28},
                                                                    "identifierName": "objVar1"
                                                                },
                                                                "name": "objVar1"
                                                            },
                                                            "computed": false
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "start": 1576,
                                                            "end": 1581,
                                                            "loc": {
                                                                "start": {"line": 63, "column": 31},
                                                                "end": {"line": 63, "column": 36},
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
                                    "start": 1615,
                                    "end": 1623,
                                    "loc": {"start": {"line": 67, "column": 8}, "end": {"line": 67, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 1632,
                                "end": 2918,
                                "loc": {"start": {"line": 68, "column": 8}, "end": {"line": 104, "column": 9}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 1636,
                                    "end": 2918,
                                    "loc": {"start": {"line": 68, "column": 12}, "end": {"line": 104, "column": 9}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 1636,
                                        "end": 1645,
                                        "loc": {
                                            "start": {"line": 68, "column": 12},
                                            "end": {"line": 68, "column": 21},
                                            "identifierName": "singleFun"
                                        },
                                        "name": "singleFun",
                                        "leadingComments": null
                                    },
                                    "init": {
                                        "type": "FunctionExpression",
                                        "start": 1648,
                                        "end": 2918,
                                        "loc": {"start": {"line": 68, "column": 24}, "end": {"line": 104, "column": 9}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 1658,
                                            "end": 1664,
                                            "loc": {
                                                "start": {"line": 68, "column": 34},
                                                "end": {"line": 68, "column": 40},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 1666,
                                            "end": 2918,
                                            "loc": {
                                                "start": {"line": 68, "column": 42},
                                                "end": {"line": 104, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 1680,
                                                "end": 1700,
                                                "loc": {
                                                    "start": {"line": 69, "column": 12},
                                                    "end": {"line": 69, "column": 32}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 1680,
                                                    "end": 1699,
                                                    "loc": {
                                                        "start": {"line": 69, "column": 12},
                                                        "end": {"line": 69, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 1680,
                                                        "end": 1691,
                                                        "loc": {
                                                            "start": {"line": 69, "column": 12},
                                                            "end": {"line": 69, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 1680,
                                                            "end": 1687,
                                                            "loc": {
                                                                "start": {"line": 69, "column": 12},
                                                                "end": {"line": 69, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 1688,
                                                            "end": 1691,
                                                            "loc": {
                                                                "start": {"line": 69, "column": 20},
                                                                "end": {"line": 69, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 1692,
                                                        "end": 1698,
                                                        "loc": {
                                                            "start": {"line": 69, "column": 24},
                                                            "end": {"line": 69, "column": 30},
                                                            "identifierName": "param1"
                                                        },
                                                        "name": "param1"
                                                    }]
                                                },
                                                "trailingComments": [{
                                                    "type": "CommentLine",
                                                    "value": "对象",
                                                    "start": 1713,
                                                    "end": 1717,
                                                    "loc": {
                                                        "start": {"line": 70, "column": 12},
                                                        "end": {"line": 70, "column": 16}
                                                    }
                                                }]
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 1730,
                                                "end": 2907,
                                                "loc": {
                                                    "start": {"line": 71, "column": 12},
                                                    "end": {"line": 102, "column": 13}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 1734,
                                                    "end": 2907,
                                                    "loc": {
                                                        "start": {"line": 71, "column": 16},
                                                        "end": {"line": 102, "column": 13}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 1734,
                                                        "end": 1737,
                                                        "loc": {
                                                            "start": {"line": 71, "column": 16},
                                                            "end": {"line": 71, "column": 19},
                                                            "identifierName": "obj"
                                                        },
                                                        "name": "obj",
                                                        "leadingComments": null
                                                    },
                                                    "init": {
                                                        "type": "ObjectExpression",
                                                        "start": 1740,
                                                        "end": 2907,
                                                        "loc": {
                                                            "start": {"line": 71, "column": 22},
                                                            "end": {"line": 102, "column": 13}
                                                        },
                                                        "properties": [{
                                                            "type": "ObjectProperty",
                                                            "start": 1758,
                                                            "end": 1776,
                                                            "loc": {
                                                                "start": {"line": 72, "column": 16},
                                                                "end": {"line": 72, "column": 34}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1758,
                                                                "end": 1765,
                                                                "loc": {
                                                                    "start": {"line": 72, "column": 16},
                                                                    "end": {"line": 72, "column": 23},
                                                                    "identifierName": "objVar1"
                                                                },
                                                                "name": "objVar1"
                                                            },
                                                            "value": {
                                                                "type": "StringLiteral",
                                                                "start": 1767,
                                                                "end": 1776,
                                                                "loc": {
                                                                    "start": {"line": 72, "column": 25},
                                                                    "end": {"line": 72, "column": 34}
                                                                },
                                                                "extra": {"rawValue": "objVar1", "raw": "\"objVar1\""},
                                                                "value": "objVar1"
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 1794,
                                                            "end": 1876,
                                                            "loc": {
                                                                "start": {"line": 73, "column": 16},
                                                                "end": {"line": 75, "column": 17}
                                                            },
                                                            "method": true,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1794,
                                                                "end": 1801,
                                                                "loc": {
                                                                    "start": {"line": 73, "column": 16},
                                                                    "end": {"line": 73, "column": 23},
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
                                                                "start": 1802,
                                                                "end": 1808,
                                                                "loc": {
                                                                    "start": {"line": 73, "column": 24},
                                                                    "end": {"line": 73, "column": 30},
                                                                    "identifierName": "param1"
                                                                },
                                                                "name": "param1"
                                                            }, {
                                                                "type": "Identifier",
                                                                "start": 1810,
                                                                "end": 1816,
                                                                "loc": {
                                                                    "start": {"line": 73, "column": 32},
                                                                    "end": {"line": 73, "column": 38},
                                                                    "identifierName": "param2"
                                                                },
                                                                "name": "param2"
                                                            }],
                                                            "body": {
                                                                "type": "BlockStatement",
                                                                "start": 1817,
                                                                "end": 1876,
                                                                "loc": {
                                                                    "start": {"line": 73, "column": 39},
                                                                    "end": {"line": 75, "column": 17}
                                                                },
                                                                "body": [{
                                                                    "type": "ExpressionStatement",
                                                                    "start": 1839,
                                                                    "end": 1858,
                                                                    "loc": {
                                                                        "start": {"line": 74, "column": 20},
                                                                        "end": {"line": 74, "column": 39}
                                                                    },
                                                                    "expression": {
                                                                        "type": "CallExpression",
                                                                        "start": 1839,
                                                                        "end": 1858,
                                                                        "loc": {
                                                                            "start": {"line": 74, "column": 20},
                                                                            "end": {"line": 74, "column": 39}
                                                                        },
                                                                        "callee": {
                                                                            "type": "MemberExpression",
                                                                            "start": 1839,
                                                                            "end": 1850,
                                                                            "loc": {
                                                                                "start": {"line": 74, "column": 20},
                                                                                "end": {"line": 74, "column": 31}
                                                                            },
                                                                            "object": {
                                                                                "type": "Identifier",
                                                                                "start": 1839,
                                                                                "end": 1846,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 74,
                                                                                        "column": 20
                                                                                    },
                                                                                    "end": {"line": 74, "column": 27},
                                                                                    "identifierName": "console"
                                                                                },
                                                                                "name": "console"
                                                                            },
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "start": 1847,
                                                                                "end": 1850,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 74,
                                                                                        "column": 28
                                                                                    },
                                                                                    "end": {"line": 74, "column": 31},
                                                                                    "identifierName": "log"
                                                                                },
                                                                                "name": "log"
                                                                            },
                                                                            "computed": false
                                                                        },
                                                                        "arguments": [{
                                                                            "type": "Identifier",
                                                                            "start": 1851,
                                                                            "end": 1857,
                                                                            "loc": {
                                                                                "start": {"line": 74, "column": 32},
                                                                                "end": {"line": 74, "column": 38},
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
                                                            "start": 1894,
                                                            "end": 2729,
                                                            "loc": {
                                                                "start": {"line": 76, "column": 16},
                                                                "end": {"line": 92, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1894,
                                                                "end": 1901,
                                                                "loc": {
                                                                    "start": {"line": 76, "column": 16},
                                                                    "end": {"line": 76, "column": 23},
                                                                    "identifierName": "objFun2"
                                                                },
                                                                "name": "objFun2"
                                                            },
                                                            "value": {
                                                                "type": "FunctionExpression",
                                                                "start": 1903,
                                                                "end": 2729,
                                                                "loc": {
                                                                    "start": {"line": 76, "column": 25},
                                                                    "end": {"line": 92, "column": 17}
                                                                },
                                                                "id": null,
                                                                "generator": false,
                                                                "expression": false,
                                                                "async": false,
                                                                "params": [{
                                                                    "type": "Identifier",
                                                                    "start": 1913,
                                                                    "end": 1919,
                                                                    "loc": {
                                                                        "start": {"line": 76, "column": 35},
                                                                        "end": {"line": 76, "column": 41},
                                                                        "identifierName": "param1"
                                                                    },
                                                                    "name": "param1"
                                                                }, {
                                                                    "type": "Identifier",
                                                                    "start": 1921,
                                                                    "end": 1927,
                                                                    "loc": {
                                                                        "start": {"line": 76, "column": 43},
                                                                        "end": {"line": 76, "column": 49},
                                                                        "identifierName": "param2"
                                                                    },
                                                                    "name": "param2"
                                                                }],
                                                                "body": {
                                                                    "type": "BlockStatement",
                                                                    "start": 1929,
                                                                    "end": 2729,
                                                                    "loc": {
                                                                        "start": {"line": 76, "column": 51},
                                                                        "end": {"line": 92, "column": 17}
                                                                    },
                                                                    "body": [{
                                                                        "type": "ExpressionStatement",
                                                                        "start": 1951,
                                                                        "end": 1979,
                                                                        "loc": {
                                                                            "start": {"line": 77, "column": 20},
                                                                            "end": {"line": 77, "column": 48}
                                                                        },
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "start": 1951,
                                                                            "end": 1978,
                                                                            "loc": {
                                                                                "start": {"line": 77, "column": 20},
                                                                                "end": {"line": 77, "column": 47}
                                                                            },
                                                                            "callee": {
                                                                                "type": "MemberExpression",
                                                                                "start": 1951,
                                                                                "end": 1962,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 77,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 77, "column": 31}
                                                                                },
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "start": 1951,
                                                                                    "end": 1958,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 77,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 77,
                                                                                            "column": 27
                                                                                        },
                                                                                        "identifierName": "console"
                                                                                    },
                                                                                    "name": "console"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 1959,
                                                                                    "end": 1962,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 77,
                                                                                            "column": 28
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 77,
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
                                                                                "start": 1963,
                                                                                "end": 1969,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 77,
                                                                                        "column": 32
                                                                                    },
                                                                                    "end": {"line": 77, "column": 38},
                                                                                    "identifierName": "param1"
                                                                                },
                                                                                "name": "param1"
                                                                            }, {
                                                                                "type": "Identifier",
                                                                                "start": 1971,
                                                                                "end": 1977,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 77,
                                                                                        "column": 40
                                                                                    },
                                                                                    "end": {"line": 77, "column": 46},
                                                                                    "identifierName": "param2"
                                                                                },
                                                                                "name": "param2"
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2000,
                                                                        "end": 2014,
                                                                        "loc": {
                                                                            "start": {"line": 78, "column": 20},
                                                                            "end": {"line": 78, "column": 34}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2000,
                                                                            "end": 2013,
                                                                            "loc": {
                                                                                "start": {"line": 78, "column": 20},
                                                                                "end": {"line": 78, "column": 33}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "Identifier",
                                                                                "start": 2000,
                                                                                "end": 2008,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 78,
                                                                                        "column": 20
                                                                                    },
                                                                                    "end": {"line": 78, "column": 28},
                                                                                    "identifierName": "mutiVar1"
                                                                                },
                                                                                "name": "mutiVar1"
                                                                            },
                                                                            "right": {
                                                                                "type": "NumericLiteral",
                                                                                "start": 2011,
                                                                                "end": 2013,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 78,
                                                                                        "column": 31
                                                                                    }, "end": {"line": 78, "column": 33}
                                                                                },
                                                                                "extra": {"rawValue": 12, "raw": "12"},
                                                                                "value": 12
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2035,
                                                                        "end": 2067,
                                                                        "loc": {
                                                                            "start": {"line": 79, "column": 20},
                                                                            "end": {"line": 79, "column": 52}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2035,
                                                                            "end": 2066,
                                                                            "loc": {
                                                                                "start": {"line": 79, "column": 20},
                                                                                "end": {"line": 79, "column": 51}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2035,
                                                                                "end": 2055,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 79,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 79, "column": 40}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2035,
                                                                                    "end": 2046,
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
                                                                                        "start": 2035,
                                                                                        "end": 2041,
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
                                                                                        "start": 2042,
                                                                                        "end": 2046,
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
                                                                                    "type": "Identifier",
                                                                                    "start": 2047,
                                                                                    "end": 2055,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 79,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 79,
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
                                                                                "start": 2058,
                                                                                "end": 2066,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 79,
                                                                                        "column": 43
                                                                                    },
                                                                                    "end": {"line": 79, "column": 51},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2088,
                                                                        "end": 2125,
                                                                        "loc": {
                                                                            "start": {"line": 80, "column": 20},
                                                                            "end": {"line": 80, "column": 57}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2088,
                                                                            "end": 2124,
                                                                            "loc": {
                                                                                "start": {"line": 80, "column": 20},
                                                                                "end": {"line": 80, "column": 56}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2088,
                                                                                "end": 2111,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 80,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 80, "column": 43}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2088,
                                                                                    "end": 2099,
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
                                                                                        "start": 2088,
                                                                                        "end": 2094,
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
                                                                                        "start": 2095,
                                                                                        "end": 2099,
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
                                                                                    "type": "StringLiteral",
                                                                                    "start": 2100,
                                                                                    "end": 2110,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 80,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 80,
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
                                                                                "start": 2114,
                                                                                "end": 2124,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 80,
                                                                                        "column": 46
                                                                                    },
                                                                                    "end": {"line": 80, "column": 56},
                                                                                    "identifierName": "scopeData2"
                                                                                },
                                                                                "name": "scopeData2"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2146,
                                                                        "end": 2179,
                                                                        "loc": {
                                                                            "start": {"line": 81, "column": 20},
                                                                            "end": {"line": 81, "column": 53}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2146,
                                                                            "end": 2178,
                                                                            "loc": {
                                                                                "start": {"line": 81, "column": 20},
                                                                                "end": {"line": 81, "column": 52}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2146,
                                                                                "end": 2167,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 81,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 81, "column": 41}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2146,
                                                                                    "end": 2157,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 81,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 81,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2146,
                                                                                        "end": 2152,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 81,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 81,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2153,
                                                                                        "end": 2157,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 81,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 81,
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
                                                                                    "start": 2158,
                                                                                    "end": 2166,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 81,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 81,
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
                                                                                "start": 2170,
                                                                                "end": 2178,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 81,
                                                                                        "column": 44
                                                                                    },
                                                                                    "end": {"line": 81, "column": 52},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2200,
                                                                        "end": 2243,
                                                                        "loc": {
                                                                            "start": {"line": 82, "column": 20},
                                                                            "end": {"line": 82, "column": 63}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2200,
                                                                            "end": 2242,
                                                                            "loc": {
                                                                                "start": {"line": 82, "column": 20},
                                                                                "end": {"line": 82, "column": 62}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2200,
                                                                                "end": 2231,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 82,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 82, "column": 51}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2200,
                                                                                    "end": 2211,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 82,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 82,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2200,
                                                                                        "end": 2206,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 82,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 82,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2207,
                                                                                        "end": 2211,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 82,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 82,
                                                                                                "column": 31
                                                                                            },
                                                                                            "identifierName": "data"
                                                                                        },
                                                                                        "name": "data"
                                                                                    },
                                                                                    "computed": false
                                                                                },
                                                                                "property": {
                                                                                    "type": "CallExpression",
                                                                                    "start": 2212,
                                                                                    "end": 2230,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 82,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 82,
                                                                                            "column": 50
                                                                                        }
                                                                                    },
                                                                                    "callee": {
                                                                                        "type": "MemberExpression",
                                                                                        "start": 2212,
                                                                                        "end": 2225,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 82,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 82,
                                                                                                "column": 45
                                                                                            }
                                                                                        },
                                                                                        "object": {
                                                                                            "type": "Identifier",
                                                                                            "start": 2212,
                                                                                            "end": 2221,
                                                                                            "loc": {
                                                                                                "start": {
                                                                                                    "line": 82,
                                                                                                    "column": 32
                                                                                                },
                                                                                                "end": {
                                                                                                    "line": 82,
                                                                                                    "column": 41
                                                                                                },
                                                                                                "identifierName": "scopeData"
                                                                                            },
                                                                                            "name": "scopeData"
                                                                                        },
                                                                                        "property": {
                                                                                            "type": "Identifier",
                                                                                            "start": 2222,
                                                                                            "end": 2225,
                                                                                            "loc": {
                                                                                                "start": {
                                                                                                    "line": 82,
                                                                                                    "column": 42
                                                                                                },
                                                                                                "end": {
                                                                                                    "line": 82,
                                                                                                    "column": 45
                                                                                                },
                                                                                                "identifierName": "ccc"
                                                                                            },
                                                                                            "name": "ccc"
                                                                                        },
                                                                                        "computed": false
                                                                                    },
                                                                                    "arguments": [{
                                                                                        "type": "Identifier",
                                                                                        "start": 2226,
                                                                                        "end": 2229,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 82,
                                                                                                "column": 46
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 82,
                                                                                                "column": 49
                                                                                            },
                                                                                            "identifierName": "obj"
                                                                                        },
                                                                                        "name": "obj"
                                                                                    }]
                                                                                },
                                                                                "computed": true
                                                                            },
                                                                            "right": {
                                                                                "type": "Identifier",
                                                                                "start": 2234,
                                                                                "end": 2242,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 82,
                                                                                        "column": 54
                                                                                    },
                                                                                    "end": {"line": 82, "column": 62},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2264,
                                                                        "end": 2303,
                                                                        "loc": {
                                                                            "start": {"line": 83, "column": 20},
                                                                            "end": {"line": 83, "column": 59}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2264,
                                                                            "end": 2302,
                                                                            "loc": {
                                                                                "start": {"line": 83, "column": 20},
                                                                                "end": {"line": 83, "column": 58}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2264,
                                                                                "end": 2291,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 83,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 83, "column": 47}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2264,
                                                                                    "end": 2275,
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
                                                                                        "start": 2264,
                                                                                        "end": 2270,
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
                                                                                        "start": 2271,
                                                                                        "end": 2275,
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
                                                                                    "type": "CallExpression",
                                                                                    "start": 2276,
                                                                                    "end": 2290,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 83,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 83,
                                                                                            "column": 46
                                                                                        }
                                                                                    },
                                                                                    "callee": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2276,
                                                                                        "end": 2285,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 83,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 83,
                                                                                                "column": 41
                                                                                            },
                                                                                            "identifierName": "singleFun"
                                                                                        },
                                                                                        "name": "singleFun"
                                                                                    },
                                                                                    "arguments": [{
                                                                                        "type": "Identifier",
                                                                                        "start": 2286,
                                                                                        "end": 2289,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 83,
                                                                                                "column": 42
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 83,
                                                                                                "column": 45
                                                                                            },
                                                                                            "identifierName": "obj"
                                                                                        },
                                                                                        "name": "obj"
                                                                                    }]
                                                                                },
                                                                                "computed": true
                                                                            },
                                                                            "right": {
                                                                                "type": "Identifier",
                                                                                "start": 2294,
                                                                                "end": 2302,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 83,
                                                                                        "column": 50
                                                                                    },
                                                                                    "end": {"line": 83, "column": 58},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2324,
                                                                        "end": 2371,
                                                                        "loc": {
                                                                            "start": {"line": 84, "column": 20},
                                                                            "end": {"line": 84, "column": 67}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2324,
                                                                            "end": 2370,
                                                                            "loc": {
                                                                                "start": {"line": 84, "column": 20},
                                                                                "end": {"line": 84, "column": 66}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2324,
                                                                                "end": 2359,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 84,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 84, "column": 55}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2324,
                                                                                    "end": 2335,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 84,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 84,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2324,
                                                                                        "end": 2330,
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
                                                                                        "start": 2331,
                                                                                        "end": 2335,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 84,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 84,
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
                                                                                    "start": 2336,
                                                                                    "end": 2358,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 84,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 84,
                                                                                            "column": 54
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2336,
                                                                                        "end": 2344,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 84,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 84,
                                                                                                "column": 40
                                                                                            },
                                                                                            "identifierName": "mutiVar3"
                                                                                        },
                                                                                        "name": "mutiVar3"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2345,
                                                                                        "end": 2358,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 84,
                                                                                                "column": 41
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 84,
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
                                                                                "start": 2362,
                                                                                "end": 2370,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 84,
                                                                                        "column": 58
                                                                                    },
                                                                                    "end": {"line": 84, "column": 66},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2392,
                                                                        "end": 2435,
                                                                        "loc": {
                                                                            "start": {"line": 85, "column": 20},
                                                                            "end": {"line": 85, "column": 63}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2392,
                                                                            "end": 2434,
                                                                            "loc": {
                                                                                "start": {"line": 85, "column": 20},
                                                                                "end": {"line": 85, "column": 62}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2392,
                                                                                "end": 2423,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 85,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 85, "column": 51}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2392,
                                                                                    "end": 2403,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 85,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 85,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2392,
                                                                                        "end": 2398,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 85,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 85,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2399,
                                                                                        "end": 2403,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 85,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 85,
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
                                                                                    "start": 2404,
                                                                                    "end": 2422,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 85,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 85,
                                                                                            "column": 50
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2404,
                                                                                        "end": 2410,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 85,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 85,
                                                                                                "column": 38
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2411,
                                                                                        "end": 2422,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 85,
                                                                                                "column": 39
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 85,
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
                                                                                "start": 2426,
                                                                                "end": 2434,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 85,
                                                                                        "column": 54
                                                                                    },
                                                                                    "end": {"line": 85, "column": 62},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2456,
                                                                        "end": 2490,
                                                                        "loc": {
                                                                            "start": {"line": 86, "column": 20},
                                                                            "end": {"line": 86, "column": 54}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2456,
                                                                            "end": 2489,
                                                                            "loc": {
                                                                                "start": {"line": 86, "column": 20},
                                                                                "end": {"line": 86, "column": 53}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2456,
                                                                                "end": 2476,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 86,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 86, "column": 40}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2456,
                                                                                    "end": 2467,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 86,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 86,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2456,
                                                                                        "end": 2462,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 86,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 86,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2463,
                                                                                        "end": 2467,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 86,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 86,
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
                                                                                    "start": 2468,
                                                                                    "end": 2476,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 86,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 86,
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
                                                                                "start": 2479,
                                                                                "end": 2489,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 86,
                                                                                        "column": 43
                                                                                    }, "end": {"line": 86, "column": 53}
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
                                                                        "start": 2511,
                                                                        "end": 2538,
                                                                        "loc": {
                                                                            "start": {"line": 87, "column": 20},
                                                                            "end": {"line": 87, "column": 47}
                                                                        },
                                                                        "declarations": [{
                                                                            "type": "VariableDeclarator",
                                                                            "start": 2515,
                                                                            "end": 2537,
                                                                            "loc": {
                                                                                "start": {"line": 87, "column": 24},
                                                                                "end": {"line": 87, "column": 46}
                                                                            },
                                                                            "id": {
                                                                                "type": "Identifier",
                                                                                "start": 2515,
                                                                                "end": 2527,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 87,
                                                                                        "column": 24
                                                                                    },
                                                                                    "end": {"line": 87, "column": 36},
                                                                                    "identifierName": "unKnownValue"
                                                                                },
                                                                                "name": "unKnownValue"
                                                                            },
                                                                            "init": {
                                                                                "type": "Identifier",
                                                                                "start": 2530,
                                                                                "end": 2537,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 87,
                                                                                        "column": 39
                                                                                    },
                                                                                    "end": {"line": 87, "column": 46},
                                                                                    "identifierName": "unKnown"
                                                                                },
                                                                                "name": "unKnown"
                                                                            }
                                                                        }],
                                                                        "kind": "var"
                                                                    }, {
                                                                        "type": "VariableDeclaration",
                                                                        "start": 2559,
                                                                        "end": 2594,
                                                                        "loc": {
                                                                            "start": {"line": 88, "column": 20},
                                                                            "end": {"line": 88, "column": 55}
                                                                        },
                                                                        "declarations": [{
                                                                            "type": "VariableDeclarator",
                                                                            "start": 2563,
                                                                            "end": 2593,
                                                                            "loc": {
                                                                                "start": {"line": 88, "column": 24},
                                                                                "end": {"line": 88, "column": 54}
                                                                            },
                                                                            "id": {
                                                                                "type": "Identifier",
                                                                                "start": 2563,
                                                                                "end": 2576,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 88,
                                                                                        "column": 24
                                                                                    },
                                                                                    "end": {"line": 88, "column": 37},
                                                                                    "identifierName": "unKnownValue1"
                                                                                },
                                                                                "name": "unKnownValue1"
                                                                            },
                                                                            "init": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2579,
                                                                                "end": 2593,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 88,
                                                                                        "column": 40
                                                                                    }, "end": {"line": 88, "column": 54}
                                                                                },
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2579,
                                                                                    "end": 2585,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 88,
                                                                                            "column": 40
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 88,
                                                                                            "column": 46
                                                                                        },
                                                                                        "identifierName": "$scope"
                                                                                    },
                                                                                    "name": "$scope"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2586,
                                                                                    "end": 2593,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 88,
                                                                                            "column": 47
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 88,
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
                                                                        "start": 2615,
                                                                        "end": 2642,
                                                                        "loc": {
                                                                            "start": {"line": 89, "column": 20},
                                                                            "end": {"line": 89, "column": 47}
                                                                        },
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "start": 2615,
                                                                            "end": 2641,
                                                                            "loc": {
                                                                                "start": {"line": 89, "column": 20},
                                                                                "end": {"line": 89, "column": 46}
                                                                            },
                                                                            "callee": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2615,
                                                                                "end": 2639,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 89,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 89, "column": 44}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2615,
                                                                                    "end": 2629,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 89,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 89,
                                                                                            "column": 34
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "MemberExpression",
                                                                                        "start": 2615,
                                                                                        "end": 2626,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 89,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 89,
                                                                                                "column": 31
                                                                                            }
                                                                                        },
                                                                                        "object": {
                                                                                            "type": "Identifier",
                                                                                            "start": 2615,
                                                                                            "end": 2621,
                                                                                            "loc": {
                                                                                                "start": {
                                                                                                    "line": 89,
                                                                                                    "column": 20
                                                                                                },
                                                                                                "end": {
                                                                                                    "line": 89,
                                                                                                    "column": 26
                                                                                                },
                                                                                                "identifierName": "$scope"
                                                                                            },
                                                                                            "name": "$scope"
                                                                                        },
                                                                                        "property": {
                                                                                            "type": "Identifier",
                                                                                            "start": 2622,
                                                                                            "end": 2626,
                                                                                            "loc": {
                                                                                                "start": {
                                                                                                    "line": 89,
                                                                                                    "column": 27
                                                                                                },
                                                                                                "end": {
                                                                                                    "line": 89,
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
                                                                                        "start": 2627,
                                                                                        "end": 2629,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 89,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 89,
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
                                                                                    "start": 2630,
                                                                                    "end": 2639,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 89,
                                                                                            "column": 35
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 89,
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
                                                                        "start": 2663,
                                                                        "end": 2681,
                                                                        "loc": {
                                                                            "start": {"line": 90, "column": 20},
                                                                            "end": {"line": 90, "column": 38}
                                                                        },
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "start": 2663,
                                                                            "end": 2680,
                                                                            "loc": {
                                                                                "start": {"line": 90, "column": 20},
                                                                                "end": {"line": 90, "column": 37}
                                                                            },
                                                                            "callee": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2663,
                                                                                "end": 2678,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 90,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 90, "column": 35}
                                                                                },
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2663,
                                                                                    "end": 2669,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 90,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 90,
                                                                                            "column": 26
                                                                                        },
                                                                                        "identifierName": "$scope"
                                                                                    },
                                                                                    "name": "$scope"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2670,
                                                                                    "end": 2678,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 90,
                                                                                            "column": 27
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 90,
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
                                                                        "start": 2702,
                                                                        "end": 2711,
                                                                        "loc": {
                                                                            "start": {"line": 91, "column": 20},
                                                                            "end": {"line": 91, "column": 29}
                                                                        },
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "start": 2702,
                                                                            "end": 2710,
                                                                            "loc": {
                                                                                "start": {"line": 91, "column": 20},
                                                                                "end": {"line": 91, "column": 28}
                                                                            },
                                                                            "callee": {
                                                                                "type": "Identifier",
                                                                                "start": 2702,
                                                                                "end": 2708,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 91,
                                                                                        "column": 20
                                                                                    },
                                                                                    "end": {"line": 91, "column": 26},
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
                                                            "start": 2747,
                                                            "end": 2788,
                                                            "loc": {
                                                                "start": {"line": 93, "column": 16},
                                                                "end": {"line": 95, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 2747,
                                                                "end": 2754,
                                                                "loc": {
                                                                    "start": {"line": 93, "column": 16},
                                                                    "end": {"line": 93, "column": 23},
                                                                    "identifierName": "objFun3"
                                                                },
                                                                "name": "objFun3"
                                                            },
                                                            "value": {
                                                                "type": "ArrowFunctionExpression",
                                                                "start": 2756,
                                                                "end": 2788,
                                                                "loc": {
                                                                    "start": {"line": 93, "column": 25},
                                                                    "end": {"line": 95, "column": 17}
                                                                },
                                                                "id": null,
                                                                "generator": false,
                                                                "expression": false,
                                                                "async": false,
                                                                "params": [{
                                                                    "type": "Identifier",
                                                                    "start": 2757,
                                                                    "end": 2759,
                                                                    "loc": {
                                                                        "start": {"line": 93, "column": 26},
                                                                        "end": {"line": 93, "column": 28},
                                                                        "identifierName": "p1"
                                                                    },
                                                                    "name": "p1"
                                                                }, {
                                                                    "type": "Identifier",
                                                                    "start": 2761,
                                                                    "end": 2763,
                                                                    "loc": {
                                                                        "start": {"line": 93, "column": 30},
                                                                        "end": {"line": 93, "column": 32},
                                                                        "identifierName": "p2"
                                                                    },
                                                                    "name": "p2"
                                                                }],
                                                                "body": {
                                                                    "type": "BlockStatement",
                                                                    "start": 2768,
                                                                    "end": 2788,
                                                                    "loc": {
                                                                        "start": {"line": 93, "column": 37},
                                                                        "end": {"line": 95, "column": 17}
                                                                    },
                                                                    "body": [],
                                                                    "directives": []
                                                                }
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 2806,
                                                            "end": 2838,
                                                            "loc": {
                                                                "start": {"line": 96, "column": 16},
                                                                "end": {"line": 98, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 2810,
                                                                "end": 2815,
                                                                "loc": {
                                                                    "start": {"line": 96, "column": 20},
                                                                    "end": {"line": 96, "column": 25},
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
                                                                "start": 2818,
                                                                "end": 2838,
                                                                "loc": {
                                                                    "start": {"line": 96, "column": 28},
                                                                    "end": {"line": 98, "column": 17}
                                                                },
                                                                "body": [],
                                                                "directives": []
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 2856,
                                                            "end": 2893,
                                                            "loc": {
                                                                "start": {"line": 99, "column": 16},
                                                                "end": {"line": 101, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 2860,
                                                                "end": 2865,
                                                                "loc": {
                                                                    "start": {"line": 99, "column": 20},
                                                                    "end": {"line": 99, "column": 25},
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
                                                                "start": 2866,
                                                                "end": 2871,
                                                                "loc": {
                                                                    "start": {"line": 99, "column": 26},
                                                                    "end": {"line": 99, "column": 31},
                                                                    "identifierName": "value"
                                                                },
                                                                "name": "value"
                                                            }],
                                                            "body": {
                                                                "type": "BlockStatement",
                                                                "start": 2873,
                                                                "end": 2893,
                                                                "loc": {
                                                                    "start": {"line": 99, "column": 33},
                                                                    "end": {"line": 101, "column": 17}
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
                                                    "start": 1713,
                                                    "end": 1717,
                                                    "loc": {
                                                        "start": {"line": 70, "column": 12},
                                                        "end": {"line": 70, "column": 16}
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
                                    "start": 1615,
                                    "end": 1623,
                                    "loc": {"start": {"line": 67, "column": 8}, "end": {"line": 67, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 2928,
                                "end": 2958,
                                "loc": {"start": {"line": 106, "column": 8}, "end": {"line": 108, "column": 9}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 2932,
                                    "end": 2958,
                                    "loc": {"start": {"line": 106, "column": 12}, "end": {"line": 108, "column": 9}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 2932,
                                        "end": 2934,
                                        "loc": {
                                            "start": {"line": 106, "column": 12},
                                            "end": {"line": 106, "column": 14},
                                            "identifierName": "xx"
                                        },
                                        "name": "xx"
                                    },
                                    "init": {
                                        "type": "ArrowFunctionExpression",
                                        "start": 2938,
                                        "end": 2958,
                                        "loc": {
                                            "start": {"line": 106, "column": 18},
                                            "end": {"line": 108, "column": 9}
                                        },
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 2939,
                                            "end": 2940,
                                            "loc": {
                                                "start": {"line": 106, "column": 19},
                                                "end": {"line": 106, "column": 20},
                                                "identifierName": "a"
                                            },
                                            "name": "a"
                                        }, {
                                            "type": "Identifier",
                                            "start": 2941,
                                            "end": 2942,
                                            "loc": {
                                                "start": {"line": 106, "column": 21},
                                                "end": {"line": 106, "column": 22},
                                                "identifierName": "b"
                                            },
                                            "name": "b"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 2946,
                                            "end": 2958,
                                            "loc": {
                                                "start": {"line": 106, "column": 26},
                                                "end": {"line": 108, "column": 9}
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
                                    "start": 2977,
                                    "end": 2989,
                                    "loc": {"start": {"line": 111, "column": 8}, "end": {"line": 111, "column": 20}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 2998,
                                "end": 3078,
                                "loc": {"start": {"line": 112, "column": 8}, "end": {"line": 114, "column": 10}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2998,
                                    "end": 3077,
                                    "loc": {"start": {"line": 112, "column": 8}, "end": {"line": 114, "column": 9}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 2998,
                                        "end": 3013,
                                        "loc": {
                                            "start": {"line": 112, "column": 8},
                                            "end": {"line": 112, "column": 23}
                                        },
                                        "object": {
                                            "type": "Identifier",
                                            "start": 2998,
                                            "end": 3004,
                                            "loc": {
                                                "start": {"line": 112, "column": 8},
                                                "end": {"line": 112, "column": 14},
                                                "identifierName": "$scope"
                                            },
                                            "name": "$scope",
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 3005,
                                            "end": 3013,
                                            "loc": {
                                                "start": {"line": 112, "column": 15},
                                                "end": {"line": 112, "column": 23},
                                                "identifierName": "scopeFun"
                                            },
                                            "name": "scopeFun"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "FunctionExpression",
                                        "start": 3016,
                                        "end": 3077,
                                        "loc": {
                                            "start": {"line": 112, "column": 26},
                                            "end": {"line": 114, "column": 9}
                                        },
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 3026,
                                            "end": 3032,
                                            "loc": {
                                                "start": {"line": 112, "column": 36},
                                                "end": {"line": 112, "column": 42},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 3034,
                                            "end": 3077,
                                            "loc": {
                                                "start": {"line": 112, "column": 44},
                                                "end": {"line": 114, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 3048,
                                                "end": 3067,
                                                "loc": {
                                                    "start": {"line": 113, "column": 12},
                                                    "end": {"line": 113, "column": 31}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 3048,
                                                    "end": 3067,
                                                    "loc": {
                                                        "start": {"line": 113, "column": 12},
                                                        "end": {"line": 113, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 3048,
                                                        "end": 3059,
                                                        "loc": {
                                                            "start": {"line": 113, "column": 12},
                                                            "end": {"line": 113, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3048,
                                                            "end": 3055,
                                                            "loc": {
                                                                "start": {"line": 113, "column": 12},
                                                                "end": {"line": 113, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3056,
                                                            "end": 3059,
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
                                                        "start": 3060,
                                                        "end": 3066,
                                                        "loc": {
                                                            "start": {"line": 113, "column": 24},
                                                            "end": {"line": 113, "column": 30},
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
                                    "start": 2977,
                                    "end": 2989,
                                    "loc": {"start": {"line": 111, "column": 8}, "end": {"line": 111, "column": 20}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope多级初始化函数",
                                    "start": 3088,
                                    "end": 3102,
                                    "loc": {"start": {"line": 116, "column": 8}, "end": {"line": 116, "column": 22}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 3111,
                                "end": 3587,
                                "loc": {"start": {"line": 117, "column": 8}, "end": {"line": 134, "column": 10}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 3111,
                                    "end": 3586,
                                    "loc": {"start": {"line": 117, "column": 8}, "end": {"line": 134, "column": 9}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 3111,
                                        "end": 3135,
                                        "loc": {
                                            "start": {"line": 117, "column": 8},
                                            "end": {"line": 117, "column": 32}
                                        },
                                        "object": {
                                            "type": "MemberExpression",
                                            "start": 3111,
                                            "end": 3125,
                                            "loc": {
                                                "start": {"line": 117, "column": 8},
                                                "end": {"line": 117, "column": 22}
                                            },
                                            "object": {
                                                "type": "MemberExpression",
                                                "start": 3111,
                                                "end": 3122,
                                                "loc": {
                                                    "start": {"line": 117, "column": 8},
                                                    "end": {"line": 117, "column": 19}
                                                },
                                                "object": {
                                                    "type": "Identifier",
                                                    "start": 3111,
                                                    "end": 3117,
                                                    "loc": {
                                                        "start": {"line": 117, "column": 8},
                                                        "end": {"line": 117, "column": 14},
                                                        "identifierName": "$scope"
                                                    },
                                                    "name": "$scope",
                                                    "leadingComments": null
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "start": 3118,
                                                    "end": 3122,
                                                    "loc": {
                                                        "start": {"line": 117, "column": 15},
                                                        "end": {"line": 117, "column": 19},
                                                        "identifierName": "data"
                                                    },
                                                    "name": "data"
                                                },
                                                "computed": false,
                                                "leadingComments": null
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 3123,
                                                "end": 3125,
                                                "loc": {
                                                    "start": {"line": 117, "column": 20},
                                                    "end": {"line": 117, "column": 22},
                                                    "identifierName": "qq"
                                                },
                                                "name": "qq"
                                            },
                                            "computed": false,
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 3126,
                                            "end": 3135,
                                            "loc": {
                                                "start": {"line": 117, "column": 23},
                                                "end": {"line": 117, "column": 32},
                                                "identifierName": "scopeFun2"
                                            },
                                            "name": "scopeFun2"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "FunctionExpression",
                                        "start": 3138,
                                        "end": 3586,
                                        "loc": {
                                            "start": {"line": 117, "column": 35},
                                            "end": {"line": 134, "column": 9}
                                        },
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 3150,
                                            "end": 3586,
                                            "loc": {
                                                "start": {"line": 117, "column": 47},
                                                "end": {"line": 134, "column": 9}
                                            },
                                            "body": [{
                                                "type": "VariableDeclaration",
                                                "start": 3165,
                                                "end": 3188,
                                                "loc": {
                                                    "start": {"line": 119, "column": 12},
                                                    "end": {"line": 119, "column": 35}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 3169,
                                                    "end": 3187,
                                                    "loc": {
                                                        "start": {"line": 119, "column": 16},
                                                        "end": {"line": 119, "column": 34}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 3169,
                                                        "end": 3176,
                                                        "loc": {
                                                            "start": {"line": 119, "column": 16},
                                                            "end": {"line": 119, "column": 23},
                                                            "identifierName": "subFun2"
                                                        },
                                                        "name": "subFun2"
                                                    },
                                                    "init": {
                                                        "type": "Identifier",
                                                        "start": 3179,
                                                        "end": 3187,
                                                        "loc": {
                                                            "start": {"line": 119, "column": 26},
                                                            "end": {"line": 119, "column": 34},
                                                            "identifierName": "_subFun2"
                                                        },
                                                        "name": "_subFun2"
                                                    }
                                                }],
                                                "kind": "var"
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 3201,
                                                "end": 3258,
                                                "loc": {
                                                    "start": {"line": 120, "column": 12},
                                                    "end": {"line": 122, "column": 14}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 3205,
                                                    "end": 3257,
                                                    "loc": {
                                                        "start": {"line": 120, "column": 16},
                                                        "end": {"line": 122, "column": 13}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 3205,
                                                        "end": 3212,
                                                        "loc": {
                                                            "start": {"line": 120, "column": 16},
                                                            "end": {"line": 120, "column": 23},
                                                            "identifierName": "subFun1"
                                                        },
                                                        "name": "subFun1"
                                                    },
                                                    "init": {
                                                        "type": "FunctionExpression",
                                                        "start": 3215,
                                                        "end": 3257,
                                                        "loc": {
                                                            "start": {"line": 120, "column": 26},
                                                            "end": {"line": 122, "column": 13}
                                                        },
                                                        "id": null,
                                                        "generator": false,
                                                        "expression": false,
                                                        "async": false,
                                                        "params": [{
                                                            "type": "Identifier",
                                                            "start": 3225,
                                                            "end": 3231,
                                                            "loc": {
                                                                "start": {"line": 120, "column": 36},
                                                                "end": {"line": 120, "column": 42},
                                                                "identifierName": "param1"
                                                            },
                                                            "name": "param1"
                                                        }, {
                                                            "type": "Identifier",
                                                            "start": 3233,
                                                            "end": 3239,
                                                            "loc": {
                                                                "start": {"line": 120, "column": 44},
                                                                "end": {"line": 120, "column": 50},
                                                                "identifierName": "param2"
                                                            },
                                                            "name": "param2"
                                                        }],
                                                        "body": {
                                                            "type": "BlockStatement",
                                                            "start": 3241,
                                                            "end": 3257,
                                                            "loc": {
                                                                "start": {"line": 120, "column": 52},
                                                                "end": {"line": 122, "column": 13}
                                                            },
                                                            "body": [],
                                                            "directives": []
                                                        }
                                                    }
                                                }],
                                                "kind": "var"
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 3271,
                                                "end": 3296,
                                                "loc": {
                                                    "start": {"line": 123, "column": 12},
                                                    "end": {"line": 123, "column": 37}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 3271,
                                                    "end": 3295,
                                                    "loc": {
                                                        "start": {"line": 123, "column": 12},
                                                        "end": {"line": 123, "column": 36}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 3271,
                                                        "end": 3278,
                                                        "loc": {
                                                            "start": {"line": 123, "column": 12},
                                                            "end": {"line": 123, "column": 19},
                                                            "identifierName": "subFun2"
                                                        },
                                                        "name": "subFun2"
                                                    },
                                                    "arguments": [{
                                                        "type": "MemberExpression",
                                                        "start": 3279,
                                                        "end": 3294,
                                                        "loc": {
                                                            "start": {"line": 123, "column": 20},
                                                            "end": {"line": 123, "column": 35}
                                                        },
                                                        "object": {
                                                            "type": "CallExpression",
                                                            "start": 3279,
                                                            "end": 3288,
                                                            "loc": {
                                                                "start": {"line": 123, "column": 20},
                                                                "end": {"line": 123, "column": 29}
                                                            },
                                                            "callee": {
                                                                "type": "Identifier",
                                                                "start": 3279,
                                                                "end": 3286,
                                                                "loc": {
                                                                    "start": {"line": 123, "column": 20},
                                                                    "end": {"line": 123, "column": 27},
                                                                    "identifierName": "subFun1"
                                                                },
                                                                "name": "subFun1"
                                                            },
                                                            "arguments": []
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3289,
                                                            "end": 3294,
                                                            "loc": {
                                                                "start": {"line": 123, "column": 30},
                                                                "end": {"line": 123, "column": 35},
                                                                "identifierName": "value"
                                                            },
                                                            "name": "value"
                                                        },
                                                        "computed": false
                                                    }]
                                                }
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 3309,
                                                "end": 3354,
                                                "loc": {
                                                    "start": {"line": 124, "column": 12},
                                                    "end": {"line": 124, "column": 57}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 3309,
                                                    "end": 3353,
                                                    "loc": {
                                                        "start": {"line": 124, "column": 12},
                                                        "end": {"line": 124, "column": 56}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 3309,
                                                        "end": 3316,
                                                        "loc": {
                                                            "start": {"line": 124, "column": 12},
                                                            "end": {"line": 124, "column": 19},
                                                            "identifierName": "subFun1"
                                                        },
                                                        "name": "subFun1"
                                                    },
                                                    "arguments": [{
                                                        "type": "MemberExpression",
                                                        "start": 3317,
                                                        "end": 3339,
                                                        "loc": {
                                                            "start": {"line": 124, "column": 20},
                                                            "end": {"line": 124, "column": 42}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3317,
                                                            "end": 3325,
                                                            "loc": {
                                                                "start": {"line": 124, "column": 20},
                                                                "end": {"line": 124, "column": 28},
                                                                "identifierName": "mutiVar3"
                                                            },
                                                            "name": "mutiVar3"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3326,
                                                            "end": 3339,
                                                            "loc": {
                                                                "start": {"line": 124, "column": 29},
                                                                "end": {"line": 124, "column": 42},
                                                                "identifierName": "mutiVar3Value"
                                                            },
                                                            "name": "mutiVar3Value"
                                                        },
                                                        "computed": false
                                                    }, {
                                                        "type": "MemberExpression",
                                                        "start": 3341,
                                                        "end": 3352,
                                                        "loc": {
                                                            "start": {"line": 124, "column": 44},
                                                            "end": {"line": 124, "column": 55}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3341,
                                                            "end": 3347,
                                                            "loc": {
                                                                "start": {"line": 124, "column": 44},
                                                                "end": {"line": 124, "column": 50},
                                                                "identifierName": "$scope"
                                                            },
                                                            "name": "$scope"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3348,
                                                            "end": 3352,
                                                            "loc": {
                                                                "start": {"line": 124, "column": 51},
                                                                "end": {"line": 124, "column": 55},
                                                                "identifierName": "data"
                                                            },
                                                            "name": "data"
                                                        },
                                                        "computed": false
                                                    }]
                                                }
                                            }, {
                                                "type": "FunctionDeclaration",
                                                "start": 3367,
                                                "end": 3417,
                                                "loc": {
                                                    "start": {"line": 125, "column": 12},
                                                    "end": {"line": 127, "column": 13}
                                                },
                                                "id": {
                                                    "type": "Identifier",
                                                    "start": 3376,
                                                    "end": 3384,
                                                    "loc": {
                                                        "start": {"line": 125, "column": 21},
                                                        "end": {"line": 125, "column": 29},
                                                        "identifierName": "_subFun2"
                                                    },
                                                    "name": "_subFun2"
                                                },
                                                "generator": false,
                                                "expression": false,
                                                "async": false,
                                                "params": [{
                                                    "type": "Identifier",
                                                    "start": 3385,
                                                    "end": 3391,
                                                    "loc": {
                                                        "start": {"line": 125, "column": 30},
                                                        "end": {"line": 125, "column": 36},
                                                        "identifierName": "param1"
                                                    },
                                                    "name": "param1"
                                                }, {
                                                    "type": "Identifier",
                                                    "start": 3393,
                                                    "end": 3399,
                                                    "loc": {
                                                        "start": {"line": 125, "column": 38},
                                                        "end": {"line": 125, "column": 44},
                                                        "identifierName": "param2"
                                                    },
                                                    "name": "param2"
                                                }],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "start": 3401,
                                                    "end": 3417,
                                                    "loc": {
                                                        "start": {"line": 125, "column": 46},
                                                        "end": {"line": 127, "column": 13}
                                                    },
                                                    "body": [],
                                                    "directives": []
                                                }
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 3431,
                                                "end": 3472,
                                                "loc": {
                                                    "start": {"line": 129, "column": 12},
                                                    "end": {"line": 129, "column": 53}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 3435,
                                                    "end": 3471,
                                                    "loc": {
                                                        "start": {"line": 129, "column": 16},
                                                        "end": {"line": 129, "column": 52}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 3435,
                                                        "end": 3446,
                                                        "loc": {
                                                            "start": {"line": 129, "column": 16},
                                                            "end": {"line": 129, "column": 27},
                                                            "identifierName": "fnMutiValue"
                                                        },
                                                        "name": "fnMutiValue"
                                                    },
                                                    "init": {
                                                        "type": "MemberExpression",
                                                        "start": 3449,
                                                        "end": 3471,
                                                        "loc": {
                                                            "start": {"line": 129, "column": 30},
                                                            "end": {"line": 129, "column": 52}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3449,
                                                            "end": 3457,
                                                            "loc": {
                                                                "start": {"line": 129, "column": 30},
                                                                "end": {"line": 129, "column": 38},
                                                                "identifierName": "mutiVar3"
                                                            },
                                                            "name": "mutiVar3"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3458,
                                                            "end": 3471,
                                                            "loc": {
                                                                "start": {"line": 129, "column": 39},
                                                                "end": {"line": 129, "column": 52},
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
                                                "start": 3485,
                                                "end": 3511,
                                                "loc": {
                                                    "start": {"line": 130, "column": 12},
                                                    "end": {"line": 130, "column": 38}
                                                },
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "start": 3485,
                                                    "end": 3510,
                                                    "loc": {
                                                        "start": {"line": 130, "column": 12},
                                                        "end": {"line": 130, "column": 37}
                                                    },
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "MemberExpression",
                                                        "start": 3485,
                                                        "end": 3503,
                                                        "loc": {
                                                            "start": {"line": 130, "column": 12},
                                                            "end": {"line": 130, "column": 30}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3485,
                                                            "end": 3491,
                                                            "loc": {
                                                                "start": {"line": 130, "column": 12},
                                                                "end": {"line": 130, "column": 18},
                                                                "identifierName": "$scope"
                                                            },
                                                            "name": "$scope"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3492,
                                                            "end": 3503,
                                                            "loc": {
                                                                "start": {"line": 130, "column": 19},
                                                                "end": {"line": 130, "column": 30},
                                                                "identifierName": "funScopeVar"
                                                            },
                                                            "name": "funScopeVar"
                                                        },
                                                        "computed": false
                                                    },
                                                    "right": {
                                                        "type": "StringLiteral",
                                                        "start": 3506,
                                                        "end": 3510,
                                                        "loc": {
                                                            "start": {"line": 130, "column": 33},
                                                            "end": {"line": 130, "column": 37}
                                                        },
                                                        "extra": {"rawValue": "12", "raw": "\"12\""},
                                                        "value": "12"
                                                    }
                                                }
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 3524,
                                                "end": 3533,
                                                "loc": {
                                                    "start": {"line": 131, "column": 12},
                                                    "end": {"line": 131, "column": 21}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 3524,
                                                    "end": 3532,
                                                    "loc": {
                                                        "start": {"line": 131, "column": 12},
                                                        "end": {"line": 131, "column": 20}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 3524,
                                                        "end": 3530,
                                                        "loc": {
                                                            "start": {"line": 131, "column": 12},
                                                            "end": {"line": 131, "column": 18},
                                                            "identifierName": "decFun"
                                                        },
                                                        "name": "decFun"
                                                    },
                                                    "arguments": []
                                                }
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 3546,
                                                "end": 3575,
                                                "loc": {
                                                    "start": {"line": 132, "column": 12},
                                                    "end": {"line": 132, "column": 41}
                                                },
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "start": 3546,
                                                    "end": 3574,
                                                    "loc": {
                                                        "start": {"line": 132, "column": 12},
                                                        "end": {"line": 132, "column": 40}
                                                    },
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "MemberExpression",
                                                        "start": 3546,
                                                        "end": 3568,
                                                        "loc": {
                                                            "start": {"line": 132, "column": 12},
                                                            "end": {"line": 132, "column": 34}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3546,
                                                            "end": 3555,
                                                            "loc": {
                                                                "start": {"line": 132, "column": 12},
                                                                "end": {"line": 132, "column": 21},
                                                                "identifierName": "scopeData"
                                                            },
                                                            "name": "scopeData"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3556,
                                                            "end": 3568,
                                                            "loc": {
                                                                "start": {"line": 132, "column": 22},
                                                                "end": {"line": 132, "column": 34},
                                                                "identifierName": "funScopeVar1"
                                                            },
                                                            "name": "funScopeVar1"
                                                        },
                                                        "computed": false
                                                    },
                                                    "right": {
                                                        "type": "StringLiteral",
                                                        "start": 3571,
                                                        "end": 3574,
                                                        "loc": {
                                                            "start": {"line": 132, "column": 37},
                                                            "end": {"line": 132, "column": 40}
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
                                    "start": 3088,
                                    "end": 3102,
                                    "loc": {"start": {"line": 116, "column": 8}, "end": {"line": 116, "column": 22}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentBlock",
                                    "value": "*\n         * 表达式\n         ",
                                    "start": 3597,
                                    "end": 3627,
                                    "loc": {"start": {"line": 136, "column": 8}, "end": {"line": 138, "column": 11}}
                                }]
                            }, {
                                "type": "FunctionDeclaration",
                                "start": 3636,
                                "end": 3719,
                                "loc": {"start": {"line": 139, "column": 8}, "end": {"line": 141, "column": 9}},
                                "id": {
                                    "type": "Identifier",
                                    "start": 3645,
                                    "end": 3651,
                                    "loc": {
                                        "start": {"line": 139, "column": 17},
                                        "end": {"line": 139, "column": 23},
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
                                    "start": 3652,
                                    "end": 3658,
                                    "loc": {
                                        "start": {"line": 139, "column": 24},
                                        "end": {"line": 139, "column": 30},
                                        "identifierName": "param1"
                                    },
                                    "name": "param1"
                                }, {
                                    "type": "Identifier",
                                    "start": 3660,
                                    "end": 3666,
                                    "loc": {
                                        "start": {"line": 139, "column": 32},
                                        "end": {"line": 139, "column": 38},
                                        "identifierName": "param2"
                                    },
                                    "name": "param2"
                                }],
                                "body": {
                                    "type": "BlockStatement",
                                    "start": 3668,
                                    "end": 3719,
                                    "loc": {"start": {"line": 139, "column": 40}, "end": {"line": 141, "column": 9}},
                                    "body": [{
                                        "type": "ExpressionStatement",
                                        "start": 3682,
                                        "end": 3709,
                                        "loc": {
                                            "start": {"line": 140, "column": 12},
                                            "end": {"line": 140, "column": 39}
                                        },
                                        "expression": {
                                            "type": "CallExpression",
                                            "start": 3682,
                                            "end": 3709,
                                            "loc": {
                                                "start": {"line": 140, "column": 12},
                                                "end": {"line": 140, "column": 39}
                                            },
                                            "callee": {
                                                "type": "MemberExpression",
                                                "start": 3682,
                                                "end": 3693,
                                                "loc": {
                                                    "start": {"line": 140, "column": 12},
                                                    "end": {"line": 140, "column": 23}
                                                },
                                                "object": {
                                                    "type": "Identifier",
                                                    "start": 3682,
                                                    "end": 3689,
                                                    "loc": {
                                                        "start": {"line": 140, "column": 12},
                                                        "end": {"line": 140, "column": 19},
                                                        "identifierName": "console"
                                                    },
                                                    "name": "console"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "start": 3690,
                                                    "end": 3693,
                                                    "loc": {
                                                        "start": {"line": 140, "column": 20},
                                                        "end": {"line": 140, "column": 23},
                                                        "identifierName": "log"
                                                    },
                                                    "name": "log"
                                                },
                                                "computed": false
                                            },
                                            "arguments": [{
                                                "type": "Identifier",
                                                "start": 3694,
                                                "end": 3700,
                                                "loc": {
                                                    "start": {"line": 140, "column": 24},
                                                    "end": {"line": 140, "column": 30},
                                                    "identifierName": "param1"
                                                },
                                                "name": "param1"
                                            }, {
                                                "type": "Identifier",
                                                "start": 3702,
                                                "end": 3708,
                                                "loc": {
                                                    "start": {"line": 140, "column": 32},
                                                    "end": {"line": 140, "column": 38},
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
                                    "start": 3597,
                                    "end": 3627,
                                    "loc": {"start": {"line": 136, "column": 8}, "end": {"line": 138, "column": 11}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "直接调用",
                                    "start": 3729,
                                    "end": 3735,
                                    "loc": {"start": {"line": 143, "column": 8}, "end": {"line": 143, "column": 14}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 3744,
                                "end": 3754,
                                "loc": {"start": {"line": 144, "column": 8}, "end": {"line": 144, "column": 18}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 3744,
                                    "end": 3753,
                                    "loc": {"start": {"line": 144, "column": 8}, "end": {"line": 144, "column": 17}},
                                    "callee": {
                                        "type": "Identifier",
                                        "start": 3744,
                                        "end": 3751,
                                        "loc": {
                                            "start": {"line": 144, "column": 8},
                                            "end": {"line": 144, "column": 15},
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
                                    "start": 3729,
                                    "end": 3735,
                                    "loc": {"start": {"line": 143, "column": 8}, "end": {"line": 143, "column": 14}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "调用",
                                    "start": 3763,
                                    "end": 3767,
                                    "loc": {"start": {"line": 145, "column": 8}, "end": {"line": 145, "column": 12}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 3776,
                                "end": 3855,
                                "loc": {"start": {"line": 146, "column": 8}, "end": {"line": 148, "column": 11}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 3776,
                                    "end": 3854,
                                    "loc": {"start": {"line": 146, "column": 8}, "end": {"line": 148, "column": 10}},
                                    "callee": {
                                        "type": "MemberExpression",
                                        "start": 3776,
                                        "end": 3791,
                                        "loc": {
                                            "start": {"line": 146, "column": 8},
                                            "end": {"line": 146, "column": 23}
                                        },
                                        "object": {
                                            "type": "Identifier",
                                            "start": 3776,
                                            "end": 3782,
                                            "loc": {
                                                "start": {"line": 146, "column": 8},
                                                "end": {"line": 146, "column": 14},
                                                "identifierName": "$scope"
                                            },
                                            "name": "$scope",
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 3783,
                                            "end": 3791,
                                            "loc": {
                                                "start": {"line": 146, "column": 15},
                                                "end": {"line": 146, "column": 23},
                                                "identifierName": "scopeFun"
                                            },
                                            "name": "scopeFun"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "arguments": [{
                                        "type": "FunctionExpression",
                                        "start": 3792,
                                        "end": 3853,
                                        "loc": {
                                            "start": {"line": 146, "column": 24},
                                            "end": {"line": 148, "column": 9}
                                        },
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 3802,
                                            "end": 3808,
                                            "loc": {
                                                "start": {"line": 146, "column": 34},
                                                "end": {"line": 146, "column": 40},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 3810,
                                            "end": 3853,
                                            "loc": {
                                                "start": {"line": 146, "column": 42},
                                                "end": {"line": 148, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 3824,
                                                "end": 3843,
                                                "loc": {
                                                    "start": {"line": 147, "column": 12},
                                                    "end": {"line": 147, "column": 31}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 3824,
                                                    "end": 3843,
                                                    "loc": {
                                                        "start": {"line": 147, "column": 12},
                                                        "end": {"line": 147, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 3824,
                                                        "end": 3835,
                                                        "loc": {
                                                            "start": {"line": 147, "column": 12},
                                                            "end": {"line": 147, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3824,
                                                            "end": 3831,
                                                            "loc": {
                                                                "start": {"line": 147, "column": 12},
                                                                "end": {"line": 147, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3832,
                                                            "end": 3835,
                                                            "loc": {
                                                                "start": {"line": 147, "column": 20},
                                                                "end": {"line": 147, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 3836,
                                                        "end": 3842,
                                                        "loc": {
                                                            "start": {"line": 147, "column": 24},
                                                            "end": {"line": 147, "column": 30},
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
                                    "start": 3763,
                                    "end": 3767,
                                    "loc": {"start": {"line": 145, "column": 8}, "end": {"line": 145, "column": 12}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": " this.scopeFun2();",
                                    "start": 3864,
                                    "end": 3884,
                                    "loc": {"start": {"line": 149, "column": 8}, "end": {"line": 149, "column": 28}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 3893,
                                "end": 3917,
                                "loc": {"start": {"line": 150, "column": 8}, "end": {"line": 150, "column": 32}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 3893,
                                    "end": 3916,
                                    "loc": {"start": {"line": 150, "column": 8}, "end": {"line": 150, "column": 31}},
                                    "callee": {
                                        "type": "MemberExpression",
                                        "start": 3893,
                                        "end": 3914,
                                        "loc": {
                                            "start": {"line": 150, "column": 8},
                                            "end": {"line": 150, "column": 29}
                                        },
                                        "object": {
                                            "type": "MemberExpression",
                                            "start": 3893,
                                            "end": 3904,
                                            "loc": {
                                                "start": {"line": 150, "column": 8},
                                                "end": {"line": 150, "column": 19}
                                            },
                                            "object": {
                                                "type": "Identifier",
                                                "start": 3893,
                                                "end": 3899,
                                                "loc": {
                                                    "start": {"line": 150, "column": 8},
                                                    "end": {"line": 150, "column": 14},
                                                    "identifierName": "$scope"
                                                },
                                                "name": "$scope",
                                                "leadingComments": null
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 3900,
                                                "end": 3904,
                                                "loc": {
                                                    "start": {"line": 150, "column": 15},
                                                    "end": {"line": 150, "column": 19},
                                                    "identifierName": "data"
                                                },
                                                "name": "data"
                                            },
                                            "computed": false,
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 3905,
                                            "end": 3914,
                                            "loc": {
                                                "start": {"line": 150, "column": 20},
                                                "end": {"line": 150, "column": 29},
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
                                    "start": 3864,
                                    "end": 3884,
                                    "loc": {"start": {"line": 149, "column": 8}, "end": {"line": 149, "column": 28}}
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
        "start": 234,
        "end": 246,
        "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 20}}
    }, {
        "type": "CommentLine",
        "value": "commment",
        "start": 272,
        "end": 282,
        "loc": {"start": {"line": 18, "column": 25}, "end": {"line": 18, "column": 35}}
    }, {
        "type": "CommentLine",
        "value": "多级变量申明",
        "start": 291,
        "end": 299,
        "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "this comment",
        "start": 386,
        "end": 400,
        "loc": {"start": {"line": 22, "column": 8}, "end": {"line": 22, "column": 22}}
    }, {
        "type": "CommentLine",
        "value": "this comment1",
        "start": 427,
        "end": 442,
        "loc": {"start": {"line": 23, "column": 26}, "end": {"line": 23, "column": 41}}
    }, {
        "type": "CommentLine",
        "value": " this.test2 = function () {",
        "start": 483,
        "end": 512,
        "loc": {"start": {"line": 25, "column": 8}, "end": {"line": 25, "column": 37}}
    }, {
        "type": "CommentLine",
        "value": " }",
        "start": 522,
        "end": 526,
        "loc": {"start": {"line": 27, "column": 8}, "end": {"line": 27, "column": 12}}
    }, {
        "type": "CommentLine",
        "value": "变量赋值",
        "start": 535,
        "end": 541,
        "loc": {"start": {"line": 28, "column": 8}, "end": {"line": 28, "column": 14}}
    }, {
        "type": "CommentLine",
        "value": "单个变量申明",
        "start": 602,
        "end": 610,
        "loc": {"start": {"line": 30, "column": 8}, "end": {"line": 30, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "多个变量申明， 包括函数",
        "start": 666,
        "end": 680,
        "loc": {"start": {"line": 32, "column": 8}, "end": {"line": 32, "column": 22}}
    }, {
        "type": "CommentLine",
        "value": "函数直接申明",
        "start": 1615,
        "end": 1623,
        "loc": {"start": {"line": 67, "column": 8}, "end": {"line": 67, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "对象",
        "start": 1713,
        "end": 1717,
        "loc": {"start": {"line": 70, "column": 12}, "end": {"line": 70, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "scope函数初始化",
        "start": 2977,
        "end": 2989,
        "loc": {"start": {"line": 111, "column": 8}, "end": {"line": 111, "column": 20}}
    }, {
        "type": "CommentLine",
        "value": "scope多级初始化函数",
        "start": 3088,
        "end": 3102,
        "loc": {"start": {"line": 116, "column": 8}, "end": {"line": 116, "column": 22}}
    }, {
        "type": "CommentBlock",
        "value": "*\n         * 表达式\n         ",
        "start": 3597,
        "end": 3627,
        "loc": {"start": {"line": 136, "column": 8}, "end": {"line": 138, "column": 11}}
    }, {
        "type": "CommentLine",
        "value": "直接调用",
        "start": 3729,
        "end": 3735,
        "loc": {"start": {"line": 143, "column": 8}, "end": {"line": 143, "column": 14}}
    }, {
        "type": "CommentLine",
        "value": "调用",
        "start": 3763,
        "end": 3767,
        "loc": {"start": {"line": 145, "column": 8}, "end": {"line": 145, "column": 12}}
    }, {
        "type": "CommentLine",
        "value": " this.scopeFun2();",
        "start": 3864,
        "end": 3884,
        "loc": {"start": {"line": 149, "column": 8}, "end": {"line": 149, "column": 28}}
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
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "gVar1",
        "start": 159,
        "end": 164,
        "loc": {"start": {"line": 13, "column": 8}, "end": {"line": 13, "column": 13}}
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
        "start": 165,
        "end": 166,
        "loc": {"start": {"line": 13, "column": 14}, "end": {"line": 13, "column": 15}}
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
        "start": 167,
        "end": 171,
        "loc": {"start": {"line": 13, "column": 16}, "end": {"line": 13, "column": 20}}
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
        }, "start": 171, "end": 172, "loc": {"start": {"line": 13, "column": 20}, "end": {"line": 13, "column": 21}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "gFun1",
        "start": 181,
        "end": 186,
        "loc": {"start": {"line": 14, "column": 8}, "end": {"line": 14, "column": 13}}
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
        "start": 187,
        "end": 188,
        "loc": {"start": {"line": 14, "column": 14}, "end": {"line": 14, "column": 15}}
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
        "start": 189,
        "end": 197,
        "loc": {"start": {"line": 14, "column": 16}, "end": {"line": 14, "column": 24}}
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
        }, "start": 198, "end": 199, "loc": {"start": {"line": 14, "column": 25}, "end": {"line": 14, "column": 26}}
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
        }, "start": 199, "end": 200, "loc": {"start": {"line": 14, "column": 26}, "end": {"line": 14, "column": 27}}
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
        }, "start": 201, "end": 202, "loc": {"start": {"line": 14, "column": 28}, "end": {"line": 14, "column": 29}}
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
        }, "start": 224, "end": 225, "loc": {"start": {"line": 16, "column": 8}, "end": {"line": 16, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "scope变量初始化",
        "start": 234,
        "end": 246,
        "loc": {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 255,
        "end": 261,
        "loc": {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 14}}
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
        }, "start": 261, "end": 262, "loc": {"start": {"line": 18, "column": 14}, "end": {"line": 18, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 262,
        "end": 266,
        "loc": {"start": {"line": 18, "column": 15}, "end": {"line": 18, "column": 19}}
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
        "start": 267,
        "end": 268,
        "loc": {"start": {"line": 18, "column": 20}, "end": {"line": 18, "column": 21}}
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
        }, "start": 269, "end": 270, "loc": {"start": {"line": 18, "column": 22}, "end": {"line": 18, "column": 23}}
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
        }, "start": 270, "end": 271, "loc": {"start": {"line": 18, "column": 23}, "end": {"line": 18, "column": 24}}
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
        }, "start": 271, "end": 272, "loc": {"start": {"line": 18, "column": 24}, "end": {"line": 18, "column": 25}}
    }, {
        "type": "CommentLine",
        "value": "commment",
        "start": 272,
        "end": 282,
        "loc": {"start": {"line": 18, "column": 25}, "end": {"line": 18, "column": 35}}
    }, {
        "type": "CommentLine",
        "value": "多级变量申明",
        "start": 291,
        "end": 299,
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
        "start": 308,
        "end": 311,
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
        "value": "scopeData",
        "start": 312,
        "end": 321,
        "loc": {"start": {"line": 20, "column": 12}, "end": {"line": 20, "column": 21}}
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
        "start": 322,
        "end": 323,
        "loc": {"start": {"line": 20, "column": 22}, "end": {"line": 20, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 324,
        "end": 330,
        "loc": {"start": {"line": 20, "column": 24}, "end": {"line": 20, "column": 30}}
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
        }, "start": 330, "end": 331, "loc": {"start": {"line": 20, "column": 30}, "end": {"line": 20, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 331,
        "end": 335,
        "loc": {"start": {"line": 20, "column": 31}, "end": {"line": 20, "column": 35}}
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
        "start": 336,
        "end": 337,
        "loc": {"start": {"line": 20, "column": 36}, "end": {"line": 20, "column": 37}}
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
        }, "start": 338, "end": 339, "loc": {"start": {"line": 20, "column": 38}, "end": {"line": 20, "column": 39}}
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
        }, "start": 339, "end": 340, "loc": {"start": {"line": 20, "column": 39}, "end": {"line": 20, "column": 40}}
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
        }, "start": 340, "end": 341, "loc": {"start": {"line": 20, "column": 40}, "end": {"line": 20, "column": 41}}
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
        "start": 350,
        "end": 353,
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
        "value": "scopeData2",
        "start": 354,
        "end": 364,
        "loc": {"start": {"line": 21, "column": 12}, "end": {"line": 21, "column": 22}}
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
        "start": 365,
        "end": 366,
        "loc": {"start": {"line": 21, "column": 23}, "end": {"line": 21, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 367,
        "end": 376,
        "loc": {"start": {"line": 21, "column": 25}, "end": {"line": 21, "column": 34}}
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
        }, "start": 376, "end": 377, "loc": {"start": {"line": 21, "column": 34}, "end": {"line": 21, "column": 35}}
    }, {
        "type": "CommentLine",
        "value": "this comment",
        "start": 386,
        "end": 400,
        "loc": {"start": {"line": 22, "column": 8}, "end": {"line": 22, "column": 22}}
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
        "start": 409,
        "end": 413,
        "loc": {"start": {"line": 23, "column": 8}, "end": {"line": 23, "column": 12}}
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
        }, "start": 413, "end": 414, "loc": {"start": {"line": 23, "column": 12}, "end": {"line": 23, "column": 13}}
    }, {
        "type": {
            "label": "name",
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
        "start": 414,
        "end": 419,
        "loc": {"start": {"line": 23, "column": 13}, "end": {"line": 23, "column": 18}}
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
        "start": 420,
        "end": 421,
        "loc": {"start": {"line": 23, "column": 19}, "end": {"line": 23, "column": 20}}
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
        "start": 422,
        "end": 426,
        "loc": {"start": {"line": 23, "column": 21}, "end": {"line": 23, "column": 25}}
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
        }, "start": 426, "end": 427, "loc": {"start": {"line": 23, "column": 25}, "end": {"line": 23, "column": 26}}
    }, {
        "type": "CommentLine",
        "value": "this comment1",
        "start": 427,
        "end": 442,
        "loc": {"start": {"line": 23, "column": 26}, "end": {"line": 23, "column": 41}}
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
        "start": 451,
        "end": 455,
        "loc": {"start": {"line": 24, "column": 8}, "end": {"line": 24, "column": 12}}
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
        }, "start": 455, "end": 456, "loc": {"start": {"line": 24, "column": 12}, "end": {"line": 24, "column": 13}}
    }, {
        "type": {
            "label": "name",
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
        "start": 456,
        "end": 461,
        "loc": {"start": {"line": 24, "column": 13}, "end": {"line": 24, "column": 18}}
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
        "start": 462,
        "end": 463,
        "loc": {"start": {"line": 24, "column": 19}, "end": {"line": 24, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 464,
        "end": 473,
        "loc": {"start": {"line": 24, "column": 21}, "end": {"line": 24, "column": 30}}
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
        }, "start": 473, "end": 474, "loc": {"start": {"line": 24, "column": 30}, "end": {"line": 24, "column": 31}}
    }, {
        "type": "CommentLine",
        "value": " this.test2 = function () {",
        "start": 483,
        "end": 512,
        "loc": {"start": {"line": 25, "column": 8}, "end": {"line": 25, "column": 37}}
    }, {
        "type": "CommentLine",
        "value": " }",
        "start": 522,
        "end": 526,
        "loc": {"start": {"line": 27, "column": 8}, "end": {"line": 27, "column": 12}}
    }, {
        "type": "CommentLine",
        "value": "变量赋值",
        "start": 535,
        "end": 541,
        "loc": {"start": {"line": 28, "column": 8}, "end": {"line": 28, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 550,
        "end": 559,
        "loc": {"start": {"line": 29, "column": 8}, "end": {"line": 29, "column": 17}}
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
        }, "start": 559, "end": 560, "loc": {"start": {"line": 29, "column": 17}, "end": {"line": 29, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 560,
        "end": 563,
        "loc": {"start": {"line": 29, "column": 18}, "end": {"line": 29, "column": 21}}
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
        "start": 564,
        "end": 565,
        "loc": {"start": {"line": 29, "column": 22}, "end": {"line": 29, "column": 23}}
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
        "start": 566,
        "end": 574,
        "loc": {"start": {"line": 29, "column": 24}, "end": {"line": 29, "column": 32}}
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
        }, "start": 574, "end": 575, "loc": {"start": {"line": 29, "column": 32}, "end": {"line": 29, "column": 33}}
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
        }, "start": 575, "end": 576, "loc": {"start": {"line": 29, "column": 33}, "end": {"line": 29, "column": 34}}
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
        }, "start": 576, "end": 577, "loc": {"start": {"line": 29, "column": 34}, "end": {"line": 29, "column": 35}}
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
        }, "start": 577, "end": 578, "loc": {"start": {"line": 29, "column": 35}, "end": {"line": 29, "column": 36}}
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
        }, "start": 578, "end": 579, "loc": {"start": {"line": 29, "column": 36}, "end": {"line": 29, "column": 37}}
    }, {
        "type": {
            "label": "name",
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
        "start": 579,
        "end": 589,
        "loc": {"start": {"line": 29, "column": 37}, "end": {"line": 29, "column": 47}}
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
        "start": 589,
        "end": 590,
        "loc": {"start": {"line": 29, "column": 47}, "end": {"line": 29, "column": 48}}
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
        "start": 590,
        "end": 592,
        "loc": {"start": {"line": 29, "column": 48}, "end": {"line": 29, "column": 50}}
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
        }, "start": 592, "end": 593, "loc": {"start": {"line": 29, "column": 50}, "end": {"line": 29, "column": 51}}
    }, {
        "type": "CommentLine",
        "value": "单个变量申明",
        "start": 602,
        "end": 610,
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
        "start": 619,
        "end": 622,
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
        "value": "singleVariable",
        "start": 623,
        "end": 637,
        "loc": {"start": {"line": 31, "column": 12}, "end": {"line": 31, "column": 26}}
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
        "start": 638,
        "end": 639,
        "loc": {"start": {"line": 31, "column": 27}, "end": {"line": 31, "column": 28}}
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
        "start": 640,
        "end": 656,
        "loc": {"start": {"line": 31, "column": 29}, "end": {"line": 31, "column": 45}}
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
        }, "start": 656, "end": 657, "loc": {"start": {"line": 31, "column": 45}, "end": {"line": 31, "column": 46}}
    }, {
        "type": "CommentLine",
        "value": "多个变量申明， 包括函数",
        "start": 666,
        "end": 680,
        "loc": {"start": {"line": 32, "column": 8}, "end": {"line": 32, "column": 22}}
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
        "start": 689,
        "end": 692,
        "loc": {"start": {"line": 33, "column": 8}, "end": {"line": 33, "column": 11}}
    }, {
        "type": {
            "label": "name",
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
        "start": 693,
        "end": 701,
        "loc": {"start": {"line": 33, "column": 12}, "end": {"line": 33, "column": 20}}
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
        }, "start": 701, "end": 702, "loc": {"start": {"line": 33, "column": 20}, "end": {"line": 33, "column": 21}}
    }, {
        "type": {
            "label": "name",
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
        "start": 715,
        "end": 723,
        "loc": {"start": {"line": 34, "column": 12}, "end": {"line": 34, "column": 20}}
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
        "start": 724,
        "end": 725,
        "loc": {"start": {"line": 34, "column": 21}, "end": {"line": 34, "column": 22}}
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
        "start": 726,
        "end": 730,
        "loc": {"start": {"line": 34, "column": 23}, "end": {"line": 34, "column": 27}}
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
        }, "start": 730, "end": 731, "loc": {"start": {"line": 34, "column": 27}, "end": {"line": 34, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 744,
        "end": 752,
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
        "start": 753,
        "end": 754,
        "loc": {"start": {"line": 35, "column": 21}, "end": {"line": 35, "column": 22}}
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
        "start": 755,
        "end": 765,
        "loc": {"start": {"line": 35, "column": 23}, "end": {"line": 35, "column": 33}}
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
        }, "start": 765, "end": 766, "loc": {"start": {"line": 35, "column": 33}, "end": {"line": 35, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 779,
        "end": 786,
        "loc": {"start": {"line": 36, "column": 12}, "end": {"line": 36, "column": 19}}
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
        "start": 787,
        "end": 788,
        "loc": {"start": {"line": 36, "column": 20}, "end": {"line": 36, "column": 21}}
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
        "start": 789,
        "end": 797,
        "loc": {"start": {"line": 36, "column": 22}, "end": {"line": 36, "column": 30}}
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
        }, "start": 798, "end": 799, "loc": {"start": {"line": 36, "column": 31}, "end": {"line": 36, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 799,
        "end": 805,
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
        }, "start": 805, "end": 806, "loc": {"start": {"line": 36, "column": 38}, "end": {"line": 36, "column": 39}}
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
        }, "start": 807, "end": 808, "loc": {"start": {"line": 36, "column": 40}, "end": {"line": 36, "column": 41}}
    }, {
        "type": {
            "label": "name",
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
        "start": 825,
        "end": 832,
        "loc": {"start": {"line": 37, "column": 16}, "end": {"line": 37, "column": 23}}
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
        }, "start": 832, "end": 833, "loc": {"start": {"line": 37, "column": 23}, "end": {"line": 37, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 833,
        "end": 836,
        "loc": {"start": {"line": 37, "column": 24}, "end": {"line": 37, "column": 27}}
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
        }, "start": 836, "end": 837, "loc": {"start": {"line": 37, "column": 27}, "end": {"line": 37, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 837,
        "end": 843,
        "loc": {"start": {"line": 37, "column": 28}, "end": {"line": 37, "column": 34}}
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
        }, "start": 843, "end": 844, "loc": {"start": {"line": 37, "column": 34}, "end": {"line": 37, "column": 35}}
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
        }, "start": 857, "end": 858, "loc": {"start": {"line": 38, "column": 12}, "end": {"line": 38, "column": 13}}
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
        }, "start": 858, "end": 859, "loc": {"start": {"line": 38, "column": 13}, "end": {"line": 38, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 872,
        "end": 880,
        "loc": {"start": {"line": 39, "column": 12}, "end": {"line": 39, "column": 20}}
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
        "start": 881,
        "end": 882,
        "loc": {"start": {"line": 39, "column": 21}, "end": {"line": 39, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 883,
        "end": 892,
        "loc": {"start": {"line": 39, "column": 23}, "end": {"line": 39, "column": 32}}
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
        }, "start": 892, "end": 893, "loc": {"start": {"line": 39, "column": 32}, "end": {"line": 39, "column": 33}}
    }, {
        "type": {
            "label": "name",
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
        "start": 906,
        "end": 914,
        "loc": {"start": {"line": 40, "column": 12}, "end": {"line": 40, "column": 20}}
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
        "start": 915,
        "end": 916,
        "loc": {"start": {"line": 40, "column": 21}, "end": {"line": 40, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 917,
        "end": 922,
        "loc": {"start": {"line": 40, "column": 23}, "end": {"line": 40, "column": 28}}
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
        }, "start": 922, "end": 923, "loc": {"start": {"line": 40, "column": 28}, "end": {"line": 40, "column": 29}}
    }, {
        "type": {
            "label": "name",
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
        "start": 923,
        "end": 930,
        "loc": {"start": {"line": 40, "column": 29}, "end": {"line": 40, "column": 36}}
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
        }, "start": 930, "end": 931, "loc": {"start": {"line": 40, "column": 36}, "end": {"line": 40, "column": 37}}
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
        }, "start": 931, "end": 932, "loc": {"start": {"line": 40, "column": 37}, "end": {"line": 40, "column": 38}}
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
        }, "start": 932, "end": 933, "loc": {"start": {"line": 40, "column": 38}, "end": {"line": 40, "column": 39}}
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
        "start": 943,
        "end": 945,
        "loc": {"start": {"line": 42, "column": 8}, "end": {"line": 42, "column": 10}}
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
        }, "start": 946, "end": 947, "loc": {"start": {"line": 42, "column": 11}, "end": {"line": 42, "column": 12}}
    }, {
        "type": {
            "label": "name",
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
        "start": 947,
        "end": 955,
        "loc": {"start": {"line": 42, "column": 12}, "end": {"line": 42, "column": 20}}
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
        }, "start": 955, "end": 956, "loc": {"start": {"line": 42, "column": 20}, "end": {"line": 42, "column": 21}}
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
        }, "start": 957, "end": 958, "loc": {"start": {"line": 42, "column": 22}, "end": {"line": 42, "column": 23}}
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
        "start": 971,
        "end": 974,
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
        "value": "ifVar1",
        "start": 975,
        "end": 981,
        "loc": {"start": {"line": 43, "column": 16}, "end": {"line": 43, "column": 22}}
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
        "start": 982,
        "end": 983,
        "loc": {"start": {"line": 43, "column": 23}, "end": {"line": 43, "column": 24}}
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
        "start": 984,
        "end": 985,
        "loc": {"start": {"line": 43, "column": 25}, "end": {"line": 43, "column": 26}}
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
        }, "start": 985, "end": 986, "loc": {"start": {"line": 43, "column": 26}, "end": {"line": 43, "column": 27}}
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
        "start": 999,
        "end": 1002,
        "loc": {"start": {"line": 44, "column": 12}, "end": {"line": 44, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1003,
        "end": 1009,
        "loc": {"start": {"line": 44, "column": 16}, "end": {"line": 44, "column": 22}}
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
        "start": 1010,
        "end": 1011,
        "loc": {"start": {"line": 44, "column": 23}, "end": {"line": 44, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1012,
        "end": 1020,
        "loc": {"start": {"line": 44, "column": 25}, "end": {"line": 44, "column": 33}}
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
        }, "start": 1020, "end": 1021, "loc": {"start": {"line": 44, "column": 33}, "end": {"line": 44, "column": 34}}
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
        }, "start": 1030, "end": 1031, "loc": {"start": {"line": 45, "column": 8}, "end": {"line": 45, "column": 9}}
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
        "start": 1041,
        "end": 1044,
        "loc": {"start": {"line": 47, "column": 8}, "end": {"line": 47, "column": 11}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1045,
        "end": 1051,
        "loc": {"start": {"line": 47, "column": 12}, "end": {"line": 47, "column": 18}}
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
        "start": 1052,
        "end": 1053,
        "loc": {"start": {"line": 47, "column": 19}, "end": {"line": 47, "column": 20}}
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
        }, "start": 1054, "end": 1055, "loc": {"start": {"line": 47, "column": 21}, "end": {"line": 47, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1068,
        "end": 1075,
        "loc": {"start": {"line": 48, "column": 12}, "end": {"line": 48, "column": 19}}
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
        }, "start": 1075, "end": 1076, "loc": {"start": {"line": 48, "column": 19}, "end": {"line": 48, "column": 20}}
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
        "start": 1077,
        "end": 1086,
        "loc": {"start": {"line": 48, "column": 21}, "end": {"line": 48, "column": 30}}
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
        }, "start": 1086, "end": 1087, "loc": {"start": {"line": 48, "column": 30}, "end": {"line": 48, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1100,
        "end": 1107,
        "loc": {"start": {"line": 49, "column": 12}, "end": {"line": 49, "column": 19}}
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
        }, "start": 1107, "end": 1108, "loc": {"start": {"line": 49, "column": 19}, "end": {"line": 49, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1109,
        "end": 1118,
        "loc": {"start": {"line": 49, "column": 21}, "end": {"line": 49, "column": 30}}
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
        }, "start": 1118, "end": 1119, "loc": {"start": {"line": 49, "column": 30}, "end": {"line": 49, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1132,
        "end": 1139,
        "loc": {"start": {"line": 50, "column": 12}, "end": {"line": 50, "column": 19}}
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
        }, "start": 1139, "end": 1140, "loc": {"start": {"line": 50, "column": 19}, "end": {"line": 50, "column": 20}}
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
        "start": 1141,
        "end": 1149,
        "loc": {"start": {"line": 50, "column": 21}, "end": {"line": 50, "column": 29}}
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
        }, "start": 1150, "end": 1151, "loc": {"start": {"line": 50, "column": 30}, "end": {"line": 50, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1151,
        "end": 1157,
        "loc": {"start": {"line": 50, "column": 31}, "end": {"line": 50, "column": 37}}
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
        }, "start": 1157, "end": 1158, "loc": {"start": {"line": 50, "column": 37}, "end": {"line": 50, "column": 38}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1159,
        "end": 1165,
        "loc": {"start": {"line": 50, "column": 39}, "end": {"line": 50, "column": 45}}
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
        }, "start": 1165, "end": 1166, "loc": {"start": {"line": 50, "column": 45}, "end": {"line": 50, "column": 46}}
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
        }, "start": 1167, "end": 1168, "loc": {"start": {"line": 50, "column": 47}, "end": {"line": 50, "column": 48}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1185,
        "end": 1191,
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
        "start": 1192,
        "end": 1193,
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
        "start": 1194,
        "end": 1202,
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
        }, "start": 1202, "end": 1203, "loc": {"start": {"line": 51, "column": 33}, "end": {"line": 51, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1220,
        "end": 1226,
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
        "start": 1227,
        "end": 1228,
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
        "start": 1229,
        "end": 1235,
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
        }, "start": 1235, "end": 1236, "loc": {"start": {"line": 52, "column": 31}, "end": {"line": 52, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1236,
        "end": 1240,
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
        }, "start": 1240, "end": 1241, "loc": {"start": {"line": 52, "column": 36}, "end": {"line": 52, "column": 37}}
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
        }, "start": 1254, "end": 1255, "loc": {"start": {"line": 53, "column": 12}, "end": {"line": 53, "column": 13}}
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
        }, "start": 1255, "end": 1256, "loc": {"start": {"line": 53, "column": 13}, "end": {"line": 53, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1269,
        "end": 1276,
        "loc": {"start": {"line": 54, "column": 12}, "end": {"line": 54, "column": 19}}
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
        }, "start": 1276, "end": 1277, "loc": {"start": {"line": 54, "column": 19}, "end": {"line": 54, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1277,
        "end": 1283,
        "loc": {"start": {"line": 54, "column": 20}, "end": {"line": 54, "column": 26}}
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
        }, "start": 1283, "end": 1284, "loc": {"start": {"line": 54, "column": 26}, "end": {"line": 54, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1285,
        "end": 1291,
        "loc": {"start": {"line": 54, "column": 28}, "end": {"line": 54, "column": 34}}
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
        }, "start": 1291, "end": 1292, "loc": {"start": {"line": 54, "column": 34}, "end": {"line": 54, "column": 35}}
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
        }, "start": 1292, "end": 1293, "loc": {"start": {"line": 54, "column": 35}, "end": {"line": 54, "column": 36}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1310,
        "end": 1316,
        "loc": {"start": {"line": 55, "column": 16}, "end": {"line": 55, "column": 22}}
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
        "start": 1317,
        "end": 1318,
        "loc": {"start": {"line": 55, "column": 23}, "end": {"line": 55, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1319,
        "end": 1327,
        "loc": {"start": {"line": 55, "column": 25}, "end": {"line": 55, "column": 33}}
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
        }, "start": 1327, "end": 1328, "loc": {"start": {"line": 55, "column": 33}, "end": {"line": 55, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1345,
        "end": 1351,
        "loc": {"start": {"line": 56, "column": 16}, "end": {"line": 56, "column": 22}}
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
        "start": 1352,
        "end": 1353,
        "loc": {"start": {"line": 56, "column": 23}, "end": {"line": 56, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1354,
        "end": 1360,
        "loc": {"start": {"line": 56, "column": 25}, "end": {"line": 56, "column": 31}}
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
        }, "start": 1360, "end": 1361, "loc": {"start": {"line": 56, "column": 31}, "end": {"line": 56, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1361,
        "end": 1365,
        "loc": {"start": {"line": 56, "column": 32}, "end": {"line": 56, "column": 36}}
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
        }, "start": 1365, "end": 1366, "loc": {"start": {"line": 56, "column": 36}, "end": {"line": 56, "column": 37}}
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
        "start": 1383,
        "end": 1389,
        "loc": {"start": {"line": 57, "column": 16}, "end": {"line": 57, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1390,
        "end": 1398,
        "loc": {"start": {"line": 57, "column": 23}, "end": {"line": 57, "column": 31}}
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
        }, "start": 1398, "end": 1399, "loc": {"start": {"line": 57, "column": 31}, "end": {"line": 57, "column": 32}}
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
        }, "start": 1412, "end": 1413, "loc": {"start": {"line": 58, "column": 12}, "end": {"line": 58, "column": 13}}
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
        }, "start": 1413, "end": 1414, "loc": {"start": {"line": 58, "column": 13}, "end": {"line": 58, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1427,
        "end": 1430,
        "loc": {"start": {"line": 59, "column": 12}, "end": {"line": 59, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1431,
        "end": 1436,
        "loc": {"start": {"line": 59, "column": 16}, "end": {"line": 59, "column": 21}}
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
        }, "start": 1436, "end": 1437, "loc": {"start": {"line": 59, "column": 21}, "end": {"line": 59, "column": 22}}
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
        }, "start": 1437, "end": 1438, "loc": {"start": {"line": 59, "column": 22}, "end": {"line": 59, "column": 23}}
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
        }, "start": 1439, "end": 1440, "loc": {"start": {"line": 59, "column": 24}, "end": {"line": 59, "column": 25}}
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
        "start": 1457,
        "end": 1463,
        "loc": {"start": {"line": 60, "column": 16}, "end": {"line": 60, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1464,
        "end": 1472,
        "loc": {"start": {"line": 60, "column": 23}, "end": {"line": 60, "column": 31}}
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
        }, "start": 1472, "end": 1473, "loc": {"start": {"line": 60, "column": 31}, "end": {"line": 60, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1473,
        "end": 1481,
        "loc": {"start": {"line": 60, "column": 32}, "end": {"line": 60, "column": 40}}
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
        }, "start": 1481, "end": 1482, "loc": {"start": {"line": 60, "column": 40}, "end": {"line": 60, "column": 41}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1483,
        "end": 1492,
        "loc": {"start": {"line": 60, "column": 42}, "end": {"line": 60, "column": 51}}
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
        }, "start": 1492, "end": 1493, "loc": {"start": {"line": 60, "column": 51}, "end": {"line": 60, "column": 52}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1493,
        "end": 1497,
        "loc": {"start": {"line": 60, "column": 52}, "end": {"line": 60, "column": 56}}
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
        }, "start": 1497, "end": 1498, "loc": {"start": {"line": 60, "column": 56}, "end": {"line": 60, "column": 57}}
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
        }, "start": 1511, "end": 1512, "loc": {"start": {"line": 61, "column": 12}, "end": {"line": 61, "column": 13}}
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
        }, "start": 1512, "end": 1513, "loc": {"start": {"line": 61, "column": 13}, "end": {"line": 61, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1526,
        "end": 1529,
        "loc": {"start": {"line": 62, "column": 12}, "end": {"line": 62, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1530,
        "end": 1535,
        "loc": {"start": {"line": 62, "column": 16}, "end": {"line": 62, "column": 21}}
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
        }, "start": 1535, "end": 1536, "loc": {"start": {"line": 62, "column": 21}, "end": {"line": 62, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1536,
        "end": 1541,
        "loc": {"start": {"line": 62, "column": 22}, "end": {"line": 62, "column": 27}}
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
        }, "start": 1541, "end": 1542, "loc": {"start": {"line": 62, "column": 27}, "end": {"line": 62, "column": 28}}
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
        }, "start": 1543, "end": 1544, "loc": {"start": {"line": 62, "column": 29}, "end": {"line": 62, "column": 30}}
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
        "start": 1561,
        "end": 1565,
        "loc": {"start": {"line": 63, "column": 16}, "end": {"line": 63, "column": 20}}
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
        }, "start": 1565, "end": 1566, "loc": {"start": {"line": 63, "column": 20}, "end": {"line": 63, "column": 21}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1566,
        "end": 1573,
        "loc": {"start": {"line": 63, "column": 21}, "end": {"line": 63, "column": 28}}
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
        "start": 1574,
        "end": 1575,
        "loc": {"start": {"line": 63, "column": 29}, "end": {"line": 63, "column": 30}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1576,
        "end": 1581,
        "loc": {"start": {"line": 63, "column": 31}, "end": {"line": 63, "column": 36}}
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
        }, "start": 1594, "end": 1595, "loc": {"start": {"line": 64, "column": 12}, "end": {"line": 64, "column": 13}}
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
        }, "start": 1604, "end": 1605, "loc": {"start": {"line": 65, "column": 8}, "end": {"line": 65, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "函数直接申明",
        "start": 1615,
        "end": 1623,
        "loc": {"start": {"line": 67, "column": 8}, "end": {"line": 67, "column": 16}}
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
        "start": 1632,
        "end": 1635,
        "loc": {"start": {"line": 68, "column": 8}, "end": {"line": 68, "column": 11}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1636,
        "end": 1645,
        "loc": {"start": {"line": 68, "column": 12}, "end": {"line": 68, "column": 21}}
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
        "start": 1646,
        "end": 1647,
        "loc": {"start": {"line": 68, "column": 22}, "end": {"line": 68, "column": 23}}
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
        "start": 1648,
        "end": 1656,
        "loc": {"start": {"line": 68, "column": 24}, "end": {"line": 68, "column": 32}}
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
        }, "start": 1657, "end": 1658, "loc": {"start": {"line": 68, "column": 33}, "end": {"line": 68, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1658,
        "end": 1664,
        "loc": {"start": {"line": 68, "column": 34}, "end": {"line": 68, "column": 40}}
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
        }, "start": 1664, "end": 1665, "loc": {"start": {"line": 68, "column": 40}, "end": {"line": 68, "column": 41}}
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
        }, "start": 1666, "end": 1667, "loc": {"start": {"line": 68, "column": 42}, "end": {"line": 68, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1680,
        "end": 1687,
        "loc": {"start": {"line": 69, "column": 12}, "end": {"line": 69, "column": 19}}
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
        }, "start": 1687, "end": 1688, "loc": {"start": {"line": 69, "column": 19}, "end": {"line": 69, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1688,
        "end": 1691,
        "loc": {"start": {"line": 69, "column": 20}, "end": {"line": 69, "column": 23}}
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
        }, "start": 1691, "end": 1692, "loc": {"start": {"line": 69, "column": 23}, "end": {"line": 69, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1692,
        "end": 1698,
        "loc": {"start": {"line": 69, "column": 24}, "end": {"line": 69, "column": 30}}
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
        }, "start": 1698, "end": 1699, "loc": {"start": {"line": 69, "column": 30}, "end": {"line": 69, "column": 31}}
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
        }, "start": 1699, "end": 1700, "loc": {"start": {"line": 69, "column": 31}, "end": {"line": 69, "column": 32}}
    }, {
        "type": "CommentLine",
        "value": "对象",
        "start": 1713,
        "end": 1717,
        "loc": {"start": {"line": 70, "column": 12}, "end": {"line": 70, "column": 16}}
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
        "start": 1730,
        "end": 1733,
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
        "value": "obj",
        "start": 1734,
        "end": 1737,
        "loc": {"start": {"line": 71, "column": 16}, "end": {"line": 71, "column": 19}}
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
        "start": 1738,
        "end": 1739,
        "loc": {"start": {"line": 71, "column": 20}, "end": {"line": 71, "column": 21}}
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
        }, "start": 1740, "end": 1741, "loc": {"start": {"line": 71, "column": 22}, "end": {"line": 71, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1758,
        "end": 1765,
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
        }, "start": 1765, "end": 1766, "loc": {"start": {"line": 72, "column": 23}, "end": {"line": 72, "column": 24}}
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
        "start": 1767,
        "end": 1776,
        "loc": {"start": {"line": 72, "column": 25}, "end": {"line": 72, "column": 34}}
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
        }, "start": 1776, "end": 1777, "loc": {"start": {"line": 72, "column": 34}, "end": {"line": 72, "column": 35}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1794,
        "end": 1801,
        "loc": {"start": {"line": 73, "column": 16}, "end": {"line": 73, "column": 23}}
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
        }, "start": 1801, "end": 1802, "loc": {"start": {"line": 73, "column": 23}, "end": {"line": 73, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1802,
        "end": 1808,
        "loc": {"start": {"line": 73, "column": 24}, "end": {"line": 73, "column": 30}}
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
        }, "start": 1808, "end": 1809, "loc": {"start": {"line": 73, "column": 30}, "end": {"line": 73, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1810,
        "end": 1816,
        "loc": {"start": {"line": 73, "column": 32}, "end": {"line": 73, "column": 38}}
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
        }, "start": 1816, "end": 1817, "loc": {"start": {"line": 73, "column": 38}, "end": {"line": 73, "column": 39}}
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
        }, "start": 1817, "end": 1818, "loc": {"start": {"line": 73, "column": 39}, "end": {"line": 73, "column": 40}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1839,
        "end": 1846,
        "loc": {"start": {"line": 74, "column": 20}, "end": {"line": 74, "column": 27}}
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
        }, "start": 1846, "end": 1847, "loc": {"start": {"line": 74, "column": 27}, "end": {"line": 74, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1847,
        "end": 1850,
        "loc": {"start": {"line": 74, "column": 28}, "end": {"line": 74, "column": 31}}
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
        }, "start": 1850, "end": 1851, "loc": {"start": {"line": 74, "column": 31}, "end": {"line": 74, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "loc": {"start": {"line": 74, "column": 32}, "end": {"line": 74, "column": 38}}
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
        }, "start": 1857, "end": 1858, "loc": {"start": {"line": 74, "column": 38}, "end": {"line": 74, "column": 39}}
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
        }, "start": 1875, "end": 1876, "loc": {"start": {"line": 75, "column": 16}, "end": {"line": 75, "column": 17}}
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
        }, "start": 1876, "end": 1877, "loc": {"start": {"line": 75, "column": 17}, "end": {"line": 75, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1894,
        "end": 1901,
        "loc": {"start": {"line": 76, "column": 16}, "end": {"line": 76, "column": 23}}
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
        }, "start": 1901, "end": 1902, "loc": {"start": {"line": 76, "column": 23}, "end": {"line": 76, "column": 24}}
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
        "start": 1903,
        "end": 1911,
        "loc": {"start": {"line": 76, "column": 25}, "end": {"line": 76, "column": 33}}
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
        }, "start": 1912, "end": 1913, "loc": {"start": {"line": 76, "column": 34}, "end": {"line": 76, "column": 35}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1913,
        "end": 1919,
        "loc": {"start": {"line": 76, "column": 35}, "end": {"line": 76, "column": 41}}
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
        }, "start": 1919, "end": 1920, "loc": {"start": {"line": 76, "column": 41}, "end": {"line": 76, "column": 42}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1921,
        "end": 1927,
        "loc": {"start": {"line": 76, "column": 43}, "end": {"line": 76, "column": 49}}
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
        }, "start": 1927, "end": 1928, "loc": {"start": {"line": 76, "column": 49}, "end": {"line": 76, "column": 50}}
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
        }, "start": 1929, "end": 1930, "loc": {"start": {"line": 76, "column": 51}, "end": {"line": 76, "column": 52}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1951,
        "end": 1958,
        "loc": {"start": {"line": 77, "column": 20}, "end": {"line": 77, "column": 27}}
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
        }, "start": 1958, "end": 1959, "loc": {"start": {"line": 77, "column": 27}, "end": {"line": 77, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1959,
        "end": 1962,
        "loc": {"start": {"line": 77, "column": 28}, "end": {"line": 77, "column": 31}}
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
        }, "start": 1962, "end": 1963, "loc": {"start": {"line": 77, "column": 31}, "end": {"line": 77, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1963,
        "end": 1969,
        "loc": {"start": {"line": 77, "column": 32}, "end": {"line": 77, "column": 38}}
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
        }, "start": 1969, "end": 1970, "loc": {"start": {"line": 77, "column": 38}, "end": {"line": 77, "column": 39}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1971,
        "end": 1977,
        "loc": {"start": {"line": 77, "column": 40}, "end": {"line": 77, "column": 46}}
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
        }, "start": 1977, "end": 1978, "loc": {"start": {"line": 77, "column": 46}, "end": {"line": 77, "column": 47}}
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
        }, "start": 1978, "end": 1979, "loc": {"start": {"line": 77, "column": 47}, "end": {"line": 77, "column": 48}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2000,
        "end": 2008,
        "loc": {"start": {"line": 78, "column": 20}, "end": {"line": 78, "column": 28}}
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
        "start": 2009,
        "end": 2010,
        "loc": {"start": {"line": 78, "column": 29}, "end": {"line": 78, "column": 30}}
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
        "start": 2011,
        "end": 2013,
        "loc": {"start": {"line": 78, "column": 31}, "end": {"line": 78, "column": 33}}
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
        }, "start": 2013, "end": 2014, "loc": {"start": {"line": 78, "column": 33}, "end": {"line": 78, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2035,
        "end": 2041,
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
        }, "start": 2041, "end": 2042, "loc": {"start": {"line": 79, "column": 26}, "end": {"line": 79, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2042,
        "end": 2046,
        "loc": {"start": {"line": 79, "column": 27}, "end": {"line": 79, "column": 31}}
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
        }, "start": 2046, "end": 2047, "loc": {"start": {"line": 79, "column": 31}, "end": {"line": 79, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2047,
        "end": 2055,
        "loc": {"start": {"line": 79, "column": 32}, "end": {"line": 79, "column": 40}}
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
        "start": 2056,
        "end": 2057,
        "loc": {"start": {"line": 79, "column": 41}, "end": {"line": 79, "column": 42}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2058,
        "end": 2066,
        "loc": {"start": {"line": 79, "column": 43}, "end": {"line": 79, "column": 51}}
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
        }, "start": 2066, "end": 2067, "loc": {"start": {"line": 79, "column": 51}, "end": {"line": 79, "column": 52}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2088,
        "end": 2094,
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
        }, "start": 2094, "end": 2095, "loc": {"start": {"line": 80, "column": 26}, "end": {"line": 80, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2095,
        "end": 2099,
        "loc": {"start": {"line": 80, "column": 27}, "end": {"line": 80, "column": 31}}
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
        }, "start": 2099, "end": 2100, "loc": {"start": {"line": 80, "column": 31}, "end": {"line": 80, "column": 32}}
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
        "start": 2100,
        "end": 2110,
        "loc": {"start": {"line": 80, "column": 32}, "end": {"line": 80, "column": 42}}
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
        }, "start": 2110, "end": 2111, "loc": {"start": {"line": 80, "column": 42}, "end": {"line": 80, "column": 43}}
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
        "start": 2112,
        "end": 2113,
        "loc": {"start": {"line": 80, "column": 44}, "end": {"line": 80, "column": 45}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2114,
        "end": 2124,
        "loc": {"start": {"line": 80, "column": 46}, "end": {"line": 80, "column": 56}}
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
        }, "start": 2124, "end": 2125, "loc": {"start": {"line": 80, "column": 56}, "end": {"line": 80, "column": 57}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2146,
        "end": 2152,
        "loc": {"start": {"line": 81, "column": 20}, "end": {"line": 81, "column": 26}}
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
        }, "start": 2152, "end": 2153, "loc": {"start": {"line": 81, "column": 26}, "end": {"line": 81, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2153,
        "end": 2157,
        "loc": {"start": {"line": 81, "column": 27}, "end": {"line": 81, "column": 31}}
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
        }, "start": 2157, "end": 2158, "loc": {"start": {"line": 81, "column": 31}, "end": {"line": 81, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2158,
        "end": 2166,
        "loc": {"start": {"line": 81, "column": 32}, "end": {"line": 81, "column": 40}}
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
        }, "start": 2166, "end": 2167, "loc": {"start": {"line": 81, "column": 40}, "end": {"line": 81, "column": 41}}
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
        "start": 2168,
        "end": 2169,
        "loc": {"start": {"line": 81, "column": 42}, "end": {"line": 81, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2170,
        "end": 2178,
        "loc": {"start": {"line": 81, "column": 44}, "end": {"line": 81, "column": 52}}
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
        }, "start": 2178, "end": 2179, "loc": {"start": {"line": 81, "column": 52}, "end": {"line": 81, "column": 53}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2200,
        "end": 2206,
        "loc": {"start": {"line": 82, "column": 20}, "end": {"line": 82, "column": 26}}
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
        }, "start": 2206, "end": 2207, "loc": {"start": {"line": 82, "column": 26}, "end": {"line": 82, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2207,
        "end": 2211,
        "loc": {"start": {"line": 82, "column": 27}, "end": {"line": 82, "column": 31}}
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
        }, "start": 2211, "end": 2212, "loc": {"start": {"line": 82, "column": 31}, "end": {"line": 82, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2212,
        "end": 2221,
        "loc": {"start": {"line": 82, "column": 32}, "end": {"line": 82, "column": 41}}
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
        }, "start": 2221, "end": 2222, "loc": {"start": {"line": 82, "column": 41}, "end": {"line": 82, "column": 42}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2222,
        "end": 2225,
        "loc": {"start": {"line": 82, "column": 42}, "end": {"line": 82, "column": 45}}
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
        }, "start": 2225, "end": 2226, "loc": {"start": {"line": 82, "column": 45}, "end": {"line": 82, "column": 46}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2226,
        "end": 2229,
        "loc": {"start": {"line": 82, "column": 46}, "end": {"line": 82, "column": 49}}
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
        }, "start": 2229, "end": 2230, "loc": {"start": {"line": 82, "column": 49}, "end": {"line": 82, "column": 50}}
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
        }, "start": 2230, "end": 2231, "loc": {"start": {"line": 82, "column": 50}, "end": {"line": 82, "column": 51}}
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
        "start": 2232,
        "end": 2233,
        "loc": {"start": {"line": 82, "column": 52}, "end": {"line": 82, "column": 53}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2234,
        "end": 2242,
        "loc": {"start": {"line": 82, "column": 54}, "end": {"line": 82, "column": 62}}
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
        }, "start": 2242, "end": 2243, "loc": {"start": {"line": 82, "column": 62}, "end": {"line": 82, "column": 63}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2264,
        "end": 2270,
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
        }, "start": 2270, "end": 2271, "loc": {"start": {"line": 83, "column": 26}, "end": {"line": 83, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2271,
        "end": 2275,
        "loc": {"start": {"line": 83, "column": 27}, "end": {"line": 83, "column": 31}}
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
        }, "start": 2275, "end": 2276, "loc": {"start": {"line": 83, "column": 31}, "end": {"line": 83, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2276,
        "end": 2285,
        "loc": {"start": {"line": 83, "column": 32}, "end": {"line": 83, "column": 41}}
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
        }, "start": 2285, "end": 2286, "loc": {"start": {"line": 83, "column": 41}, "end": {"line": 83, "column": 42}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2286,
        "end": 2289,
        "loc": {"start": {"line": 83, "column": 42}, "end": {"line": 83, "column": 45}}
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
        }, "start": 2289, "end": 2290, "loc": {"start": {"line": 83, "column": 45}, "end": {"line": 83, "column": 46}}
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
        }, "start": 2290, "end": 2291, "loc": {"start": {"line": 83, "column": 46}, "end": {"line": 83, "column": 47}}
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
        "start": 2292,
        "end": 2293,
        "loc": {"start": {"line": 83, "column": 48}, "end": {"line": 83, "column": 49}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2294,
        "end": 2302,
        "loc": {"start": {"line": 83, "column": 50}, "end": {"line": 83, "column": 58}}
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
        }, "start": 2302, "end": 2303, "loc": {"start": {"line": 83, "column": 58}, "end": {"line": 83, "column": 59}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2324,
        "end": 2330,
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
        }, "start": 2330, "end": 2331, "loc": {"start": {"line": 84, "column": 26}, "end": {"line": 84, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2331,
        "end": 2335,
        "loc": {"start": {"line": 84, "column": 27}, "end": {"line": 84, "column": 31}}
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
        }, "start": 2335, "end": 2336, "loc": {"start": {"line": 84, "column": 31}, "end": {"line": 84, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2336,
        "end": 2344,
        "loc": {"start": {"line": 84, "column": 32}, "end": {"line": 84, "column": 40}}
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
        }, "start": 2344, "end": 2345, "loc": {"start": {"line": 84, "column": 40}, "end": {"line": 84, "column": 41}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2345,
        "end": 2358,
        "loc": {"start": {"line": 84, "column": 41}, "end": {"line": 84, "column": 54}}
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
        }, "start": 2358, "end": 2359, "loc": {"start": {"line": 84, "column": 54}, "end": {"line": 84, "column": 55}}
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
        "start": 2360,
        "end": 2361,
        "loc": {"start": {"line": 84, "column": 56}, "end": {"line": 84, "column": 57}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2362,
        "end": 2370,
        "loc": {"start": {"line": 84, "column": 58}, "end": {"line": 84, "column": 66}}
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
        }, "start": 2370, "end": 2371, "loc": {"start": {"line": 84, "column": 66}, "end": {"line": 84, "column": 67}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2392,
        "end": 2398,
        "loc": {"start": {"line": 85, "column": 20}, "end": {"line": 85, "column": 26}}
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
        }, "start": 2398, "end": 2399, "loc": {"start": {"line": 85, "column": 26}, "end": {"line": 85, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2399,
        "end": 2403,
        "loc": {"start": {"line": 85, "column": 27}, "end": {"line": 85, "column": 31}}
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
        }, "start": 2403, "end": 2404, "loc": {"start": {"line": 85, "column": 31}, "end": {"line": 85, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2404,
        "end": 2410,
        "loc": {"start": {"line": 85, "column": 32}, "end": {"line": 85, "column": 38}}
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
        }, "start": 2410, "end": 2411, "loc": {"start": {"line": 85, "column": 38}, "end": {"line": 85, "column": 39}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2411,
        "end": 2422,
        "loc": {"start": {"line": 85, "column": 39}, "end": {"line": 85, "column": 50}}
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
        }, "start": 2422, "end": 2423, "loc": {"start": {"line": 85, "column": 50}, "end": {"line": 85, "column": 51}}
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
        "start": 2424,
        "end": 2425,
        "loc": {"start": {"line": 85, "column": 52}, "end": {"line": 85, "column": 53}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2426,
        "end": 2434,
        "loc": {"start": {"line": 85, "column": 54}, "end": {"line": 85, "column": 62}}
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
        }, "start": 2434, "end": 2435, "loc": {"start": {"line": 85, "column": 62}, "end": {"line": 85, "column": 63}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2456,
        "end": 2462,
        "loc": {"start": {"line": 86, "column": 20}, "end": {"line": 86, "column": 26}}
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
        }, "start": 2462, "end": 2463, "loc": {"start": {"line": 86, "column": 26}, "end": {"line": 86, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2463,
        "end": 2467,
        "loc": {"start": {"line": 86, "column": 27}, "end": {"line": 86, "column": 31}}
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
        }, "start": 2467, "end": 2468, "loc": {"start": {"line": 86, "column": 31}, "end": {"line": 86, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2468,
        "end": 2476,
        "loc": {"start": {"line": 86, "column": 32}, "end": {"line": 86, "column": 40}}
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
        "start": 2477,
        "end": 2478,
        "loc": {"start": {"line": 86, "column": 41}, "end": {"line": 86, "column": 42}}
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
        "start": 2479,
        "end": 2489,
        "loc": {"start": {"line": 86, "column": 43}, "end": {"line": 86, "column": 53}}
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
        }, "start": 2489, "end": 2490, "loc": {"start": {"line": 86, "column": 53}, "end": {"line": 86, "column": 54}}
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
        "start": 2511,
        "end": 2514,
        "loc": {"start": {"line": 87, "column": 20}, "end": {"line": 87, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2515,
        "end": 2527,
        "loc": {"start": {"line": 87, "column": 24}, "end": {"line": 87, "column": 36}}
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
        "start": 2528,
        "end": 2529,
        "loc": {"start": {"line": 87, "column": 37}, "end": {"line": 87, "column": 38}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2530,
        "end": 2537,
        "loc": {"start": {"line": 87, "column": 39}, "end": {"line": 87, "column": 46}}
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
        }, "start": 2537, "end": 2538, "loc": {"start": {"line": 87, "column": 46}, "end": {"line": 87, "column": 47}}
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
        "start": 2559,
        "end": 2562,
        "loc": {"start": {"line": 88, "column": 20}, "end": {"line": 88, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2563,
        "end": 2576,
        "loc": {"start": {"line": 88, "column": 24}, "end": {"line": 88, "column": 37}}
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
        "start": 2577,
        "end": 2578,
        "loc": {"start": {"line": 88, "column": 38}, "end": {"line": 88, "column": 39}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2579,
        "end": 2585,
        "loc": {"start": {"line": 88, "column": 40}, "end": {"line": 88, "column": 46}}
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
        }, "start": 2585, "end": 2586, "loc": {"start": {"line": 88, "column": 46}, "end": {"line": 88, "column": 47}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2586,
        "end": 2593,
        "loc": {"start": {"line": 88, "column": 47}, "end": {"line": 88, "column": 54}}
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
        }, "start": 2593, "end": 2594, "loc": {"start": {"line": 88, "column": 54}, "end": {"line": 88, "column": 55}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2615,
        "end": 2621,
        "loc": {"start": {"line": 89, "column": 20}, "end": {"line": 89, "column": 26}}
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
        }, "start": 2621, "end": 2622, "loc": {"start": {"line": 89, "column": 26}, "end": {"line": 89, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2622,
        "end": 2626,
        "loc": {"start": {"line": 89, "column": 27}, "end": {"line": 89, "column": 31}}
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
        }, "start": 2626, "end": 2627, "loc": {"start": {"line": 89, "column": 31}, "end": {"line": 89, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2627,
        "end": 2629,
        "loc": {"start": {"line": 89, "column": 32}, "end": {"line": 89, "column": 34}}
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
        }, "start": 2629, "end": 2630, "loc": {"start": {"line": 89, "column": 34}, "end": {"line": 89, "column": 35}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2630,
        "end": 2639,
        "loc": {"start": {"line": 89, "column": 35}, "end": {"line": 89, "column": 44}}
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
        }, "start": 2639, "end": 2640, "loc": {"start": {"line": 89, "column": 44}, "end": {"line": 89, "column": 45}}
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
        }, "start": 2640, "end": 2641, "loc": {"start": {"line": 89, "column": 45}, "end": {"line": 89, "column": 46}}
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
        }, "start": 2641, "end": 2642, "loc": {"start": {"line": 89, "column": 46}, "end": {"line": 89, "column": 47}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2663,
        "end": 2669,
        "loc": {"start": {"line": 90, "column": 20}, "end": {"line": 90, "column": 26}}
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
        }, "start": 2669, "end": 2670, "loc": {"start": {"line": 90, "column": 26}, "end": {"line": 90, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2670,
        "end": 2678,
        "loc": {"start": {"line": 90, "column": 27}, "end": {"line": 90, "column": 35}}
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
        }, "start": 2678, "end": 2679, "loc": {"start": {"line": 90, "column": 35}, "end": {"line": 90, "column": 36}}
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
        }, "start": 2679, "end": 2680, "loc": {"start": {"line": 90, "column": 36}, "end": {"line": 90, "column": 37}}
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
        }, "start": 2680, "end": 2681, "loc": {"start": {"line": 90, "column": 37}, "end": {"line": 90, "column": 38}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2702,
        "end": 2708,
        "loc": {"start": {"line": 91, "column": 20}, "end": {"line": 91, "column": 26}}
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
        }, "start": 2708, "end": 2709, "loc": {"start": {"line": 91, "column": 26}, "end": {"line": 91, "column": 27}}
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
        }, "start": 2709, "end": 2710, "loc": {"start": {"line": 91, "column": 27}, "end": {"line": 91, "column": 28}}
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
        }, "start": 2710, "end": 2711, "loc": {"start": {"line": 91, "column": 28}, "end": {"line": 91, "column": 29}}
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
        }, "start": 2728, "end": 2729, "loc": {"start": {"line": 92, "column": 16}, "end": {"line": 92, "column": 17}}
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
        }, "start": 2729, "end": 2730, "loc": {"start": {"line": 92, "column": 17}, "end": {"line": 92, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2747,
        "end": 2754,
        "loc": {"start": {"line": 93, "column": 16}, "end": {"line": 93, "column": 23}}
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
        }, "start": 2754, "end": 2755, "loc": {"start": {"line": 93, "column": 23}, "end": {"line": 93, "column": 24}}
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
        }, "start": 2756, "end": 2757, "loc": {"start": {"line": 93, "column": 25}, "end": {"line": 93, "column": 26}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2757,
        "end": 2759,
        "loc": {"start": {"line": 93, "column": 26}, "end": {"line": 93, "column": 28}}
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
        }, "start": 2759, "end": 2760, "loc": {"start": {"line": 93, "column": 28}, "end": {"line": 93, "column": 29}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2761,
        "end": 2763,
        "loc": {"start": {"line": 93, "column": 30}, "end": {"line": 93, "column": 32}}
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
        }, "start": 2763, "end": 2764, "loc": {"start": {"line": 93, "column": 32}, "end": {"line": 93, "column": 33}}
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
        }, "start": 2765, "end": 2767, "loc": {"start": {"line": 93, "column": 34}, "end": {"line": 93, "column": 36}}
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
        }, "start": 2768, "end": 2769, "loc": {"start": {"line": 93, "column": 37}, "end": {"line": 93, "column": 38}}
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
        }, "start": 2787, "end": 2788, "loc": {"start": {"line": 95, "column": 16}, "end": {"line": 95, "column": 17}}
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
        }, "start": 2788, "end": 2789, "loc": {"start": {"line": 95, "column": 17}, "end": {"line": 95, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2806,
        "end": 2809,
        "loc": {"start": {"line": 96, "column": 16}, "end": {"line": 96, "column": 19}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2810,
        "end": 2815,
        "loc": {"start": {"line": 96, "column": 20}, "end": {"line": 96, "column": 25}}
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
        }, "start": 2815, "end": 2816, "loc": {"start": {"line": 96, "column": 25}, "end": {"line": 96, "column": 26}}
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
        }, "start": 2816, "end": 2817, "loc": {"start": {"line": 96, "column": 26}, "end": {"line": 96, "column": 27}}
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
        }, "start": 2818, "end": 2819, "loc": {"start": {"line": 96, "column": 28}, "end": {"line": 96, "column": 29}}
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
        }, "start": 2837, "end": 2838, "loc": {"start": {"line": 98, "column": 16}, "end": {"line": 98, "column": 17}}
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
        }, "start": 2838, "end": 2839, "loc": {"start": {"line": 98, "column": 17}, "end": {"line": 98, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2856,
        "end": 2859,
        "loc": {"start": {"line": 99, "column": 16}, "end": {"line": 99, "column": 19}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2860,
        "end": 2865,
        "loc": {"start": {"line": 99, "column": 20}, "end": {"line": 99, "column": 25}}
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
        }, "start": 2865, "end": 2866, "loc": {"start": {"line": 99, "column": 25}, "end": {"line": 99, "column": 26}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2866,
        "end": 2871,
        "loc": {"start": {"line": 99, "column": 26}, "end": {"line": 99, "column": 31}}
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
        }, "start": 2871, "end": 2872, "loc": {"start": {"line": 99, "column": 31}, "end": {"line": 99, "column": 32}}
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
        }, "start": 2873, "end": 2874, "loc": {"start": {"line": 99, "column": 33}, "end": {"line": 99, "column": 34}}
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
        }, "start": 2892, "end": 2893, "loc": {"start": {"line": 101, "column": 16}, "end": {"line": 101, "column": 17}}
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
        }, "start": 2906, "end": 2907, "loc": {"start": {"line": 102, "column": 12}, "end": {"line": 102, "column": 13}}
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
        }, "start": 2917, "end": 2918, "loc": {"start": {"line": 104, "column": 8}, "end": {"line": 104, "column": 9}}
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
        "start": 2928,
        "end": 2931,
        "loc": {"start": {"line": 106, "column": 8}, "end": {"line": 106, "column": 11}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2932,
        "end": 2934,
        "loc": {"start": {"line": 106, "column": 12}, "end": {"line": 106, "column": 14}}
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
        "start": 2935,
        "end": 2936,
        "loc": {"start": {"line": 106, "column": 15}, "end": {"line": 106, "column": 16}}
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
        }, "start": 2938, "end": 2939, "loc": {"start": {"line": 106, "column": 18}, "end": {"line": 106, "column": 19}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2939,
        "end": 2940,
        "loc": {"start": {"line": 106, "column": 19}, "end": {"line": 106, "column": 20}}
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
        }, "start": 2940, "end": 2941, "loc": {"start": {"line": 106, "column": 20}, "end": {"line": 106, "column": 21}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2941,
        "end": 2942,
        "loc": {"start": {"line": 106, "column": 21}, "end": {"line": 106, "column": 22}}
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
        }, "start": 2942, "end": 2943, "loc": {"start": {"line": 106, "column": 22}, "end": {"line": 106, "column": 23}}
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
        }, "start": 2943, "end": 2945, "loc": {"start": {"line": 106, "column": 23}, "end": {"line": 106, "column": 25}}
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
        }, "start": 2946, "end": 2947, "loc": {"start": {"line": 106, "column": 26}, "end": {"line": 106, "column": 27}}
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
        }, "start": 2957, "end": 2958, "loc": {"start": {"line": 108, "column": 8}, "end": {"line": 108, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "scope函数初始化",
        "start": 2977,
        "end": 2989,
        "loc": {"start": {"line": 111, "column": 8}, "end": {"line": 111, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2998,
        "end": 3004,
        "loc": {"start": {"line": 112, "column": 8}, "end": {"line": 112, "column": 14}}
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
        }, "start": 3004, "end": 3005, "loc": {"start": {"line": 112, "column": 14}, "end": {"line": 112, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3005,
        "end": 3013,
        "loc": {"start": {"line": 112, "column": 15}, "end": {"line": 112, "column": 23}}
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
        "start": 3014,
        "end": 3015,
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
        "start": 3016,
        "end": 3024,
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
        }, "start": 3025, "end": 3026, "loc": {"start": {"line": 112, "column": 35}, "end": {"line": 112, "column": 36}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3026,
        "end": 3032,
        "loc": {"start": {"line": 112, "column": 36}, "end": {"line": 112, "column": 42}}
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
        }, "start": 3032, "end": 3033, "loc": {"start": {"line": 112, "column": 42}, "end": {"line": 112, "column": 43}}
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
        }, "start": 3034, "end": 3035, "loc": {"start": {"line": 112, "column": 44}, "end": {"line": 112, "column": 45}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3048,
        "end": 3055,
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
        }, "start": 3055, "end": 3056, "loc": {"start": {"line": 113, "column": 19}, "end": {"line": 113, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3056,
        "end": 3059,
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
        }, "start": 3059, "end": 3060, "loc": {"start": {"line": 113, "column": 23}, "end": {"line": 113, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3060,
        "end": 3066,
        "loc": {"start": {"line": 113, "column": 24}, "end": {"line": 113, "column": 30}}
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
        }, "start": 3066, "end": 3067, "loc": {"start": {"line": 113, "column": 30}, "end": {"line": 113, "column": 31}}
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
        }, "start": 3076, "end": 3077, "loc": {"start": {"line": 114, "column": 8}, "end": {"line": 114, "column": 9}}
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
        }, "start": 3077, "end": 3078, "loc": {"start": {"line": 114, "column": 9}, "end": {"line": 114, "column": 10}}
    }, {
        "type": "CommentLine",
        "value": "scope多级初始化函数",
        "start": 3088,
        "end": 3102,
        "loc": {"start": {"line": 116, "column": 8}, "end": {"line": 116, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3111,
        "end": 3117,
        "loc": {"start": {"line": 117, "column": 8}, "end": {"line": 117, "column": 14}}
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
        }, "start": 3117, "end": 3118, "loc": {"start": {"line": 117, "column": 14}, "end": {"line": 117, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3118,
        "end": 3122,
        "loc": {"start": {"line": 117, "column": 15}, "end": {"line": 117, "column": 19}}
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
        }, "start": 3122, "end": 3123, "loc": {"start": {"line": 117, "column": 19}, "end": {"line": 117, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3123,
        "end": 3125,
        "loc": {"start": {"line": 117, "column": 20}, "end": {"line": 117, "column": 22}}
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
        }, "start": 3125, "end": 3126, "loc": {"start": {"line": 117, "column": 22}, "end": {"line": 117, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3126,
        "end": 3135,
        "loc": {"start": {"line": 117, "column": 23}, "end": {"line": 117, "column": 32}}
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
        "start": 3136,
        "end": 3137,
        "loc": {"start": {"line": 117, "column": 33}, "end": {"line": 117, "column": 34}}
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
        "start": 3138,
        "end": 3146,
        "loc": {"start": {"line": 117, "column": 35}, "end": {"line": 117, "column": 43}}
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
        }, "start": 3147, "end": 3148, "loc": {"start": {"line": 117, "column": 44}, "end": {"line": 117, "column": 45}}
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
        }, "start": 3148, "end": 3149, "loc": {"start": {"line": 117, "column": 45}, "end": {"line": 117, "column": 46}}
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
        }, "start": 3150, "end": 3151, "loc": {"start": {"line": 117, "column": 47}, "end": {"line": 117, "column": 48}}
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
        "start": 3165,
        "end": 3168,
        "loc": {"start": {"line": 119, "column": 12}, "end": {"line": 119, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3169,
        "end": 3176,
        "loc": {"start": {"line": 119, "column": 16}, "end": {"line": 119, "column": 23}}
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
        "start": 3177,
        "end": 3178,
        "loc": {"start": {"line": 119, "column": 24}, "end": {"line": 119, "column": 25}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3179,
        "end": 3187,
        "loc": {"start": {"line": 119, "column": 26}, "end": {"line": 119, "column": 34}}
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
        }, "start": 3187, "end": 3188, "loc": {"start": {"line": 119, "column": 34}, "end": {"line": 119, "column": 35}}
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
        "start": 3201,
        "end": 3204,
        "loc": {"start": {"line": 120, "column": 12}, "end": {"line": 120, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3205,
        "end": 3212,
        "loc": {"start": {"line": 120, "column": 16}, "end": {"line": 120, "column": 23}}
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
        "start": 3213,
        "end": 3214,
        "loc": {"start": {"line": 120, "column": 24}, "end": {"line": 120, "column": 25}}
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
        "start": 3215,
        "end": 3223,
        "loc": {"start": {"line": 120, "column": 26}, "end": {"line": 120, "column": 34}}
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
        }, "start": 3224, "end": 3225, "loc": {"start": {"line": 120, "column": 35}, "end": {"line": 120, "column": 36}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3225,
        "end": 3231,
        "loc": {"start": {"line": 120, "column": 36}, "end": {"line": 120, "column": 42}}
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
        }, "start": 3231, "end": 3232, "loc": {"start": {"line": 120, "column": 42}, "end": {"line": 120, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3233,
        "end": 3239,
        "loc": {"start": {"line": 120, "column": 44}, "end": {"line": 120, "column": 50}}
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
        }, "start": 3239, "end": 3240, "loc": {"start": {"line": 120, "column": 50}, "end": {"line": 120, "column": 51}}
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
        }, "start": 3241, "end": 3242, "loc": {"start": {"line": 120, "column": 52}, "end": {"line": 120, "column": 53}}
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
        }, "start": 3256, "end": 3257, "loc": {"start": {"line": 122, "column": 12}, "end": {"line": 122, "column": 13}}
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
        }, "start": 3257, "end": 3258, "loc": {"start": {"line": 122, "column": 13}, "end": {"line": 122, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3271,
        "end": 3278,
        "loc": {"start": {"line": 123, "column": 12}, "end": {"line": 123, "column": 19}}
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
        }, "start": 3278, "end": 3279, "loc": {"start": {"line": 123, "column": 19}, "end": {"line": 123, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3279,
        "end": 3286,
        "loc": {"start": {"line": 123, "column": 20}, "end": {"line": 123, "column": 27}}
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
        }, "start": 3286, "end": 3287, "loc": {"start": {"line": 123, "column": 27}, "end": {"line": 123, "column": 28}}
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
        }, "start": 3287, "end": 3288, "loc": {"start": {"line": 123, "column": 28}, "end": {"line": 123, "column": 29}}
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
        }, "start": 3288, "end": 3289, "loc": {"start": {"line": 123, "column": 29}, "end": {"line": 123, "column": 30}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3289,
        "end": 3294,
        "loc": {"start": {"line": 123, "column": 30}, "end": {"line": 123, "column": 35}}
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
        }, "start": 3294, "end": 3295, "loc": {"start": {"line": 123, "column": 35}, "end": {"line": 123, "column": 36}}
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
        }, "start": 3295, "end": 3296, "loc": {"start": {"line": 123, "column": 36}, "end": {"line": 123, "column": 37}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3309,
        "end": 3316,
        "loc": {"start": {"line": 124, "column": 12}, "end": {"line": 124, "column": 19}}
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
        }, "start": 3316, "end": 3317, "loc": {"start": {"line": 124, "column": 19}, "end": {"line": 124, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3317,
        "end": 3325,
        "loc": {"start": {"line": 124, "column": 20}, "end": {"line": 124, "column": 28}}
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
        }, "start": 3325, "end": 3326, "loc": {"start": {"line": 124, "column": 28}, "end": {"line": 124, "column": 29}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3326,
        "end": 3339,
        "loc": {"start": {"line": 124, "column": 29}, "end": {"line": 124, "column": 42}}
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
        }, "start": 3339, "end": 3340, "loc": {"start": {"line": 124, "column": 42}, "end": {"line": 124, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3341,
        "end": 3347,
        "loc": {"start": {"line": 124, "column": 44}, "end": {"line": 124, "column": 50}}
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
        }, "start": 3347, "end": 3348, "loc": {"start": {"line": 124, "column": 50}, "end": {"line": 124, "column": 51}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3348,
        "end": 3352,
        "loc": {"start": {"line": 124, "column": 51}, "end": {"line": 124, "column": 55}}
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
        }, "start": 3352, "end": 3353, "loc": {"start": {"line": 124, "column": 55}, "end": {"line": 124, "column": 56}}
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
        }, "start": 3353, "end": 3354, "loc": {"start": {"line": 124, "column": 56}, "end": {"line": 124, "column": 57}}
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
        "start": 3367,
        "end": 3375,
        "loc": {"start": {"line": 125, "column": 12}, "end": {"line": 125, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3376,
        "end": 3384,
        "loc": {"start": {"line": 125, "column": 21}, "end": {"line": 125, "column": 29}}
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
        }, "start": 3384, "end": 3385, "loc": {"start": {"line": 125, "column": 29}, "end": {"line": 125, "column": 30}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3385,
        "end": 3391,
        "loc": {"start": {"line": 125, "column": 30}, "end": {"line": 125, "column": 36}}
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
        }, "start": 3391, "end": 3392, "loc": {"start": {"line": 125, "column": 36}, "end": {"line": 125, "column": 37}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3393,
        "end": 3399,
        "loc": {"start": {"line": 125, "column": 38}, "end": {"line": 125, "column": 44}}
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
        }, "start": 3399, "end": 3400, "loc": {"start": {"line": 125, "column": 44}, "end": {"line": 125, "column": 45}}
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
        }, "start": 3401, "end": 3402, "loc": {"start": {"line": 125, "column": 46}, "end": {"line": 125, "column": 47}}
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
        }, "start": 3416, "end": 3417, "loc": {"start": {"line": 127, "column": 12}, "end": {"line": 127, "column": 13}}
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
        "start": 3431,
        "end": 3434,
        "loc": {"start": {"line": 129, "column": 12}, "end": {"line": 129, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3435,
        "end": 3446,
        "loc": {"start": {"line": 129, "column": 16}, "end": {"line": 129, "column": 27}}
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
        "start": 3447,
        "end": 3448,
        "loc": {"start": {"line": 129, "column": 28}, "end": {"line": 129, "column": 29}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3449,
        "end": 3457,
        "loc": {"start": {"line": 129, "column": 30}, "end": {"line": 129, "column": 38}}
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
        }, "start": 3457, "end": 3458, "loc": {"start": {"line": 129, "column": 38}, "end": {"line": 129, "column": 39}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3458,
        "end": 3471,
        "loc": {"start": {"line": 129, "column": 39}, "end": {"line": 129, "column": 52}}
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
        }, "start": 3471, "end": 3472, "loc": {"start": {"line": 129, "column": 52}, "end": {"line": 129, "column": 53}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3485,
        "end": 3491,
        "loc": {"start": {"line": 130, "column": 12}, "end": {"line": 130, "column": 18}}
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
        }, "start": 3491, "end": 3492, "loc": {"start": {"line": 130, "column": 18}, "end": {"line": 130, "column": 19}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3492,
        "end": 3503,
        "loc": {"start": {"line": 130, "column": 19}, "end": {"line": 130, "column": 30}}
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
        "start": 3504,
        "end": 3505,
        "loc": {"start": {"line": 130, "column": 31}, "end": {"line": 130, "column": 32}}
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
        "start": 3506,
        "end": 3510,
        "loc": {"start": {"line": 130, "column": 33}, "end": {"line": 130, "column": 37}}
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
        }, "start": 3510, "end": 3511, "loc": {"start": {"line": 130, "column": 37}, "end": {"line": 130, "column": 38}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3524,
        "end": 3530,
        "loc": {"start": {"line": 131, "column": 12}, "end": {"line": 131, "column": 18}}
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
        }, "start": 3530, "end": 3531, "loc": {"start": {"line": 131, "column": 18}, "end": {"line": 131, "column": 19}}
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
        }, "start": 3531, "end": 3532, "loc": {"start": {"line": 131, "column": 19}, "end": {"line": 131, "column": 20}}
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
        }, "start": 3532, "end": 3533, "loc": {"start": {"line": 131, "column": 20}, "end": {"line": 131, "column": 21}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3546,
        "end": 3555,
        "loc": {"start": {"line": 132, "column": 12}, "end": {"line": 132, "column": 21}}
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
        }, "start": 3555, "end": 3556, "loc": {"start": {"line": 132, "column": 21}, "end": {"line": 132, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3556,
        "end": 3568,
        "loc": {"start": {"line": 132, "column": 22}, "end": {"line": 132, "column": 34}}
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
        "start": 3569,
        "end": 3570,
        "loc": {"start": {"line": 132, "column": 35}, "end": {"line": 132, "column": 36}}
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
        "start": 3571,
        "end": 3574,
        "loc": {"start": {"line": 132, "column": 37}, "end": {"line": 132, "column": 40}}
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
        }, "start": 3574, "end": 3575, "loc": {"start": {"line": 132, "column": 40}, "end": {"line": 132, "column": 41}}
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
        }, "start": 3585, "end": 3586, "loc": {"start": {"line": 134, "column": 8}, "end": {"line": 134, "column": 9}}
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
        }, "start": 3586, "end": 3587, "loc": {"start": {"line": 134, "column": 9}, "end": {"line": 134, "column": 10}}
    }, {
        "type": "CommentBlock",
        "value": "*\n         * 表达式\n         ",
        "start": 3597,
        "end": 3627,
        "loc": {"start": {"line": 136, "column": 8}, "end": {"line": 138, "column": 11}}
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
        "start": 3636,
        "end": 3644,
        "loc": {"start": {"line": 139, "column": 8}, "end": {"line": 139, "column": 16}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3645,
        "end": 3651,
        "loc": {"start": {"line": 139, "column": 17}, "end": {"line": 139, "column": 23}}
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
        }, "start": 3651, "end": 3652, "loc": {"start": {"line": 139, "column": 23}, "end": {"line": 139, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3652,
        "end": 3658,
        "loc": {"start": {"line": 139, "column": 24}, "end": {"line": 139, "column": 30}}
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
        }, "start": 3658, "end": 3659, "loc": {"start": {"line": 139, "column": 30}, "end": {"line": 139, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3660,
        "end": 3666,
        "loc": {"start": {"line": 139, "column": 32}, "end": {"line": 139, "column": 38}}
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
        }, "start": 3666, "end": 3667, "loc": {"start": {"line": 139, "column": 38}, "end": {"line": 139, "column": 39}}
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
        }, "start": 3668, "end": 3669, "loc": {"start": {"line": 139, "column": 40}, "end": {"line": 139, "column": 41}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3682,
        "end": 3689,
        "loc": {"start": {"line": 140, "column": 12}, "end": {"line": 140, "column": 19}}
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
        }, "start": 3689, "end": 3690, "loc": {"start": {"line": 140, "column": 19}, "end": {"line": 140, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3690,
        "end": 3693,
        "loc": {"start": {"line": 140, "column": 20}, "end": {"line": 140, "column": 23}}
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
        }, "start": 3693, "end": 3694, "loc": {"start": {"line": 140, "column": 23}, "end": {"line": 140, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3694,
        "end": 3700,
        "loc": {"start": {"line": 140, "column": 24}, "end": {"line": 140, "column": 30}}
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
        }, "start": 3700, "end": 3701, "loc": {"start": {"line": 140, "column": 30}, "end": {"line": 140, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3702,
        "end": 3708,
        "loc": {"start": {"line": 140, "column": 32}, "end": {"line": 140, "column": 38}}
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
        }, "start": 3708, "end": 3709, "loc": {"start": {"line": 140, "column": 38}, "end": {"line": 140, "column": 39}}
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
        }, "start": 3718, "end": 3719, "loc": {"start": {"line": 141, "column": 8}, "end": {"line": 141, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "直接调用",
        "start": 3729,
        "end": 3735,
        "loc": {"start": {"line": 143, "column": 8}, "end": {"line": 143, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3744,
        "end": 3751,
        "loc": {"start": {"line": 144, "column": 8}, "end": {"line": 144, "column": 15}}
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
        }, "start": 3751, "end": 3752, "loc": {"start": {"line": 144, "column": 15}, "end": {"line": 144, "column": 16}}
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
        }, "start": 3752, "end": 3753, "loc": {"start": {"line": 144, "column": 16}, "end": {"line": 144, "column": 17}}
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
        }, "start": 3753, "end": 3754, "loc": {"start": {"line": 144, "column": 17}, "end": {"line": 144, "column": 18}}
    }, {
        "type": "CommentLine",
        "value": "调用",
        "start": 3763,
        "end": 3767,
        "loc": {"start": {"line": 145, "column": 8}, "end": {"line": 145, "column": 12}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3776,
        "end": 3782,
        "loc": {"start": {"line": 146, "column": 8}, "end": {"line": 146, "column": 14}}
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
        }, "start": 3782, "end": 3783, "loc": {"start": {"line": 146, "column": 14}, "end": {"line": 146, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3783,
        "end": 3791,
        "loc": {"start": {"line": 146, "column": 15}, "end": {"line": 146, "column": 23}}
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
        }, "start": 3791, "end": 3792, "loc": {"start": {"line": 146, "column": 23}, "end": {"line": 146, "column": 24}}
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
        "start": 3792,
        "end": 3800,
        "loc": {"start": {"line": 146, "column": 24}, "end": {"line": 146, "column": 32}}
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
        }, "start": 3801, "end": 3802, "loc": {"start": {"line": 146, "column": 33}, "end": {"line": 146, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3802,
        "end": 3808,
        "loc": {"start": {"line": 146, "column": 34}, "end": {"line": 146, "column": 40}}
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
        }, "start": 3808, "end": 3809, "loc": {"start": {"line": 146, "column": 40}, "end": {"line": 146, "column": 41}}
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
        }, "start": 3810, "end": 3811, "loc": {"start": {"line": 146, "column": 42}, "end": {"line": 146, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3824,
        "end": 3831,
        "loc": {"start": {"line": 147, "column": 12}, "end": {"line": 147, "column": 19}}
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
        }, "start": 3831, "end": 3832, "loc": {"start": {"line": 147, "column": 19}, "end": {"line": 147, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3832,
        "end": 3835,
        "loc": {"start": {"line": 147, "column": 20}, "end": {"line": 147, "column": 23}}
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
        }, "start": 3835, "end": 3836, "loc": {"start": {"line": 147, "column": 23}, "end": {"line": 147, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3836,
        "end": 3842,
        "loc": {"start": {"line": 147, "column": 24}, "end": {"line": 147, "column": 30}}
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
        }, "start": 3842, "end": 3843, "loc": {"start": {"line": 147, "column": 30}, "end": {"line": 147, "column": 31}}
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
        }, "start": 3852, "end": 3853, "loc": {"start": {"line": 148, "column": 8}, "end": {"line": 148, "column": 9}}
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
        }, "start": 3853, "end": 3854, "loc": {"start": {"line": 148, "column": 9}, "end": {"line": 148, "column": 10}}
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
        }, "start": 3854, "end": 3855, "loc": {"start": {"line": 148, "column": 10}, "end": {"line": 148, "column": 11}}
    }, {
        "type": "CommentLine",
        "value": " this.scopeFun2();",
        "start": 3864,
        "end": 3884,
        "loc": {"start": {"line": 149, "column": 8}, "end": {"line": 149, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3893,
        "end": 3899,
        "loc": {"start": {"line": 150, "column": 8}, "end": {"line": 150, "column": 14}}
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
        }, "start": 3899, "end": 3900, "loc": {"start": {"line": 150, "column": 14}, "end": {"line": 150, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3900,
        "end": 3904,
        "loc": {"start": {"line": 150, "column": 15}, "end": {"line": 150, "column": 19}}
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
        }, "start": 3904, "end": 3905, "loc": {"start": {"line": 150, "column": 19}, "end": {"line": 150, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3905,
        "end": 3914,
        "loc": {"start": {"line": 150, "column": 20}, "end": {"line": 150, "column": 29}}
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
        }, "start": 3914, "end": 3915, "loc": {"start": {"line": 150, "column": 29}, "end": {"line": 150, "column": 30}}
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
        }, "start": 3915, "end": 3916, "loc": {"start": {"line": 150, "column": 30}, "end": {"line": 150, "column": 31}}
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
        }, "start": 3916, "end": 3917, "loc": {"start": {"line": 150, "column": 31}, "end": {"line": 150, "column": 32}}
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
        }, "start": 3924, "end": 3925, "loc": {"start": {"line": 153, "column": 4}, "end": {"line": 153, "column": 5}}
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
        }, "start": 3925, "end": 3926, "loc": {"start": {"line": 153, "column": 5}, "end": {"line": 153, "column": 6}}
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
        }, "start": 3926, "end": 3927, "loc": {"start": {"line": 153, "column": 6}, "end": {"line": 153, "column": 7}}
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
        }, "start": 3927, "end": 3928, "loc": {"start": {"line": 153, "column": 7}, "end": {"line": 153, "column": 8}}
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
        }, "start": 3930, "end": 3930, "loc": {"start": {"line": 155, "column": 0}, "end": {"line": 155, "column": 0}}
    }]
}