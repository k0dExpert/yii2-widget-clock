<?php


namespace kodexpert\yii2\widget\clock;

use yii\web\AssetBundle;

class ClockAsset extends AssetBundle
{
    public $sourcePath = '@vendor/kodexpert/yii2-widget-clock/assets';
    public $css = [
        'css/clock.css',
    ];

    public $js = [
        'js/clock.js',
    ];
}