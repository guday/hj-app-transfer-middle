var a = {
    "type": "File",
    "start": 0,
    "end": 313,
    "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 19, "column": 25}},
    "program": {
        "type": "Program",
        "start": 0,
        "end": 313,
        "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 19, "column": 25}},
        "sourceType": "module",
        "body": [{
            "type": "ImportDeclaration",
            "start": 17,
            "end": 57,
            "loc": {"start": {"line": 5, "column": 0}, "end": {"line": 5, "column": 40}},
            "specifiers": [{
                "type": "ImportSpecifier",
                "start": 25,
                "end": 33,
                "loc": {"start": {"line": 5, "column": 8}, "end": {"line": 5, "column": 16}},
                "imported": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 33,
                    "loc": {
                        "start": {"line": 5, "column": 8},
                        "end": {"line": 5, "column": 16},
                        "identifierName": "services"
                    },
                    "name": "services",
                    "leadingComments": null
                },
                "local": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 33,
                    "loc": {
                        "start": {"line": 5, "column": 8},
                        "end": {"line": 5, "column": 16},
                        "identifierName": "services"
                    },
                    "name": "services"
                },
                "leadingComments": null
            }],
            "source": {
                "type": "StringLiteral",
                "start": 40,
                "end": 57,
                "loc": {"start": {"line": 5, "column": 23}, "end": {"line": 5, "column": 40}},
                "extra": {"rawValue": "../servicesFold", "raw": "'../servicesFold'"},
                "value": "../servicesFold"
            },
            "leadingComments": [{
                "type": "CommentBlock",
                "value": "*\n * 1、\n *\n ",
                "start": 0,
                "end": 16,
                "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 4, "column": 3}}
            }]
        }, {
            "type": "ClassDeclaration",
            "start": 59,
            "end": 286,
            "loc": {"start": {"line": 7, "column": 0}, "end": {"line": 17, "column": 1}},
            "id": {
                "type": "Identifier",
                "start": 65,
                "end": 80,
                "loc": {
                    "start": {"line": 7, "column": 6},
                    "end": {"line": 7, "column": 21},
                    "identifierName": "LoginController"
                },
                "name": "LoginController"
            },
            "superClass": {
                "type": "Identifier",
                "start": 89,
                "end": 103,
                "loc": {
                    "start": {"line": 7, "column": 30},
                    "end": {"line": 7, "column": 44},
                    "identifierName": "BaseController"
                },
                "name": "BaseController"
            },
            "body": {
                "type": "ClassBody",
                "start": 104,
                "end": 286,
                "loc": {"start": {"line": 7, "column": 45}, "end": {"line": 17, "column": 1}},
                "body": [{
                    "type": "ClassMethod",
                    "start": 110,
                    "end": 205,
                    "loc": {"start": {"line": 8, "column": 4}, "end": {"line": 10, "column": 5}},
                    "computed": false,
                    "key": {
                        "type": "Identifier",
                        "start": 110,
                        "end": 121,
                        "loc": {
                            "start": {"line": 8, "column": 4},
                            "end": {"line": 8, "column": 15},
                            "identifierName": "constructor"
                        },
                        "name": "constructor"
                    },
                    "static": false,
                    "kind": "constructor",
                    "id": null,
                    "generator": false,
                    "expression": false,
                    "async": false,
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "start": 124,
                        "end": 205,
                        "loc": {"start": {"line": 8, "column": 18}, "end": {"line": 10, "column": 5}},
                        "body": [{
                            "type": "ExpressionStatement",
                            "start": 134,
                            "end": 199,
                            "loc": {"start": {"line": 9, "column": 8}, "end": {"line": 9, "column": 73}},
                            "expression": {
                                "type": "CallExpression",
                                "start": 134,
                                "end": 198,
                                "loc": {"start": {"line": 9, "column": 8}, "end": {"line": 9, "column": 72}},
                                "callee": {
                                    "type": "MemberExpression",
                                    "start": 134,
                                    "end": 149,
                                    "loc": {"start": {"line": 9, "column": 8}, "end": {"line": 9, "column": 23}},
                                    "object": {
                                        "type": "Identifier",
                                        "start": 134,
                                        "end": 142,
                                        "loc": {
                                            "start": {"line": 9, "column": 8},
                                            "end": {"line": 9, "column": 16},
                                            "identifierName": "services"
                                        },
                                        "name": "services"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "start": 143,
                                        "end": 149,
                                        "loc": {
                                            "start": {"line": 9, "column": 17},
                                            "end": {"line": 9, "column": 23},
                                            "identifierName": "inject"
                                        },
                                        "name": "inject"
                                    },
                                    "computed": false
                                },
                                "arguments": [{
                                    "type": "StringLiteral",
                                    "start": 150,
                                    "end": 164,
                                    "loc": {"start": {"line": 9, "column": 24}, "end": {"line": 9, "column": 38}},
                                    "extra": {"rawValue": "LoginService", "raw": "\"LoginService\""},
                                    "value": "LoginService"
                                }, {
                                    "type": "StringLiteral",
                                    "start": 166,
                                    "end": 184,
                                    "loc": {"start": {"line": 9, "column": 40}, "end": {"line": 9, "column": 58}},
                                    "extra": {"rawValue": "EssentialServise", "raw": "\"EssentialServise\""},
                                    "value": "EssentialServise"
                                }, {
                                    "type": "StringLiteral",
                                    "start": 186,
                                    "end": 197,
                                    "loc": {"start": {"line": 9, "column": 60}, "end": {"line": 9, "column": 71}},
                                    "extra": {"rawValue": "$location", "raw": "\"$location\""},
                                    "value": "$location"
                                }]
                            }
                        }],
                        "directives": []
                    }
                }, {
                    "type": "ClassMethod",
                    "start": 211,
                    "end": 283,
                    "loc": {"start": {"line": 12, "column": 4}, "end": {"line": 15, "column": 5}},
                    "computed": false,
                    "key": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 215,
                        "loc": {
                            "start": {"line": 12, "column": 4},
                            "end": {"line": 12, "column": 8},
                            "identifierName": "init"
                        },
                        "name": "init"
                    },
                    "static": false,
                    "kind": "method",
                    "id": null,
                    "generator": false,
                    "expression": false,
                    "async": false,
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "start": 218,
                        "end": 283,
                        "loc": {"start": {"line": 12, "column": 11}, "end": {"line": 15, "column": 5}},
                        "body": [{
                            "type": "ExpressionStatement",
                            "start": 249,
                            "end": 277,
                            "loc": {"start": {"line": 14, "column": 8}, "end": {"line": 14, "column": 36}},
                            "expression": {
                                "type": "CallExpression",
                                "start": 249,
                                "end": 276,
                                "loc": {"start": {"line": 14, "column": 8}, "end": {"line": 14, "column": 35}},
                                "callee": {
                                    "type": "MemberExpression",
                                    "start": 249,
                                    "end": 274,
                                    "loc": {"start": {"line": 14, "column": 8}, "end": {"line": 14, "column": 33}},
                                    "object": {
                                        "type": "MemberExpression",
                                        "start": 249,
                                        "end": 266,
                                        "loc": {"start": {"line": 14, "column": 8}, "end": {"line": 14, "column": 25}},
                                        "object": {
                                            "type": "ThisExpression",
                                            "start": 249,
                                            "end": 253,
                                            "loc": {
                                                "start": {"line": 14, "column": 8},
                                                "end": {"line": 14, "column": 12}
                                            },
                                            "leadingComments": null
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "start": 254,
                                            "end": 266,
                                            "loc": {
                                                "start": {"line": 14, "column": 13},
                                                "end": {"line": 14, "column": 25},
                                                "identifierName": "LoginService"
                                            },
                                            "name": "LoginService"
                                        },
                                        "computed": false,
                                        "leadingComments": null
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "start": 267,
                                        "end": 274,
                                        "loc": {
                                            "start": {"line": 14, "column": 26},
                                            "end": {"line": 14, "column": 33},
                                            "identifierName": "doLogin"
                                        },
                                        "name": "doLogin"
                                    },
                                    "computed": false,
                                    "leadingComments": null
                                },
                                "arguments": [],
                                "leadingComments": null
                            },
                            "leadingComments": [{
                                "type": "CommentLine",
                                "value": "使用了，但是没有注入",
                                "start": 228,
                                "end": 240,
                                "loc": {"start": {"line": 13, "column": 8}, "end": {"line": 13, "column": 20}}
                            }]
                        }],
                        "directives": []
                    }
                }]
            }
        }, {
            "type": "ExportNamedDeclaration",
            "start": 288,
            "end": 313,
            "loc": {"start": {"line": 19, "column": 0}, "end": {"line": 19, "column": 25}},
            "declaration": null,
            "specifiers": [{
                "type": "ExportSpecifier",
                "start": 296,
                "end": 311,
                "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 23}},
                "local": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 311,
                    "loc": {
                        "start": {"line": 19, "column": 8},
                        "end": {"line": 19, "column": 23},
                        "identifierName": "LoginController"
                    },
                    "name": "LoginController"
                },
                "exported": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 311,
                    "loc": {
                        "start": {"line": 19, "column": 8},
                        "end": {"line": 19, "column": 23},
                        "identifierName": "LoginController"
                    },
                    "name": "LoginController"
                }
            }],
            "source": null
        }],
        "directives": []
    },
    "comments": [{
        "type": "CommentBlock",
        "value": "*\n * 1、\n *\n ",
        "start": 0,
        "end": 16,
        "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 4, "column": 3}}
    }, {
        "type": "CommentLine",
        "value": "使用了，但是没有注入",
        "start": 228,
        "end": 240,
        "loc": {"start": {"line": 13, "column": 8}, "end": {"line": 13, "column": 20}}
    }],
    "tokens": [{
        "type": "CommentBlock",
        "value": "*\n * 1、\n *\n ",
        "start": 0,
        "end": 16,
        "loc": {"start": {"line": 1, "column": 0}, "end": {"line": 4, "column": 3}}
    }, {
        "type": {
            "label": "import",
            "keyword": "import",
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
        "value": "import",
        "start": 17,
        "end": 23,
        "loc": {"start": {"line": 5, "column": 0}, "end": {"line": 5, "column": 6}}
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
        }, "start": 24, "end": 25, "loc": {"start": {"line": 5, "column": 7}, "end": {"line": 5, "column": 8}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "services",
        "start": 25,
        "end": 33,
        "loc": {"start": {"line": 5, "column": 8}, "end": {"line": 5, "column": 16}}
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
        }, "start": 33, "end": 34, "loc": {"start": {"line": 5, "column": 16}, "end": {"line": 5, "column": 17}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "from",
        "start": 35,
        "end": 39,
        "loc": {"start": {"line": 5, "column": 18}, "end": {"line": 5, "column": 22}}
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
        "value": "../servicesFold",
        "start": 40,
        "end": 57,
        "loc": {"start": {"line": 5, "column": 23}, "end": {"line": 5, "column": 40}}
    }, {
        "type": {
            "label": "class",
            "keyword": "class",
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
        "value": "class",
        "start": 59,
        "end": 64,
        "loc": {"start": {"line": 7, "column": 0}, "end": {"line": 7, "column": 5}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "LoginController",
        "start": 65,
        "end": 80,
        "loc": {"start": {"line": 7, "column": 6}, "end": {"line": 7, "column": 21}}
    }, {
        "type": {
            "label": "extends",
            "keyword": "extends",
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
        "value": "extends",
        "start": 81,
        "end": 88,
        "loc": {"start": {"line": 7, "column": 22}, "end": {"line": 7, "column": 29}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "BaseController",
        "start": 89,
        "end": 103,
        "loc": {"start": {"line": 7, "column": 30}, "end": {"line": 7, "column": 44}}
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
        }, "start": 104, "end": 105, "loc": {"start": {"line": 7, "column": 45}, "end": {"line": 7, "column": 46}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "constructor",
        "start": 110,
        "end": 121,
        "loc": {"start": {"line": 8, "column": 4}, "end": {"line": 8, "column": 15}}
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
        }, "start": 121, "end": 122, "loc": {"start": {"line": 8, "column": 15}, "end": {"line": 8, "column": 16}}
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
        }, "start": 122, "end": 123, "loc": {"start": {"line": 8, "column": 16}, "end": {"line": 8, "column": 17}}
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
        }, "start": 124, "end": 125, "loc": {"start": {"line": 8, "column": 18}, "end": {"line": 8, "column": 19}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "services",
        "start": 134,
        "end": 142,
        "loc": {"start": {"line": 9, "column": 8}, "end": {"line": 9, "column": 16}}
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
        }, "start": 142, "end": 143, "loc": {"start": {"line": 9, "column": 16}, "end": {"line": 9, "column": 17}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "inject",
        "start": 143,
        "end": 149,
        "loc": {"start": {"line": 9, "column": 17}, "end": {"line": 9, "column": 23}}
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
        }, "start": 149, "end": 150, "loc": {"start": {"line": 9, "column": 23}, "end": {"line": 9, "column": 24}}
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
        "value": "LoginService",
        "start": 150,
        "end": 164,
        "loc": {"start": {"line": 9, "column": 24}, "end": {"line": 9, "column": 38}}
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
        }, "start": 164, "end": 165, "loc": {"start": {"line": 9, "column": 38}, "end": {"line": 9, "column": 39}}
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
        "value": "EssentialServise",
        "start": 166,
        "end": 184,
        "loc": {"start": {"line": 9, "column": 40}, "end": {"line": 9, "column": 58}}
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
        }, "start": 184, "end": 185, "loc": {"start": {"line": 9, "column": 58}, "end": {"line": 9, "column": 59}}
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
        "value": "$location",
        "start": 186,
        "end": 197,
        "loc": {"start": {"line": 9, "column": 60}, "end": {"line": 9, "column": 71}}
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
        }, "start": 197, "end": 198, "loc": {"start": {"line": 9, "column": 71}, "end": {"line": 9, "column": 72}}
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
        }, "start": 198, "end": 199, "loc": {"start": {"line": 9, "column": 72}, "end": {"line": 9, "column": 73}}
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
        }, "start": 204, "end": 205, "loc": {"start": {"line": 10, "column": 4}, "end": {"line": 10, "column": 5}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "init",
        "start": 211,
        "end": 215,
        "loc": {"start": {"line": 12, "column": 4}, "end": {"line": 12, "column": 8}}
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
        }, "start": 215, "end": 216, "loc": {"start": {"line": 12, "column": 8}, "end": {"line": 12, "column": 9}}
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
        }, "start": 216, "end": 217, "loc": {"start": {"line": 12, "column": 9}, "end": {"line": 12, "column": 10}}
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
        }, "start": 218, "end": 219, "loc": {"start": {"line": 12, "column": 11}, "end": {"line": 12, "column": 12}}
    }, {
        "type": "CommentLine",
        "value": "使用了，但是没有注入",
        "start": 228,
        "end": 240,
        "loc": {"start": {"line": 13, "column": 8}, "end": {"line": 13, "column": 20}}
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
        "start": 249,
        "end": 253,
        "loc": {"start": {"line": 14, "column": 8}, "end": {"line": 14, "column": 12}}
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
        }, "start": 253, "end": 254, "loc": {"start": {"line": 14, "column": 12}, "end": {"line": 14, "column": 13}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "LoginService",
        "start": 254,
        "end": 266,
        "loc": {"start": {"line": 14, "column": 13}, "end": {"line": 14, "column": 25}}
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
        }, "start": 266, "end": 267, "loc": {"start": {"line": 14, "column": 25}, "end": {"line": 14, "column": 26}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "doLogin",
        "start": 267,
        "end": 274,
        "loc": {"start": {"line": 14, "column": 26}, "end": {"line": 14, "column": 33}}
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
        }, "start": 274, "end": 275, "loc": {"start": {"line": 14, "column": 33}, "end": {"line": 14, "column": 34}}
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
        }, "start": 275, "end": 276, "loc": {"start": {"line": 14, "column": 34}, "end": {"line": 14, "column": 35}}
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
        }, "start": 276, "end": 277, "loc": {"start": {"line": 14, "column": 35}, "end": {"line": 14, "column": 36}}
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
        }, "start": 282, "end": 283, "loc": {"start": {"line": 15, "column": 4}, "end": {"line": 15, "column": 5}}
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
        }, "start": 285, "end": 286, "loc": {"start": {"line": 17, "column": 0}, "end": {"line": 17, "column": 1}}
    }, {
        "type": {
            "label": "export",
            "keyword": "export",
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
        "value": "export",
        "start": 288,
        "end": 294,
        "loc": {"start": {"line": 19, "column": 0}, "end": {"line": 19, "column": 6}}
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
        }, "start": 295, "end": 296, "loc": {"start": {"line": 19, "column": 7}, "end": {"line": 19, "column": 8}}
    }, {
        "type": {
            "label": "name",
            "beforeExpr": false,
            "startsExpr": true,
            "rightAssociative": false,
            "isLoop": false,
            "isAssign": false,
            "prefix": false,
            "postfix": false,
            "binop": null
        },
        "value": "LoginController",
        "start": 296,
        "end": 311,
        "loc": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 23}}
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
        }, "start": 311, "end": 312, "loc": {"start": {"line": 19, "column": 23}, "end": {"line": 19, "column": 24}}
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
        }, "start": 312, "end": 313, "loc": {"start": {"line": 19, "column": 24}, "end": {"line": 19, "column": 25}}
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
        }, "start": 313, "end": 313, "loc": {"start": {"line": 19, "column": 25}, "end": {"line": 19, "column": 25}}
    }]
}