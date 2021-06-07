'use strict';

let path = require('path');

module.exports = {
  mode: 'production',      // Режим production или development
  entry: './js/script.js',  // Исходный фаил
  output: {
    filename: 'bundle.js',  // Конечный фаил созданный сборщиком
    path: __dirname + '/js'
  },
  watch: true,              // Слежение за изменениями и автокомпиляция

  devtool: "source-map",    // Создание карты

  module: { // Модули
    rules: [ // Правила
      {
        test: /\.m?js$/,                            // Находим файлы js
        exclude: /(node_modules|bower_components)/, // Исключаем файлы из выборки
        use: {                                      // Описываем что и как мы будем использовать
          loader: 'babel-loader',
          options: {                                // Опции которые будут использоваться
            presets: [['@babel/preset-env', {       // Выбор и настройка присета
                debug: true,                        // Включаем дебаг
                corejs: 3,                          // Добавляем библиотеку corejs для полифилов и указываем версию
                useBuiltIns: "usage"                // Выбираем полифилы только те, которые нам нужны
            }]]
          }
        }
      }
    ]
  }
};
