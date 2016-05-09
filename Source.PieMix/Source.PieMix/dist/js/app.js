﻿angular.module('pieMixSample', ['piemix.modules'])
.controller('piemixCController', ["$scope", "$timeout", function ($scope, $timeout) {
    var self = this;

    var pieData = [
        {
            'id': '1001', 'title': '# c0392b', 'value': 20, 'color': '#c0392b', 'child': [
                {
                    'id': '101', 'title': '# 34495e', 'value': 80, 'color': '#34495e', 'child': [
                        {
                            'id': '201', 'title': '# 3498db', 'value': 80, 'color': '#3498db', 'child': [
                                { 'id': '301', 'title': '# f39c12', 'value': 10, 'color': '#f39c12' },
                                { 'id': '302', 'title': '# 000000', 'value': 10, 'color': '#000000' },
                                { 'id': '303', 'title': '# f39c12', 'value': 10, 'color': '#f39c12' },
                                { 'id': '304', 'title': '# 000000', 'value': 10, 'color': '#000000' },
                                { 'id': '305', 'title': '# f39c12', 'value': 10, 'color': '#f39c12' },
                                { 'id': '306', 'title': '# 000000', 'value': 10, 'color': '#000000' },
                                { 'id': '307', 'title': '# f39c12', 'value': 10, 'color': '#f39c12' },
                                { 'id': '308', 'title': '# 000000', 'value': 10, 'color': '#000000' },
                                { 'id': '309', 'title': '# f39c12', 'value': 10, 'color': '#f39c12' },
                                { 'id': '310', 'title': '# 000000', 'value': 10, 'color': '#000000' },
                                //{ 'id': '301', 'title': '# f39c12', 'value': 67, 'color': '#f39c12' },
                                //{ 'id': '302', 'title': '# e74c3c', 'value': 33, 'color': '#e74c3c' }
                            ]
                        },
                        { 'id': '202', 'title': '# 9b59b6', 'value': 20, 'color': '#9b59b6' }
                    ]
                },
                { 'id': '102', 'title': '# 2ecc71', 'value': 10, 'color': '#2ecc71' },
                { 'id': '103', 'title': '# 16a085', 'value': 10, 'color': '#16a085' }
            ]
        }
    ];

    var pieData2 = [
        { 'id': '101', 'title': '# 34495e', 'value': 60, 'color': '#34495e' },
        { 'id': '102', 'title': '# 2ecc71', 'value': 20, 'color': '#2ecc71' },
        { 'id': '103', 'title': '# 16a085', 'value': 20, 'color': '#16a085' }
    ];

    self.pieDataSample = pieData;

    self.config = {
        'baseRadius': 80,
        'radiusIncrementFactor': 0.50,
        'gapToLabel': 60,
        'strokeWidth': 3,
        'showLabels': true,
        'strokeColor': '#fff',
        'showStrokeCircleAtCenter': true
    }

    self.config.pieSliceClicked = function (data) {
        console.log('pieSliceClicked');
        console.log(data);
    }

    self.config2 = {
        'baseRadius': 80,
        'radiusIncrementFactor': 0.50,
        'gapToLabel': 60,
        'strokeWidth': 0,
        'showLabels': true,
        'strokeColor': '#fff',
        'showStrokeCircleAtCenter': true
    }

    self.sampleHighlight = function () {
        self.config.highlightPie('103');
    }

    self.sampleDehighlight = function() {
        self.config.dehighlightPie('103');
    }

    self.sliceClick = function (data) {
        console.log(data);
    }

    var incr = 0;
    self.changePie = function () {
        if (incr % 2 == 0)
            self.pieDataSample = pieData2;
        else
            self.pieDataSample = pieData;
        incr = incr + 1;
    }

    var incr2 = 0;
    self.radiusIncrementFactorChnage = function () {
        if (incr2 % 2 == 0)
            self.config['radiusIncrementFactor'] = 0.66;
        else
            self.config['radiusIncrementFactor'] = 0.33;
        incr2 = incr2 + 1;
    }

}]);