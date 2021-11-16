define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/auth/by-email/:email/exists",
    "title": "이메일 사용 여부",
    "name": "CheckUserWhohasEmail",
    "group": "사용자",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "exists",
            "description": "<p>결과 사용중이면 true 아니면 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공 - 사용가능:",
          "content": "HTTP/1.1 200 OK\n{\n\texists: false\n}",
          "type": "json"
        },
        {
          "title": "성공 - 사용중:",
          "content": "HTTP/1.1 200 OK\n{\n\texists: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "get",
    "url": "/api/v1/auth/by-username/:username/exists",
    "title": "이름 사용 여부",
    "name": "CheckUserWhohasUsername",
    "group": "사용자",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>이름</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "exists",
            "description": "<p>결과 사용중이면 true 아니면 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공 - 사용가능:",
          "content": "HTTP/1.1 200 OK\n{\n\texists: false\n}",
          "type": "json"
        },
        {
          "title": "성공 - 사용중:",
          "content": "HTTP/1.1 200 OK\n{\n\texists: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "get",
    "url": "/api/v1/auth/profile",
    "title": "사용자 이미지 가져오기",
    "name": "GetProfileImage",
    "group": "사용자",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "reqType",
        "description": "<p>요청타입 email 또는 username 또는 self</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "resType",
        "description": "<p>반환타입 url 또는 buffer</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "username",
        "description": "<p>(옵션) 다른 사용자의 이름</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "email",
        "description": "<p>(옵션) 다른 사용자의 이메일</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "img",
            "description": "<p>이미지버퍼</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공 - 반환타입 buffer:",
          "content": "\tHTTP/1.1 200 OK\n\t{\n\t\timg : {\n\t\t\t\t\ttype : \"Buffer\",\n\t\t\t\t\tdata : Buffer(ex: [123,0,1,0,0,...])\n\t\t\t}\n\t\t\t\n \t\t}\n\t}",
          "type": "json"
        },
        {
          "title": "성공 - 반환타입 url:",
          "content": "HTTP/1.1 200 OK\n{\n\timg : \"uuid\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "get",
    "url": "/api/v1/auth/by-email/:email",
    "title": "이메일로 사용자 정보 가져오기",
    "name": "GetUserByEmail",
    "group": "사용자",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이름</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intro",
            "description": "<p>소개글</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>점수</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "exerciseHistory",
            "description": "<p>운동기록</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "\tHTTP/1.1 200 OK\n\t{\n \temail: \"test@test.com\",\n  \tusername: \"testUsername\",\n\t\tintro: \"this is my just 소개글.\",\n\t\tscore: 100,\n\t\texerciseHistory: [\n\t\t\t{\n\t\t\t\tcalorie:10\n\t\t\t\tkm:0.045,\n\t\t\t\ttime: 4312,\n\t\t\t\tdate:\"2021-09-13\"\n\t\t\t},\n\t\t\t...\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "get",
    "url": "/api/v1/auth/by-username/:username",
    "title": "이름으로 사용자 정보 가져오기",
    "name": "GetUserByUsername",
    "group": "사용자",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>이름</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intro",
            "description": "<p>소개글</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>점수</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "exerciseHistory",
            "description": "<p>운동기록</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "\tHTTP/1.1 200 OK\n\t{\n \temail: \"test@test.com\",\n    \tusername: \"testUsername\",\n\t\tintro: \"this is my just 소개글.\",\n\t\tscore: 100,\n\t\texerciseHistory: [\n\t\t\t{\n\t\t\t\tcalorie:10\n\t\t\t\tkm:0.045,\n\t\t\t\ttime: 4312,\n\t\t\t\tdate:\"2021-09-13\"\n\t\t\t},\n\t\t\t...\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "patch",
    "url": "/api/v1/auth/intro",
    "title": "자기소개 수정",
    "name": "PatchUserIntro",
    "group": "사용자",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "intro",
        "description": "<p>자기소개</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tresult: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/defaultProfile",
    "title": "프로필 이미지를 기본 이미지로 설정",
    "name": "SETProfileImageAsDefault",
    "group": "사용자",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tresult: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/profile",
    "title": "프로필 이미지 업로드",
    "name": "UploadProfileImage",
    "description": "<p>헤더 사용 필수 Content-Type :  multipart/form-data</p>",
    "group": "사용자",
    "version": "1.0.0",
    "body": [
      {
        "group": "Body",
        "type": "File",
        "optional": false,
        "field": "image",
        "description": "<p>이미지 파일</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tresult: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "사용자"
  },
  {
    "type": "get",
    "url": "/api/v1/goal/compare",
    "title": "운동 목표 달성 여부 가져오기",
    "name": "GetGoalRatio",
    "group": "운동/목표",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "calorie",
            "description": "<p>소모한 칼로리 비율</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "km",
            "description": "<p>달린 거리 비율</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>운동한 시간 비율</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tcalorie: 0.32313\n\tkm: 1.311,\n\ttime: 0.91111\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/goal/goal.controller.js",
    "groupTitle": "운동/목표"
  },
  {
    "type": "get",
    "url": "/api/v1/goal",
    "title": "운동 목표 가져오기",
    "name": "GetMyGoal",
    "group": "운동/목표",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "calorie",
            "description": "<p>목표 칼로리</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "km",
            "description": "<p>목표 거리</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>목표 시간</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tcalorie: 3241,\n\tkm: 5.311,\n\ttime: 1231,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/goal/goal.controller.js",
    "groupTitle": "운동/목표"
  },
  {
    "type": "patch",
    "url": "/api/v1/goal",
    "title": "운동 목표 업데이트",
    "name": "PatchMyGoal",
    "group": "운동/목표",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "calorie",
        "description": "<p>사용자의 목표 칼로리</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "km",
        "description": "<p>사용자의 목표 거리</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "time",
        "description": "<p>사용자의 목표 시간(초)</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "calorie",
            "description": "<p>업데이트 된 사용자의 목표 칼로리</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "km",
            "description": "<p>업데이트 된 사용자의 목표 거리</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>업데이트 된 사용자의 목표 시간(초)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tcalorie: 3241,\n\tkm: 5.311,\n\ttime: 1231,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/goal/goal.controller.js",
    "groupTitle": "운동/목표"
  },
  {
    "type": "get",
    "url": "/api/v1/exercise/img",
    "title": "운동 이미지 가져오기",
    "name": "GetExerciseImages",
    "group": "운동",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "date",
        "description": "<p>가져올 날짜 YYYY-MM-DD 또는 빈값(전체)</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "resType",
        "description": "<p>반환타입 url 또는 buffer</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "exerciseImages",
            "description": "<p>이미지 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공 - 반환타입 buffer:",
          "content": "HTTP/1.1 200 OK\n{\n\texerciseImages : [\n\t\t{\n\t\t\tdate: \"2021-09-16\",\n\t\t\ttime: \"22:01:13\",\n\t\t\timg: {\n\t\t\t\ttype : \"Buffer\",\n\t\t\t\tdata : Buffer(ex: [123,0,1,0,0,...])\n\t\t\t}\n\t\t},\n\t\t...\n\t]\n}",
          "type": "json"
        },
        {
          "title": "성공 - 반환타입 url:",
          "content": "HTTP/1.1 200 OK\n{\n\texerciseImages : [\n\t\t{\n\t\t\tdate : \"2021-09-16\",\n\t\t\ttime : \"22:01:13\",\n\t\t\t_id : \"uuid\" \n\t\t},\n\t\t...\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/exercise/exercise.controller.js",
    "groupTitle": "운동"
  },
  {
    "type": "get",
    "url": "/api/v1/exercise/list",
    "title": "최대 1주일 까지의 운동 기록 가져오기",
    "name": "GetExerciseList",
    "group": "운동",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "exerciseHistory",
            "description": "<p>운동기록 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\texerciseHistory: [\n\t\t{\n\t\t\tcalorie:10\n\t\t\tkm:0.045,\n\t\t\ttime: 4312,\n\t\t\tdate:\"2021-09-13\"\t\n\t\t},\n\t\t{\n\t\t\tcalorie:10\n\t\t\tkm:0.045,\n\t\t\ttime: 4312,\n\t\t\tdate:\"2021-09-12\"\t\n\t\t},\n\t\t...\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/exercise/exercise.controller.js",
    "groupTitle": "운동"
  },
  {
    "type": "get",
    "url": "/api/v1/exercise/score/global",
    "title": "점수 데이터 랭킹 가져오기",
    "name": "GetGlobalScore",
    "group": "운동",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "users",
            "description": "<p>사용자 정보 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "scores",
            "description": "<p>사용자 점수 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tusers: [\n\t\t{\"email\": \"someone@example.com\", \"username\": \"someone1\"},\n\t\t{\"email\": \"someone2@example.com\", \"username\": \"someone2\"}\n\t],\n\tscores: [200,100]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/exercise/exercise.controller.js",
    "groupTitle": "운동"
  },
  {
    "type": "get",
    "url": "/api/v1/exercise/score",
    "title": "운동 점수 가져오기",
    "name": "GetScore",
    "group": "운동",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "reqType",
        "description": "<p>요청타입 email 또는 username</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "email",
        "description": "<p>(옵션) 이메일 요청타입이 email인 경우</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "username",
        "description": "<p>(옵션) 이름 요청타입이 username인 경우</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>사용자의 가장 높은 점수</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tscore: 150\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/exercise/exercise.controller.js",
    "groupTitle": "운동"
  },
  {
    "type": "get",
    "url": "/api/v1/exercise",
    "title": "오늘의 운동 데이터 가져오기",
    "name": "GetTodayExercise",
    "group": "운동",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>오늘 날짜</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "calorie",
            "description": "<p>사용자의 소모한 칼로리</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "km",
            "description": "<p>사용자의 달린 거리</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>사용자의 달린 시간(초)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tcalorie:10\n\tkm:0.045,\n\ttime: 4312,\n\tdate:\"2021-09-13\"\t\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/exercise/exercise.controller.js",
    "groupTitle": "운동"
  },
  {
    "type": "patch",
    "url": "/api/v1/exercise/score",
    "title": "사용자의 점수 업데이트",
    "name": "PatchScore",
    "group": "운동",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "query": [
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "score",
        "description": "<p>사용자의 점수</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>사용자의 가장 높은 점수</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tscore: 150\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/exercise/exercise.controller.js",
    "groupTitle": "운동"
  },
  {
    "type": "patch",
    "url": "/api/v1/exercise",
    "title": "운동 데이터 업데이트",
    "name": "UpdateTodayExercise",
    "group": "운동",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "calorie",
        "description": "<p>사용자의 소모한 칼로리</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "km",
        "description": "<p>사용자의 달린 거리</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "time",
        "description": "<p>사용자의 달린 시간(초)</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>오늘 날짜</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "calorie",
            "description": "<p>사용자의 오늘 소모한 칼로리</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "km",
            "description": "<p>사용자의 오늘 달린 거리</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>사용자의 오늘 달린 시간(초)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tcalorie:10\n\tkm:0.045,\n\ttime: 4312,\n\tdate:\"2021-09-13\"\t\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/exercise/exercise.controller.js",
    "groupTitle": "운동"
  },
  {
    "type": "post",
    "url": "/api/v1/exercise/img",
    "title": "운동 이미지 업로드",
    "name": "UploadExerciseImage",
    "group": "운동",
    "version": "1.0.0",
    "body": [
      {
        "group": "Body",
        "type": "File",
        "optional": false,
        "field": "image",
        "description": "<p>Image File</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>multipart/form-data</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"result\" : true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/exercise/exercise.controller.js",
    "groupTitle": "운동"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/new",
    "title": "새 계정 생성",
    "name": "CreateNewUser",
    "group": "인증",
    "version": "1.0.0",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "username",
        "description": "<p>생성할 이름</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "email",
        "description": "<p>생성할 이메일</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "password",
        "description": "<p>생성할 비밀번호</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\ttoken:\"eyJwe...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "인증"
  },
  {
    "type": "delete",
    "url": "/api/v1/auth/local",
    "title": "사용자 삭제",
    "name": "DeletePassword",
    "group": "인증",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "password",
        "description": "<p>사용자의 비밀번호</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tresult: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "인증"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/local",
    "title": "로그인",
    "name": "Login",
    "group": "인증",
    "version": "1.0.0",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "email",
        "description": "<p>이메일</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "password",
        "description": "<p>비밀번호</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>사용자의 토큰</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "username",
            "description": "<p>이름 등록 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "profile",
            "description": "<p>프로필 이미지 등록 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\ttoken:\"eyJwe...\",\n\tusername : true,\n\tprofile : false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "인증"
  },
  {
    "type": "patch",
    "url": "/api/v1/auth/password",
    "title": "비밀번호 변경",
    "name": "UpdatePassword",
    "group": "인증",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "currentPasswrod",
        "description": "<p>현재 비밀번호</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "changePassword",
        "description": "<p>변경할 비밀번호</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tresult: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "인증"
  },
  {
    "type": "patch",
    "url": "/api/v1/auth/by-username/:username",
    "title": "이름 업데이트",
    "name": "UpdateUsername",
    "group": "인증",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 토큰</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>업데이트할 이름</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\tresult: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/auth/auth.controller.js",
    "groupTitle": "인증"
  },
  {
    "type": "post",
    "url": "/api/v1/friend",
    "title": "친구추가",
    "name": "AddFriendList",
    "group": "친구",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "reqType",
        "description": "<p>요청타입 email 또는 username</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "username",
        "description": "<p>(옵션) 요청타입이 username인 경우 추가할 상대의 닉네임</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "email",
        "description": "<p>(옵션) 요청타입이 email인 경우 추가할 상대의 이메일</p>"
      }
    ],
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"result\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/friend/friend.controller.js",
    "groupTitle": "친구"
  },
  {
    "type": "get",
    "url": "/api/v1/friend/list",
    "title": "사용자의 친구 목록 가져오기",
    "name": "GetFriendList",
    "group": "친구",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "resType",
        "description": "<p>반환타입 지정: email 또는 username</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "friends",
            "description": "<p>친구리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공, username 반환타입:",
          "content": "HTTP/1.1 200 OK\n{\n\tfriends: [\n\t\t{username: \"Lux\"},\n\t\t{username: \"Ashe\"},\n\t\t...\n\t]\n}",
          "type": "json"
        },
        {
          "title": "성공, email 반환타입:",
          "content": "HTTP/1.1 200 OK\n{\n\tfriends: [\n\t\t{email: \"java@isnotgood.com\"},\n\t\t{email: \"kotlin@isbest.io\"},\n\t\t...\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/friend/friend.controller.js",
    "groupTitle": "친구"
  },
  {
    "type": "get",
    "url": "/api/v1/friend/roomList",
    "title": "사용자의 룸 전용 친구 목록 가져오기",
    "name": "GetFriendListRoom",
    "group": "친구",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "users",
            "description": "<p>친구들의 이메일 및 이름 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "profiles",
            "description": "<p>친구들의 프로필 사진의 고유값 리슽트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "\tHTTP/1.1 200 OK\n\t{\n\t\tusers: [\n\t \t\t{email: \"someone@example.com\", username: \"Ashe\"},\n \t],\n\t\tprofiles: [\n\t\t\t{_id: \"profileUid1\"},\n\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/friend/friend.controller.js",
    "groupTitle": "친구"
  },
  {
    "type": "get",
    "url": "/api/v1/friend/check",
    "title": "친구여부 확인",
    "name": "GetIsFriend",
    "group": "친구",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "reqType",
        "description": "<p>요청타입 email 또는 username</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "username",
        "description": "<p>(옵션) 요청타입이 username인 경우 추가할 상대의 닉네임</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "email",
        "description": "<p>(옵션) 요청타입이 email인 경우 추가할 상대의 이메일</p>"
      }
    ],
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"result\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/friend/friend.controller.js",
    "groupTitle": "친구"
  },
  {
    "type": "patch",
    "url": "/api/v1/friend",
    "title": "친구삭제",
    "name": "RemoveFriendList",
    "group": "친구",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자의 토큰</p>"
          }
        ]
      }
    },
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "reqType",
        "description": "<p>요청타입 email 또는 username</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "username",
        "description": "<p>(옵션) 요청타입이 username인 경우 추가할 상대의 닉네임</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "email",
        "description": "<p>(옵션) 요청타입이 email인 경우 추가할 상대의 이메일</p>"
      }
    ],
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>결과 true 또는 false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "성공:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"result\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "토큰 만료:",
          "content": "HTTP/1.1 419\n{\n \tcode: 5\n\terror: \"Token Expired\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/v1/friend/friend.controller.js",
    "groupTitle": "친구"
  }
] });
