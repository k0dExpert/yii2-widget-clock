<?php


namespace kodexpert\yii2\widget\clock;


use yii\base\Widget;
use yii\helpers\Html;

class Clock extends Widget
{
    public $pluginName = 'clock';

    public function run()
    {
        $this->registerAssets();

        $lines = [];
        $lines[] = Html::tag('li', '00', ['class' => 'hours-clock']);
        $lines[] = Html::tag('li', ':', ['class' => 'sep-clock']);
        $lines[] = Html::tag('li', '00', ['class' => 'minutes-clock']);
        $lines[] = Html::tag('li', ':', ['class' => 'sep-clock']);
        $lines[] = Html::tag('li', '00', ['class' => 'seconds-clock']);

        $output = Html::tag('div',
            Html::tag('ul', implode("\n", $lines)),
            [
                'class' => 'clock',
                'data-clock' => 'true',
                'data-time' => time()
            ]
        );


        return $output;
    }

    public function registerAssets()
    {
        $view = $this->getView();
        ClockAsset::register($view);
        $this->registerPlugin($this->pluginName);
    }
}