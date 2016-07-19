import Vue from 'vue';
import Docs from './docs';
import './core/core';
import MdTheme from './components/mdTheme';
import MdInkRipple from './components/mdInkRipple';
import MdButton from './components/mdButton';
import MdButtonToggle from './components/mdButtonToggle';
import MdIcon from './components/mdIcon';
import MdBottomBar from './components/mdBottomBar';
import MdToolbar from './components/mdToolbar';
import MdSidenav from './components/mdSidenav';

Vue.use(MdInkRipple);
Vue.use(MdButton);
Vue.use(MdButtonToggle);
Vue.use(MdIcon);
Vue.use(MdBottomBar);
Vue.use(MdToolbar);
Vue.use(MdSidenav);

Vue.use(MdTheme, {
  'bottom-bar': {
    primary: 'teal'
  }
});

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { Docs }
});
