// Schema for weather data
var weatherSchema = {
        "$schema": "http://json-schema.org/draft-07/schema",
        "$id": "http://explorecalifornia.com/schemas/weather.json",
        "type": "object",
        "title": "weather challenge",
        "description": "Schema for weather challenge json.",
        "default": {},
        "examples": [
            {
                "id": "3033",
                "name": "Pondicherry",
                "name_ascii": "Pondicherry",
                "lat": "11.93499371",
                "lng": "79.83000037",
                "population": "227411",
                "country_id": "88",
                "province": "Puducherry",
                "country_name": "India",
                "unit": "F",
                "season": "spring",
                "forecast": [
                    {
                        "date": "06/06/2021",
                        "temp_min": 84.91999999999999,
                        "temp_max": 85.064,
                        "season_min": 84.65,
                        "season_max": 87.35,
                        "condition_name": "rain",
                        "condition_desc": "Wet and rainy",
                        "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                        "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                    },
                    {
                        "date": "06/07/2021",
                        "temp_min": 84.704,
                        "temp_max": 85.964,
                        "season_min": 84.65,
                        "season_max": 87.35,
                        "condition_name": "sun",
                        "condition_desc": "Blue skies all day long!",
                        "condition_video": "http://explorecalifornia.org/api/media/sun_4623792.mp4",
                        "condition_icon": "http://explorecalifornia.org/api/media/sun_16240.png"
                    },
                    {
                        "date": "06/08/2021",
                        "temp_min": 84.74,
                        "temp_max": 84.83000000000001,
                        "season_min": 84.65,
                        "season_max": 87.35,
                        "condition_name": "cloudy",
                        "condition_desc": "Partially cloudy day",
                        "condition_video": "http://explorecalifornia.org/api/media/cloudy_45449.mp4",
                        "condition_icon": "http://explorecalifornia.org/api/media/cloudy_16240.png"
                    },
                    {
                        "date": "06/09/2021",
                        "temp_min": 84.812,
                        "temp_max": 86.19800000000001,
                        "season_min": 84.65,
                        "season_max": 87.35,
                        "condition_name": "rain",
                        "condition_desc": "Wet and rainy",
                        "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                        "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                    },
                    {
                        "date": "06/10/2021",
                        "temp_min": 84.758,
                        "temp_max": 86.53999999999999,
                        "season_min": 84.65,
                        "season_max": 87.35,
                        "condition_name": "cloudy",
                        "condition_desc": "Partially cloudy day",
                        "condition_video": "http://explorecalifornia.org/api/media/cloudy_45449.mp4",
                        "condition_icon": "http://explorecalifornia.org/api/media/cloudy_16240.png"
                    },
                    {
                        "date": "06/11/2021",
                        "temp_min": 85.424,
                        "temp_max": 85.65799999999999,
                        "season_min": 84.65,
                        "season_max": 87.35,
                        "condition_name": "storm",
                        "condition_desc": "Watch out for storms!",
                        "condition_video": "http://explorecalifornia.org/api/media/storm_190935.mp4",
                        "condition_icon": "http://explorecalifornia.org/api/media/storm_16240.png"
                    },
                    {
                        "date": "06/12/2021",
                        "temp_min": 84.65,
                        "temp_max": 84.776,
                        "season_min": 84.65,
                        "season_max": 87.35,
                        "condition_name": "cloudy",
                        "condition_desc": "Partially cloudy day",
                        "condition_video": "http://explorecalifornia.org/api/media/cloudy_45449.mp4",
                        "condition_icon": "http://explorecalifornia.org/api/media/cloudy_16240.png"
                    },
                    {
                        "date": "06/13/2021",
                        "temp_min": 84.65,
                        "temp_max": 85.1,
                        "season_min": 84.65,
                        "season_max": 87.35,
                        "condition_name": "rain",
                        "condition_desc": "Wet and rainy",
                        "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                        "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                    },
                    {
                        "date": "06/14/2021",
                        "temp_min": 84.704,
                        "temp_max": 86,
                        "season_min": 84.65,
                        "season_max": 87.35,
                        "condition_name": "rain",
                        "condition_desc": "Wet and rainy",
                        "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                        "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                    },
                    {
                        "date": "06/15/2021",
                        "temp_min": 84.704,
                        "temp_max": 84.884,
                        "season_min": 84.65,
                        "season_max": 87.35,
                        "condition_name": "rain",
                        "condition_desc": "Wet and rainy",
                        "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                        "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                    },
                    {
                        "date": "06/16/2021",
                        "temp_min": 84.704,
                        "temp_max": 84.704,
                        "season_min": 84.65,
                        "season_max": 87.35,
                        "condition_name": "sun",
                        "condition_desc": "Blue skies all day long!",
                        "condition_video": "http://explorecalifornia.org/api/media/sun_4623792.mp4",
                        "condition_icon": "http://explorecalifornia.org/api/media/sun_16240.png"
                    }
                ]
            }
        ],
        "required": [
            "id",
            "name",
            "name_ascii",
            "lat",
            "lng",
            "population",
            "country_id",
            "province",
            "country_name",
            "unit",
            "season",
            "forecast"
        ],
        "properties": {
            "id": {
                "$id": "#/properties/id",
                "type": "string",
                "title": "The id schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "3033"
                ]
            },
            "name": {
                "$id": "#/properties/name",
                "type": "string",
                "title": "The name schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "Pondicherry"
                ]
            },
            "name_ascii": {
                "$id": "#/properties/name_ascii",
                "type": "string",
                "title": "The name_ascii schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "Pondicherry"
                ]
            },
            "lat": {
                "$id": "#/properties/lat",
                "type": "string",
                "title": "The lat schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "11.93499371"
                ]
            },
            "lng": {
                "$id": "#/properties/lng",
                "type": "string",
                "title": "The lng schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "79.83000037"
                ]
            },
            "population": {
                "$id": "#/properties/population",
                "type": "string",
                "title": "The population schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "227411"
                ]
            },
            "country_id": {
                "$id": "#/properties/country_id",
                "type": "string",
                "title": "The country_id schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "88"
                ]
            },
            "province": {
                "$id": "#/properties/province",
                "type": "string",
                "title": "The province schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "Puducherry"
                ]
            },
            "country_name": {
                "$id": "#/properties/country_name",
                "type": "string",
                "title": "The country_name schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "India"
                ]
            },
            "unit": {
                "$id": "#/properties/unit",
                "type": "string",
                "title": "The unit schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "F"
                ]
            },
            "season": {
                "$id": "#/properties/season",
                "type": "string",
                "title": "The season schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "spring"
                ]
            },
            "forecast": {
                "$id": "#/properties/forecast",
                "type": "array",
                "title": "The forecast schema",
                "description": "An explanation about the purpose of this instance.",
                "default": [],
                "examples": [
                    [
                        {
                            "date": "06/06/2021",
                            "temp_min": 84.91999999999999,
                            "temp_max": 85.064,
                            "season_min": 84.65,
                            "season_max": 87.35,
                            "condition_name": "rain",
                            "condition_desc": "Wet and rainy",
                            "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                            "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                        },
                        {
                            "date": "06/07/2021",
                            "temp_min": 84.704,
                            "temp_max": 85.964,
                            "season_min": 84.65,
                            "season_max": 87.35,
                            "condition_name": "sun",
                            "condition_desc": "Blue skies all day long!",
                            "condition_video": "http://explorecalifornia.org/api/media/sun_4623792.mp4",
                            "condition_icon": "http://explorecalifornia.org/api/media/sun_16240.png"
                        }
                    ]
                ],
                "items": {
                    "$id": "#/properties/forecast/items",
                    "anyOf": [
                        {
                            "$id": "#/properties/forecast/items/anyOf/0",
                            "type": "object",
                            "title": "The first anyOf schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": {},
                            "examples": [
                                {
                                    "date": "06/06/2021",
                                    "temp_min": 84.91999999999999,
                                    "temp_max": 85.064,
                                    "season_min": 84.65,
                                    "season_max": 87.35,
                                    "condition_name": "rain",
                                    "condition_desc": "Wet and rainy",
                                    "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                                    "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                                }
                            ],
                            "required": [
                                "date",
                                "temp_min",
                                "temp_max",
                                "season_min",
                                "season_max",
                                "condition_name",
                                "condition_desc",
                                "condition_video",
                                "condition_icon"
                            ],
                            "properties": {
                                "date": {
                                    "$id": "#/properties/forecast/items/anyOf/0/properties/date",
                                    "type": "string",
                                    "title": "The date schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": "",
                                    "examples": [
                                        "06/06/2021"
                                    ]
                                },
                                "temp_min": {
                                    "$id": "#/properties/forecast/items/anyOf/0/properties/temp_min",
                                    "type": "number",
                                    "title": "The temp_min schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0.0,
                                    "examples": [
                                        84.91999999999999
                                    ]
                                },
                                "temp_max": {
                                    "$id": "#/properties/forecast/items/anyOf/0/properties/temp_max",
                                    "type": "number",
                                    "title": "The temp_max schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0.0,
                                    "examples": [
                                        85.064
                                    ]
                                },
                                "season_min": {
                                    "$id": "#/properties/forecast/items/anyOf/0/properties/season_min",
                                    "type": "number",
                                    "title": "The season_min schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0.0,
                                    "examples": [
                                        84.65
                                    ]
                                },
                                "season_max": {
                                    "$id": "#/properties/forecast/items/anyOf/0/properties/season_max",
                                    "type": "number",
                                    "title": "The season_max schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": 0.0,
                                    "examples": [
                                        87.35
                                    ]
                                },
                                "condition_name": {
                                    "$id": "#/properties/forecast/items/anyOf/0/properties/condition_name",
                                    "type": "string",
                                    "title": "The condition_name schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": "",
                                    "examples": [
                                        "rain"
                                    ]
                                },
                                "condition_desc": {
                                    "$id": "#/properties/forecast/items/anyOf/0/properties/condition_desc",
                                    "type": "string",
                                    "title": "The condition_desc schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": "",
                                    "examples": [
                                        "Wet and rainy"
                                    ]
                                },
                                "condition_video": {
                                    "$id": "#/properties/forecast/items/anyOf/0/properties/condition_video",
                                    "type": "string",
                                    "title": "The condition_video schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": "",
                                    "examples": [
                                        "http://explorecalifornia.org/api/media/rain_28580841.mp4"
                                    ]
                                },
                                "condition_icon": {
                                    "$id": "#/properties/forecast/items/anyOf/0/properties/condition_icon",
                                    "type": "string",
                                    "title": "The condition_icon schema",
                                    "description": "An explanation about the purpose of this instance.",
                                    "default": "",
                                    "examples": [
                                        "http://explorecalifornia.org/api/media/rain_16240.png"
                                    ]
                                }
                            },
                            "additionalProperties": true
                        }
                    ]
                }
            }
        },
        "additionalProperties": true
};
