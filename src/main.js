import'webpack-hot-middleware/client'
import './index.html';
import sum from './sum';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

console.log('hello world');

var a = () => {
  console.log('hallo from es6');
}

console.log(sum(3, 4));

$(() => {
  console.log('jquery is ready');

  $('#root').append('<h2>Hello it is working</h2>');
  $('#root').append('<button type="button" class="btn btn-primary">Primary</button>');
});
