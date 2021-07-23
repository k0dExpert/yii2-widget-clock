<?php


namespace kodexpert\yii2\widget\clock;

use yii\web\AssetBundle;

class ClockAssets extends AssetBundle
{
    public function init()
    {
        $this->setSourcePath(__DIR__ . '/../assets');
        $this->setupAssets('css', ['css/clock.css']);
        $this->setupAssets('js', ['js/clock.js']);
        parent::init();
    }
}