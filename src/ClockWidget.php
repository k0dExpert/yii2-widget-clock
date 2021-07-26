<?php


namespace kodexpert\yii2\widget\clock;


use yii\base\Widget;
use yii\helpers\Html;

class ClockWidget extends Widget
{
    public $pluginName = 'clock';

    public function run()
    {
        $this->registerAssets();


        $date = [];
        $date[] = Html::tag('span', '01', ['class' => 'day-clock']);
        $date[] = Html::tag('span', '01', ['class' => 'month-clock']);
        $date[] = Html::tag('span', '2021', ['class' => 'year-clock']);

        $time = [];
        $time[] = Html::tag('span', '00', ['class' => 'hours-clock']);
        $time[] = Html::tag('span', ':', ['class' => 'sep-clock']);
        $time[] = Html::tag('span', '00', ['class' => 'minutes-clock']);
        $time_output = Html::tag('span', implode("", $time), ['class' => 'time-clock']);


        $output = Html::tag('div',
            'UTC: ' .
            implode(".", $date) .
            ',&nbsp;' .
            $time_output,
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
    }
}