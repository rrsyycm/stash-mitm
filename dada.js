(() => {
    console.log("Dada-测试")
    let body = $response.body;         // 获取响应文本
    let obj = JSON.parse(body);        // 转为对象

// === 在这里修改数据 ===
    obj.content.order = [{
        "earnings": "5.93",
        "totalEarnings": "5.93",
        "extendEarningDetail": "",
        "noFirstOrderTotalEarnings": "5.93",
        "noFirstOrderExtendEarningDetail": "",
        "noFirstOrderRewardEraning": "5.93",
        "orders": [{
            "totalEarnings": "5.93",
            "extendEarningDetail": "",
            "orderTypeTags": [],
            "activityTags": [],
            "baseTags": [{
                "id": 100010,
                "name": "必达单",
                "fontColor": "#FF6060",
                "borderColor": "#FF6060",
                "backGroundColor": "",
                "desc": "平台重要订单，请按规范流程准时、安全、礼貌配送",
                "icon": "",
                "activityType": null
            }, {
                "id": 2153,
                "name": "畅跑单",
                "fontColor": "#333333",
                "borderColor": "#333333",
                "backGroundColor": "",
                "desc": "仅需满足最低缴纳押金条件即可接单",
                "icon": "",
                "activityType": null
            }],
            "goodInfo": {
                "goodLists": [{
                    "cargoName": "茉莉拿铁咖啡(新) 默认", "cargoNum": 1
                }, {
                    "cargoName": "茉莉绿茶-3杯装 默认", "cargoNum": 1
                }],
                "cargoName": "饮料",
                "cargoWeight": "1公斤",
                "cargoTotalNum": "2件",
                "privacyCargo": false,
                "privacyDesc": ""
            },
            "finishTimeStr": "<font color='#ff6600'><b>32分钟内</b></font><font color='#333333'><b>(15:20前)送达</b></font>",
            "orderDetailExtendInfo": null,
            "id": 427042204765996,
            "earnings": "5.93",
            "noFirstOrderRewardEraning": "5.93",
            "tips": "0.00",
            "firstOrderReward": null,
            "firstOrderRewardDesc": null,
            "recommendScoreCountDown": 0,
            "recommendScoreTitle": "冲单奖推荐指数",
            "hints": "",
            "tags": [],
            "hidePrice": false,
            "customerExpectFinishTime": "15:20:00",
            "isEarlyFinished": false,
            "transferToHallOrderInfo": {
                "transferOrderType": 0,
                "timeOutSecond": null,
                "transferFee": null,
                "transferStatus": 0,
                "transferStatusV2": 0
            },
            "expectDadaScoreVo": null,
            "maskHouseNumberEnable": null,
            "buildingNo": null,
            "order_time_limit_string": null,
            "color_order": null,
            "display_tags": [{
                "color": "#FF3729", "name": "必达单", "id": 2301, "bgColor": null, "borderColor": null, "newStyle": null
            }, {
                "color": "#008CFF",
                "name": "秒送冲单",
                "id": 100296,
                "bgColor": null,
                "borderColor": null,
                "newStyle": null
            }, {
                "color": "#008CFF", "name": "畅跑单", "id": 2153, "bgColor": null, "borderColor": null, "newStyle": null
            }, {
                "color": "#008CFF",
                "name": "等级加分",
                "id": 2065,
                "bgColor": null,
                "borderColor": null,
                "newStyle": null
            }, {
                "color": "#008CFF",
                "name": "京东秒送",
                "id": 100079,
                "bgColor": null,
                "borderColor": null,
                "newStyle": null
            }],
            "expect_fetch_time": 1759043204,
            "is_high_value_order": 0,
            "rookie_order_type": 0,
            "order_info": "店铺订单:#6 【JD338293959917】",
            "order_status": 1,
            "order_status_string": "待接单",
            "origin_order_time_limit_string": "32分钟内送达",
            "dynamic_order_time_limit_string": "",
            "order_type": 1,
            "order_value": "16.90",
            "order_weight": 1,
            "pay_type": 2,
            "receiver_distance": 2892,
            "receiver_address": "内蒙古呼伦贝尔市满洲里市第一街道富豪城6号楼7单元7**",
            "receiver_lat": "49.592946",
            "receiver_lng": "117.445539",
            "source_from": "jdDj",
            "supplier_address": "内蒙古自治区呼伦贝尔市满洲里市北区体园小区1号楼1-3",
            "supplier_lat": "49.588403",
            "supplier_lng": "117.479114",
            "supplier_name": "蜜雪冰城（满洲里市怡园小区店）",
            "unique_label_type": 0,
            "order_label_ids": [2208, 931, 100005, 100295, 871, 1321, 2153, 100296, 100043, 100331, 587, 100298, 100300, 100236, 100079, 1425, 49, 2065, 2291, 2580, 2394, 100029, 100062],
            "app_list_type": -999,
            "cargo_type": 2,
            "cargo_type_string": {},
            "create_time": -999,
            "deliver_fee_rule_id": -999,
            "finish_time": -999,
            "finish_time_limit": -999,
            "force_deliver_photo": -999,
            "force_fetch_photo": -999,
            "grade_score": "",
            "grade_score_value": -999,
            "insurance_fee_reward": 0,
            "is_red_packet_order": "",
            "need_training_url": "",
            "order_deliver_time": -999,
            "order_frozen_capital": -999,
            "order_receipt_url": "",
            "supplier_id": -999,
            "order_rich_info": ""
        }],
        "type": 1,
        "tags": [],
        "hidePrice": false,
        "expectDadaScoreVo": null,
        "countDownSecond": null,
        "taskType": null,
        "weakAssignRecordId": null,
        "finishTimeStr": "<font color='#ff6600'><b>32分钟内</b></font><font color='#333333'><b>(15:20前)送达</b></font>",
        "maxFinishTimeStr": null,
        "task_id": 3270800000004901902,
        "confirm_content_type": 0,
        "count_orders": 1,
        "task_order_over_time_allowance": {},
        "time_limit": -999,
        "is_red_packet_task": "",
        "delivery_range": -999,
        "distance_display": -999,
        "distance_from_transporter": -999,
        "order_time_limit_string": null,
        "task_activity_tags": [],
        "orders_trip_switch": null,
        "score_label_position": 1,
        "voice_delivery_accept_output": null
    }]

// 返回修改后的数据
    $done({body: JSON.stringify(obj)});
})();