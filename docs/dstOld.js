var a = {
    "type": "File",
    "start": 0,
    "end": 4007,
    "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 158, "column": 0}},
    "program": {
        "type": "Program",
        "start": 0,
        "end": 4007,
        "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 158, "column": 0}},
        "sourceType": "module",
        "body": [{
            "type": "ExpressionStatement",
            "start": 65,
            "end": 4005,
            "loc": {"start": {"line": 10, "column": 0}, "end": {"line": 156, "column": 8}},
            "expression": {
                "type": "CallExpression",
                "start": 65,
                "end": 4004,
                "loc": {"start": {"line": 10, "column": 0}, "end": {"line": 156, "column": 7}},
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
                    "end": 4003,
                    "loc": {"start": {"line": 10, "column": 34}, "end": {"line": 156, "column": 6}},
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
                        "end": 4002,
                        "loc": {"start": {"line": 11, "column": 4}, "end": {"line": 156, "column": 5}},
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
                            "end": 4002,
                            "loc": {"start": {"line": 11, "column": 29}, "end": {"line": 156, "column": 5}},
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
                                "end": 638,
                                "loc": {"start": {"line": 29, "column": 8}, "end": {"line": 31, "column": 26}},
                                "expression": {
                                    "type": "SequenceExpression",
                                    "start": 550,
                                    "end": 637,
                                    "loc": {"start": {"line": 29, "column": 8}, "end": {"line": 31, "column": 25}},
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
                                        "start": 624,
                                        "end": 637,
                                        "loc": {"start": {"line": 31, "column": 12}, "end": {"line": 31, "column": 25}},
                                        "operator": "=",
                                        "left": {
                                            "type": "Identifier",
                                            "start": 624,
                                            "end": 634,
                                            "loc": {
                                                "start": {"line": 31, "column": 12},
                                                "end": {"line": 31, "column": 22},
                                                "identifierName": "scopeData2"
                                            },
                                            "name": "scopeData2",
                                            "leadingComments": null
                                        },
                                        "right": {
                                            "type": "NumericLiteral",
                                            "start": 635,
                                            "end": 637,
                                            "loc": {
                                                "start": {"line": 31, "column": 23},
                                                "end": {"line": 31, "column": 25}
                                            },
                                            "extra": {"rawValue": 12, "raw": "12"},
                                            "value": 12
                                        },
                                        "leadingComments": [{
                                            "type": "CommentLine",
                                            "value": "scopeData2comment",
                                            "start": 592,
                                            "end": 611,
                                            "loc": {
                                                "start": {"line": 30, "column": 12},
                                                "end": {"line": 30, "column": 31}
                                            }
                                        }]
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
                                    "start": 647,
                                    "end": 655,
                                    "loc": {"start": {"line": 32, "column": 8}, "end": {"line": 32, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 664,
                                "end": 702,
                                "loc": {"start": {"line": 33, "column": 8}, "end": {"line": 33, "column": 46}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 668,
                                    "end": 701,
                                    "loc": {"start": {"line": 33, "column": 12}, "end": {"line": 33, "column": 45}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 668,
                                        "end": 682,
                                        "loc": {
                                            "start": {"line": 33, "column": 12},
                                            "end": {"line": 33, "column": 26},
                                            "identifierName": "singleVariable"
                                        },
                                        "name": "singleVariable",
                                        "leadingComments": null
                                    },
                                    "init": {
                                        "type": "StringLiteral",
                                        "start": 685,
                                        "end": 701,
                                        "loc": {"start": {"line": 33, "column": 29}, "end": {"line": 33, "column": 45}},
                                        "extra": {"rawValue": "singleVariable", "raw": "'singleVariable'"},
                                        "value": "singleVariable"
                                    },
                                    "leadingComments": null
                                }],
                                "kind": "var",
                                "leadingComments": [{
                                    "type": "CommentLine",
                                    "value": "单个变量申明",
                                    "start": 647,
                                    "end": 655,
                                    "loc": {"start": {"line": 32, "column": 8}, "end": {"line": 32, "column": 16}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "多个变量申明， 包括函数",
                                    "start": 711,
                                    "end": 725,
                                    "loc": {"start": {"line": 34, "column": 8}, "end": {"line": 34, "column": 22}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 734,
                                "end": 1010,
                                "loc": {"start": {"line": 35, "column": 8}, "end": {"line": 43, "column": 39}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 738,
                                    "end": 746,
                                    "loc": {"start": {"line": 35, "column": 12}, "end": {"line": 35, "column": 20}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 738,
                                        "end": 746,
                                        "loc": {
                                            "start": {"line": 35, "column": 12},
                                            "end": {"line": 35, "column": 20},
                                            "identifierName": "mutiVar1"
                                        },
                                        "name": "mutiVar1",
                                        "leadingComments": null
                                    },
                                    "init": null,
                                    "leadingComments": null
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 792,
                                    "end": 807,
                                    "loc": {"start": {"line": 37, "column": 12}, "end": {"line": 37, "column": 27}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 792,
                                        "end": 800,
                                        "loc": {
                                            "start": {"line": 37, "column": 12},
                                            "end": {"line": 37, "column": 20},
                                            "identifierName": "mutiVar2"
                                        },
                                        "name": "mutiVar2",
                                        "leadingComments": null
                                    },
                                    "init": {
                                        "type": "NullLiteral",
                                        "start": 803,
                                        "end": 807,
                                        "loc": {"start": {"line": 37, "column": 23}, "end": {"line": 37, "column": 27}}
                                    },
                                    "leadingComments": [{
                                        "type": "CommentLine",
                                        "value": "mutiVar1 Comments",
                                        "start": 760,
                                        "end": 779,
                                        "loc": {"start": {"line": 36, "column": 12}, "end": {"line": 36, "column": 31}}
                                    }]
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 821,
                                    "end": 842,
                                    "loc": {"start": {"line": 38, "column": 12}, "end": {"line": 38, "column": 33}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 821,
                                        "end": 829,
                                        "loc": {
                                            "start": {"line": 38, "column": 12},
                                            "end": {"line": 38, "column": 20},
                                            "identifierName": "mutiVar3"
                                        },
                                        "name": "mutiVar3"
                                    },
                                    "init": {
                                        "type": "StringLiteral",
                                        "start": 832,
                                        "end": 842,
                                        "loc": {"start": {"line": 38, "column": 23}, "end": {"line": 38, "column": 33}},
                                        "extra": {"rawValue": "mutiVar3", "raw": "\"mutiVar3\""},
                                        "value": "mutiVar3"
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 856,
                                    "end": 935,
                                    "loc": {"start": {"line": 39, "column": 12}, "end": {"line": 41, "column": 13}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 856,
                                        "end": 863,
                                        "loc": {
                                            "start": {"line": 39, "column": 12},
                                            "end": {"line": 39, "column": 19},
                                            "identifierName": "mutiFun"
                                        },
                                        "name": "mutiFun"
                                    },
                                    "init": {
                                        "type": "FunctionExpression",
                                        "start": 866,
                                        "end": 935,
                                        "loc": {"start": {"line": 39, "column": 22}, "end": {"line": 41, "column": 13}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 876,
                                            "end": 882,
                                            "loc": {
                                                "start": {"line": 39, "column": 32},
                                                "end": {"line": 39, "column": 38},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 884,
                                            "end": 935,
                                            "loc": {
                                                "start": {"line": 39, "column": 40},
                                                "end": {"line": 41, "column": 13}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 902,
                                                "end": 921,
                                                "loc": {
                                                    "start": {"line": 40, "column": 16},
                                                    "end": {"line": 40, "column": 35}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 902,
                                                    "end": 921,
                                                    "loc": {
                                                        "start": {"line": 40, "column": 16},
                                                        "end": {"line": 40, "column": 35}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 902,
                                                        "end": 913,
                                                        "loc": {
                                                            "start": {"line": 40, "column": 16},
                                                            "end": {"line": 40, "column": 27}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 902,
                                                            "end": 909,
                                                            "loc": {
                                                                "start": {"line": 40, "column": 16},
                                                                "end": {"line": 40, "column": 23},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 910,
                                                            "end": 913,
                                                            "loc": {
                                                                "start": {"line": 40, "column": 24},
                                                                "end": {"line": 40, "column": 27},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 914,
                                                        "end": 920,
                                                        "loc": {
                                                            "start": {"line": 40, "column": 28},
                                                            "end": {"line": 40, "column": 34},
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
                                    "start": 949,
                                    "end": 969,
                                    "loc": {"start": {"line": 42, "column": 12}, "end": {"line": 42, "column": 32}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 949,
                                        "end": 957,
                                        "loc": {
                                            "start": {"line": 42, "column": 12},
                                            "end": {"line": 42, "column": 20},
                                            "identifierName": "mutiVar4"
                                        },
                                        "name": "mutiVar4"
                                    },
                                    "init": {
                                        "type": "Identifier",
                                        "start": 960,
                                        "end": 969,
                                        "loc": {
                                            "start": {"line": 42, "column": 23},
                                            "end": {"line": 42, "column": 32},
                                            "identifierName": "scopeData"
                                        },
                                        "name": "scopeData"
                                    }
                                }, {
                                    "type": "VariableDeclarator",
                                    "start": 983,
                                    "end": 1009,
                                    "loc": {"start": {"line": 43, "column": 12}, "end": {"line": 43, "column": 38}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 983,
                                        "end": 991,
                                        "loc": {
                                            "start": {"line": 43, "column": 12},
                                            "end": {"line": 43, "column": 20},
                                            "identifierName": "mutiVar5"
                                        },
                                        "name": "mutiVar5"
                                    },
                                    "init": {
                                        "type": "CallExpression",
                                        "start": 994,
                                        "end": 1009,
                                        "loc": {"start": {"line": 43, "column": 23}, "end": {"line": 43, "column": 38}},
                                        "callee": {
                                            "type": "MemberExpression",
                                            "start": 994,
                                            "end": 1007,
                                            "loc": {
                                                "start": {"line": 43, "column": 23},
                                                "end": {"line": 43, "column": 36}
                                            },
                                            "object": {
                                                "type": "Identifier",
                                                "start": 994,
                                                "end": 999,
                                                "loc": {
                                                    "start": {"line": 43, "column": 23},
                                                    "end": {"line": 43, "column": 28},
                                                    "identifierName": "cache"
                                                },
                                                "name": "cache"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 1000,
                                                "end": 1007,
                                                "loc": {
                                                    "start": {"line": 43, "column": 29},
                                                    "end": {"line": 43, "column": 36},
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
                                    "start": 711,
                                    "end": 725,
                                    "loc": {"start": {"line": 34, "column": 8}, "end": {"line": 34, "column": 22}}
                                }]
                            }, {
                                "type": "IfStatement",
                                "start": 1020,
                                "end": 1108,
                                "loc": {"start": {"line": 45, "column": 8}, "end": {"line": 48, "column": 9}},
                                "test": {
                                    "type": "Identifier",
                                    "start": 1024,
                                    "end": 1032,
                                    "loc": {
                                        "start": {"line": 45, "column": 12},
                                        "end": {"line": 45, "column": 20},
                                        "identifierName": "mutiVar1"
                                    },
                                    "name": "mutiVar1"
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "start": 1034,
                                    "end": 1108,
                                    "loc": {"start": {"line": 45, "column": 22}, "end": {"line": 48, "column": 9}},
                                    "body": [{
                                        "type": "VariableDeclaration",
                                        "start": 1048,
                                        "end": 1063,
                                        "loc": {"start": {"line": 46, "column": 12}, "end": {"line": 46, "column": 27}},
                                        "declarations": [{
                                            "type": "VariableDeclarator",
                                            "start": 1052,
                                            "end": 1062,
                                            "loc": {
                                                "start": {"line": 46, "column": 16},
                                                "end": {"line": 46, "column": 26}
                                            },
                                            "id": {
                                                "type": "Identifier",
                                                "start": 1052,
                                                "end": 1058,
                                                "loc": {
                                                    "start": {"line": 46, "column": 16},
                                                    "end": {"line": 46, "column": 22},
                                                    "identifierName": "ifVar1"
                                                },
                                                "name": "ifVar1"
                                            },
                                            "init": {
                                                "type": "NumericLiteral",
                                                "start": 1061,
                                                "end": 1062,
                                                "loc": {
                                                    "start": {"line": 46, "column": 25},
                                                    "end": {"line": 46, "column": 26}
                                                },
                                                "extra": {"rawValue": 1, "raw": "1"},
                                                "value": 1
                                            }
                                        }],
                                        "kind": "var"
                                    }, {
                                        "type": "VariableDeclaration",
                                        "start": 1076,
                                        "end": 1098,
                                        "loc": {"start": {"line": 47, "column": 12}, "end": {"line": 47, "column": 34}},
                                        "declarations": [{
                                            "type": "VariableDeclarator",
                                            "start": 1080,
                                            "end": 1097,
                                            "loc": {
                                                "start": {"line": 47, "column": 16},
                                                "end": {"line": 47, "column": 33}
                                            },
                                            "id": {
                                                "type": "Identifier",
                                                "start": 1080,
                                                "end": 1086,
                                                "loc": {
                                                    "start": {"line": 47, "column": 16},
                                                    "end": {"line": 47, "column": 22},
                                                    "identifierName": "ifVar2"
                                                },
                                                "name": "ifVar2"
                                            },
                                            "init": {
                                                "type": "Identifier",
                                                "start": 1089,
                                                "end": 1097,
                                                "loc": {
                                                    "start": {"line": 47, "column": 25},
                                                    "end": {"line": 47, "column": 33},
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
                                "start": 1118,
                                "end": 1682,
                                "loc": {"start": {"line": 50, "column": 8}, "end": {"line": 68, "column": 9}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 1122,
                                    "end": 1682,
                                    "loc": {"start": {"line": 50, "column": 12}, "end": {"line": 68, "column": 9}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 1122,
                                        "end": 1128,
                                        "loc": {
                                            "start": {"line": 50, "column": 12},
                                            "end": {"line": 50, "column": 18},
                                            "identifierName": "objVar"
                                        },
                                        "name": "objVar"
                                    },
                                    "init": {
                                        "type": "ObjectExpression",
                                        "start": 1131,
                                        "end": 1682,
                                        "loc": {"start": {"line": 50, "column": 21}, "end": {"line": 68, "column": 9}},
                                        "properties": [{
                                            "type": "ObjectProperty",
                                            "start": 1145,
                                            "end": 1163,
                                            "loc": {
                                                "start": {"line": 51, "column": 12},
                                                "end": {"line": 51, "column": 30}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1145,
                                                "end": 1152,
                                                "loc": {
                                                    "start": {"line": 51, "column": 12},
                                                    "end": {"line": 51, "column": 19},
                                                    "identifierName": "objVar1"
                                                },
                                                "name": "objVar1"
                                            },
                                            "value": {
                                                "type": "StringLiteral",
                                                "start": 1154,
                                                "end": 1163,
                                                "loc": {
                                                    "start": {"line": 51, "column": 21},
                                                    "end": {"line": 51, "column": 30}
                                                },
                                                "extra": {"rawValue": "objVar1", "raw": "\"objVar1\""},
                                                "value": "objVar1"
                                            }
                                        }, {
                                            "type": "ObjectProperty",
                                            "start": 1177,
                                            "end": 1195,
                                            "loc": {
                                                "start": {"line": 52, "column": 12},
                                                "end": {"line": 52, "column": 30}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1177,
                                                "end": 1184,
                                                "loc": {
                                                    "start": {"line": 52, "column": 12},
                                                    "end": {"line": 52, "column": 19},
                                                    "identifierName": "objVar2"
                                                },
                                                "name": "objVar2"
                                            },
                                            "value": {
                                                "type": "Identifier",
                                                "start": 1186,
                                                "end": 1195,
                                                "loc": {
                                                    "start": {"line": 52, "column": 21},
                                                    "end": {"line": 52, "column": 30},
                                                    "identifierName": "scopeData"
                                                },
                                                "name": "scopeData"
                                            }
                                        }, {
                                            "type": "ObjectProperty",
                                            "start": 1209,
                                            "end": 1332,
                                            "loc": {
                                                "start": {"line": 53, "column": 12},
                                                "end": {"line": 56, "column": 13}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1209,
                                                "end": 1216,
                                                "loc": {
                                                    "start": {"line": 53, "column": 12},
                                                    "end": {"line": 53, "column": 19},
                                                    "identifierName": "objVar3"
                                                },
                                                "name": "objVar3"
                                            },
                                            "value": {
                                                "type": "FunctionExpression",
                                                "start": 1218,
                                                "end": 1332,
                                                "loc": {
                                                    "start": {"line": 53, "column": 21},
                                                    "end": {"line": 56, "column": 13}
                                                },
                                                "id": null,
                                                "generator": false,
                                                "expression": false,
                                                "async": false,
                                                "params": [{
                                                    "type": "Identifier",
                                                    "start": 1228,
                                                    "end": 1234,
                                                    "loc": {
                                                        "start": {"line": 53, "column": 31},
                                                        "end": {"line": 53, "column": 37},
                                                        "identifierName": "param1"
                                                    },
                                                    "name": "param1"
                                                }, {
                                                    "type": "Identifier",
                                                    "start": 1236,
                                                    "end": 1242,
                                                    "loc": {
                                                        "start": {"line": 53, "column": 39},
                                                        "end": {"line": 53, "column": 45},
                                                        "identifierName": "param2"
                                                    },
                                                    "name": "param2"
                                                }],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "start": 1244,
                                                    "end": 1332,
                                                    "loc": {
                                                        "start": {"line": 53, "column": 47},
                                                        "end": {"line": 56, "column": 13}
                                                    },
                                                    "body": [{
                                                        "type": "ExpressionStatement",
                                                        "start": 1262,
                                                        "end": 1280,
                                                        "loc": {
                                                            "start": {"line": 54, "column": 16},
                                                            "end": {"line": 54, "column": 34}
                                                        },
                                                        "expression": {
                                                            "type": "AssignmentExpression",
                                                            "start": 1262,
                                                            "end": 1279,
                                                            "loc": {
                                                                "start": {"line": 54, "column": 16},
                                                                "end": {"line": 54, "column": 33}
                                                            },
                                                            "operator": "=",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "start": 1262,
                                                                "end": 1268,
                                                                "loc": {
                                                                    "start": {"line": 54, "column": 16},
                                                                    "end": {"line": 54, "column": 22},
                                                                    "identifierName": "param1"
                                                                },
                                                                "name": "param1"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "start": 1271,
                                                                "end": 1279,
                                                                "loc": {
                                                                    "start": {"line": 54, "column": 25},
                                                                    "end": {"line": 54, "column": 33},
                                                                    "identifierName": "mutiVar1"
                                                                },
                                                                "name": "mutiVar1"
                                                            }
                                                        }
                                                    }, {
                                                        "type": "ExpressionStatement",
                                                        "start": 1297,
                                                        "end": 1318,
                                                        "loc": {
                                                            "start": {"line": 55, "column": 16},
                                                            "end": {"line": 55, "column": 37}
                                                        },
                                                        "expression": {
                                                            "type": "AssignmentExpression",
                                                            "start": 1297,
                                                            "end": 1317,
                                                            "loc": {
                                                                "start": {"line": 55, "column": 16},
                                                                "end": {"line": 55, "column": 36}
                                                            },
                                                            "operator": "=",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "start": 1297,
                                                                "end": 1303,
                                                                "loc": {
                                                                    "start": {"line": 55, "column": 16},
                                                                    "end": {"line": 55, "column": 22},
                                                                    "identifierName": "param2"
                                                                },
                                                                "name": "param2"
                                                            },
                                                            "right": {
                                                                "type": "MemberExpression",
                                                                "start": 1306,
                                                                "end": 1317,
                                                                "loc": {
                                                                    "start": {"line": 55, "column": 25},
                                                                    "end": {"line": 55, "column": 36}
                                                                },
                                                                "object": {
                                                                    "type": "Identifier",
                                                                    "start": 1306,
                                                                    "end": 1312,
                                                                    "loc": {
                                                                        "start": {"line": 55, "column": 25},
                                                                        "end": {"line": 55, "column": 31},
                                                                        "identifierName": "$scope"
                                                                    },
                                                                    "name": "$scope"
                                                                },
                                                                "property": {
                                                                    "type": "Identifier",
                                                                    "start": 1313,
                                                                    "end": 1317,
                                                                    "loc": {
                                                                        "start": {"line": 55, "column": 32},
                                                                        "end": {"line": 55, "column": 36},
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
                                            "start": 1346,
                                            "end": 1490,
                                            "loc": {
                                                "start": {"line": 57, "column": 12},
                                                "end": {"line": 61, "column": 13}
                                            },
                                            "method": true,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1346,
                                                "end": 1353,
                                                "loc": {
                                                    "start": {"line": 57, "column": 12},
                                                    "end": {"line": 57, "column": 19},
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
                                                "start": 1354,
                                                "end": 1360,
                                                "loc": {
                                                    "start": {"line": 57, "column": 20},
                                                    "end": {"line": 57, "column": 26},
                                                    "identifierName": "param1"
                                                },
                                                "name": "param1"
                                            }, {
                                                "type": "Identifier",
                                                "start": 1362,
                                                "end": 1368,
                                                "loc": {
                                                    "start": {"line": 57, "column": 28},
                                                    "end": {"line": 57, "column": 34},
                                                    "identifierName": "param2"
                                                },
                                                "name": "param2"
                                            }],
                                            "body": {
                                                "type": "BlockStatement",
                                                "start": 1369,
                                                "end": 1490,
                                                "loc": {
                                                    "start": {"line": 57, "column": 35},
                                                    "end": {"line": 61, "column": 13}
                                                },
                                                "body": [{
                                                    "type": "ExpressionStatement",
                                                    "start": 1387,
                                                    "end": 1405,
                                                    "loc": {
                                                        "start": {"line": 58, "column": 16},
                                                        "end": {"line": 58, "column": 34}
                                                    },
                                                    "expression": {
                                                        "type": "AssignmentExpression",
                                                        "start": 1387,
                                                        "end": 1404,
                                                        "loc": {
                                                            "start": {"line": 58, "column": 16},
                                                            "end": {"line": 58, "column": 33}
                                                        },
                                                        "operator": "=",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "start": 1387,
                                                            "end": 1393,
                                                            "loc": {
                                                                "start": {"line": 58, "column": 16},
                                                                "end": {"line": 58, "column": 22},
                                                                "identifierName": "param1"
                                                            },
                                                            "name": "param1"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "start": 1396,
                                                            "end": 1404,
                                                            "loc": {
                                                                "start": {"line": 58, "column": 25},
                                                                "end": {"line": 58, "column": 33},
                                                                "identifierName": "mutiVar1"
                                                            },
                                                            "name": "mutiVar1"
                                                        }
                                                    }
                                                }, {
                                                    "type": "ExpressionStatement",
                                                    "start": 1422,
                                                    "end": 1443,
                                                    "loc": {
                                                        "start": {"line": 59, "column": 16},
                                                        "end": {"line": 59, "column": 37}
                                                    },
                                                    "expression": {
                                                        "type": "AssignmentExpression",
                                                        "start": 1422,
                                                        "end": 1442,
                                                        "loc": {
                                                            "start": {"line": 59, "column": 16},
                                                            "end": {"line": 59, "column": 36}
                                                        },
                                                        "operator": "=",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "start": 1422,
                                                            "end": 1428,
                                                            "loc": {
                                                                "start": {"line": 59, "column": 16},
                                                                "end": {"line": 59, "column": 22},
                                                                "identifierName": "param2"
                                                            },
                                                            "name": "param2"
                                                        },
                                                        "right": {
                                                            "type": "MemberExpression",
                                                            "start": 1431,
                                                            "end": 1442,
                                                            "loc": {
                                                                "start": {"line": 59, "column": 25},
                                                                "end": {"line": 59, "column": 36}
                                                            },
                                                            "object": {
                                                                "type": "Identifier",
                                                                "start": 1431,
                                                                "end": 1437,
                                                                "loc": {
                                                                    "start": {"line": 59, "column": 25},
                                                                    "end": {"line": 59, "column": 31},
                                                                    "identifierName": "$scope"
                                                                },
                                                                "name": "$scope"
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "start": 1438,
                                                                "end": 1442,
                                                                "loc": {
                                                                    "start": {"line": 59, "column": 32},
                                                                    "end": {"line": 59, "column": 36},
                                                                    "identifierName": "data"
                                                                },
                                                                "name": "data"
                                                            },
                                                            "computed": false
                                                        }
                                                    }
                                                }, {
                                                    "type": "ReturnStatement",
                                                    "start": 1460,
                                                    "end": 1476,
                                                    "loc": {
                                                        "start": {"line": 60, "column": 16},
                                                        "end": {"line": 60, "column": 32}
                                                    },
                                                    "argument": {
                                                        "type": "Identifier",
                                                        "start": 1467,
                                                        "end": 1475,
                                                        "loc": {
                                                            "start": {"line": 60, "column": 23},
                                                            "end": {"line": 60, "column": 31},
                                                            "identifierName": "mutiVar2"
                                                        },
                                                        "name": "mutiVar2"
                                                    }
                                                }],
                                                "directives": []
                                            }
                                        }, {
                                            "type": "ObjectMethod",
                                            "start": 1504,
                                            "end": 1589,
                                            "loc": {
                                                "start": {"line": 62, "column": 12},
                                                "end": {"line": 64, "column": 13}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1508,
                                                "end": 1513,
                                                "loc": {
                                                    "start": {"line": 62, "column": 16},
                                                    "end": {"line": 62, "column": 21},
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
                                                "start": 1516,
                                                "end": 1589,
                                                "loc": {
                                                    "start": {"line": 62, "column": 24},
                                                    "end": {"line": 64, "column": 13}
                                                },
                                                "body": [{
                                                    "type": "ReturnStatement",
                                                    "start": 1534,
                                                    "end": 1575,
                                                    "loc": {
                                                        "start": {"line": 63, "column": 16},
                                                        "end": {"line": 63, "column": 57}
                                                    },
                                                    "argument": {
                                                        "type": "SequenceExpression",
                                                        "start": 1541,
                                                        "end": 1574,
                                                        "loc": {
                                                            "start": {"line": 63, "column": 23},
                                                            "end": {"line": 63, "column": 56}
                                                        },
                                                        "expressions": [{
                                                            "type": "Identifier",
                                                            "start": 1541,
                                                            "end": 1549,
                                                            "loc": {
                                                                "start": {"line": 63, "column": 23},
                                                                "end": {"line": 63, "column": 31},
                                                                "identifierName": "mutiVar2"
                                                            },
                                                            "name": "mutiVar2"
                                                        }, {
                                                            "type": "Identifier",
                                                            "start": 1550,
                                                            "end": 1558,
                                                            "loc": {
                                                                "start": {"line": 63, "column": 32},
                                                                "end": {"line": 63, "column": 40},
                                                                "identifierName": "mutiVar1"
                                                            },
                                                            "name": "mutiVar1"
                                                        }, {
                                                            "type": "MemberExpression",
                                                            "start": 1560,
                                                            "end": 1574,
                                                            "loc": {
                                                                "start": {"line": 63, "column": 42},
                                                                "end": {"line": 63, "column": 56}
                                                            },
                                                            "object": {
                                                                "type": "Identifier",
                                                                "start": 1560,
                                                                "end": 1569,
                                                                "loc": {
                                                                    "start": {"line": 63, "column": 42},
                                                                    "end": {"line": 63, "column": 51},
                                                                    "identifierName": "scopeData"
                                                                },
                                                                "name": "scopeData"
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "start": 1570,
                                                                "end": 1574,
                                                                "loc": {
                                                                    "start": {"line": 63, "column": 52},
                                                                    "end": {"line": 63, "column": 56},
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
                                            "start": 1603,
                                            "end": 1672,
                                            "loc": {
                                                "start": {"line": 65, "column": 12},
                                                "end": {"line": 67, "column": 13}
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                                "type": "Identifier",
                                                "start": 1607,
                                                "end": 1612,
                                                "loc": {
                                                    "start": {"line": 65, "column": 16},
                                                    "end": {"line": 65, "column": 21},
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
                                                "start": 1613,
                                                "end": 1618,
                                                "loc": {
                                                    "start": {"line": 65, "column": 22},
                                                    "end": {"line": 65, "column": 27},
                                                    "identifierName": "value"
                                                },
                                                "name": "value"
                                            }],
                                            "body": {
                                                "type": "BlockStatement",
                                                "start": 1620,
                                                "end": 1672,
                                                "loc": {
                                                    "start": {"line": 65, "column": 29},
                                                    "end": {"line": 67, "column": 13}
                                                },
                                                "body": [{
                                                    "type": "ExpressionStatement",
                                                    "start": 1638,
                                                    "end": 1658,
                                                    "loc": {
                                                        "start": {"line": 66, "column": 16},
                                                        "end": {"line": 66, "column": 36}
                                                    },
                                                    "expression": {
                                                        "type": "AssignmentExpression",
                                                        "start": 1638,
                                                        "end": 1658,
                                                        "loc": {
                                                            "start": {"line": 66, "column": 16},
                                                            "end": {"line": 66, "column": 36}
                                                        },
                                                        "operator": "=",
                                                        "left": {
                                                            "type": "MemberExpression",
                                                            "start": 1638,
                                                            "end": 1650,
                                                            "loc": {
                                                                "start": {"line": 66, "column": 16},
                                                                "end": {"line": 66, "column": 28}
                                                            },
                                                            "object": {
                                                                "type": "ThisExpression",
                                                                "start": 1638,
                                                                "end": 1642,
                                                                "loc": {
                                                                    "start": {"line": 66, "column": 16},
                                                                    "end": {"line": 66, "column": 20}
                                                                }
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "start": 1643,
                                                                "end": 1650,
                                                                "loc": {
                                                                    "start": {"line": 66, "column": 21},
                                                                    "end": {"line": 66, "column": 28},
                                                                    "identifierName": "objVar1"
                                                                },
                                                                "name": "objVar1"
                                                            },
                                                            "computed": false
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "start": 1653,
                                                            "end": 1658,
                                                            "loc": {
                                                                "start": {"line": 66, "column": 31},
                                                                "end": {"line": 66, "column": 36},
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
                                    "start": 1692,
                                    "end": 1700,
                                    "loc": {"start": {"line": 70, "column": 8}, "end": {"line": 70, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 1709,
                                "end": 2995,
                                "loc": {"start": {"line": 71, "column": 8}, "end": {"line": 107, "column": 9}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 1713,
                                    "end": 2995,
                                    "loc": {"start": {"line": 71, "column": 12}, "end": {"line": 107, "column": 9}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 1713,
                                        "end": 1722,
                                        "loc": {
                                            "start": {"line": 71, "column": 12},
                                            "end": {"line": 71, "column": 21},
                                            "identifierName": "singleFun"
                                        },
                                        "name": "singleFun",
                                        "leadingComments": null
                                    },
                                    "init": {
                                        "type": "FunctionExpression",
                                        "start": 1725,
                                        "end": 2995,
                                        "loc": {"start": {"line": 71, "column": 24}, "end": {"line": 107, "column": 9}},
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 1735,
                                            "end": 1741,
                                            "loc": {
                                                "start": {"line": 71, "column": 34},
                                                "end": {"line": 71, "column": 40},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 1743,
                                            "end": 2995,
                                            "loc": {
                                                "start": {"line": 71, "column": 42},
                                                "end": {"line": 107, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 1757,
                                                "end": 1777,
                                                "loc": {
                                                    "start": {"line": 72, "column": 12},
                                                    "end": {"line": 72, "column": 32}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 1757,
                                                    "end": 1776,
                                                    "loc": {
                                                        "start": {"line": 72, "column": 12},
                                                        "end": {"line": 72, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 1757,
                                                        "end": 1768,
                                                        "loc": {
                                                            "start": {"line": 72, "column": 12},
                                                            "end": {"line": 72, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 1757,
                                                            "end": 1764,
                                                            "loc": {
                                                                "start": {"line": 72, "column": 12},
                                                                "end": {"line": 72, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 1765,
                                                            "end": 1768,
                                                            "loc": {
                                                                "start": {"line": 72, "column": 20},
                                                                "end": {"line": 72, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 1769,
                                                        "end": 1775,
                                                        "loc": {
                                                            "start": {"line": 72, "column": 24},
                                                            "end": {"line": 72, "column": 30},
                                                            "identifierName": "param1"
                                                        },
                                                        "name": "param1"
                                                    }]
                                                },
                                                "trailingComments": [{
                                                    "type": "CommentLine",
                                                    "value": "对象",
                                                    "start": 1790,
                                                    "end": 1794,
                                                    "loc": {
                                                        "start": {"line": 73, "column": 12},
                                                        "end": {"line": 73, "column": 16}
                                                    }
                                                }]
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 1807,
                                                "end": 2984,
                                                "loc": {
                                                    "start": {"line": 74, "column": 12},
                                                    "end": {"line": 105, "column": 13}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 1811,
                                                    "end": 2984,
                                                    "loc": {
                                                        "start": {"line": 74, "column": 16},
                                                        "end": {"line": 105, "column": 13}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 1811,
                                                        "end": 1814,
                                                        "loc": {
                                                            "start": {"line": 74, "column": 16},
                                                            "end": {"line": 74, "column": 19},
                                                            "identifierName": "obj"
                                                        },
                                                        "name": "obj",
                                                        "leadingComments": null
                                                    },
                                                    "init": {
                                                        "type": "ObjectExpression",
                                                        "start": 1817,
                                                        "end": 2984,
                                                        "loc": {
                                                            "start": {"line": 74, "column": 22},
                                                            "end": {"line": 105, "column": 13}
                                                        },
                                                        "properties": [{
                                                            "type": "ObjectProperty",
                                                            "start": 1835,
                                                            "end": 1853,
                                                            "loc": {
                                                                "start": {"line": 75, "column": 16},
                                                                "end": {"line": 75, "column": 34}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1835,
                                                                "end": 1842,
                                                                "loc": {
                                                                    "start": {"line": 75, "column": 16},
                                                                    "end": {"line": 75, "column": 23},
                                                                    "identifierName": "objVar1"
                                                                },
                                                                "name": "objVar1"
                                                            },
                                                            "value": {
                                                                "type": "StringLiteral",
                                                                "start": 1844,
                                                                "end": 1853,
                                                                "loc": {
                                                                    "start": {"line": 75, "column": 25},
                                                                    "end": {"line": 75, "column": 34}
                                                                },
                                                                "extra": {"rawValue": "objVar1", "raw": "\"objVar1\""},
                                                                "value": "objVar1"
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 1871,
                                                            "end": 1953,
                                                            "loc": {
                                                                "start": {"line": 76, "column": 16},
                                                                "end": {"line": 78, "column": 17}
                                                            },
                                                            "method": true,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1871,
                                                                "end": 1878,
                                                                "loc": {
                                                                    "start": {"line": 76, "column": 16},
                                                                    "end": {"line": 76, "column": 23},
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
                                                                "start": 1879,
                                                                "end": 1885,
                                                                "loc": {
                                                                    "start": {"line": 76, "column": 24},
                                                                    "end": {"line": 76, "column": 30},
                                                                    "identifierName": "param1"
                                                                },
                                                                "name": "param1"
                                                            }, {
                                                                "type": "Identifier",
                                                                "start": 1887,
                                                                "end": 1893,
                                                                "loc": {
                                                                    "start": {"line": 76, "column": 32},
                                                                    "end": {"line": 76, "column": 38},
                                                                    "identifierName": "param2"
                                                                },
                                                                "name": "param2"
                                                            }],
                                                            "body": {
                                                                "type": "BlockStatement",
                                                                "start": 1894,
                                                                "end": 1953,
                                                                "loc": {
                                                                    "start": {"line": 76, "column": 39},
                                                                    "end": {"line": 78, "column": 17}
                                                                },
                                                                "body": [{
                                                                    "type": "ExpressionStatement",
                                                                    "start": 1916,
                                                                    "end": 1935,
                                                                    "loc": {
                                                                        "start": {"line": 77, "column": 20},
                                                                        "end": {"line": 77, "column": 39}
                                                                    },
                                                                    "expression": {
                                                                        "type": "CallExpression",
                                                                        "start": 1916,
                                                                        "end": 1935,
                                                                        "loc": {
                                                                            "start": {"line": 77, "column": 20},
                                                                            "end": {"line": 77, "column": 39}
                                                                        },
                                                                        "callee": {
                                                                            "type": "MemberExpression",
                                                                            "start": 1916,
                                                                            "end": 1927,
                                                                            "loc": {
                                                                                "start": {"line": 77, "column": 20},
                                                                                "end": {"line": 77, "column": 31}
                                                                            },
                                                                            "object": {
                                                                                "type": "Identifier",
                                                                                "start": 1916,
                                                                                "end": 1923,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 77,
                                                                                        "column": 20
                                                                                    },
                                                                                    "end": {"line": 77, "column": 27},
                                                                                    "identifierName": "console"
                                                                                },
                                                                                "name": "console"
                                                                            },
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "start": 1924,
                                                                                "end": 1927,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 77,
                                                                                        "column": 28
                                                                                    },
                                                                                    "end": {"line": 77, "column": 31},
                                                                                    "identifierName": "log"
                                                                                },
                                                                                "name": "log"
                                                                            },
                                                                            "computed": false
                                                                        },
                                                                        "arguments": [{
                                                                            "type": "Identifier",
                                                                            "start": 1928,
                                                                            "end": 1934,
                                                                            "loc": {
                                                                                "start": {"line": 77, "column": 32},
                                                                                "end": {"line": 77, "column": 38},
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
                                                            "start": 1971,
                                                            "end": 2806,
                                                            "loc": {
                                                                "start": {"line": 79, "column": 16},
                                                                "end": {"line": 95, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 1971,
                                                                "end": 1978,
                                                                "loc": {
                                                                    "start": {"line": 79, "column": 16},
                                                                    "end": {"line": 79, "column": 23},
                                                                    "identifierName": "objFun2"
                                                                },
                                                                "name": "objFun2"
                                                            },
                                                            "value": {
                                                                "type": "FunctionExpression",
                                                                "start": 1980,
                                                                "end": 2806,
                                                                "loc": {
                                                                    "start": {"line": 79, "column": 25},
                                                                    "end": {"line": 95, "column": 17}
                                                                },
                                                                "id": null,
                                                                "generator": false,
                                                                "expression": false,
                                                                "async": false,
                                                                "params": [{
                                                                    "type": "Identifier",
                                                                    "start": 1990,
                                                                    "end": 1996,
                                                                    "loc": {
                                                                        "start": {"line": 79, "column": 35},
                                                                        "end": {"line": 79, "column": 41},
                                                                        "identifierName": "param1"
                                                                    },
                                                                    "name": "param1"
                                                                }, {
                                                                    "type": "Identifier",
                                                                    "start": 1998,
                                                                    "end": 2004,
                                                                    "loc": {
                                                                        "start": {"line": 79, "column": 43},
                                                                        "end": {"line": 79, "column": 49},
                                                                        "identifierName": "param2"
                                                                    },
                                                                    "name": "param2"
                                                                }],
                                                                "body": {
                                                                    "type": "BlockStatement",
                                                                    "start": 2006,
                                                                    "end": 2806,
                                                                    "loc": {
                                                                        "start": {"line": 79, "column": 51},
                                                                        "end": {"line": 95, "column": 17}
                                                                    },
                                                                    "body": [{
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2028,
                                                                        "end": 2056,
                                                                        "loc": {
                                                                            "start": {"line": 80, "column": 20},
                                                                            "end": {"line": 80, "column": 48}
                                                                        },
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "start": 2028,
                                                                            "end": 2055,
                                                                            "loc": {
                                                                                "start": {"line": 80, "column": 20},
                                                                                "end": {"line": 80, "column": 47}
                                                                            },
                                                                            "callee": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2028,
                                                                                "end": 2039,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 80,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 80, "column": 31}
                                                                                },
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2028,
                                                                                    "end": 2035,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 80,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 80,
                                                                                            "column": 27
                                                                                        },
                                                                                        "identifierName": "console"
                                                                                    },
                                                                                    "name": "console"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2036,
                                                                                    "end": 2039,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 80,
                                                                                            "column": 28
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 80,
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
                                                                                "start": 2040,
                                                                                "end": 2046,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 80,
                                                                                        "column": 32
                                                                                    },
                                                                                    "end": {"line": 80, "column": 38},
                                                                                    "identifierName": "param1"
                                                                                },
                                                                                "name": "param1"
                                                                            }, {
                                                                                "type": "Identifier",
                                                                                "start": 2048,
                                                                                "end": 2054,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 80,
                                                                                        "column": 40
                                                                                    },
                                                                                    "end": {"line": 80, "column": 46},
                                                                                    "identifierName": "param2"
                                                                                },
                                                                                "name": "param2"
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2077,
                                                                        "end": 2091,
                                                                        "loc": {
                                                                            "start": {"line": 81, "column": 20},
                                                                            "end": {"line": 81, "column": 34}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2077,
                                                                            "end": 2090,
                                                                            "loc": {
                                                                                "start": {"line": 81, "column": 20},
                                                                                "end": {"line": 81, "column": 33}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "Identifier",
                                                                                "start": 2077,
                                                                                "end": 2085,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 81,
                                                                                        "column": 20
                                                                                    },
                                                                                    "end": {"line": 81, "column": 28},
                                                                                    "identifierName": "mutiVar1"
                                                                                },
                                                                                "name": "mutiVar1"
                                                                            },
                                                                            "right": {
                                                                                "type": "NumericLiteral",
                                                                                "start": 2088,
                                                                                "end": 2090,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 81,
                                                                                        "column": 31
                                                                                    }, "end": {"line": 81, "column": 33}
                                                                                },
                                                                                "extra": {"rawValue": 12, "raw": "12"},
                                                                                "value": 12
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2112,
                                                                        "end": 2144,
                                                                        "loc": {
                                                                            "start": {"line": 82, "column": 20},
                                                                            "end": {"line": 82, "column": 52}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2112,
                                                                            "end": 2143,
                                                                            "loc": {
                                                                                "start": {"line": 82, "column": 20},
                                                                                "end": {"line": 82, "column": 51}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2112,
                                                                                "end": 2132,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 82,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 82, "column": 40}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2112,
                                                                                    "end": 2123,
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
                                                                                        "start": 2112,
                                                                                        "end": 2118,
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
                                                                                        "start": 2119,
                                                                                        "end": 2123,
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
                                                                                    "type": "Identifier",
                                                                                    "start": 2124,
                                                                                    "end": 2132,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 82,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 82,
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
                                                                                "start": 2135,
                                                                                "end": 2143,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 82,
                                                                                        "column": 43
                                                                                    },
                                                                                    "end": {"line": 82, "column": 51},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2165,
                                                                        "end": 2202,
                                                                        "loc": {
                                                                            "start": {"line": 83, "column": 20},
                                                                            "end": {"line": 83, "column": 57}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2165,
                                                                            "end": 2201,
                                                                            "loc": {
                                                                                "start": {"line": 83, "column": 20},
                                                                                "end": {"line": 83, "column": 56}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2165,
                                                                                "end": 2188,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 83,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 83, "column": 43}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2165,
                                                                                    "end": 2176,
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
                                                                                        "start": 2165,
                                                                                        "end": 2171,
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
                                                                                        "start": 2172,
                                                                                        "end": 2176,
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
                                                                                    "type": "StringLiteral",
                                                                                    "start": 2177,
                                                                                    "end": 2187,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 83,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 83,
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
                                                                                "start": 2191,
                                                                                "end": 2201,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 83,
                                                                                        "column": 46
                                                                                    },
                                                                                    "end": {"line": 83, "column": 56},
                                                                                    "identifierName": "scopeData2"
                                                                                },
                                                                                "name": "scopeData2"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2223,
                                                                        "end": 2256,
                                                                        "loc": {
                                                                            "start": {"line": 84, "column": 20},
                                                                            "end": {"line": 84, "column": 53}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2223,
                                                                            "end": 2255,
                                                                            "loc": {
                                                                                "start": {"line": 84, "column": 20},
                                                                                "end": {"line": 84, "column": 52}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2223,
                                                                                "end": 2244,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 84,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 84, "column": 41}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2223,
                                                                                    "end": 2234,
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
                                                                                        "start": 2223,
                                                                                        "end": 2229,
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
                                                                                        "start": 2230,
                                                                                        "end": 2234,
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
                                                                                    "type": "Identifier",
                                                                                    "start": 2235,
                                                                                    "end": 2243,
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
                                                                                "computed": true
                                                                            },
                                                                            "right": {
                                                                                "type": "Identifier",
                                                                                "start": 2247,
                                                                                "end": 2255,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 84,
                                                                                        "column": 44
                                                                                    },
                                                                                    "end": {"line": 84, "column": 52},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2277,
                                                                        "end": 2320,
                                                                        "loc": {
                                                                            "start": {"line": 85, "column": 20},
                                                                            "end": {"line": 85, "column": 63}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2277,
                                                                            "end": 2319,
                                                                            "loc": {
                                                                                "start": {"line": 85, "column": 20},
                                                                                "end": {"line": 85, "column": 62}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2277,
                                                                                "end": 2308,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 85,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 85, "column": 51}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2277,
                                                                                    "end": 2288,
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
                                                                                        "start": 2277,
                                                                                        "end": 2283,
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
                                                                                        "start": 2284,
                                                                                        "end": 2288,
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
                                                                                    "type": "CallExpression",
                                                                                    "start": 2289,
                                                                                    "end": 2307,
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
                                                                                    "callee": {
                                                                                        "type": "MemberExpression",
                                                                                        "start": 2289,
                                                                                        "end": 2302,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 85,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 85,
                                                                                                "column": 45
                                                                                            }
                                                                                        },
                                                                                        "object": {
                                                                                            "type": "Identifier",
                                                                                            "start": 2289,
                                                                                            "end": 2298,
                                                                                            "loc": {
                                                                                                "start": {
                                                                                                    "line": 85,
                                                                                                    "column": 32
                                                                                                },
                                                                                                "end": {
                                                                                                    "line": 85,
                                                                                                    "column": 41
                                                                                                },
                                                                                                "identifierName": "scopeData"
                                                                                            },
                                                                                            "name": "scopeData"
                                                                                        },
                                                                                        "property": {
                                                                                            "type": "Identifier",
                                                                                            "start": 2299,
                                                                                            "end": 2302,
                                                                                            "loc": {
                                                                                                "start": {
                                                                                                    "line": 85,
                                                                                                    "column": 42
                                                                                                },
                                                                                                "end": {
                                                                                                    "line": 85,
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
                                                                                        "start": 2303,
                                                                                        "end": 2306,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 85,
                                                                                                "column": 46
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 85,
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
                                                                                "start": 2311,
                                                                                "end": 2319,
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
                                                                        "start": 2341,
                                                                        "end": 2380,
                                                                        "loc": {
                                                                            "start": {"line": 86, "column": 20},
                                                                            "end": {"line": 86, "column": 59}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2341,
                                                                            "end": 2379,
                                                                            "loc": {
                                                                                "start": {"line": 86, "column": 20},
                                                                                "end": {"line": 86, "column": 58}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2341,
                                                                                "end": 2368,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 86,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 86, "column": 47}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2341,
                                                                                    "end": 2352,
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
                                                                                        "start": 2341,
                                                                                        "end": 2347,
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
                                                                                        "start": 2348,
                                                                                        "end": 2352,
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
                                                                                    "type": "CallExpression",
                                                                                    "start": 2353,
                                                                                    "end": 2367,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 86,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 86,
                                                                                            "column": 46
                                                                                        }
                                                                                    },
                                                                                    "callee": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2353,
                                                                                        "end": 2362,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 86,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 86,
                                                                                                "column": 41
                                                                                            },
                                                                                            "identifierName": "singleFun"
                                                                                        },
                                                                                        "name": "singleFun"
                                                                                    },
                                                                                    "arguments": [{
                                                                                        "type": "Identifier",
                                                                                        "start": 2363,
                                                                                        "end": 2366,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 86,
                                                                                                "column": 42
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 86,
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
                                                                                "start": 2371,
                                                                                "end": 2379,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 86,
                                                                                        "column": 50
                                                                                    },
                                                                                    "end": {"line": 86, "column": 58},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2401,
                                                                        "end": 2448,
                                                                        "loc": {
                                                                            "start": {"line": 87, "column": 20},
                                                                            "end": {"line": 87, "column": 67}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2401,
                                                                            "end": 2447,
                                                                            "loc": {
                                                                                "start": {"line": 87, "column": 20},
                                                                                "end": {"line": 87, "column": 66}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2401,
                                                                                "end": 2436,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 87,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 87, "column": 55}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2401,
                                                                                    "end": 2412,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 87,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 87,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2401,
                                                                                        "end": 2407,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 87,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 87,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2408,
                                                                                        "end": 2412,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 87,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 87,
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
                                                                                    "start": 2413,
                                                                                    "end": 2435,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 87,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 87,
                                                                                            "column": 54
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2413,
                                                                                        "end": 2421,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 87,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 87,
                                                                                                "column": 40
                                                                                            },
                                                                                            "identifierName": "mutiVar3"
                                                                                        },
                                                                                        "name": "mutiVar3"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2422,
                                                                                        "end": 2435,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 87,
                                                                                                "column": 41
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 87,
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
                                                                                "start": 2439,
                                                                                "end": 2447,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 87,
                                                                                        "column": 58
                                                                                    },
                                                                                    "end": {"line": 87, "column": 66},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2469,
                                                                        "end": 2512,
                                                                        "loc": {
                                                                            "start": {"line": 88, "column": 20},
                                                                            "end": {"line": 88, "column": 63}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2469,
                                                                            "end": 2511,
                                                                            "loc": {
                                                                                "start": {"line": 88, "column": 20},
                                                                                "end": {"line": 88, "column": 62}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2469,
                                                                                "end": 2500,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 88,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 88, "column": 51}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2469,
                                                                                    "end": 2480,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 88,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 88,
                                                                                            "column": 31
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2469,
                                                                                        "end": 2475,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 88,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 88,
                                                                                                "column": 26
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2476,
                                                                                        "end": 2480,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 88,
                                                                                                "column": 27
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 88,
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
                                                                                    "start": 2481,
                                                                                    "end": 2499,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 88,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 88,
                                                                                            "column": 50
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2481,
                                                                                        "end": 2487,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 88,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 88,
                                                                                                "column": 38
                                                                                            },
                                                                                            "identifierName": "$scope"
                                                                                        },
                                                                                        "name": "$scope"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "start": 2488,
                                                                                        "end": 2499,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 88,
                                                                                                "column": 39
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 88,
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
                                                                                "start": 2503,
                                                                                "end": 2511,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 88,
                                                                                        "column": 54
                                                                                    },
                                                                                    "end": {"line": 88, "column": 62},
                                                                                    "identifierName": "mutiVar3"
                                                                                },
                                                                                "name": "mutiVar3"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        "type": "ExpressionStatement",
                                                                        "start": 2533,
                                                                        "end": 2567,
                                                                        "loc": {
                                                                            "start": {"line": 89, "column": 20},
                                                                            "end": {"line": 89, "column": 54}
                                                                        },
                                                                        "expression": {
                                                                            "type": "AssignmentExpression",
                                                                            "start": 2533,
                                                                            "end": 2566,
                                                                            "loc": {
                                                                                "start": {"line": 89, "column": 20},
                                                                                "end": {"line": 89, "column": 53}
                                                                            },
                                                                            "operator": "=",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2533,
                                                                                "end": 2553,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 89,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 89, "column": 40}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2533,
                                                                                    "end": 2544,
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
                                                                                        "start": 2533,
                                                                                        "end": 2539,
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
                                                                                        "start": 2540,
                                                                                        "end": 2544,
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
                                                                                    "start": 2545,
                                                                                    "end": 2553,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 89,
                                                                                            "column": 32
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 89,
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
                                                                                "start": 2556,
                                                                                "end": 2566,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 89,
                                                                                        "column": 43
                                                                                    }, "end": {"line": 89, "column": 53}
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
                                                                        "start": 2588,
                                                                        "end": 2615,
                                                                        "loc": {
                                                                            "start": {"line": 90, "column": 20},
                                                                            "end": {"line": 90, "column": 47}
                                                                        },
                                                                        "declarations": [{
                                                                            "type": "VariableDeclarator",
                                                                            "start": 2592,
                                                                            "end": 2614,
                                                                            "loc": {
                                                                                "start": {"line": 90, "column": 24},
                                                                                "end": {"line": 90, "column": 46}
                                                                            },
                                                                            "id": {
                                                                                "type": "Identifier",
                                                                                "start": 2592,
                                                                                "end": 2604,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 90,
                                                                                        "column": 24
                                                                                    },
                                                                                    "end": {"line": 90, "column": 36},
                                                                                    "identifierName": "unKnownValue"
                                                                                },
                                                                                "name": "unKnownValue"
                                                                            },
                                                                            "init": {
                                                                                "type": "Identifier",
                                                                                "start": 2607,
                                                                                "end": 2614,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 90,
                                                                                        "column": 39
                                                                                    },
                                                                                    "end": {"line": 90, "column": 46},
                                                                                    "identifierName": "unKnown"
                                                                                },
                                                                                "name": "unKnown"
                                                                            }
                                                                        }],
                                                                        "kind": "var"
                                                                    }, {
                                                                        "type": "VariableDeclaration",
                                                                        "start": 2636,
                                                                        "end": 2671,
                                                                        "loc": {
                                                                            "start": {"line": 91, "column": 20},
                                                                            "end": {"line": 91, "column": 55}
                                                                        },
                                                                        "declarations": [{
                                                                            "type": "VariableDeclarator",
                                                                            "start": 2640,
                                                                            "end": 2670,
                                                                            "loc": {
                                                                                "start": {"line": 91, "column": 24},
                                                                                "end": {"line": 91, "column": 54}
                                                                            },
                                                                            "id": {
                                                                                "type": "Identifier",
                                                                                "start": 2640,
                                                                                "end": 2653,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 91,
                                                                                        "column": 24
                                                                                    },
                                                                                    "end": {"line": 91, "column": 37},
                                                                                    "identifierName": "unKnownValue1"
                                                                                },
                                                                                "name": "unKnownValue1"
                                                                            },
                                                                            "init": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2656,
                                                                                "end": 2670,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 91,
                                                                                        "column": 40
                                                                                    }, "end": {"line": 91, "column": 54}
                                                                                },
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2656,
                                                                                    "end": 2662,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 91,
                                                                                            "column": 40
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 91,
                                                                                            "column": 46
                                                                                        },
                                                                                        "identifierName": "$scope"
                                                                                    },
                                                                                    "name": "$scope"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2663,
                                                                                    "end": 2670,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 91,
                                                                                            "column": 47
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 91,
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
                                                                        "start": 2692,
                                                                        "end": 2719,
                                                                        "loc": {
                                                                            "start": {"line": 92, "column": 20},
                                                                            "end": {"line": 92, "column": 47}
                                                                        },
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "start": 2692,
                                                                            "end": 2718,
                                                                            "loc": {
                                                                                "start": {"line": 92, "column": 20},
                                                                                "end": {"line": 92, "column": 46}
                                                                            },
                                                                            "callee": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2692,
                                                                                "end": 2716,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 92,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 92, "column": 44}
                                                                                },
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "start": 2692,
                                                                                    "end": 2706,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 92,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 92,
                                                                                            "column": 34
                                                                                        }
                                                                                    },
                                                                                    "object": {
                                                                                        "type": "MemberExpression",
                                                                                        "start": 2692,
                                                                                        "end": 2703,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 92,
                                                                                                "column": 20
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 92,
                                                                                                "column": 31
                                                                                            }
                                                                                        },
                                                                                        "object": {
                                                                                            "type": "Identifier",
                                                                                            "start": 2692,
                                                                                            "end": 2698,
                                                                                            "loc": {
                                                                                                "start": {
                                                                                                    "line": 92,
                                                                                                    "column": 20
                                                                                                },
                                                                                                "end": {
                                                                                                    "line": 92,
                                                                                                    "column": 26
                                                                                                },
                                                                                                "identifierName": "$scope"
                                                                                            },
                                                                                            "name": "$scope"
                                                                                        },
                                                                                        "property": {
                                                                                            "type": "Identifier",
                                                                                            "start": 2699,
                                                                                            "end": 2703,
                                                                                            "loc": {
                                                                                                "start": {
                                                                                                    "line": 92,
                                                                                                    "column": 27
                                                                                                },
                                                                                                "end": {
                                                                                                    "line": 92,
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
                                                                                        "start": 2704,
                                                                                        "end": 2706,
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 92,
                                                                                                "column": 32
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 92,
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
                                                                                    "start": 2707,
                                                                                    "end": 2716,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 92,
                                                                                            "column": 35
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 92,
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
                                                                        "start": 2740,
                                                                        "end": 2758,
                                                                        "loc": {
                                                                            "start": {"line": 93, "column": 20},
                                                                            "end": {"line": 93, "column": 38}
                                                                        },
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "start": 2740,
                                                                            "end": 2757,
                                                                            "loc": {
                                                                                "start": {"line": 93, "column": 20},
                                                                                "end": {"line": 93, "column": 37}
                                                                            },
                                                                            "callee": {
                                                                                "type": "MemberExpression",
                                                                                "start": 2740,
                                                                                "end": 2755,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 93,
                                                                                        "column": 20
                                                                                    }, "end": {"line": 93, "column": 35}
                                                                                },
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2740,
                                                                                    "end": 2746,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 93,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 93,
                                                                                            "column": 26
                                                                                        },
                                                                                        "identifierName": "$scope"
                                                                                    },
                                                                                    "name": "$scope"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "start": 2747,
                                                                                    "end": 2755,
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 93,
                                                                                            "column": 27
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 93,
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
                                                                        "start": 2779,
                                                                        "end": 2788,
                                                                        "loc": {
                                                                            "start": {"line": 94, "column": 20},
                                                                            "end": {"line": 94, "column": 29}
                                                                        },
                                                                        "expression": {
                                                                            "type": "CallExpression",
                                                                            "start": 2779,
                                                                            "end": 2787,
                                                                            "loc": {
                                                                                "start": {"line": 94, "column": 20},
                                                                                "end": {"line": 94, "column": 28}
                                                                            },
                                                                            "callee": {
                                                                                "type": "Identifier",
                                                                                "start": 2779,
                                                                                "end": 2785,
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 94,
                                                                                        "column": 20
                                                                                    },
                                                                                    "end": {"line": 94, "column": 26},
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
                                                            "start": 2824,
                                                            "end": 2865,
                                                            "loc": {
                                                                "start": {"line": 96, "column": 16},
                                                                "end": {"line": 98, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 2824,
                                                                "end": 2831,
                                                                "loc": {
                                                                    "start": {"line": 96, "column": 16},
                                                                    "end": {"line": 96, "column": 23},
                                                                    "identifierName": "objFun3"
                                                                },
                                                                "name": "objFun3"
                                                            },
                                                            "value": {
                                                                "type": "ArrowFunctionExpression",
                                                                "start": 2833,
                                                                "end": 2865,
                                                                "loc": {
                                                                    "start": {"line": 96, "column": 25},
                                                                    "end": {"line": 98, "column": 17}
                                                                },
                                                                "id": null,
                                                                "generator": false,
                                                                "expression": false,
                                                                "async": false,
                                                                "params": [{
                                                                    "type": "Identifier",
                                                                    "start": 2834,
                                                                    "end": 2836,
                                                                    "loc": {
                                                                        "start": {"line": 96, "column": 26},
                                                                        "end": {"line": 96, "column": 28},
                                                                        "identifierName": "p1"
                                                                    },
                                                                    "name": "p1"
                                                                }, {
                                                                    "type": "Identifier",
                                                                    "start": 2838,
                                                                    "end": 2840,
                                                                    "loc": {
                                                                        "start": {"line": 96, "column": 30},
                                                                        "end": {"line": 96, "column": 32},
                                                                        "identifierName": "p2"
                                                                    },
                                                                    "name": "p2"
                                                                }],
                                                                "body": {
                                                                    "type": "BlockStatement",
                                                                    "start": 2845,
                                                                    "end": 2865,
                                                                    "loc": {
                                                                        "start": {"line": 96, "column": 37},
                                                                        "end": {"line": 98, "column": 17}
                                                                    },
                                                                    "body": [],
                                                                    "directives": []
                                                                }
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 2883,
                                                            "end": 2915,
                                                            "loc": {
                                                                "start": {"line": 99, "column": 16},
                                                                "end": {"line": 101, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 2887,
                                                                "end": 2892,
                                                                "loc": {
                                                                    "start": {"line": 99, "column": 20},
                                                                    "end": {"line": 99, "column": 25},
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
                                                                "start": 2895,
                                                                "end": 2915,
                                                                "loc": {
                                                                    "start": {"line": 99, "column": 28},
                                                                    "end": {"line": 101, "column": 17}
                                                                },
                                                                "body": [],
                                                                "directives": []
                                                            }
                                                        }, {
                                                            "type": "ObjectMethod",
                                                            "start": 2933,
                                                            "end": 2970,
                                                            "loc": {
                                                                "start": {"line": 102, "column": 16},
                                                                "end": {"line": 104, "column": 17}
                                                            },
                                                            "method": false,
                                                            "shorthand": false,
                                                            "computed": false,
                                                            "key": {
                                                                "type": "Identifier",
                                                                "start": 2937,
                                                                "end": 2942,
                                                                "loc": {
                                                                    "start": {"line": 102, "column": 20},
                                                                    "end": {"line": 102, "column": 25},
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
                                                                "start": 2943,
                                                                "end": 2948,
                                                                "loc": {
                                                                    "start": {"line": 102, "column": 26},
                                                                    "end": {"line": 102, "column": 31},
                                                                    "identifierName": "value"
                                                                },
                                                                "name": "value"
                                                            }],
                                                            "body": {
                                                                "type": "BlockStatement",
                                                                "start": 2950,
                                                                "end": 2970,
                                                                "loc": {
                                                                    "start": {"line": 102, "column": 33},
                                                                    "end": {"line": 104, "column": 17}
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
                                                    "start": 1790,
                                                    "end": 1794,
                                                    "loc": {
                                                        "start": {"line": 73, "column": 12},
                                                        "end": {"line": 73, "column": 16}
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
                                    "start": 1692,
                                    "end": 1700,
                                    "loc": {"start": {"line": 70, "column": 8}, "end": {"line": 70, "column": 16}}
                                }]
                            }, {
                                "type": "VariableDeclaration",
                                "start": 3005,
                                "end": 3035,
                                "loc": {"start": {"line": 109, "column": 8}, "end": {"line": 111, "column": 9}},
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "start": 3009,
                                    "end": 3035,
                                    "loc": {"start": {"line": 109, "column": 12}, "end": {"line": 111, "column": 9}},
                                    "id": {
                                        "type": "Identifier",
                                        "start": 3009,
                                        "end": 3011,
                                        "loc": {
                                            "start": {"line": 109, "column": 12},
                                            "end": {"line": 109, "column": 14},
                                            "identifierName": "xx"
                                        },
                                        "name": "xx"
                                    },
                                    "init": {
                                        "type": "ArrowFunctionExpression",
                                        "start": 3015,
                                        "end": 3035,
                                        "loc": {
                                            "start": {"line": 109, "column": 18},
                                            "end": {"line": 111, "column": 9}
                                        },
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 3016,
                                            "end": 3017,
                                            "loc": {
                                                "start": {"line": 109, "column": 19},
                                                "end": {"line": 109, "column": 20},
                                                "identifierName": "a"
                                            },
                                            "name": "a"
                                        }, {
                                            "type": "Identifier",
                                            "start": 3018,
                                            "end": 3019,
                                            "loc": {
                                                "start": {"line": 109, "column": 21},
                                                "end": {"line": 109, "column": 22},
                                                "identifierName": "b"
                                            },
                                            "name": "b"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 3023,
                                            "end": 3035,
                                            "loc": {
                                                "start": {"line": 109, "column": 26},
                                                "end": {"line": 111, "column": 9}
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
                                    "start": 3054,
                                    "end": 3066,
                                    "loc": {"start": {"line": 114, "column": 8}, "end": {"line": 114, "column": 20}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 3075,
                                "end": 3155,
                                "loc": {"start": {"line": 115, "column": 8}, "end": {"line": 117, "column": 10}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 3075,
                                    "end": 3154,
                                    "loc": {"start": {"line": 115, "column": 8}, "end": {"line": 117, "column": 9}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 3075,
                                        "end": 3090,
                                        "loc": {
                                            "start": {"line": 115, "column": 8},
                                            "end": {"line": 115, "column": 23}
                                        },
                                        "object": {
                                            "type": "Identifier",
                                            "start": 3075,
                                            "end": 3081,
                                            "loc": {
                                                "start": {"line": 115, "column": 8},
                                                "end": {"line": 115, "column": 14},
                                                "identifierName": "$scope"
                                            },
                                            "name": "$scope",
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 3082,
                                            "end": 3090,
                                            "loc": {
                                                "start": {"line": 115, "column": 15},
                                                "end": {"line": 115, "column": 23},
                                                "identifierName": "scopeFun"
                                            },
                                            "name": "scopeFun"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "FunctionExpression",
                                        "start": 3093,
                                        "end": 3154,
                                        "loc": {
                                            "start": {"line": 115, "column": 26},
                                            "end": {"line": 117, "column": 9}
                                        },
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 3103,
                                            "end": 3109,
                                            "loc": {
                                                "start": {"line": 115, "column": 36},
                                                "end": {"line": 115, "column": 42},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 3111,
                                            "end": 3154,
                                            "loc": {
                                                "start": {"line": 115, "column": 44},
                                                "end": {"line": 117, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 3125,
                                                "end": 3144,
                                                "loc": {
                                                    "start": {"line": 116, "column": 12},
                                                    "end": {"line": 116, "column": 31}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 3125,
                                                    "end": 3144,
                                                    "loc": {
                                                        "start": {"line": 116, "column": 12},
                                                        "end": {"line": 116, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 3125,
                                                        "end": 3136,
                                                        "loc": {
                                                            "start": {"line": 116, "column": 12},
                                                            "end": {"line": 116, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3125,
                                                            "end": 3132,
                                                            "loc": {
                                                                "start": {"line": 116, "column": 12},
                                                                "end": {"line": 116, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3133,
                                                            "end": 3136,
                                                            "loc": {
                                                                "start": {"line": 116, "column": 20},
                                                                "end": {"line": 116, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 3137,
                                                        "end": 3143,
                                                        "loc": {
                                                            "start": {"line": 116, "column": 24},
                                                            "end": {"line": 116, "column": 30},
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
                                    "start": 3054,
                                    "end": 3066,
                                    "loc": {"start": {"line": 114, "column": 8}, "end": {"line": 114, "column": 20}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "scope多级初始化函数",
                                    "start": 3165,
                                    "end": 3179,
                                    "loc": {"start": {"line": 119, "column": 8}, "end": {"line": 119, "column": 22}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 3188,
                                "end": 3664,
                                "loc": {"start": {"line": 120, "column": 8}, "end": {"line": 137, "column": 10}},
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 3188,
                                    "end": 3663,
                                    "loc": {"start": {"line": 120, "column": 8}, "end": {"line": 137, "column": 9}},
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "start": 3188,
                                        "end": 3212,
                                        "loc": {
                                            "start": {"line": 120, "column": 8},
                                            "end": {"line": 120, "column": 32}
                                        },
                                        "object": {
                                            "type": "MemberExpression",
                                            "start": 3188,
                                            "end": 3202,
                                            "loc": {
                                                "start": {"line": 120, "column": 8},
                                                "end": {"line": 120, "column": 22}
                                            },
                                            "object": {
                                                "type": "MemberExpression",
                                                "start": 3188,
                                                "end": 3199,
                                                "loc": {
                                                    "start": {"line": 120, "column": 8},
                                                    "end": {"line": 120, "column": 19}
                                                },
                                                "object": {
                                                    "type": "Identifier",
                                                    "start": 3188,
                                                    "end": 3194,
                                                    "loc": {
                                                        "start": {"line": 120, "column": 8},
                                                        "end": {"line": 120, "column": 14},
                                                        "identifierName": "$scope"
                                                    },
                                                    "name": "$scope",
                                                    "leadingComments": null
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "start": 3195,
                                                    "end": 3199,
                                                    "loc": {
                                                        "start": {"line": 120, "column": 15},
                                                        "end": {"line": 120, "column": 19},
                                                        "identifierName": "data"
                                                    },
                                                    "name": "data"
                                                },
                                                "computed": false,
                                                "leadingComments": null
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 3200,
                                                "end": 3202,
                                                "loc": {
                                                    "start": {"line": 120, "column": 20},
                                                    "end": {"line": 120, "column": 22},
                                                    "identifierName": "qq"
                                                },
                                                "name": "qq"
                                            },
                                            "computed": false,
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 3203,
                                            "end": 3212,
                                            "loc": {
                                                "start": {"line": 120, "column": 23},
                                                "end": {"line": 120, "column": 32},
                                                "identifierName": "scopeFun2"
                                            },
                                            "name": "scopeFun2"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "right": {
                                        "type": "FunctionExpression",
                                        "start": 3215,
                                        "end": 3663,
                                        "loc": {
                                            "start": {"line": 120, "column": 35},
                                            "end": {"line": 137, "column": 9}
                                        },
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 3227,
                                            "end": 3663,
                                            "loc": {
                                                "start": {"line": 120, "column": 47},
                                                "end": {"line": 137, "column": 9}
                                            },
                                            "body": [{
                                                "type": "VariableDeclaration",
                                                "start": 3242,
                                                "end": 3265,
                                                "loc": {
                                                    "start": {"line": 122, "column": 12},
                                                    "end": {"line": 122, "column": 35}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 3246,
                                                    "end": 3264,
                                                    "loc": {
                                                        "start": {"line": 122, "column": 16},
                                                        "end": {"line": 122, "column": 34}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 3246,
                                                        "end": 3253,
                                                        "loc": {
                                                            "start": {"line": 122, "column": 16},
                                                            "end": {"line": 122, "column": 23},
                                                            "identifierName": "subFun2"
                                                        },
                                                        "name": "subFun2"
                                                    },
                                                    "init": {
                                                        "type": "Identifier",
                                                        "start": 3256,
                                                        "end": 3264,
                                                        "loc": {
                                                            "start": {"line": 122, "column": 26},
                                                            "end": {"line": 122, "column": 34},
                                                            "identifierName": "_subFun2"
                                                        },
                                                        "name": "_subFun2"
                                                    }
                                                }],
                                                "kind": "var"
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 3278,
                                                "end": 3335,
                                                "loc": {
                                                    "start": {"line": 123, "column": 12},
                                                    "end": {"line": 125, "column": 14}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 3282,
                                                    "end": 3334,
                                                    "loc": {
                                                        "start": {"line": 123, "column": 16},
                                                        "end": {"line": 125, "column": 13}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 3282,
                                                        "end": 3289,
                                                        "loc": {
                                                            "start": {"line": 123, "column": 16},
                                                            "end": {"line": 123, "column": 23},
                                                            "identifierName": "subFun1"
                                                        },
                                                        "name": "subFun1"
                                                    },
                                                    "init": {
                                                        "type": "FunctionExpression",
                                                        "start": 3292,
                                                        "end": 3334,
                                                        "loc": {
                                                            "start": {"line": 123, "column": 26},
                                                            "end": {"line": 125, "column": 13}
                                                        },
                                                        "id": null,
                                                        "generator": false,
                                                        "expression": false,
                                                        "async": false,
                                                        "params": [{
                                                            "type": "Identifier",
                                                            "start": 3302,
                                                            "end": 3308,
                                                            "loc": {
                                                                "start": {"line": 123, "column": 36},
                                                                "end": {"line": 123, "column": 42},
                                                                "identifierName": "param1"
                                                            },
                                                            "name": "param1"
                                                        }, {
                                                            "type": "Identifier",
                                                            "start": 3310,
                                                            "end": 3316,
                                                            "loc": {
                                                                "start": {"line": 123, "column": 44},
                                                                "end": {"line": 123, "column": 50},
                                                                "identifierName": "param2"
                                                            },
                                                            "name": "param2"
                                                        }],
                                                        "body": {
                                                            "type": "BlockStatement",
                                                            "start": 3318,
                                                            "end": 3334,
                                                            "loc": {
                                                                "start": {"line": 123, "column": 52},
                                                                "end": {"line": 125, "column": 13}
                                                            },
                                                            "body": [],
                                                            "directives": []
                                                        }
                                                    }
                                                }],
                                                "kind": "var"
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 3348,
                                                "end": 3373,
                                                "loc": {
                                                    "start": {"line": 126, "column": 12},
                                                    "end": {"line": 126, "column": 37}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 3348,
                                                    "end": 3372,
                                                    "loc": {
                                                        "start": {"line": 126, "column": 12},
                                                        "end": {"line": 126, "column": 36}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 3348,
                                                        "end": 3355,
                                                        "loc": {
                                                            "start": {"line": 126, "column": 12},
                                                            "end": {"line": 126, "column": 19},
                                                            "identifierName": "subFun2"
                                                        },
                                                        "name": "subFun2"
                                                    },
                                                    "arguments": [{
                                                        "type": "MemberExpression",
                                                        "start": 3356,
                                                        "end": 3371,
                                                        "loc": {
                                                            "start": {"line": 126, "column": 20},
                                                            "end": {"line": 126, "column": 35}
                                                        },
                                                        "object": {
                                                            "type": "CallExpression",
                                                            "start": 3356,
                                                            "end": 3365,
                                                            "loc": {
                                                                "start": {"line": 126, "column": 20},
                                                                "end": {"line": 126, "column": 29}
                                                            },
                                                            "callee": {
                                                                "type": "Identifier",
                                                                "start": 3356,
                                                                "end": 3363,
                                                                "loc": {
                                                                    "start": {"line": 126, "column": 20},
                                                                    "end": {"line": 126, "column": 27},
                                                                    "identifierName": "subFun1"
                                                                },
                                                                "name": "subFun1"
                                                            },
                                                            "arguments": []
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3366,
                                                            "end": 3371,
                                                            "loc": {
                                                                "start": {"line": 126, "column": 30},
                                                                "end": {"line": 126, "column": 35},
                                                                "identifierName": "value"
                                                            },
                                                            "name": "value"
                                                        },
                                                        "computed": false
                                                    }]
                                                }
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 3386,
                                                "end": 3431,
                                                "loc": {
                                                    "start": {"line": 127, "column": 12},
                                                    "end": {"line": 127, "column": 57}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 3386,
                                                    "end": 3430,
                                                    "loc": {
                                                        "start": {"line": 127, "column": 12},
                                                        "end": {"line": 127, "column": 56}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 3386,
                                                        "end": 3393,
                                                        "loc": {
                                                            "start": {"line": 127, "column": 12},
                                                            "end": {"line": 127, "column": 19},
                                                            "identifierName": "subFun1"
                                                        },
                                                        "name": "subFun1"
                                                    },
                                                    "arguments": [{
                                                        "type": "MemberExpression",
                                                        "start": 3394,
                                                        "end": 3416,
                                                        "loc": {
                                                            "start": {"line": 127, "column": 20},
                                                            "end": {"line": 127, "column": 42}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3394,
                                                            "end": 3402,
                                                            "loc": {
                                                                "start": {"line": 127, "column": 20},
                                                                "end": {"line": 127, "column": 28},
                                                                "identifierName": "mutiVar3"
                                                            },
                                                            "name": "mutiVar3"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3403,
                                                            "end": 3416,
                                                            "loc": {
                                                                "start": {"line": 127, "column": 29},
                                                                "end": {"line": 127, "column": 42},
                                                                "identifierName": "mutiVar3Value"
                                                            },
                                                            "name": "mutiVar3Value"
                                                        },
                                                        "computed": false
                                                    }, {
                                                        "type": "MemberExpression",
                                                        "start": 3418,
                                                        "end": 3429,
                                                        "loc": {
                                                            "start": {"line": 127, "column": 44},
                                                            "end": {"line": 127, "column": 55}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3418,
                                                            "end": 3424,
                                                            "loc": {
                                                                "start": {"line": 127, "column": 44},
                                                                "end": {"line": 127, "column": 50},
                                                                "identifierName": "$scope"
                                                            },
                                                            "name": "$scope"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3425,
                                                            "end": 3429,
                                                            "loc": {
                                                                "start": {"line": 127, "column": 51},
                                                                "end": {"line": 127, "column": 55},
                                                                "identifierName": "data"
                                                            },
                                                            "name": "data"
                                                        },
                                                        "computed": false
                                                    }]
                                                }
                                            }, {
                                                "type": "FunctionDeclaration",
                                                "start": 3444,
                                                "end": 3494,
                                                "loc": {
                                                    "start": {"line": 128, "column": 12},
                                                    "end": {"line": 130, "column": 13}
                                                },
                                                "id": {
                                                    "type": "Identifier",
                                                    "start": 3453,
                                                    "end": 3461,
                                                    "loc": {
                                                        "start": {"line": 128, "column": 21},
                                                        "end": {"line": 128, "column": 29},
                                                        "identifierName": "_subFun2"
                                                    },
                                                    "name": "_subFun2"
                                                },
                                                "generator": false,
                                                "expression": false,
                                                "async": false,
                                                "params": [{
                                                    "type": "Identifier",
                                                    "start": 3462,
                                                    "end": 3468,
                                                    "loc": {
                                                        "start": {"line": 128, "column": 30},
                                                        "end": {"line": 128, "column": 36},
                                                        "identifierName": "param1"
                                                    },
                                                    "name": "param1"
                                                }, {
                                                    "type": "Identifier",
                                                    "start": 3470,
                                                    "end": 3476,
                                                    "loc": {
                                                        "start": {"line": 128, "column": 38},
                                                        "end": {"line": 128, "column": 44},
                                                        "identifierName": "param2"
                                                    },
                                                    "name": "param2"
                                                }],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "start": 3478,
                                                    "end": 3494,
                                                    "loc": {
                                                        "start": {"line": 128, "column": 46},
                                                        "end": {"line": 130, "column": 13}
                                                    },
                                                    "body": [],
                                                    "directives": []
                                                }
                                            }, {
                                                "type": "VariableDeclaration",
                                                "start": 3508,
                                                "end": 3549,
                                                "loc": {
                                                    "start": {"line": 132, "column": 12},
                                                    "end": {"line": 132, "column": 53}
                                                },
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "start": 3512,
                                                    "end": 3548,
                                                    "loc": {
                                                        "start": {"line": 132, "column": 16},
                                                        "end": {"line": 132, "column": 52}
                                                    },
                                                    "id": {
                                                        "type": "Identifier",
                                                        "start": 3512,
                                                        "end": 3523,
                                                        "loc": {
                                                            "start": {"line": 132, "column": 16},
                                                            "end": {"line": 132, "column": 27},
                                                            "identifierName": "fnMutiValue"
                                                        },
                                                        "name": "fnMutiValue"
                                                    },
                                                    "init": {
                                                        "type": "MemberExpression",
                                                        "start": 3526,
                                                        "end": 3548,
                                                        "loc": {
                                                            "start": {"line": 132, "column": 30},
                                                            "end": {"line": 132, "column": 52}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3526,
                                                            "end": 3534,
                                                            "loc": {
                                                                "start": {"line": 132, "column": 30},
                                                                "end": {"line": 132, "column": 38},
                                                                "identifierName": "mutiVar3"
                                                            },
                                                            "name": "mutiVar3"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3535,
                                                            "end": 3548,
                                                            "loc": {
                                                                "start": {"line": 132, "column": 39},
                                                                "end": {"line": 132, "column": 52},
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
                                                "start": 3562,
                                                "end": 3588,
                                                "loc": {
                                                    "start": {"line": 133, "column": 12},
                                                    "end": {"line": 133, "column": 38}
                                                },
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "start": 3562,
                                                    "end": 3587,
                                                    "loc": {
                                                        "start": {"line": 133, "column": 12},
                                                        "end": {"line": 133, "column": 37}
                                                    },
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "MemberExpression",
                                                        "start": 3562,
                                                        "end": 3580,
                                                        "loc": {
                                                            "start": {"line": 133, "column": 12},
                                                            "end": {"line": 133, "column": 30}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3562,
                                                            "end": 3568,
                                                            "loc": {
                                                                "start": {"line": 133, "column": 12},
                                                                "end": {"line": 133, "column": 18},
                                                                "identifierName": "$scope"
                                                            },
                                                            "name": "$scope"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3569,
                                                            "end": 3580,
                                                            "loc": {
                                                                "start": {"line": 133, "column": 19},
                                                                "end": {"line": 133, "column": 30},
                                                                "identifierName": "funScopeVar"
                                                            },
                                                            "name": "funScopeVar"
                                                        },
                                                        "computed": false
                                                    },
                                                    "right": {
                                                        "type": "StringLiteral",
                                                        "start": 3583,
                                                        "end": 3587,
                                                        "loc": {
                                                            "start": {"line": 133, "column": 33},
                                                            "end": {"line": 133, "column": 37}
                                                        },
                                                        "extra": {"rawValue": "12", "raw": "\"12\""},
                                                        "value": "12"
                                                    }
                                                }
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 3601,
                                                "end": 3610,
                                                "loc": {
                                                    "start": {"line": 134, "column": 12},
                                                    "end": {"line": 134, "column": 21}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 3601,
                                                    "end": 3609,
                                                    "loc": {
                                                        "start": {"line": 134, "column": 12},
                                                        "end": {"line": 134, "column": 20}
                                                    },
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "start": 3601,
                                                        "end": 3607,
                                                        "loc": {
                                                            "start": {"line": 134, "column": 12},
                                                            "end": {"line": 134, "column": 18},
                                                            "identifierName": "decFun"
                                                        },
                                                        "name": "decFun"
                                                    },
                                                    "arguments": []
                                                }
                                            }, {
                                                "type": "ExpressionStatement",
                                                "start": 3623,
                                                "end": 3652,
                                                "loc": {
                                                    "start": {"line": 135, "column": 12},
                                                    "end": {"line": 135, "column": 41}
                                                },
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "start": 3623,
                                                    "end": 3651,
                                                    "loc": {
                                                        "start": {"line": 135, "column": 12},
                                                        "end": {"line": 135, "column": 40}
                                                    },
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "MemberExpression",
                                                        "start": 3623,
                                                        "end": 3645,
                                                        "loc": {
                                                            "start": {"line": 135, "column": 12},
                                                            "end": {"line": 135, "column": 34}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3623,
                                                            "end": 3632,
                                                            "loc": {
                                                                "start": {"line": 135, "column": 12},
                                                                "end": {"line": 135, "column": 21},
                                                                "identifierName": "scopeData"
                                                            },
                                                            "name": "scopeData"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3633,
                                                            "end": 3645,
                                                            "loc": {
                                                                "start": {"line": 135, "column": 22},
                                                                "end": {"line": 135, "column": 34},
                                                                "identifierName": "funScopeVar1"
                                                            },
                                                            "name": "funScopeVar1"
                                                        },
                                                        "computed": false
                                                    },
                                                    "right": {
                                                        "type": "StringLiteral",
                                                        "start": 3648,
                                                        "end": 3651,
                                                        "loc": {
                                                            "start": {"line": 135, "column": 37},
                                                            "end": {"line": 135, "column": 40}
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
                                    "start": 3165,
                                    "end": 3179,
                                    "loc": {"start": {"line": 119, "column": 8}, "end": {"line": 119, "column": 22}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentBlock",
                                    "value": "*\n         * 表达式\n         ",
                                    "start": 3674,
                                    "end": 3704,
                                    "loc": {"start": {"line": 139, "column": 8}, "end": {"line": 141, "column": 11}}
                                }]
                            }, {
                                "type": "FunctionDeclaration",
                                "start": 3713,
                                "end": 3796,
                                "loc": {"start": {"line": 142, "column": 8}, "end": {"line": 144, "column": 9}},
                                "id": {
                                    "type": "Identifier",
                                    "start": 3722,
                                    "end": 3728,
                                    "loc": {
                                        "start": {"line": 142, "column": 17},
                                        "end": {"line": 142, "column": 23},
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
                                    "start": 3729,
                                    "end": 3735,
                                    "loc": {
                                        "start": {"line": 142, "column": 24},
                                        "end": {"line": 142, "column": 30},
                                        "identifierName": "param1"
                                    },
                                    "name": "param1"
                                }, {
                                    "type": "Identifier",
                                    "start": 3737,
                                    "end": 3743,
                                    "loc": {
                                        "start": {"line": 142, "column": 32},
                                        "end": {"line": 142, "column": 38},
                                        "identifierName": "param2"
                                    },
                                    "name": "param2"
                                }],
                                "body": {
                                    "type": "BlockStatement",
                                    "start": 3745,
                                    "end": 3796,
                                    "loc": {"start": {"line": 142, "column": 40}, "end": {"line": 144, "column": 9}},
                                    "body": [{
                                        "type": "ExpressionStatement",
                                        "start": 3759,
                                        "end": 3786,
                                        "loc": {
                                            "start": {"line": 143, "column": 12},
                                            "end": {"line": 143, "column": 39}
                                        },
                                        "expression": {
                                            "type": "CallExpression",
                                            "start": 3759,
                                            "end": 3786,
                                            "loc": {
                                                "start": {"line": 143, "column": 12},
                                                "end": {"line": 143, "column": 39}
                                            },
                                            "callee": {
                                                "type": "MemberExpression",
                                                "start": 3759,
                                                "end": 3770,
                                                "loc": {
                                                    "start": {"line": 143, "column": 12},
                                                    "end": {"line": 143, "column": 23}
                                                },
                                                "object": {
                                                    "type": "Identifier",
                                                    "start": 3759,
                                                    "end": 3766,
                                                    "loc": {
                                                        "start": {"line": 143, "column": 12},
                                                        "end": {"line": 143, "column": 19},
                                                        "identifierName": "console"
                                                    },
                                                    "name": "console"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "start": 3767,
                                                    "end": 3770,
                                                    "loc": {
                                                        "start": {"line": 143, "column": 20},
                                                        "end": {"line": 143, "column": 23},
                                                        "identifierName": "log"
                                                    },
                                                    "name": "log"
                                                },
                                                "computed": false
                                            },
                                            "arguments": [{
                                                "type": "Identifier",
                                                "start": 3771,
                                                "end": 3777,
                                                "loc": {
                                                    "start": {"line": 143, "column": 24},
                                                    "end": {"line": 143, "column": 30},
                                                    "identifierName": "param1"
                                                },
                                                "name": "param1"
                                            }, {
                                                "type": "Identifier",
                                                "start": 3779,
                                                "end": 3785,
                                                "loc": {
                                                    "start": {"line": 143, "column": 32},
                                                    "end": {"line": 143, "column": 38},
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
                                    "start": 3674,
                                    "end": 3704,
                                    "loc": {"start": {"line": 139, "column": 8}, "end": {"line": 141, "column": 11}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "直接调用",
                                    "start": 3806,
                                    "end": 3812,
                                    "loc": {"start": {"line": 146, "column": 8}, "end": {"line": 146, "column": 14}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 3821,
                                "end": 3831,
                                "loc": {"start": {"line": 147, "column": 8}, "end": {"line": 147, "column": 18}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 3821,
                                    "end": 3830,
                                    "loc": {"start": {"line": 147, "column": 8}, "end": {"line": 147, "column": 17}},
                                    "callee": {
                                        "type": "Identifier",
                                        "start": 3821,
                                        "end": 3828,
                                        "loc": {
                                            "start": {"line": 147, "column": 8},
                                            "end": {"line": 147, "column": 15},
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
                                    "start": 3806,
                                    "end": 3812,
                                    "loc": {"start": {"line": 146, "column": 8}, "end": {"line": 146, "column": 14}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": "调用",
                                    "start": 3840,
                                    "end": 3844,
                                    "loc": {"start": {"line": 148, "column": 8}, "end": {"line": 148, "column": 12}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 3853,
                                "end": 3932,
                                "loc": {"start": {"line": 149, "column": 8}, "end": {"line": 151, "column": 11}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 3853,
                                    "end": 3931,
                                    "loc": {"start": {"line": 149, "column": 8}, "end": {"line": 151, "column": 10}},
                                    "callee": {
                                        "type": "MemberExpression",
                                        "start": 3853,
                                        "end": 3868,
                                        "loc": {
                                            "start": {"line": 149, "column": 8},
                                            "end": {"line": 149, "column": 23}
                                        },
                                        "object": {
                                            "type": "Identifier",
                                            "start": 3853,
                                            "end": 3859,
                                            "loc": {
                                                "start": {"line": 149, "column": 8},
                                                "end": {"line": 149, "column": 14},
                                                "identifierName": "$scope"
                                            },
                                            "name": "$scope",
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 3860,
                                            "end": 3868,
                                            "loc": {
                                                "start": {"line": 149, "column": 15},
                                                "end": {"line": 149, "column": 23},
                                                "identifierName": "scopeFun"
                                            },
                                            "name": "scopeFun"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "arguments": [{
                                        "type": "FunctionExpression",
                                        "start": 3869,
                                        "end": 3930,
                                        "loc": {
                                            "start": {"line": 149, "column": 24},
                                            "end": {"line": 151, "column": 9}
                                        },
                                        "id": null,
                                        "generator": false,
                                        "expression": false,
                                        "async": false,
                                        "params": [{
                                            "type": "Identifier",
                                            "start": 3879,
                                            "end": 3885,
                                            "loc": {
                                                "start": {"line": 149, "column": 34},
                                                "end": {"line": 149, "column": 40},
                                                "identifierName": "param1"
                                            },
                                            "name": "param1"
                                        }],
                                        "body": {
                                            "type": "BlockStatement",
                                            "start": 3887,
                                            "end": 3930,
                                            "loc": {
                                                "start": {"line": 149, "column": 42},
                                                "end": {"line": 151, "column": 9}
                                            },
                                            "body": [{
                                                "type": "ExpressionStatement",
                                                "start": 3901,
                                                "end": 3920,
                                                "loc": {
                                                    "start": {"line": 150, "column": 12},
                                                    "end": {"line": 150, "column": 31}
                                                },
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "start": 3901,
                                                    "end": 3920,
                                                    "loc": {
                                                        "start": {"line": 150, "column": 12},
                                                        "end": {"line": 150, "column": 31}
                                                    },
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 3901,
                                                        "end": 3912,
                                                        "loc": {
                                                            "start": {"line": 150, "column": 12},
                                                            "end": {"line": 150, "column": 23}
                                                        },
                                                        "object": {
                                                            "type": "Identifier",
                                                            "start": 3901,
                                                            "end": 3908,
                                                            "loc": {
                                                                "start": {"line": 150, "column": 12},
                                                                "end": {"line": 150, "column": 19},
                                                                "identifierName": "console"
                                                            },
                                                            "name": "console"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "start": 3909,
                                                            "end": 3912,
                                                            "loc": {
                                                                "start": {"line": 150, "column": 20},
                                                                "end": {"line": 150, "column": 23},
                                                                "identifierName": "log"
                                                            },
                                                            "name": "log"
                                                        },
                                                        "computed": false
                                                    },
                                                    "arguments": [{
                                                        "type": "Identifier",
                                                        "start": 3913,
                                                        "end": 3919,
                                                        "loc": {
                                                            "start": {"line": 150, "column": 24},
                                                            "end": {"line": 150, "column": 30},
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
                                    "start": 3840,
                                    "end": 3844,
                                    "loc": {"start": {"line": 148, "column": 8}, "end": {"line": 148, "column": 12}}
                                }],
                                "trailingComments": [{
                                    "type": "CommentLine",
                                    "value": " this.scopeFun2();",
                                    "start": 3941,
                                    "end": 3961,
                                    "loc": {"start": {"line": 152, "column": 8}, "end": {"line": 152, "column": 28}}
                                }]
                            }, {
                                "type": "ExpressionStatement",
                                "start": 3970,
                                "end": 3994,
                                "loc": {"start": {"line": 153, "column": 8}, "end": {"line": 153, "column": 32}},
                                "expression": {
                                    "type": "CallExpression",
                                    "start": 3970,
                                    "end": 3993,
                                    "loc": {"start": {"line": 153, "column": 8}, "end": {"line": 153, "column": 31}},
                                    "callee": {
                                        "type": "MemberExpression",
                                        "start": 3970,
                                        "end": 3991,
                                        "loc": {
                                            "start": {"line": 153, "column": 8},
                                            "end": {"line": 153, "column": 29}
                                        },
                                        "object": {
                                            "type": "MemberExpression",
                                            "start": 3970,
                                            "end": 3981,
                                            "loc": {
                                                "start": {"line": 153, "column": 8},
                                                "end": {"line": 153, "column": 19}
                                            },
                                            "object": {
                                                "type": "Identifier",
                                                "start": 3970,
                                                "end": 3976,
                                                "loc": {
                                                    "start": {"line": 153, "column": 8},
                                                    "end": {"line": 153, "column": 14},
                                                    "identifierName": "$scope"
                                                },
                                                "name": "$scope",
                                                "leadingComments": null
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "start": 3977,
                                                "end": 3981,
                                                "loc": {
                                                    "start": {"line": 153, "column": 15},
                                                    "end": {"line": 153, "column": 19},
                                                    "identifierName": "data"
                                                },
                                                "name": "data"
                                            },
                                            "computed": false,
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 3982,
                                            "end": 3991,
                                            "loc": {
                                                "start": {"line": 153, "column": 20},
                                                "end": {"line": 153, "column": 29},
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
                                    "start": 3941,
                                    "end": 3961,
                                    "loc": {"start": {"line": 152, "column": 8}, "end": {"line": 152, "column": 28}}
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
        "value": "scopeData2comment",
        "start": 592,
        "end": 611,
        "loc": {"start": {"line": 30, "column": 12}, "end": {"line": 30, "column": 31}}
    }, {
        "type": "CommentLine",
        "value": "单个变量申明",
        "start": 647,
        "end": 655,
        "loc": {"start": {"line": 32, "column": 8}, "end": {"line": 32, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "多个变量申明， 包括函数",
        "start": 711,
        "end": 725,
        "loc": {"start": {"line": 34, "column": 8}, "end": {"line": 34, "column": 22}}
    }, {
        "type": "CommentLine",
        "value": "mutiVar1 Comments",
        "start": 760,
        "end": 779,
        "loc": {"start": {"line": 36, "column": 12}, "end": {"line": 36, "column": 31}}
    }, {
        "type": "CommentLine",
        "value": "函数直接申明",
        "start": 1692,
        "end": 1700,
        "loc": {"start": {"line": 70, "column": 8}, "end": {"line": 70, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "对象",
        "start": 1790,
        "end": 1794,
        "loc": {"start": {"line": 73, "column": 12}, "end": {"line": 73, "column": 16}}
    }, {
        "type": "CommentLine",
        "value": "scope函数初始化",
        "start": 3054,
        "end": 3066,
        "loc": {"start": {"line": 114, "column": 8}, "end": {"line": 114, "column": 20}}
    }, {
        "type": "CommentLine",
        "value": "scope多级初始化函数",
        "start": 3165,
        "end": 3179,
        "loc": {"start": {"line": 119, "column": 8}, "end": {"line": 119, "column": 22}}
    }, {
        "type": "CommentBlock",
        "value": "*\n         * 表达式\n         ",
        "start": 3674,
        "end": 3704,
        "loc": {"start": {"line": 139, "column": 8}, "end": {"line": 141, "column": 11}}
    }, {
        "type": "CommentLine",
        "value": "直接调用",
        "start": 3806,
        "end": 3812,
        "loc": {"start": {"line": 146, "column": 8}, "end": {"line": 146, "column": 14}}
    }, {
        "type": "CommentLine",
        "value": "调用",
        "start": 3840,
        "end": 3844,
        "loc": {"start": {"line": 148, "column": 8}, "end": {"line": 148, "column": 12}}
    }, {
        "type": "CommentLine",
        "value": " this.scopeFun2();",
        "start": 3941,
        "end": 3961,
        "loc": {"start": {"line": 152, "column": 8}, "end": {"line": 152, "column": 28}}
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
        "type": "CommentLine",
        "value": "scopeData2comment",
        "start": 592,
        "end": 611,
        "loc": {"start": {"line": 30, "column": 12}, "end": {"line": 30, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 624,
        "end": 634,
        "loc": {"start": {"line": 31, "column": 12}, "end": {"line": 31, "column": 22}}
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
        "start": 634,
        "end": 635,
        "loc": {"start": {"line": 31, "column": 22}, "end": {"line": 31, "column": 23}}
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
        "start": 635,
        "end": 637,
        "loc": {"start": {"line": 31, "column": 23}, "end": {"line": 31, "column": 25}}
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
        }, "start": 637, "end": 638, "loc": {"start": {"line": 31, "column": 25}, "end": {"line": 31, "column": 26}}
    }, {
        "type": "CommentLine",
        "value": "单个变量申明",
        "start": 647,
        "end": 655,
        "loc": {"start": {"line": 32, "column": 8}, "end": {"line": 32, "column": 16}}
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
        "start": 664,
        "end": 667,
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
        "value": "singleVariable",
        "start": 668,
        "end": 682,
        "loc": {"start": {"line": 33, "column": 12}, "end": {"line": 33, "column": 26}}
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
        "start": 683,
        "end": 684,
        "loc": {"start": {"line": 33, "column": 27}, "end": {"line": 33, "column": 28}}
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
        "start": 685,
        "end": 701,
        "loc": {"start": {"line": 33, "column": 29}, "end": {"line": 33, "column": 45}}
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
        }, "start": 701, "end": 702, "loc": {"start": {"line": 33, "column": 45}, "end": {"line": 33, "column": 46}}
    }, {
        "type": "CommentLine",
        "value": "多个变量申明， 包括函数",
        "start": 711,
        "end": 725,
        "loc": {"start": {"line": 34, "column": 8}, "end": {"line": 34, "column": 22}}
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
        "start": 734,
        "end": 737,
        "loc": {"start": {"line": 35, "column": 8}, "end": {"line": 35, "column": 11}}
    }, {
        "type": {
            "label": "name",
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
        "start": 738,
        "end": 746,
        "loc": {"start": {"line": 35, "column": 12}, "end": {"line": 35, "column": 20}}
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
        }, "start": 746, "end": 747, "loc": {"start": {"line": 35, "column": 20}, "end": {"line": 35, "column": 21}}
    }, {
        "type": "CommentLine",
        "value": "mutiVar1 Comments",
        "start": 760,
        "end": 779,
        "loc": {"start": {"line": 36, "column": 12}, "end": {"line": 36, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 792,
        "end": 800,
        "loc": {"start": {"line": 37, "column": 12}, "end": {"line": 37, "column": 20}}
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
        "start": 801,
        "end": 802,
        "loc": {"start": {"line": 37, "column": 21}, "end": {"line": 37, "column": 22}}
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
        "start": 803,
        "end": 807,
        "loc": {"start": {"line": 37, "column": 23}, "end": {"line": 37, "column": 27}}
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
        }, "start": 807, "end": 808, "loc": {"start": {"line": 37, "column": 27}, "end": {"line": 37, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 821,
        "end": 829,
        "loc": {"start": {"line": 38, "column": 12}, "end": {"line": 38, "column": 20}}
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
        "start": 830,
        "end": 831,
        "loc": {"start": {"line": 38, "column": 21}, "end": {"line": 38, "column": 22}}
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
        "start": 832,
        "end": 842,
        "loc": {"start": {"line": 38, "column": 23}, "end": {"line": 38, "column": 33}}
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
        }, "start": 842, "end": 843, "loc": {"start": {"line": 38, "column": 33}, "end": {"line": 38, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 856,
        "end": 863,
        "loc": {"start": {"line": 39, "column": 12}, "end": {"line": 39, "column": 19}}
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
        "start": 864,
        "end": 865,
        "loc": {"start": {"line": 39, "column": 20}, "end": {"line": 39, "column": 21}}
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
        "start": 866,
        "end": 874,
        "loc": {"start": {"line": 39, "column": 22}, "end": {"line": 39, "column": 30}}
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
        }, "start": 875, "end": 876, "loc": {"start": {"line": 39, "column": 31}, "end": {"line": 39, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 876,
        "end": 882,
        "loc": {"start": {"line": 39, "column": 32}, "end": {"line": 39, "column": 38}}
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
        }, "start": 882, "end": 883, "loc": {"start": {"line": 39, "column": 38}, "end": {"line": 39, "column": 39}}
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
        }, "start": 884, "end": 885, "loc": {"start": {"line": 39, "column": 40}, "end": {"line": 39, "column": 41}}
    }, {
        "type": {
            "label": "name",
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
        "start": 902,
        "end": 909,
        "loc": {"start": {"line": 40, "column": 16}, "end": {"line": 40, "column": 23}}
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
        }, "start": 909, "end": 910, "loc": {"start": {"line": 40, "column": 23}, "end": {"line": 40, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 910,
        "end": 913,
        "loc": {"start": {"line": 40, "column": 24}, "end": {"line": 40, "column": 27}}
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
        }, "start": 913, "end": 914, "loc": {"start": {"line": 40, "column": 27}, "end": {"line": 40, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 914,
        "end": 920,
        "loc": {"start": {"line": 40, "column": 28}, "end": {"line": 40, "column": 34}}
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
        }, "start": 920, "end": 921, "loc": {"start": {"line": 40, "column": 34}, "end": {"line": 40, "column": 35}}
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
        }, "start": 934, "end": 935, "loc": {"start": {"line": 41, "column": 12}, "end": {"line": 41, "column": 13}}
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
        }, "start": 935, "end": 936, "loc": {"start": {"line": 41, "column": 13}, "end": {"line": 41, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 949,
        "end": 957,
        "loc": {"start": {"line": 42, "column": 12}, "end": {"line": 42, "column": 20}}
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
        "start": 958,
        "end": 959,
        "loc": {"start": {"line": 42, "column": 21}, "end": {"line": 42, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 960,
        "end": 969,
        "loc": {"start": {"line": 42, "column": 23}, "end": {"line": 42, "column": 32}}
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
        }, "start": 969, "end": 970, "loc": {"start": {"line": 42, "column": 32}, "end": {"line": 42, "column": 33}}
    }, {
        "type": {
            "label": "name",
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
        "start": 983,
        "end": 991,
        "loc": {"start": {"line": 43, "column": 12}, "end": {"line": 43, "column": 20}}
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
        "start": 992,
        "end": 993,
        "loc": {"start": {"line": 43, "column": 21}, "end": {"line": 43, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 994,
        "end": 999,
        "loc": {"start": {"line": 43, "column": 23}, "end": {"line": 43, "column": 28}}
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
        }, "start": 999, "end": 1000, "loc": {"start": {"line": 43, "column": 28}, "end": {"line": 43, "column": 29}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1000,
        "end": 1007,
        "loc": {"start": {"line": 43, "column": 29}, "end": {"line": 43, "column": 36}}
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
        }, "start": 1007, "end": 1008, "loc": {"start": {"line": 43, "column": 36}, "end": {"line": 43, "column": 37}}
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
        }, "start": 1008, "end": 1009, "loc": {"start": {"line": 43, "column": 37}, "end": {"line": 43, "column": 38}}
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
        }, "start": 1009, "end": 1010, "loc": {"start": {"line": 43, "column": 38}, "end": {"line": 43, "column": 39}}
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
        "start": 1020,
        "end": 1022,
        "loc": {"start": {"line": 45, "column": 8}, "end": {"line": 45, "column": 10}}
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
        }, "start": 1023, "end": 1024, "loc": {"start": {"line": 45, "column": 11}, "end": {"line": 45, "column": 12}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1024,
        "end": 1032,
        "loc": {"start": {"line": 45, "column": 12}, "end": {"line": 45, "column": 20}}
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
        }, "start": 1032, "end": 1033, "loc": {"start": {"line": 45, "column": 20}, "end": {"line": 45, "column": 21}}
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
        }, "start": 1034, "end": 1035, "loc": {"start": {"line": 45, "column": 22}, "end": {"line": 45, "column": 23}}
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
        "start": 1048,
        "end": 1051,
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
        "value": "ifVar1",
        "start": 1052,
        "end": 1058,
        "loc": {"start": {"line": 46, "column": 16}, "end": {"line": 46, "column": 22}}
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
        "start": 1059,
        "end": 1060,
        "loc": {"start": {"line": 46, "column": 23}, "end": {"line": 46, "column": 24}}
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
        "start": 1061,
        "end": 1062,
        "loc": {"start": {"line": 46, "column": 25}, "end": {"line": 46, "column": 26}}
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
        }, "start": 1062, "end": 1063, "loc": {"start": {"line": 46, "column": 26}, "end": {"line": 46, "column": 27}}
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
        "start": 1076,
        "end": 1079,
        "loc": {"start": {"line": 47, "column": 12}, "end": {"line": 47, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1080,
        "end": 1086,
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
        "start": 1087,
        "end": 1088,
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
        "value": "mutiVar2",
        "start": 1089,
        "end": 1097,
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
        }, "start": 1097, "end": 1098, "loc": {"start": {"line": 47, "column": 33}, "end": {"line": 47, "column": 34}}
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
        }, "start": 1107, "end": 1108, "loc": {"start": {"line": 48, "column": 8}, "end": {"line": 48, "column": 9}}
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
        "start": 1118,
        "end": 1121,
        "loc": {"start": {"line": 50, "column": 8}, "end": {"line": 50, "column": 11}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1122,
        "end": 1128,
        "loc": {"start": {"line": 50, "column": 12}, "end": {"line": 50, "column": 18}}
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
        "start": 1129,
        "end": 1130,
        "loc": {"start": {"line": 50, "column": 19}, "end": {"line": 50, "column": 20}}
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
        }, "start": 1131, "end": 1132, "loc": {"start": {"line": 50, "column": 21}, "end": {"line": 50, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1145,
        "end": 1152,
        "loc": {"start": {"line": 51, "column": 12}, "end": {"line": 51, "column": 19}}
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
        }, "start": 1152, "end": 1153, "loc": {"start": {"line": 51, "column": 19}, "end": {"line": 51, "column": 20}}
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
        "start": 1154,
        "end": 1163,
        "loc": {"start": {"line": 51, "column": 21}, "end": {"line": 51, "column": 30}}
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
        }, "start": 1163, "end": 1164, "loc": {"start": {"line": 51, "column": 30}, "end": {"line": 51, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1177,
        "end": 1184,
        "loc": {"start": {"line": 52, "column": 12}, "end": {"line": 52, "column": 19}}
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
        }, "start": 1184, "end": 1185, "loc": {"start": {"line": 52, "column": 19}, "end": {"line": 52, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1186,
        "end": 1195,
        "loc": {"start": {"line": 52, "column": 21}, "end": {"line": 52, "column": 30}}
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
        }, "start": 1195, "end": 1196, "loc": {"start": {"line": 52, "column": 30}, "end": {"line": 52, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1209,
        "end": 1216,
        "loc": {"start": {"line": 53, "column": 12}, "end": {"line": 53, "column": 19}}
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
        }, "start": 1216, "end": 1217, "loc": {"start": {"line": 53, "column": 19}, "end": {"line": 53, "column": 20}}
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
        "start": 1218,
        "end": 1226,
        "loc": {"start": {"line": 53, "column": 21}, "end": {"line": 53, "column": 29}}
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
        }, "start": 1227, "end": 1228, "loc": {"start": {"line": 53, "column": 30}, "end": {"line": 53, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1228,
        "end": 1234,
        "loc": {"start": {"line": 53, "column": 31}, "end": {"line": 53, "column": 37}}
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
        }, "start": 1234, "end": 1235, "loc": {"start": {"line": 53, "column": 37}, "end": {"line": 53, "column": 38}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1236,
        "end": 1242,
        "loc": {"start": {"line": 53, "column": 39}, "end": {"line": 53, "column": 45}}
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
        }, "start": 1242, "end": 1243, "loc": {"start": {"line": 53, "column": 45}, "end": {"line": 53, "column": 46}}
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
        }, "start": 1244, "end": 1245, "loc": {"start": {"line": 53, "column": 47}, "end": {"line": 53, "column": 48}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1262,
        "end": 1268,
        "loc": {"start": {"line": 54, "column": 16}, "end": {"line": 54, "column": 22}}
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
        "loc": {"start": {"line": 54, "column": 23}, "end": {"line": 54, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1271,
        "end": 1279,
        "loc": {"start": {"line": 54, "column": 25}, "end": {"line": 54, "column": 33}}
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
        }, "start": 1279, "end": 1280, "loc": {"start": {"line": 54, "column": 33}, "end": {"line": 54, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1297,
        "end": 1303,
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
        "start": 1304,
        "end": 1305,
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
        "value": "$scope",
        "start": 1306,
        "end": 1312,
        "loc": {"start": {"line": 55, "column": 25}, "end": {"line": 55, "column": 31}}
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
        }, "start": 1312, "end": 1313, "loc": {"start": {"line": 55, "column": 31}, "end": {"line": 55, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1313,
        "end": 1317,
        "loc": {"start": {"line": 55, "column": 32}, "end": {"line": 55, "column": 36}}
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
        }, "start": 1317, "end": 1318, "loc": {"start": {"line": 55, "column": 36}, "end": {"line": 55, "column": 37}}
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
        }, "start": 1331, "end": 1332, "loc": {"start": {"line": 56, "column": 12}, "end": {"line": 56, "column": 13}}
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
        }, "start": 1332, "end": 1333, "loc": {"start": {"line": 56, "column": 13}, "end": {"line": 56, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1346,
        "end": 1353,
        "loc": {"start": {"line": 57, "column": 12}, "end": {"line": 57, "column": 19}}
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
        }, "start": 1353, "end": 1354, "loc": {"start": {"line": 57, "column": 19}, "end": {"line": 57, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1354,
        "end": 1360,
        "loc": {"start": {"line": 57, "column": 20}, "end": {"line": 57, "column": 26}}
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
        }, "start": 1360, "end": 1361, "loc": {"start": {"line": 57, "column": 26}, "end": {"line": 57, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1362,
        "end": 1368,
        "loc": {"start": {"line": 57, "column": 28}, "end": {"line": 57, "column": 34}}
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
        }, "start": 1368, "end": 1369, "loc": {"start": {"line": 57, "column": 34}, "end": {"line": 57, "column": 35}}
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
        }, "start": 1369, "end": 1370, "loc": {"start": {"line": 57, "column": 35}, "end": {"line": 57, "column": 36}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1387,
        "end": 1393,
        "loc": {"start": {"line": 58, "column": 16}, "end": {"line": 58, "column": 22}}
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
        "start": 1394,
        "end": 1395,
        "loc": {"start": {"line": 58, "column": 23}, "end": {"line": 58, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1396,
        "end": 1404,
        "loc": {"start": {"line": 58, "column": 25}, "end": {"line": 58, "column": 33}}
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
        }, "start": 1404, "end": 1405, "loc": {"start": {"line": 58, "column": 33}, "end": {"line": 58, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1422,
        "end": 1428,
        "loc": {"start": {"line": 59, "column": 16}, "end": {"line": 59, "column": 22}}
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
        "start": 1429,
        "end": 1430,
        "loc": {"start": {"line": 59, "column": 23}, "end": {"line": 59, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1431,
        "end": 1437,
        "loc": {"start": {"line": 59, "column": 25}, "end": {"line": 59, "column": 31}}
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
        }, "start": 1437, "end": 1438, "loc": {"start": {"line": 59, "column": 31}, "end": {"line": 59, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1438,
        "end": 1442,
        "loc": {"start": {"line": 59, "column": 32}, "end": {"line": 59, "column": 36}}
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
        }, "start": 1442, "end": 1443, "loc": {"start": {"line": 59, "column": 36}, "end": {"line": 59, "column": 37}}
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
        "start": 1460,
        "end": 1466,
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
        "start": 1467,
        "end": 1475,
        "loc": {"start": {"line": 60, "column": 23}, "end": {"line": 60, "column": 31}}
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
        }, "start": 1475, "end": 1476, "loc": {"start": {"line": 60, "column": 31}, "end": {"line": 60, "column": 32}}
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
        }, "start": 1489, "end": 1490, "loc": {"start": {"line": 61, "column": 12}, "end": {"line": 61, "column": 13}}
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
        }, "start": 1490, "end": 1491, "loc": {"start": {"line": 61, "column": 13}, "end": {"line": 61, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1504,
        "end": 1507,
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
        "start": 1508,
        "end": 1513,
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
        }, "start": 1513, "end": 1514, "loc": {"start": {"line": 62, "column": 21}, "end": {"line": 62, "column": 22}}
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
        }, "start": 1514, "end": 1515, "loc": {"start": {"line": 62, "column": 22}, "end": {"line": 62, "column": 23}}
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
        }, "start": 1516, "end": 1517, "loc": {"start": {"line": 62, "column": 24}, "end": {"line": 62, "column": 25}}
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
        "start": 1534,
        "end": 1540,
        "loc": {"start": {"line": 63, "column": 16}, "end": {"line": 63, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1541,
        "end": 1549,
        "loc": {"start": {"line": 63, "column": 23}, "end": {"line": 63, "column": 31}}
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
        }, "start": 1549, "end": 1550, "loc": {"start": {"line": 63, "column": 31}, "end": {"line": 63, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1550,
        "end": 1558,
        "loc": {"start": {"line": 63, "column": 32}, "end": {"line": 63, "column": 40}}
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
        }, "start": 1558, "end": 1559, "loc": {"start": {"line": 63, "column": 40}, "end": {"line": 63, "column": 41}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1560,
        "end": 1569,
        "loc": {"start": {"line": 63, "column": 42}, "end": {"line": 63, "column": 51}}
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
        }, "start": 1569, "end": 1570, "loc": {"start": {"line": 63, "column": 51}, "end": {"line": 63, "column": 52}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1570,
        "end": 1574,
        "loc": {"start": {"line": 63, "column": 52}, "end": {"line": 63, "column": 56}}
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
        }, "start": 1574, "end": 1575, "loc": {"start": {"line": 63, "column": 56}, "end": {"line": 63, "column": 57}}
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
        }, "start": 1588, "end": 1589, "loc": {"start": {"line": 64, "column": 12}, "end": {"line": 64, "column": 13}}
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
        }, "start": 1589, "end": 1590, "loc": {"start": {"line": 64, "column": 13}, "end": {"line": 64, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1603,
        "end": 1606,
        "loc": {"start": {"line": 65, "column": 12}, "end": {"line": 65, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1607,
        "end": 1612,
        "loc": {"start": {"line": 65, "column": 16}, "end": {"line": 65, "column": 21}}
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
        }, "start": 1612, "end": 1613, "loc": {"start": {"line": 65, "column": 21}, "end": {"line": 65, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1613,
        "end": 1618,
        "loc": {"start": {"line": 65, "column": 22}, "end": {"line": 65, "column": 27}}
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
        }, "start": 1618, "end": 1619, "loc": {"start": {"line": 65, "column": 27}, "end": {"line": 65, "column": 28}}
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
        }, "start": 1620, "end": 1621, "loc": {"start": {"line": 65, "column": 29}, "end": {"line": 65, "column": 30}}
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
        "start": 1638,
        "end": 1642,
        "loc": {"start": {"line": 66, "column": 16}, "end": {"line": 66, "column": 20}}
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
        }, "start": 1642, "end": 1643, "loc": {"start": {"line": 66, "column": 20}, "end": {"line": 66, "column": 21}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1643,
        "end": 1650,
        "loc": {"start": {"line": 66, "column": 21}, "end": {"line": 66, "column": 28}}
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
        "start": 1651,
        "end": 1652,
        "loc": {"start": {"line": 66, "column": 29}, "end": {"line": 66, "column": 30}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1653,
        "end": 1658,
        "loc": {"start": {"line": 66, "column": 31}, "end": {"line": 66, "column": 36}}
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
        }, "start": 1671, "end": 1672, "loc": {"start": {"line": 67, "column": 12}, "end": {"line": 67, "column": 13}}
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
        }, "start": 1681, "end": 1682, "loc": {"start": {"line": 68, "column": 8}, "end": {"line": 68, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "函数直接申明",
        "start": 1692,
        "end": 1700,
        "loc": {"start": {"line": 70, "column": 8}, "end": {"line": 70, "column": 16}}
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
        "start": 1709,
        "end": 1712,
        "loc": {"start": {"line": 71, "column": 8}, "end": {"line": 71, "column": 11}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1713,
        "end": 1722,
        "loc": {"start": {"line": 71, "column": 12}, "end": {"line": 71, "column": 21}}
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
        "start": 1723,
        "end": 1724,
        "loc": {"start": {"line": 71, "column": 22}, "end": {"line": 71, "column": 23}}
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
        "start": 1725,
        "end": 1733,
        "loc": {"start": {"line": 71, "column": 24}, "end": {"line": 71, "column": 32}}
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
        }, "start": 1734, "end": 1735, "loc": {"start": {"line": 71, "column": 33}, "end": {"line": 71, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1735,
        "end": 1741,
        "loc": {"start": {"line": 71, "column": 34}, "end": {"line": 71, "column": 40}}
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
        }, "start": 1741, "end": 1742, "loc": {"start": {"line": 71, "column": 40}, "end": {"line": 71, "column": 41}}
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
        }, "start": 1743, "end": 1744, "loc": {"start": {"line": 71, "column": 42}, "end": {"line": 71, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1757,
        "end": 1764,
        "loc": {"start": {"line": 72, "column": 12}, "end": {"line": 72, "column": 19}}
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
        }, "start": 1764, "end": 1765, "loc": {"start": {"line": 72, "column": 19}, "end": {"line": 72, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1765,
        "end": 1768,
        "loc": {"start": {"line": 72, "column": 20}, "end": {"line": 72, "column": 23}}
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
        }, "start": 1768, "end": 1769, "loc": {"start": {"line": 72, "column": 23}, "end": {"line": 72, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1769,
        "end": 1775,
        "loc": {"start": {"line": 72, "column": 24}, "end": {"line": 72, "column": 30}}
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
        }, "start": 1775, "end": 1776, "loc": {"start": {"line": 72, "column": 30}, "end": {"line": 72, "column": 31}}
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
        }, "start": 1776, "end": 1777, "loc": {"start": {"line": 72, "column": 31}, "end": {"line": 72, "column": 32}}
    }, {
        "type": "CommentLine",
        "value": "对象",
        "start": 1790,
        "end": 1794,
        "loc": {"start": {"line": 73, "column": 12}, "end": {"line": 73, "column": 16}}
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
        "start": 1807,
        "end": 1810,
        "loc": {"start": {"line": 74, "column": 12}, "end": {"line": 74, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1811,
        "end": 1814,
        "loc": {"start": {"line": 74, "column": 16}, "end": {"line": 74, "column": 19}}
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
        "start": 1815,
        "end": 1816,
        "loc": {"start": {"line": 74, "column": 20}, "end": {"line": 74, "column": 21}}
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
        }, "start": 1817, "end": 1818, "loc": {"start": {"line": 74, "column": 22}, "end": {"line": 74, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1835,
        "end": 1842,
        "loc": {"start": {"line": 75, "column": 16}, "end": {"line": 75, "column": 23}}
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
        }, "start": 1842, "end": 1843, "loc": {"start": {"line": 75, "column": 23}, "end": {"line": 75, "column": 24}}
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
        "start": 1844,
        "end": 1853,
        "loc": {"start": {"line": 75, "column": 25}, "end": {"line": 75, "column": 34}}
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
        }, "start": 1853, "end": 1854, "loc": {"start": {"line": 75, "column": 34}, "end": {"line": 75, "column": 35}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1871,
        "end": 1878,
        "loc": {"start": {"line": 76, "column": 16}, "end": {"line": 76, "column": 23}}
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
        }, "start": 1878, "end": 1879, "loc": {"start": {"line": 76, "column": 23}, "end": {"line": 76, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1879,
        "end": 1885,
        "loc": {"start": {"line": 76, "column": 24}, "end": {"line": 76, "column": 30}}
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
        }, "start": 1885, "end": 1886, "loc": {"start": {"line": 76, "column": 30}, "end": {"line": 76, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1887,
        "end": 1893,
        "loc": {"start": {"line": 76, "column": 32}, "end": {"line": 76, "column": 38}}
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
        }, "start": 1893, "end": 1894, "loc": {"start": {"line": 76, "column": 38}, "end": {"line": 76, "column": 39}}
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
        }, "start": 1894, "end": 1895, "loc": {"start": {"line": 76, "column": 39}, "end": {"line": 76, "column": 40}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1916,
        "end": 1923,
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
        }, "start": 1923, "end": 1924, "loc": {"start": {"line": 77, "column": 27}, "end": {"line": 77, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1924,
        "end": 1927,
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
        }, "start": 1927, "end": 1928, "loc": {"start": {"line": 77, "column": 31}, "end": {"line": 77, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1928,
        "end": 1934,
        "loc": {"start": {"line": 77, "column": 32}, "end": {"line": 77, "column": 38}}
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
        }, "start": 1934, "end": 1935, "loc": {"start": {"line": 77, "column": 38}, "end": {"line": 77, "column": 39}}
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
        }, "start": 1952, "end": 1953, "loc": {"start": {"line": 78, "column": 16}, "end": {"line": 78, "column": 17}}
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
        }, "start": 1953, "end": 1954, "loc": {"start": {"line": 78, "column": 17}, "end": {"line": 78, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1971,
        "end": 1978,
        "loc": {"start": {"line": 79, "column": 16}, "end": {"line": 79, "column": 23}}
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
        }, "start": 1978, "end": 1979, "loc": {"start": {"line": 79, "column": 23}, "end": {"line": 79, "column": 24}}
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
        "loc": {"start": {"line": 79, "column": 25}, "end": {"line": 79, "column": 33}}
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
        }, "start": 1989, "end": 1990, "loc": {"start": {"line": 79, "column": 34}, "end": {"line": 79, "column": 35}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1990,
        "end": 1996,
        "loc": {"start": {"line": 79, "column": 35}, "end": {"line": 79, "column": 41}}
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
        }, "start": 1996, "end": 1997, "loc": {"start": {"line": 79, "column": 41}, "end": {"line": 79, "column": 42}}
    }, {
        "type": {
            "label": "name",
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
        "start": 1998,
        "end": 2004,
        "loc": {"start": {"line": 79, "column": 43}, "end": {"line": 79, "column": 49}}
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
        }, "start": 2004, "end": 2005, "loc": {"start": {"line": 79, "column": 49}, "end": {"line": 79, "column": 50}}
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
        }, "start": 2006, "end": 2007, "loc": {"start": {"line": 79, "column": 51}, "end": {"line": 79, "column": 52}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2028,
        "end": 2035,
        "loc": {"start": {"line": 80, "column": 20}, "end": {"line": 80, "column": 27}}
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
        }, "start": 2035, "end": 2036, "loc": {"start": {"line": 80, "column": 27}, "end": {"line": 80, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2036,
        "end": 2039,
        "loc": {"start": {"line": 80, "column": 28}, "end": {"line": 80, "column": 31}}
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
        }, "start": 2039, "end": 2040, "loc": {"start": {"line": 80, "column": 31}, "end": {"line": 80, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2040,
        "end": 2046,
        "loc": {"start": {"line": 80, "column": 32}, "end": {"line": 80, "column": 38}}
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
        }, "start": 2046, "end": 2047, "loc": {"start": {"line": 80, "column": 38}, "end": {"line": 80, "column": 39}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2048,
        "end": 2054,
        "loc": {"start": {"line": 80, "column": 40}, "end": {"line": 80, "column": 46}}
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
        }, "start": 2054, "end": 2055, "loc": {"start": {"line": 80, "column": 46}, "end": {"line": 80, "column": 47}}
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
        }, "start": 2055, "end": 2056, "loc": {"start": {"line": 80, "column": 47}, "end": {"line": 80, "column": 48}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2077,
        "end": 2085,
        "loc": {"start": {"line": 81, "column": 20}, "end": {"line": 81, "column": 28}}
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
        "start": 2086,
        "end": 2087,
        "loc": {"start": {"line": 81, "column": 29}, "end": {"line": 81, "column": 30}}
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
        "start": 2088,
        "end": 2090,
        "loc": {"start": {"line": 81, "column": 31}, "end": {"line": 81, "column": 33}}
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
        }, "start": 2090, "end": 2091, "loc": {"start": {"line": 81, "column": 33}, "end": {"line": 81, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2112,
        "end": 2118,
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
        }, "start": 2118, "end": 2119, "loc": {"start": {"line": 82, "column": 26}, "end": {"line": 82, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2119,
        "end": 2123,
        "loc": {"start": {"line": 82, "column": 27}, "end": {"line": 82, "column": 31}}
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
        }, "start": 2123, "end": 2124, "loc": {"start": {"line": 82, "column": 31}, "end": {"line": 82, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2124,
        "end": 2132,
        "loc": {"start": {"line": 82, "column": 32}, "end": {"line": 82, "column": 40}}
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
        "start": 2133,
        "end": 2134,
        "loc": {"start": {"line": 82, "column": 41}, "end": {"line": 82, "column": 42}}
    }, {
        "type": {
            "label": "name",
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
        "loc": {"start": {"line": 82, "column": 43}, "end": {"line": 82, "column": 51}}
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
        }, "start": 2143, "end": 2144, "loc": {"start": {"line": 82, "column": 51}, "end": {"line": 82, "column": 52}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2165,
        "end": 2171,
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
        }, "start": 2171, "end": 2172, "loc": {"start": {"line": 83, "column": 26}, "end": {"line": 83, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2172,
        "end": 2176,
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
        }, "start": 2176, "end": 2177, "loc": {"start": {"line": 83, "column": 31}, "end": {"line": 83, "column": 32}}
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
        "start": 2177,
        "end": 2187,
        "loc": {"start": {"line": 83, "column": 32}, "end": {"line": 83, "column": 42}}
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
        }, "start": 2187, "end": 2188, "loc": {"start": {"line": 83, "column": 42}, "end": {"line": 83, "column": 43}}
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
        "start": 2189,
        "end": 2190,
        "loc": {"start": {"line": 83, "column": 44}, "end": {"line": 83, "column": 45}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2191,
        "end": 2201,
        "loc": {"start": {"line": 83, "column": 46}, "end": {"line": 83, "column": 56}}
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
        }, "start": 2201, "end": 2202, "loc": {"start": {"line": 83, "column": 56}, "end": {"line": 83, "column": 57}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2223,
        "end": 2229,
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
        }, "start": 2229, "end": 2230, "loc": {"start": {"line": 84, "column": 26}, "end": {"line": 84, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2230,
        "end": 2234,
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
        }, "start": 2234, "end": 2235, "loc": {"start": {"line": 84, "column": 31}, "end": {"line": 84, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2235,
        "end": 2243,
        "loc": {"start": {"line": 84, "column": 32}, "end": {"line": 84, "column": 40}}
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
        }, "start": 2243, "end": 2244, "loc": {"start": {"line": 84, "column": 40}, "end": {"line": 84, "column": 41}}
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
        "start": 2245,
        "end": 2246,
        "loc": {"start": {"line": 84, "column": 42}, "end": {"line": 84, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2247,
        "end": 2255,
        "loc": {"start": {"line": 84, "column": 44}, "end": {"line": 84, "column": 52}}
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
        }, "start": 2255, "end": 2256, "loc": {"start": {"line": 84, "column": 52}, "end": {"line": 84, "column": 53}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2277,
        "end": 2283,
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
        }, "start": 2283, "end": 2284, "loc": {"start": {"line": 85, "column": 26}, "end": {"line": 85, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2284,
        "end": 2288,
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
        }, "start": 2288, "end": 2289, "loc": {"start": {"line": 85, "column": 31}, "end": {"line": 85, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2289,
        "end": 2298,
        "loc": {"start": {"line": 85, "column": 32}, "end": {"line": 85, "column": 41}}
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
        }, "start": 2298, "end": 2299, "loc": {"start": {"line": 85, "column": 41}, "end": {"line": 85, "column": 42}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2299,
        "end": 2302,
        "loc": {"start": {"line": 85, "column": 42}, "end": {"line": 85, "column": 45}}
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
        }, "start": 2302, "end": 2303, "loc": {"start": {"line": 85, "column": 45}, "end": {"line": 85, "column": 46}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2303,
        "end": 2306,
        "loc": {"start": {"line": 85, "column": 46}, "end": {"line": 85, "column": 49}}
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
        }, "start": 2306, "end": 2307, "loc": {"start": {"line": 85, "column": 49}, "end": {"line": 85, "column": 50}}
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
        }, "start": 2307, "end": 2308, "loc": {"start": {"line": 85, "column": 50}, "end": {"line": 85, "column": 51}}
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
        "start": 2309,
        "end": 2310,
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
        "start": 2311,
        "end": 2319,
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
        }, "start": 2319, "end": 2320, "loc": {"start": {"line": 85, "column": 62}, "end": {"line": 85, "column": 63}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2341,
        "end": 2347,
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
        }, "start": 2347, "end": 2348, "loc": {"start": {"line": 86, "column": 26}, "end": {"line": 86, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2348,
        "end": 2352,
        "loc": {"start": {"line": 86, "column": 27}, "end": {"line": 86, "column": 31}}
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
        }, "start": 2352, "end": 2353, "loc": {"start": {"line": 86, "column": 31}, "end": {"line": 86, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2353,
        "end": 2362,
        "loc": {"start": {"line": 86, "column": 32}, "end": {"line": 86, "column": 41}}
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
        }, "start": 2362, "end": 2363, "loc": {"start": {"line": 86, "column": 41}, "end": {"line": 86, "column": 42}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2363,
        "end": 2366,
        "loc": {"start": {"line": 86, "column": 42}, "end": {"line": 86, "column": 45}}
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
        }, "start": 2366, "end": 2367, "loc": {"start": {"line": 86, "column": 45}, "end": {"line": 86, "column": 46}}
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
        }, "start": 2367, "end": 2368, "loc": {"start": {"line": 86, "column": 46}, "end": {"line": 86, "column": 47}}
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
        "start": 2369,
        "end": 2370,
        "loc": {"start": {"line": 86, "column": 48}, "end": {"line": 86, "column": 49}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2371,
        "end": 2379,
        "loc": {"start": {"line": 86, "column": 50}, "end": {"line": 86, "column": 58}}
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
        }, "start": 2379, "end": 2380, "loc": {"start": {"line": 86, "column": 58}, "end": {"line": 86, "column": 59}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2401,
        "end": 2407,
        "loc": {"start": {"line": 87, "column": 20}, "end": {"line": 87, "column": 26}}
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
        }, "start": 2407, "end": 2408, "loc": {"start": {"line": 87, "column": 26}, "end": {"line": 87, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2408,
        "end": 2412,
        "loc": {"start": {"line": 87, "column": 27}, "end": {"line": 87, "column": 31}}
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
        }, "start": 2412, "end": 2413, "loc": {"start": {"line": 87, "column": 31}, "end": {"line": 87, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2413,
        "end": 2421,
        "loc": {"start": {"line": 87, "column": 32}, "end": {"line": 87, "column": 40}}
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
        }, "start": 2421, "end": 2422, "loc": {"start": {"line": 87, "column": 40}, "end": {"line": 87, "column": 41}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2422,
        "end": 2435,
        "loc": {"start": {"line": 87, "column": 41}, "end": {"line": 87, "column": 54}}
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
        }, "start": 2435, "end": 2436, "loc": {"start": {"line": 87, "column": 54}, "end": {"line": 87, "column": 55}}
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
        "start": 2437,
        "end": 2438,
        "loc": {"start": {"line": 87, "column": 56}, "end": {"line": 87, "column": 57}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2439,
        "end": 2447,
        "loc": {"start": {"line": 87, "column": 58}, "end": {"line": 87, "column": 66}}
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
        }, "start": 2447, "end": 2448, "loc": {"start": {"line": 87, "column": 66}, "end": {"line": 87, "column": 67}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2469,
        "end": 2475,
        "loc": {"start": {"line": 88, "column": 20}, "end": {"line": 88, "column": 26}}
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
        }, "start": 2475, "end": 2476, "loc": {"start": {"line": 88, "column": 26}, "end": {"line": 88, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2476,
        "end": 2480,
        "loc": {"start": {"line": 88, "column": 27}, "end": {"line": 88, "column": 31}}
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
        }, "start": 2480, "end": 2481, "loc": {"start": {"line": 88, "column": 31}, "end": {"line": 88, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2481,
        "end": 2487,
        "loc": {"start": {"line": 88, "column": 32}, "end": {"line": 88, "column": 38}}
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
        }, "start": 2487, "end": 2488, "loc": {"start": {"line": 88, "column": 38}, "end": {"line": 88, "column": 39}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2488,
        "end": 2499,
        "loc": {"start": {"line": 88, "column": 39}, "end": {"line": 88, "column": 50}}
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
        }, "start": 2499, "end": 2500, "loc": {"start": {"line": 88, "column": 50}, "end": {"line": 88, "column": 51}}
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
        "start": 2501,
        "end": 2502,
        "loc": {"start": {"line": 88, "column": 52}, "end": {"line": 88, "column": 53}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2503,
        "end": 2511,
        "loc": {"start": {"line": 88, "column": 54}, "end": {"line": 88, "column": 62}}
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
        }, "start": 2511, "end": 2512, "loc": {"start": {"line": 88, "column": 62}, "end": {"line": 88, "column": 63}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2533,
        "end": 2539,
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
        }, "start": 2539, "end": 2540, "loc": {"start": {"line": 89, "column": 26}, "end": {"line": 89, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2540,
        "end": 2544,
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
        }, "start": 2544, "end": 2545, "loc": {"start": {"line": 89, "column": 31}, "end": {"line": 89, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2545,
        "end": 2553,
        "loc": {"start": {"line": 89, "column": 32}, "end": {"line": 89, "column": 40}}
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
        "start": 2554,
        "end": 2555,
        "loc": {"start": {"line": 89, "column": 41}, "end": {"line": 89, "column": 42}}
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
        "start": 2556,
        "end": 2566,
        "loc": {"start": {"line": 89, "column": 43}, "end": {"line": 89, "column": 53}}
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
        }, "start": 2566, "end": 2567, "loc": {"start": {"line": 89, "column": 53}, "end": {"line": 89, "column": 54}}
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
        "start": 2588,
        "end": 2591,
        "loc": {"start": {"line": 90, "column": 20}, "end": {"line": 90, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2592,
        "end": 2604,
        "loc": {"start": {"line": 90, "column": 24}, "end": {"line": 90, "column": 36}}
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
        "start": 2605,
        "end": 2606,
        "loc": {"start": {"line": 90, "column": 37}, "end": {"line": 90, "column": 38}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2607,
        "end": 2614,
        "loc": {"start": {"line": 90, "column": 39}, "end": {"line": 90, "column": 46}}
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
        }, "start": 2614, "end": 2615, "loc": {"start": {"line": 90, "column": 46}, "end": {"line": 90, "column": 47}}
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
        "start": 2636,
        "end": 2639,
        "loc": {"start": {"line": 91, "column": 20}, "end": {"line": 91, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2640,
        "end": 2653,
        "loc": {"start": {"line": 91, "column": 24}, "end": {"line": 91, "column": 37}}
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
        "start": 2654,
        "end": 2655,
        "loc": {"start": {"line": 91, "column": 38}, "end": {"line": 91, "column": 39}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2656,
        "end": 2662,
        "loc": {"start": {"line": 91, "column": 40}, "end": {"line": 91, "column": 46}}
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
        }, "start": 2662, "end": 2663, "loc": {"start": {"line": 91, "column": 46}, "end": {"line": 91, "column": 47}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2663,
        "end": 2670,
        "loc": {"start": {"line": 91, "column": 47}, "end": {"line": 91, "column": 54}}
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
        }, "start": 2670, "end": 2671, "loc": {"start": {"line": 91, "column": 54}, "end": {"line": 91, "column": 55}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2692,
        "end": 2698,
        "loc": {"start": {"line": 92, "column": 20}, "end": {"line": 92, "column": 26}}
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
        }, "start": 2698, "end": 2699, "loc": {"start": {"line": 92, "column": 26}, "end": {"line": 92, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2699,
        "end": 2703,
        "loc": {"start": {"line": 92, "column": 27}, "end": {"line": 92, "column": 31}}
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
        }, "start": 2703, "end": 2704, "loc": {"start": {"line": 92, "column": 31}, "end": {"line": 92, "column": 32}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2704,
        "end": 2706,
        "loc": {"start": {"line": 92, "column": 32}, "end": {"line": 92, "column": 34}}
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
        }, "start": 2706, "end": 2707, "loc": {"start": {"line": 92, "column": 34}, "end": {"line": 92, "column": 35}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2707,
        "end": 2716,
        "loc": {"start": {"line": 92, "column": 35}, "end": {"line": 92, "column": 44}}
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
        }, "start": 2716, "end": 2717, "loc": {"start": {"line": 92, "column": 44}, "end": {"line": 92, "column": 45}}
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
        }, "start": 2717, "end": 2718, "loc": {"start": {"line": 92, "column": 45}, "end": {"line": 92, "column": 46}}
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
        }, "start": 2718, "end": 2719, "loc": {"start": {"line": 92, "column": 46}, "end": {"line": 92, "column": 47}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2740,
        "end": 2746,
        "loc": {"start": {"line": 93, "column": 20}, "end": {"line": 93, "column": 26}}
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
        }, "start": 2746, "end": 2747, "loc": {"start": {"line": 93, "column": 26}, "end": {"line": 93, "column": 27}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2747,
        "end": 2755,
        "loc": {"start": {"line": 93, "column": 27}, "end": {"line": 93, "column": 35}}
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
        }, "start": 2755, "end": 2756, "loc": {"start": {"line": 93, "column": 35}, "end": {"line": 93, "column": 36}}
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
        }, "start": 2756, "end": 2757, "loc": {"start": {"line": 93, "column": 36}, "end": {"line": 93, "column": 37}}
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
        }, "start": 2757, "end": 2758, "loc": {"start": {"line": 93, "column": 37}, "end": {"line": 93, "column": 38}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2779,
        "end": 2785,
        "loc": {"start": {"line": 94, "column": 20}, "end": {"line": 94, "column": 26}}
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
        }, "start": 2785, "end": 2786, "loc": {"start": {"line": 94, "column": 26}, "end": {"line": 94, "column": 27}}
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
        }, "start": 2786, "end": 2787, "loc": {"start": {"line": 94, "column": 27}, "end": {"line": 94, "column": 28}}
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
        }, "start": 2787, "end": 2788, "loc": {"start": {"line": 94, "column": 28}, "end": {"line": 94, "column": 29}}
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
        }, "start": 2805, "end": 2806, "loc": {"start": {"line": 95, "column": 16}, "end": {"line": 95, "column": 17}}
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
        }, "start": 2806, "end": 2807, "loc": {"start": {"line": 95, "column": 17}, "end": {"line": 95, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2824,
        "end": 2831,
        "loc": {"start": {"line": 96, "column": 16}, "end": {"line": 96, "column": 23}}
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
        }, "start": 2831, "end": 2832, "loc": {"start": {"line": 96, "column": 23}, "end": {"line": 96, "column": 24}}
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
        }, "start": 2833, "end": 2834, "loc": {"start": {"line": 96, "column": 25}, "end": {"line": 96, "column": 26}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2834,
        "end": 2836,
        "loc": {"start": {"line": 96, "column": 26}, "end": {"line": 96, "column": 28}}
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
        }, "start": 2836, "end": 2837, "loc": {"start": {"line": 96, "column": 28}, "end": {"line": 96, "column": 29}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2838,
        "end": 2840,
        "loc": {"start": {"line": 96, "column": 30}, "end": {"line": 96, "column": 32}}
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
        }, "start": 2840, "end": 2841, "loc": {"start": {"line": 96, "column": 32}, "end": {"line": 96, "column": 33}}
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
        }, "start": 2842, "end": 2844, "loc": {"start": {"line": 96, "column": 34}, "end": {"line": 96, "column": 36}}
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
        }, "start": 2845, "end": 2846, "loc": {"start": {"line": 96, "column": 37}, "end": {"line": 96, "column": 38}}
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
        }, "start": 2864, "end": 2865, "loc": {"start": {"line": 98, "column": 16}, "end": {"line": 98, "column": 17}}
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
        }, "start": 2865, "end": 2866, "loc": {"start": {"line": 98, "column": 17}, "end": {"line": 98, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2883,
        "end": 2886,
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
        "start": 2887,
        "end": 2892,
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
        }, "start": 2892, "end": 2893, "loc": {"start": {"line": 99, "column": 25}, "end": {"line": 99, "column": 26}}
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
        }, "start": 2893, "end": 2894, "loc": {"start": {"line": 99, "column": 26}, "end": {"line": 99, "column": 27}}
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
        }, "start": 2895, "end": 2896, "loc": {"start": {"line": 99, "column": 28}, "end": {"line": 99, "column": 29}}
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
        }, "start": 2914, "end": 2915, "loc": {"start": {"line": 101, "column": 16}, "end": {"line": 101, "column": 17}}
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
        }, "start": 2915, "end": 2916, "loc": {"start": {"line": 101, "column": 17}, "end": {"line": 101, "column": 18}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2933,
        "end": 2936,
        "loc": {"start": {"line": 102, "column": 16}, "end": {"line": 102, "column": 19}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2937,
        "end": 2942,
        "loc": {"start": {"line": 102, "column": 20}, "end": {"line": 102, "column": 25}}
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
        }, "start": 2942, "end": 2943, "loc": {"start": {"line": 102, "column": 25}, "end": {"line": 102, "column": 26}}
    }, {
        "type": {
            "label": "name",
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
        "start": 2943,
        "end": 2948,
        "loc": {"start": {"line": 102, "column": 26}, "end": {"line": 102, "column": 31}}
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
        }, "start": 2948, "end": 2949, "loc": {"start": {"line": 102, "column": 31}, "end": {"line": 102, "column": 32}}
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
        }, "start": 2950, "end": 2951, "loc": {"start": {"line": 102, "column": 33}, "end": {"line": 102, "column": 34}}
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
        }, "start": 2969, "end": 2970, "loc": {"start": {"line": 104, "column": 16}, "end": {"line": 104, "column": 17}}
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
        }, "start": 2983, "end": 2984, "loc": {"start": {"line": 105, "column": 12}, "end": {"line": 105, "column": 13}}
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
        }, "start": 2994, "end": 2995, "loc": {"start": {"line": 107, "column": 8}, "end": {"line": 107, "column": 9}}
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
        "start": 3005,
        "end": 3008,
        "loc": {"start": {"line": 109, "column": 8}, "end": {"line": 109, "column": 11}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3009,
        "end": 3011,
        "loc": {"start": {"line": 109, "column": 12}, "end": {"line": 109, "column": 14}}
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
        "start": 3012,
        "end": 3013,
        "loc": {"start": {"line": 109, "column": 15}, "end": {"line": 109, "column": 16}}
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
        }, "start": 3015, "end": 3016, "loc": {"start": {"line": 109, "column": 18}, "end": {"line": 109, "column": 19}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3016,
        "end": 3017,
        "loc": {"start": {"line": 109, "column": 19}, "end": {"line": 109, "column": 20}}
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
        }, "start": 3017, "end": 3018, "loc": {"start": {"line": 109, "column": 20}, "end": {"line": 109, "column": 21}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3018,
        "end": 3019,
        "loc": {"start": {"line": 109, "column": 21}, "end": {"line": 109, "column": 22}}
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
        }, "start": 3019, "end": 3020, "loc": {"start": {"line": 109, "column": 22}, "end": {"line": 109, "column": 23}}
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
        }, "start": 3020, "end": 3022, "loc": {"start": {"line": 109, "column": 23}, "end": {"line": 109, "column": 25}}
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
        }, "start": 3023, "end": 3024, "loc": {"start": {"line": 109, "column": 26}, "end": {"line": 109, "column": 27}}
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
        }, "start": 3034, "end": 3035, "loc": {"start": {"line": 111, "column": 8}, "end": {"line": 111, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "scope函数初始化",
        "start": 3054,
        "end": 3066,
        "loc": {"start": {"line": 114, "column": 8}, "end": {"line": 114, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3075,
        "end": 3081,
        "loc": {"start": {"line": 115, "column": 8}, "end": {"line": 115, "column": 14}}
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
        }, "start": 3081, "end": 3082, "loc": {"start": {"line": 115, "column": 14}, "end": {"line": 115, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3082,
        "end": 3090,
        "loc": {"start": {"line": 115, "column": 15}, "end": {"line": 115, "column": 23}}
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
        "start": 3091,
        "end": 3092,
        "loc": {"start": {"line": 115, "column": 24}, "end": {"line": 115, "column": 25}}
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
        "start": 3093,
        "end": 3101,
        "loc": {"start": {"line": 115, "column": 26}, "end": {"line": 115, "column": 34}}
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
        }, "start": 3102, "end": 3103, "loc": {"start": {"line": 115, "column": 35}, "end": {"line": 115, "column": 36}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3103,
        "end": 3109,
        "loc": {"start": {"line": 115, "column": 36}, "end": {"line": 115, "column": 42}}
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
        }, "start": 3109, "end": 3110, "loc": {"start": {"line": 115, "column": 42}, "end": {"line": 115, "column": 43}}
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
        }, "start": 3111, "end": 3112, "loc": {"start": {"line": 115, "column": 44}, "end": {"line": 115, "column": 45}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3125,
        "end": 3132,
        "loc": {"start": {"line": 116, "column": 12}, "end": {"line": 116, "column": 19}}
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
        }, "start": 3132, "end": 3133, "loc": {"start": {"line": 116, "column": 19}, "end": {"line": 116, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3133,
        "end": 3136,
        "loc": {"start": {"line": 116, "column": 20}, "end": {"line": 116, "column": 23}}
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
        }, "start": 3136, "end": 3137, "loc": {"start": {"line": 116, "column": 23}, "end": {"line": 116, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3137,
        "end": 3143,
        "loc": {"start": {"line": 116, "column": 24}, "end": {"line": 116, "column": 30}}
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
        }, "start": 3143, "end": 3144, "loc": {"start": {"line": 116, "column": 30}, "end": {"line": 116, "column": 31}}
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
        }, "start": 3153, "end": 3154, "loc": {"start": {"line": 117, "column": 8}, "end": {"line": 117, "column": 9}}
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
        }, "start": 3154, "end": 3155, "loc": {"start": {"line": 117, "column": 9}, "end": {"line": 117, "column": 10}}
    }, {
        "type": "CommentLine",
        "value": "scope多级初始化函数",
        "start": 3165,
        "end": 3179,
        "loc": {"start": {"line": 119, "column": 8}, "end": {"line": 119, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3188,
        "end": 3194,
        "loc": {"start": {"line": 120, "column": 8}, "end": {"line": 120, "column": 14}}
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
        }, "start": 3194, "end": 3195, "loc": {"start": {"line": 120, "column": 14}, "end": {"line": 120, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3195,
        "end": 3199,
        "loc": {"start": {"line": 120, "column": 15}, "end": {"line": 120, "column": 19}}
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
        }, "start": 3199, "end": 3200, "loc": {"start": {"line": 120, "column": 19}, "end": {"line": 120, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3200,
        "end": 3202,
        "loc": {"start": {"line": 120, "column": 20}, "end": {"line": 120, "column": 22}}
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
        }, "start": 3202, "end": 3203, "loc": {"start": {"line": 120, "column": 22}, "end": {"line": 120, "column": 23}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3203,
        "end": 3212,
        "loc": {"start": {"line": 120, "column": 23}, "end": {"line": 120, "column": 32}}
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
        "loc": {"start": {"line": 120, "column": 33}, "end": {"line": 120, "column": 34}}
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
        "loc": {"start": {"line": 120, "column": 35}, "end": {"line": 120, "column": 43}}
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
        }, "start": 3224, "end": 3225, "loc": {"start": {"line": 120, "column": 44}, "end": {"line": 120, "column": 45}}
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
        }, "start": 3225, "end": 3226, "loc": {"start": {"line": 120, "column": 45}, "end": {"line": 120, "column": 46}}
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
        }, "start": 3227, "end": 3228, "loc": {"start": {"line": 120, "column": 47}, "end": {"line": 120, "column": 48}}
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
        "start": 3242,
        "end": 3245,
        "loc": {"start": {"line": 122, "column": 12}, "end": {"line": 122, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3246,
        "end": 3253,
        "loc": {"start": {"line": 122, "column": 16}, "end": {"line": 122, "column": 23}}
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
        "start": 3254,
        "end": 3255,
        "loc": {"start": {"line": 122, "column": 24}, "end": {"line": 122, "column": 25}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3256,
        "end": 3264,
        "loc": {"start": {"line": 122, "column": 26}, "end": {"line": 122, "column": 34}}
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
        }, "start": 3264, "end": 3265, "loc": {"start": {"line": 122, "column": 34}, "end": {"line": 122, "column": 35}}
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
        "start": 3278,
        "end": 3281,
        "loc": {"start": {"line": 123, "column": 12}, "end": {"line": 123, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3282,
        "end": 3289,
        "loc": {"start": {"line": 123, "column": 16}, "end": {"line": 123, "column": 23}}
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
        "start": 3290,
        "end": 3291,
        "loc": {"start": {"line": 123, "column": 24}, "end": {"line": 123, "column": 25}}
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
        "start": 3292,
        "end": 3300,
        "loc": {"start": {"line": 123, "column": 26}, "end": {"line": 123, "column": 34}}
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
        }, "start": 3301, "end": 3302, "loc": {"start": {"line": 123, "column": 35}, "end": {"line": 123, "column": 36}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3302,
        "end": 3308,
        "loc": {"start": {"line": 123, "column": 36}, "end": {"line": 123, "column": 42}}
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
        }, "start": 3308, "end": 3309, "loc": {"start": {"line": 123, "column": 42}, "end": {"line": 123, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3310,
        "end": 3316,
        "loc": {"start": {"line": 123, "column": 44}, "end": {"line": 123, "column": 50}}
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
        }, "start": 3316, "end": 3317, "loc": {"start": {"line": 123, "column": 50}, "end": {"line": 123, "column": 51}}
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
        }, "start": 3318, "end": 3319, "loc": {"start": {"line": 123, "column": 52}, "end": {"line": 123, "column": 53}}
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
        }, "start": 3333, "end": 3334, "loc": {"start": {"line": 125, "column": 12}, "end": {"line": 125, "column": 13}}
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
        }, "start": 3334, "end": 3335, "loc": {"start": {"line": 125, "column": 13}, "end": {"line": 125, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3348,
        "end": 3355,
        "loc": {"start": {"line": 126, "column": 12}, "end": {"line": 126, "column": 19}}
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
        }, "start": 3355, "end": 3356, "loc": {"start": {"line": 126, "column": 19}, "end": {"line": 126, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3356,
        "end": 3363,
        "loc": {"start": {"line": 126, "column": 20}, "end": {"line": 126, "column": 27}}
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
        }, "start": 3363, "end": 3364, "loc": {"start": {"line": 126, "column": 27}, "end": {"line": 126, "column": 28}}
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
        }, "start": 3364, "end": 3365, "loc": {"start": {"line": 126, "column": 28}, "end": {"line": 126, "column": 29}}
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
        }, "start": 3365, "end": 3366, "loc": {"start": {"line": 126, "column": 29}, "end": {"line": 126, "column": 30}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3366,
        "end": 3371,
        "loc": {"start": {"line": 126, "column": 30}, "end": {"line": 126, "column": 35}}
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
        }, "start": 3371, "end": 3372, "loc": {"start": {"line": 126, "column": 35}, "end": {"line": 126, "column": 36}}
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
        }, "start": 3372, "end": 3373, "loc": {"start": {"line": 126, "column": 36}, "end": {"line": 126, "column": 37}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3386,
        "end": 3393,
        "loc": {"start": {"line": 127, "column": 12}, "end": {"line": 127, "column": 19}}
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
        }, "start": 3393, "end": 3394, "loc": {"start": {"line": 127, "column": 19}, "end": {"line": 127, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3394,
        "end": 3402,
        "loc": {"start": {"line": 127, "column": 20}, "end": {"line": 127, "column": 28}}
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
        }, "start": 3402, "end": 3403, "loc": {"start": {"line": 127, "column": 28}, "end": {"line": 127, "column": 29}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3403,
        "end": 3416,
        "loc": {"start": {"line": 127, "column": 29}, "end": {"line": 127, "column": 42}}
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
        }, "start": 3416, "end": 3417, "loc": {"start": {"line": 127, "column": 42}, "end": {"line": 127, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3418,
        "end": 3424,
        "loc": {"start": {"line": 127, "column": 44}, "end": {"line": 127, "column": 50}}
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
        }, "start": 3424, "end": 3425, "loc": {"start": {"line": 127, "column": 50}, "end": {"line": 127, "column": 51}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3425,
        "end": 3429,
        "loc": {"start": {"line": 127, "column": 51}, "end": {"line": 127, "column": 55}}
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
        }, "start": 3429, "end": 3430, "loc": {"start": {"line": 127, "column": 55}, "end": {"line": 127, "column": 56}}
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
        }, "start": 3430, "end": 3431, "loc": {"start": {"line": 127, "column": 56}, "end": {"line": 127, "column": 57}}
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
        "start": 3444,
        "end": 3452,
        "loc": {"start": {"line": 128, "column": 12}, "end": {"line": 128, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3453,
        "end": 3461,
        "loc": {"start": {"line": 128, "column": 21}, "end": {"line": 128, "column": 29}}
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
        }, "start": 3461, "end": 3462, "loc": {"start": {"line": 128, "column": 29}, "end": {"line": 128, "column": 30}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3462,
        "end": 3468,
        "loc": {"start": {"line": 128, "column": 30}, "end": {"line": 128, "column": 36}}
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
        }, "start": 3468, "end": 3469, "loc": {"start": {"line": 128, "column": 36}, "end": {"line": 128, "column": 37}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3470,
        "end": 3476,
        "loc": {"start": {"line": 128, "column": 38}, "end": {"line": 128, "column": 44}}
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
        }, "start": 3476, "end": 3477, "loc": {"start": {"line": 128, "column": 44}, "end": {"line": 128, "column": 45}}
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
        }, "start": 3478, "end": 3479, "loc": {"start": {"line": 128, "column": 46}, "end": {"line": 128, "column": 47}}
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
        }, "start": 3493, "end": 3494, "loc": {"start": {"line": 130, "column": 12}, "end": {"line": 130, "column": 13}}
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
        "start": 3508,
        "end": 3511,
        "loc": {"start": {"line": 132, "column": 12}, "end": {"line": 132, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3512,
        "end": 3523,
        "loc": {"start": {"line": 132, "column": 16}, "end": {"line": 132, "column": 27}}
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
        "start": 3524,
        "end": 3525,
        "loc": {"start": {"line": 132, "column": 28}, "end": {"line": 132, "column": 29}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3526,
        "end": 3534,
        "loc": {"start": {"line": 132, "column": 30}, "end": {"line": 132, "column": 38}}
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
        }, "start": 3534, "end": 3535, "loc": {"start": {"line": 132, "column": 38}, "end": {"line": 132, "column": 39}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3535,
        "end": 3548,
        "loc": {"start": {"line": 132, "column": 39}, "end": {"line": 132, "column": 52}}
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
        }, "start": 3548, "end": 3549, "loc": {"start": {"line": 132, "column": 52}, "end": {"line": 132, "column": 53}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3562,
        "end": 3568,
        "loc": {"start": {"line": 133, "column": 12}, "end": {"line": 133, "column": 18}}
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
        }, "start": 3568, "end": 3569, "loc": {"start": {"line": 133, "column": 18}, "end": {"line": 133, "column": 19}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3569,
        "end": 3580,
        "loc": {"start": {"line": 133, "column": 19}, "end": {"line": 133, "column": 30}}
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
        "start": 3581,
        "end": 3582,
        "loc": {"start": {"line": 133, "column": 31}, "end": {"line": 133, "column": 32}}
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
        "start": 3583,
        "end": 3587,
        "loc": {"start": {"line": 133, "column": 33}, "end": {"line": 133, "column": 37}}
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
        }, "start": 3587, "end": 3588, "loc": {"start": {"line": 133, "column": 37}, "end": {"line": 133, "column": 38}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3601,
        "end": 3607,
        "loc": {"start": {"line": 134, "column": 12}, "end": {"line": 134, "column": 18}}
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
        }, "start": 3607, "end": 3608, "loc": {"start": {"line": 134, "column": 18}, "end": {"line": 134, "column": 19}}
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
        }, "start": 3608, "end": 3609, "loc": {"start": {"line": 134, "column": 19}, "end": {"line": 134, "column": 20}}
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
        }, "start": 3609, "end": 3610, "loc": {"start": {"line": 134, "column": 20}, "end": {"line": 134, "column": 21}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3623,
        "end": 3632,
        "loc": {"start": {"line": 135, "column": 12}, "end": {"line": 135, "column": 21}}
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
        }, "start": 3632, "end": 3633, "loc": {"start": {"line": 135, "column": 21}, "end": {"line": 135, "column": 22}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3633,
        "end": 3645,
        "loc": {"start": {"line": 135, "column": 22}, "end": {"line": 135, "column": 34}}
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
        "start": 3646,
        "end": 3647,
        "loc": {"start": {"line": 135, "column": 35}, "end": {"line": 135, "column": 36}}
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
        "start": 3648,
        "end": 3651,
        "loc": {"start": {"line": 135, "column": 37}, "end": {"line": 135, "column": 40}}
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
        }, "start": 3651, "end": 3652, "loc": {"start": {"line": 135, "column": 40}, "end": {"line": 135, "column": 41}}
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
        }, "start": 3662, "end": 3663, "loc": {"start": {"line": 137, "column": 8}, "end": {"line": 137, "column": 9}}
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
        }, "start": 3663, "end": 3664, "loc": {"start": {"line": 137, "column": 9}, "end": {"line": 137, "column": 10}}
    }, {
        "type": "CommentBlock",
        "value": "*\n         * 表达式\n         ",
        "start": 3674,
        "end": 3704,
        "loc": {"start": {"line": 139, "column": 8}, "end": {"line": 141, "column": 11}}
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
        "start": 3713,
        "end": 3721,
        "loc": {"start": {"line": 142, "column": 8}, "end": {"line": 142, "column": 16}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3722,
        "end": 3728,
        "loc": {"start": {"line": 142, "column": 17}, "end": {"line": 142, "column": 23}}
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
        }, "start": 3728, "end": 3729, "loc": {"start": {"line": 142, "column": 23}, "end": {"line": 142, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3729,
        "end": 3735,
        "loc": {"start": {"line": 142, "column": 24}, "end": {"line": 142, "column": 30}}
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
        }, "start": 3735, "end": 3736, "loc": {"start": {"line": 142, "column": 30}, "end": {"line": 142, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3737,
        "end": 3743,
        "loc": {"start": {"line": 142, "column": 32}, "end": {"line": 142, "column": 38}}
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
        }, "start": 3743, "end": 3744, "loc": {"start": {"line": 142, "column": 38}, "end": {"line": 142, "column": 39}}
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
        }, "start": 3745, "end": 3746, "loc": {"start": {"line": 142, "column": 40}, "end": {"line": 142, "column": 41}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3759,
        "end": 3766,
        "loc": {"start": {"line": 143, "column": 12}, "end": {"line": 143, "column": 19}}
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
        }, "start": 3766, "end": 3767, "loc": {"start": {"line": 143, "column": 19}, "end": {"line": 143, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3767,
        "end": 3770,
        "loc": {"start": {"line": 143, "column": 20}, "end": {"line": 143, "column": 23}}
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
        }, "start": 3770, "end": 3771, "loc": {"start": {"line": 143, "column": 23}, "end": {"line": 143, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3771,
        "end": 3777,
        "loc": {"start": {"line": 143, "column": 24}, "end": {"line": 143, "column": 30}}
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
        }, "start": 3777, "end": 3778, "loc": {"start": {"line": 143, "column": 30}, "end": {"line": 143, "column": 31}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3779,
        "end": 3785,
        "loc": {"start": {"line": 143, "column": 32}, "end": {"line": 143, "column": 38}}
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
        }, "start": 3785, "end": 3786, "loc": {"start": {"line": 143, "column": 38}, "end": {"line": 143, "column": 39}}
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
        }, "start": 3795, "end": 3796, "loc": {"start": {"line": 144, "column": 8}, "end": {"line": 144, "column": 9}}
    }, {
        "type": "CommentLine",
        "value": "直接调用",
        "start": 3806,
        "end": 3812,
        "loc": {"start": {"line": 146, "column": 8}, "end": {"line": 146, "column": 14}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3821,
        "end": 3828,
        "loc": {"start": {"line": 147, "column": 8}, "end": {"line": 147, "column": 15}}
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
        }, "start": 3828, "end": 3829, "loc": {"start": {"line": 147, "column": 15}, "end": {"line": 147, "column": 16}}
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
        }, "start": 3829, "end": 3830, "loc": {"start": {"line": 147, "column": 16}, "end": {"line": 147, "column": 17}}
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
        }, "start": 3830, "end": 3831, "loc": {"start": {"line": 147, "column": 17}, "end": {"line": 147, "column": 18}}
    }, {
        "type": "CommentLine",
        "value": "调用",
        "start": 3840,
        "end": 3844,
        "loc": {"start": {"line": 148, "column": 8}, "end": {"line": 148, "column": 12}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3853,
        "end": 3859,
        "loc": {"start": {"line": 149, "column": 8}, "end": {"line": 149, "column": 14}}
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
        }, "start": 3859, "end": 3860, "loc": {"start": {"line": 149, "column": 14}, "end": {"line": 149, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3860,
        "end": 3868,
        "loc": {"start": {"line": 149, "column": 15}, "end": {"line": 149, "column": 23}}
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
        }, "start": 3868, "end": 3869, "loc": {"start": {"line": 149, "column": 23}, "end": {"line": 149, "column": 24}}
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
        "start": 3869,
        "end": 3877,
        "loc": {"start": {"line": 149, "column": 24}, "end": {"line": 149, "column": 32}}
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
        }, "start": 3878, "end": 3879, "loc": {"start": {"line": 149, "column": 33}, "end": {"line": 149, "column": 34}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3879,
        "end": 3885,
        "loc": {"start": {"line": 149, "column": 34}, "end": {"line": 149, "column": 40}}
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
        }, "start": 3885, "end": 3886, "loc": {"start": {"line": 149, "column": 40}, "end": {"line": 149, "column": 41}}
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
        }, "start": 3887, "end": 3888, "loc": {"start": {"line": 149, "column": 42}, "end": {"line": 149, "column": 43}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3901,
        "end": 3908,
        "loc": {"start": {"line": 150, "column": 12}, "end": {"line": 150, "column": 19}}
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
        }, "start": 3908, "end": 3909, "loc": {"start": {"line": 150, "column": 19}, "end": {"line": 150, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3909,
        "end": 3912,
        "loc": {"start": {"line": 150, "column": 20}, "end": {"line": 150, "column": 23}}
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
        }, "start": 3912, "end": 3913, "loc": {"start": {"line": 150, "column": 23}, "end": {"line": 150, "column": 24}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3913,
        "end": 3919,
        "loc": {"start": {"line": 150, "column": 24}, "end": {"line": 150, "column": 30}}
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
        }, "start": 3919, "end": 3920, "loc": {"start": {"line": 150, "column": 30}, "end": {"line": 150, "column": 31}}
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
        }, "start": 3929, "end": 3930, "loc": {"start": {"line": 151, "column": 8}, "end": {"line": 151, "column": 9}}
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
        }, "start": 3930, "end": 3931, "loc": {"start": {"line": 151, "column": 9}, "end": {"line": 151, "column": 10}}
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
        }, "start": 3931, "end": 3932, "loc": {"start": {"line": 151, "column": 10}, "end": {"line": 151, "column": 11}}
    }, {
        "type": "CommentLine",
        "value": " this.scopeFun2();",
        "start": 3941,
        "end": 3961,
        "loc": {"start": {"line": 152, "column": 8}, "end": {"line": 152, "column": 28}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3970,
        "end": 3976,
        "loc": {"start": {"line": 153, "column": 8}, "end": {"line": 153, "column": 14}}
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
        }, "start": 3976, "end": 3977, "loc": {"start": {"line": 153, "column": 14}, "end": {"line": 153, "column": 15}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3977,
        "end": 3981,
        "loc": {"start": {"line": 153, "column": 15}, "end": {"line": 153, "column": 19}}
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
        }, "start": 3981, "end": 3982, "loc": {"start": {"line": 153, "column": 19}, "end": {"line": 153, "column": 20}}
    }, {
        "type": {
            "label": "name",
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
        "start": 3982,
        "end": 3991,
        "loc": {"start": {"line": 153, "column": 20}, "end": {"line": 153, "column": 29}}
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
        }, "start": 3991, "end": 3992, "loc": {"start": {"line": 153, "column": 29}, "end": {"line": 153, "column": 30}}
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
        }, "start": 3992, "end": 3993, "loc": {"start": {"line": 153, "column": 30}, "end": {"line": 153, "column": 31}}
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
        }, "start": 3993, "end": 3994, "loc": {"start": {"line": 153, "column": 31}, "end": {"line": 153, "column": 32}}
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
        }, "start": 4001, "end": 4002, "loc": {"start": {"line": 156, "column": 4}, "end": {"line": 156, "column": 5}}
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
        }, "start": 4002, "end": 4003, "loc": {"start": {"line": 156, "column": 5}, "end": {"line": 156, "column": 6}}
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
        }, "start": 4003, "end": 4004, "loc": {"start": {"line": 156, "column": 6}, "end": {"line": 156, "column": 7}}
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
        }, "start": 4004, "end": 4005, "loc": {"start": {"line": 156, "column": 7}, "end": {"line": 156, "column": 8}}
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
        }, "start": 4007, "end": 4007, "loc": {"start": {"line": 158, "column": 0}, "end": {"line": 158, "column": 0}}
    }]
}